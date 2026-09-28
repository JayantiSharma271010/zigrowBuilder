const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backToTopBtn = document.querySelector(".back-to-top");
const header = document.getElementById("header");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("is-visible", window.scrollY > 300);
  header.classList.toggle("sticky", window.scrollY > 50);
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion.matches ? "auto" : "smooth",
  });
});

if (typeof Swiper !== "undefined") {
  new Swiper(".logo-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    rewind: true,
    watchOverflow: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });
}

if (
  !prefersReducedMotion.matches &&
  typeof gsap !== "undefined" &&
  typeof ScrollTrigger !== "undefined"
) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".nav-section .nav-wrapper", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".hero .subtitle", {
    scrollTrigger: { trigger: ".hero", start: "top 80%", toggleActions: "play none none none" },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".hero .outline", {
    scrollTrigger: { trigger: ".hero", start: "top 75%", toggleActions: "play none none none" },
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1,
    ease: "power2.out",
    delay: 0.3,
  });

  gsap.from(".hero h1", {
    scrollTrigger: { trigger: ".hero", start: "top 70%", toggleActions: "play none none none" },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from(".hero .read-more", {
    scrollTrigger: { trigger: ".hero", start: "top 65%", toggleActions: "play none none none" },
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "power2.out",
  });

  gsap.from(".about .about-intro", {
    scrollTrigger: { trigger: ".about", start: "top 80%", toggleActions: "play none none none" },
    x: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".about .team-member", {
    scrollTrigger: { trigger: ".about", start: "top 70%", toggleActions: "play none none none" },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(".services .services-header", {
    scrollTrigger: { trigger: ".services", start: "top 80%", toggleActions: "play none none none" },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".services .service-item", {
    scrollTrigger: { trigger: ".services .services-grid", start: "top 75%", toggleActions: "play none none none" },
    y: 70,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    ease: "power3.out",
  });

  gsap.from(".testimonials .testimonials-header", {
    scrollTrigger: { trigger: ".testimonials", start: "top 80%", toggleActions: "play none none none" },
    x: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".testimonials .testimonial-item", {
    scrollTrigger: { trigger: ".testimonials .testimonials-grid", start: "top 75%", toggleActions: "play none none none" },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(".logo-section .swiper-slide", {
    scrollTrigger: { trigger: ".logo-section", start: "top 80%", toggleActions: "play none none none" },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
  });

  gsap.from(".site-footer .footer-wrapper > div", {
    scrollTrigger: { trigger: ".site-footer", start: "top 85%", toggleActions: "play none none none" },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(".site-footer .footer-socials a", {
    scrollTrigger: { trigger: ".site-footer", start: "top 80%", toggleActions: "play none none none" },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });
}
