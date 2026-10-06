(function () {
  const header = document.getElementById("header");
  const nav = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const toggleIcon = toggle?.querySelector("[data-icon]");

  if (!header || !nav || !toggle) return;

  // Sticky after scroll
  function onScroll() {
    if (window.scrollY > 10) header.classList.add("is-sticky");
    else header.classList.remove("is-sticky");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Toggle
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (toggleIcon) {
      toggleIcon.classList.toggle("bi-list", !isOpen);
      toggleIcon.classList.toggle("bi-x-lg", isOpen);
      toggleIcon.dataset.icon = isOpen ? "close-menu" : "menu";
    }
  });

  // Close on nav click
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      if (toggleIcon) {
        toggleIcon.classList.remove("bi-x-lg");
        toggleIcon.classList.add("bi-list");
        toggleIcon.dataset.icon = "menu";
      }
    });
  });
})();

// back to top button functionality
const backToTop = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 300);
});

backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// gsap animation start here
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (window.gsap && window.ScrollTrigger && !reducedMotion.matches) {
gsap.registerPlugin(ScrollTrigger);
if (window.innerWidth > 768) {
  // Hero Section animation
  gsap.from("#hero .hero-section__tagline", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 80%", // when hero enters viewport
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#hero .hero-section__title", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.from("#hero .hero-section__subtext", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out",
  });

  gsap.from("#hero .hero-section__rule", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 65%",
      toggleActions: "play none none reverse",
    },
    scaleY: 0,
    opacity: 0,
    transformOrigin: "top center",
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
  });

  gsap.from("#hero .hero-section__scroll", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "power3.out",
  });

  let atmosphereTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#atmosphere",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  atmosphereTl
    .from("#atmosphere h2", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(
      "#atmosphere .atmosphere-section__intro",
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );
  /* ------------------------------
   MENU SECTION
--------------------------------*/
  gsap.from("#menu-section .menu-section__subtitle", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#menu-section",
      start: "top 85%",
    },
  });

  gsap.from("#menu-section .menu-section__title", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#menu-section",
      start: "top 80%",
    },
  });

  gsap.from("#menu-section .menu-section__desc", {
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#menu-section",
      start: "top 75%",
    },
  });

  gsap.from("#menu-section .menu-section__item", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#menu-section .menu-section__grid",
      start: "top 70%",
    },
  });

  gsap.from("#menu-section .menu-section__button", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: "#menu-section",
      start: "top 65%",
    },
  });

  /* ------------------------------
   SIGNATURE SECTION
--------------------------------*/
  gsap.from("#signature-menu .signature-menu-section__subtitle", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#signature-menu",
      start: "top 85%",
    },
  });

  gsap.from("#signature-menu .signature-menu-section__title", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#signature-menu",
      start: "top 80%",
    },
  });

  gsap.from("#signature-menu .signature-menu-section__desc", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#signature-menu",
      start: "top 75%",
    },
  });

  /* ------------------------------
   GALLERY SECTION
--------------------------------*/
  gsap.from("#gallery .gallery-section__item", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#gallery",
      start: "top 80%",
    },
  });
  /* ------------------------------
   TEAM SECTION
--------------------------------*/
  gsap.from("#team .team-section__title", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#team",
      start: "top 80%",
    },
  });

  gsap.from("#team .team-section__desc", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#team",
      start: "top 75%",
    },
  });

  gsap.from("#team .team-section__img--chef-1", {
    y: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#team",
      start: "top 70%",
    },
  });

  gsap.from("#team .team-section__img--chef-2", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#team",
      start: "top 70%",
    },
  });

  gsap.from("#team .team-section__img--chef-3", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#team",
      start: "top 65%",
    },
  });

  /* ------------------------------
   RESERVATION SECTION
--------------------------------*/
  gsap.from("#reservation .reservation-section__title", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#reservation",
      start: "top 80%",
    },
  });

  gsap.from("#reservation .reservation-section__text", {
    y: 60,
    opacity: 0,
    duration: 0.9,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#reservation",
      start: "top 75%",
    },
  });

  gsap.from("#reservation .reservation-section__btn", {
    scale: 0.8,
    opacity: 0,
    duration: 0.7,
    delay: 0.4,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: "#reservation",
      start: "top 70%",
    },
  });

  gsap.from("#reservation .reservation-section__phone", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#reservation",
      start: "top 65%",
    },
  });

  gsap.from("#reservation img", {
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#reservation",
      start: "top 75%",
    },
  });

  /* ------------------------------
   FOOTER SECTION
--------------------------------*/
  gsap.from("#footer .footer-section__top > [class*='col-']", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#footer .footer-section__top",
      start: "top 80%",
    },
  });

  gsap.from("#footer .footer-section__bottom-text", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#footer .footer-section__bottom",
      start: "top 85%",
    },
  });
}
}
// gsap animation end here
