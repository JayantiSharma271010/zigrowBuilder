const toggle = document.querySelector(".cw-nav-toggle");
const nav = document.querySelector(".cw-nav");
const toggleIcon = toggle.querySelector("i");

const setNavigationOpen = (open) => {
  nav.classList.toggle("is-open", open);
  toggle.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
  toggleIcon.classList.toggle("bi-list", !open);
  toggleIcon.classList.toggle("bi-x-lg", open);
};

toggle.addEventListener("click", () => {
  setNavigationOpen(!nav.classList.contains("is-open"));
});

nav.addEventListener("click", (event) => {
  if (!event.target.closest(".cw-nav__list")) {
    setNavigationOpen(false);
    toggle.focus();
  }
});

nav.querySelectorAll(".cw-nav__link").forEach((link) => {
  link.addEventListener("click", () => setNavigationOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setNavigationOpen(false);
    toggle.focus();
  }
});

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("show", document.documentElement.scrollTop > 300);
});

backToTopBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (
  window.innerWidth > 768 &&
  !reducedMotion &&
  window.gsap &&
  window.ScrollTrigger
) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".cw-logo .logo-img", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".cw-nav .cw-nav__item", {
    opacity: 0,
    y: -20,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(
    ".cw-hero__kicker, .cw-hero__title, .cw-hero__desc, .cw-hero__contact, .cw-hero__actions",
    {
      opacity: 0,
      y: 40,
      stagger: 0.16,
      duration: 1,
      ease: "power3.out",
    }
  );

  const reveal = (selector, trigger, options = {}) => {
    gsap.from(selector, {
      scrollTrigger: { trigger, start: "top 85%" },
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out",
      ...options,
    });
  };

  reveal(".creative-minds__content", ".creative-minds__content");
  reveal(".creative-minds__image-wrap", ".creative-minds__images-row", {
    stagger: 0.2,
    y: 60,
  });
  reveal(".facilities__content", ".facilities__content");
  reveal(".facilities__heading", ".facilities__heading");
  reveal(".features__item", ".features .row", { stagger: 0.12 });
  reveal(".gallery__item", ".gallery .row", {
    stagger: 0.12,
    scale: 0.92,
  });
  reveal(".membership__heading", ".membership__heading");
  reveal(".membership__card", ".membership .row.g-4", { stagger: 0.16 });
  reveal(".testimonial__icon", ".testimonial", { y: -30 });
  reveal(".testimonial__text", ".testimonial__text");
  reveal(".testimonial__author", ".testimonial__author");
  reveal(".cta__logo-box", ".cta", { scale: 0.8 });
  reveal(".cta__btn-wrap", ".cta__btn-wrap");
}
