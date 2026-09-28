// for the navlink
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all links
    navLinks.forEach((lnk) => lnk.classList.remove("active"));
    // Add active class to the clicked link
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-toggle");
  const menu = document.getElementById("navbarMenu");
  const navbarSection = document.getElementById("navbarSection");

  const bsCollapse = new bootstrap.Collapse(menu, {
    toggle: false,
  });

  // Toggle hamburger and menu
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    const expanded = hamburger.classList.contains("is-active");
    hamburger.setAttribute("aria-expanded", expanded ? "true" : "false");
    const menuIcon = hamburger.querySelector("i");
    menuIcon.classList.toggle("bi-list", !expanded);
    menuIcon.classList.toggle("bi-x-lg", expanded);
    if (menu.classList.contains("show")) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
      navbarSection.classList.add("nav-dark");
    }
  });

  // Close on link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (menu.classList.contains("show")) {
        const target = document.querySelector(link.getAttribute("href"));
        event.preventDefault();
        menu.addEventListener(
          "hidden.bs.collapse",
          () => {
            if (target) {
              const alignTarget = (behavior = "auto") =>
                target.scrollIntoView({ behavior, block: "start" });
              alignTarget("smooth");
              window.setTimeout(() => alignTarget(), 1200);
              history.pushState(null, "", link.getAttribute("href"));
            }
          },
          { once: true }
        );
        bsCollapse.hide();
        hamburger.classList.remove("is-active");
        hamburger.setAttribute("aria-expanded", "false");
        const menuIcon = hamburger.querySelector("i");
        menuIcon.classList.add("bi-list");
        menuIcon.classList.remove("bi-x-lg");
        navbarSection.classList.remove("nav-dark");
      }
    });
  });
  // Close on outside click
  document.addEventListener("click", (e) => {
    if (
      !menu.contains(e.target) &&
      !hamburger.contains(e.target) &&
      menu.classList.contains("show")
    ) {
      bsCollapse.hide();
      hamburger.classList.remove("is-active");
      hamburger.setAttribute("aria-expanded", "false");
      const menuIcon = hamburger.querySelector("i");
      menuIcon.classList.add("bi-list");
      menuIcon.classList.remove("bi-x-lg");
      navbarSection.classList.remove("nav-dark");
    }
  });
});

// For adding the navbar background on start scrolling
window.addEventListener("scroll", () => {
  const navRef = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navRef.classList.add("nav-dark");
  } else {
    navRef.classList.remove("nav-dark");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const floatingButton = document.querySelector(".floating-btn");
  if (!floatingButton) return;

  const updateFloatingButton = () => {
    const visible = window.scrollY >= 10;
    floatingButton.style.opacity = visible ? "1" : "0";
    floatingButton.style.transform = visible
      ? "translateY(0)"
      : "translateY(50px)";
    floatingButton.style.pointerEvents = visible ? "auto" : "none";
  };

  floatingButton.addEventListener("click", (event) => {
    event.preventDefault();
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
    history.pushState(null, "", "#header");
  });

  window.addEventListener("scroll", updateFloatingButton);
  updateFloatingButton();
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 767.98) {
    // For the intersection overflow
    // For to active the menu links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbarMenu a");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              const href = link.getAttribute("href");
              if (!href) return;
              if (href.substring(1) === entry.target.id) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
    sections.forEach((section) => observer.observe(section));

    // Floating button js
    const btn = document.querySelector(".floating-btn");

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

    // Bounce animation on hover
    if (btn) {
      // Bounce animation on hover
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.1, duration: 0.2, ease: "power1.out" });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.2, ease: "power1.inOut" });
      });
    }

    // Navbar section
    const navbar = document.querySelector("#navbarSection");

    // Initial load animation for navbar
    safeGsapFrom(navbar, {
      y: -80, // slide down from above
      opacity: 0, // fade in
      duration: 0.8,
      ease: "power3.out",
    });

    // Home section
    safeGsapFrom(".hero-section .hero-heading", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    safeGsapFrom(".hero-section p", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.3,
    });

    safeGsapFrom(".hero-section .btn", {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.6,
    });

    //////////////////// Welcome section
    gsap.registerPlugin(ScrollTrigger);

    safeGsapFrom(".welcome-section .each-section-heading", {
      scrollTrigger: {
        trigger: ".welcome-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    safeGsapFrom(".welcome-section .each-section-para", {
      scrollTrigger: {
        trigger: ".welcome-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
    });

    safeGsapFrom(".welcome-section .d-flex", {
      scrollTrigger: {
        trigger: ".welcome-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      x: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
    });

    safeGsapFrom(".welcome-section .view-google-btn", {
      scrollTrigger: {
        trigger: ".welcome-section",
        start: "top 65%",
        toggleActions: "play none none reverse",
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.2,
    });

    safeGsapFrom(".welcome-section .img-wrapper", {
      scrollTrigger: {
        trigger: ".welcome-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // New Patient section
    safeGsapFrom(".new-patient-section .left-content-div", {
      scrollTrigger: {
        trigger: ".new-patient-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    safeGsapFrom(".new-patient-section .form-card", {
      scrollTrigger: {
        trigger: ".new-patient-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });

    safeGsapFrom(".new-patient-section .right-div", {
      scrollTrigger: {
        trigger: ".new-patient-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Dental Excellence
    safeGsapFrom(".dental-excellence-section .img-wrapper .img1", {
      scrollTrigger: {
        trigger: ".dental-excellence-section",
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    safeGsapFrom(".dental-excellence-section .img-wrapper .img2", {
      scrollTrigger: {
        trigger: ".dental-excellence-section",
        start: "top 80%",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });

    safeGsapFrom(".dental-excellence-section .pattern-bg", {
      scrollTrigger: {
        trigger: ".dental-excellence-section",
        start: "top 80%",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.5,
    });

    safeGsapFrom(".dental-excellence-section .col-lg-6.my-lg-0.my-5 > *", {
      scrollTrigger: {
        trigger: ".dental-excellence-section",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      delay: 0.2,
    });

    // Customer care excellence
    safeGsapFrom(".services-section .service-card", {
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 80%", // starts when section is in view
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Lifestyle section
    safeGsapFrom("#services .service-card2", {
      scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });

    safeGsapFrom("#services .insurance-card", {
      scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.5,
    });

    safeGsapFrom("#services .heading-card", {
      scrollTrigger: {
        trigger: "#services",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power2.out",
    });

    // Discount section
    safeGsapFrom(".discount-section .discount-image", {
      scrollTrigger: {
        trigger: ".discount-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      scale: 1.1,
      duration: 1,
      ease: "power2.out",
    });

    safeGsapFrom(".discount-section .discount-content", {
      scrollTrigger: {
        trigger: ".discount-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });

    // Happy section
    safeGsapFrom("#reviews .story-card", {
      scrollTrigger: {
        trigger: "#reviews",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    safeGsapFrom("#reviews .each-section-heading, #reviews .each-section-para", {
      scrollTrigger: {
        trigger: "#reviews",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: -10,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });

    // contact section
    safeGsapFrom("#contactus .each-section-heading", {
      scrollTrigger: {
        trigger: "#contactus",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    safeGsapFrom("#contactus .each-section-para", {
      scrollTrigger: {
        trigger: "#contactus",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: -30,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: "power2.out",
    });

    safeGsapFrom("#contactus .btn-view-on-googlemaps", {
      scrollTrigger: {
        trigger: "#contactus",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      delay: 0.4,
      ease: "back.out(1.7)",
    });

    safeGsapFrom("#contactus form, #contactus .map-div", {
      scrollTrigger: {
        trigger: "#contactus",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.3,
    });

    // footer section
    safeGsapFrom(".footer-section .footer-logo img", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    safeGsapFrom(".footer-section .social-icons a", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.15,
    });

    safeGsapFrom(".footer-section p", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: "power1.out",
    });
  }
});
