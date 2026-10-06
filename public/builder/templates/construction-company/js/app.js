document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".menu-wrap");
  const links = document.querySelectorAll(".menu .nav-link");
  if (!toggle || !menu) return;

  const open = () => {
    toggle.classList.add("active");
    menu.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
    document.documentElement.classList.add("no-scroll");
  };

  const close = () => {
    toggle.classList.remove("active");
    menu.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    document.documentElement.classList.remove("no-scroll");
  };

  toggle.addEventListener("click", () => {
    menu.classList.contains("active") ? close() : open();
  });

  links.forEach((a) => a.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) close();
  });
});
// back to top button
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Register ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);
// if (window.innerWidth > 768) {
//   // Navbar Animation on Load
//   gsap.from("#header nav", {
//     y: -50,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });

//   // Hero Text Animation (Scroll-triggered)
//   gsap.from(".hero-text-box h5", {
//     scrollTrigger: {
//       trigger: "#hero",
//       start: "top center",
//     },
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });

//   gsap.from(".hero-text-box h1", {
//     scrollTrigger: {
//       trigger: "#hero",
//       start: "top center",
//     },
//     y: 80,
//     opacity: 0,
//     duration: 1.2,
//     delay: 0.2,
//     ease: "power3.out",
//   });

//   gsap.from(".hero-text-box p", {
//     scrollTrigger: {
//       trigger: "#hero",
//       start: "top center",
//     },
//     y: 80,
//     opacity: 0,
//     duration: 1.2,
//     delay: 0.4,
//     ease: "power3.out",
//   });

//   gsap.from(".button-box button", {
//     scrollTrigger: {
//       trigger: "#hero",
//       start: "top center",
//     },
//     y: 60,
//     opacity: 0,
//     duration: 1,
//     delay: 0.6,
//     stagger: 0.2,
//     ease: "power3.out",
//   });

//   // Optional: Hero Background Fade-in
//   gsap.from(".hero-container", {
//     scrollTrigger: {
//       trigger: "#hero",
//       start: "top bottom",
//     },
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//   });
//   // Success Section Left Content Animation
//   gsap.from(".success-section .col-lg-6.bg-yellow", {
//     scrollTrigger: {
//       trigger: ".success-section",
//       start: "top 70%",
//     },
//     x: -100,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });

//   // Success Section Right Stats Boxes Animation (Staggered)
//   gsap.from(".success-section .col-lg-6.bg-white .col-6", {
//     scrollTrigger: {
//       trigger: ".success-section",
//       start: "top 70%",
//     },
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.2,
//     ease: "power3.out",
//   });

//   // Services Section Heading Animation
//   gsap.from(".service-heading", {
//     scrollTrigger: {
//       trigger: "#services",
//       start: "top 80%",
//     },
//     y: -50,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });

//   // Get in Touch - Left Content Animation
//   gsap.from(".left-content .left-text-box", {
//     scrollTrigger: {
//       trigger: "#get-in-touch",
//       start: "top 70%",
//     },
//     x: -100,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });

//   // Get in Touch - Right Content List Animation
//   gsap.from(".right-content .overlay-content li", {
//     scrollTrigger: {
//       trigger: "#get-in-touch",
//       start: "top 70%",
//     },
//     y: 50,
//     opacity: 0,
//     duration: 0.8,
//     stagger: 0.2,
//     ease: "power3.out",
//   });
//   // About Us Heading Animation
//   gsap.from(".about-heading", {
//     scrollTrigger: {
//       trigger: "#about-us",
//       start: "top 80%",
//     },
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });

//   // About Us Button Animation
//   gsap.from(".about-us-button", {
//     scrollTrigger: {
//       trigger: ".about-us-button",
//       start: "top 90%",
//     },
//     y: 30,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });

//   // Testimonial Heading Animation
//   gsap.from(".testimonial-heading", {
//     scrollTrigger: {
//       trigger: "#testimonial",
//       start: "top 85%",
//     },
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });

//   // Testimonial Cards Animation (Scale Up Stagger)
//   gsap.from(".testimonial-card", {
//     scrollTrigger: {
//       trigger: "#testimonial",
//       start: "top 85%",
//     },
//     scale: 0.9,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.2,
//     ease: "power3.out",
//   });

//   // Quote Form Animation (Slide from Left)
//   gsap.from(".quote-form", {
//     scrollTrigger: {
//       trigger: "#quote-faq",
//       start: "top 80%",
//     },
//     y: -100,
//     opacity: 0,
//     duration: 1.2,
//     ease: "power3.out",
//   });

//   // FAQ Heading Animation (Slide from Right)
//   gsap.from(".faq-section h6, .faq-section h3", {
//     scrollTrigger: {
//       trigger: ".faq-section",
//       start: "top 80%",
//     },
//     y: 100,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });

//   // FAQ Items Animation (Stagger Fade-in)
//   gsap.from(".faq-item", {
//     scrollTrigger: {
//       trigger: ".faq-section",
//       start: "top 85%",
//     },
//     y: 30,
//     opacity: 0,
//     stagger: 0.2,
//     duration: 1,
//     ease: "power3.out",
//   });

//   // Footer Columns Animation (Stagger Fade-in)
//   gsap.from("#footer .row > div", {
//     scrollTrigger: {
//       trigger: "#footer",
//       start: "top 85%",
//     },
//     y: 30,
//     opacity: 0,
//     stagger: 0.2,
//     duration: 1,
//     ease: "power3.out",
//   });

//   // Footer Bottom Animation (Copyright + Icons)
//   gsap.from(".footer-bottom", {
//     scrollTrigger: {
//       trigger: ".footer-bottom",
//       start: "top 90%",
//     },
//     y: 20,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });
// }

(function () {
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
    const name = [raw.first_name, raw.last_name].filter(Boolean).join(" ").trim();
    if (raw.name && String(raw.name).trim()) return String(raw.name).trim();
    if (name) return name;
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
        body.set("domain", domainInput?.value || location.host);
        body.set("form_key", form.querySelector('input[name="form_key"]')?.value || "contact");
        body.set("page_url", pageUrlInput?.value || location.href);
        body.set("payload", JSON.stringify(raw));
        const primary = pickPrimaryValue(raw);
        if (primary) body.set("value", primary);
        if (raw._company) body.set("_company", raw._company);

        const response = await fetch(form.action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
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
