# Zigrow Exit Feedback Popup Fix

## Summary
This file documents the exact changes made to `public/builder/editor.html` for the Zigrow Exit Feedback Popup trigger logic.

The fix makes the popup eligibility stricter and prevents the desktop top-edge mouse trigger from firing on normal builder topbar or control-area movement.

## What changed

### 1. Increased countdown delay
- Old delay: `30000` ms
- New delay: `45000` ms

This ensures the popup is only eligible after a longer builder session, reducing false positives.

### 2. Removed `mousemove` as a direct interaction qualifier
- Old interaction events: `["click", "keydown", "touchstart", "mousemove"]`
- New interaction events: `["click", "keydown", "touchstart"]`

`mousemove` was incorrectly making the popup eligible just by moving the mouse, even over the topbar.

### 3. Required both real interaction and elapsed time
- Old eligibility: `userInteracted || canShowByTime`
- New eligibility: `userInteracted && canShowByTime`

This ensures the popup only becomes eligible after the user has actually interacted with the builder and the minimum delay has passed.

### 4. Added strict desktop exit intent guard
Added tracking of the last mouse Y position and last mouse target, then changed the `mouseout` logic to ignore exits that:
- occur from inside the topbar/control area
- originate from a position above `120px`
- happen while a blocking modal is open

This prevents the popup from opening when the mouse moves over the topbar, logo area, save/profile/dropdown, or other builder controls.

## Exact replacement blocks

### Countdown and mouse tracking
```js
  let builderUIReady = Boolean(window.zgBuilderUiReady);
  let countdownStarted = false;
  let lastMouseY = 0;
  let lastMouseTarget = null;

  function startExitIntentCountdown() {
    if (countdownStarted) return;

    countdownStarted = true;

    console.log("[Zigrow Exit Feedback] countdown started after builder ready");

    setTimeout(function () {
      canShowByTime = true;
      console.log("[Zigrow Exit Feedback] popup is now eligible by time");
    }, 45000);
  }
```

### Interaction eligibility
```js
  ["click", "keydown", "touchstart"].forEach(function (eventName) {
    document.addEventListener(eventName, function () {
      userInteracted = true;
    }, { once: true, passive: true });
  });

  document.addEventListener("mousemove", function (event) {
    lastMouseY = event.clientY;
    lastMouseTarget = event.target;
  }, { passive: true });
```

### Eligibility gate
```js
    if (hasBlockingModalOpen()) return false;

    return userInteracted && canShowByTime;
```

### Desktop top-edge guard
```js
  function isExitIntentIgnoreTarget(element) {
    if (!(element instanceof Element)) return false;

    return Boolean(element.closest(
      "#top-panel, .topbar, .topbar-left, .topbar-center, .topbar-right, #save-btn, #topbar-menu-btn, #topbar-menu, #zp-navbar-pages, .zp-dropdown, .zg-btn, .btn, .zg-menu, .zg-sidebar, .zg-panel, .zg-modal"
    ));
  }

  document.addEventListener("mouseout", function (event) {
    if (!builderUIReady) return;
    if (hasBlockingModalOpen()) return;

    if (event.clientY > 8 || event.relatedTarget) return;
    if (lastMouseY <= 120) return;
    if (isExitIntentIgnoreTarget(event.target)) return;
    if (isExitIntentIgnoreTarget(lastMouseTarget)) return;

    openPopup("mouse_top_exit");
  });
```

## Why

This patch preserves all existing backend submission and browser back handling logic, while making the mouse exit trigger behave like a real exit intent:
- requires real interaction
- requires a longer session delay
- ignores builder topbar/control movement
- ignores normal builder UI behavior and blocking modals

No UI or CSS was changed.
