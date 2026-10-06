const caseStudiesElement = document.querySelector(".caseStudiesSwiper");
if (caseStudiesElement && window.Swiper) {
  new Swiper(caseStudiesElement, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
  });
}

const backToTopBtn = document.getElementById("backToTop");
const navbar = document.getElementById("mainNavbar");
const navLinks = document.querySelectorAll(".nav-item-link");
const navbarCollapse = document.getElementById("navbarContent");
const navbarToggler = document.querySelector(".custom-hamburger");

function updateScrollState() {
  backToTopBtn.classList.toggle("show", window.scrollY > 300);
  navbar.classList.toggle("sticky-navbar", window.scrollY > 80);

  navLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    const start = target.offsetTop - 150;
    const active = window.scrollY >= start && window.scrollY < start + target.offsetHeight;
    if (active) navLinks.forEach((candidate) => candidate.classList.toggle("active", candidate === link));
  });
}

window.addEventListener("scroll", updateScrollState, { passive: true });
backToTopBtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function setToggleIcon(open) {
  navbarToggler.classList.toggle("collapsed", !open);
  navbarToggler.setAttribute("aria-expanded", String(open));
  const icon = navbarToggler.querySelector("[data-icon]");
  if (icon) {
    icon.classList.toggle("bi-list", !open);
    icon.classList.toggle("bi-x-lg", open);
    icon.dataset.icon = open ? "close" : "menu";
  }
}

navbarCollapse.addEventListener("shown.bs.collapse", () => setToggleIcon(true));
navbarCollapse.addEventListener("hidden.bs.collapse", () => setToggleIcon(false));

function closeMobileMenu() {
  if (!navbarCollapse.classList.contains("show") || !window.bootstrap) return;
  bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false }).hide();
}

navLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));
document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target)) closeMobileMenu();
});
updateScrollState();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reducedMotion && window.innerWidth >= 768 && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  const shared = { opacity: 0, duration: 1, ease: "power2.out" };
  gsap.from(".hero-row > [class*='col-']", { ...shared, y: 80, stagger: 0.25 });
  gsap.from(".about-section .about-content", { ...shared, scrollTrigger: { trigger: ".about-section", start: "top 80%" }, x: -80 });
  gsap.from(".about-section .about-media", { ...shared, scrollTrigger: { trigger: ".about-section", start: "top 80%" }, x: 80 });
  gsap.from(".services-row > [class*='col-']", { ...shared, scrollTrigger: { trigger: ".services-section", start: "top 80%" }, y: 70, stagger: 0.2 });
  gsap.from(".stats-row .stat-col", { ...shared, scrollTrigger: { trigger: ".stats-section", start: "top 85%" }, y: 45, stagger: 0.15 });
  gsap.from(".case-desktop-grid .case-card", { ...shared, scrollTrigger: { trigger: ".case-studies-section", start: "top 80%" }, y: 45, stagger: 0.15 });
  gsap.from(".ready-row > [class*='col-']", { ...shared, scrollTrigger: { trigger: ".ready-section", start: "top 80%" }, y: 45, stagger: 0.2 });
}
