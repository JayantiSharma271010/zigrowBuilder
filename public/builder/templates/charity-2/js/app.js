(function () {
  const navbar = document.querySelector(".zg-navbar");
  const toggle = document.querySelector(".zg-navbar__toggle");
  const mobileNav = document.getElementById("zgMobileNav");

  if (!navbar || !toggle || !mobileNav) return;

  function closeMenu() {
    navbar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = navbar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // close when clicking a link
  mobileNav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeMenu();
  });

  // close on outside click
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) closeMenu();
  });

  // close on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
// sticky navbar

(function () {
  const navbar = document.querySelector(".zg-navbar");
  if (!navbar) return;

  const stickyAfter = 80; // px after which it becomes sticky

  function onScroll() {
    if (window.scrollY > stickyAfter) navbar.classList.add("is-sticky");
    else navbar.classList.remove("is-sticky");
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// back to top btn
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
};
backToTopBtn.onclick = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
};
// gsap animation start heare
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && window.innerWidth > 768 && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  // Animate Left Text
  gsap.from(".zg-hero__left", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#hero",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate Right Text
  gsap.from(".zg-hero__right", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#hero",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate Join Us Right (text)
  gsap.from(".zg-join__right", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#join-us",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none",
    },
  });
  // Mission Header Animation
  gsap.from(".zg-mission__header", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#mission",
      start: "top 85%",
      toggleActions: "play none none",
    },
  });

  // Mission Items Animation (staggered)
  gsap.from(".zg-mission__item", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".zg-mission__row",
      start: "top 80%",
      toggleActions: "play none none",
    },
  });

  // Mission Button Animation
  gsap.from(".zg-mission__btn", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".zg-mission__btn",
      start: "top 90%",
      toggleActions: "play none none",
    },
  });

  // Project Heading Animation
  gsap.from(".zg-projects__heading", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#projects",
      start: "top 85%",
      toggleActions: "play none none",
    },
  });

  // Project Cards Animation (staggered)
  gsap.from(".zg-projects__card", {
    y: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".zg-projects__row",
      start: "top 80%",
      toggleActions: "play none none",
    },
  });

  // Partners Section
  gsap.from(".zg-partners__text", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#partners",
      start: "top 80%",
      toggleActions: "play none none",
    },
  });

  gsap.from(".zg-partners__logo-col", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".zg-partners__logos",
      start: "top 85%",
      toggleActions: "play none none",
    },
  });

  // Testimonial Section
  gsap.from(".zg-testimonial__content", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: "#testimonial",
      start: "top 85%",
      toggleActions: "play none none",
    },
  });

  // Footer Section
  gsap.from(".zg-footer__col", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: "#footer",
      start: "top 90%",
      toggleActions: "play none none ",
    },
  });

  gsap.from(".zg-footer__bottom", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".zg-footer__bottom",
      start: "top 95%",
      toggleActions: "play none none",
    },
  });
}
