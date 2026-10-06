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
  if (!hamburger || !menu) return;

  const menuIcon = hamburger.querySelector("[data-icon]");

  const bsCollapse = new bootstrap.Collapse(menu, {
    toggle: false,
  });

  function syncMenuState(isOpen) {
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    if (menuIcon) {
      menuIcon.classList.toggle("bi-list", !isOpen);
      menuIcon.classList.toggle("bi-x-lg", isOpen);
      menuIcon.setAttribute("data-icon", isOpen ? "close" : "menu");
    }
  }

  menu.addEventListener("shown.bs.collapse", () => syncMenuState(true));
  menu.addEventListener("hidden.bs.collapse", () => syncMenuState(false));

  hamburger.addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
    }
  });

  // Close on link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        bsCollapse.hide();
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
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  rewind: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Floating button js
const btn = document.querySelector(".floating-btn");

if (btn) {
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 10);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (window.innerWidth >= 767.98 && motionAllowed) {
    // For the intersection overflow
    // For to active the menu links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbarMenu .nav-link");
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
        threshold: 0.8,
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Always enable this regardless of screen size
    gsap.registerPlugin(ScrollTrigger);

    /// GSAP animation for the navbar
    // GSAP animation for the navbar only
    gsap.from("#header", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    /// GSAP animation for the Section 1(Hero Section)
    // Timeline for smooth sequencing
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Animate left text block
    tl.from(".hero-section .avatar-img", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
    })
      .from(
        ".hero-section .avatar-img-text-div",
        {
          opacity: 0,
          y: 20,
        },
        "-=0.5"
      )
      .from(
        ".hero-section-heading",
        {
          opacity: 0,
          x: -50,
        },
        "-=0.4"
      )
      .from(
        ".hero-section-para",
        {
          opacity: 0,
          x: -30,
        },
        "-=0.6"
      );

    // Animate right image
    tl.from(
      ".hero-section .property-img",
      {
        opacity: 0,
        x: 80,
      },
      "-=1"
    );

    /// GSAP animation for the Section 2(About Us Section)
    const tlAbout = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutus",
        start: "top 80%", // when top of #aboutus hits 80% of viewport
        end: "bottom 40%",
        toggleActions: "play none none reverse", // play on enter, reverse on leave
      },
    });

    tlAbout.from("#aboutus .about-img", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    tlAbout.from(
      "#aboutus h2",
      {
        x: -80,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.8"
    );

    tlAbout.from(
      "#aboutus .about-section-para",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
      },
      "-=0.5"
    );

    /// GSAP animation for the Section 3(Explore Section)
    const exploreTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#ourproperties",
        start: "top 80%", // Trigger animation when 80% of section is in view
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate Heading and Subtext
    exploreTimeline.from("#ourproperties .each-section-name", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    exploreTimeline.from(
      "#ourproperties .each-section-para",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Animate Cards with stagger
    exploreTimeline.from(
      "#ourproperties .card",
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: {
          each: 0.15,
          grid: "auto",
          from: "start",
        },
      },
      "-=0.3"
    );

    /// GSAP animation for the Section 4(Why Choose Us Section)
    const whyChooseTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-choose-section",
        start: "top 80%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
    });

    // Heading & Paragraph Animation
    whyChooseTimeline.from(".why-choose-section .each-section-name", {
      x: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    whyChooseTimeline.from(
      ".why-choose-section .each-section-para",
      {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Feature List Staggered In
    whyChooseTimeline.from(
      ".why-choose-section .feature-item",
      {
        x: -20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.1,
      },
      "-=0.3"
    );

    // Image Slide In
    whyChooseTimeline.from(
      ".why-choose-section img",
      {
        x: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.5"
    );

    /// GSAP animation for the Section 5(Properties Section)
    const popularAreasTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".popular-areas",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate Heading and Paragraph
    popularAreasTimeline.from(".popular-areas .each-section-name", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    popularAreasTimeline.from(
      ".popular-areas .each-section-para",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Animate Each City Card with Stagger
    popularAreasTimeline.from(
      ".popular-areas .city-card",
      {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: {
          amount: 0.6,
          from: "center",
        },
      },
      "-=0.3"
    );

    /// GSAP animation for the Section 6(Explore Common Question Section)
    const faqTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate heading and paragraph
    faqTimeline.from(".faq-section .each-section-name", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    faqTimeline.from(
      ".faq-section .each-section-para",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Animate each accordion item
    faqTimeline.from(
      ".faq-section .accordion-item",
      {
        y: 30,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.15,
      },
      "-=0.3"
    );

    /// GSAP animation for the Section 7(Testimonial Section)
    const testimonialTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate heading and subheading
    testimonialTL.from(".testimonials-section .each-section-name", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    testimonialTL.from(
      ".testimonials-section .text-muted-style",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Animate image
    testimonialTL.from(
      ".testimonials-section img.rounded-start-image",
      {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );

    // Animate testimonial cards
    testimonialTL.from(
      ".testimonial-section-cards .testimonial-card",
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      },
      "-=0.4"
    );

    /// GSAP animation for the Section 8(Choice Section)
    const contactTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-help-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate the heading and paragraph
    contactTL.from(".contact-help-section .each-section-name", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    contactTL.from(
      ".contact-help-section .text-muted-style",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Animate each form field
    contactTL.from(
      ".contact-help-section form[data-zigrow-form] [form-question-zigrow]",
      {
        x: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Animate submit button
    contactTL.from(
      ".contact-help-section .btn",
      {
        scale: 0.95,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );

    /// GSAP animation for the Footer
    const footerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 85%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    // Animate footer columns one by one
    footerTimeline.from(
      ".footer-section .footer-logo-div, .footer-aboutus-div, .footer-contactinfo-div, .footer-location-div",
      {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      }
    );

    // Animate horizontal line
    footerTimeline.from(
      ".footer-section hr",
      {
        scaleX: 0,
        transformOrigin: "left center",
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Animate bottom row: social icons and links
    footerTimeline.from(
      ".footer-section .footer-social-icons i, .footer-section .text-md-end a",
      {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.3"
    );
  }
});
