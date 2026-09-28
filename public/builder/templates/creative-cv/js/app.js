document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const navLinks = document.querySelector("#navLinks");
  const menuToggle = document.querySelector("#menuToggle");

  // Mobile nav toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("is-open");

    const expanded = menuToggle.classList.contains("is-open");
    menuToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  });

  navLinks.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    navLinks.classList.remove("active");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });

  // Sticky header
  const headerOffset = header.offsetHeight;
  document.body.style.setProperty("--header-offset", `${headerOffset}px`);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("is-sticky");
      document.body.classList.add("has-sticky-offset");
    } else {
      header.classList.remove("is-sticky");
      document.body.classList.remove("has-sticky-offset");
    }
  });
});
// back to top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
});

// gsap animations start here
if (
  window.innerWidth > 768 &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
  typeof gsap !== "undefined" &&
  typeof ScrollTrigger !== "undefined"
) {
  gsap.registerPlugin(ScrollTrigger);

  // Hero Animation
  gsap.from("#hero .hero__heading h1", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 80%", // when top of hero hits 80% of viewport
      toggleActions: "play none none",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#hero .hero__image img", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 75%",
      toggleActions: "play none none",
    },
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(
    "#hero .hero__content h2, #hero .hero__content p, #hero .hero__cta",
    {
      scrollTrigger: {
        trigger: "#hero",
        start: "top 70%",
        toggleActions: "play none none",
      },
      x: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 0.5,
      ease: "power3.out",
    }
  );
  // ===== Education Section =====
  gsap.from("#education h2", {
    scrollTrigger: {
      trigger: "#education",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#education .section-education__contact .contact-card", {
    scrollTrigger: {
      trigger: "#education .section-education__contact",
      start: "top 75%",
      toggleActions: "play none none",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  gsap.from("#education .edu-item", {
    scrollTrigger: {
      trigger: "#education .section-education__list-row",
      start: "top 70%",
      toggleActions: "play none none",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  // ===== Experience Section =====
  gsap.from("#experience h2", {
    scrollTrigger: {
      trigger: "#experience",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#experience .section-experience__item", {
    scrollTrigger: {
      trigger: "#experience .section-experience__list",
      start: "top 70%",
      toggleActions: "play none none",
    },
    x: -60,
    opacity: 0,
    duration: 0.9,
    stagger: 0.25,
    ease: "power2.out",
  });
  // ===== Services Section =====
  gsap.from("#services h2", {
    scrollTrigger: {
      trigger: "#services",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#services .section-services__desc", {
    scrollTrigger: {
      trigger: "#services .section-services__desc",
      start: "top 85%",
      toggleActions: "play none none",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  // ===== Portfolio Section =====
  gsap.from("#portfolio h2", {
    scrollTrigger: {
      trigger: "#portfolio",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  // ===== Endorsements Section =====
  gsap.from("#endorsements h2", {
    scrollTrigger: {
      trigger: "#endorsements",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#endorsements p", {
    scrollTrigger: {
      trigger: "#endorsements p",
      start: "top 85%",
      toggleActions: "play none none",
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  // ===== Clients Section =====
  gsap.from("#clients h2", {
    scrollTrigger: {
      trigger: "#clients",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#clients .client-logo img", {
    scrollTrigger: {
      trigger: "#clients .section-clients__logos-row",
      start: "top 75%",
      toggleActions: "play none none",
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });

  // ===== Footer Section =====
  gsap.from("#footer .footer-info", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 80%",
      toggleActions: "play none none",
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#footer .footer-form", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#footer .section-footer__bottom-row", {
    scrollTrigger: {
      trigger: "#footer .section-footer__bottom-row",
      start: "top 85%",
      toggleActions: "play none none",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
}
