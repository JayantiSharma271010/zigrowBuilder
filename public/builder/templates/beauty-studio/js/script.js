// GSAP ANIMATIONS
gsap.registerPlugin(ScrollTrigger);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {



// Hero text fades in and slides up
gsap.from(".beauty-text", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
  ease: "power2.out"
});

// Wow Box animates in from the bottom left
gsap.from(".wow-box", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  ease: "power2.out"
});

gsap.from(".about-image", {
  y: 80,
  opacity: 0,
  duration: 0.8,
  delay: 0.1,
  scrollTrigger: {
    trigger: ".about-section",
    scroller: "body",
    markers: false,
    start: "top 90%",
  }
});

// PROCESS SECTION ANIMATION
gsap.from(".process-item", {
  x: -50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".process-section",
    scroller: "body",
    markers: false,
    start: "top 95%",
  }
});

gsap.from(".service-card", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 85%",
    toggleActions: "play none none none"
  }
});

// Pricing Cards Animation
gsap.from(".custom-pricing-row > .clonable-card", {
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".pricing-section",
    start: "top 85%",
    toggleActions: "play none none none"
  }
});

gsap.from(".expert-card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".experts-section",
    scroller: "body",
    markers: false,
    start: "top 80%",
    end: "top 40%",
    scrub: 2
  }
});


// QUALITY SECTION JS (GSAP & Accordion)
let mm = gsap.matchMedia();

mm.add("(min-width: 993px)", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".quality-section",
      start: "top 75%",
      end: "top 30%",
      scrub: 1,
      markers: false
    }
  })
  .from(".quality-image", { y: 100, opacity: 0, duration: 1.2 })
  .from(".quality-tag", { y: 30, opacity: 0, duration: 0.6 }, "-=0.6")
  .from(".quality-heading", { y: 40, opacity: 0, duration: 0.8 }, "-=0.4")
  .from(".accordion-item", { y: 20, opacity: 0, stagger: 0.2, duration: 0.6 }, "-=0.4")
  .from(".quality-section .book-btn", { y: 12, scale: 0.96, duration: 0.45 }, "-=0.2");
});

mm.add("(max-width: 992px)", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".quality-section",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  })
  .from(".quality-image", { y: 40, opacity: 0, duration: 1 })
  .from(".quality-content > *", {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6
  }, "-=0.5");
});
}

// BEAUTY TIPS SWIPER INITIALIZATION
var tipsSwiper = new Swiper(".tipsSwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: prefersReducedMotion ? false : {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: prefersReducedMotion ? 0 : 800,
  navigation: {
    nextEl: ".tipsSwiper .swiper-button-next",
    prevEl: ".tipsSwiper .swiper-button-prev",
  },
});

// TESTIMONIAL SWIPER INITIALIZATION
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  rewind: true,
  speed: prefersReducedMotion ? 0 : 800,
  navigation: {
    nextEl: ".testimonial-section .next-btn",
    prevEl: ".testimonial-section .prev-btn",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    }
  }
});
