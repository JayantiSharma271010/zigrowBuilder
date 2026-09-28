// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.add("is-visible");
  } else {
    backToTopBtn.classList.remove("is-visible");
  }
};

backToTopBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: motionQuery.matches ? "auto" : "smooth",
  });
};

// Sticky Navbar + ScrollSpy
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("header");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links li a");

  // Sticky navbar
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  // Active nav link highlight
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // adjust offset
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Toggle Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuToggle.querySelector("i");

function setMenuState(isOpen) {
  navLinks.classList.toggle("active", isOpen);
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
  menuIcon.classList.toggle("fa-bars", !isOpen);
  menuIcon.classList.toggle("fa-xmark", isOpen);
  menuIcon.setAttribute("data-icon", isOpen ? "close" : "menu");
}

menuToggle.addEventListener("click", () => {
  setMenuState(!navLinks.classList.contains("active"));
});

// Close menu when a link is clicked (on mobile)
document.querySelectorAll(".nav-links li a").forEach((link) => {
  link.addEventListener("click", () => {
    setMenuState(false);
  });
});
// gsap animations start here
if (
  window.innerWidth > 768 &&
  !motionQuery.matches &&
  window.gsap &&
  window.ScrollTrigger
) {
  gsap.registerPlugin(ScrollTrigger);

  // Hero section animation
  gsap.from("#hero .hero-section__title", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 80%", // when top of hero is 80% from top of viewport
      toggleActions: "play none none",
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#hero .hero-section__text", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 70%",
      toggleActions: "play none none",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from("#hero .hero-section__btn", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 65%",
      toggleActions: "play none none",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
  });

  // === Featured Section ===
  gsap.from("#featured .featured-section__title", {
    scrollTrigger: {
      trigger: "#featured",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#featured .featured-section__logo-item", {
    scrollTrigger: {
      trigger: "#featured",
      start: "top 75%",
      toggleActions: "play none none",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15, // each logo animates one by one
  });

  // === Topics Section ===
  gsap.from("#topics .topics-section__title", {
    scrollTrigger: {
      trigger: "#topics",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#topics .topics-section__item", {
    scrollTrigger: {
      trigger: "#topics",
      start: "top 70%",
      toggleActions: "play none none",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2, // each card fades in with delay
  });
  // === Services Section ===
  gsap.from("#services .services-section__title", {
    scrollTrigger: {
      trigger: "#services",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#services .services-section__btn", {
    scrollTrigger: {
      trigger: "#services",
      start: "top 75%",
      toggleActions: "play none none",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from("#services .services-section__list-item", {
    scrollTrigger: {
      trigger: "#services",
      start: "top 70%",
      toggleActions: "play none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2, // each service item animates in sequence
    ease: "power3.out",
  });

  // === About Section ===
  gsap.from("#about .about-section__subtitle", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#about .about-section__heading", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 75%",
      toggleActions: "play none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.from("#about .about-section__image", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
      toggleActions: "play none none",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out",
  });

  gsap.from(
    "#about .about-section__text, #about .about-section__btn, #about .about-section__description",
    {
      scrollTrigger: {
        trigger: "#about",
        start: "top 65%",
        toggleActions: "play none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    }
  );

  // === Client Review Section ===
  gsap.from("#client-review .client-review-section__heading", {
    scrollTrigger: {
      trigger: "#client-review",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // === CTA Section ===
  gsap.from("#cta .cta-section__heading", {
    scrollTrigger: {
      trigger: "#cta",
      start: "top 80%",
      toggleActions: "play none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#cta .cta-section__text", {
    scrollTrigger: {
      trigger: "#cta",
      start: "top 75%",
      toggleActions: "play none none",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from("#cta .cta-section__btn", {
    scrollTrigger: {
      trigger: "#cta",
      start: "top 70%",
      toggleActions: "play none none",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
  });

  // === Footer Section ===
  gsap.from("#footer .footer-section__col", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 85%",
      toggleActions: "play none none",
    },
    y: 70,
    opacity: 0,
    duration: 1,
    stagger: 0.25, // each footer column comes in sequence
    ease: "power3.out",
  });

  gsap.from("#footer .footer-section__bottom-text", {
    scrollTrigger: {
      trigger: "#footer .footer-section__bottom",
      start: "top 90%",
      toggleActions: "play none none",
    },
    y: 20,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });
}
