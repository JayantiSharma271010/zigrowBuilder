const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("is-active");

  const expanded = navToggle.classList.contains("is-active");
  navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  const menuIcon = navToggle.querySelector("i");
  menuIcon.classList.toggle("bi-list", !expanded);
  menuIcon.classList.toggle("bi-x-lg", expanded);
});

document.querySelectorAll('#navMenu a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
    const menuIcon = navToggle.querySelector("i");
    menuIcon.classList.add("bi-list");
    menuIcon.classList.remove("bi-x-lg");
  });
});

// back to top button
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
};
// sticky navbar
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("header");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
// Custom Cursor
// Select cursor elements
const cursor = document.querySelector(".cursor");
const cursorOutline = document.querySelector(".cursor-outline");

// Mouse move tracking
window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: "power2.out",
  });

  gsap.to(cursorOutline, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: "power3.out",
  });
});

// Hover effect on links & buttons
document
  .querySelectorAll("a, button, .btn-appointment, .subscribe-btn")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 1.5, backgroundColor: "#fff", duration: 0.3 });
      gsap.to(cursorOutline, { scale: 2, borderColor: "#fff", duration: 0.3 });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "#00c896", duration: 0.3 });
      gsap.to(cursorOutline, {
        scale: 1,
        borderColor: "#00c896",
        duration: 0.3,
      });
    });
  });

// gsap animations

gsap.registerPlugin(ScrollTrigger);
const safeGsapFrom = (targets, variables) => {
  const hasTargets =
    typeof targets !== "string" || document.querySelector(targets);
  const trigger = variables?.scrollTrigger?.trigger;
  const hasTrigger =
    typeof trigger !== "string" || document.querySelector(trigger);

  if (hasTargets && hasTrigger) {
    gsap.from(targets, variables);
  }
};
if (window.innerWidth > 768) {
  // Hero Section Animations
  safeGsapFrom(".hero-subtitle", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  safeGsapFrom(".hero-title", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
  });

  safeGsapFrom(".hero-text", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 70%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out",
  });

  safeGsapFrom(".hero-image img", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top 70%",
    },
    x: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.5,
    ease: "power3.out",
  });

  /* ==========================*/
  safeGsapFrom("#facilities .facilities-image img", {
    scrollTrigger: {
      trigger: "#facilities",
      start: "top 80%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  safeGsapFrom("#facilities .card-box", {
    scrollTrigger: {
      trigger: "#facilities",
      start: "top 75%",
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.3, // each card animates one after another
  });

  /* ==========================
   Research Section
   ========================== */
  safeGsapFrom("#research .research-image img", {
    scrollTrigger: {
      trigger: "#research",
      start: "top 80%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  safeGsapFrom("#research .research-content h2", {
    scrollTrigger: {
      trigger: "#research",
      start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
  });

  safeGsapFrom(
    "#research .research-content p, #research .research-content hr, #research blockquote, #research .author",
    {
      scrollTrigger: {
        trigger: "#research",
        start: "top 70%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out",
      stagger: 0.2,
    }
  );

  /* ==========================
   Trust Us Section
   ========================== */
  safeGsapFrom("#trust-us .trust-image", {
    scrollTrigger: {
      trigger: "#trust-us",
      start: "top 80%",
    },
    x: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  safeGsapFrom("#trust-us .trust-content h2", {
    scrollTrigger: {
      trigger: "#trust-us",
      start: "top 78%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power3.out",
  });

  safeGsapFrom("#trust-us .trust-content p", {
    scrollTrigger: {
      trigger: "#trust-us",
      start: "top 75%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power3.out",
  });

  safeGsapFrom("#trust-us .feature-item", {
    scrollTrigger: {
      trigger: "#trust-us",
      start: "top 70%",
    },
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2, // each feature item slides in one by one
  });

  /* ==========================
   Case Studies Section
   ========================== */
  safeGsapFrom("#case-studies .case-header h2", {
    scrollTrigger: {
      trigger: "#case-studies",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
  });

  safeGsapFrom("#case-studies .case-header p", {
    scrollTrigger: {
      trigger: "#case-studies",
      start: "top 78%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power3.out",
  });

  safeGsapFrom("#case-studies .case-item", {
    scrollTrigger: {
      trigger: "#case-studies",
      start: "top 75%",
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.15, // grid images animate one by one
  });

  /* ==========================
   Testimonial (Left + Right Layout)
   ========================== */
  safeGsapFrom("#testimonial .testimonial-info", {
    scrollTrigger: {
      trigger: "#testimonial",
      start: "top 80%",
    },
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  safeGsapFrom("#testimonial .testimonial-card", {
    scrollTrigger: {
      trigger: "#testimonial",
      start: "top 75%",
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2,
  });
  /* ==========================
   Appointment Section
   ========================== */
  safeGsapFrom("#appointment-section .appointment-content h2", {
    scrollTrigger: {
      trigger: "#appointment-section",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
  });

  safeGsapFrom("#appointment-section .appointment-content p", {
    scrollTrigger: {
      trigger: "#appointment-section",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 0.9,
    delay: 0.2,
    ease: "power3.out",
  });

  safeGsapFrom("#appointment-section .btn-appointment", {
    scrollTrigger: {
      trigger: "#appointment-section",
      start: "top 78%",
    },
    scale: 0.85,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out(1.7)",
  });

  /* ==========================
   Newsletter Section
   ========================== */
  safeGsapFrom("#newsletter-section .newsletter-left", {
    scrollTrigger: {
      trigger: "#newsletter-section",
      start: "top 80%",
    },
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  safeGsapFrom("#newsletter-section .newsletter-right", {
    scrollTrigger: {
      trigger: "#newsletter-section",
      start: "top 80%",
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2,
  });

  safeGsapFrom("#newsletter-section .contact-item", {
    scrollTrigger: {
      trigger: "#newsletter-section .contact-row",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: "power3.out",
  });

  /* ==========================
   Footer Section
   ========================== */
  safeGsapFrom("#footer-section .footer-about", {
    scrollTrigger: {
      trigger: "#footer-section",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  safeGsapFrom("#footer-section .footer-col", {
    scrollTrigger: {
      trigger: "#footer-section",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: "power3.out",
  });

  safeGsapFrom("#footer-section .footer-bottom p", {
    scrollTrigger: {
      trigger: "#footer-section",
      start: "top 78%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    delay: 0.3,
    ease: "power3.out",
  });
}
