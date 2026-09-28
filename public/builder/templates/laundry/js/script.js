// Sticky navbar on scroll
const navbar = document.getElementById("mainNavbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("sticky-navbar");
  } else {
    navbar.classList.remove("sticky-navbar");
  }
});

// Close the mobile menu before calculating internal-link scroll positions.
document.querySelectorAll('#mainNavbar a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    if (link.classList.contains('nav-link')) {
      document.querySelectorAll('.nav-link').forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    }

    const navbarCollapse = document.getElementById('navbarContent');
    const navigate = () => {
      window.history.pushState(null, '', link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (navbarCollapse.classList.contains('show')) {
      if (window.bootstrap?.Collapse) {
        navbarCollapse.addEventListener('hidden.bs.collapse', navigate, { once: true });
        bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false }).hide();
      } else {
        document.querySelector('.navbar-toggler')?.click();
        window.setTimeout(navigate, 350);
      }
    } else {
      navigate();
    }
  });
});

// Close navbar if clicking outside
document.addEventListener('click', function (event) {
  const navbar = document.getElementById('mainNavbar');
  const navbarCollapse = document.getElementById('navbarContent');
  const toggler = document.querySelector('.navbar-toggler');

  const isClickInside = navbar.contains(event.target);

  if (!isClickInside && navbarCollapse.classList.contains('show')) {
    toggler.click();
  }
});

// Update active nav link on scroll
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

// Swiper slider
if (window.Swiper) {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
}

// Back to top button
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

if (window.AOS) {
  window.addEventListener('resize', AOS.refresh);
}
