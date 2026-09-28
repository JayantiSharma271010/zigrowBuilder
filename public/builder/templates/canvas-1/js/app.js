const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

function setMenuState(isOpen) {
  if (!menuBtn || !navMenu) return;

  const menuIcon = menuBtn.querySelector("i[data-icon]");
  navMenu.classList.toggle("active", isOpen);
  menuBtn.classList.toggle("active", isOpen);
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

  if (menuIcon) {
    menuIcon.classList.toggle("bi-list", !isOpen);
    menuIcon.classList.toggle("bi-x-lg", isOpen);
    menuIcon.setAttribute("data-icon", isOpen ? "close" : "menu");
  }
}

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    setMenuState(!navMenu.classList.contains("active"));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("active")) {
      setMenuState(false);
      menuBtn.focus();
    }
  });
}

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!reduceMotion && window.innerWidth > 768 && window.gsap) {
  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.from(".header", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".hero h1", {
    y: 50,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".hero p", {
    y: 30,
    opacity: 0,
    delay: 0.2,
    duration: 1,
  });

  gsap.from(".hero-actions", {
    scale: 0.8,
    opacity: 0,
    delay: 0.4,
    duration: 0.8,
  });

  gsap.from(".about-text", {
    scrollTrigger: ".about",
    x: -100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".about-image img", {
    scrollTrigger: ".about",
    y: 100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".services h2", {
    scrollTrigger: ".services",
    y: 50,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".services p", {
    scrollTrigger: ".services",
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  gsap.from(".contact-item", {
    scrollTrigger: ".contact",
    x: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  gsap.from(".contact-icon-wrap i", {
    scrollTrigger: ".contact",
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });

  gsap.from(".contact-right img", {
    scrollTrigger: ".contact",
    x: 100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".footer p", {
    scrollTrigger: ".footer",
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
}
