(function () {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMobile");

  if (!toggle || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("active", open);
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    const icon = toggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("bi-list", !open);
      icon.classList.toggle("bi-x-lg", open);
      icon.setAttribute("data-icon", open ? "close-menu" : "menu");
    }
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("active");
    setOpen(!isOpen);
  });

  // close when clicking any menu link
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  // close on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) setOpen(false);
  });
})();

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// GSAP Animations

if (
  window.gsap &&
  window.ScrollTrigger &&
  window.innerWidth > 768 &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  gsap.registerPlugin(ScrollTrigger);
  // Header Animation
  gsap.from(".site-header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Hero Section
  gsap.from(".hero-section__content", {
    scrollTrigger: ".hero-section",
    y: -100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".hero-section__image-wrap", {
    scrollTrigger: ".hero-section",
    y: 100,
    opacity: 0,
    duration: 1,
  });

  // About Section
  gsap.from(".about-section__image-wrap", {
    scrollTrigger: ".about-section",
    y: -100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".about-section__content", {
    scrollTrigger: ".about-section",
    y: 100,
    opacity: 0,
    duration: 1,
  });

  // CTA Section
  gsap.from(".cta-section__wrap", {
    scrollTrigger: ".cta-section",
    scale: 0.8,
    opacity: 0,
    duration: 1,
  });

  // Gallery Items
  gsap.from(".gallery-section__box", {
    scrollTrigger: ".gallery-section",
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2,
  });

  // Testimonials
  gsap.from(".testimonial-section__card", {
    scrollTrigger: ".testimonial-section",
    y: 50,
    duration: 0.6,
    stagger: 0.2,
  });

  // Footer
  gsap.from(".site-footer__wrap", {
    scrollTrigger: ".site-footer",
    opacity: 0,
    y: 50,
    duration: 1,
  });
}
