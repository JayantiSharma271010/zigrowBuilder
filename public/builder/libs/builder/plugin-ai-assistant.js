
// New Code for Ai Writer Api

window.AIWriterAPI = {
  async generate({ action, tone, selectedText, userPrompt,  context }) {
    const cfg = window.chatgptOptions || {};
    // if (!cfg.key) throw new Error("No API key configured");

    const AI_DEBUG = true; // false kar do prod me

    // -----------------------------
    // Helpers
    // -----------------------------
    const countWords = (s = "") =>
      s.trim().split(/\s+/).filter(Boolean).length;

    const normalizeTone = (t) => {
      const toneKey = (t || "default").toLowerCase();

      const presets = {
        default: "Use a neutral, clear, website-friendly tone.",
        neutral: "Use a neutral, clear, website-friendly tone.",
        professional:
          "Use formal, concise, confident business language. Avoid slang.",
        friendly:
          "Use warm, conversational language. Slightly upbeat. Avoid being cheesy.",
        luxury:
          "Use premium, elegant wording. Refined and polished. Avoid casual slang.",
        bold: "Use punchy, confident short sentences. Strong verbs. No filler.",
        casual: "Use relaxed, informal wording. Natural and simple.",
        direct: "Be straight to the point. Minimal words. No fluff.",
      };

      return presets[toneKey] || `Use this tone: ${t}.`;
    };

    const getTemperature = (act) => {
      // If user configured global temperature, respect it.
      if (cfg.temperature !== undefined && cfg.temperature !== null) {
        return cfg.temperature;
      }

      const tempByAction = {
        grammar: 0.1,
        shorten: 0.25,
        expand: 0.35,
        rewrite: 0.6,
        catchy: 0.75,
        write: 0.7,
        transform: 0.55,
      };

      return tempByAction[act] ?? 0.35;
    };

    // -----------------------------
    // Pre-compute values
    // -----------------------------
    const toneGuide = normalizeTone(tone);
    const temperature = getTemperature(action);

    const srcText = (selectedText || "").trim();
    const srcWords = srcText ? countWords(srcText) : 0;

    // token budgeting (kept from your logic)
    let maxTokens = 120;
    let extraWords = 12;
    let targetShortWords = 0;

    if (action === "shorten") {
      const ratio =
        srcWords <= 12 ? 0.85 :
        srcWords <= 30 ? 0.7 :
        srcWords <= 60 ? 0.6 : 0.55;

      targetShortWords = Math.max(6, Math.round(srcWords * ratio));
      maxTokens = Math.ceil(targetShortWords * 1.6) + 30;
    }

    if (action === "expand") {
      extraWords = 10;
      if (srcWords > 30) extraWords = 12;
      if (srcWords > 60) extraWords = 15;

      const targetWords = srcWords + extraWords;
      maxTokens = Math.ceil(targetWords * 1.6) + 30;
    }

    // -----------------------------
    // Prompts
    // -----------------------------
  const buildContextText = () => {
  const ctx = context || {};

  return `
BUSINESS / TEMPLATE CONTEXT:
- Business category: ${(ctx.businessCategory || ctx.templateCategory || "").trim() || "Unknown"}
- Template category: ${(ctx.templateCategory || ctx.businessCategory || "").trim() || "Unknown"}
- Template name: ${(ctx.templateName || "").trim() || "Unknown"}
- Template source: ${(ctx.templateSource || "").trim() || "Unknown"}
- Template path: ${(ctx.templatePath || "").trim() || "Unknown"}
- Page type: ${(ctx.pageType || "").trim() || "Unknown"}
- Page key: ${(ctx.pageKey || "").trim() || "Unknown"}
- Page slug: ${(ctx.pageSlug || "").trim() || "Unknown"}
- Page file: ${(ctx.pageFile || "").trim() || "Unknown"}
- Section type: ${(ctx.sectionType || "").trim() || "Unknown"}
- Section id: ${(ctx.sectionId || "").trim() || "Unknown"}
- Element type: ${(ctx.elementType || "").trim() || "Unknown"}
- Element tag: ${(ctx.elementTag || "").trim() || "Unknown"}
`.trim();
};

const buildElementRules = () => {
  const elementType = (context?.elementType || "").toLowerCase();

  if (elementType === "faq-question") {
  return `
ELEMENT RULE:
This output is for an FAQ question.
Keep it written as a clear customer question.
It should end with a question mark.
Keep it short, natural, and relevant to the business category.
Do not write the answer here.
`.trim();
}

if (elementType === "faq-answer") {
  return `
ELEMENT RULE:
This output is for an FAQ answer.
Answer clearly and helpfully.
Keep it concise, trustworthy, and relevant to the business category.
Do not write a new question.
Do not add labels like "Answer:".
`.trim();
}

if (elementType === "question") {
  return `
ELEMENT RULE:
This output is a question.
Keep it written as a clear question.
It should end with a question mark.
Do not answer the question.
`.trim();
}

if (elementType === "answer") {
  return `
ELEMENT RULE:
This output is an answer.
Keep it clear, helpful, and concise.
Do not convert it into a question.
Do not add labels like "Answer:".
`.trim();
}

  if (elementType === "button") {
    return `
ELEMENT RULE:
This output is for a button or CTA.
Keep it short, action-focused, and natural.
Usually 1 to 4 words.
`.trim();
  }

  if (elementType === "heading") {
    return `
ELEMENT RULE:
This output is for a heading.
Keep it clear, strong, concise, and suitable for a website section.
`.trim();
  }

  if (elementType === "paragraph") {
    return `
ELEMENT RULE:
This output is for a paragraph.
Keep it clear, helpful, website-friendly, and easy to read.
`.trim();
  }

  if (elementType === "list-item") {
    return `
ELEMENT RULE:
This output is for a list item.
Keep it short, specific, and parallel in style.
`.trim();
  }

  return `
ELEMENT RULE:
Keep the output suitable for the selected website element.
`.trim();
};

const buildSystemPrompt = () => {
  const contextText = buildContextText();
  const elementRules = buildElementRules();

  const baseRules = `
You are an expert website copywriter inside a website builder.

Your job:
1. Read the selected text.
2. Read the business/template context.
3. Check if the selected text matches the business category, page, section, and element.
4. If the selected text is generic, placeholder, lorem ipsum, unrelated, or from another industry, convert it into relevant copy for the business category.
5. Then apply the selected AI action.
6. Return only the final website copy.

Important rules:
- Do not mention that the old text was unrelated.
- Do not explain your work.
- Do not add labels.
- Do not add quotes around the answer.
- Do not return multiple options unless the user asks for options.
- Keep the copy suitable for the section type and element type.
- If the selected text is a question, keep the output as a question.
- If the selected text is an answer, keep the output as an answer.
- If the section type is FAQ, keep FAQ questions as questions and FAQ answers as answers.
- If business category is Unknown, improve the text as general website copy.

Tone guide:
${toneGuide}

${contextText}

${elementRules}
`.trim();

  const actionRules = {
    transform: `
ACTION: Transform

Apply the user's instruction naturally to the selected text.
The user's instruction is the main task.
Also keep the result relevant to the business category, page, section, and element type.

If the user asks for a format, style, length, language, translation, rewrite, summary, or conversion, follow it naturally.

Output ONLY the final transformed text.
`.trim(),

    rewrite: `
ACTION: Rewrite

Rewrite the selected text with better clarity, flow, and website quality.
If the selected text does not match the business category, rewrite it for the business category instead.
Keep the original meaning only when the original text is already relevant.

Output ONLY the rewritten text.
`.trim(),

    shorten: `
ACTION: Shorten

Shorten the selected text while keeping the main message.
If the selected text does not match the business category, first make it relevant, then keep it concise.
Do not add extra details.
Output as one clean line or paragraph.

Output ONLY the shortened text.
`.trim(),

    expand: `
ACTION: Expand

Expand the selected text slightly with useful, relevant detail.
If the selected text does not match the business category, first make it relevant to the business category, then expand it.
Do not add generic motivational lines.
Do not create a long paragraph unless the selected text needs it.

Output ONLY the expanded text.
`.trim(),

    catchy: `
ACTION: Make it catchy

Make the copy more catchy, punchy, and marketing-friendly.
If the selected text does not match the business category, create catchy copy for the business category and selected section.
Avoid spammy wording.

Output ONLY the catchy text.
`.trim(),

    grammar: `
ACTION: Fix grammar

Fix grammar, spelling, punctuation, and sentence clarity.
If the selected text is placeholder, lorem ipsum, unrelated, or from the wrong industry, replace it with clean business-category-relevant website copy.
Keep it suitable for the selected element.

Output ONLY the corrected text.
`.trim(),

    write: `
ACTION: Write

Write fresh website copy using the user's instruction and business/template context.
Do not depend on selected text if it is empty, placeholder, or irrelevant.
Make the result suitable for the selected page, section, and element.

Output ONLY the final text.
`.trim(),
  };

  return `
${baseRules}

${actionRules[action] || actionRules.rewrite}
`.trim();
};


//     try {
//   const res = await window.AIWriterAPI.generate(opts);
// } catch (e) {
 
//   throw e;
// }

const buildUserContent = () => {
  if (action === "transform") {
    return `
USER PROMPT:
${(userPrompt || "").trim()}

SELECTED TEXT:
${srcText}

Return only the final transformed text.
    `.trim();
  }

  if (action === "write") {
    return `
USER PROMPT:
${(userPrompt || "").trim()}

SELECTED TEXT:
${srcText}

Write the final website copy.
Return only the final text.
    `.trim();
  }

  return `
SELECTED TEXT:
${srcText}

USER INSTRUCTION:
${(userPrompt || "").trim()}

Return only the final text.
    `.trim();
};


//     if (AI_DEBUG) {
//   console.groupCollapsed(
//     `%c[AI REQUEST] ${action.toUpperCase()} | tone: ${tone}`,
//     "color:#6366f1;font-weight:bold"
//   );

//   console.log("Action:", action);
//   console.log("Tone:", tone);
//   console.log("Temperature:", temperature);
//   console.log("Max tokens:", maxTokens);

//   console.log("Selected text:", selectedText);
//   console.log("User prompt:", userPrompt);

//   console.log("System prompt:", buildSystemPrompt());
//   console.log("User message:", buildUserContent());

//   console.groupEnd();
// }


    // const payload = {
    //   model: cfg.model || "gpt-4o-mini",
    //   temperature,
    //   max_tokens: maxTokens,
    //   messages: [
    //     { role: "system", content: buildSystemPrompt() },
    //     { role: "user", content: buildUserContent() },
    //   ],
    // };

    // -----------------------------
    // Request
    // -----------------------------
//     const res = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${cfg.key}`,
//       },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();
//     if (!res.ok) {
//       const msg = data?.error?.message || "OpenAI request failed";
//       throw new Error(msg);
//     }

//     let text = data.choices?.[0]?.message?.content?.trim() || "";

 
// const inputCount = countWords(srcText);
// const outputCount = countWords(text);
// const intent = (userPrompt || "").toLowerCase();

// const wantsShorter = /short|brief|concise|smaller|less/i.test(intent);
// const wantsLonger = /longer|expand|elaborate|more detail/i.test(intent);

// // 🔁 Silent retry ONCE if rule breaks
// if (
//   action === "transform" &&
//   (
//     (wantsShorter && outputCount >= inputCount) ||
//     (wantsLonger && outputCount <= inputCount)
//   )
// ) {
//   // if (AI_DEBUG) {
//   //   console.warn("[AI RETRY] Output violated length intent. Retrying...");
//   // }

//   const retryPayload = {
//     ...payload,
//     messages: [
//       payload.messages[0],
//       {
//         role: "user",
//         content: `
// Your previous output did not follow the length requirement.

// Original word count: ${inputCount}
// Your output word count: ${outputCount}

// Rewrite again and FIX THIS.
// Return ONLY the corrected text.
//         `.trim(),
//       },
//     ],
//   };

//   const retryRes = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${cfg.key}`,
//     },
//     body: JSON.stringify(retryPayload),
//   });

//   const retryData = await retryRes.json();
//   text =
//     retryData.choices?.[0]?.message?.content?.trim() || text;
// }

//     const usedTokens = data.usage?.total_tokens || 0;

// //     if (AI_DEBUG) {
// //   console.groupCollapsed(
// //     `%c[AI RESPONSE] ${action.toUpperCase()}`,
// //     "color:#16a34a;font-weight:bold"
// //   );

// //   console.log("Output text:", text);
// //   console.log("Used tokens:", usedTokens);
// //   console.log("Full usage:", data.usage);

// //   console.groupEnd();
// // }

// // if (AI_DEBUG) {
// //   console.table({
// //     action,
// //     tone,
// //     temperature,
// //     input_words: (selectedText || "").split(/\s+/).length,
// //     output_words: (text || "").split(/\s+/).length,
// //     input_preview: selectedText?.slice(0, 80),
// //     output_preview: text?.slice(0, 80),
// //   });
// // }



//     // Keep your expand punctuation safeguard
//     if (action === "expand" && text && !/[.!?]$/.test(text)) text += ".";

//     return { text, usedTokens, usage: data.usage || {} };
await window.ZigrowTokenAPI._ensureCsrf();
const status = await window.ZigrowTokenAPI.status();

if (Number(status?.remaining_tokens ?? 0) <= 0) {
  throw new Error("Token limit exhausted. Please upgrade to continue.");
}

const xsrf = window.ZigrowTokenAPI._xsrfHeader();

if (AI_DEBUG) {
  console.groupCollapsed(
    `%c[AI WRITER PAYLOAD] ${action}`,
    "color:#5b3df2;font-weight:bold"
  );
  console.log("Action:", action);
  console.log("Tone:", tone);
  console.log("Selected text:", srcText);
  console.log("User prompt:", userPrompt);
  console.log("Context:", context || {});
  console.log("Business category:", context?.businessCategory || "");
  console.log("Template name:", context?.templateName || "");
  console.log("Page type:", context?.pageType || "");
  console.log("Section type:", context?.sectionType || "");
  console.log("Element type:", context?.elementType || "");
  console.log("System prompt:", buildSystemPrompt());
  console.log("User message:", buildUserContent());
  console.groupEnd();
}

const res = await fetch("/user/ai-writer/generate", {
  method: "POST",
  credentials: "include",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-XSRF-TOKEN": xsrf,
  },
body: JSON.stringify({
  action,
  tone,
  text: srcText,
  userPrompt: (userPrompt || "").trim(),

  hint: buildSystemPrompt(),
  userMessage: buildUserContent(),

  context: context || {},
  maxTokens,
  temperature,
  model: cfg.model || "gpt-4o-mini",
}),
});

const data = await window.ZigrowTokenAPI._safeJson(res);

if (!res.ok) {
  throw new Error(data?.message || "AI Writer failed");
}

if (data?.tokenStatus && window.updateTokenUI) {
  window.updateTokenUI(data.tokenStatus);
}


let text = (data.text || "").trim();
const usedTokens = Number(data.usedTokens || 0);

if (action === "expand" && text && !/[.!?]$/.test(text)) {
  text += ".";
}

return { text, usedTokens, usage: data.usage || {} };

  },
};






window.ZigrowTokenAPI ={
      _csrfReady: false,

  async _ensureCsrf() {
    if (this._csrfReady) return;

    // ✅ this sets XSRF-TOKEN cookie
    await fetch("/sanctum/csrf-cookie", {
      method: "GET",
      credentials: "include",
      headers: {
        "Accept": "application/json",
      },
    });

    this._csrfReady = true;
  },
  
  _getCookie(name) {
    const m = document.cookie.match(new RegExp("(^|;\\s*)" + name + "=([^;]*)"));
    return m ? m[2] : "";
  },

  _xsrfHeader() {
    const raw = this._getCookie("XSRF-TOKEN");
    return raw ? decodeURIComponent(raw) : "";
  },

  async _safeJson(res) {
    const text = await res.text();
    try { return JSON.parse(text); }
    catch { return { message: text?.slice(0, 200) || "Non-JSON response" }; }
  },

 async status() {
    const res = await fetch("/user/tokens/status", {
      method: "GET",
      credentials: "include",
      headers: { "Accept": "application/json" },
    });

    const data = await this._safeJson(res);
    if (!res.ok) throw new Error(data?.message || "Failed to fetch token status");

    if(window.updateTokenUI) window.updateTokenUI(data)
    return data;
  },

     async consume(tokens) {
    await this._ensureCsrf(); 

    const xsrf = this._xsrfHeader();

    const res = await fetch("/user/tokens/consume", {
      method: "POST",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-XSRF-TOKEN": xsrf, // ✅ IMPORTANT
      },
      body: JSON.stringify({ tokens: Number(tokens || 0) }),
    });

    const data = await this._safeJson(res);
    if (!res.ok) throw new Error(data?.message || "Failed to consume tokens");

    if(window.updateTokenUI) window.updateTokenUI(data)
    return data;
  },

}





// document.querySelector("#select-actions #edit-code-btn").after(generateElements('<a id="ai-assistant-btn" href="" title="AI assistant"><i class="icon-color-wand"></i></a>')[0]);

// let aiResponseTemplate = `
// <div class="response">
// 	<div class="content">

// 		<div class="card">
// 		  <div class="card-body">
// 			<h5 class="card-title">Welcome to our website!</h5>
// 			<p class="card-text">Thank you for visiting our site. We hope you find everything you need.</p>
// 			<button class="btn btn-primary">Learn More</button>
// 		  </div>
// 		</div>

// 	</div>
	
// 	<div class="ai-actions">
// 		<button type="button" class="btn btn-sm btn-outline-primary btn-insert"><i class="icon-arrow-up"></i>Insert content</button>
// 		<button type="button" class="btn btn-sm btn-outline-primary btn-replace"><i class="icon-swap-horizontal-outline"></i> Replace with</button>
// 	</div>
// </div>	
// `;
			
// let aiModalTemplate = `<div class="modal fade" id="ai-assistant-modal" tabindex="-1" role="dialog" aria-labelledby="textarea-modal" aria-hidden="true">
//   <div class="modal-dialog modal-lg" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <p class="modal-title text-primary"><i class="icon-color-wand"></i> Ai assistant</p>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
//         </button>
//       </div>
//       <div class="modal-body">
        
//         <textarea rows="3" cols="150" class="form-control mb-3"></textarea>
      
// 	    <button type="button" class="btn btn-success btn-ask-ai"><i class="icon-color-wand la-lg"></i> Ask AI</button>
// 	    <button type="button" class="btn btn-light border btn-insert-content"><i class="icon-arrow-up la-lg"></i> Insert element content</button>
		
// 		<div class="spinner-border spinner-border-sm mx-3" role="status" style="display:none">
// 		  <span class="visually-hidden">Loading...</span>
// 		</div>
		
// 		<div class="responses mt-3 pt-3 border-top" style="display:none">
// 		</div>

//       </div>
//       <div class="modal-footer">
//         <!-- <button type="button" class="btn btn-primary btn-lg btn-save" data-bs-dismiss="modal"><i class="la la-save"></i> Save</button> -->
//         <button type="button" class="btn btn-secondary btn-lg close-btn" data-bs-dismiss="modal"><i class="la la-times"></i> Close</button>
//       </div>
//     </div>
//   </div>
// </div>
// <style>
// .responses {
// 	overflow-y: auto;
//     resize: vertical;
// 	height:300px;
// 	border-top:1px solid var(--bs-border-color);
// }

// .response {
// 	margin-top:1rem;
// 	padding-top:1rem;
// 	border-bottom:1px solid var(--bs-border-color);
// }
// .response .ai-actions{
// 	margin:1rem;	
// 	text-align:right;
// }

// .response .ai-actions i {
// 	font-size: 1.15rem;
//     line-height: 1;
//     vertical-align: text-top;
// }
// `;

// document.body.append(generateElements(aiModalTemplate)[0]);

// let aiModal = document.getElementById("ai-assistant-modal");
// let bsModal = bootstrap.Modal.getOrCreateInstance(aiModal);

// aiModal.querySelector(".btn-ask-ai").addEventListener("click", function(event) {
// 	aiAssistantSendQuery();
// 	return false;
// });

// aiModal.querySelector(".btn-insert-content",).addEventListener("click", function(event) {
// 	let selectedEl = Vvveb.Builder.selectedEl;
// 	let text = selectedEl.innerHTML.trim();
// 	let textarea = aiModal.querySelector("textarea");
// 	textarea.value = textarea.value + "\n" + text;
	
// 	return false;
// });
// /*
// aiModal.querySelector(".btn-save").addEventListener("click", function(event) {
// 	let selectedEl = Vvveb.Builder.selectedEl;
// 	selectedEl.innerHTML = $("textarea", aiModal).val();
// 	$("textarea", aiModal).val("")
// });
// */
// aiModal.querySelector(".close-btn").addEventListener("click", function(event) {
// 	aiModal.querySelector("textarea").value = "";
// 	let responses =  aiModal.querySelector(".responses");
// 	responses.innerHTML = "";
// 	responses.style.display = "none";
// });

// document.getElementById("ai-assistant-btn").addEventListener("click", function(event) {
// 	bsModal.show();
	
// 	event.preventDefault();
// 	return false;
// });


// document.addEventListener("click", function(event) {
// 	let element = event.target.closest(".btn-insert");
// 	if (element) {
// 		let response = element.closest(".response")
// 		let selectedEl = Vvveb.Builder.selectedEl;

// 		let node = response.querySelector(".content");
			
// 		selectedEl.append(node);
		
// 		Vvveb.Undo.addMutation({type: 'childList', 
// 								target: node.parentNode, 
// 								addedNodes: [node], 
// 								nextSibling: node.nextSibling});

// 		event.preventDefault();	
// 		return false;
// 	}
// });

// document.addEventListener("click", function(event) {
// 	let element = event.target.closest(".btn-replace");
// 	if (element) {
// 		let response = element.closest(".response")
// 		let selectedEl  = Vvveb.Builder.selectedEl;

// 		let node = response.querySelector(".content");
		
// 		Vvveb.Undo.addMutation({type: 'childList', 
// 								target: selectedEl.parentNode, 
// 								addedNodes: [node], 
// 								removedNodes: [selectedEl], 
// 								nextSibling: selectedEl.nextSibling});

// 		selectedEl.replaceWith(node);
	
// 		event.preventDefault();	
// 		return false;
// 	}
// });

// function aiAssistantSendQuery()  {
// 		if (!chatgptOptions["key"] ) {
// 			displayToast("bg-danger", "Error", 'No ChatGPT key configured! Enter a valid key in the plugin settings page.');
// 			return;
// 		}

// 		aiModal.querySelector(".spinner-border").style.display = '';
		
// 		let selection = aiModal.querySelector("textarea").value;
		
// 		const ChatGPT = {
// 			//api_key: chatgptOptions["key"] ?? null,
// 			model: chatgptOptions["model"] ?? "gpt-3.5-turbo-instruct",
// 			/*
// 			messages: [{
// 				role: "user",
// 				content: prompt
// 			  },{
// 				role: "system",
// 				content: "You are a Bootstrap 5 Html expert."
// 			  },
// 			],
// 			*/
// 			temperature: parseInt(chatgptOptions["temperature"] ?? 0),
// 			max_tokens: parseInt(chatgptOptions["max_tokens"] ?? 300),
// 			prompt: selection,
// 			//format: "html"
// 		};

// 		fetch("https://api.openai.com/v1/completions", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: `Bearer ${chatgptOptions["key"]}`
// 			},
// 			body: JSON.stringify(ChatGPT)
// 		}).then(res => res.json()).then(data => {
// 			document.querySelector(".spinner-border", aiModal).style.display = 'none';
// 			if (data.error) {
// 				let message = '';
// 				for (name in data.error) {
// 					message += name +":" + data.error[name] + "\n";
// 				}
// 				//alert(message);
// 				displayToast("bg-danger", "Error", message);
// 				return;
// 			}
			
// 			let reply = '';
// 			for (let i = 0; i < data.choices.length; i++) {
// 				reply += data.choices[i].text + "\n";
// 			}

// 			let responses = document.querySelector(".responses");	
// 			let response = generateElements(aiResponseTemplate)[0];

			
// 			response.querySelector(".content").innerHTML = reply;
// 			responses.append(response);
// 			responses.style.display = '';
// 			response.scrollIntoViewIfNeeded();
			
// 			//$("textarea", aiModal).val(reply);
// 		}).catch(error => {
// 			aiModal.querySelector(".spinner-border").style.display = 'none';
// 			displayToast("bg-danger", "Error", error);
// 			console.log("something went wrong", error);
// 		})
// }
