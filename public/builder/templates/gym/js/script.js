const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const testimonialSwiper = new Swiper(".testimonial-swiper", {
  loop: true,
  pagination: { el: ".testimonial-swiper .swiper-pagination", clickable: true },
  slidesPerView: 1,
  spaceBetween: 20,
});

const plans = {
  monthly: [
    { title: "Foundation Plan", price: "₹1,500/mo", summary: "Build a reliable routine with structured coaching and clear weekly goals.", features: ["Four guided sessions", "Movement assessment", "Weekly progress review"] },
    { title: "Progress Plan", price: "₹2,500/mo", summary: "Train consistently with personal feedback, nutrition guidance, and accountability.", features: ["Eight guided sessions", "Nutrition guidance", "Fortnightly measurements"] },
    { title: "Performance Plan", price: "₹4,000/mo", summary: "Pursue an ambitious goal with intensive coaching and detailed program updates.", features: ["Twelve guided sessions", "Custom training split", "Priority coach support"] },
  ],
  yearly: [
    { title: "Foundation Plan", price: "₹16,500/yr", summary: "Build a reliable routine with structured coaching and clear weekly goals.", features: ["Four guided sessions monthly", "Movement assessment", "Quarterly plan refresh"] },
    { title: "Progress Plan", price: "₹27,500/yr", summary: "Train consistently with personal feedback, nutrition guidance, and accountability.", features: ["Eight guided sessions monthly", "Nutrition guidance", "Monthly measurements"] },
    { title: "Performance Plan", price: "₹44,000/yr", summary: "Pursue an ambitious goal with intensive coaching and detailed program updates.", features: ["Twelve sessions monthly", "Custom training split", "Priority coach support"] },
  ],
};

const mobilePricingSwipers = {};

function priceCardMarkup(plan, active, mobile) {
  const card = `<div class="price-card${active ? " active" : ""}"><h3>${plan.title}</h3><h2>${plan.price}</h2><p>${plan.summary}</p><ul>${plan.features.map((feature) => `<li>${feature}</li>`).join("")}</ul><div class="pricing-actions zg-align-center"><a href="#contact" class="plan-btn" data-btn="pricing-plan">Choose Plan</a></div></div>`;
  return mobile ? `<div class="swiper-slide">${card}</div>` : `<div class="col-md-4 clonable-card pricing-card-item">${card}</div>`;
}

function renderCards(planPeriod) {
  const suffix = planPeriod.charAt(0).toUpperCase() + planPeriod.slice(1);
  const cardsContainer = document.getElementById(`pricingCards${suffix}`);
  const slidesContainer = document.getElementById(`swiperSlides${suffix}`);
  if (!cardsContainer || !slidesContainer) return;
  cardsContainer.innerHTML = plans[planPeriod].map((plan, index) => priceCardMarkup(plan, index === 1, false)).join("");
  slidesContainer.innerHTML = plans[planPeriod].map((plan, index) => priceCardMarkup(plan, index === 1, true)).join("");
  mobilePricingSwipers[planPeriod] = new Swiper(`.${planPeriod}-pricing-swiper`, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: `.${planPeriod}-pricing-swiper .swiper-pagination`, clickable: true },
    observer: true,
    observeParents: true,
  });
}

Object.keys(plans).forEach(renderCards);
document.querySelectorAll("#pricingToggle [role='tab']").forEach((tab) => {
  tab.addEventListener("shown.bs.tab", () => mobilePricingSwipers[tab.dataset.plan]?.update());
});

const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => backToTopButton?.classList.toggle("show", window.scrollY > 300), { passive: true });
backToTopButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }));

const navbar = document.getElementById("mainNavbar");
window.addEventListener("scroll", () => navbar?.classList.toggle("sticky-navbar", window.scrollY > 100), { passive: true });

const toggler = document.querySelector(".navbar-toggler");
toggler?.addEventListener("click", () => toggler.classList.toggle("is-active"));
document.querySelectorAll(".navbar .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".navbar .nav-link").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    const collapseElement = document.getElementById("navbarContent");
    if (collapseElement?.classList.contains("show") && window.bootstrap?.Collapse) {
      window.bootstrap.Collapse.getOrCreateInstance(collapseElement).hide();
      toggler?.classList.remove("is-active");
    }
  });
});

if (!reducedMotion && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".hero-section-header", { y: 28, opacity: 0, duration: 0.8, ease: "power2.out" });
  gsap.from(".hero-section-body", { y: 24, opacity: 0, duration: 0.8, delay: 0.2, ease: "power2.out" });
  gsap.from(".hero-media", { x: 40, opacity: 0, duration: 0.9, delay: 0.35, ease: "power2.out" });
  document.querySelectorAll("main section:not(.hero-section) .section-body").forEach((element) => {
    gsap.from(element, { scrollTrigger: { trigger: element, start: "top 90%", once: true }, y: 24, opacity: 0, duration: 0.65, ease: "power2.out" });
  });
}

(function setupZigrowForms() {
  const forms = Array.from(document.querySelectorAll("form[data-zigrow-form]"));
  if (!forms.length) return;

  const serializeForm = (form) => {
    const raw = {};
    for (const [name, value] of new FormData(form).entries()) {
      if (raw[name] === undefined) raw[name] = value;
      else if (Array.isArray(raw[name])) raw[name].push(value === "" ? true : value);
      else raw[name] = [raw[name], value === "" ? true : value];
    }
    return raw;
  };

  const pickPrimaryValue = (raw) => {
    if (raw.email && String(raw.email).trim()) return String(raw.email).trim();
    if (raw.phone && String(raw.phone).trim()) return String(raw.phone).trim();
    if (raw.name && String(raw.name).trim()) return String(raw.name).trim();
    if (raw.message && String(raw.message).trim()) return String(raw.message).trim();
    return "";
  };

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
      const submitButton = form.querySelector(':scope > button[type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.dataset.oldText = submitButton.innerText;
        submitButton.innerText = "Submitting...";
      }
      message.textContent = "";
      message.removeAttribute("data-status");
      try {
        const raw = serializeForm(form);
        const body = new URLSearchParams();
        body.set("domain", domainInput?.value || location.host);
        body.set("form_key", form.querySelector('input[name="form_key"]')?.value || "contact");
        body.set("page_url", pageUrlInput?.value || location.href);
        body.set("payload", JSON.stringify(raw));
        const primary = pickPrimaryValue(raw);
        if (primary) body.set("value", primary);
        if (raw._company) body.set("_company", raw._company);
        const response = await fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body });
        const data = await response.json().catch(() => ({}));
        if (response.ok && (data.ok ?? true)) {
          form.reset();
          message.textContent = "Thanks! Your request has been submitted.";
          message.dataset.status = "success";
        } else {
          message.textContent = data.message || `Failed (HTTP ${response.status})`;
          message.dataset.status = "error";
        }
      } catch (error) {
        console.error(error);
        message.textContent = "Something went wrong. Please try again.";
        message.dataset.status = "error";
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerText = submitButton.dataset.oldText || "Send";
        }
      }
    });
  });
})();
