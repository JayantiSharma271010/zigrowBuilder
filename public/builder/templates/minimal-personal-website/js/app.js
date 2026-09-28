// navbar functionality
const header = document.getElementById("header");
const navBar = header?.querySelector(".nav-bar");
const menuButton = header?.querySelector(".menu-btn");
const navLinks = header?.querySelectorAll(".nav-list a") ?? [];

const setMenuOpen = (open) => {
  navBar?.classList.toggle("is-open", open);
  menuButton?.setAttribute("aria-expanded", String(open));
};

menuButton?.addEventListener("click", () => {
  setMenuOpen(!navBar.classList.contains("is-open"));
});

navLinks.forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
    menuButton?.focus();
  }
});

document.addEventListener("click", (event) => {
  if (navBar && !navBar.contains(event.target)) setMenuOpen(false);
});

// back to top button functionality
const backToTopBtn = document.getElementById("backToTopBtn");

const syncScrollState = () => {
  header?.classList.toggle("scrolled", window.scrollY > 50);
  backToTopBtn?.classList.toggle("show", window.scrollY > 300);
};

window.addEventListener("scroll", syncScrollState, { passive: true });
syncScrollState();

backToTopBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  document.getElementById("hero")?.focus({ preventScroll: true });
});

// about tab functionality
const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll("[data-tab-panel]");

const activateTab = (tab) => {
  tabs.forEach((item) => {
    const active = item === tab;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-selected", String(active));
    item.setAttribute("tabindex", active ? "0" : "-1");
  });

  tabPanels.forEach((panel) => {
    panel.hidden = panel.id !== tab.getAttribute("aria-controls");
  });
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    activateTab(tab);
  });

  tab.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const next = tabs[(index + direction + tabs.length) % tabs.length];
    activateTab(next);
    next.focus();
  });
});

// Keep Bootstrap accordion icons synchronized with the expanded state.
document.querySelectorAll(".accordion-collapse").forEach((panel) => {
  const syncIcon = () => {
    const toggle = document.querySelector(`[aria-controls="${panel.id}"]`);
    const icon = toggle?.querySelector("[data-icon]");
    const open = panel.classList.contains("show");
    icon?.classList.toggle("bi-plus-lg", !open);
    icon?.classList.toggle("bi-dash-lg", open);
  };
  panel.addEventListener("shown.bs.collapse", syncIcon);
  panel.addEventListener("hidden.bs.collapse", syncIcon);
  syncIcon();
});

// testimonial slider functionality
if (typeof Swiper !== "undefined") {
  new Swiper(".testimonials-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 500,
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: ".testimonials-next",
      prevEl: ".testimonials-prev",
    },
  });
}

document.querySelectorAll(".testimonials-section__ctrl").forEach((control) => {
  control.addEventListener("click", (event) => event.preventDefault());
});
// gsap animation
if (window.innerWidth > 768 && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    /* ======================
       HERO SECTION
    ====================== */
    // Left Copy
    gsap.from("#hero .hero-section__left", {
      opacity: 0,
      x: -80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#hero .hero-section__left",
        start: "top 80%",
      },
    });

    // Right Copy
    gsap.from("#hero .hero-section__right", {
      opacity: 0,
      x: 80,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#hero .hero-section__right",
        start: "top 80%",
      },
    });

    // Gallery Cards (stagger)
    gsap.from("#hero .hero-section__gallery .hero-section__card", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#hero .hero-section__gallery",
        start: "top 80%",
      },
    });

    // Scroll Indicator bounce-in
    gsap.from("#hero .hero-section__scroll", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#hero .hero-section__scroll",
        start: "top 90%",
      },
    });

    /* ======================
       ABOUT SECTION
    ====================== */
    // About Head
    gsap.from("#about .about-section__head", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about .about-section__head",
        start: "top 85%",
      },
    });

    // Timeline rows
    gsap.from("#about .about-section__t-item", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.25,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about .about-section__timeline",
        start: "top 80%",
      },
    });

    // Intro Card (image + text)
    gsap.from("#about .about-section__intro-card", {
      opacity: 0,
      x: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about .about-section__intro-card",
        start: "top 85%",
      },
    });
    /* ======================
       SERVICES SECTION
    ====================== */
    // Header animation
    gsap.from("#services .services-section__head", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#services .services-section__head",
        start: "top 85%",
      },
    });

    // Each service card (accordion details)
    gsap.from("#services .services-section__item", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#services .services-section__list",
        start: "top 80%",
      },
    });

    // Images inside service panels
    gsap.from("#services .services-section__media img", {
      opacity: 0,
      scale: 0.85,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#services .services-section__media",
        start: "top 85%",
      },
    });

    /* ======================
       PROJECTS SECTION
    ====================== */
    // Projects header
    gsap.from("#projects .projects-section__head", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#projects .projects-section__head",
        start: "top 85%",
      },
    });

    // Each case grid (staggered fade-in)
    gsap.from("#projects .projects-section__row-wrap", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#projects .container",
        start: "top 80%",
      },
    });

    // Case card text slides from left
    gsap.from("#projects .projects-section__card", {
      opacity: 0,
      x: -80,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#projects .projects-section__row-wrap",
        start: "top 80%",
      },
    });

    // Case visuals (images) slide from right
    gsap.from("#projects .projects-section__visual img", {
      opacity: 0,
      x: 80,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#projects .projects-section__row-wrap",
        start: "top 80%",
      },
    });
    /* ======================
       TESTIMONIALS SECTION
    ====================== */
    // Header
    gsap.from("#testimonials .testimonials-section__head", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#testimonials .testimonials-section__head",
        start: "top 85%",
      },
    });

    // Quote block
    gsap.from("#testimonials .testimonials-section__quote", {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#testimonials .testimonials-section__quote",
        start: "top 80%",
      },
    });

    // Controls fade in
    gsap.from("#testimonials .testimonials-section__controls a", {
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#testimonials .testimonials-section__controls",
        start: "top 85%",
      },
    });

    /* ======================
       FAQ SECTION
    ====================== */
    // FAQ intro
    gsap.from("#faq .faq-section__intro", {
      opacity: 0,
      x: -80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#faq .faq-section__intro",
        start: "top 85%",
      },
    });

    // FAQ accordion items
    gsap.from("#faq .faq-section__item", {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#faq #faqAccordion",
        start: "top 80%",
      },
    });

    /* ======================
       CTA + FOOTER SECTION
    ====================== */
    // CTA eyebrow
    gsap.from("#footer .cta-footer-section__eyebrow", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#footer .cta-footer-section__eyebrow",
        start: "top 85%",
      },
    });

    // Footer links (staggered columns)
    gsap.from("#footer .cta-footer-section__links > div", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#footer .cta-footer-section__links",
        start: "top 80%",
      },
    });
  });
}
