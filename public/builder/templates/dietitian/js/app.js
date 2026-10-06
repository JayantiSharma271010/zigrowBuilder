const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backToTopBtn = document.getElementById("backToTopBtn");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-header .nav-menu a");

function setMenuState(open) {
  navMenu.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  const icon = menuToggle.querySelector("[data-icon]");
  if (icon) {
    icon.classList.toggle("bi-list", !open);
    icon.classList.toggle("bi-x-lg", open);
    icon.dataset.icon = open ? "close" : "menu";
  }
}

menuToggle.addEventListener("click", () => setMenuState(!navMenu.classList.contains("active")));
navLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false)));

function updateScrollState() {
  header.classList.toggle("sticky", window.scrollY > 100);
  backToTopBtn.classList.toggle("show", window.scrollY > 300);

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const active = window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight;
    if (active) {
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${section.id}`));
    }
  });
}

window.addEventListener("scroll", updateScrollState, { passive: true });
backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
updateScrollState();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reducedMotion && window.innerWidth > 768 && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".hero-content", { y: 60, opacity: 0, duration: 1, ease: "power3.out" });
  gsap.from(".about-text", { scrollTrigger: { trigger: ".about-section", start: "top 80%", toggleActions: "play none none none" }, x: -80, opacity: 0, duration: 0.9, ease: "power3.out" });
  gsap.from(".about-image", { scrollTrigger: { trigger: ".about-section", start: "top 80%", toggleActions: "play none none none" }, y: 80, opacity: 0, duration: 0.9, ease: "power3.out" });
  gsap.from(".how-it-works-section .section-header", { scrollTrigger: { trigger: ".how-it-works-section", start: "top 80%", toggleActions: "play none none none" }, y: -40, opacity: 0, duration: 0.9, ease: "power3.out" });
  gsap.from(".appointment-content", { scrollTrigger: { trigger: ".appointment-section", start: "top 80%", toggleActions: "play none none none" }, x: -80, opacity: 0, duration: 0.9, ease: "power3.out" });
  gsap.from(".appointment-form-panel", { scrollTrigger: { trigger: ".appointment-section", start: "top 80%", toggleActions: "play none none none" }, y: 80, opacity: 0, duration: 0.9, ease: "power3.out" });
  gsap.from(".testimonial-img", { scrollTrigger: { trigger: ".testimonial-section", start: "top 80%", toggleActions: "play none none none" }, scale: 0.85, opacity: 0, duration: 0.9, ease: "back.out(1.7)" });
  gsap.from(".footer-brand-logo", { scrollTrigger: { trigger: ".site-footer", start: "top 85%", toggleActions: "play none none none" }, scale: 0.85, opacity: 0, duration: 0.9, ease: "back.out(1.7)" });
}

(function configureZigrowForms() {
  const forms = Array.from(document.querySelectorAll("form[data-zigrow-form]"));
  if (!forms.length) return;

  function serializeForm(form) {
    const formData = new FormData(form);
    const raw = {};
    for (const [name, value] of formData.entries()) {
      const existing = raw[name];
      if (existing === undefined) raw[name] = value;
      else if (Array.isArray(existing)) existing.push(value === "" ? true : value);
      else raw[name] = [existing, value === "" ? true : value];
    }
    return raw;
  }

  function pickPrimaryValue(raw) {
    if (raw.email && String(raw.email).trim()) return String(raw.email).trim();
    if (raw.phone && String(raw.phone).trim()) return String(raw.phone).trim();
    const nameCombo = [raw.first_name, raw.last_name].filter(Boolean).join(" ").trim();
    if (raw.name && String(raw.name).trim()) return String(raw.name).trim();
    if (nameCombo) return nameCombo;
    if (raw.message && String(raw.message).trim()) return String(raw.message).trim();
    return "";
  }

  forms.forEach((form) => {
    const domainInput = form.querySelector('input[name="domain"]');
    const pageUrlInput = form.querySelector('input[name="page_url"]');
    if (domainInput) domainInput.value = location.host;
    if (pageUrlInput) pageUrlInput.value = location.href;

    let message = form.querySelector(".form-submit-message");
    if (!message) {
      message = document.createElement("div");
      message.className = "form-submit-message";
      message.setAttribute("role", "status");
      message.setAttribute("aria-live", "polite");
      form.appendChild(message);
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submitButton = form.querySelector(':scope > [type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.dataset.oldText = submitButton.textContent || "";
        submitButton.textContent = "Submitting...";
      }
      message.textContent = "";
      message.removeAttribute("data-status");

      try {
        const raw = serializeForm(form);
        const body = new URLSearchParams();
        body.set("domain", form.querySelector('input[name="domain"]')?.value || location.host);
        body.set("form_key", form.querySelector('input[name="form_key"]')?.value || "contact");
        body.set("page_url", form.querySelector('input[name="page_url"]')?.value || location.href);
        body.set("payload", JSON.stringify(raw));
        const primary = pickPrimaryValue(raw);
        if (primary) body.set("value", primary);
        if (raw._company) body.set("_company", raw._company);

        const response = await fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body });
        const result = await response.json().catch(() => ({}));
        if (response.ok && (result.ok ?? true)) {
          form.reset();
          message.textContent = "Thanks! Your request has been submitted.";
          message.dataset.status = "success";
        } else {
          message.textContent = result.message || `Failed (HTTP ${response.status})`;
          message.dataset.status = "error";
        }
      } catch (error) {
        console.error(error);
        message.textContent = "Something went wrong. Please try again.";
        message.dataset.status = "error";
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = submitButton.dataset.oldText || "Send";
        }
      }
    });
  });
})();
