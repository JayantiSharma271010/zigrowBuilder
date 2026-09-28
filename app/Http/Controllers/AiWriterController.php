<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
use App\Services\TokenCreditBridge;

class AiWriterController extends Controller
{
    public function generate(Request $request, TokenCreditBridge $bridge)
    {
       $request->validate([
    'action'      => 'required|string|in:write,rewrite,expand,shorten,improve,transform,catchy,grammar',
    'tone'        => 'nullable|string|max:50',
    'text'        => 'required|string|max:8000',
    'hint'        => 'nullable|string|max:12000',
    'userMessage' => 'nullable|string|max:12000',
    'temperature' => 'nullable|numeric|min:0|max:2',
    'maxTokens'   => 'nullable|integer|min:1|max:4000',
]);

        $userId = Auth::id();

        // 1) HARD STOP: check remaining tokens based on remaining credits (your 3-value model)
        $status = $bridge->status($userId); // make sure your bridge has a status() that returns statusPayload

        if ((int)($status['remaining_tokens'] ?? 0) <= 0) {
            return response()->json([
                'message' => 'Token limit exhausted. Please upgrade or buy credits.'
            ], 402);
        }

        // 2) Build prompt
        $action = $request->input('action');
        $tone   = $request->input('tone') ?? 'default';
        $text   = $request->input('text');

        // Use the frontend's hint (action-specific system prompt) if provided,
        // otherwise fall back to a generic system prompt.
        $frontendHint = $request->input('hint');
        $system = $frontendHint
            ? $frontendHint
            : "You are an AI writing assistant for a website builder. Follow the user's action and tone.";

     $userPrompt = $request->input('userMessage')
    ?: "Action: {$action}\nTone: {$tone}\n\nText:\n{$text}\n\nReturn only the improved text.";

        // Use frontend-supplied temperature/maxTokens when available
        $temperature = $request->input('temperature') ?? 0.7;
        $maxTokens   = $request->input('maxTokens')   ?? 120;

        // 3) Call OpenAI from backend (API key stays in .env)
        $resp = Http::withToken(config('services.openai.key'))
            ->timeout(30)
            ->post('https://api.openai.com/v1/chat/completions', [
                'model' => $request->input('model', 'gpt-4o-mini'),
                'messages' => [
                    ['role' => 'system', 'content' => $system],
                    ['role' => 'user', 'content' => $userPrompt],
                ],
                'temperature' => (float) $temperature,
                'max_tokens'  => (int) $maxTokens,
            ]);

        if (!$resp->ok()) {
            return response()->json([
                'message' => 'AI request failed',
                'details' => $resp->json(),
            ], $resp->status());
        }

        $data = $resp->json();

        $outText = trim($data['choices'][0]['message']['content'] ?? '');
        $usedTokens = (int)($data['usage']['total_tokens'] ?? 0);

        // 4) Consume tokens using your existing bridge (this will reduce credits after each 5000)
        if ($usedTokens > 0) {
            $consumeResult = $bridge->consumeTextEditorTokens($userId, $usedTokens);

            // If your consume returns an error payload/flag when exhausted, enforce it:
            if (!empty($consumeResult['error'])) {
                return response()->json([
                    'message' => $consumeResult['error']
                ], 402);
            }

            // Refresh status to return latest values
            $status = $bridge->status($userId);
        }

        return response()->json([
            'text' => $outText,
            'usedTokens' => $usedTokens,
            'tokenStatus' => $status,
        ]);
    }
}
