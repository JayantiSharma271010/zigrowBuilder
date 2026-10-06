// NAV: mobile toggle + sticky + close behaviors
(() => {
  const nav = document.querySelector(".custom-navbar");
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mainNav");
  const toggleIcon = toggle?.querySelector("[data-icon]");

  if (!nav || !toggle || !menu) return;

  const openMenu = () => {
    toggle.classList.add("active");
    menu.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
    if (toggleIcon) {
      toggleIcon.classList.replace("bi-list", "bi-x-lg");
      toggleIcon.dataset.icon = "close-menu";
    }
  };

  const closeMenu = () => {
    toggle.classList.remove("active");
    menu.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    if (toggleIcon) {
      toggleIcon.classList.replace("bi-x-lg", "bi-list");
      toggleIcon.dataset.icon = "menu";
    }
  };

  // Toggle click
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    if (menu.classList.contains("active")) closeMenu();
    else openMenu();
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const isInside = nav.contains(e.target);
    if (!isInside) closeMenu();
  });

  // Close when clicking a link (mobile)
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeMenu());
  });

  // Sticky on scroll
  const stickyOffset = 40;
  window.addEventListener("scroll", () => {
    if (window.scrollY > stickyOffset) nav.classList.add("is-sticky");
    else nav.classList.remove("is-sticky");
  });
})();

// back to top btn
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.add("is-visible");
  } else {
    backToTopBtn.classList.remove("is-visible");
  }
};

backToTopBtn.onclick = (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// mouse trail effect
const trailContainer = document.getElementById("mouse-trail");
if (!trailContainer) {
  console.warn("mouse-trail container not found");
}

let lastTime = 0;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reducedMotion.matches) document.addEventListener("mousemove", (e) => {
  // throttle to ~60fps (you can raise the ms for fewer dots)
  const now = performance.now();
  if (now - lastTime < 16) return; // 16ms = 60fps
  lastTime = now;

  // compute position relative to the fixed container (handles scrolling)
  const rect = trailContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const dot = document.createElement("div");
  dot.className = "trail-dot";
  trailContainer.appendChild(dot);
  const trailAnimation = dot.animate(
    [
      { transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(1)`, opacity: 0.9 },
      { transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(0.5)`, opacity: 0 },
    ],
    { duration: 700, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" }
  );
  trailAnimation.addEventListener("finish", () => dot.remove(), { once: true });
});

// gsap animation

if (window.gsap && window.ScrollTrigger && !reducedMotion.matches) {
gsap.registerPlugin(ScrollTrigger);
if (window.innerWidth > 768) {
  // Navbar Animation on Page Load
  gsap.from(".custom-navbar", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Hero Section Animation
  gsap.from(".hero-content", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#hero",
      start: "top 80%",
    },
  });

  gsap.from(".hero-media__images", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#hero",
      start: "top 80%",
    },
  });

  // About Section Animation
  gsap.from(".about-section__media", {
    x: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
  });

  gsap.from(".about-section__content", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
  });

  // Testimonial section animation
  gsap.from(".testimonial-section__img", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 80%",
    },
  });

  gsap.from(".testimonial-section__content", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 80%",
    },
  });

  // Daycare schedule cards animation
  gsap.from(".day-care-options-section__card", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".day-care-options-section",
      start: "top 80%",
    },
  });

  // Heading animations in Daycare section
  gsap.from(".day-care-options-section__label, .day-care-options-section__title", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".day-care-options-section",
      start: "top 85%",
    },
  });

  /** WHY US SECTION **/
  gsap.from(".why-us-section__left", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".why-us-section",
      start: "top 80%",
    },
  });

  /** GALLERY SECTION **/
  gsap.from(".gallery-section__item", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top 85%",
    },
  });

  /** DAILY ACTIVITIES **/
  gsap.from(
    ".daily-activities-section__subtitle, .daily-activities-section__title",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".daily-activities-section",
        start: "top 85%",
      },
    }
  );

  gsap.from(".daily-activities-section__media", {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".daily-activities-section__media",
      start: "top 85%",
    },
  });

  /** PROGRAM HIGHLIGHTS **/
  gsap.from(".program-highlights-section__item", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".program-highlights-section",
      start: "top 80%",
    },
  });

  /** MEET THE TEACHERS **/
  gsap.from(".meet-teachers-section__subtitle, .meet-teachers-section__title", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".meet-teachers-section",
      start: "top 85%",
    },
  });

  gsap.from(".meet-teachers-section__card", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".meet-teachers-section__row",
      start: "top 80%",
    },
  });

  /** PARENT TESTIMONIAL **/
  gsap.from(".parent-testimonial__subtitle", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".parent-testimonial",
      start: "top 85%",
    },
  });

  /** FOOTER CTA **/
  gsap.from(".footer-cta__title", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-cta",
      start: "top 85%",
    },
  });

  gsap.from(".footer-cta__text", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-cta",
      start: "top 85%",
    },
  });

  gsap.from(".footer-cta__button", {
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".footer-cta",
      start: "top 85%",
    },
  });

  /** FOOTER **/
  gsap.from(".site-footer__copy", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".site-footer",
      start: "top 90%",
    },
  });

  gsap.from(".site-footer__social a", {
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".site-footer",
      start: "top 90%",
    },
  });
}
}
