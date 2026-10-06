/* -------------------------------------------------------------------------- */
/*                            // Back to top button                           */
/* -------------------------------------------------------------------------- */
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (!backToTopBtn) return;
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
});



/* -------------------------------------------------------------------------- */
/*                         // Sticky navbar on scroll                         */
/* -------------------------------------------------------------------------- */
const navbar = document.getElementById("mainNavbar");
window.addEventListener("scroll", () => {
  if (!navbar) return;
  if (window.scrollY > 80) {
    navbar.classList.add("sticky-navbar");
  } else {
    navbar.classList.remove("sticky-navbar");
  }
});
/* -------------------------------------------------------------------------- */
/*                // Smooth scroll with offset on anchor click                */
/* -------------------------------------------------------------------------- */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    // Set active manually
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    /* -------------------------------------------------------------------------- */
    /*                          // Close navbar in mobile                         */
    /* -------------------------------------------------------------------------- */
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarContent');

    if (navbarToggler && navbarCollapse?.classList.contains('show')) {
      navbarToggler.click();
    }
  });
});

/* -------------------------------------------------------------------------- */
/*                   // Close navbar on link click (mobile)                   */
/* -------------------------------------------------------------------------- */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarContent');

    if (navbarToggler && navbarCollapse?.classList.contains('show')) {
      navbarToggler.click();
    }
  });
});

/* -------------------------------------------------------------------------- */
/*                     // Close navbar if clicking outside                    */
/* -------------------------------------------------------------------------- */
document.addEventListener('click', function (event) {
  const navbar = document.getElementById('mainNavbar');
  const navbarCollapse = document.getElementById('navbarContent');
  const toggler = document.querySelector('.navbar-toggler');

  if (!navbar || !navbarCollapse || !toggler) return;
  const isClickInside = navbar.contains(event.target);

  if (!isClickInside && navbarCollapse.classList.contains('show')) {
    toggler.click();
  }
});

/* -------------------------------------------------------------------------- */
/*                         // Hamburger menu animation                        */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");

  toggler?.addEventListener("click", function () {
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

document.querySelectorAll(".zoom-container").forEach((container) => {
  const image = container.querySelector(".card-img-top");

  container.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    image.style.transformOrigin = `${x}% ${y}%`;
    image.style.transform = "scale(2)";
  });

  container.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
    image.style.transformOrigin = "center center";
  });
});


/* -------------------------------------------------------------------------- */
/*                               GSAP Animation                               */
/* -------------------------------------------------------------------------- */

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 768 && window.gsap && window.ScrollTrigger && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.registerPlugin(ScrollTrigger);


    // Hero 
    const hero = document.querySelector("#hero");

    if (hero) {
      // Animate left background image
      gsap.from("#hero .hero-main-img", {
        scrollTrigger: {
          trigger: hero,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        y: 60,
        ease: "power2.out"
      });

      // Animate right stacked images
      gsap.from("#hero .hero-right img", {
        scrollTrigger: {
          trigger: hero,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        x: -50,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Animate heading inside .hero-text
      gsap.from("#hero .hero-text h1", {
        scrollTrigger: {
          trigger: hero,
          start: "top 75%",
        },
        duration: 1,
        opacity: 0,
        y: -30,
        delay: 0.2,
        ease: "power2.out"
      });

      // Animate paragraph inside .hero-text
      gsap.from("#hero .hero-text p", {
        scrollTrigger: {
          trigger: hero,
          start: "top 75%",
        },
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 0.4,
        ease: "power2.out"
      });

      // Animate CTA button inside .hero-text
      gsap.from("#hero .hero-text .primary-btn", {
        scrollTrigger: {
          trigger: hero,
          start: "top 75%",
        },
        duration: 1,
        scale: 0.8,
        opacity: 0,
        delay: 0.6,
        ease: "back.out(1.7)"
      });
    }


        // Popular Destinations
    const popDest = document.querySelector("#popular-destinations");

    if (popDest) {
      // Animate image card from left
      gsap.from("#popular-destinations .destination-card", {
        scrollTrigger: {
          trigger: popDest,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        x: -60,
        ease: "power2.out"
      });

      // Animate heading
      gsap.from("#popular-destinations h2", {
        scrollTrigger: {
          trigger: popDest,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        y: -30,
        delay: 0.2,
        ease: "power2.out"
      });

      // Animate guide info lines (paragraphs)
      gsap.from("#popular-destinations p", {
        scrollTrigger: {
          trigger: popDest,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.4,
        stagger: 0.15,
        ease: "power2.out"
      });

      // Animate CTA button
      gsap.from("#popular-destinations .primary-btn", {
        scrollTrigger: {
          trigger: popDest,
          start: "top 80%",
        },
        duration: 1,
        scale: 0.85,
        opacity: 0,
        delay: 0.6,
        ease: "back.out(1.7)"
      });
    }


        // Top Categories
    const topCategories = document.querySelector("#top-categories");

    if (topCategories) {
      // Animate section heading
      gsap.from("#top-categories h2", {
        scrollTrigger: {
          trigger: topCategories,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        y: -30,
        ease: "power2.out"
      });

      // Animate each card
      gsap.from("#top-categories .local-card", {
        scrollTrigger: {
          trigger: topCategories,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 40,
        stagger: 0.2,
        ease: "power2.out"
      });
    }

        // Featured Locals
    const featuredLocals = document.querySelector("#featured-locals");

    if (featuredLocals) {
      // Animate heading
      gsap.from("#featured-locals h2", {
        scrollTrigger: {
          trigger: featuredLocals,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        y: -30,
        ease: "power2.out"
      });

      // Animate cards
      gsap.from("#featured-locals .local-card", {
        scrollTrigger: {
          trigger: featuredLocals,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 40,
        stagger: 0.2,
        ease: "power2.out"
      });
    }

        // Review Highlight
    const reviewHighlight = document.querySelector("#review-highlight");

    if (reviewHighlight) {
     
  

      // Animate the testimonial box on the right
      gsap.from("#review-highlight .review-box", {
        scrollTrigger: {
          trigger: reviewHighlight,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        x: 50,
        delay: 0.2,
        ease: "power2.out"
      });

      // Animate heading inside testimonial
      gsap.from("#review-highlight h3", {
        scrollTrigger: {
          trigger: reviewHighlight,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: -20,
        delay: 0.4,
        ease: "power2.out"
      });

      // Animate paragraph content
      gsap.from("#review-highlight p", {
        scrollTrigger: {
          trigger: reviewHighlight,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.5,
        stagger: 0.15,
        ease: "power2.out"
      });
    }

    // Travel Stories
    const travelStories = document.querySelector("#travel-stories");

    if (travelStories) {
      // Animate heading
      gsap.from("#travel-stories h2", {
        scrollTrigger: {
          trigger: travelStories,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: -40,
        ease: "power2.out"
      });

      // Animate all text cards (excluding image-only containers)
      gsap.utils.toArray("#travel-stories .story-panel").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          duration: 1,
          opacity: 0,
          x: i % 2 === 0 ? 60 : -60, // Alternate direction
          ease: "power2.out",
          delay: 0.1 * i
        });
      });

      // Animate all large image cards (col-lg-7)
      gsap.utils.toArray("#travel-stories .col-lg-7 img").forEach((img, i) => {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          },
          duration: 1,
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60,
          ease: "power2.out",
          delay: 0.1 * i
        });
      });
    }

    // FAQ Section
    const faqSection = document.querySelector("#faq");

    if (faqSection) {
      // Animate heading and arrow
      gsap.from("#faq .col-12 h2, #faq .arrow-btn", {
        scrollTrigger: {
          trigger: faqSection,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: -40,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Animate accordion items
      gsap.utils.toArray("#faq .faq-item").forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          duration: 1,
          opacity: 0,
          y: 30,
          delay: i * 0.1,
          ease: "power2.out"
        });
      });

      // Animate illustration image
      gsap.from("#faq img", {
        scrollTrigger: {
          trigger: faqSection,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        scale: 0.9,
        ease: "back.out(1.7)"
      });
    }


        // App Promo Section
    const appPromo = document.querySelector("#app-promo");

    if (appPromo) {
      // Animate section heading
      gsap.from("#app-promo h2", {
        scrollTrigger: {
          trigger: appPromo,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: -30,
        ease: "power2.out"
      });

      // Animate cards (images)
      gsap.utils.toArray("#app-promo .local-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          duration: 1,
          opacity: 0,
          y: 40,
          delay: i * 0.1,
          ease: "power2.out"
        });
      });

      // Animate card titles and paragraphs
      gsap.utils.toArray("#app-promo .promo-title, #app-promo p").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          duration: 1,
          opacity: 0,
          y: 20,
          delay: i * 0.05,
          ease: "power2.out"
        });
      });
    }
    // Plan Your Journey
    const planSection = document.querySelector("#plan-your-journey");

    if (planSection) {
      // Animate heading and arrow
      gsap.from("#plan-your-journey h2, #plan-your-journey .arrow-btn", {
        scrollTrigger: {
          trigger: planSection,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        y: -30,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Animate form inputs
      gsap.utils.toArray("#plan-your-journey form [form-question-zigrow]").forEach((input, i) => {
        gsap.from(input, {
          scrollTrigger: {
            trigger: planSection,
            start: "top 90%",
          },
          duration: 0.8,
          opacity: 0,
          y: 20,
          delay: i * 0.1,
          ease: "power2.out"
        });
      });

      // Animate image on the right
      gsap.from("#plan-your-journey img", {
        scrollTrigger: {
          trigger: planSection,
          start: "top 85%",
        },
        duration: 1,
        opacity: 0,
        scale: 0.9,
        ease: "back.out(1.7)"
      });
    }
    // Footer Logo Animation
    const footer = document.querySelector("#footer");

    if (footer) {
      gsap.from("#footer .footer-logo-circle", {
        scrollTrigger: {
          trigger: footer,
          start: "top 95%", // Fires as the footer comes into view
        },
        duration: 1,
        opacity: 0,
        scale: 0.5,
        ease: "back.out(1.7)"
      });
    }


  }
});

(function () {
  const forms = Array.from(document.querySelectorAll('form[data-zigrow-form]'));
  if (!forms.length) return;

  function serializeForm(form) {
    const fd = new FormData(form);
    const raw = {};
    for (const [name, value] of fd.entries()) {
      const existing = raw[name];
      if (existing === undefined) raw[name] = value;
      else if (Array.isArray(existing)) existing.push(value === '' ? true : value);
      else raw[name] = [existing, value === '' ? true : value];
    }
    return raw;
  }

  function pickPrimaryValue(raw) {
    if (raw.email && String(raw.email).trim()) return String(raw.email).trim();
    if (raw.phone && String(raw.phone).trim()) return String(raw.phone).trim();
    const nameCombo = [raw.first_name, raw.last_name].filter(Boolean).join(' ').trim();
    if (raw.name && String(raw.name).trim()) return String(raw.name).trim();
    if (nameCombo) return nameCombo;
    if (raw.message && String(raw.message).trim()) return String(raw.message).trim();
    return '';
  }

  forms.forEach((form) => {
    const domainInput = form.querySelector('input[name="domain"]');
    const pageUrlInput = form.querySelector('input[name="page_url"]');
    if (domainInput) domainInput.value = location.host;
    if (pageUrlInput) pageUrlInput.value = location.href;

    let message = form.querySelector('.form-submit-message');
    if (!message) {
      message = document.createElement('div');
      message.className = 'form-submit-message';
      message.setAttribute('role', 'status');
      message.setAttribute('aria-live', 'polite');
      form.appendChild(message);
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const submitButton = form.querySelector(':scope > [type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.dataset.oldText = submitButton.textContent || '';
        submitButton.textContent = 'Submitting...';
      }
      message.textContent = '';
      message.removeAttribute('data-status');

      try {
        const raw = serializeForm(form);
        const body = new URLSearchParams();
        body.set('domain', form.querySelector('input[name="domain"]')?.value || location.host);
        body.set('form_key', form.querySelector('input[name="form_key"]')?.value || 'contact');
        body.set('page_url', form.querySelector('input[name="page_url"]')?.value || location.href);
        body.set('payload', JSON.stringify(raw));
        const primary = pickPrimaryValue(raw);
        if (primary) body.set('value', primary);
        if (raw._company) body.set('_company', raw._company);

        const response = await fetch(form.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body
        });
        const result = await response.json().catch(() => ({}));
        if (response.ok && (result.ok ?? true)) {
          form.reset();
          message.textContent = 'Thanks! Your request has been submitted.';
          message.dataset.status = 'success';
        } else {
          message.textContent = result.message || `Failed (HTTP ${response.status})`;
          message.dataset.status = 'error';
        }
      } catch (error) {
        console.error(error);
        message.textContent = 'Something went wrong. Please try again.';
        message.dataset.status = 'error';
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = submitButton.dataset.oldText || 'Send';
        }
      }
    });
  });
})();
