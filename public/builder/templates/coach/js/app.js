document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", header.classList.contains("is-open") ? "true" : "false");
  });

  header.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
});
// sticky header
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("is-sticky");
  } else {
    header.classList.remove("is-sticky");
  }
});
// GSAP Animations
// Initialize GSAP ScrollTrigger
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && window.innerWidth > 768 && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from("nav", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#hero .container", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });

  gsap.from("#advice .col-md-4", {
    scrollTrigger: {
      trigger: "#advice",
      start: "top 80%",
    },
    opacity: 0,
    y: -100,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from("#advice .col-md-8", {
    scrollTrigger: {
      trigger: "#advice",
      start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.3,
  });

  gsap.from("#testimonial .col-lg-6:nth-child(1)", {
    scrollTrigger: {
      trigger: "#testimonial",
      start: "top 80%",
    },
    opacity: 0,
    y: -100,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from("#testimonial .testimonial-content", {
    scrollTrigger: {
      trigger: "#testimonial",
      start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.3,
  });

  gsap.from("#my-story .col-lg-6:nth-child(1)", {
    scrollTrigger: {
      trigger: "#my-story",
      start: "top 80%",
    },
    opacity: 0,
    y: -100,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from("#my-story .col-lg-6:nth-child(2)", {
    scrollTrigger: {
      trigger: "#my-story",
      start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.3,
  });

  gsap.from("#help .help-box", {
    scrollTrigger: {
      trigger: "#help",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from("#footer", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 90%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
  });
}
