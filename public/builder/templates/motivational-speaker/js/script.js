const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

/* -------------------------------------------------------------------------- */
/*                            // Back to top button                           */
/* -------------------------------------------------------------------------- */
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* -------------------------------------------------------------------------- */
/*                         // Sticky navbar on scroll                         */
/* -------------------------------------------------------------------------- */
const navbar = document.getElementById("mainNavbar");
let spacer = null;
let isSticky = false;

// Smooth hysteresis so it doesn't flicker near the threshold
const STICKY_ON  = 120; // add at > 120px
const STICKY_OFF = 80;  // remove at < 80px

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (!isSticky && y > STICKY_ON) {
    // add sticky + reserve space
    navbar.classList.add("sticky-navbar");
    if (!spacer) {
      spacer = document.createElement("div");
      spacer.style.height = navbar.offsetHeight + "px";
      navbar.parentNode.insertBefore(spacer, navbar.nextSibling);
    }
    isSticky = true;
  } else if (isSticky && y < STICKY_OFF) {
    // remove sticky + spacer
    navbar.classList.remove("sticky-navbar");
    if (spacer) {
      spacer.remove();
      spacer = null;
    }
    isSticky = false;
  }
});


/* -------------------------------------------------------------------------- */
/*                // Smooth scroll with offset on anchor click                */
/* -------------------------------------------------------------------------- */
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // active class update
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // mobile navbar band karo
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarContent");
    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }

    // scroll with offset
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;

    const navH = document.getElementById('mainNavbar')?.offsetHeight || 0;
    const y = target.getBoundingClientRect().top + window.pageYOffset - (navH + 10);

    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});


/* -------------------------------------------------------------------------- */
/*                   // Close navbar on link click (mobile)                   */
/* -------------------------------------------------------------------------- */
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarContent");

    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  });
});

/* -------------------------------------------------------------------------- */
/*                     // Close navbar if clicking outside                    */
/* -------------------------------------------------------------------------- */
document.addEventListener("click", function (event) {
  const navbar = document.getElementById("mainNavbar");
  const navbarCollapse = document.getElementById("navbarContent");
  const toggler = document.querySelector(".navbar-toggler");

  const isClickInside = navbar.contains(event.target);

  if (!isClickInside && navbarCollapse.classList.contains("show")) {
    toggler.click();
  }
});

/* -------------------------------------------------------------------------- */
/*                         // Hamburger menu animation                        */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");

  toggler.addEventListener("click", function () {
    toggler.classList.toggle("is-active");
  });
});

/* -------------------------------------------------------------------------- */
/*                     // Update active nav link on scroll                    */
/* -------------------------------------------------------------------------- */
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  navLinks.forEach((link) => {
    const targetSection = document.querySelector(link.getAttribute("href"));

    if (targetSection) {
      const rect = targetSection.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      const sectionHeight = targetSection.offsetHeight;

      if (
        scrollY >= sectionTop - 150 &&
        scrollY < sectionTop + sectionHeight - 150
      ) {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
});


// Zigrow multi-form integration
(function () {
  const forms = Array.from(document.querySelectorAll("form[data-zigrow-form]"));
  if (!forms.length) return;

  function serializeForm(form) {
    const formData = new FormData(form);
    const raw = {};
    for (const [name, value] of formData.entries()) {
      const existing = raw[name];
      if (existing === undefined) raw[name] = value;
      else if (Array.isArray(existing)) existing.push(value === "" ? true : value);
      else raw[name] = [existing, value === "" ? true : value];
    }
    return raw;
  }

  function pickPrimaryValue(raw) {
    if (raw.email && String(raw.email).trim()) return String(raw.email).trim();
    if (raw.phone && String(raw.phone).trim()) return String(raw.phone).trim();
    const nameCombo = [raw.first_name, raw.last_name].filter(Boolean).join(" ").trim();
    if (raw.name && String(raw.name).trim()) return String(raw.name).trim();
    if (nameCombo) return nameCombo;
    if (raw.message && String(raw.message).trim()) return String(raw.message).trim();
    return "";
  }

  forms.forEach((form) => {
    const domainInput = form.querySelector('input[name="domain"]');
    const pageUrlInput = form.querySelector('input[name="page_url"]');
    if (domainInput) domainInput.value = location.host;
    if (pageUrlInput) pageUrlInput.value = location.href;

    const message = form.parentElement.querySelector(".form-submit-message");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submitButton = form.querySelector(':scope > [type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.dataset.oldText = submitButton.textContent || "";
        submitButton.textContent = "Submitting...";
      }
      if (message) {
        message.textContent = "";
        message.removeAttribute("data-status");
      }

      try {
        const raw = serializeForm(form);
        const body = new URLSearchParams();
        body.set("domain", domainInput?.value || location.host);
        body.set("form_key", form.querySelector('input[name="form_key"]')?.value || "contact");
        body.set("page_url", pageUrlInput?.value || location.href);
        body.set("payload", JSON.stringify(raw));
        const primary = pickPrimaryValue(raw);
        if (primary) body.set("value", primary);
        if (raw._company) body.set("_company", raw._company);

        const response = await fetch(form.action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
        const result = await response.json().catch(() => ({}));
        if (response.ok && (result.ok ?? true)) {
          form.reset();
          if (message) {
            message.textContent = "Thanks! Your request has been submitted.";
            message.dataset.status = "success";
          }
        } else if (message) {
          message.textContent = result.message || `Failed (HTTP ${response.status})`;
          message.dataset.status = "error";
        }
      } catch (error) {
        console.error(error);
        if (message) {
          message.textContent = "Something went wrong. Please try again.";
          message.dataset.status = "error";
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = submitButton.dataset.oldText || "Download";
        }
      }
    });
  });
})();

/* -------------------------------------------------------------------------- */
/*                              // GSAP Animation                             */
/* -------------------------------------------------------------------------- */

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 768) {
    gsap.registerPlugin(ScrollTrigger);

    // Sections
    // About Section Animation
    const aboutSection = document.querySelector("#about");

    if (aboutSection) {
      // Animate image (from left)
      gsap.from("#about .about-img", {
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 80%", // when top of section hits 80% viewport
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Animate text card (from right)
      gsap.from("#about .about-card", {
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });
    }

    const servicesSection = document.querySelector("#services");

    if (servicesSection) {
      gsap.from("#services .main-heading", {
        scrollTrigger: {
          trigger: servicesSection,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from("#services .main-subpara", {
        scrollTrigger: {
          trigger: servicesSection,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
    }

    const statsSection = document.querySelector("#stats");

if (statsSection) {
  gsap.from("#stats .stat-item", {
    scrollTrigger: {
      trigger: statsSection,
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
  });
}
const videoSection = document.querySelector("#video");

if (videoSection) {
  // Animate the video image
  gsap.from("#video .video-image", {
    scrollTrigger: {
      trigger: videoSection,
      start: "top 80%",
    },
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: "power2.out"
  });

  // Animate the play button after image
  gsap.from("#video .play-button", {
    scrollTrigger: {
      trigger: videoSection,
      start: "top 80%",
    },
    opacity: 0,
    scale: 0,
    duration: 0.6,
    delay: 0.5,
    ease: "back.out(1.7)"
  });
}

const featuresSection = document.querySelector("#features");

if (featuresSection) {
gsap.from("#features .main-heading", {
  scrollTrigger: {
    trigger: featuresSection,
    start: "top 90%",
  },
  y: 20,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out"
});

gsap.from("#features .main-subpara", {
  scrollTrigger: {
    trigger: featuresSection,
    start: "top 88%",
  },
  y: 20,
  opacity: 0,
  duration: 0.6,
  delay: 0.2,
  ease: "power2.out"
});

}

const testimonialsSection = document.querySelector("#testimonials");

if (testimonialsSection) {
  // Animate headings
  gsap.from("#testimonials .main-heading", {
    scrollTrigger: {
      trigger: testimonialsSection,
      start: "top 85%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.from("#testimonials .main-subpara", {
    scrollTrigger: {
      trigger: testimonialsSection,
      start: "top 83%",
    },
    y: 30,
    opacity: 0,
    delay: 0.2,
    duration: 0.8,
    ease: "power2.out"
  });

  // Animate swiper slides (once on scroll)
  gsap.from("#testimonials .swiper-slide", {
    scrollTrigger: {
      trigger: testimonialsSection,
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });
}

const heroSection = document.querySelector("#hero");

if (heroSection) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: "top center",
    }
  });

  tl.from("#hero h1", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  })
  .from("#hero p", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.6")
  .from("#hero .social-icons a", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out"
  }, "-=0.4")

  .from("#hero .hero-image-wrapper img", {
    opacity: 0,
    y: 30,
    scale: 0.98,
    duration: 1,
    ease: "power2.out"
  }, "-=0.6");
}

  }
});
