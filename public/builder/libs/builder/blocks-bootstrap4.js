/*
Copyright 2017 Ziadin Givan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

https://github.com/givanz/Vvvebjs
*/

//Snippets from https://bootsnipp.com/license

Vvveb.BlocksGroup["Bootstrap"] = [
    "bootstrap4/zigrow-cta-1",
    "bootstrap4/zigrow-cta-2",
    "bootstrap4/zigrow-cta-3",
     "bootstrap4/zigrow-cta-4",
    "bootstrap4/zigrow-cta-5",
    "bootstrap4/zigrow-cta-6",
    "bootstrap4/zigrow-cta-7",
    "bootstrap4/zigrow-contact-1",
    "bootstrap4/zigrow-contact-2",
    "bootstrap4/zigrow-contact-3",
    "bootstrap4/zigrow-contact-4",
    "bootstrap4/zigrow-contact-5",
    "bootstrap4/zigrow-contact-6",
    "bootstrap4/zigrow-contact-7",
    "bootstrap4/zigrow-contact-8",
     "bootstrap4/zigrow-contact-9",
    "bootstrap4/zigrow-contact-10",
    "bootstrap4/zigrow-portfolio-1",
    "bootstrap4/zigrow-portfolio-2",
    "bootstrap4/zigrow-portfolio-3",
    "bootstrap4/zigrow-portfolio-4",
    "bootstrap4/zigrow-portfolio-5",
    "bootstrap4/zigrow-portfolio-7",
    "bootstrap4/zigrow-portfolio-8",
    "bootstrap4/zigrow-portfolio-9",
    "bootstrap4/zigrow-about-1",
    "bootstrap4/zigrow-about-2",
    "bootstrap4/zigrow-about-3",
    "bootstrap4/zigrow-about-4",
    "bootstrap4/zigrow-about-5",
    "bootstrap4/zigrow-about-6",
    "bootstrap4/zigrow-client-1",
    "bootstrap4/zigrow-client-2",
    "bootstrap4/zigrow-client-3",
    "bootstrap4/zigrow-client-4",
    "bootstrap4/zigrow-client-5",
    "bootstrap4/zigrow-client-6",
    "bootstrap4/zigrow-client-7",
    "bootstrap4/zigrow-faq-1",
    "bootstrap4/zigrow-faq-2",
    "bootstrap4/zigrow-faq-3",
    "bootstrap4/zigrow-faq-4",
    "bootstrap4/zigrow-faq-5",
    "bootstrap4/zigrow-faq-6",
    "bootstrap4/zigrow-hero-1",
    "bootstrap4/zigrow-hero-2",
    "bootstrap4/zigrow-hero-3",
    "bootstrap4/zigrow-hero-4",
    "bootstrap4/zigrow-hero-5",
    "bootstrap4/zigrow-hero-6",
    "bootstrap4/zigrow-hero-7",
    "bootstrap4/zigrow-hero-8",
    "bootstrap4/zigrow-hero-9",
    "bootstrap4/zigrow-hero-10",
    "bootstrap4/zigrow-pricing-1",
    "bootstrap4/zigrow-pricing-2",
    "bootstrap4/zigrow-pricing-3",
    "bootstrap4/zigrow-pricing-4",
    "bootstrap4/zigrow-pricing-5",
    "bootstrap4/zigrow-pricing-6",
    "bootstrap4/zigrow-pricing-7",
    "bootstrap4/zigrow-pricing-8",
    "bootstrap4/zigrow-pricing-9",
    "bootstrap4/zigrow-team-1",
    "bootstrap4/zigrow-team-2",
    "bootstrap4/zigrow-team-3",
    "bootstrap4/zigrow-team-5",
    "bootstrap4/zigrow-team-6",
    "bootstrap4/zigrow-team-7",
    "bootstrap4/zigrow-team-8",
    "bootstrap4/zigrow-product-1",
    "bootstrap4/zigrow-product-2",
    "bootstrap4/zigrow-product-3",
    "bootstrap4/zigrow-product-4",
    "bootstrap4/zigrow-product-5",
    "bootstrap4/zigrow-product-6",
    "bootstrap4/zigrow-footer-1",
    "bootstrap4/zigrow-footer-2",
    "bootstrap4/zigrow-footer-3",
    "bootstrap4/zigrow-footer-4",
    "bootstrap4/zigrow-footer-5",
    "bootstrap4/zigrow-footer-6",
    "bootstrap4/zigrow-parallax-1",
    "bootstrap4/zigrow-parallax-2",
    "bootstrap4/zigrow-design-1",
    "bootstrap4/zigrow-design-2",
    "bootstrap4/zigrow-design-3",
    "bootstrap4/zigrow-design-4",
    "bootstrap4/zigrow-design-5",
    "bootstrap4/zigrow-design-6",
    "bootstrap4/zigrow-service-1",
    "bootstrap4/zigrow-service-2",
    "bootstrap4/zigrow-service-3",
    "bootstrap4/zigrow-service-4",
    "bootstrap4/zigrow-service-5",
        "bootstrap4/zigrow-howItWorks-1",
    "bootstrap4/zigrow-howItWorks-2",
    "bootstrap4/zigrow-howItWorks-3",
    "bootstrap4/zigrow-counter-1",
    "bootstrap4/zigrow-counter-2",
    "bootstrap4/zigrow-counter-3",
    "bootstrap4/zigrow-counter-4",
    "bootstrap4/zigrow-counter-5",
];

// CTA Blocks
Vvveb.Blocks.add("bootstrap4/zigrow-cta-1", {
    name: "Cta",
    category: "cta",
    image: "https://i.postimg.cc/Ss47Vz3q/Screenshot-2025-11-13-182413.png",
    html: ` <section id="zigrow-cta-1" data-section="zigrow-cta-1" class="zigrow-cta-1 py-6">
      <div class="help-box">
        <h1 class="mb-5">
          Let Me Help You Overshoot Your Goals in the Right Ways.
        </h1>
        <a href="#" class="rounded-0 btn-cta" data-btn="cta">Start Now</a>
      </div>
       <style>
      .py-6 {
        padding: 3rem 0;
      }
      .zigrow-cta-1{
        background-color: var(--primary-colors, #76b86b);
        color: white;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .zigrow-cta-1 .help-box {
        max-width: 600px;
        text-align: center;
      }
      .zigrow-cta-1 .help-box .btn-cta {
        border-radius: 0%;
        background-color: var(--primary-colors, #76b86b);
        color: white;
        padding: 0.5rem 1.5rem;
        font-weight: 400;
        border: 1px solid white;
        text-decoration: none;
      }
      .zigrow-cta-1 .help-box .btn-cta:hover {
        background-color: white;
        color: var(--primary-colors, #76b86b);
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-cta-2", {
    name: "Cta",
    category: "cta",
    image: "https://i.postimg.cc/8CSyrXRv/Screenshot-2025-11-13-183415.png",
    html: `   <section id="zigrow-cta-2" data-section="zigrow-cta-2" class="zigrow-cta-2  py-6">
   

      <div class="container">
        <div class="help-text-box">
          <h1>Precision-Driven Manufacturing for Every Industry.</h1>
          <p>
            We deliver high-quality components, engineered with accuracy, speed,
            and unmatched craftsmanship— built to support your production goals.
          </p>
           <a href="tel:+9123456789" data-btn="cta">Get in touch</a>
        </div>
      </div>
        <style>
      .py-6{
        padding: 3rem 0;
      }
   /* Replace with this */
.zigrow-cta-2 {
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: url("https://i.postimg.cc/MG9V0r7m/2.webp") no-repeat center center / cover;
}

.zigrow-cta-2::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  pointer-events: none;
}
    
     /* Replace with this */
.zigrow-cta-2 .container {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
      .zigrow-cta-2  .help-text-box {
        color: #fff;
        text-align: center;
        max-width: 800px;
        max-width: 780px;
        margin: 0 auto;
        pointer-events: painted;
      }
      .zigrow-cta-2  .help-text-box h1 {
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 20px;
      }
      .zigrow-cta-2  .help-text-box p {
        font-size: 1.1rem;
        margin-bottom: 30px;
        color: #ddd;
      }
      .zigrow-cta-2  .help-text-box a {
        background-color:var(--primary-colors, #facc15);
        border-radius: 20px;
        border: none;
        text-decoration: none;
        color: #fff;
        padding: 0.5rem 1.6rem;
      }
      .zigrow-cta-2  .help-text-box a:hover {
        background-color: var(--primary-colors, #facc15);
      }
      @media (max-width: 991.98px) {
        .zigrow-cta-2  .help-text-box h1 {
          font-size: 2rem;
        }
        .zigrow-cta-2  .help-text-box p {
          font-size: 1rem;
        }
      }
      @media (max-width: 575.98px) {
        .zigrow-cta-2  .help-text-box {
          padding: 0 15px;
        }
        .zigrow-cta-2  .help-text-box h1 {
          font-size: 1.6rem;
        }
        .zigrow-cta-2  .help-text-box p {
          font-size: 0.95rem;
        }
        .zigrow-cta-2  .help-text-box a {
          padding: 10px 25px;
          font-size: 0.95rem;
        }
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-cta-3", {
    name: "Cta",
    category: "cta",
    image: "https://i.postimg.cc/d3kX9kDz/Screenshot-2025-11-13-184057.png",
    html: ` <section class="zigrow-cta-3 " data-section="zigrow-cta-3" id="zigrow-cta-3">
      <div class="zigrow-cta-3-overlay">
        <div class="container">
          <div class="footer-container-cta-3 py-6">
            <h2 class="no-theme-size zigrow-cta-3-title">Ready to Take the Next Step?</h2>
            <p class="zigrow-cta-3-text">
              We’re here to support you with reliable solutions crafted for your
              goals.
            </p>
            <a href="#contact" class="zigrow-cta-3-button" data-btn="cta">Contact Us</a>
          </div>
        </div>
      </div>
       <style>
      .py-6 {
        padding: 3rem 0;
      }
      .zigrow-cta-3  {
        background: url(https://i.postimg.cc/v8r548PN/12.webp) center center/cover no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 80vh;
      }
      .footer-container-cta-3 {
        text-align: center;
        pointer-events: painted;
      }
      .zigrow-cta-3  .zigrow-cta-3-overlay {
        background: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        pointer-events: none;
      }
      .zigrow-cta-3  .zigrow-cta-3-title {
        font-size: 1.8rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 1rem;
      }
      @media (min-width: 768px) {
        .zigrow-cta-3  .zigrow-cta-3-title {
          font-size: 2.5rem;
        }
      }
      .zigrow-cta-3 .zigrow-cta-3-text {
        font-size: 1rem;
        color: #f5f5f5;
        max-width: 600px;
        margin: 0 auto 2rem;
      }
      @media (min-width: 768px) {
        .zigrow-cta-3 .zigrow-cta-3-text {
          font-size: 1.1rem;
        }
      }
      .zigrow-cta-3 .zigrow-cta-3-button {
        display: inline-block;
        background-color: var(--primary-colors, #ff7f32);
        color: #fff;
        padding: 0.75rem 1.75rem;
        border-radius: 2rem;
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
      }
      .zigrow-cta-3 .zigrow-cta-3-button:hover {
        box-shadow: 0 0 20px var(--primary-colors, #ff7f32);
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-cta-4", {
  name: "Cta-4",
  category: "cta",
  image:
    "https://i.postimg.cc/Lst8RMvc/Screenshot-2026-07-22-161507.png",

  html: `
<section
  id="zigrow-cta-4"
  data-section="zigrow-cta-4"
  class="zigrow-cta-4"
>
  <div
    class="zigrow-cta-4-content"  data-zg-editable="surface"

  >
    <div class="zigrow-cta-4-decoration zigrow-cta-4-decoration-left"></div>
    <div class="zigrow-cta-4-decoration zigrow-cta-4-decoration-right"></div>

    <div class="zigrow-cta-4-content-inner">
      <p class="zigrow-cta-4-description">
        Our experienced team can help you create a meaningful experience
        designed around your goals and requirements.
      </p>

      <h2 class="no-theme-size zigrow-cta-4-title">
        TAILORED SOLUTIONS FOR EVERY GOAL
      </h2>

      <div class="zigrow-cta-4-action">
        <a
          href="#services"
          class="zigrow-cta-4-button"
          data-btn="cta"
        >
          DISCOVER MORE
        </a>
      </div>
    </div>
  </div>

  <style>
    .zigrow-cta-4 {
      position: relative;
      display: grid;
      width: 100%;
      min-height: 480px;
      padding: 70px 24px;
      place-items: center;
      overflow: hidden;
      background-image: url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=85");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .zigrow-cta-4::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(47, 25, 10, 0.3);
      pointer-events: none;
    }

    .zigrow-cta-4 .zigrow-cta-4-content {
      position: relative;
      z-index: 2;
      display: grid;
      width: min(100%, 990px);
      min-height: 290px;
      padding: 54px 40px;
      place-items: center;
      overflow: hidden;
      border: 1px dashed var(--primary-colors, #8c160f);
      background:#fff;
      box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, 0.35),
        0 18px 45px rgba(54, 26, 10, 0.14);
    }

    .zigrow-cta-4 .zigrow-cta-4-content-inner {
      position: relative;
      z-index: 3;
      display: grid;
      justify-items: center;
      width: min(100%, 820px);
      text-align: center;
    }

    .zigrow-cta-4 .zigrow-cta-4-description {
      max-width: 720px;
      margin: 0;
      color: var(--secondary-colors, #7a211b);
      font-size: 0.88rem;
      font-weight: 500;
      line-height: 1.55;
    }

    .zigrow-cta-4 .zigrow-cta-4-title {
      margin: 22px 0 0;
      color: var(--primary-colors, #8c160f);
      font-size: clamp(1.9rem, 4vw, 3.25rem);
      font-weight: 500;
      letter-spacing: -0.025em;
      line-height: 1.15;
    }

    .zigrow-cta-4 .zigrow-cta-4-action {
      display: grid;
      justify-content: center;
      margin-top: 25px;
    }

    .zigrow-cta-4 .zigrow-cta-4-button {
      display: grid;
      min-width: 172px;
      min-height: 44px;
      padding: 12px 24px;
      place-items: center;
      border: 1px solid var(--primary-colors, #8c160f);
      border-radius: 0;
      background: var(--primary-colors, #8c160f);
      color: #ffffff;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      line-height: 1;
      text-decoration: none;
      transition:
        background-color 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-cta-4 .zigrow-cta-4-button:hover {
      transform: translateY(-2px);
      background: transparent;
      color: var(--primary-colors, #8c160f);
    }

    .zigrow-cta-4 .zigrow-cta-4-decoration {
      position: absolute;
      z-index: 1;
      width: 190px;
      height: 190px;
      border: 1px solid rgba(140, 22, 15, 0.08);
      border-radius: 50% 10% 50% 10%;
      pointer-events: none;
    }

    .zigrow-cta-4 .zigrow-cta-4-decoration-left {
      bottom: -75px;
      left: -55px;
      transform: rotate(24deg);
    }

    .zigrow-cta-4 .zigrow-cta-4-decoration-right {
      top: -70px;
      right: -55px;
      transform: rotate(-28deg);
    }

    @media (max-width: 767px) {
      .zigrow-cta-4 {
        min-height: 430px;
        padding: 48px 20px;
      }

      .zigrow-cta-4 .zigrow-cta-4-content {
        min-height: 280px;
        padding: 46px 26px;
      }

      .zigrow-cta-4 .zigrow-cta-4-title {
        font-size: clamp(1.8rem, 7vw, 2.6rem);
      }
    }

    @media (max-width: 480px) {
      .zigrow-cta-4 {
        min-height: 400px;
        padding: 32px 14px;
      }

      .zigrow-cta-4 .zigrow-cta-4-content {
        min-height: 300px;
        padding: 38px 18px;
      }

      .zigrow-cta-4 .zigrow-cta-4-description {
        font-size: 0.82rem;
      }

      .zigrow-cta-4 .zigrow-cta-4-title {
        margin-top: 18px;
        font-size: 1.85rem;
      }

      .zigrow-cta-4 .zigrow-cta-4-action {
        margin-top: 22px;
      }

      .zigrow-cta-4 .zigrow-cta-4-button {
        min-width: 155px;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-cta-4 .zigrow-cta-4-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-cta-5", {
  name: "Cta-5",
  category: "cta",
   image:
    "https://i.postimg.cc/1zG3PZJs/Screenshot-2026-07-22-161530.png",
 
  html: `
<section
  id="zigrow-cta-5"
  class="zigrow-cta-5"
  data-section="zigrow-cta-5"
>
  <div class="zigrow-cta-5-container">
    <div class="zigrow-cta-5-layout">
      <div class="zigrow-cta-5-content">
        <h2 class="no-theme-size zigrow-cta-5-title no-theme-size">
          <span>READY TO</span>
          <span class="zigrow-cta-5-title-accent">GROW YOUR</span>
          <span>BUSINESS?</span>
        </h2>

        <p class="zigrow-cta-5-description">
          Start today and turn your next idea into meaningful progress.
        </p>
      </div>

      <div class="zigrow-cta-5-visual">
        <div
          class="zigrow-cta-5-main-image zigrow-cta-5-image-center"
      
        >
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&amp;fit=crop&amp;w=1400&amp;q=85"
            alt="Bright modern space representing new business opportunities"
          />
        </div>

        <div
          class="zigrow-cta-5-secondary-image zigrow-cta-5-image-center"
      
        >
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
            alt="Professional workspace prepared for business growth"
          />
        </div>
      </div>
    </div>

    <div class="zigrow-cta-5-footer">
      <span class="zigrow-cta-5-divider" aria-hidden="true"></span>

      <div class="zigrow-cta-5-button-wrap">
        <a
          href="#contact"
          class="zigrow-cta-5-button"
          data-btn="cta"
        >
          <span>Get Started</span>
        </a>
      </div>
    </div>
  </div>

  <style>
    .zigrow-cta-5 {
      width: 100%;
      overflow: hidden;
      padding: clamp(2.5rem, 5vw, 5rem) 0;
      background: #ffffff;
    }

    .zigrow-cta-5 .zigrow-cta-5-container {
      width: min(100% - 2rem, 1440px);
      margin: 0 auto;
    }

    .zigrow-cta-5 .zigrow-cta-5-layout {
      display: grid;
      grid-template-columns: minmax(0, 0.94fr) minmax(25rem, 1.06fr);
      gap: clamp(1.5rem, 4vw, 4rem);
      align-items: start;
    }

    .zigrow-cta-5 .zigrow-cta-5-content {
      position: relative;
      z-index: 3;
      padding-top: clamp(0rem, 1vw, 1rem);
    }

    .zigrow-cta-5 .zigrow-cta-5-title {
      position: relative;
      z-index: 3;
      margin: 0;
      color: #111111;
      font-size: clamp(4.5rem, 7vw, 8.8rem);
      font-weight: 400;
      line-height: 0.85;
      letter-spacing: -0.055em;
    }

    .zigrow-cta-5 .zigrow-cta-5-title span {
      display: block;
      width: max-content;
      max-width: 125%;
      white-space: nowrap;
    }

    .zigrow-cta-5 .zigrow-cta-5-title-accent {
      color: var(--territory-colors, #ef767a);
    }

    .zigrow-cta-5 .zigrow-cta-5-description {
      max-width: 19rem;
      margin: clamp(2rem, 4vw, 3.5rem) 0 0;
      color: var(--secondary-colors, #565656);
      font-size: clamp(0.9rem, 1.15vw, 1rem);
      line-height: 1.5;
    }

    .zigrow-cta-5 .zigrow-cta-5-visual {
      position: relative;
      min-height: clamp(28rem, 42vw, 38rem);
    }

    .zigrow-cta-5 .zigrow-cta-5-image-center {
      text-align: center;
    }

    .zigrow-cta-5 .zigrow-cta-5-main-image {
      position: absolute;
      top: 0;
      right: 0;
      width: 82%;
      height: 78%;
      overflow: hidden;
      border-radius: clamp(1.4rem, 2.5vw, 2.4rem);
      background: var(--territory-colors, #e8efea);
    }

    .zigrow-cta-5 .zigrow-cta-5-main-image img,
    .zigrow-cta-5 .zigrow-cta-5-secondary-image img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.5s ease;
    }

    .zigrow-cta-5 .zigrow-cta-5-main-image:hover img,
    .zigrow-cta-5 .zigrow-cta-5-secondary-image:hover img {
      transform: scale(1.025);
    }

    .zigrow-cta-5 .zigrow-cta-5-secondary-image {
      position: absolute;
      bottom: 0;
      left: -23%;
      z-index: 2;
      width: 58%;
      height: 46%;
      overflow: hidden;
      border: 0.4rem solid #ffffff;
      border-radius: clamp(1.2rem, 2vw, 2rem);
      background: var(--territory-colors, #dceae3);
      box-shadow: 0 1.2rem 2.8rem rgba(27, 34, 31, 0.12);
    }

    .zigrow-cta-5 .zigrow-cta-5-footer {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: clamp(1rem, 2vw, 2rem);
      align-items: center;
      margin-top: clamp(2rem, 4vw, 3.5rem);
    }

    .zigrow-cta-5 .zigrow-cta-5-divider {
      width: 100%;
      border-top: 2px dashed var(--territory-colors, #ef767a);
    }

    .zigrow-cta-5 .zigrow-cta-5-button-wrap {
      display: grid;
      justify-items: end;
    }

    .zigrow-cta-5 .zigrow-cta-5-button {
      width: max-content;
      padding: 1.3rem 1.5rem;
      border: 1px solid var(--primary-colors, #111111);
      border-radius: 999px;
      background: var(--primary-colors, #111111);
      color: #ffffff;
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.03em;
      text-decoration: none;
      text-transform: uppercase;
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-cta-5 .zigrow-cta-5-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 0.8rem 1.8rem rgba(17, 17, 17, 0.2);
    }

    .zigrow-cta-5 .zigrow-cta-5-button-icon {
      display: grid;
      place-items: center;
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 50%;
      background: #ffffff;
      color: var(--primary-colors, #111111);
      transition: transform 0.25s ease;
    }

    .zigrow-cta-5 .zigrow-cta-5-button:hover .zigrow-cta-5-button-icon {
      transform: translateX(0.15rem);
    }

    .zigrow-cta-5 .zigrow-cta-5-button-icon i {
      font-size: 1rem;
      line-height: 1;
    }

    @media (max-width: 1199px) {
      .zigrow-cta-5 .zigrow-cta-5-title {
        font-size: clamp(4rem, 8.2vw, 7rem);
      }

      .zigrow-cta-5 .zigrow-cta-5-secondary-image {
        left: -17%;
      }
    }

    @media (max-width: 991px) {
      .zigrow-cta-5 .zigrow-cta-5-layout {
        grid-template-columns: 1fr;
      }

      .zigrow-cta-5 .zigrow-cta-5-title {
        font-size: clamp(4.2rem, 12vw, 7rem);
      }

      .zigrow-cta-5 .zigrow-cta-5-title span {
        max-width: 100%;
      }

      .zigrow-cta-5 .zigrow-cta-5-description {
        max-width: 25rem;
      }

      .zigrow-cta-5 .zigrow-cta-5-visual {
        min-height: 38rem;
      }

      .zigrow-cta-5 .zigrow-cta-5-main-image {
        width: 78%;
      }

      .zigrow-cta-5 .zigrow-cta-5-secondary-image {
        left: 0;
        width: 48%;
      }
    }

    @media (max-width: 767px) {
      .zigrow-cta-5 {
        padding: 3rem 0;
      }

      .zigrow-cta-5 .zigrow-cta-5-container {
        width: min(100% - 1.25rem, 1440px);
      }

      .zigrow-cta-5 .zigrow-cta-5-title {
        font-size: clamp(3.5rem, 14vw, 5.5rem);
        line-height: 0.9;
      }

      .zigrow-cta-5 .zigrow-cta-5-title span {
        white-space: normal;
      }

      .zigrow-cta-5 .zigrow-cta-5-visual {
        min-height: 31rem;
      }

      .zigrow-cta-5 .zigrow-cta-5-main-image {
        width: 86%;
        height: 76%;
      }

      .zigrow-cta-5 .zigrow-cta-5-secondary-image {
        width: 56%;
        height: 43%;
      }

      .zigrow-cta-5 .zigrow-cta-5-footer {
        grid-template-columns: 1fr;
      }

      .zigrow-cta-5 .zigrow-cta-5-button-wrap {
        justify-items: start;
      }
    }

    @media (max-width: 479px) {
      .zigrow-cta-5 .zigrow-cta-5-title {
        font-size: clamp(3rem, 16vw, 4.3rem);
      }

      .zigrow-cta-5 .zigrow-cta-5-visual {
        min-height: 25rem;
      }

      .zigrow-cta-5 .zigrow-cta-5-main-image {
        width: 90%;
        height: 72%;
        border-radius: 1.2rem;
      }

      .zigrow-cta-5 .zigrow-cta-5-secondary-image {
        width: 62%;
        height: 42%;
        border-width: 0.3rem;
        border-radius: 1rem;
      }

      .zigrow-cta-5 .zigrow-cta-5-button {
        width: 100%;
        grid-template-columns: minmax(0, 1fr) auto;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-cta-5 .zigrow-cta-5-button-wrap {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-cta-6", {
  name: "Cta-6",
  category: "cta",
 
 image:
    "https://i.postimg.cc/vmPLbLpf/Screenshot-2026-07-21-172540.png",
  html: `
<section
  id="zigrow-cta-6"
  data-section="zigrow-cta-6"
  class="zigrow-cta-6"
>
  <div class="zigrow-cta-6-glow zigrow-cta-6-glow-top"></div>
  <div class="zigrow-cta-6-glow zigrow-cta-6-glow-bottom"></div>

  <div class="zigrow-cta-6-left-visual">
    <div class="zigrow-cta-6-left-card zigrow-cta-6-media-center">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=85"
        alt="Confident professional ready to begin"
        class="zigrow-cta-6-left-image"
      />
    </div>
  </div>

  <div class="zigrow-cta-6-content">
    <h2 class="no-theme-size zigrow-cta-6-title no-theme-size">
      Bring people together<br />
      to make incredible<br />
      things happen
    </h2>

    <div class="zigrow-cta-6-actions">
      <a
        href="#get-started"
        class="zigrow-cta-6-button zigrow-cta-6-button-primary"
        data-btn="cta"
      >
        START TODAY
      </a>

      <a
        href="#how-it-works"
        class="zigrow-cta-6-button zigrow-cta-6-button-secondary"
        data-btn="cta"
      >
        HOW IT WORKS
      </a>
    </div>
  </div>

  <div class="zigrow-cta-6-right-visual">
    <div class="zigrow-cta-6-right-card zigrow-cta-6-media-center">
      <img
        src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85"
        alt="Modern product presented in a creative setting"
        class="zigrow-cta-6-right-image"
      />
    </div>

    <div class="zigrow-cta-6-supporters">
      <div class="zigrow-cta-6-supporter-column ">
        <div
          class="zigrow-cta-6-supporter"
      
        >
          <div class="zigrow-cta-6-avatar-wrap zigrow-cta-6-media-center">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85"
              alt="Portrait of Priya Sharma"
              class="zigrow-cta-6-avatar"
            />
          </div>

          <div class="zigrow-cta-6-supporter-content">
            <p class="zigrow-cta-6-supporter-name">Priya Sharma</p>
            <p class="zigrow-cta-6-supporter-detail">
              Contributed ₹16,500
            </p>
          </div>
        </div>
      </div>

      <div class="zigrow-cta-6-supporter-column ">
        <div
          class="zigrow-cta-6-supporter"
      
        >
          <div class="zigrow-cta-6-avatar-wrap zigrow-cta-6-media-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=85"
              alt="Portrait of Rohan Mehta"
              class="zigrow-cta-6-avatar"
            />
          </div>

          <div class="zigrow-cta-6-supporter-content">
            <p class="zigrow-cta-6-supporter-name">Rohan Mehta</p>
            <p class="zigrow-cta-6-supporter-detail">
              Contributed ₹14,000
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-cta-6 {
      position: relative;
      display: grid;
      min-height: 660px;
      place-items: center;
      overflow: hidden;
      background:
        radial-gradient(
          circle at 48% 46%,
          rgba(255, 255, 255, 0.42) 0,
          rgba(255, 255, 255, 0) 34%
        ),
        linear-gradient(
          125deg,
          #fffdfd 2%,
          var(--territory-colors, #ffc8e9) 43%,
          var(--primary-colors, #ff725f) 100%
        );
    }

    .zigrow-cta-6 .zigrow-cta-6-content {
      position: relative;
      z-index: 4;
      display: grid;
      justify-items: center;
      width: min(100% - 40px, 760px);
      padding: 100px 20px;
      text-align: center;
    }

    .zigrow-cta-6 .zigrow-cta-6-title {
      margin: 0;
      color: #090909;
      font-size: clamp(3rem, 6vw, 5.5rem);
      font-weight: 800;
      letter-spacing: -0.055em;
      line-height: 0.93;
    }

    .zigrow-cta-6 .zigrow-cta-6-actions {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      gap: 16px;
      justify-content: center;
      margin-top: 40px;
    }

    .zigrow-cta-6 .zigrow-cta-6-button {
      display: grid;
      min-width: 158px;
      min-height: 48px;
      padding: 12px 24px;
      place-items: center;
      border: 1px solid rgba(255, 255, 255, 0.72);
      border-radius: 999px;
      color: #111111;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.01em;
      line-height: 1;
      text-decoration: none;
      transition:
        transform 0.25s ease,
        background-color 0.25s ease,
        border-color 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-cta-6 .zigrow-cta-6-button-primary {
      background: #ffffff;
      box-shadow: 0 12px 28px rgba(128, 58, 113, 0.12);
    }

    .zigrow-cta-6 .zigrow-cta-6-button-secondary {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(7px);
    }

    .zigrow-cta-6 .zigrow-cta-6-button:hover {
      transform: translateY(-3px);
      border-color: var(--primary-colors, #ff725f);
      background: var(--primary-colors, #ff725f);
      box-shadow: 0 14px 28px rgba(161, 54, 100, 0.2);
      color: #ffffff;
    }

    .zigrow-cta-6 .zigrow-cta-6-left-visual {
      position: absolute;
      bottom: -76px;
      left: -26px;
      z-index: 3;
      width: clamp(190px, 24vw, 315px);
      height: clamp(310px, 44vw, 520px);
      transform: rotate(-8deg);
    }

    .zigrow-cta-6 .zigrow-cta-6-left-card {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border: 4px solid #ffffff;
      border-radius: 38px;
      background: var(--territory-colors, #ffd239);
      box-shadow: 0 22px 55px rgba(70, 29, 64, 0.16);
    }

    .zigrow-cta-6 .zigrow-cta-6-left-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }

    .zigrow-cta-6 .zigrow-cta-6-right-visual {
      position: absolute;
      top: 142px;
      right: -55px;
      z-index: 3;
      width: clamp(230px, 29vw, 410px);
    }

    .zigrow-cta-6 .zigrow-cta-6-right-card {
      width: 100%;
      height: clamp(230px, 29vw, 395px);
      overflow: hidden;
      border: 4px solid #ffffff;
      border-radius: 42px;
      background: #222222;
      box-shadow: 0 24px 54px rgba(70, 29, 64, 0.18);
      transform: rotate(13deg);
    }

    .zigrow-cta-6 .zigrow-cta-6-right-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .zigrow-cta-6 .zigrow-cta-6-supporters {
      position: absolute;
      right: 34%;
      bottom: -70px;
      display: grid;
      gap: 12px;
      width: 185px;
      transform: rotate(-1deg);
    }

    .zigrow-cta-6 .zigrow-cta-6-supporter-column:nth-child(2) {
      margin-left: 42px;
    }

    .zigrow-cta-6 .zigrow-cta-6-supporter {
      display: grid;
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 10px;
      align-items: center;
      padding: 6px 14px 6px 6px;
      border: 3px solid rgba(255, 255, 255, 0.78);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.52);
      box-shadow: 0 10px 22px rgba(85, 31, 72, 0.12);
      backdrop-filter: blur(10px);
    }

    .zigrow-cta-6 .zigrow-cta-6-avatar-wrap {
      width: 42px;
      height: 42px;
      overflow: hidden;
      border-radius: 50%;
      background: var(--territory-colors, #ffd84d);
    }

    .zigrow-cta-6 .zigrow-cta-6-avatar {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .zigrow-cta-6 .zigrow-cta-6-supporter-content {
      min-width: 0;
    }

    .zigrow-cta-6 .zigrow-cta-6-supporter-name {
      margin: 0;
      color: var(--secondary-colors, #555555);
      font-size: 0.68rem;
      line-height: 1.25;
    }

    .zigrow-cta-6 .zigrow-cta-6-supporter-detail {
      margin: 2px 0 0;
      color: #151515;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1.25;
    }

    .zigrow-cta-6 .zigrow-cta-6-glow {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      filter: blur(55px);
    }

    .zigrow-cta-6 .zigrow-cta-6-glow-top {
      top: -140px;
      left: 29%;
      width: 420px;
      height: 270px;
      background: var(--primary-colors, #ff725f);
      opacity: 0.54;
    }

    .zigrow-cta-6 .zigrow-cta-6-glow-bottom {
      bottom: -160px;
      left: 42%;
      width: 500px;
      height: 310px;
      background: var(--territory-colors, #ff79d5);
      opacity: 0.5;
    }

    @media (max-width: 1050px) {
      .zigrow-cta-6 {
        min-height: 620px;
      }

      .zigrow-cta-6 .zigrow-cta-6-title {
        font-size: clamp(3rem, 6.5vw, 4.7rem);
      }

      .zigrow-cta-6 .zigrow-cta-6-left-visual {
        left: -70px;
      }

      .zigrow-cta-6 .zigrow-cta-6-right-visual {
        right: -105px;
      }
    }

    @media (max-width: 767px) {
      .zigrow-cta-6 {
        min-height: 850px;
        align-items: start;
      }

      .zigrow-cta-6 .zigrow-cta-6-content {
        width: min(100% - 28px, 620px);
        padding: 74px 14px 390px;
      }

      .zigrow-cta-6 .zigrow-cta-6-title {
        font-size: clamp(2.7rem, 11vw, 4rem);
        line-height: 0.98;
      }

      .zigrow-cta-6 .zigrow-cta-6-actions {
        margin-top: 30px;
      }

      .zigrow-cta-6 .zigrow-cta-6-left-visual {
        bottom: -70px;
        left: -30px;
        width: 225px;
        height: 360px;
      }

      .zigrow-cta-6 .zigrow-cta-6-right-visual {
        top: auto;
        right: -55px;
        bottom: -25px;
        width: 270px;
      }

      .zigrow-cta-6 .zigrow-cta-6-right-card {
        height: 270px;
      }

      .zigrow-cta-6 .zigrow-cta-6-supporters {
        right: 25%;
        bottom: 55px;
      }
    }

    @media (max-width: 520px) {
      .zigrow-cta-6 {
        min-height: 900px;
      }

      .zigrow-cta-6 .zigrow-cta-6-content {
        padding-top: 60px;
      }

      .zigrow-cta-6 .zigrow-cta-6-title {
        font-size: clamp(2.5rem, 12vw, 3.4rem);
      }

      .zigrow-cta-6 .zigrow-cta-6-title br {
        display: none;
      }

      .zigrow-cta-6 .zigrow-cta-6-actions {
        grid-template-columns: 1fr;
        width: min(100%, 220px);
      }

      .zigrow-cta-6 .zigrow-cta-6-button {
        width: 100%;
      }

      .zigrow-cta-6 .zigrow-cta-6-left-visual {
        left: -72px;
        width: 205px;
        height: 330px;
      }

      .zigrow-cta-6 .zigrow-cta-6-right-visual {
        right: -82px;
        width: 250px;
      }

      .zigrow-cta-6 .zigrow-cta-6-supporters {
        right: 14%;
        bottom: 82px;
        width: 175px;
      }

      .zigrow-cta-6 .zigrow-cta-6-supporter-column:nth-child(2) {
        margin-left: 20px;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-cta-6 .zigrow-cta-6-actions {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-cta-7", {
  name: "Cta-7",
  category: "cta",
  image:
    "https://i.postimg.cc/GpwmZpPg/Screenshot-2026-07-22-161718.png",
  html: `
<section
  id="zigrow-cta-7"
  class="zigrow-cta-7"
  data-section="zigrow-cta-7"
>
  <div class="container">
    <div
      class="zigrow-cta-7-banner"
   data-zg-editable="surface"
    >
      <div
        class="zigrow-cta-7-calendar"
    
      >
        <div class="zigrow-cta-7-calendar-rings" aria-hidden="true">
          <span class="zigrow-cta-7-calendar-ring"></span>
          <span class="zigrow-cta-7-calendar-ring"></span>
        </div>

        <div class="zigrow-cta-7-calendar-top"></div>

        <div class="zigrow-cta-7-calendar-body">
          <p class="zigrow-cta-7-calendar-day">WED</p>

          <div
            class="zigrow-cta-7-calendar-note"
        
          >
            <p>Start Today!</p>
          </div>
        </div>
      </div>

      <div class="zigrow-cta-7-content">
        <h2 class="no-theme-size zigrow-cta-7-title">
          Save Time. Save Money.
          <span>Grow Smarter!</span>
        </h2>

        <p class="zigrow-cta-7-description">
          Your time is valuable, so let us handle the work.
        </p>
      </div>

      <div class="zigrow-cta-7-action-wrap">
        <a
          href="#contact"
          class="zigrow-cta-7-button"
          data-btn="cta"
        >
          <span class="zigrow-cta-7-button-icon">
            <i class="bi bi-bell" data-icon="bell"></i>
          </span>

          <span>Get an Estimate</span>
        </a>
      </div>
    </div>
  </div>

  <style>
    .zigrow-cta-7 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3rem, 6vw, 6rem) 0;
      background: #ffffff;
    }

    .zigrow-cta-7 .zigrow-cta-7-banner {
      position: relative;
      align-items: center;
      min-height: clamp(8rem, 14vw, 11rem);
      margin-top: 2rem;
      padding: 1.5rem clamp(1.5rem, 4vw, 4rem) 1.5rem
        clamp(10rem, 18vw, 15rem);
      background: var(--primary-colors, #48b5d4);
    }

    .zigrow-cta-7 .zigrow-cta-7-calendar {
      position: absolute;
      bottom: -1.4rem;
      left: clamp(1.5rem, 5vw, 4rem);
      z-index: 3;
      width: clamp(8rem, 14vw, 11rem);
      min-height: clamp(9rem, 15vw, 12rem);
      overflow: visible;
      border-radius: 0.65rem;
      background: #ffffff;
      box-shadow: 0 0.9rem 1.8rem rgba(24, 42, 51, 0.2);
      transform: rotate(-1deg);
    }

    .zigrow-cta-7 .zigrow-cta-7-calendar-top {
      width: 100%;
      height: clamp(2rem, 3.4vw, 2.8rem);
      border-radius: 0.65rem 0.65rem 0 0;
      background: var(--territory-colors, #62c64c);
    }

    .zigrow-cta-7 .zigrow-cta-7-calendar-rings {
      position: absolute;
      top: -0.8rem;
      right: 0;
      left: 0;
      z-index: 4;
      display: grid;
      grid-template-columns: repeat(2, 1rem);
      justify-content: space-around;
      padding: 0 1.1rem;
      pointer-events: none;
    }

    .zigrow-cta-7 .zigrow-cta-7-calendar-ring {
      position: relative;
      display: block;
      width: 0.75rem;
      height: 1.8rem;
      border-radius: 999px;
      background: #4e555a;
      box-shadow: inset 0.15rem 0 0 rgba(255, 255, 255, 0.35);
    }

    .zigrow-cta-7 .zigrow-cta-7-calendar-ring::after {
      content: "";
      position: absolute;
      right: 0.12rem;
      bottom: 0.12rem;
      left: 0.12rem;
      height: 0.45rem;
      border-radius: 50%;
      background: #262b2f;
    }

    .zigrow-cta-7 .zigrow-cta-7-calendar-body {
      position: relative;
      min-height: clamp(7rem, 11vw, 9rem);
      padding: clamp(0.65rem, 1.5vw, 1rem);
      text-align: center;
    }

    .zigrow-cta-7 .zigrow-cta-7-calendar-day {
      margin: 0;
      color: #202326;
      font-size: clamp(1.5rem, 2.8vw, 2.2rem);
      font-weight: 800;
      line-height: 1;
      letter-spacing: 0.02em;
    }

    .zigrow-cta-7 .zigrow-cta-7-calendar-note {
      position: absolute;
      right: -0.25rem;
      bottom: -1rem;
      left: 1.2rem;
      min-height: clamp(4rem, 7vw, 5.5rem);
      padding: 1rem 0.65rem 1.3rem;
      background: var(--territory-colors, #fff19b);
      box-shadow: 0 0.6rem 1.1rem rgba(42, 42, 31, 0.13);
      transform: rotate(-6deg);
      clip-path: polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%);
    }

    .zigrow-cta-7 .zigrow-cta-7-calendar-note p {
      margin: 0;
      color: #36321f;
      font-size: clamp(0.8rem, 1.4vw, 1rem);
      font-weight: 600;
      font-style: italic;
      line-height: 1.25;
    }

    .zigrow-cta-7 .zigrow-cta-7-content {
      min-width: 0;
      text-align: center;
    }

    .zigrow-cta-7 .zigrow-cta-7-title {
      margin: 0;
      color: #ffffff;
      font-size: clamp(1.6rem, 3vw, 2.6rem);
      font-weight: 400;
      line-height: 1.05;
    }

    .zigrow-cta-7 .zigrow-cta-7-title span {
      display: block;
      font-weight: 700;
    }

    .zigrow-cta-7 .zigrow-cta-7-description {
      max-width: 60%;
      margin: 0.65rem auto 0;
      color: rgba(255, 255, 255, 0.88);
      font-size: clamp(0.78rem, 1.15vw, 0.95rem);
      line-height: 1.45;
    }

    .zigrow-cta-7 .zigrow-cta-7-action-wrap {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;
    }

    .zigrow-cta-7 .zigrow-cta-7-button {
      display: grid;
      grid-template-columns: auto auto;
      gap: 0.65rem;
      align-items: center;
      width: max-content;
      padding: 0.7rem 1.3rem;
      border: 1px solid #ffffff;
      border-radius: 999px;
      background: #ffffff;
      color: var(--secondary-colors, #40515e);
      font-size: clamp(0.72rem, 1vw, 0.85rem);
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      text-transform: uppercase;
      white-space: nowrap;
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        background 0.25s ease,
        color 0.25s ease;
    }

    .zigrow-cta-7 .zigrow-cta-7-button:hover {
      transform: translateY(-2px);
      background: var(--territory-colors, #62c64c);
      color: #ffffff;
      box-shadow: 0 0.8rem 1.6rem rgba(24, 42, 51, 0.18);
    }

    .zigrow-cta-7 .zigrow-cta-7-button-icon {
      display: grid;
      place-items: center;
      width: 1.2rem;
      height: 1.2rem;
      color: var(--territory-colors, #62c64c);
    }

    .zigrow-cta-7 .zigrow-cta-7-button:hover .zigrow-cta-7-button-icon {
      color: #ffffff;
    }

    .zigrow-cta-7 .zigrow-cta-7-button-icon i {
      font-size: 1rem;
      line-height: 1;
    }

    @media (max-width: 991px) {
      .zigrow-cta-7 .zigrow-cta-7-banner {
        grid-template-columns: minmax(0, 1fr) auto;
        padding-left: clamp(9rem, 22vw, 13rem);
      }

      .zigrow-cta-7 .zigrow-cta-7-content {
        text-align: left;
      }

      .zigrow-cta-7 .zigrow-cta-7-description {
        max-width: 100%;
        margin-left: 0;
      }
    }

    @media (max-width: 767px) {
      .zigrow-cta-7 .zigrow-cta-7-banner {
        grid-template-columns: 1fr;
        gap: 1.4rem;
        margin-top: 5rem;
        padding: 5.5rem 1.5rem 2rem;
        text-align: center;
      }

      .zigrow-cta-7 .zigrow-cta-7-calendar {
        top: -5rem;
        bottom: auto;
        left: 50%;
        transform: translateX(-50%) rotate(-1deg);
      }

      .zigrow-cta-7 .zigrow-cta-7-content {
        text-align: center;
      }

      .zigrow-cta-7 .zigrow-cta-7-description {
        margin-right: auto;
        margin-left: auto;
      }

      .zigrow-cta-7 .zigrow-cta-7-action-wrap {
        justify-items: center;
      }
    }

    @media (max-width: 479px) {
      .zigrow-cta-7 .zigrow-cta-7-banner {
        padding-right: 1rem;
        padding-left: 1rem;
      }

      .zigrow-cta-7 .zigrow-cta-7-title {
        font-size: clamp(1.65rem, 8vw, 2.2rem);
      }

      .zigrow-cta-7 .zigrow-cta-7-button {
        width: 100%;
        max-width: 16rem;
        grid-template-columns: auto minmax(0, 1fr);
        justify-content: center;
      }
    }
  

  </style>
</section>
`,
});

// Contact Form
Vvveb.Blocks.add("bootstrap4/zigrow-contact-1", {
    name: "Contact-1",
    category: "contact",
     image: "https://i.postimg.cc/jdmm7dKz/Screenshot-2026-03-20-133015.webp",

    html: `
<section
  class="zigrow-contact-1 py-6"
  id="zigrow-contact-1"
  data-section="zigrow-contact-1"
>
  <div class="container">
    <div class="newsletter-wrap text-center">
      <p class="newsletter-subtitle">LET'S KEEP IN TOUCH</p>
      <h2 class="no-theme-size newsletter-title">Subscribe to our newsletter</h2>
      <p class="newsletter-text">
        Stay updated with our latest news, offers, and helpful insights.
      </p>

      <form
        action="https://api.zigrow.com/api/forms/submit"
        method="post"
        data-zigrow-form
        class="newsletter-form"
      >
        <input type="hidden" name="domain" value="" />
        <input type="hidden" name="form_key" value="newsletter" />
        <input type="hidden" name="page_url" value="" />
        <input type="hidden" name="_company" value="" />

        <div form-question-zigrow>
          <label>Email Address</label>
       <input
  type="email"
  name="newsletter_email"
  placeholder="Enter your email address"
  required
  maxlength="254"
  title="Please enter a valid email address."
/>
        </div>

        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>

  <style>
    .zigrow-contact-1 {
      background: #f8f8f8;
    }

    .py-6 {
      padding: 3rem 0;
    }

    .zigrow-contact-1 .newsletter-wrap {
      max-width: 640px;
      margin: 0 auto;
    }

    .zigrow-contact-1 .newsletter-subtitle {
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: var(--primary-colors, #111111);
      margin-bottom: 0.5rem;
    }

    .zigrow-contact-1 .newsletter-title {
      font-size: clamp(1.8rem, 1.5rem + 1vw, 2.5rem);
      line-height: 1.2;
      color: #111111;
      margin-bottom: 0.75rem;
    }

    .zigrow-contact-1 .newsletter-text {
      color: var(--secondary-colors, #666666);
      margin-bottom: 1.5rem;
    }

    .zigrow-contact-1 .newsletter-form {
      display: grid;
      gap: 1rem;
      max-width: 520px;
      margin: 0 auto;
    }

    .zigrow-contact-1 .newsletter-form div[form-question-zigrow] {
      display: grid;
      gap: 0.35rem;
      text-align: left;
    }

    .zigrow-contact-1 .newsletter-form label {
      font-size: 0.92rem;
      font-weight: 600;
      color: #222222;
      margin: 0;
    }

    .zigrow-contact-1 .newsletter-form input {
      width: 100%;
      border: 1px solid #dddddd;
      border-radius: 6px;
      padding: 0.85rem 1rem;
      font-size: 0.95rem;
      outline: none;
      background: #ffffff;
    }

    .zigrow-contact-1 .newsletter-form input:focus {
      border-color: #999999;
    }

    .zigrow-contact-1 .newsletter-form button {
      width: fit-content;
      justify-self: center;
      border: 0;
      padding: 0.8rem 1.5rem;
      border-radius: 999px;
      background: var(--primary-colors, #111111);
      color: #ffffff;
      font-weight: 600;
      cursor: pointer;
    }
  </style>

 
    
</section>
`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-contact-2", {
    name: "Contact-2",
    category: "contact",
    image: "https://i.postimg.cc/SNfRZMcW/Screenshot-2025-11-15-162121.png",
    html: `    <section id="zigrow-contact-2" data-section="zigrow-contact-2" class="zigrow-contact-2 py-6">
      <div class="container">
        <!-- Heading Section -->
        <div class="row g-4 zigrow-contact-2-head">
          <div class="col-12 col-lg-6 left">
            <h5>Sustainability</h5>
            <h1>Transform Communities<br />Across the Globe</h1>
          </div>

          <div class="col-12 col-lg-6 right">
            <p>
              Your content will appear here Add relevant text to complete this
              section A short description Customize it based on your needs This
              area is reserved for your real content Replace it with your
              message.
            </p>
          </div>
        </div>

        <!-- Offices Cards Grid -->
        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="office-card" data-zg-editable="surface">
              <h4>New Delhi</h4>
              <p class="address">
                E-123, ABC Plaza, XYZ Street, New Delhi - 110077
              </p>
              <a href="#" class="direction">
                Direction <i class="bi bi-arrow-right" data-icon="arrow-right"></i>
              </a>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="office-card" data-zg-editable="surface">
              <h4>Bengaluru</h4>
              <p class="address">E-123, ABC Plaza, 110077</p>
              <a href="#" class="direction">
                Direction <i class="bi bi-arrow-right" data-icon="arrow-right"></i>
              </a>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="office-card" data-zg-editable="surface">
              <h4>Haryana</h4>
              <p class="address">E-123, XYZ Street, New Delhi - 110077</p>
              <a href="#" class="direction">
                Direction <i class="bi bi-arrow-right" data-icon="arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="cta-wrap">
          <a href="#" class="cta-btn" data-btn="cta">View Our Offices</a>
        </div>
      </div>
        <style>
      .py-6 {
        padding: 3rem 0;
      }
      /* SECTION BASE --------------------------*/
      .zigrow-contact-2 {
        background: var(--text-light, #ffffff);
        color: #1c2b45;
      }

      /* HEADINGS ------------------------------*/
      .zigrow-contact-2 .zigrow-contact-2-head {
        margin-bottom: clamp(24px, 6vw, 56px);
      }

      .zigrow-contact-2 .zigrow-contact-2-head h5 {
        margin: 0 0 10px;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: var(--primary-colors, #feb909);
        opacity: 0.9;
      }

      .zigrow-contact-2 .zigrow-contact-2-head h1 {
        margin: 0;
        font-weight: 800;
        line-height: 1.1;
        font-size: clamp(1.5rem, 5vw, 2.5rem);
        color: #1c2b45;
      }

      .zigrow-contact-2 .zigrow-contact-2-head .right p {
        margin: 0;
        font-size: clamp(14px, 1.6vw, 16px);
        line-height: 1.8;
        color: var(--secondary-colors, #595f6b);
      }

      /* OFFICE CARD ----------------------------*/
      .zigrow-contact-2 .office-card {
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        padding: clamp(20px, 3.2vw, 40px);
        min-height: 220px;
        display: grid;
        align-content: start;
        row-gap: 10px;
        transition: box-shadow 180ms ease, transform 180ms ease;
      }

      .zigrow-contact-2 .office-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
      }

      .zigrow-contact-2 .office-card h4 {
        margin: 0 0 2px;
        font-size: clamp(18px, 2.4vw, 22px);
        font-weight: 800;
        color: #1c2b45;
      }

      .zigrow-contact-2 .office-card .address {
        margin: 0;
        color: var(--secondary-colors, #595f6b);
        font-size: clamp(14px, 1.6vw, 16px);
      }

      .zigrow-contact-2 .office-card .direction {
        margin-top: 18px;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 0.4px;
        text-decoration: none;
        color: rgba(28, 43, 69, 0.9);
      }

      .zigrow-contact-2 .office-card .direction:hover {
        color: var(--territory-colors, #1c2b45);
      }

      /* CTA BUTTON ------------------------------*/
   /* Replace with this */
.zigrow-contact-2 .cta-wrap {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: clamp(28px, 6vw, 60px);
}

      /* Replace display with this */
.zigrow-contact-2 .cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: max-content;
  white-space: nowrap;
        padding: 12px 28px;
        background: var(--primary-colors, #feb909);
        color: #fff;
        border-radius: 4px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        text-decoration: none;
        transition: transform 140ms ease, box-shadow 140ms ease;
      }

      .zigrow-contact-2 .cta-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 10px 22px rgba(254, 185, 9, 0.35);
      }

      /* MOBILE ADJUSTMENTS ----------------------*/
      @media (max-width: 576px) {
        .zigrow-contact-2 .zigrow-contact-2-head h1 {
          font-size: 32px;
        }
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-contact-3", {
    name: "Contact-3",
    category: "contact",
    image: "https://i.postimg.cc/nLTDSSjw/Screenshot-2025-11-20-155027.png",

    html: `  <section id="zigrow-contact-3" data-section="zigrow-contact-3" class="zigrow-contact-3 py-6">
      <div class="container">
        <div class="row g-4 grid">
          <!-- Left: Quote Form -->
          <div class="faq-left col-12 col-lg-6">
            <div class="quote-form" data-zg-editable="surface">
              <h3>Request a Quote</h3>
              <p>Ready to Work Together? Build a project with us!</p>

              <form
                action="https://api.zigrow.com/api/forms/submit"
                method="post"
                data-zigrow-form
                class="contact-form"
              >
                <input type="hidden" name="domain" value="" />
                <input type="hidden" name="form_key" value="contact" />
                <input type="hidden" name="page_url" value="" />
                <input type="hidden" name="_company" value="" />

                <div form-question-zigrow>
                  <label>Name</label>
                <input
  type="text"
  name="name"
  placeholder="Enter your name"
  required
  minlength="2"
  maxlength="60"
  title="Please enter your name."
/>
                </div>

                <div form-question-zigrow>
                  <label>Email</label>
                <input
  type="email"
  name="email"
  placeholder="Enter your email address"
  required
  maxlength="254"
  title="Please enter a valid email address."
/>
                </div>

                <div form-question-zigrow>
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter the subject"
                    minlength="2"
                    maxlength="120"
                    title="Please enter a subject."
                  />
                </div>

                <div form-question-zigrow>
                  <label>Message</label>
               <textarea
  name="message"
  placeholder="Enter your message"
  rows="5"
  minlength="10"
  maxlength="1000"
  title="Please enter a message between 10 and 1000 characters."
></textarea>
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>

          <!-- Right: FAQ -->
          <div class="faq-right col-12 col-lg-6">
            <div class="faq-section">
              <h6 class="sub-title">Learn More From</h6>
              <h3>Frequently Asked Questions</h3>

              <div class="faq-item">
                <h6>1. How to create cities and communities that solve?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>

              <div class="faq-item">
                <h6>2. Construction of the winning ₹374.4 crore?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>

              <div class="faq-item">
                <h6>3. How to create cities and communities that solve?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>

              <div class="faq-item">
                <h6>4. How to create cities and communities that solve?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        .zigrow-contact-3 {
          background-color: #f0eeee;
          margin-top: 5rem;
        }

        .py-6 {
          padding: 3rem 0;
        }

        @media (min-width: 768px) {
          .zigrow-contact-3 .grid {
            align-items: center;
          }
        }

        .zigrow-contact-3 .faq-left {
          position: relative;
        }

        .zigrow-contact-3 .quote-form {
          background-color: var(--territory-colors, #1c2b45);
          color: var(--text-light, #ffffff);
          padding: 2rem 1.5rem;
          border-radius: 6px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        @media (min-width: 768px) {
          .zigrow-contact-3 .quote-form {
            padding: 3rem 2.5rem;
            width: 95%;
            position: relative;
            top: -5rem;
          }
        }

        .zigrow-contact-3 .quote-form h3 {
          font-size: clamp(1.5rem, 1.2rem + 1vw, 2rem);
          margin-bottom: 0.5rem;
        }

        .zigrow-contact-3 .quote-form p {
          opacity: 0.9;
          margin-bottom: 1.25rem;
        }

        .zigrow-contact-3 .quote-form form {
          display: grid;
          gap: 1rem;
        }

        .zigrow-contact-3 .quote-form div[form-question-zigrow] {
          display: grid;
          gap: 0.45rem;
        }

        .zigrow-contact-3 .quote-form form label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .zigrow-contact-3 .quote-form form input,
        .zigrow-contact-3 .quote-form form textarea {
          width: 100%;
          background-color: #fff;
          border: 0;
          border-radius: 4px;
          padding: 0.9rem 1rem;
          font-size: 0.95rem;
          color: #111827;
          outline: none;
          transition: box-shadow 0.15s ease, transform 0.02s ease;
        }

        .zigrow-contact-3 .quote-form form input:focus,
        .zigrow-contact-3 .quote-form form textarea:focus {
          box-shadow: 0 0 0 3px rgba(254, 185, 9, 0.35);
        }

        .zigrow-contact-3 .quote-form form textarea {
          resize: vertical;
          min-height: 80px;
        }

        .zigrow-contact-3 .quote-form form button {
          display: inline-block;
          width: fit-content;
          background-color: var(--primary-colors, #feb909);
          color: var(--territory-colors, #1c2b45);
          border: 0;
          border-radius: 0.2rem;
          padding: 0.7rem 2rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: filter 0.15s ease, transform 0.05s ease;
        }

        .zigrow-contact-3 .quote-form form button:hover {
          filter: brightness(0.95);
        }

        .zigrow-contact-3 .quote-form form button:active {
          transform: translateY(1px);
        }

        .zigrow-contact-3 .faq-right .faq-section {
          padding-inline: 0;
        }

        .zigrow-contact-3 .faq-right .faq-section .sub-title {
          color: var(--primary-colors, #feb909);
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 0.25rem;
        }

        .zigrow-contact-3 .faq-right .faq-section h3 {
          font-size: clamp(1.6rem, 1.2rem + 1.2vw, 2.2rem);
          font-weight: 800;
          margin-bottom: 1.25rem;
          color: #0f172a;
        }

        .zigrow-contact-3 .faq-right .faq-section .faq-item {
          margin-bottom: 1.25rem;
        }

        .zigrow-contact-3 .faq-right .faq-section .faq-item h6 {
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.35rem;
        }

        .zigrow-contact-3 .faq-right .faq-section .faq-item p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--secondary-colors, #595f6b);
        }

        @media (max-width: 768px) {
          .zigrow-contact-3 {
            margin-top: 0;
            padding: 0;
          }

          .zigrow-contact-3 .quote-form {
            position: static;
            top: 0;
            border-radius: 0;
            box-shadow: none;
          }
        }
      </style>

    
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-contact-4", {
    name: "Contact-4",
    category: "contact",
    image: "https://i.postimg.cc/ht9Rc9pR/contact-4.png",
    html: `  <section
      id="zigrow-contact-4"
      data-section="zigrow-contact-4"
      class="zigrow-contact-4 py-6"
    >
      <div class="container">
        <div class="row g-4 location-wrapper">
          <!-- Left Content -->
          <div class="location-text col-12 col-lg-6">
            <h2>LOCATION <br />& SCHEDULE</h2>
            <span class="divider"></span>
       
<p>
  Visit us at our location or check the schedule before you arrive. We are here
  to help you with clear guidance, quick support, and a smooth experience.
</p>
          </div>

          <!-- Right Map -->
          <div class="map-container text-center location-map col-12 col-lg-6">
         
<div class="zigrow-contact-4-btn-wrap">
  <a
    href="https://www.google.com/maps/search/?api=1&query=12.894370090902344%2C77.6343217148211"
    target="_blank"
    class="btn btn-directions"
    data-btn="directions"
  >
    GET DIRECTIONS <i class="bi bi-arrow-right-short" data-icon="arrow-right-short"></i>
  </a>
</div>

            <div data-component-maps style="width: 100%; height: 350px">
              <iframe
                frameborder="0"
                src="https://maps.google.com/maps?q=12.894370090902344%2C77.6343217148211&z=14&t=q&output=embed"
                width="100%"
                height="100%"
                style="width: 100%; height: 100%; left: 0"
                loading="lazy"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
         <style>
      .py-6 {
        padding: 3rem 0;
      }
      .zigrow-contact-4 {
        background-color: var(--primary-colors, #9b2c2c);
        color: #fff;
      }
      .zigrow-contact-4 .location-wrapper {
        align-items: center;
      }
      @media (max-width: 768px) {
        .zigrow-contact-4 .location-wrapper {
          grid-template-columns: 1fr;
          text-align: center;
        }
      }
      .zigrow-contact-4 .location-text h2 {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.2;
      }
      .zigrow-contact-4 .location-text .divider {
        width: 50px;
        height: 4px;
        background-color: var(--territory-colors, #d4b24d);
        margin: 1rem 0;
      }
      .zigrow-contact-4 .location-text p {
        font-size: 1rem;
        line-height: 1.6;
        max-width: 500px;
      }

      .zigrow-contact-4 .zigrow-contact-4-btn-wrap {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.zigrow-contact-4 .btn-directions {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  width: auto;
  max-width: max-content;
  white-space: nowrap;
}

      .btn-directions{
        color: white ;
      }
      @media (max-width: 768px) {
        .zigrow-contact-4 .location-text p {
          margin: 0 auto;
        }
      }
      @media (max-width: 768px) {
        .zigrow-contact-4 .location-text h2 {
          font-size: 2rem;
        }
        .zigrow-contact-4 .location-text .divider {
          margin: 1rem auto;
        }
      }
      .zigrow-contact-4 .location-map iframe {
        width: 100%;
        height: 350px;
        border-radius: 8px;
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-contact-5", {
    name: "Contact-5",
    category: "contact",
    image: "https://i.postimg.cc/9XgmBcfQ/contact-1.png",

    html: `<section
  class="zigrow-contact-5 py-6"
  data-section="zigrow-contact-5"
  id="zigrow-contact-5"
>
  <div class="container">
    <!-- Heading -->
    <div class="contact-heading">
      <h2 class="no-theme-size contact-title">WANT TO TRAIN WITH ME?</h2>
      <p class="contact-subtitle">
        Feel free to contact me if you want to train with me.
      </p>
    </div>

    <!-- Card -->
    <div class="contact-card">
      <div class="row g-0">
        <!-- Left panel -->
        <div class="col-12 col-lg-4">
          <div class="contact-left">
            <div class="contact-left-inner" data-zg-editable="surface">
              <div class="contact-left-content">
                <p class="contact-left-title">Contact Information</p>

                <p class="contact-info-item">
                  <i class="bi bi-telephone-fill" data-icon="phone"></i>
                  +91-9123456789
                </p>

                <p class="contact-info-item">
                  <i class="bi bi-envelope-fill" data-icon="email"></i>
                  yourname@domainname.com
                </p>

                <p class="contact-info-item">
                  <i class="bi bi-geo-alt-fill" data-icon="location"></i>
                  E-123, ABC Plaza, XYZ Street, New Delhi - 110077
                </p>

                <div class="contact-social">
                  <a href="#"
                    ><i class="bi bi-twitter-x" data-icon="twitter"></i
                  ></a>
                  <a href="#"
                    ><i class="bi bi-facebook" data-icon="facebook"></i
                  ></a>
                  <a href="#"
                    ><i class="bi bi-instagram" data-icon="instagram"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right panel -->
        <div class="col-12 col-lg-8">
          <div class="contact-right">
            <form
              action="https://api.zigrow.com/api/forms/submit"
              method="post"
              data-zigrow-form
              class="contact-form"
            >
              <input type="hidden" name="domain" value="" />
              <input type="hidden" name="form_key" value="contact" />
              <input type="hidden" name="page_url" value="" />
              <input type="hidden" name="_company" value="" />

              <div form-question-zigrow>
                <label>First Name</label>
              <input
  type="text"
  name="first_name"
  placeholder="Enter your first name"
  required
  minlength="2"
  maxlength="60"
  title="Please enter your first name."
/>
              </div>

              <div form-question-zigrow>
                <label>Last Name</label>
               <input
  type="text"
  name="last_name"
  placeholder="Enter your last name"
  required
  minlength="2"
  maxlength="60"
  title="Please enter your last name."
/>
              </div>

              <div form-question-zigrow>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  maxlength="254"
                  title="Please enter a valid email address."
                />
              </div>

              <div form-question-zigrow>
                <label>Phone Number</label>
               <input
  type="tel"
  name="phone"
  inputmode="numeric"
  pattern="[0-9]{10}"
  minlength="10"
  maxlength="10"
  placeholder="Enter 10 digit phone number"
  required
  title="Please enter exactly 10 digits."
/>
              </div>

              <div form-question-zigrow>
                <label>Meeting Date</label>
                <input
                  type="date"
                  name="meeting_date"
                  required
                  title="Please select a meeting date."
                />
              </div>

              <div form-question-zigrow>
                <label>Meeting Time</label>
                <input
                  type="time"
                  name="meeting_time"
                  required
                  title="Please select a meeting time."
                />
              </div>

              <div form-question-zigrow>
                <label>Message</label>
               <textarea
  name="message"
  rows="3"
  placeholder="Enter your message"
  required
  minlength="10"
  maxlength="1000"
  title="Please enter a message between 10 and 1000 characters."
></textarea>
              </div>

              <button type="submit">Book a Call</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-contact-5 {
      background-color: #f5f5f5;
    }

    .py-6 {
      padding: 3rem 0;
    }

    .zigrow-contact-5 .contact-heading {
      margin-bottom: 2rem;
    }

    .zigrow-contact-5 .contact-title {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.03em;
    }

    .zigrow-contact-5 .contact-subtitle {
      color: var(--secondary-colors, #777);
      margin-top: 0.3rem;
      font-size: 0.95rem;
    }

    .zigrow-contact-5 .contact-card {
      background-color: #ffffff;
      box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
      border-radius: 0;
      overflow: hidden;
    }

    .zigrow-contact-5 .contact-left {
      background-color: var(--primary-colors, #111111);
      color: #ffffff;
      height: 100%;
      min-height: 320px;
    }

    .zigrow-contact-5 .contact-left-inner {
      display: table;
      width: 100%;
      height: 100%;
      padding: 2.5rem 2.5rem 2.5rem 2.5rem;
    }

    .zigrow-contact-5 .contact-left-content {
      display: table-cell;
      vertical-align: middle;
    }

    .zigrow-contact-5 .contact-left-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    .zigrow-contact-5 .contact-info-item {
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }

    .zigrow-contact-5 .contact-info-item i {
      margin-right: 0.6rem;
    }

    .zigrow-contact-5 .contact-social {
      margin-top: 1.8rem;
    }

    .zigrow-contact-5 .contact-social a {
      color: #ffffff;
      text-decoration: none;
      font-size: 1.1rem;
      margin-right: 0.9rem;
      transition: color 0.3s ease;
    }

    .zigrow-contact-5 .contact-social a:hover {
      color: #bbbbbb;
    }

    .zigrow-contact-5 .contact-right {
      padding: 2.5rem 2.75rem;
      background-color: #ffffff;
    }

    .zigrow-contact-5 .contact-right form {
      display: grid;
      gap: 1rem;
    }

    .zigrow-contact-5 .contact-right div[form-question-zigrow] {
      display: grid;
      gap: 0.35rem;
    }

    .zigrow-contact-5 .contact-right form label {
      display: block;
      font-size: 0.9rem;
      color: #999999;
      margin: 0;
    }

    .zigrow-contact-5 .contact-right form input,
    .zigrow-contact-5 .contact-right form textarea {
      width: 100%;
      border: none;
      border-bottom: 1px solid #d3d3d3;
      border-radius: 0;
      padding: 0.55rem 0;
      font-size: 0.9rem;
      box-shadow: none;
      background: transparent;
      outline: none;
    }

    .zigrow-contact-5 .contact-right form input:focus,
    .zigrow-contact-5 .contact-right form textarea:focus {
      border-bottom-color: #000000;
      box-shadow: none;
      outline: none;
    }

    .zigrow-contact-5 .contact-right form textarea {
      resize: vertical;
      min-height: 90px;
    }

    .zigrow-contact-5 .contact-right form button {
      display: inline-block;
      justify-self: end;
      padding: 0.7rem 2.5rem;
      background: var(
        --primary-colors,
        linear-gradient(135deg, #000000, #333333)
      );
      color: #ffffff;
      border: none;
      font-size: 0.9rem;
      text-transform: none;
      box-shadow: 0 6px 16px var(--primary-colors, rgba(0, 0, 0, 0.3));
      cursor: pointer;
    }

    .zigrow-contact-5 .contact-right form button:hover {
      background: var(
        --primary-colors,
        linear-gradient(135deg, #111111, #444444)
      );
    }

    @media (max-width: 991.98px) {
      .zigrow-contact-5 .contact-right {
        padding: 2rem 1.75rem;
      }
    }

    @media (max-width: 767.98px) {
      .zigrow-contact-5 .contact-left-inner {
        padding: 2rem 1.5rem;
      }

      .zigrow-contact-5 .contact-right {
        padding: 2rem 1.25rem 2.25rem;
      }

      .zigrow-contact-5 .contact-right form button {
        justify-self: start;
      }

      .zigrow-contact-5 .contact-title {
        font-size: 1.8rem;
      }
    }
  </style>

 
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-contact-6", {
    name: "Contact-6",
    category: "contact",
    image: "https://i.postimg.cc/qMtkbWtp/contact-2.png",

    html: `
<section
  class="zigrow-contact-6 py-6"
  id="zigrow-contact-6"
  data-section="zigrow-contact-6"
>
  <div class="container">
    <div class="row inner-row">
      <div class="col-12 col-lg-6">
        <div class="contact-left">
          <p class="eyebrow">+ CONTACT US</p>

          <h2 class="no-theme-size title">Let’s discuss your cleaning needs</h2>

        <p class="lead-text">
  Stay informed with the key details before you visit. We make it easy to find
  the right location, understand the schedule, and plan your next step with confidence.
</p>

          <div class="info-list">
            <div class="row info-item">
              <div class="col-auto">
                <i
                  class="bi bi-telephone-fill info-item-icon"
                  data-icon="phone"
                ></i>
              </div>
              <div class="col info-item-text"><p>+91 12345 67859</p></div>
            </div>

            <div class="row info-item">
              <div class="col-auto">
                <i
                  class="bi bi-envelope-fill info-item-icon"
                  data-icon="email"
                ></i>
              </div>
              <div class="col info-item-text">
                <p>yourname@domainname.com</p>
              </div>
            </div>

            <div class="row info-item">
              <div class="col-auto">
                <i
                  class="bi bi-geo-alt-fill info-item-icon"
                  data-icon="location"
                ></i>
              </div>
              <div class="col info-item-text">
                <p>E-123, ABC Plaza, XYZ Street, New Delhi - 110077</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6">
        <div class="contact-form-wrapper">
          <form
            class="contact-form"
            action="https://api.zigrow.com/api/forms/submit"
            method="post"
            data-zigrow-form
          >
            <input type="hidden" name="domain" value="" />
            <input type="hidden" name="form_key" value="contact" />
            <input type="hidden" name="page_url" value="" />
            <input type="hidden" name="_company" value="" />

            <div form-question-zigrow>
              <label>Name</label>
            <input
  type="text"
  name="name"
  placeholder="Enter your name"
  required
  minlength="2"
  maxlength="60"
  title="Please enter your name."
/>
            </div>

            <div form-question-zigrow>
              <label>Email</label>
             <input
  type="email"
  name="email"
  placeholder="Enter your email address"
  required
  maxlength="254"
  title="Please enter a valid email address."
/>
            </div>

            <div form-question-zigrow>
              <label>Country Code</label>
             <select
  name="country_code"
  required
  title="Please select your country code."
>
  <option value="" selected disabled>Select country code</option>
  <option value="IN">IN</option>
  <option value="US">US</option>
  <option value="UK">UK</option>
  <option value="AU">AU</option>
</select>
            </div>

            <div form-question-zigrow>
              <label>Phone Number</label>
           <input
  type="tel"
  name="phone"
  inputmode="numeric"
  pattern="[0-9]{10}"
  minlength="10"
  maxlength="10"
  placeholder="Enter 10 digit phone number"
  required
  title="Please enter exactly 10 digits."
/>
            </div>

            <div form-question-zigrow>
              <label>How can we help?</label>
             <textarea
  name="message"
  placeholder="Tell us a little about the project..."
  required
  minlength="10"
  maxlength="1000"
  title="Please enter a message between 10 and 1000 characters."
></textarea>
            </div>

            <button type="submit">Get In Touch</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-contact-6 {
      background-color: #f6f6f6;
     
    }

    .py-6 {
      padding: 3rem 0;
    }

  

    .zigrow-contact-6 .contact-left {
      padding-right: 2.5rem;
    }

    .zigrow-contact-6 .eyebrow {
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--primary-colors, #1b6042);
      font-weight: 600;
      margin-bottom: 0.4rem;
    }

    .zigrow-contact-6 .title {
      font-size: 2.1rem;
      font-weight: 700;
      color: #17163a;
      margin-bottom: 0.75rem;
    }

    .zigrow-contact-6 .lead-text {
      font-size: 1rem;
      color: var(--secondary-colors, #666a73);
      max-width: 420px;
      margin-bottom: 1.8rem;
    }

    .zigrow-contact-6 .info-list {
      margin-top: 1.25rem;
    }

    .zigrow-contact-6 .info-item {
      font-size: 0.95rem;
      color: var(--secondary-colors, #333);
      margin-bottom: 0.65rem;
    }

    .zigrow-contact-6 .info-item-icon {
      color: #17163a;
      font-size: 1.2rem;
    }

    .zigrow-contact-6 .info-item-text {
      padding-left: 0.5rem;
    }

 

    .zigrow-contact-6 .contact-form {
    
      padding-left: 1.5rem;
      display: grid;
      gap: 1rem;
    }

    .zigrow-contact-6 .contact-form div[form-question-zigrow] {
      display: grid;
      gap: 0.35rem;
    }

    .zigrow-contact-6 .contact-form label {
      display: block;
      font-size: 0.86rem;
      color: #868a93;
      margin: 0;
    }

    .zigrow-contact-6 .contact-form input,
    .zigrow-contact-6 .contact-form textarea,
    .zigrow-contact-6 .contact-form select {
      width: 100%;
      border-radius: 0;
      border: 1px solid #e0e0e0;
      padding: 0.55rem 0.7rem;
      font-size: 0.9rem;
      box-shadow: none;
      background-color: #ffffff;
      outline: none;
    }

    .zigrow-contact-6 .contact-form input:focus,
    .zigrow-contact-6 .contact-form textarea:focus,
    .zigrow-contact-6 .contact-form select:focus {
      box-shadow: none;
      border-color: #1b7b55;
    }

    .zigrow-contact-6 .contact-form textarea {
      min-height: 120px;
      resize: vertical;
    }

    .zigrow-contact-6 .contact-form button {
      width: fit-content;
      padding: 0.75rem 1.5rem;
      border: 0;
      border-radius: 999px;
      background-color: var(--primary-colors, #17163a);
      color: #ffffff;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s ease;
    }

    .zigrow-contact-6 .contact-form button:hover {
      opacity: 0.92;
    }

    @media (max-width: 991.98px) {
      .zigrow-contact-6 .contact-left {
        padding-right: 0;
        margin-bottom: 2rem;
      }

      .zigrow-contact-6 .contact-form {
        padding-left: 0;
      }
    }

    @media (max-width: 767.98px) {
      .zigrow-contact-6 .title {
        font-size: 1.8rem;
      }
    }
  </style>

 
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-contact-7", {
    name: "Contact-7",
    category: "contact",
     image: "https://i.postimg.cc/pd6qgsTn/Screenshot-2026-03-20-133207.webp",

    html: `
<section id="zigrow-contact-7" data-section="zigrow-contact-7" class="zigrow-contact-7 py-6">
  <div class="container">
    <div class="row align-items-center g-4">
      <!-- LEFT CONTENT -->
      <div class="col-12 col-lg-6">
        <div class="contact-copy">
          <p class="contact-eyebrow">GET IN TOUCH</p>
          <h2 class="no-theme-size contact-title">We’d love to hear from you</h2>
          <p class="contact-text">
            Have a question, project idea, or just want to say hello? Fill out the form and our team will get back to you.
          </p>

          <div class="contact-info-list">
            <p class="contact-info-item">
              <i class="bi bi-telephone-fill" data-icon="phone"></i>
              +91 91234 56789
            </p>
            <p class="contact-info-item">
              <i class="bi bi-envelope-fill" data-icon="email"></i>
              yourname@domainname.com
            </p>
            <p class="contact-info-item">
              <i class="bi bi-geo-alt-fill" data-icon="location"></i>
              E-123, ABC Plaza, XYZ Street, New Delhi - 110077
            </p>
          </div>
        </div>
      </div>

      <!-- RIGHT FORM -->
      <div class="col-12 col-lg-6">
        <div class="contact-form-panel" data-zg-editable="surface">
          <form
            action="https://api.zigrow.com/api/forms/submit"
            method="post"
            data-zigrow-form
            class="contact-form"
          >
            <input type="hidden" name="domain" value="" />
            <input type="hidden" name="form_key" value="contact" />
            <input type="hidden" name="page_url" value="" />
            <input type="hidden" name="_company" value="" />

            <div form-question-zigrow>
              <label>Full Name</label>
            <input
  type="text"
  name="full_name"
  placeholder="Enter your full name"
  required
  minlength="2"
  maxlength="60"
  title="Please enter your full name."
/>
            </div>

            <div form-question-zigrow>
              <label>Email Address</label>
           <input
  type="email"
  name="email"
  placeholder="Enter your email address"
  required
  maxlength="254"
  title="Please enter a valid email address."
/>
            </div>

            <div form-question-zigrow>
              <label>Phone Number</label>
             <input
  type="tel"
  name="phone"
  inputmode="numeric"
  pattern="[0-9]{10}"
  minlength="10"
  maxlength="10"
  placeholder="Enter 10 digit phone number"
  title="Please enter exactly 10 digits."
/>
            </div>

            <div form-question-zigrow>
              <label>Subject</label>
           <input
  type="text"
  name="subject"
  placeholder="Enter the subject"
  minlength="3"
  maxlength="120"
  title="Please enter a subject between 3 and 120 characters."
/>
            </div>

            <div form-question-zigrow>
              <label>Message</label>
             <textarea
  name="message"
  placeholder="Enter your message"
  rows="5"
  required
  minlength="10"
  maxlength="1000"
  title="Please enter a message between 10 and 1000 characters."
></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <div class="map-container text-center location-map">
       
<div class="zigrow-contact-7-map-btn-wrap">
  <a
    href="https://www.google.com/maps/search/?api=1&query=12.894370090902344%2C77.6343217148211"
    target="_blank"
    class="btn btn-directions"
    data-btn="directions"
  >
    GET DIRECTIONS <i class="bi bi-arrow-right-short" data-icon="arrow-right-short"></i>
  </a>
</div>
          <div data-component-maps style="width:100%; height:350px;">
            <iframe
              frameborder="0"
              src="https://maps.google.com/maps?q=12.894370090902344%2C77.6343217148211&z=14&t=q&output=embed"
              width="100%"
              height="100%"
              style="width:100%; height:100%; left:0"
              loading="lazy"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-contact-7 {
      background: #f7f7f7;
    }

    .zigrow-contact-7 .contact-copy {
      padding-right: 1rem;
    }

    .zigrow-contact-7 .contact-eyebrow {
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: var(--primary-colors, #111111);
      margin-bottom: 0.5rem;
    }

    .zigrow-contact-7 .contact-title {
      font-size: clamp(1.9rem, 1.5rem + 1vw, 2.7rem);
      line-height: 1.2;
      margin-bottom: 0.75rem;
      color: #111111;
    }

    .zigrow-contact-7 .contact-text {
      color: var(--secondary-colors, #666666);
      margin-bottom: 1.25rem;
      max-width: 540px;
    }

    .zigrow-contact-7 .contact-info-list {
      display: grid;
      gap: 0.75rem;
    }

    .zigrow-contact-7 .contact-info-item {
      margin: 0;
      color: #222222;
      font-size: 0.98rem;
    }

    .zigrow-contact-7 .contact-info-item i {
      margin-right: 0.6rem;
    }

    .zigrow-contact-7 .contact-form-panel {
      background: #ffffff;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }

    .zigrow-contact-7 .contact-form {
      display: grid;
      gap: 1rem;
    }

    .zigrow-contact-7 .contact-form div[form-question-zigrow] {
      display: grid;
      gap: 0.35rem;
    }

    .zigrow-contact-7 .contact-form label {
      font-size: 0.92rem;
      font-weight: 600;
      color: #222222;
      margin: 0;
    }

    .zigrow-contact-7 .contact-form input,
    .zigrow-contact-7 .contact-form textarea {
      width: 100%;
      border: 1px solid #dddddd;
      border-radius: 6px;
      padding: 0.85rem 1rem;
      font-size: 0.95rem;
      outline: none;
      background: #ffffff;
    }

    .zigrow-contact-7 .contact-form input:focus,
    .zigrow-contact-7 .contact-form textarea:focus {
      border-color: #999999;
    }

    .zigrow-contact-7 .contact-form textarea {
      min-height: 120px;
      resize: vertical;
    }

    .zigrow-contact-7 .contact-form button {
      width: fit-content;
      border: 0;
      padding: 0.8rem 1.5rem;
      border-radius: 999px;
      background: var(--primary-colors, #111111);
      color: #ffffff;
      font-weight: 600;
      cursor: pointer;
    }


    .zigrow-contact-7 .zigrow-contact-7-map-btn-wrap {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.zigrow-contact-7 .btn-directions {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  width: auto;
  max-width: max-content;
  white-space: nowrap;
}
    .zigrow-contact-7 .map-container {
      width: 100%;
    }

    .zigrow-contact-7 .btn-directions {
      color: inherit;
    }

    .zigrow-contact-7 .location-map iframe {
      width: 100%;
      height: 350px;
      border-radius: 8px;
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
      display: block;
    }

    @media (max-width: 991.98px) {
      .zigrow-contact-7 .contact-copy {
        padding-right: 0;
      }
    }
  </style>


</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-contact-8", {
    name: "Contact-8",
    category: "contact",
    image: "https://i.postimg.cc/0268Wh6s/contact-4.png",

    html: `
<section
  class="zigrow-contact-8 py-6"
  data-section="zigrow-contact-8"
  id="zigrow-contact-8"
>
  <div class="container">
    <div class="row unsure-row">
      <!-- LEFT: TEXT -->
      <div class="col-12 col-lg-6 mb-4 mb-lg-0">
        <div class="unsure-text-block">
          <h2 class="no-theme-size unsure-heading">Are you unsure about your choice?</h2>
          <p class="unsure-subtext">
            Fill out the form and our specialists will help you figure it out.
          </p>
        </div>
      </div>

      <!-- RIGHT: FORM -->
      <div class="col-12 col-lg-6">
        <div class="unsure-form-block">
          <form
            action="https://api.zigrow.com/api/forms/submit"
            class="unsure-form"
            method="post"
            data-zigrow-form
          >
            <input type="hidden" name="domain" value="" />
            <input type="hidden" name="page_url" value="" />
            <input type="hidden" name="form_key" value="unsure-choice" />
            <input type="hidden" name="_company" value="" />

            <div form-question-zigrow>
              <label>Name</label>
             <input
  type="text"
  name="name"
  placeholder="Enter your name"
  required
  minlength="2"
  maxlength="60"
  title="Please enter your name."
/>
            </div>

            <div form-question-zigrow>
              <label>Email Address</label>
            <input
  type="email"
  name="email"
  placeholder="Enter your email address"
  required
  maxlength="254"
  title="Please enter a valid email address."
/>
            </div>

            <div form-question-zigrow>
              <label>Phone Number</label>
             <input
  type="tel"
  name="phone"
  inputmode="numeric"
  pattern="[0-9]{10}"
  minlength="10"
  maxlength="10"
  placeholder="Enter 10 digit phone number"
  required
  title="Please enter exactly 10 digits."
/>
            </div>

            <div form-question-zigrow>
              <label>Consent</label>
              <label>
               <input
  type="checkbox"
  name="consent_terms"
  required
  title="Please accept the terms before submitting."
/>
                I agree to Terms of Use and Privacy Policy
              </label>
            </div>

            <button type="submit">Send request</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-contact-8 {
      background-color: #fbfbfb;
    }

    .py-6 {
      padding: 3rem 0;
    }

    .zigrow-contact-8 .unsure-row {
      align-items: center;
    }

    .zigrow-contact-8 .unsure-text-block {
      max-width: 480px;
    }

    .zigrow-contact-8 .unsure-heading {
      font-size: 2.2rem;
      line-height: 1.25;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #111111;
    }

    .zigrow-contact-8 .unsure-subtext {
      font-size: 0.98rem;
      line-height: 1.6;
      color: #666666;
    }

    .zigrow-contact-8 .unsure-form-block {
      max-width: 420px;
      margin-left: auto;
    }

    .zigrow-contact-8 .unsure-form {
      display: grid;
      gap: 1rem;
    }

    .zigrow-contact-8 .unsure-form div[form-question-zigrow] {
      display: grid;
      gap: 0.45rem;
    }

    .zigrow-contact-8 .unsure-form label {
      font-size: 0.92rem;
      color: #222222;
      margin: 0;
    }

    .zigrow-contact-8 .unsure-form input {
      width: 100%;
      padding: 0.7rem 0.85rem;
      border-radius: 0;
      border: 1px solid #e0e0e0;
      background-color: #ffffff;
      font-size: 0.95rem;
      outline: none;
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
    }

    .zigrow-contact-8 .unsure-form input::placeholder {
      color: #9a9a9a;
    }

    .zigrow-contact-8 .unsure-form input:focus {
      border-color: #333333;
      box-shadow: 0 0 0 1px rgba(51, 51, 51, 0.06);
    }

    .zigrow-contact-8 .unsure-form input[type="checkbox"] {
      width: auto;
      padding: 0;
      margin-right: 0.5rem;
      vertical-align: middle;
    }

    .zigrow-contact-8 .unsure-form button {
      margin-top: 0.25rem;
      width: 100%;
      padding: 0.75rem 1rem;
      border-radius: 0;
      border: none;
      background-color: var(--primary-colors, #202326);
      color: #ffffff;
      font-size: 0.95rem;
      font-weight: 500;
      letter-spacing: 0.02em;
      text-transform: none;
      cursor: pointer;
      transition: background-color 0.15s ease, transform 0.1s ease;
    }

    .zigrow-contact-8 .unsure-form button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 14px var(--primary-colors, #202326);
    }

    .zigrow-contact-8 .unsure-form button:active {
      transform: translateY(1px);
    }

    @media (max-width: 991.98px) {
      .zigrow-contact-8 {
        padding: 3rem 0;
      }

      .zigrow-contact-8 .unsure-text-block {
        margin-bottom: 1.75rem;
      }

      .zigrow-contact-8 .unsure-heading {
        font-size: 1.9rem;
      }

      .zigrow-contact-8 .unsure-form-block {
        margin-left: 0;
      }
    }

    @media (max-width: 575.98px) {
      .zigrow-contact-8 {
        padding: 2.5rem 0;
      }

      .zigrow-contact-8 .unsure-heading {
        font-size: 1.7rem;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-contact-9", {
  name: "Contact-9",
  category: "contact",
  image:
    "https://i.postimg.cc/4y2rc97Q/Screenshot-2026-07-21-172954.png",
  html: `
<section
  id="zigrow-contact-9"
  class="zigrow-contact-9"
  data-section="zigrow-contact-9"
>
  <div class="zigrow-contact-9-decoration" aria-hidden="true">
    <span class="zigrow-contact-9-glow zigrow-contact-9-glow-left"></span>
    <span class="zigrow-contact-9-glow zigrow-contact-9-glow-center"></span>
    <span class="zigrow-contact-9-glow zigrow-contact-9-glow-right"></span>
  </div>

  <div class="container">
    <div class="zigrow-contact-9-heading">
      <h2 class="no-theme-size zigrow-contact-9-title">Contact us</h2>

      <p class="zigrow-contact-9-description">
        Learn how our team can support your goals, simplify everyday challenges,
        and create better outcomes for your business.
      </p>
    </div>

    <div
      class="zigrow-contact-9-form-card"
  
    >
      <form
        action="https://api.zigrow.com/api/forms/submit"
        method="post"
        data-zigrow-form
        class="zigrow-contact-9-form"
      >
        <input type="hidden" name="domain" value="" />
        <input type="hidden" name="form_key" value="contact" />
        <input type="hidden" name="page_url" value="" />
        <input type="hidden" name="_company" value="" />

        <div class="zigrow-contact-9-name-grid">
          <div form-question-zigrow>
            <label>
              <span>First Name</span>
              <span class="zigrow-contact-9-required">*</span>
            </label>

            <input
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              required
              minlength="2"
              maxlength="60"
              autocomplete="given-name"
              title="Please enter your first name."
            />
          </div>

          <div form-question-zigrow>
            <label>
              <span>Last Name</span>
              <span class="zigrow-contact-9-required">*</span>
            </label>

            <input
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              required
              minlength="2"
              maxlength="60"
              autocomplete="family-name"
              title="Please enter your last name."
            />
          </div>
        </div>

        <div form-question-zigrow>
          <label>
            <span>Company</span>
            <span class="zigrow-contact-9-required">*</span>
          </label>

          <input
            type="text"
            name="company"
            placeholder="Enter your company name"
            required
            minlength="2"
            maxlength="100"
            autocomplete="organization"
            title="Please enter your company name."
          />
        </div>

        <div form-question-zigrow>
          <label>
            <span>Job Title</span>
          </label>

          <input
            type="text"
            name="job_title"
            placeholder="Enter your job title"
            minlength="2"
            maxlength="80"
            autocomplete="organization-title"
            title="Please enter your job title."
          />
        </div>

        <div form-question-zigrow>
          <label>
            <span>Business Email</span>
            <span class="zigrow-contact-9-required">*</span>
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your business email"
            required
            maxlength="254"
            autocomplete="email"
            title="Please enter a valid email address."
          />
        </div>

        <div form-question-zigrow>
          <label>
            <span>Message</span>
          </label>

          <textarea
            name="message"
            placeholder="Tell us how we can help"
            rows="4"
            minlength="10"
            maxlength="1000"
            title="Please enter a message between 10 and 1000 characters."
          ></textarea>
        </div>

        <div class="zigrow-contact-9-action">
          <button
            type="submit"
            class="zigrow-contact-9-button"
          
          >
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <style>
    .zigrow-contact-9 {
      position: relative;
      width: 100%;
      min-height: 720px;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 7rem) 0;
      background:
        radial-gradient(
          circle at 15% 35%,
          rgba(139, 220, 246, 0.58),
          transparent 35%
        ),
        radial-gradient(
          circle at 53% 45%,
          rgba(255, 231, 167, 0.4),
          transparent 29%
        ),
        radial-gradient(
          circle at 84% 34%,
          rgba(157, 222, 246, 0.58),
          transparent 35%
        ),
        #f6f6f6;
    }

    .zigrow-contact-9 .container {
      position: relative;
      z-index: 2;
    }

    .zigrow-contact-9 .zigrow-contact-9-decoration {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .zigrow-contact-9 .zigrow-contact-9-decoration::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.04) 48%,
        rgba(255, 255, 255, 0.6) 100%
      );
    }

    .zigrow-contact-9 .zigrow-contact-9-glow {
      position: absolute;
      display: block;
      border-radius: 50%;
      filter: blur(55px);
    }

    .zigrow-contact-9 .zigrow-contact-9-glow-left {
      top: 5%;
      left: -10%;
      width: 32rem;
      height: 32rem;
      background: rgba(136, 219, 246, 0.35);
    }

    .zigrow-contact-9 .zigrow-contact-9-glow-center {
      top: 22%;
      left: 38%;
      width: 25rem;
      height: 25rem;
      background: rgba(255, 225, 164, 0.25);
    }

    .zigrow-contact-9 .zigrow-contact-9-glow-right {
      top: 2%;
      right: -8%;
      width: 34rem;
      height: 34rem;
      background: rgba(139, 216, 244, 0.36);
    }

    .zigrow-contact-9 .zigrow-contact-9-heading {
      max-width: 760px;
      margin: 0 auto clamp(2.5rem, 5vw, 4rem);
      text-align: center;
    }

    .zigrow-contact-9 .zigrow-contact-9-title {
      margin: 0;
      color: #181818;
      font-size: clamp(2.8rem, 5vw, 4.8rem);
      font-weight: 500;
      line-height: 1.05;
      letter-spacing: -0.045em;
    }

    .zigrow-contact-9 .zigrow-contact-9-description {
      max-width: 680px;
      margin: 1rem auto 0;
      color: var(--secondary-colors, #5f6469);
      font-size: clamp(0.95rem, 1.25vw, 1.08rem);
      line-height: 1.65;
    }

    .zigrow-contact-9 .zigrow-contact-9-form-card {
      width: min(100%, 880px);
      margin: 0 auto;
      padding: clamp(1.75rem, 4vw, 3.5rem);
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: clamp(1.2rem, 2vw, 1.8rem);
      background: rgba(255, 255, 255, 0.62);
      box-shadow: 0 1.5rem 4rem rgba(54, 79, 89, 0.08);
      backdrop-filter: blur(18px);
    }

    .zigrow-contact-9 .zigrow-contact-9-form {
      display: grid;
      gap: 1.1rem;
    }

    .zigrow-contact-9 .zigrow-contact-9-name-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: clamp(1rem, 3vw, 2.5rem);
    }

    .zigrow-contact-9 .zigrow-contact-9-form div[form-question-zigrow] {
      display: grid;
      gap: 0.45rem;
      min-width: 0;
    }

    .zigrow-contact-9 .zigrow-contact-9-form label {
      display: grid;
      grid-template-columns: max-content max-content;
      gap: 0.12rem;
      align-items: center;
      width: max-content;
      margin: 0;
      color: #33373a;
      font-size: 0.78rem;
      font-weight: 700;
      line-height: 1.25;
    }

    .zigrow-contact-9 .zigrow-contact-9-required {
      color: var(--primary-colors, #ec6d61);
    }

    .zigrow-contact-9 .zigrow-contact-9-form input,
    .zigrow-contact-9 .zigrow-contact-9-form textarea {
      width: 100%;
      border: 1px solid rgba(93, 117, 125, 0.2);
      border-radius: 0.65rem;
      outline: none;
      background: rgba(255, 255, 255, 0.72);
      color: #24272a;
      font-size: 0.9rem;
      line-height: 1.4;
      transition:
        border-color 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-contact-9 .zigrow-contact-9-form input {
      min-height: 3rem;
      padding: 0.75rem 1rem;
    }

    .zigrow-contact-9 .zigrow-contact-9-form textarea {
      min-height: 6rem;
      padding: 0.9rem 1rem;
      resize: vertical;
    }

    .zigrow-contact-9 .zigrow-contact-9-form input::placeholder,
    .zigrow-contact-9 .zigrow-contact-9-form textarea::placeholder {
      color: #a0a7aa;
    }

    .zigrow-contact-9 .zigrow-contact-9-form input:focus,
    .zigrow-contact-9 .zigrow-contact-9-form textarea:focus {
      border-color: var(--primary-colors, #53aecb);
      background: #ffffff;
      box-shadow: 0 0 0 0.2rem rgba(83, 174, 203, 0.12);
    }

    .zigrow-contact-9 .zigrow-contact-9-form button {
      display: grid;
      place-items: center;
      justify-self: center;
      min-width: 5.5rem;
      min-height: 2.5rem;
      margin-top: 1rem;
      padding: 0.7rem 1.45rem;
      border: 1px solid var(--primary-colors, #191919);
      border-radius: 999px;
      background: var(--primary-colors, #191919);
      color: #ffffff;
      font-size: 0.78rem;
      font-weight: 700;
      line-height: 1;
      cursor: pointer;
      transition:
        transform 0.25s ease,
        background 0.25s ease,
        color 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-contact-9 .zigrow-contact-9-form button:hover {
      transform: translateY(-2px);
      background: #ffffff;
      color: var(--primary-colors, #191919);
      box-shadow: 0 0.8rem 1.8rem rgba(25, 25, 25, 0.14);
    }

    @media (max-width: 767px) {
      .zigrow-contact-9 {
        min-height: auto;
        padding: 3rem 0;
      }

      .zigrow-contact-9 .zigrow-contact-9-form-card {
        padding: 1.5rem;
        border-radius: 1.2rem;
      }

      .zigrow-contact-9 .zigrow-contact-9-name-grid {
        grid-template-columns: 1fr;
        gap: 1.1rem;
      }
    }

    @media (max-width: 479px) {
      .zigrow-contact-9 .zigrow-contact-9-heading {
        margin-bottom: 2rem;
      }

      .zigrow-contact-9 .zigrow-contact-9-title {
        font-size: clamp(2.5rem, 13vw, 3.6rem);
      }

      .zigrow-contact-9 .zigrow-contact-9-form-card {
        padding: 1.25rem 1rem;
      }

      .zigrow-contact-9 .zigrow-contact-9-form button {
        width: 100%;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-contact-9 .zigrow-contact-9-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-contact-10", {
  name: "Contact-10",
  category: "contact",
  image: "https://i.postimg.cc/j2SpCX5X/Screenshot-2026-07-21-173003.png",

  html: `
<section
  id="zigrow-contact-10"
  data-section="zigrow-contact-10"
  class="zigrow-contact-10"
>
  <div class="zigrow-contact-10-container">
    <div class="zigrow-contact-10-header">

      <h2 class="no-theme-size zigrow-contact-10-title">EMAIL US</h2>
    </div>

    <div class="zigrow-contact-10-divider"></div>

    <div class="zigrow-contact-10-layout">
      <div class="zigrow-contact-10-intro">
        <p class="zigrow-contact-10-intro-text">
          Let us turn your ideas into meaningful results. Contact us today and
          start a conversation about your next project.
        </p>
      </div>

      <div class="zigrow-contact-10-form-wrap">
        <form
          action="https://api.zigrow.com/api/forms/submit"
          method="post"
          data-zigrow-form
          class="zigrow-contact-10-form"
        >
          <input type="hidden" name="domain" value="" />
          <input type="hidden" name="form_key" value="contact" />
          <input type="hidden" name="page_url" value="" />
          <input type="hidden" name="_company" value="" />

          <div
            class="zigrow-contact-10-field"
            form-question-zigrow
          >
            <label for="zigrow-contact-10-name">Name:</label>

            <input
              id="zigrow-contact-10-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              minlength="2"
              maxlength="60"
              autocomplete="name"
              title="Please enter your name."
            />
          </div>

          <div
            class="zigrow-contact-10-field"
            form-question-zigrow
          >
            <label for="zigrow-contact-10-email">Email:</label>

            <input
              id="zigrow-contact-10-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              maxlength="254"
              autocomplete="email"
              title="Please enter a valid email address."
            />
          </div>

          <div
            class="zigrow-contact-10-field"
            form-question-zigrow
          >
            <label for="zigrow-contact-10-message">Message:</label>

            <textarea
              id="zigrow-contact-10-message"
              name="message"
              placeholder="Enter your message"
              required
              rows="6"
              minlength="10"
              maxlength="1000"
              title="Please enter a message between 10 and 1000 characters."
            ></textarea>
          </div>

          <div
            class="zigrow-contact-10-consent"
            form-question-zigrow
          >
            <input
              id="zigrow-contact-10-consent"
              type="checkbox"
              name="consent"
              value="accepted"
              required
            />

            <label for="zigrow-contact-10-consent">
              All required fields must be completed. By submitting this form,
              you agree to our terms and privacy policy.
            </label>
          </div>

          <div class="zigrow-contact-10-action">
            <button
              type="submit"
              class="zigrow-contact-10-button"
              
            >
              <span>SEND MESSAGE</span>

              <span class="zigrow-contact-10-button-icon">
                <i
                  class="bi bi-stars"
                  data-icon="stars"
                ></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <style>
    .zigrow-contact-10 {
      width: 100%;
      overflow: hidden;
      background: #ffffff;
      padding: 34px 0 72px;
    }

    .zigrow-contact-10 .zigrow-contact-10-container {
      width: min(100% - 48px, 1120px);
      margin: 0 auto;
    }

    .zigrow-contact-10 .zigrow-contact-10-header {
      display: grid;
      gap: 14px;
    }

    .zigrow-contact-10 .zigrow-contact-10-number {
      display: grid;
      width: max-content;
      min-width: 30px;
      min-height: 17px;
      padding: 2px 7px;
      place-items: center;
      border: 1px solid var(--primary-colors, #111111);
      border-radius: 999px;
      color: var(--primary-colors, #111111);
      font-size: 0.58rem;
      font-weight: 600;
      line-height: 1;
    }

    .zigrow-contact-10 .zigrow-contact-10-title {
      margin: 0;
      color: var(--secondary-colors, #111111);
      font-size: clamp(3.8rem, 10vw, 8rem);
      font-weight: 800;
      letter-spacing: -0.07em;
      line-height: 0.85;
      text-transform: uppercase;
    }

    .zigrow-contact-10 .zigrow-contact-10-divider {
      width: 100%;
      height: 1px;
      margin: 54px 0 34px;
      background: var(--primary-colors, #111111);
      opacity: 0.48;
    }

    .zigrow-contact-10 .zigrow-contact-10-layout {
      display: grid;
      grid-template-columns: minmax(180px, 0.72fr) minmax(440px, 1.35fr);
      gap: clamp(50px, 9vw, 135px);
      align-items: start;
    }

    .zigrow-contact-10 .zigrow-contact-10-intro-text {
      max-width: 270px;
      margin: 0;
      color: var(--secondary-colors, #111111);
      font-size: 0.96rem;
      line-height: 1.45;
    }

    .zigrow-contact-10 .zigrow-contact-10-form {
      display: grid;
      gap: 27px;
    }

    .zigrow-contact-10 .zigrow-contact-10-field {
      display: grid;
      gap: 12px;
    }

    .zigrow-contact-10 .zigrow-contact-10-field label {
      margin: 0;
      color: var(--primary-colors, #111111);
      font-size: 0.92rem;
      font-weight: 600;
      line-height: 1.4;
    }

    .zigrow-contact-10 .zigrow-contact-10-field input,
    .zigrow-contact-10 .zigrow-contact-10-field textarea {
      width: 100%;
      border: 1px solid #d5d5d5;
      border-radius: 0;
      outline: none;
      background: #ffffff;
      color: var(--primary-colors, #111111);
      font-size: 0.92rem;
      line-height: 1.5;
      transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
    }

    .zigrow-contact-10 .zigrow-contact-10-field input {
      min-height: 58px;
      padding: 14px 18px;
    }

    .zigrow-contact-10 .zigrow-contact-10-field textarea {
      min-height: 185px;
      padding: 16px 18px;
      resize: vertical;
    }

    .zigrow-contact-10 .zigrow-contact-10-field input::placeholder,
    .zigrow-contact-10 .zigrow-contact-10-field textarea::placeholder {
      color: var(--secondary-colors, #999999);
    }

    .zigrow-contact-10 .zigrow-contact-10-field input:focus,
    .zigrow-contact-10 .zigrow-contact-10-field textarea:focus {
      border-color: var(--primary-colors, #111111);
      box-shadow: 0 0 0 3px rgba(17, 17, 17, 0.06);
    }

    .zigrow-contact-10 .zigrow-contact-10-consent {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }

    .zigrow-contact-10 .zigrow-contact-10-consent input {
      width: 13px;
      height: 13px;
      margin: 2px 0 0;
      accent-color: var(--primary-colors, #111111);
    }

    .zigrow-contact-10 .zigrow-contact-10-consent label {
      margin: 0;
      color: var(--secondary-colors, #777777);
      font-size: 0.65rem;
      line-height: 1.45;
    }

    .zigrow-contact-10 .zigrow-contact-10-action {
      display: grid;
      justify-content: start;
    }

    .zigrow-contact-10 .zigrow-contact-10-button {
      display: grid;
      grid-template-columns: auto auto;
      gap: 10px;
      align-items: center;
      justify-content: center;
      min-width: 220px;
      min-height: 56px;
      padding: 13px 24px;
      border: 1px solid var(--primary-colors, #111111);
      border-radius: 999px;
      background: #ffffff;
      color: var(--primary-colors, #111111);
      font-size: 0.86rem;
      font-weight: 700;
      line-height: 1;
      cursor: pointer;
      transition:
        background-color 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-contact-10 .zigrow-contact-10-button-icon {
      display: grid;
      place-items: center;
      font-size: 1rem;
      line-height: 1;
    }

    .zigrow-contact-10 .zigrow-contact-10-button:hover {
      transform: translateY(-2px);
      background: var(--primary-colors, #111111);
      box-shadow: 0 12px 26px rgba(17, 17, 17, 0.14);
      color: #ffffff;
    }

    @media (max-width: 991px) {
      .zigrow-contact-10 {
        padding: 34px 0 60px;
      }

      .zigrow-contact-10 .zigrow-contact-10-layout {
        grid-template-columns: minmax(180px, 0.65fr) minmax(380px, 1.35fr);
        gap: 60px;
      }

      .zigrow-contact-10 .zigrow-contact-10-title {
        font-size: clamp(4rem, 11vw, 7rem);
      }
    }

    @media (max-width: 767px) {
      .zigrow-contact-10 .zigrow-contact-10-container {
        width: min(100% - 32px, 1120px);
      }

      .zigrow-contact-10 .zigrow-contact-10-title {
        font-size: clamp(3.4rem, 16vw, 5.5rem);
      }

      .zigrow-contact-10 .zigrow-contact-10-divider {
        margin: 40px 0 30px;
      }

      .zigrow-contact-10 .zigrow-contact-10-layout {
        grid-template-columns: 1fr;
        gap: 42px;
      }

      .zigrow-contact-10 .zigrow-contact-10-intro-text {
        max-width: 460px;
      }
    }

    @media (max-width: 480px) {
      .zigrow-contact-10 {
        padding: 28px 0 48px;
      }

      .zigrow-contact-10 .zigrow-contact-10-container {
        width: min(100% - 24px, 1120px);
      }

      .zigrow-contact-10 .zigrow-contact-10-title {
        font-size: clamp(3rem, 17vw, 4.3rem);
      }

      .zigrow-contact-10 .zigrow-contact-10-divider {
        margin: 34px 0 26px;
      }

      .zigrow-contact-10 .zigrow-contact-10-form {
        gap: 23px;
      }

      .zigrow-contact-10 .zigrow-contact-10-field input {
        min-height: 54px;
      }

      .zigrow-contact-10 .zigrow-contact-10-field textarea {
        min-height: 165px;
      }

      .zigrow-contact-10 .zigrow-contact-10-button {
        width: 100%;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-contact-10 .zigrow-contact-10-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

// Portfolio Blocks
Vvveb.Blocks.add("bootstrap4/zigrow-portfolio-1", {
    name: "Portfolio-1",
    category: "portfolio",
    image: "https://i.postimg.cc/tTzRr0xp/Screenshot-2025-11-15-163043.png",
    html: `  <section id="zigrow-portfolio-1" data-section="zigrow-portfolio-1" class="zigrow-portfolio-1 py-6">
      <div class="container">
        <div class="zigrow-portfolio-1__inner">
          <!-- HEADER USING BOOTSTRAP GRID -->
          <div class="row zigrow-portfolio-1__header">
            <div class="col-12 col-lg-8">
              <div class="zigrow-portfolio-1__titles">
                <p class="zigrow-portfolio-1__eyebrow">About Founder</p>
                <h2 class="no-theme-size zigrow-portfolio-1__title">Our Latest Works</h2>
              </div>
            </div>
            <div class="col-12 col-lg-4 text-lg-end mt-3 mt-lg-0">
              <a href="#" class="zigrow-portfolio-1__btn" data-btn="portfolio"> View Projects </a>
            </div>
          </div>

          <!-- CARDS USING BOOTSTRAP ROW + COLS -->
          <div class="row g-3 g-md-0 zigrow-portfolio-1__grid">
            <!-- 1 card per row on mobile, 2 on sm, 4 on lg -->
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="project-card">
                <div class="project-card__image-wrapper">
                  <div class="project-img-box">
                     <img
               src="/builder/img/zigrow-portfolio-images/1.webp" 
                alt="Delhi City"
                class="project-card__image"
              />
                  </div>
                  <div class="project-card__details">
                    <h5 class="project-card__name">Delhi City</h5>
                    <p class="project-card__location">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="project-card">
                <div class="project-card__image-wrapper">
                  <div class="project-img-box">
                    <img
                src="/builder/img/zigrow-portfolio-images/2.webp" 
                alt="Mumbai City"
                class="project-card__image"
              />
                  </div>
                  <div class="project-card__details">
                    <h5 class="project-card__name">Mumbai City</h5>
                    <p class="project-card__location">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="project-card">
                <div class="project-card__image-wrapper">
                  <div class="project-img-box">
                     <img
               src="/builder/img/zigrow-portfolio-images/3.webp" 
                alt="Ahmedabad City"
                class="project-card__image"
              />
                  </div>
                  <div class="project-card__details">
                    <h5 class="project-card__name">Ahmedabad City</h5>
                    <p class="project-card__location">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="project-card">
                <div class="project-card__image-wrapper">
                  <div class="project-img-box">
                    <img
                src="/builder/img/zigrow-portfolio-images/4.webp" 
                alt="Bengaluru City"
                class="project-card__image"
              />
                  </div>
                  <div class="project-card__details">
                    <h5 class="project-card__name">Bengaluru City</h5>
                    <p class="project-card__location">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <style>
      .py-6 {
        padding: 3rem 0;
      }
      :root {
        --text-light: #ffffff;
      }

      .zigrow-portfolio-1 * {
        box-sizing: border-box;
      }

      /* SECTION WRAPPER */
      .zigrow-portfolio-1 {
        /* padding: 60px 0; */
        background-color: #ffffff;
      }

      /* HEADER (no flex here, Bootstrap handles layout) */
      .zigrow-portfolio-1__header {
        padding-bottom: 32px;
        align-items: center;
      }

      .zigrow-portfolio-1__eyebrow {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--secondary-colors, #595f6b);
        margin: 0 0 4px;
      }

      .zigrow-portfolio-1__title {
        font-size: 32px;
        font-weight: 700;
        color: var(--territory-colors, #1c2b45);
        margin: 0;
      }

      /* BUTTON */
      .zigrow-portfolio-1__btn {
        display: inline-block;
        padding: 10px 26px;
        border-radius: 3px;
        background-color: var(--primary-colors, #feb909);
        color: var(--text-light, #ffffff);
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.08em;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease, transform 0.2s ease;
      }

      .zigrow-portfolio-1__btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 20px var(--primary-colors, #feb909);
      }

      /* GRID WRAPPER (spacing only, layout via Bootstrap row/col) */
      /* .zigrow-portfolio-1__grid {
        padding: 0;
      } */

      /* CARD */
      .project-card {
        width: 100%;
      }

      .project-card__image-wrapper {
        position: relative;
        overflow: hidden;
      }
      .project-img-box {
        text-align: center;
        width: auto;
      }
      .project-card__image {
        /* display: block; */
        height: 260px;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }

      /* GRADIENT OVERLAY */
      .project-card__image-wrapper::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.85),
          rgba(0, 0, 0, 0.05)
        );
        pointer-events: none;
      }

      /* TEXT OVERLAY */
      .project-card__details {
        position: absolute;
        left: 20px;
        bottom: 18px;
        color: var(--text-light, #ffffff);
        z-index: 2;
      }

      .project-card__name {
        margin: 0 0 4px;
        font-size: 18px;
        font-weight: 700;
      }

      .project-card__location {
        margin: 0;
        font-size: 13px;
        opacity: 0.9;
      }

      /* HOVER EFFECT */
      .project-card__image-wrapper:hover .project-card__image {
        transform: scale(1.06);
      }

      /* Desktop tweak: let image height auto if you want taller cards */
      @media (min-width: 992px) {
        .project-card__image {
          height: auto;
        }
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-portfolio-2", {
    name: "Portfolio-2",
    category: "portfolio",
    image: "https://i.postimg.cc/pXBWRMGT/Screenshot-2025-11-15-163941.png",
    html: ` <section class="zigrow-portfolio-2 py-6" data-section="zigrow-portfolio-2" id="zigrow-portfolio-2">
      <div class="container">
        <div class="row g-3">
          <!-- Image 1 (span 2 cols like grid-column:span 2) -->
          <div class="image-box col-12 col-md-6 clonable-card">
           <img
          src="/builder/img/zigrow-portfolio-images/5.webp" 
            alt="Children playing"
            class="img-1"
          />
          </div>
          <!-- Image 2 -->
          <div class="image-box col-6 col-md-3 clonable-card">
            <img
            src="/builder/img/zigrow-portfolio-images/6.webp"
            alt="Child in snow"
            class="img-2"
          />
          </div>
          <!-- Image 3 -->
          <div class="image-box col-6 col-md-3 clonable-card">
           <img
            src="/builder/img/zigrow-portfolio-images/7.webp"
            alt="Child stacking blocks"
            class="img-3"
          />
          </div>
          <!-- Image 4 -->
          <div class="image-box col-6 col-md-3 clonable-card">
           <img
            src="/builder/img/zigrow-portfolio-images/8.webp"
            alt="Coloring activity"
            class="img-4"
          />
          </div>
          <!-- Image 5 -->
          <div class="image-box col-6 col-md-3 clonable-card">
             <img
            src="/builder/img/zigrow-portfolio-images/9.webp"
            alt="Smiling child"
            class="img-5"
          />
          </div>
          <!-- Image 6 (big bottom image spanning 2 cols) -->
          <div class="image-box col-12 col-md-6 clonable-card">
             <img
            src="/builder/img/zigrow-portfolio-images/10.webp"
            alt="Kids with letter blocks"
            class="img-6"
          />
          </div>
        </div>
      </div>
       <style>
      .py-6{
        padding: 3rem 0;
      }
      .zigrow-portfolio-2 {
        background-color: #f3f8fb;
      }

     
.py-6 {
  padding: 3rem 0;
}

.zigrow-portfolio-2 {
  background-color: #f3f8fb;
}

.zigrow-portfolio-2 .image-box {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 12px;
}

.zigrow-portfolio-2 .image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}
   
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-portfolio-3", {
    name: "Portfolio-3",
    category: "portfolio",
    image: "https://i.postimg.cc/DzTtxx3n/Screenshot-2025-11-15-165122.png",
    html: `  <section id="zigrow-portfolio-3" data-section="zigrow-portfolio-3" class="zigrow-portfolio-3 py-6">
      <div class="container">
        <!-- Bootstrap grid instead of CSS grid -->
        <div class="zigrow-portfolio-3-grid">
          <div class="row g-md-3">
            <div class="col-12 col-sm-6 col-lg-4 clonable-card">
              <div class="zigrow-portfolio-3-item">
                <img  src="/builder/img/zigrow-portfolio-images/11.jpg"  alt="Fine Dining" />
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4 clonable-card">
              <div class="zigrow-portfolio-3-item">
                <img  src="/builder/img/zigrow-portfolio-images/12.jpg"  alt="Group Eating" />
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4 clonable-card">
              <div class="zigrow-portfolio-3-item">
              <img
              src="/builder/img/zigrow-portfolio-images/13.jpg"
              alt="Friends Toasting"
            />
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4 clonable-card">
              <div class="zigrow-portfolio-3-item">
                 <img
              src="/builder/img/zigrow-portfolio-images/14.jpg"
              alt="Outdoor Dining"
            />
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4 clonable-card">
              <div class="zigrow-portfolio-3-item">
                <img src="/builder/img/zigrow-portfolio-images/15.jpg" alt="Korean Food" />
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4 clonable-card">
              <div class="zigrow-portfolio-3-item">
              <img
              src="/builder/img/zigrow-portfolio-images/16.jpg"
              alt="Restaurant Kitchen"
            />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
      .py-6 {
        padding: 3rem 0;
      }
      .zigrow-portfolio-3 {
        background-color: #fff;
      }

      /* Wrapper – no grid/flex here, Bootstrap handles layout */

      .zigrow-portfolio-3 .zigrow-portfolio-3-item {
        text-align: center;
        overflow: hidden;
      }

      .zigrow-portfolio-3 .zigrow-portfolio-3-item img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
        aspect-ratio: 3 / 3;
      }

      .zigrow-portfolio-3 .zigrow-portfolio-3-item img:hover {
        transform: scale(1.05);
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-portfolio-4", {
    name: "Portfolio-4",
    category: "portfolio",
    image: "https://i.postimg.cc/Mptt7HGG/portfolio-4.png",
    html: `  <section id="zigrow-portfolio-4" data-section="zigrow-portfolio-4" class="zigrow-portfolio-4 py-6">
      <div class="container">
        <!-- Header -->
        <div class="zigrow-portfolio-4-header">
          <p class="section-top-btn">Portfolio</p>
          <h2 class="no-theme-size zigrow-portfolio-4-title">
            Explore my portfolio of creative Solutions
          </h2>
        </div>

        <!-- Grid using Bootstrap -->
        <div class="row g-3">
          <!-- Item 1 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="zigrow-portfolio-4-wrapper">
              <img
                 src="/builder/img/zigrow-portfolio-images/17.webp"
              class="zigrow-portfolio-4-image"
              alt="zigrow-portfolio-4 item"
            />
              <div class="overlay">
                <div class="arrow-container"/><i class="bi bi-arrow-up-right" data-icon="portfolio-arrow"></i></div>
              </div>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="zigrow-portfolio-4-wrapper">
              <img
                src="/builder/img/zigrow-portfolio-images/18.webp"
              class="zigrow-portfolio-4-image"
              alt="zigrow-portfolio-4 item"
            />
              <div class="overlay">
                 <div class="arrow-container"/><i class="bi bi-arrow-up-right" data-icon="portfolio-arrow"></i></div>
              </div>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="zigrow-portfolio-4-wrapper">
             <img
              src="/builder/img/zigrow-portfolio-images/19.webp"
              class="zigrow-portfolio-4-image"
              alt="zigrow-portfolio-4 item"
            />
              <div class="overlay">
               <div class="arrow-container"/><i class="bi bi-arrow-up-right" data-icon="portfolio-arrow"></i></div>
              </div>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="zigrow-portfolio-4-wrapper">
             <img
             src="/builder/img/zigrow-portfolio-images/20.webp"
              class="zigrow-portfolio-4-image"
              alt="zigrow-portfolio-4 item"
            />
              <div class="overlay">
               <div class="arrow-container"/><i class="bi bi-arrow-up-right" data-icon="portfolio-arrow"></i></div>
              </div>
            </div>
          </div>

          <!-- Item 5 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="zigrow-portfolio-4-wrapper">
                <img
                  src="/builder/img/zigrow-portfolio-images/21.webp"
              class="zigrow-portfolio-4-image"
              alt="zigrow-portfolio-4 item"
            />
              <div class="overlay">
          <div class="arrow-container"/><i class="bi bi-arrow-up-right" data-icon="portfolio-arrow"></i></div>
              </div>
            </div>
          </div>

          <!-- Item 6 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="zigrow-portfolio-4-wrapper">
              <img
              src="/builder/img/zigrow-portfolio-images/22.webp"
              class="zigrow-portfolio-4-image"
              alt="zigrow-portfolio-4 item"
            />
              <div class="overlay">
              <div class="arrow-container"/><i class="bi bi-arrow-up-right" data-icon="portfolio-arrow"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
         <style>
      .py-6 {
        padding: 3rem 0;
      }
      .zigrow-portfolio-4 {
        background-color: #ffffff;
      }

      .zigrow-portfolio-4 .zigrow-portfolio-4-header {
        margin-bottom: 1.5rem;
      }

      .zigrow-portfolio-4 .section-top-btn {
        display: inline-block;
        padding: 0.35rem 0.9rem;
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 500;
        background-color: var(--primary-colors, #f8f9fa);
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.08);
        color: #222;
      }

      .zigrow-portfolio-4 .zigrow-portfolio-4-title {
        margin-top: 0.75rem;
        margin-bottom: 0;
        font-weight: 600;
        line-height: 1.4;
        font-size: clamp(1.8rem, 3vw, 2.5rem);
        color: #20252b;
      }

      /* IMAGE CARD */
      .zigrow-portfolio-4-wrapper {
        text-align: center;
        position: relative;
        overflow: hidden;
        border-radius: 0.8rem;
      }

    

  .zigrow-portfolio-4 .zigrow-portfolio-4-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  aspect-ratio: 4 / 3;
}

.zigrow-portfolio-4 .zigrow-portfolio-4-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0.8rem;
}

.zigrow-portfolio-4 .overlay {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  z-index: 2;
}

.zigrow-portfolio-4 .arrow-container{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-colors, #ffffff);
  color: #20252b;
   line-height: 1;
  transition: transform 0.4s ease;
}

.zigrow-portfolio-4 .arrow-container i {

  font-size: 2rem;
 
}

.zigrow-portfolio-4 .arrow-container:hover i {
  transform: scale(1.08);
}

    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-portfolio-5", {
    name: "Portfolio-5",
    category: "portfolio",
    image: "https://i.postimg.cc/q7Rwjrhf/portfolio-5.png",
    html: ` <section id="zigrow-portfolio-5" data-section="zigrow-portfolio-5" class="zigrow-portfolio-5 py-6">
      <div class="container">
        <div class="row g-2">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="zigrow-portfolio-5-wrapper">
              <div class="zigrow-portfolio-5-item">
                <img src="/builder/img/zigrow-portfolio-images/23.webp" alt="Office 1" />
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="zigrow-portfolio-5-wrapper">
              <div class="zigrow-portfolio-5-item">
                <img src="/builder/img/zigrow-portfolio-images/24.webp" alt="Office 2" />
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="zigrow-portfolio-5-wrapper">
              <div class="zigrow-portfolio-5-item">
                <img src="/builder/img/zigrow-portfolio-images/25.webp" alt="Office 3" />
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="zigrow-portfolio-5-wrapper">
              <div class="zigrow-portfolio-5-item">
                <img src="/builder/img/zigrow-portfolio-images/26.webp" alt="Office 4" />
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="zigrow-portfolio-5-wrapper">
              <div class="zigrow-portfolio-5-item">
                <img src="/builder/img/zigrow-portfolio-images/27.webp" alt="Office 5" />
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="zigrow-portfolio-5-wrapper">
              <div class="zigrow-portfolio-5-item">
                <img src="/builder/img/zigrow-portfolio-images/28.webp" alt="Office 6" />
              </div>
            </div>
          </div>
        </div>
      </div>
       <style>
      .py-6{
        padding: 3rem 0;
      }
      .zigrow-portfolio-5 {
        background-color: #f9f9f9;
      }

      /* Each image card */

      .zigrow-portfolio-5 .zigrow-portfolio-5-item {
        text-align: center;
        overflow: hidden;
        max-height: 240px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        border-radius: 8px;
      }

      .zigrow-portfolio-5 .zigrow-portfolio-5-item img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .zigrow-portfolio-5 .zigrow-portfolio-5-item:hover img {
        transform: scale(1.05);
      }
    </style>
    </section>`,
});


Vvveb.Blocks.add("bootstrap4/zigrow-portfolio-7", {
  name: "Portfolio-7",
  category: "portfolio",
  image:
    "https://i.postimg.cc/XNTMnwWV/Screenshot-2026-07-21-173402.png",
  html: `
<section
  id="zigrow-portfolio-7"
  class="zigrow-portfolio-7"
  data-section="zigrow-portfolio-7"
>
  <div class="container">
    <div class="zigrow-portfolio-7-grid">
      <div class="zigrow-portfolio-7-intro">
        <h2 class="no-theme-size zigrow-portfolio-7-title">
          <span>some of our</span>
          <span>recent work</span>
        </h2>

        <p class="zigrow-portfolio-7-description">
          Thoughtful ideas, purposeful design, and practical solutions created
          to support meaningful business growth.
        </p>

        <div class="zigrow-portfolio-7-button-wrap">
          <a
            href="#portfolio"
            class="zigrow-portfolio-7-button"
            data-btn="portfolio"
          >
            See all work
          </a>
        </div>
      </div>

      <div
        class="zigrow-portfolio-7-item zigrow-portfolio-7-item-one "
      >
        <div
          class="zigrow-portfolio-7-card"
      
        >
          <a
            href="#"
            class="zigrow-portfolio-7-card-link"
          >
            <div
              class="zigrow-portfolio-7-image zigrow-portfolio-7-image-one zigrow-portfolio-7-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                alt="Modern product design project"
              />
            </div>

            <div class="zigrow-portfolio-7-card-content">
              <h3 class="zigrow-portfolio-7-card-title">Reykjavik</h3>
              <p class="zigrow-portfolio-7-category">Industrial UI</p>
            </div>
          </a>
        </div>
      </div>

      <div
        class="zigrow-portfolio-7-item zigrow-portfolio-7-item-two "
      >
        <div
          class="zigrow-portfolio-7-card"
      
        >
          <a
            href="#"
            class="zigrow-portfolio-7-card-link"
          >
            <div
              class="zigrow-portfolio-7-image zigrow-portfolio-7-image-two zigrow-portfolio-7-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                alt="Mobile application design project"
              />
            </div>

            <div class="zigrow-portfolio-7-card-content">
              <h3 class="zigrow-portfolio-7-card-title">Kla</h3>
              <p class="zigrow-portfolio-7-category">
                Web, UI, Digital
              </p>
            </div>
          </a>
        </div>
      </div>

      <div
        class="zigrow-portfolio-7-item zigrow-portfolio-7-item-three "
      >
        <div
          class="zigrow-portfolio-7-card"
      
        >
          <a
            href="#"
            class="zigrow-portfolio-7-card-link"
          >
            <div
              class="zigrow-portfolio-7-image zigrow-portfolio-7-image-three zigrow-portfolio-7-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                alt="Colorful furniture product project"
              />
            </div>

            <div class="zigrow-portfolio-7-card-content">
              <h3 class="zigrow-portfolio-7-card-title">Color Flow</h3>
              <p class="zigrow-portfolio-7-category">Product</p>
            </div>
          </a>
        </div>
      </div>

      <div
        class="zigrow-portfolio-7-item zigrow-portfolio-7-item-four "
      >
        <div
          class="zigrow-portfolio-7-card"
      
        >
          <a
            href="#"
            class="zigrow-portfolio-7-card-link"
          >
            <div
              class="zigrow-portfolio-7-image zigrow-portfolio-7-image-four zigrow-portfolio-7-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                alt="Wearable product development project"
              />
            </div>

            <div class="zigrow-portfolio-7-card-content">
              <h3 class="zigrow-portfolio-7-card-title">Form Carry</h3>
              <p class="zigrow-portfolio-7-category">
                Product Design
              </p>
            </div>
          </a>
        </div>
      </div>

      <div
        class="zigrow-portfolio-7-item zigrow-portfolio-7-item-five "
      >
        <div
          class="zigrow-portfolio-7-card"
      
        >
          <a
            href="#"
            class="zigrow-portfolio-7-card-link"
          >
            <div
              class="zigrow-portfolio-7-image zigrow-portfolio-7-image-five zigrow-portfolio-7-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                alt="Minimal home product branding project"
              />
            </div>

            <div class="zigrow-portfolio-7-card-content">
              <h3 class="zigrow-portfolio-7-card-title">The LOFE</h3>
              <p class="zigrow-portfolio-7-category">Branding</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-portfolio-7 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 7rem) 0;
      background: #f1f1f1;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-areas:
        "intro item-one item-two"
        "item-three item-four item-five";
      column-gap: clamp(3rem, 8vw, 8rem);
      row-gap: clamp(3rem, 7vw, 6rem);
      align-items: start;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-intro {
      grid-area: intro;
      max-width: 19rem;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-title {
      margin: 0;
      color: #111111;
      font-size: clamp(3rem, 5.5vw, 5.4rem);
      font-weight: 400;
      line-height: 0.95;
      letter-spacing: -0.055em;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-title span {
      display: block;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-description {
      max-width: 18rem;
      margin: clamp(1.7rem, 3vw, 2.7rem) 0 0;
      color: var(--secondary-colors, #555555);
      font-size: clamp(0.82rem, 1vw, 0.92rem);
      line-height: 1.6;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-button-wrap {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: clamp(1.8rem, 3vw, 2.6rem);
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: auto;
      max-width: max-content;
      min-height: 3rem;
      padding: 0.8rem 1.5rem;
      border: 1px solid #ffffff;
      border-radius: 999px;
      background: #ffffff;
      color: #171717;
      font-size: 0.78rem;
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      transition:
        transform 0.25s ease,
        background 0.25s ease,
        color 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-button:hover {
      transform: translateY(-0.2rem);
      background: var(--primary-colors, #171717);
      color: #ffffff;
      box-shadow: 0 0.8rem 1.8rem rgba(17, 17, 17, 0.13);
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-item {
      min-width: 0;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-item-one {
      grid-area: item-one;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-item-two {
      grid-area: item-two;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-item-three {
      grid-area: item-three;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-item-four {
      grid-area: item-four;
      margin-top: clamp(2rem, 4vw, 3.5rem);
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-item-five {
      grid-area: item-five;
      margin-top: clamp(2rem, 4vw, 3.5rem);
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-card {
      width: 100%;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-card-link {
      display: block;
      color: inherit;
      text-decoration: none;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-image {
      position: relative;
      width: 100%;
      overflow: hidden;
      background: #ffffff;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-media-center {
      text-align: center;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-image-one {
      aspect-ratio: 1.16 / 1;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-image-two {
      aspect-ratio: 1.62 / 0.94;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-image-three {
      aspect-ratio: 1.5 / 1;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-image-four {
      aspect-ratio: 0.8 / 1;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-image-five {
      aspect-ratio: 1.3 / 1;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-image img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      transition:
        transform 0.5s ease,
        filter 0.5s ease;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-card:hover img {
      transform: scale(1.035);
      filter: saturate(1.06);
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-card-content {
      padding-top: 1.1rem;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-card-title {
      margin: 0;
      color: #202020;
      font-size: clamp(1rem, 1.4vw, 1.2rem);
      font-weight: 400;
      line-height: 1.3;
    }

    .zigrow-portfolio-7 .zigrow-portfolio-7-category {
      margin: 0.65rem 0 0;
      color: #252525;
      font-size: 0.58rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.28em;
      text-transform: uppercase;
    }

    @media (max-width: 1199px) {
      .zigrow-portfolio-7 .zigrow-portfolio-7-grid {
        column-gap: 4rem;
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-title {
        font-size: clamp(3rem, 5.2vw, 4.5rem);
      }
    }

    @media (max-width: 991px) {
      .zigrow-portfolio-7 .zigrow-portfolio-7-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-areas:
          "intro intro"
          "item-one item-two"
          "item-three item-four"
          "item-five item-five";
        column-gap: 2rem;
        row-gap: 3rem;
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-intro {
        max-width: 40rem;
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-description {
        max-width: 32rem;
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-item-four,
      .zigrow-portfolio-7 .zigrow-portfolio-7-item-five {
        margin-top: 0;
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-item-five {
        width: calc(50% - 1rem);
      }
    }

    @media (max-width: 767px) {
      .zigrow-portfolio-7 {
        padding: 3rem 0;
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-grid {
        grid-template-columns: 1fr;
        grid-template-areas:
          "intro"
          "item-one"
          "item-two"
          "item-three"
          "item-four"
          "item-five";
        row-gap: 2.5rem;
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-title {
        font-size: clamp(3rem, 13vw, 4.5rem);
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-item-five {
        width: 100%;
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-image-one,
      .zigrow-portfolio-7 .zigrow-portfolio-7-image-two,
      .zigrow-portfolio-7 .zigrow-portfolio-7-image-three,
      .zigrow-portfolio-7 .zigrow-portfolio-7-image-five {
        aspect-ratio: 1.45 / 1;
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-image-four {
        aspect-ratio: 1 / 1;
      }
    }

    @media (max-width: 479px) {
      .zigrow-portfolio-7 .zigrow-portfolio-7-title {
        font-size: clamp(2.8rem, 14vw, 3.8rem);
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-button {
        width: 100%;
        max-width: 12rem;
      }

      .zigrow-portfolio-7 .zigrow-portfolio-7-image-one,
      .zigrow-portfolio-7 .zigrow-portfolio-7-image-two,
      .zigrow-portfolio-7 .zigrow-portfolio-7-image-three,
      .zigrow-portfolio-7 .zigrow-portfolio-7-image-four,
      .zigrow-portfolio-7 .zigrow-portfolio-7-image-five {
        aspect-ratio: 1.1 / 1;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-portfolio-7 .zigrow-portfolio-7-button-wrap {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-portfolio-8", {
  name: "Portfolio-8",
  category: "portfolio",
  image:
    "https://i.postimg.cc/9X453L6V/Screenshot-2026-07-21-173421.png",

  html: `
<section
  id="zigrow-portfolio-8"
  data-section="zigrow-portfolio-8"
  class="zigrow-portfolio-8"
>
  <div class="zigrow-portfolio-8-container">
    <div
      class="zigrow-portfolio-8-showcase"
  
    >
      <div class="zigrow-portfolio-8-intro">
        <p class="zigrow-portfolio-8-eyebrow">
          CREATIVE WORK FOR MODERN BUSINESSES
        </p>

        <div class="zigrow-portfolio-8-brand">
          <h2 class="no-theme-size zigrow-portfolio-8-title">
            Ideas that make businesses memorable
          </h2>

          <p class="zigrow-portfolio-8-description">
            Explore a selection of creative projects designed to communicate
            clearly, connect with customers, and build a stronger brand.
          </p>

          <div class="zigrow-portfolio-8-action">
            <a
              href="#contact"
              class="zigrow-portfolio-8-button"
              data-btn="portfolio"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      <div class="zigrow-portfolio-8-gallery">
        <div class="zigrow-portfolio-8-column zigrow-portfolio-8-column-left">
          <div class="zigrow-portfolio-8-item zigrow-portfolio-8-item-left-top ">
            <div
              class="zigrow-portfolio-8-card"
          
            >
              <div class="zigrow-portfolio-8-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85"
                  alt="Creative typography artwork"
                  class="zigrow-portfolio-8-image"
                />
              </div>

              <div class="zigrow-portfolio-8-overlay">
                <h3>Brand Expression</h3>
                <p>Visual identity and creative direction</p>
              </div>
            </div>
          </div>

          <div class="zigrow-portfolio-8-item zigrow-portfolio-8-item-left-bottom ">
            <div
              class="zigrow-portfolio-8-card"
          
            >
              <div class="zigrow-portfolio-8-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=85"
                  alt="Colourful creative artwork"
                  class="zigrow-portfolio-8-image"
                />
              </div>

              <div class="zigrow-portfolio-8-overlay">
                <h3>Campaign Design</h3>
                <p>Distinctive visuals for growing brands</p>
              </div>
            </div>
          </div>
        </div>

        <div class="zigrow-portfolio-8-column zigrow-portfolio-8-column-center">
          <div class="zigrow-portfolio-8-item zigrow-portfolio-8-item-featured ">
            <div
              class="zigrow-portfolio-8-card"
          
            >
              <div class="zigrow-portfolio-8-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1100&q=85"
                  alt="Bold creative branding project"
                  class="zigrow-portfolio-8-image"
                />
              </div>

              <div class="zigrow-portfolio-8-overlay">
                <h3>Signature Identity</h3>
                <p>A complete visual system for a modern business</p>
              </div>
            </div>
          </div>
        </div>

        <div class="zigrow-portfolio-8-column zigrow-portfolio-8-column-right">
          <div class="zigrow-portfolio-8-item zigrow-portfolio-8-item-right-top ">
            <div
              class="zigrow-portfolio-8-card"
          
            >
              <div class="zigrow-portfolio-8-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85"
                  alt="Vibrant abstract design project"
                  class="zigrow-portfolio-8-image"
                />
              </div>

              <div class="zigrow-portfolio-8-overlay">
                <h3>Creative Storytelling</h3>
                <p>Expressive design with a clear purpose</p>
              </div>
            </div>
          </div>

          <div class="zigrow-portfolio-8-item zigrow-portfolio-8-item-right-bottom ">
            <div
              class="zigrow-portfolio-8-card"
          
            >
              <div class="zigrow-portfolio-8-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=85"
                  alt="Modern graphic artwork"
                  class="zigrow-portfolio-8-image"
                />
              </div>

              <div class="zigrow-portfolio-8-overlay">
                <h3>Digital Experience</h3>
                <p>Engaging visuals built for online audiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-portfolio-8 {
      position: relative;
      width: 100%;
      min-height: 720px;
      padding: 58px 0;
      overflow: hidden;
      background: linear-gradient(
        90deg,
        #f4f4f4 0%,
        #f4f4f4 50%,
        var(--primary-colors, #f2ec00) 50%,
        var(--primary-colors, #f2ec00) 100%
      );
    }


    .zigrow-portfolio-8 .zigrow-portfolio-8-container {
      position: relative;
      z-index: 2;
      width: min(100% - 64px, 1220px);
      margin: 0 auto;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-showcase {
      overflow: hidden;
      background: #ffffff;
      box-shadow: 0 24px 60px rgba(18, 18, 18, 0.15);
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-intro {
      display: grid;
      grid-template-columns: minmax(170px, 0.7fr) minmax(420px, 1.5fr);
      gap: 50px;
      align-items: center;
      min-height: 215px;
      padding: 38px 72px;
      background: #ffffff;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-eyebrow {
      margin: 0;
      color: var(--secondary-colors, #5d5d5d);
      font-size: 0.66rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      line-height: 1.5;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-brand {
      display: grid;
      justify-items: end;
      text-align: end;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-title {
      max-width: 590px;
      margin: 0;
      color: #111111;
      font-size: clamp(2rem, 3.8vw, 3.4rem);
      font-weight: 700;
      letter-spacing: -0.045em;
      line-height: 1.02;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-description {
      max-width: 570px;
      margin: 15px 0 0;
      color: var(--secondary-colors, #686868);
      font-size: 0.9rem;
      line-height: 1.55;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-action {
      display: grid;
      justify-content: center;
      margin-top: 18px;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-button {
      display: grid;
      min-height: 38px;
      padding: 10px 20px;
      place-items: center;
      border: 1px solid #111111;
      border-radius: 999px;
      background: #111111;
      color: #ffffff;
      font-size: 0.72rem;
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      transition:
        background-color 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-button:hover {
      transform: translateY(-2px);
      background: transparent;
      color: #111111;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-gallery {
      display: grid;
      grid-template-columns: 1fr 1.38fr 1fr;
      width: 100%;
      height: clamp(360px, 36vw, 460px);
      max-height: 460px;
      min-height: 0;
      overflow: hidden;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-column {
      display: grid;
      min-width: 0;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-column-left,
    .zigrow-portfolio-8 .zigrow-portfolio-8-column-right {
      grid-template-rows: repeat(2, minmax(0, 1fr));
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-item {
      min-width: 0;
      min-height: 0;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-card {
      position: relative;
      width: 100%;
      height: 100%;
      max-height: 230px;
      min-height: 0;
      overflow: hidden;
      background: #dadada;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-item-featured
      .zigrow-portfolio-8-card {
      max-height: 460px;
      min-height: 0;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-image-wrap {
      width: 100%;
      height: 100%;
      overflow: hidden;
      text-align: center;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition:
        filter 0.4s ease,
        transform 0.45s ease;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-overlay {
      position: absolute;
      right: 18px;
      bottom: 18px;
      left: 18px;
      z-index: 2;
      padding: 16px;
      background: rgba(255, 255, 255, 0.88);
      opacity: 0;
      transform: translateY(14px);
      backdrop-filter: blur(9px);
      transition:
        opacity 0.3s ease,
        transform 0.3s ease;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-overlay h3 {
      margin: 0;
      color: #111111;
      font-size: 0.95rem;
      font-weight: 700;
      line-height: 1.3;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-overlay p {
      margin: 5px 0 0;
      color: var(--secondary-colors, #666666);
      font-size: 0.7rem;
      line-height: 1.4;
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-card:hover
      .zigrow-portfolio-8-image {
      filter: brightness(0.82);
      transform: scale(1.045);
    }

    .zigrow-portfolio-8 .zigrow-portfolio-8-card:hover
      .zigrow-portfolio-8-overlay {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 991px) {
      .zigrow-portfolio-8 {
        min-height: auto;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-container {
        width: min(100% - 40px, 1220px);
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-intro {
        grid-template-columns: 1fr;
        gap: 24px;
        padding: 38px 46px;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-eyebrow {
        text-align: center;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-gallery {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        height: auto;
        max-height: none;
        overflow: visible;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-column-center {
        grid-column: 1 / -1;
        grid-row: 1;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-card {
        height: 220px;
        max-height: 220px;
        min-height: 0;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-item-featured
        .zigrow-portfolio-8-card {
        height: 380px;
        max-height: 380px;
        min-height: 0;
      }
    }

    @media (max-width: 767px) {
      .zigrow-portfolio-8 {
        padding: 40px 0;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-container {
        width: min(100% - 28px, 1220px);
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-intro {
        padding: 34px 24px;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-gallery {
        grid-template-columns: 1fr;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-column-center {
        grid-column: auto;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-column-left,
      .zigrow-portfolio-8 .zigrow-portfolio-8-column-right {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: auto;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-card {
        height: 210px;
        max-height: 210px;
        min-height: 0;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-item-featured
        .zigrow-portfolio-8-card {
        height: 330px;
        max-height: 330px;
        min-height: 0;
      }
    }

    @media (max-width: 520px) {
      .zigrow-portfolio-8 {
        padding: 24px 0;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-container {
        width: min(100% - 20px, 1220px);
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-title {
        font-size: 2.15rem;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-column-left,
      .zigrow-portfolio-8 .zigrow-portfolio-8-column-right {
        grid-template-columns: 1fr;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-card,
      .zigrow-portfolio-8 .zigrow-portfolio-8-item-featured
        .zigrow-portfolio-8-card {
        height: 260px;
        max-height: 260px;
        min-height: 0;
      }

      .zigrow-portfolio-8 .zigrow-portfolio-8-overlay {
        right: 12px;
        bottom: 12px;
        left: 12px;
        opacity: 1;
        transform: none;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-portfolio-8 .zigrow-portfolio-8-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-portfolio-9", {
  name: "Portfolio-9",
  category: "portfolio",
  image:
    "https://i.postimg.cc/Kc3VpRTx/Screenshot-2026-07-21-173412.png",
  html: `
<section
  id="zigrow-portfolio-9"
  class="zigrow-portfolio-9"
  data-section="zigrow-portfolio-9"
>
  <div class="container">
    <div class="zigrow-portfolio-9-heading">
      <p class="zigrow-portfolio-9-eyebrow">Selected Work</p>

      <h2 class="no-theme-size zigrow-portfolio-9-title">
        Explore projects created with purpose
      </h2>

      <p class="zigrow-portfolio-9-description">
        Discover a collection of thoughtful projects shaped around clear ideas,
        practical goals, and memorable customer experiences.
      </p>
    </div>

    <div class="zigrow-portfolio-9-gallery-wrap">
    

      <div class="zigrow-portfolio-9-track" data-portfolio-track>
        <div
          class="zigrow-portfolio-9-card-wrap "
          data-portfolio-card
          role="button"
          tabindex="0"
          onclick="if (!event.target.closest('.zigrow-portfolio-9-button')) { var section = this.closest('.zigrow-portfolio-9'); section.querySelectorAll('[data-portfolio-card]').forEach(function (card) { card.classList.remove('is-active'); card.setAttribute('aria-expanded', 'false'); }); this.classList.add('is-active'); this.setAttribute('aria-expanded', 'true'); this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }"
          onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.click(); }"
          aria-expanded="false"
        >
          <div
            class="zigrow-portfolio-9-card"
        
          >
            <div
              class="zigrow-portfolio-9-image zigrow-portfolio-9-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                alt="People focused brand campaign"
              />
            </div>

            <span class="zigrow-portfolio-9-overlay"></span>

            <p class="zigrow-portfolio-9-collapsed-title">People</p>

            <div class="zigrow-portfolio-9-card-content">
              <p class="zigrow-portfolio-9-category">Brand Campaign</p>

              <h3 class="zigrow-portfolio-9-card-title">
                Meaningful Connections
              </h3>

              <p class="zigrow-portfolio-9-card-description">
                A people-focused campaign created to build trust and strengthen
                lasting customer relationships.
              </p>

              <div class="zigrow-portfolio-9-button-wrap">
                <a
                  href="#"
                  class="zigrow-portfolio-9-button"
                  data-btn="portfolio"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="zigrow-portfolio-9-card-wrap "
          data-portfolio-card
          role="button"
          tabindex="0"
          onclick="if (!event.target.closest('.zigrow-portfolio-9-button')) { var section = this.closest('.zigrow-portfolio-9'); section.querySelectorAll('[data-portfolio-card]').forEach(function (card) { card.classList.remove('is-active'); card.setAttribute('aria-expanded', 'false'); }); this.classList.add('is-active'); this.setAttribute('aria-expanded', 'true'); this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }"
          onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.click(); }"
          aria-expanded="false"
        >
          <div
            class="zigrow-portfolio-9-card"
        
          >
            <div
              class="zigrow-portfolio-9-image zigrow-portfolio-9-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                alt="Nature inspired business project"
              />
            </div>

            <span class="zigrow-portfolio-9-overlay"></span>

            <p class="zigrow-portfolio-9-collapsed-title">Nature</p>

            <div class="zigrow-portfolio-9-card-content">
              <p class="zigrow-portfolio-9-category">Environmental Design</p>

              <h3 class="zigrow-portfolio-9-card-title">
                Natural Perspective
              </h3>

              <p class="zigrow-portfolio-9-card-description">
                A calm visual direction inspired by nature, balance, and
                responsible long-term business growth.
              </p>

              <div class="zigrow-portfolio-9-button-wrap">
                <a
                  href="#"
                  class="zigrow-portfolio-9-button"
                  data-btn="portfolio"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="zigrow-portfolio-9-card-wrap "
          data-portfolio-card
          role="button"
          tabindex="0"
          onclick="if (!event.target.closest('.zigrow-portfolio-9-button')) { var section = this.closest('.zigrow-portfolio-9'); section.querySelectorAll('[data-portfolio-card]').forEach(function (card) { card.classList.remove('is-active'); card.setAttribute('aria-expanded', 'false'); }); this.classList.add('is-active'); this.setAttribute('aria-expanded', 'true'); this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }"
          onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.click(); }"
          aria-expanded="false"
        >
          <div
            class="zigrow-portfolio-9-card"
        
          >
            <div
              class="zigrow-portfolio-9-image zigrow-portfolio-9-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                alt="Modern mobility product project"
              />
            </div>

            <span class="zigrow-portfolio-9-overlay"></span>

            <p class="zigrow-portfolio-9-collapsed-title">Mobility</p>

            <div class="zigrow-portfolio-9-card-content">
              <p class="zigrow-portfolio-9-category">Product Experience</p>

              <h3 class="zigrow-portfolio-9-card-title">
                Smarter Movement
              </h3>

              <p class="zigrow-portfolio-9-card-description">
                A modern product experience designed to make movement easier,
                clearer, and more dependable.
              </p>

              <div class="zigrow-portfolio-9-button-wrap">
                <a
                  href="#"
                  class="zigrow-portfolio-9-button"
                  data-btn="portfolio"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="zigrow-portfolio-9-card-wrap "
          data-portfolio-card
          role="button"
          tabindex="0"
          onclick="if (!event.target.closest('.zigrow-portfolio-9-button')) { var section = this.closest('.zigrow-portfolio-9'); section.querySelectorAll('[data-portfolio-card]').forEach(function (card) { card.classList.remove('is-active'); card.setAttribute('aria-expanded', 'false'); }); this.classList.add('is-active'); this.setAttribute('aria-expanded', 'true'); this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }"
          onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.click(); }"
          aria-expanded="false"
        >
          <div
            class="zigrow-portfolio-9-card"
        
          >
            <div
              class="zigrow-portfolio-9-image zigrow-portfolio-9-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                alt="Wildlife awareness project"
              />
            </div>

            <span class="zigrow-portfolio-9-overlay"></span>

            <p class="zigrow-portfolio-9-collapsed-title">Wildlife</p>

            <div class="zigrow-portfolio-9-card-content">
              <p class="zigrow-portfolio-9-category">Awareness Campaign</p>

              <h3 class="zigrow-portfolio-9-card-title">
                Protecting What Matters
              </h3>

              <p class="zigrow-portfolio-9-card-description">
                A bold awareness campaign created to inspire attention,
                responsibility, and positive community action.
              </p>

              <div class="zigrow-portfolio-9-button-wrap">
                <a
                  href="#"
                  class="zigrow-portfolio-9-button"
                  data-btn="portfolio"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="zigrow-portfolio-9-card-wrap  is-active"
          data-portfolio-card
          role="button"
          tabindex="0"
          onclick="if (!event.target.closest('.zigrow-portfolio-9-button')) { var section = this.closest('.zigrow-portfolio-9'); section.querySelectorAll('[data-portfolio-card]').forEach(function (card) { card.classList.remove('is-active'); card.setAttribute('aria-expanded', 'false'); }); this.classList.add('is-active'); this.setAttribute('aria-expanded', 'true'); this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }"
          onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.click(); }"
          aria-expanded="true"
        >
          <div
            class="zigrow-portfolio-9-card"
        
          >
            <div
              class="zigrow-portfolio-9-image zigrow-portfolio-9-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&amp;fit=crop&amp;w=1400&amp;q=85"
                alt="Modern architecture and sustainable business project"
              />
            </div>

            <span class="zigrow-portfolio-9-overlay"></span>

            <p class="zigrow-portfolio-9-collapsed-title">Architecture</p>

            <div class="zigrow-portfolio-9-card-content">
              <p class="zigrow-portfolio-9-category">
                Architecture and Planning
              </p>

              <h3 class="zigrow-portfolio-9-card-title">
                Architecture
              </h3>

              <p class="zigrow-portfolio-9-card-description">
                Modern spaces designed around the needs of people, businesses,
                and growing communities.
              </p>

              <div class="zigrow-portfolio-9-button-wrap">
                <a
                  href="#"
                  class="zigrow-portfolio-9-button"
                  data-btn="portfolio"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="zigrow-portfolio-9-card-wrap "
          data-portfolio-card
          role="button"
          tabindex="0"
          onclick="if (!event.target.closest('.zigrow-portfolio-9-button')) { var section = this.closest('.zigrow-portfolio-9'); section.querySelectorAll('[data-portfolio-card]').forEach(function (card) { card.classList.remove('is-active'); card.setAttribute('aria-expanded', 'false'); }); this.classList.add('is-active'); this.setAttribute('aria-expanded', 'true'); this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }"
          onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.click(); }"
          aria-expanded="false"
        >
          <div
            class="zigrow-portfolio-9-card"
        
          >
            <div
              class="zigrow-portfolio-9-image zigrow-portfolio-9-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                alt="Health and wellness service project"
              />
            </div>

            <span class="zigrow-portfolio-9-overlay"></span>

            <p class="zigrow-portfolio-9-collapsed-title">Wellness</p>

            <div class="zigrow-portfolio-9-card-content">
              <p class="zigrow-portfolio-9-category">Health Experience</p>

              <h3 class="zigrow-portfolio-9-card-title">
                Everyday Wellbeing
              </h3>

              <p class="zigrow-portfolio-9-card-description">
                A welcoming experience designed to make healthier choices feel
                simple, achievable, and motivating.
              </p>

              <div class="zigrow-portfolio-9-button-wrap">
                <a
                  href="#"
                  class="zigrow-portfolio-9-button"
                  data-btn="portfolio"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="zigrow-portfolio-9-card-wrap "
          data-portfolio-card
          role="button"
          tabindex="0"
          onclick="if (!event.target.closest('.zigrow-portfolio-9-button')) { var section = this.closest('.zigrow-portfolio-9'); section.querySelectorAll('[data-portfolio-card]').forEach(function (card) { card.classList.remove('is-active'); card.setAttribute('aria-expanded', 'false'); }); this.classList.add('is-active'); this.setAttribute('aria-expanded', 'true'); this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }"
          onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.click(); }"
          aria-expanded="false"
        >
          <div
            class="zigrow-portfolio-9-card"
        
          >
            <div
              class="zigrow-portfolio-9-image zigrow-portfolio-9-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                alt="Fashion and retail branding project"
              />
            </div>

            <span class="zigrow-portfolio-9-overlay"></span>

            <p class="zigrow-portfolio-9-collapsed-title">Fashion</p>

            <div class="zigrow-portfolio-9-card-content">
              <p class="zigrow-portfolio-9-category">Retail Branding</p>

              <h3 class="zigrow-portfolio-9-card-title">
                Modern Expression
              </h3>

              <p class="zigrow-portfolio-9-card-description">
                A distinctive retail identity built around confidence,
                creativity, and a memorable customer journey.
              </p>

              <div class="zigrow-portfolio-9-button-wrap">
                <a
                  href="#"
                  class="zigrow-portfolio-9-button"
                  data-btn="portfolio"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  </div>

  <style>
    .zigrow-portfolio-9 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 7rem) 0;
      background: #ffffff;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-heading {
      max-width: 760px;
      margin-bottom: clamp(2.5rem, 5vw, 4rem);
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-eyebrow {
      margin: 0 0 0.7rem;
      color: var(--primary-colors, #83c341);
      font-size: 0.78rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-title {
      max-width: 680px;
      margin: 0;
      color: #16191c;
      font-size: clamp(2.4rem, 4.6vw, 4.4rem);
      font-weight: 500;
      line-height: 1.08;
      letter-spacing: -0.045em;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-description {
      max-width: 620px;
      margin: 1rem 0 0;
      color: var(--secondary-colors, #5f666c);
      font-size: clamp(0.95rem, 1.3vw, 1.08rem);
      line-height: 1.65;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-gallery-wrap {
      position: relative;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-track {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: 0.55rem;
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 0.5rem 0;
      scroll-behavior: smooth;
      scrollbar-width: none;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-track::-webkit-scrollbar {
      display: none;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap {
      width: clamp(4.4rem, 6.7vw, 6.4rem);
      height: clamp(25rem, 38vw, 34rem);
      transition:
        width 0.55s cubic-bezier(0.22, 1, 0.36, 1),
        flex-basis 0.55s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.35s ease;
      cursor: pointer;
      outline: none;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap.is-active {
      width: clamp(27rem, 42vw, 43rem);
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap:focus-visible {
      border-radius: 1.25rem;
      box-shadow: 0 0 0 0.2rem
        color-mix(
          in srgb,
          var(--primary-colors, #83c341) 35%,
          transparent
        );
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-card {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 1.25rem;
      background: var(--territory-colors, #e8ece8);
      box-shadow: 0 1rem 2.5rem rgba(22, 27, 30, 0.11);
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-image {
      width: 100%;
      height: 100%;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-media-center {
      text-align: center;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-image img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      transition:
        transform 0.65s ease,
        filter 0.45s ease;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap:hover img,
    .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap.is-active img {
      transform: scale(1.035);
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap:not(.is-active) img {
      filter: saturate(0.82) brightness(0.82);
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(11, 18, 22, 0.02) 20%,
        rgba(11, 18, 22, 0.15) 58%,
        rgba(11, 18, 22, 0.82) 100%
      );
      pointer-events: none;
    }

    .zigrow-portfolio-9
      .zigrow-portfolio-9-card-wrap:not(.is-active)
      .zigrow-portfolio-9-overlay {
      background: rgba(12, 18, 21, 0.18);
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-collapsed-title {
      position: absolute;
      bottom: 1.2rem;
      left: 50%;
      z-index: 3;
      margin: 0;
      color: #ffffff;
      font-size: clamp(0.85rem, 1.1vw, 1rem);
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.04em;
      writing-mode: vertical-rl;
      transform: translateX(-50%) rotate(180deg);
      transition:
        left 0.45s cubic-bezier(0.22, 1, 0.36, 1),
        opacity 0.25s ease,
        transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .zigrow-portfolio-9
      .zigrow-portfolio-9-card-wrap.is-active
      .zigrow-portfolio-9-collapsed-title {
      left: calc(100% - 1.65rem);
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) rotate(180deg);
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-card-content {
      position: absolute;
      right: clamp(4.25rem, 6vw, 5.25rem);
      bottom: clamp(1.25rem, 3vw, 2.5rem);
      left: clamp(1.25rem, 3vw, 2.5rem);
      z-index: 3;
      max-width: 31rem;
      opacity: 0;
      visibility: hidden;
      transform: translateY(1.5rem);
      transition:
        opacity 0.35s ease 0.15s,
        visibility 0.35s ease 0.15s,
        transform 0.45s ease 0.15s;
    }

    .zigrow-portfolio-9
      .zigrow-portfolio-9-card-wrap.is-active
      .zigrow-portfolio-9-card-content {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-category {
      margin: 0 0 0.55rem;
      color: rgba(255, 255, 255, 0.78);
      font-size: 0.68rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-card-title {
      margin: 0;
      color: #ffffff;
      font-size: clamp(2rem, 3.5vw, 3.5rem);
      font-weight: 500;
      line-height: 1.05;
      letter-spacing: -0.04em;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-card-description {
      max-width: 29rem;
      margin: 0.7rem 0 0;
      color: rgba(255, 255, 255, 0.83);
      font-size: clamp(0.82rem, 1.1vw, 0.96rem);
      line-height: 1.55;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-button-wrap {
      display: inline-grid;
      margin-top: 1.15rem;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-button {
      display: inline-grid;
      place-items: center;
      width: max-content;
      min-height: 2.7rem;
      padding: 0.75rem 1.2rem;
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 0.45rem;
      background: rgba(22, 29, 32, 0.28);
      color: #ffffff;
      font-size: 0.72rem;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      backdrop-filter: blur(8px);
      transition:
        background 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-button:hover {
      transform: translateY(-0.15rem);
      background: var(--primary-colors, #83c341);
      color: #ffffff;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-control {
      position: absolute;
      top: 50%;
      z-index: 5;
      display: grid;
      place-items: center;
      width: 2.7rem;
      height: 2.7rem;
      padding: 0;
      border: 1px solid rgba(255, 255, 255, 0.35);
      border-radius: 50%;
      background: rgba(28, 34, 37, 0.54);
      color: #ffffff;
      cursor: pointer;
      backdrop-filter: blur(8px);
      transform: translateY(-50%);
      transition:
        background 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-control:hover {
      background: var(--primary-colors, #83c341);
      transform: translateY(-50%) scale(1.06);
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-control-prev {
      left: -1.1rem;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-control-next {
      right: -1.1rem;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-control-icon {
      display: grid;
      place-items: center;
      width: 1.2rem;
      height: 1.2rem;
    }

    .zigrow-portfolio-9 .zigrow-portfolio-9-control-icon i {
      font-size: 1rem;
      line-height: 1;
    }

    @media (max-width: 1199px) {
      .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap {
        width: 5rem;
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap.is-active {
        width: min(46vw, 35rem);
      }
    }

    @media (max-width: 991px) {
      .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap {
        width: 4.8rem;
        height: 30rem;
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap.is-active {
        width: min(70vw, 34rem);
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-control-prev {
        left: 0.6rem;
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-control-next {
        right: 0.6rem;
      }
    }

    @media (max-width: 767px) {
      .zigrow-portfolio-9 {
        padding: 3rem 0;
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-heading {
        margin-bottom: 2.5rem;
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap {
        width: 4.4rem;
        height: 28rem;
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap.is-active {
        width: min(78vw, 29rem);
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-card-content {
        right: 3.8rem;
        bottom: 1.2rem;
        left: 1.2rem;
      }

      .zigrow-portfolio-9
        .zigrow-portfolio-9-card-wrap.is-active
        .zigrow-portfolio-9-collapsed-title {
        left: calc(100% - 1.45rem);
      }
    }

    @media (max-width: 479px) {
      .zigrow-portfolio-9 .zigrow-portfolio-9-title {
        font-size: clamp(2.2rem, 11vw, 3.2rem);
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap {
        width: 4rem;
        height: 25rem;
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-card-wrap.is-active {
        width: 82vw;
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-card-title {
        font-size: 2.2rem;
      }

      .zigrow-portfolio-9 .zigrow-portfolio-9-control {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-portfolio-9 .zigrow-portfolio-9-button-wrap {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>

  <script>
    (function () {
      function initZigrowPortfolio9() {
        var section = document.getElementById("zigrow-portfolio-9");

        if (!section || section.getAttribute("data-portfolio-ready") === "true") {
          return;
        }

        section.setAttribute("data-portfolio-ready", "true");

        var track = section.querySelector("[data-portfolio-track]");
        var previousButton = section.querySelector("[data-portfolio-prev]");
        var nextButton = section.querySelector("[data-portfolio-next]");

        if (!track) {
          return;
        }

        function getCards() {
          return Array.prototype.slice.call(
            track.querySelectorAll("[data-portfolio-card]")
          );
        }

        function activateCard(selectedCard) {
          var cards = getCards();

          cards.forEach(function (card) {
            var isSelected = card === selectedCard;

            card.classList.toggle("is-active", isSelected);
            card.setAttribute("aria-expanded", isSelected ? "true" : "false");
          });

          selectedCard.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }

        track.addEventListener("click", function (event) {
          var buttonLink = event.target.closest(
            ".zigrow-portfolio-9-button"
          );

          if (buttonLink) {
            return;
          }

          var selectedCard = event.target.closest("[data-portfolio-card]");

          if (selectedCard && track.contains(selectedCard)) {
            activateCard(selectedCard);
          }
        });

        track.addEventListener("keydown", function (event) {
          var selectedCard = event.target.closest("[data-portfolio-card]");

          if (!selectedCard) {
            return;
          }

          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            activateCard(selectedCard);
          }
        });

        if (previousButton) {
          previousButton.addEventListener("click", function () {
            var cards = getCards();
            var currentIndex = cards.findIndex(function (card) {
              return card.classList.contains("is-active");
            });

            var previousIndex =
              currentIndex <= 0 ? cards.length - 1 : currentIndex - 1;

            activateCard(cards[previousIndex]);
          });
        }

        if (nextButton) {
          nextButton.addEventListener("click", function () {
            var cards = getCards();
            var currentIndex = cards.findIndex(function (card) {
              return card.classList.contains("is-active");
            });

            var nextIndex =
              currentIndex >= cards.length - 1 ? 0 : currentIndex + 1;

            activateCard(cards[nextIndex]);
          });
        }
      }

      if (document.readyState === "loading") {
        document.addEventListener(
          "DOMContentLoaded",
          initZigrowPortfolio9,
          { once: true }
        );
      } else {
        initZigrowPortfolio9();
      }
    })();
  </script>
</section>
`,
});

// About Section Blocks
Vvveb.Blocks.add("bootstrap4/zigrow-about-1", {
    name: "About-1",
    category: "about-us",
    image: "https://i.postimg.cc/rprcdB8v/about1.png",
    html: `    <section id="zigrow-about-1" data-section="zigrow-about-1" class=" zigrow-about-1 py-6">
      <div class="container">
        <!-- About Me Button -->
        <p class="section-top-btn zigrow-about-1-badge">About me</p>

        <!-- Heading & Paragraph -->
        <h2 class="no-theme-size zigrow-about-1-title">
          Design is not just a job for me, it’s a passion that drives me
        </h2>

        <p class="zigrow-about-1-text">
          I’m Rohit, a self-taught product designer based in Boston. Four years
          ago, during my final year of university, I co-founded a mobile
          marketplace and created its entire front-end myself, teaching me how
          products are built from scratch. I build websites, mobile-first UIs,
          emails, and internal tools — all designed around everything I’d want.
        </p>

        <!-- Image + Stats Row -->
        <div class="zigrow-about-1-layout row">
          <!-- Left: Video Thumbnail -->
          <div class="zigrow-about-1-media col-lg-8 col-12">
            <div class="zigrow-about-1-media-inner">
              <div class="zigrow-about-1-img-box">
                <img
            src="/builder/img/zigrow-about-images/1.webp"
                  alt="Video thumbnail"
                  class="about-image"
                />
              </div>
              <a href="#" class="zigrow-about-1-play-btn">
                <i class="fas fa-play-circle" data-icon="play-btn"></i>
              </a>
            </div>
          </div>

          <!-- Right: Stats -->
          <div class="zigrow-about-1-stats col-lg-4 col-12">
            <div class="zigrow-about-1-stat">
              <h5 class="zigrow-about-1-stat-number">12 startups</h5>
              <small class="zigrow-about-1-stat-label">worked with</small>
            </div>
            <div class="zigrow-about-1-stat">
              <h5 class="zigrow-about-1-stat-number">5+ years</h5>
              <small class="zigrow-about-1-stat-label">experience</small>
            </div>
            <div class="zigrow-about-1-stat">
              <h5 class="zigrow-about-1-stat-number">20+ projects</h5>
              <small class="zigrow-about-1-stat-label">completed successfully</small>
            </div>
          </div>
        </div>
      </div>
          <style>
      .zigrow-about-1 {
        background-color: #ffffff;
      }
      .py-6 {
        padding: 3rem 0rem;
      }

      /* Top badge */
      .zigrow-about-1 .zigrow-about-1-badge {
        display: inline-block;
        margin-bottom: 0.75rem;
        padding: 0.35rem 0.9rem;
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 500;
        background-color: #f8f9fa;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.08);
        color: #222;
      }

      /* Heading */
      .zigrow-about-1 .zigrow-about-1-title {
        margin: 0 0 0.75rem;
        font-weight: 600;
        line-height: 1.4;
        font-size: clamp(1.8rem, 3vw, 2.5rem); /* similar to display-6 */
        color: #20252b;
      }

      /* Intro paragraph */
      .zigrow-about-1 .zigrow-about-1-text {
        max-width: 700px;
        margin: 0 0 2.5rem;
        color: #6c757d;
        font-size: 0.98rem;
        line-height: 1.7;
      }

      /* Layout: image + stats */
      .zigrow-about-1 .zigrow-about-1-layout {
        /* display: flex;
        flex-direction: column; */
        gap: 2rem;
      }
      .zigrow-about-1 .zigrow-about-1-media-inner {
        position: relative;
        border-radius: 0.8rem;
        overflow: hidden;
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08);
      }
      .zigrow-about-1 .zigrow-about-1-media-inner .zigrow-about-1-img-box {
        text-align: center;
        border-radius: 0.4rem;
      }

      .zigrow-about-1 .zigrow-about-1-image {
        /* display: block; */
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 0.4rem;
      }

      .zigrow-about-1 .zigrow-about-1-play-btn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        color: #ffffff;
        text-decoration: none;
      }

      /* Right stats */
      .zigrow-about-1 .zigrow-about-1-stats {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1.75rem;
        padding-left: 0.75rem; /* like ps-3 on mobile */
      }

      .zigrow-about-1 .zigrow-about-1-stat-number {
        margin: 0;
        font-weight: 600;
        font-size: clamp(1.8rem, 3vw, 2.3rem); /* similar to display-6 */
        color: #20252b;
      }

      .zigrow-about-1 .zigrow-about-1-stat-label {
        display: block;
        margin-top: 0.3rem;
        font-size: 0.75rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #6c757d;
      }

      /* Media queries */
      @media (min-width: 768px) {
        .zigrow-about-1 .zigrow-about-1-layout {
          /* flex-direction: row; like align-items-center row */
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }

        .zigrow-about-1 .zigrow-about-1-stats {
          padding-left: 2.5rem; /* like ps-md-5 */
        }
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-about-2", {
    name: "About-2",
    category: "about-us",
    image: "https://i.postimg.cc/Pxbjy1vp/about2.png",
    html: `   <section  id="zigrow-about-2" data-section="zigrow-about-2" class="zigrow-about-2 py-6">
      <div class="container">
        <!-- Background grid image -->
        <div class="bg-img-box">
          <img src="/builder/img/zigrow-icon-images/our-value-bg.png"  alt="" class="grid-bg-img" />
        </div>

        <!-- Row uses Bootstrap grid; no custom flex in CSS -->
        <div class="row g-4 zigrow-about-2-wraper">
          <!-- Left Image -->
          <div class="col-12 col-lg-5">
            <div class="zigrow-about-2-left">
              <div class="doctor-img-box">
                <img
                 src="/builder/img/zigrow-about-images/2.webp"
                  alt="Dr"
                  class="doctor-image"
                />
            
<div class="star-img-box">
  <i class="fa-solid fa-star" aria-hidden="true"></i>
</div>
              </div>
            </div>
          </div>

          <!-- Right Content -->
          <div class="col-12 col-lg-7">
            <div class="zigrow-about-2-right ms-lg-4">
              <h2 class="no-theme-size main-heading">
                Meet Dr Meera, Your <br />Certified Nutritionist
              </h2>

              <p class="zigrow-about-2-text">
                With 9+ years of experience, I specialize in designing
                science-backed nutrition plans for Weight Loss, PCOS, Diabetes,
                and Lifestyle Improvement. Holding certifications from
                [Institute Name], I help individuals build sustainable, healthy
                habits that fit their lifestyle.
              </p>

          
<div class="zigrow-about-2-btn-wrap">
  <a href="#" class="primary-btn" data-btn="about-2">Learn More</a>
</div>
              <div class="arrow-img-box">
                <img
                  src="/builder/img/zigrow-icon-images/our-value svg.svg" 
                  alt="Arrow"
                  class="arrow-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
       <style>
      .py-6 {
        padding: 3rem 0;
      }

      /* Section wrapper */
      .zigrow-about-2 {
        background-color: #fff;
        position: relative;
        overflow: hidden;
      }

      /* Background grid image */
      .zigrow-about-2 .bg-img-box {
        position: absolute;
        right: 15%;
        bottom: 15%;
        text-align: center;
        width: 45%;
        /* max-width: 420px; */
        pointer-events: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        z-index: 0;
      }

      .zigrow-about-2 .grid-bg-img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
      .zigrow-about-2 .zigrow-about-2-wraper {
        align-items: center;
      }

      /* Left: doctor image block */
      .zigrow-about-2 .zigrow-about-2-left {
        text-align: center;
        position: relative;
        z-index: 1;
      }

      .zigrow-about-2 .doctor-img-box {
        text-align: center;
        max-width: 400px;
        height: auto;
        margin: 0 auto 1.5rem;
        border-radius: 50%;
        position: relative;
      }

      .zigrow-about-2 .doctor-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }

      /* Star icon overlay */
      .zigrow-about-2 .star-img-box {
        text-align: center;
        position: absolute;
        top: 15%;
        right: 8%;
        width: 55px;
        z-index: 2;
      }

     /* Replace with this */
.zigrow-about-2 .star-img-box i {
  color: var(--primary-colors, #4285f4);
  font-size: 42px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

      /* Right: text content */
      .zigrow-about-2 .zigrow-about-2-right {
        position: relative;
        text-align: center;
        max-width: 550px;
        z-index: 1;
        margin: 0 auto;
      }

      .zigrow-about-2 .zigrow-about-2-btn-wrap {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
      @media (min-width: 992px) {
        .zigrow-about-2 .zigrow-about-2-right {
          text-align: start;
          margin-left: auto;
        }
      }

      .zigrow-about-2 .main-heading {
        color: #000;
        font-size: clamp(2rem, 4vw, 3.4rem);
        line-height: 1.4;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      .zigrow-about-2 .zigrow-about-2-text {
        color: var(--secondary-colors, #555);
        font-size: 1.05rem;
        line-height: 1.7;
        margin-top: 0.75rem;
        margin-bottom: 2.2rem;
      }

      /* CTA button */
      .zigrow-about-2 .primary-btn {
        background: var(
          --primary-colors,
          linear-gradient(135deg, #4285f4, rgb(17.805, 101.89, 241.195))
        );
        color: #fff;
        border-radius: 28px;
        padding: 0.8rem 1.4rem;
        outline: none;
        cursor: pointer;
        border: 0;
        transition: all 0.35s ease-in-out;
        box-shadow: 0 4px 12px rgba(66, 133, 244, 0.25);
        position: relative;
        overflow: hidden;
        letter-spacing: 0.06em;
        text-decoration: none;
        font-weight: 500;
        display: inline-block;
      }

      .zigrow-about-2 .primary-btn::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.15);
        transform: skewX(-20deg);
        transition: all 0.6s ease-in-out;
      }

      .zigrow-about-2 .primary-btn:hover::before {
        left: 100%;
      }

      .zigrow-about-2 .primary-btn:hover {
        box-shadow: 0 6px 16px rgba(66, 133, 244, 0.35);
      }

      /* Arrow illustration */
      .zigrow-about-2 .arrow-img-box {
        /* position: relative; */
        position: absolute;
        bottom: -20%;
        right: 40%;
        width: 120px;
        text-align: center;
        transform: rotate(10deg);
        z-index: 0;
        margin-top: 2rem;
      }

      .zigrow-about-2 .arrow-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }

      @media (max-width: 992px) {
        .zigrow-about-2 .arrow-image {
          display: none;
        }
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-about-3", {
    name: "About-3",
    category: "about-us",
    image: "https://i.postimg.cc/ZRzm6wnp/about3.png",
    html: ` <section class="zigrow-about-3 py-6" data-section="zigrow-about-3" id="zigrow-about-3">
      <div class="container">
        <div class="row about-inner g-4">
          <!-- Left: Text -->
          <div class="col-12 col-lg-6">
            <div class="about-text">
              <h2 class="no-theme-size about-title font-montserrat">About Us</h2>

              <p class="about-description">
                to help businesses like yours succeed in the digital world.
                Whether you're looking to boost website traffic, improve lead
                generation, or build a strong online brand, we provide expert
                solutions that drive long-term success.
              </p>

              <p class="about-description">
                Our mission is simple: to help businesses like yours succeed in
                the digital world. Whether you're looking to boost website
                traffic, improve lead generation, or build a strong online
                brand, we provide expert solutions that drive long-term success.
              </p>
            </div>
          </div>

          <!-- Right: Image card with purple strip -->
          <div class="col-12 col-lg-6">
            <div class="about-media">
              <div class="about-image-card">
                <img src="/builder/img/zigrow-about-images/3.webp" alt="Team Image" class="about-image" />
                <div class="about-image-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
         <style>
      .zigrow-about-3 {
        background-color: #f7f3fb;
      }

      .py-6 {
        padding: 3rem 0;
      }

      /* Wrapper – no flex now, only spacing */
      .about-inner {
        padding-bottom: 3rem;
        align-items: center;
      }

      /* Left text column */
      .about-text {
        max-width: 640px;
      }

      .about-title {
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
        font-weight: 700;
        color: #000;
      }

      .about-description {
        font-size: 1rem;
        line-height: 1.7;
        /* var() with fallback */
        color: var(--secondary-colors, #5f6473);
        margin-bottom: 1rem;
        text-transform: capitalize;
      }

      /* Right image column */
      .about-media {
        width: 100%;
        display: block;
      }

      .about-image-card {
        position: relative;
        max-width: 520px;
        width: 100%;
        border-radius: 6px;
        margin-left: auto; /* align to right on large screens */
        margin-right: auto; /* center on small screens */
      }

      /* Main image */
      .about-image {
        max-width: 100%;
        max-height: 100%;
        border-radius: 6px;
        position: relative;
        object-fit: cover;
        z-index: 2;
      }

      /* Full-size purple box behind image */
      .about-image-accent {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--primary-colors);
        border-radius: 6px;
        z-index: 1;
        transform: rotate(-5deg);
        transform-origin: top right;
      }

      /* Optional: small-screen text alignment */
      @media (max-width: 575.98px) {
        .about-text {
          text-align: left;
        }
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-about-4", {
  name: "About-3",
  category: "about",
  image:
    "https://i.postimg.cc/9McFQNnS/about-1.png",

  html: `
<section
  id="zigrow-about-4"
  data-section="zigrow-about-4"
  class="zigrow-about-4"
>
  <div class="zigrow-about-4-inner">
    <div class="zigrow-about-4-heading-wrap">
      <h2 class="no-theme-size zigrow-about-4-heading">
        "We transform ideas into meaningful experiences. Our expert team
        creates thoughtful solutions that reflect your unique vision and
        improve every customer
        <span class="zigrow-about-4-highlight">experience.</span>"
      </h2>
    </div>

    <div class="zigrow-about-4-layout">
      <div class="zigrow-about-4-description-wrap">
        <p class="zigrow-about-4-description">
          We understand your needs, focus on every important detail, and create
          reliable solutions that support your goals and complement your
          business.
        </p>
      </div>

      <div class="zigrow-about-4-main-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85"
          alt="Modern professional space with thoughtful design"
          class="zigrow-about-4-main-image"
        />
      </div>

      <div class="zigrow-about-4-side-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=85"
          alt="Professional team discussing business ideas"
          class="zigrow-about-4-side-image"
        />
      </div>
    </div>
  </div>

  <style>
    .zigrow-about-4 {
      width: 100%;
      overflow: hidden;
      background: var(--territory-colors, #f8f3eb);
      padding: 42px 0 34px;
    }

    .zigrow-about-4 .zigrow-about-4-inner {
      width: min(100% - 48px, 1320px);
      margin: 0 auto;
    }

    .zigrow-about-4 .zigrow-about-4-heading-wrap {
      width: min(100%, 790px);
      margin: 0 auto 34px;
    }

    .zigrow-about-4 .zigrow-about-4-heading {
      margin: 0;
      color: #111111;
      font-size: clamp(2rem, 4.2vw, 3.55rem);
      font-weight: 700;
      letter-spacing: -0.045em;
      line-height: 0.96;
      text-align: center;
    }

    .zigrow-about-4 .zigrow-about-4-highlight {
      color: var(--primary-colors, #e02828);
    }

    .zigrow-about-4 .zigrow-about-4-layout {
      display: grid;
      grid-template-columns: minmax(150px, 0.75fr) minmax(420px, 2fr) minmax(
          210px,
          0.95fr
        );
      gap: 20px;
      align-items: start;
    }

    .zigrow-about-4 .zigrow-about-4-description-wrap {
      align-self: end;
      padding: 0 8px 18px 0;
    }

    .zigrow-about-4 .zigrow-about-4-description {
      max-width: 220px;
      margin: 0;
      color: var(--secondary-colors, #686868);
      font-size: 0.78rem;
      line-height: 1.55;
    }

    .zigrow-about-4 .zigrow-about-4-main-image-wrap {
      height: 335px;
      overflow: hidden;
      border-radius: 16px;
      background: #dedbd5;
      text-align: center;
      box-shadow: 0 12px 30px rgba(33, 26, 20, 0.08);
    }

    .zigrow-about-4 .zigrow-about-4-main-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%);
      transition:
        filter 0.35s ease,
        transform 0.35s ease;
    }

    .zigrow-about-4 .zigrow-about-4-main-image-wrap:hover
      .zigrow-about-4-main-image {
      filter: grayscale(25%);
      transform: scale(1.025);
    }

    .zigrow-about-4 .zigrow-about-4-side-image-wrap {
      height: 175px;
      overflow: hidden;
      border-radius: 15px;
      background: #dedbd5;
      text-align: center;
      box-shadow: 0 14px 28px rgba(33, 26, 20, 0.12);
    }

    .zigrow-about-4 .zigrow-about-4-side-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.35s ease;
    }

    .zigrow-about-4 .zigrow-about-4-side-image-wrap:hover
      .zigrow-about-4-side-image {
      transform: scale(1.04);
    }

    @media (max-width: 991px) {
      .zigrow-about-4 {
        padding: 50px 0 38px;
      }

      .zigrow-about-4 .zigrow-about-4-heading-wrap {
        margin-bottom: 38px;
      }

      .zigrow-about-4 .zigrow-about-4-layout {
        grid-template-columns: minmax(150px, 0.7fr) minmax(360px, 1.8fr);
      }

      .zigrow-about-4 .zigrow-about-4-side-image-wrap {
        grid-column: 2;
        width: 58%;
        height: 185px;
        justify-self: end;
      }

      .zigrow-about-4 .zigrow-about-4-description-wrap {
        grid-row: 1;
      }

      .zigrow-about-4 .zigrow-about-4-main-image-wrap {
        grid-column: 2;
        grid-row: 1;
        height: 320px;
      }
    }

    @media (max-width: 767px) {
      .zigrow-about-4 .zigrow-about-4-inner {
        width: min(100% - 32px, 1320px);
      }

      .zigrow-about-4 .zigrow-about-4-heading {
        font-size: clamp(2rem, 9vw, 3rem);
        line-height: 1;
      }

      .zigrow-about-4 .zigrow-about-4-layout {
        grid-template-columns: 1fr;
        gap: 18px;
      }

      .zigrow-about-4 .zigrow-about-4-description-wrap {
        grid-column: 1;
        grid-row: auto;
        padding: 0;
      }

      .zigrow-about-4 .zigrow-about-4-description {
        max-width: 520px;
        font-size: 0.9rem;
      }

      .zigrow-about-4 .zigrow-about-4-main-image-wrap {
        grid-column: 1;
        grid-row: auto;
        height: 310px;
      }

      .zigrow-about-4 .zigrow-about-4-side-image-wrap {
        grid-column: 1;
        width: 56%;
        height: 180px;
        justify-self: end;
      }
    }

    @media (max-width: 480px) {
      .zigrow-about-4 {
        padding: 40px 0 24px;
      }

      .zigrow-about-4 .zigrow-about-4-inner {
        width: min(100% - 24px, 1320px);
      }

      .zigrow-about-4 .zigrow-about-4-heading-wrap {
        margin-bottom: 28px;
      }

      .zigrow-about-4 .zigrow-about-4-heading {
        font-size: clamp(1.8rem, 9.5vw, 2.5rem);
      }

      .zigrow-about-4 .zigrow-about-4-main-image-wrap {
        height: 260px;
        border-radius: 13px;
      }

      .zigrow-about-4 .zigrow-about-4-side-image-wrap {
        width: 68%;
        height: 150px;
        border-radius: 13px;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-about-5", {
  name: "About-5",
  category: "about-us",
  image:
    "https://i.postimg.cc/vZs4jgSz/Screenshot-2026-07-21-171545.png",
  html: `
<section
  id="zigrow-about-5"
  class="zigrow-about-5"
  data-section="zigrow-about-5"
>
  <div class="container">
    <div class="row zigrow-about-5-main-row">
      <div class="col-12 col-lg-6">
        <div
          class="zigrow-about-5-image-card zigrow-about-5-media-center"
      
        >
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&amp;fit=crop&amp;w=1400&amp;q=85"
            alt="Business professionals building a trusted partnership"
          />

          <div
            class="zigrow-about-5-highlight-card"
        
          >
            <div class="zigrow-about-5-stat">
              <p class="zigrow-about-5-stat-number">90+</p>
              <p class="zigrow-about-5-stat-label">Successful Projects</p>
            </div>

            <div class="zigrow-about-5-highlight-copy">
              <p>
                Delivering consistent results through thoughtful planning,
                dependable execution, and customer-focused business support.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6">
        <div class="zigrow-about-5-content">
          <p class="zigrow-about-5-badge">About Our Company</p>

          <h2 class="no-theme-size zigrow-about-5-title">
            Our Skilled Team Delivering Trusted Business Solutions
          </h2>

          <div
            class="zigrow-about-5-tabs"
            data-component-tabs
            id="tabs-zigrow-about-5"
          >
            <nav class="zigrow-about-5-tab-navigation">
              <div
                class="nav nav-tabs zigrow-about-5-tab-list"
                role="tablist"
              >
                <button
                  class="nav-link active"
                  id="nav-tab-zigrow-about-5-1"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-zigrow-about-5-1"
                  type="button"
                  role="tab"
                  aria-controls="nav-zigrow-about-5-1"
                  aria-selected="true"
                >
                  Our Mission
                </button>

                <button
                  class="nav-link"
                  id="nav-tab-zigrow-about-5-2"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-zigrow-about-5-2"
                  type="button"
                  role="tab"
                  aria-controls="nav-zigrow-about-5-2"
                  aria-selected="false"
                >
                  Our Vision
                </button>

                <button
                  class="nav-link"
                  id="nav-tab-zigrow-about-5-3"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-zigrow-about-5-3"
                  type="button"
                  role="tab"
                  aria-controls="nav-zigrow-about-5-3"
                  aria-selected="false"
                >
                  Our Values
                </button>
              </div>
            </nav>

            <div class="tab-content zigrow-about-5-tab-content">
              <div
                class="tab-pane show active"
                id="nav-zigrow-about-5-1"
                role="tabpanel"
                aria-labelledby="nav-tab-zigrow-about-5-1"
                tabindex="0"
              >
                <p>
                  Our team is committed to providing dependable service,
                  thoughtful guidance, and practical solutions shaped around
                  every customer’s individual goals. We combine professional
                  experience, continuous improvement, and collaborative
                  teamwork to create meaningful results and lasting customer
                  confidence.
                </p>
              </div>

              <div
                class="tab-pane"
                id="nav-zigrow-about-5-2"
                role="tabpanel"
                aria-labelledby="nav-tab-zigrow-about-5-2"
                tabindex="0"
              >
                <p>
                  We aim to become a trusted partner for businesses and
                  individuals seeking reliable support, clear communication,
                  and sustainable progress. Our vision is to make quality
                  solutions more accessible while building relationships that
                  continue to deliver value through every stage of growth.
                </p>
              </div>

              <div
                class="tab-pane"
                id="nav-zigrow-about-5-3"
                role="tabpanel"
                aria-labelledby="nav-tab-zigrow-about-5-3"
                tabindex="0"
              >
                <p>
                  Integrity, responsibility, collaboration, and customer care
                  guide the way we work. We value honest communication,
                  consistent quality, and thoughtful decision-making that helps
                  us serve every customer with respect while maintaining strong
                  professional standards across each project and interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row zigrow-about-5-info-row">
      <div class="col-12 col-md-4 clonable-card">
        <div
          class="zigrow-about-5-info-item"
      
        >
          <div class="zigrow-about-5-info-icon">
            <i class="bi bi-telephone-fill" data-icon="telephone-fill"></i>
          </div>

          <div class="zigrow-about-5-info-content">
            <p class="zigrow-about-5-info-title">Need Our Support?</p>
            <p class="zigrow-about-5-info-text">
              <span>Call:</span>
              <a href="tel:+919123456789">+91-9123456789</a>
            </p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4  clonable-card">
        <div
          class="zigrow-about-5-info-item"
      
        >
          <div class="zigrow-about-5-info-icon">
            <i class="bi bi-clock-fill" data-icon="clock-fill"></i>
          </div>

          <div class="zigrow-about-5-info-content">
            <p class="zigrow-about-5-info-title">Opening Hours</p>
            <p class="zigrow-about-5-info-text">
              <span>Mon to Sat 08:00 - 20:00</span>
            </p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4  clonable-card">
        <div
          class="zigrow-about-5-info-item"
      
        >
          <div class="zigrow-about-5-info-icon">
            <i class="bi bi-envelope-fill" data-icon="envelope-fill"></i>
          </div>

          <div class="zigrow-about-5-info-content">
            <p class="zigrow-about-5-info-title">Email Us</p>
            <p class="zigrow-about-5-info-text">
              <a href="mailto:yourname@domainname.com">
                yourname@domainname.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-about-5 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 7rem) 0 clamp(2.5rem, 5vw, 4.5rem);
      background: #ffffff;
    }

    .zigrow-about-5 .zigrow-about-5-main-row {
      row-gap: 3rem;
      align-items: stretch;
    }

    .zigrow-about-5 .zigrow-about-5-image-card {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: clamp(31rem, 42vw, 39rem);
      overflow: hidden;
      border-radius: 1.4rem;
      background: var(--territory-colors, #e8edf1);
    }

    .zigrow-about-5 .zigrow-about-5-media-center {
      text-align: center;
    }

    .zigrow-about-5 .zigrow-about-5-image-card > img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.5s ease;
    }

    .zigrow-about-5 .zigrow-about-5-image-card:hover > img {
      transform: scale(1.025);
    }

    .zigrow-about-5 .zigrow-about-5-highlight-card {
      position: absolute;
      right: clamp(1.25rem, 4vw, 4rem);
      bottom: clamp(1.25rem, 4vw, 3rem);
      left: clamp(1.25rem, 4vw, 4rem);
      display: grid;
      grid-template-columns: minmax(9rem, 0.6fr) minmax(0, 1.4fr);
      gap: clamp(1.5rem, 3vw, 3rem);
      align-items: center;
      min-height: 12rem;
      padding: clamp(1.5rem, 3vw, 2.5rem);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 0.9rem;
      background: rgba(8, 13, 18, 0.78);
      box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(14px);
    }

    .zigrow-about-5 .zigrow-about-5-stat {
      min-width: 0;
    }

    .zigrow-about-5 .zigrow-about-5-stat-number {
      margin: 0;
      color: #ffffff;
      font-size: clamp(3.5rem, 6vw, 5.5rem);
      font-weight: 400;
      line-height: 0.95;
      letter-spacing: -0.055em;
    }

    .zigrow-about-5 .zigrow-about-5-stat-label {
      margin: 0.65rem 0 0;
      color: rgba(255, 255, 255, 0.9);
      font-size: clamp(0.9rem, 1.4vw, 1.15rem);
      font-weight: 500;
      line-height: 1.35;
    }

    .zigrow-about-5 .zigrow-about-5-highlight-copy {
      min-width: 0;
    }

    .zigrow-about-5 .zigrow-about-5-highlight-copy p {
      margin: 0;
      color: rgba(255, 255, 255, 0.76);
      font-size: clamp(0.95rem, 1.45vw, 1.15rem);
      line-height: 1.8;
    }

    .zigrow-about-5 .zigrow-about-5-content {
      height: 100%;
      padding: 0 clamp(0rem, 2vw, 2rem);
    }

    .zigrow-about-5 .zigrow-about-5-badge {
      display: inline-block;
      margin: 0 0 clamp(1.5rem, 3vw, 2.3rem);
      padding: 0.65rem 1rem;
      border-radius: 0.25rem;
      background: #fff;
      color: #1c1c1c;
      font-size: 0.95rem;
      font-weight: 700;
      line-height: 1;
    }

    .zigrow-about-5 .zigrow-about-5-title {
      max-width: 47rem;
      margin: 0;
      color: #080808;
      font-size: clamp(2.4rem, 4vw, 4rem);
      font-weight: 400;
      line-height: 1.16;
      letter-spacing: -0.045em;
    }

    .zigrow-about-5 .zigrow-about-5-tabs {
      margin-top: clamp(2.2rem, 4vw, 3.5rem);
    }

    .zigrow-about-5 .zigrow-about-5-tab-navigation {
      width: 100%;
    }

    .zigrow-about-5 .zigrow-about-5-tab-list {
      display: grid;
      grid-template-columns: repeat(3, max-content);
      gap: clamp(0.6rem, 1.5vw, 1.3rem);
      border: 0;
    }

    .zigrow-about-5 .zigrow-about-5-tab-list .nav-link {
      margin: 0;
      padding: 1rem 1.45rem;
      border: 1px solid transparent;
      border-radius: 0;
      background: transparent;
      color: var(--secondary-colors, #737373);
      font-size: clamp(0.95rem, 1.4vw, 1.1rem);
      font-weight: 500;
      line-height: 1.2;
      cursor: pointer;
      transition:
        color 0.25s ease,
        background 0.25s ease,
        border-color 0.25s ease;
    }

    .zigrow-about-5 .zigrow-about-5-tab-list .nav-link:hover {
      border-color: var(--territory-colors, #e7ebef);
      color: var(--primary-colors, #20364d);
    }

    .zigrow-about-5 .zigrow-about-5-tab-list .nav-link.active {
      border-color: var(--primary-colors, #20364d);
      background: var(--primary-colors, #20364d);
      color: #ffffff;
    }

    .zigrow-about-5 .zigrow-about-5-tab-content {
      margin-top: 1.4rem;
      padding-top: clamp(1.5rem, 3vw, 2.2rem);
      border-top: 1px solid #dfe3e7;
    }

    .zigrow-about-5 .zigrow-about-5-tab-content .tab-pane p {
      max-width: 48rem;
      margin: 0;
      color: var(--secondary-colors, #737373);
      font-size: clamp(1rem, 1.35vw, 1.13rem);
      line-height: 1.85;
    }

    .zigrow-about-5 .zigrow-about-5-info-row {
      row-gap: 2rem;
      margin-top: clamp(3rem, 6vw, 5rem);
    }

    .zigrow-about-5 .zigrow-about-5-info-item {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: clamp(1rem, 2vw, 1.5rem);
      align-items: center;
      height: 100%;
      padding: 0.75rem 0;
    }

    .zigrow-about-5 .zigrow-about-5-info-icon {
      display: grid;
      place-items: center;
      width: clamp(3.4rem, 5vw, 4.4rem);
      height: clamp(3.4rem, 5vw, 4.4rem);
      color: var(--primary-colors, #20364d);
    }

    .zigrow-about-5 .zigrow-about-5-info-icon i {
      font-size: clamp(2.8rem, 4.5vw, 4rem);
      line-height: 1;
    }

    .zigrow-about-5 .zigrow-about-5-info-content {
      min-width: 0;
    }

    .zigrow-about-5 .zigrow-about-5-info-title {
      margin: 0 0 0.45rem;
      color: #111111;
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      font-weight: 700;
      line-height: 1.25;
    }

    .zigrow-about-5 .zigrow-about-5-info-text {
      margin: 0;
      color: var(--secondary-colors, #747474);
      font-size: clamp(0.95rem, 1.35vw, 1.08rem);
      line-height: 1.45;
    }

    .zigrow-about-5 .zigrow-about-5-info-text a {
      color: var(--secondary-colors, #747474);
      text-decoration: none;
      overflow-wrap: anywhere;
      transition: color 0.25s ease;
    }

    .zigrow-about-5 .zigrow-about-5-info-text a:hover {
      color: var(--primary-colors, #20364d);
    }

    @media (max-width: 1199px) {
      .zigrow-about-5 .zigrow-about-5-highlight-card {
        right: 1.5rem;
        bottom: 1.5rem;
        left: 1.5rem;
      }

      .zigrow-about-5 .zigrow-about-5-title {
        font-size: clamp(2.35rem, 4.2vw, 3.4rem);
      }

      .zigrow-about-5 .zigrow-about-5-tab-list .nav-link {
        padding: 0.9rem 1rem;
      }
    }

    @media (max-width: 991px) {
      .zigrow-about-5 .zigrow-about-5-image-card {
        min-height: 36rem;
      }

      .zigrow-about-5 .zigrow-about-5-content {
        padding: 0;
      }

      .zigrow-about-5 .zigrow-about-5-info-row {
        margin-top: 3.5rem;
      }
    }

    @media (max-width: 767px) {
      .zigrow-about-5 {
        padding: 3rem 0;
      }

      .zigrow-about-5 .zigrow-about-5-image-card {
        min-height: 31rem;
        border-radius: 1rem;
      }

      .zigrow-about-5 .zigrow-about-5-highlight-card {
        grid-template-columns: 1fr;
        gap: 1rem;
        min-height: auto;
        padding: 1.5rem;
      }

      .zigrow-about-5 .zigrow-about-5-stat-number {
        font-size: 3.8rem;
      }

      .zigrow-about-5 .zigrow-about-5-highlight-copy p {
        line-height: 1.6;
      }

      .zigrow-about-5 .zigrow-about-5-title {
        font-size: clamp(2.2rem, 8vw, 3.4rem);
      }

      .zigrow-about-5 .zigrow-about-5-tab-list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.4rem;
      }

      .zigrow-about-5 .zigrow-about-5-tab-list .nav-link {
        width: 100%;
        padding: 0.85rem 0.45rem;
        font-size: 0.9rem;
      }

      .zigrow-about-5 .zigrow-about-5-info-item {
        padding: 1rem 0;
      }
    }

    @media (max-width: 479px) {
      .zigrow-about-5 .zigrow-about-5-image-card {
        min-height: 32rem;
      }

      .zigrow-about-5 .zigrow-about-5-highlight-card {
        right: 0.8rem;
        bottom: 0.8rem;
        left: 0.8rem;
      }

      .zigrow-about-5 .zigrow-about-5-highlight-copy p {
        font-size: 0.88rem;
      }

      .zigrow-about-5 .zigrow-about-5-badge {
        margin-bottom: 1.3rem;
      }

      .zigrow-about-5 .zigrow-about-5-tab-list {
        grid-template-columns: 1fr;
      }

      .zigrow-about-5 .zigrow-about-5-tab-list .nav-link {
        text-align: left;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-about-6", {
  name: "About-4",
  category: "about-us",
  image:
    "https://i.postimg.cc/zBjGzhZv/Screenshot-2026-07-23-124815.png",

  html: `
<section
  id="zigrow-about-6"
  data-section="zigrow-about-6"
  class="zigrow-about-6"
>
  <div class="zigrow-about-6-container">
    <div class="zigrow-about-6-main">
      <div class="zigrow-about-6-founder">
        <h2 class="no-theme-size zigrow-about-6-title">
          Behind the success: a little about our founder,
          <span>Aarav Mehta</span>
        </h2>

        <div class="zigrow-about-6-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85"
            alt="Portrait of company founder Aarav Mehta"
            class="zigrow-about-6-image"
          />
        </div>
      </div>

      <div class="zigrow-about-6-biography">
        <h3 class="zigrow-about-6-subtitle">About Aarav</h3>

        <p class="zigrow-about-6-lead">
          Aarav Mehta, the visionary founder of our company, brings a strong
          professional background and years of practical industry experience.
          His journey began through early opportunities where he developed the
          skills, knowledge, and perspective required to build meaningful
          solutions.
        </p>

        <p>
          After completing his education, Aarav followed a career shaped by
          dedication and continuous learning. With a passion for creating
          lasting value, he steadily earned recognition for his thoughtful
          approach and commitment to every client.
        </p>

        <p>
          Driven by the desire to provide more personal and innovative
          services, Aarav established the company with a clear vision: to place
          customer needs first while delivering dependable solutions that help
          individuals and businesses achieve their goals.
        </p>

        <p>
          Under Aarav's leadership, the company has continued to grow while
          building a reputation for quality, trust, and professional service.
          His commitment to customer satisfaction and constant improvement
          continues to guide the team toward new opportunities.
        </p>
      </div>
    </div>

    <div class="zigrow-about-6-divider"></div>

    <div class="zigrow-about-6-details">
      <div class="zigrow-about-6-detail">
        <h3>Our Story</h3>

        <p>
          Our journey began with a simple vision to improve the way customers
          experience professional services. Since then, we have continued to
          provide thoughtful solutions designed around real needs and lasting
          relationships.
        </p>
      </div>

      <div class="zigrow-about-6-detail">
        <h3>Our Vision</h3>

        <p>
          Our vision is to become a trusted destination for modern and
          dependable solutions. We aim to set higher standards by combining
          practical expertise, clear communication, and meaningful value for
          every customer.
        </p>
      </div>

      <div class="zigrow-about-6-detail">
        <h3>Our Commitment to Excellence</h3>

        <p>
          Excellence remains at the heart of everything we do. We are committed
          to delivering reliable service, consistently meeting expectations,
          and creating experiences that customers can confidently recommend to
          others.
        </p>
      </div>
    </div>
  </div>

  <style>
    .zigrow-about-6 {
      width: 100%;
      padding: 76px 0 52px;
      overflow: hidden;
      background: #ffffff;
      color: #171717;
    }

    .zigrow-about-6 .zigrow-about-6-container {
      width: min(100% - 48px, 1120px);
      margin: 0 auto;
    }

    .zigrow-about-6 .zigrow-about-6-main {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: clamp(54px, 8vw, 112px);
      align-items: start;
    }

    .zigrow-about-6 .zigrow-about-6-founder {
      display: grid;
      align-content: space-between;
      min-height: 480px;
    }

    .zigrow-about-6 .zigrow-about-6-title {
      max-width: 520px;
      margin: 0;
      color: #171717;
      font-size: clamp(1.9rem, 3vw, 2.75rem);
      font-weight: 500;
      letter-spacing: -0.04em;
      line-height: 1.16;
    }

    .zigrow-about-6 .zigrow-about-6-title span {
      display: block;
      margin-top: 6px;
      color: var(--primary-colors, #171717);
    }

    .zigrow-about-6 .zigrow-about-6-image-wrap {
      width: 225px;
      height: 270px;
      margin-top: 58px;
      overflow: hidden;
      background: var(--territory-colors, #d6d6d6);
      text-align: center;
    }

    .zigrow-about-6 .zigrow-about-6-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      filter: grayscale(100%);
      transition:
        filter 0.35s ease,
        transform 0.35s ease;
    }

    .zigrow-about-6 .zigrow-about-6-image-wrap:hover
      .zigrow-about-6-image {
      filter: grayscale(20%);
      transform: scale(1.025);
    }

    .zigrow-about-6 .zigrow-about-6-biography {
      max-width: 520px;
    }

    .zigrow-about-6 .zigrow-about-6-subtitle {
      margin: 0 0 24px;
      color: var(--primary-colors, #171717);
      font-size: clamp(1.65rem, 2.4vw, 2.15rem);
      font-weight: 500;
      letter-spacing: -0.03em;
      line-height: 1.2;
    }

    .zigrow-about-6 .zigrow-about-6-biography p {
      margin: 0 0 22px;
      color: var(--secondary-colors, #494949);
      font-size: 0.94rem;
      line-height: 1.65;
    }

    .zigrow-about-6 .zigrow-about-6-biography .zigrow-about-6-lead {
      margin-bottom: 32px;
      font-size: 1rem;
      line-height: 1.6;
    }

    .zigrow-about-6 .zigrow-about-6-divider {
      width: 100%;
      height: 1px;
      margin: 52px 0 38px;
      background: #dddddd;
    }

    .zigrow-about-6 .zigrow-about-6-details {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(30px, 5vw, 68px);
    }

    .zigrow-about-6 .zigrow-about-6-detail h3 {
      margin: 0 0 18px;
      color: var(--primary-colors, #171717);
      font-size: 1.35rem;
      font-weight: 500;
      letter-spacing: -0.025em;
      line-height: 1.25;
    }

    .zigrow-about-6 .zigrow-about-6-detail p {
      margin: 0;
      color: var(--secondary-colors, #555555);
      font-size: 0.9rem;
      line-height: 1.65;
    }

    @media (max-width: 991px) {
      .zigrow-about-6 {
        padding: 64px 0 46px;
      }

      .zigrow-about-6 .zigrow-about-6-main {
        gap: 50px;
      }

      .zigrow-about-6 .zigrow-about-6-founder {
        min-height: 440px;
      }

      .zigrow-about-6 .zigrow-about-6-image-wrap {
        width: 210px;
        height: 260px;
        margin-top: 44px;
      }

      .zigrow-about-6 .zigrow-about-6-details {
        gap: 30px;
      }
    }

    @media (max-width: 767px) {
      .zigrow-about-6 .zigrow-about-6-container {
        width: min(100% - 32px, 1120px);
      }

      .zigrow-about-6 .zigrow-about-6-main {
        grid-template-columns: 1fr;
        gap: 52px;
      }

      .zigrow-about-6 .zigrow-about-6-founder {
        min-height: auto;
      }

      .zigrow-about-6 .zigrow-about-6-title {
        max-width: 620px;
      }

      .zigrow-about-6 .zigrow-about-6-image-wrap {
        width: min(100%, 320px);
        height: 350px;
        margin-top: 36px;
      }

      .zigrow-about-6 .zigrow-about-6-biography {
        max-width: 620px;
      }

      .zigrow-about-6 .zigrow-about-6-divider {
        margin: 44px 0 34px;
      }

      .zigrow-about-6 .zigrow-about-6-details {
        grid-template-columns: 1fr;
        gap: 34px;
      }

      .zigrow-about-6 .zigrow-about-6-detail {
        max-width: 620px;
      }
    }

    @media (max-width: 480px) {
      .zigrow-about-6 {
        padding: 48px 0 38px;
      }

      .zigrow-about-6 .zigrow-about-6-container {
        width: min(100% - 24px, 1120px);
      }

      .zigrow-about-6 .zigrow-about-6-title {
        font-size: 1.9rem;
      }

      .zigrow-about-6 .zigrow-about-6-image-wrap {
        width: 100%;
        height: 340px;
      }

      .zigrow-about-6 .zigrow-about-6-subtitle {
        font-size: 1.7rem;
      }

      .zigrow-about-6 .zigrow-about-6-biography p,
      .zigrow-about-6 .zigrow-about-6-detail p {
        font-size: 0.9rem;
      }
    }
  </style>
</section>
`,
});

// client Section Blocks
Vvveb.Blocks.add("bootstrap4/zigrow-client-1", {
    name: "Client-1",
    category: "client",
    image: "https://i.postimg.cc/Pxbjy1vJ/client1.png",
    html: `    <section id="zigrow-client-1" data-section="zigrow-client-1" aria-label="Boost Social Reach" class="zigrow-client-1 py-6">
      <div class="container">
        <!-- Header -->
        <div class="zigrow-client-1-head">
          <span class="label">
            <i
              class="fa-solid fa-sparkles"
              data-icon="sparkles"
              aria-hidden="true"
            ></i>
            Expand Your Influence
          </span>

          <h2 class="no-theme-size title">
            Unlock wider and
            <span class="accent">create fresh content</span>
            for your client
          </h2>

           <p class="sub">
            Help your brand stay active, relevant, and memorable with content that connects better with your audience.
          </p>
        </div>

        <!-- Features -->
        <div class="features row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="f-card">
              <div class="icon">
                <i class="fa-regular fa-bell" data-icon="bell"></i>
              </div>
              <div class="description">
                <h3 class="f-title">Stay Ahead With Ideas</h3>
               <p class="f-desc">
                  Keep your content pipeline active with fresh ideas that help your brand stay visible and relevant.
                </p>
              </div>
              </div>
              <span class="badge-pill">Trusted By Many</span>
            </div>
          </div>

          <div class="col">
            <div class="f-card">
              <div class="icon">
                <i class="fa-regular fa-square-check" data-icon="check"></i>
              </div>
              <div class="description">
                 <h3 class="f-title">Create Posts That Get Noticed</h3>
                <p class="f-desc">
                  Design content that looks polished, feels consistent, and stands out across every platform.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="f-card">
              <div class="icon">
                <i class="fa-regular fa-message" data-icon="message"></i>
              </div>
              <div class="description">
                 <h3 class="f-title">Responsive Support When Needed</h3>
                <p class="f-desc">
                  Get dependable guidance and quick help whenever you need support with your content workflow.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="f-card">
              <div class="icon">
                <i class="fa-regular fa-square-check" data-icon="check"></i>
              </div>
              <div class="description">
                <h3 class="f-title">Keep Your Brand Consistent</h3>
                <p class="f-desc">
                  Maintain a unified look and voice across your content so your brand feels clear and professional.
                </p>
              </div>
            </div>
          </div>
        </div>

     
        <!-- Bottom Stage -->
        <div class="stage">
          <div class="row align-items-center">
            <!-- Left: testimonial -->
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="plate">
                <div class="quote-card" aria-label="Client testimonial">
                  <span class="chip">What Clients Are Saying</span>
                  <p>
                    “Working with them gave us fresh creative direction and
                    helped us improve our social presence dramatically.”
                  </p>

                  <div class="byline">
                    <div class="testimonial-img-box">
                      <img src="/builder/img/zigrow-team-images/1.png" alt="Priya Sharma" />
                    </div>
                    <div>
                      <strong>Priya Sharma</strong>
                      <p>Business Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: person image -->
            <div class="col-lg-6">
              <div class="person mb-0">
                <img
                src="/builder/img/zigrow-team-images/social-tech-reach-client.webp"
                  alt="Marketing professional smiling"
                />
                <span class="social-icon ig">
                <a href="#">

                  <i class="fa-brands fa-instagram" data-icon="instagram"></i></a>
                </span>
                <span class="social-icon fb">
                <a href="#">
                  <i class="fa-brands fa-facebook-f" data-icon="facebook"></i> </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
       <style>
      .py-6 {
        padding: 3rem 0;
      }
      /* :root {
        --primary-colors: #6d7efb;
        --secondary-colors: #7b8798;
        --territory-colors: #0f172a;
      } */

      /* SECTION WRAPPER */
      .zigrow-client-1 {
        position: relative;
        /* padding-block: 4rem 3.5rem; */
        background: repeating-linear-gradient(
            0deg,
            transparent 0 24px,
            rgba(15, 23, 42, 0.03) 24px 25px
          ),
          #ffffff;
        color: var(--territory-colors, #0f172a);
       
      }

      /* TOP LABEL + HEADING */
      .zigrow-client-1 .zigrow-client-1-head {
        text-align: center;
        display: grid;
        gap: 0.85rem;
        justify-items: center;
        margin-bottom: 2.75rem;
      }

      .zigrow-client-1 .zigrow-client-1-head .label {
        display: inline-grid;
        grid-auto-flow: column;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.9rem;
        border-radius: 999px;
        background: #f4f6fb;
        color: #3a4660;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        box-shadow: 0 10px 26px rgba(15, 23, 42, 0.06);
      }

      .zigrow-client-1 .zigrow-client-1-head .label i {
        color: var(--primary-colors, #6d7efb);
        font-size: 0.9rem;
      }

      .zigrow-client-1 .zigrow-client-1-head .title {
        font-weight: 900;
        font-size: clamp(1.9rem, 4.3vw, 2.7rem);
        letter-spacing: 0.01em;
        margin: 0;
        color: #0f172a;
      }

      .zigrow-client-1 .zigrow-client-1-head .title .accent {
        color: var(--primary-colors, #6d7efb);
      }

      .zigrow-client-1 .zigrow-client-1-head .sub {
        margin: 0.4rem 0 0;
        font-size: 0.98rem;
        color: var(--secondary-colors, #7b8798);
        max-width: 80ch;
      }

      /* FEATURES GRID (Bootstrap handles layout) */
      .zigrow-client-1 .features {
        margin: 2rem 0 4.5rem;
      }

      .zigrow-client-1 .f-card {
        position: relative;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1.5rem;
        align-items: flex-start;
        padding: 1.5rem 1.75rem;
        background: #f7f9ff;
        border-radius: 18px;
        border: 1px solid #e5ebff;
        box-shadow: 0 20px 50px rgba(15, 23, 42, 0.05);
        transition: transform 0.18s ease, box-shadow 0.18s ease,
          background-color 0.18s ease;
        height: 100%;
      }

      .zigrow-client-1 .f-card:hover {
        transform: translateY(-4px);
        background-color: #f2f5ff;
        box-shadow: 0 28px 70px rgba(15, 23, 42, 0.09);
      }

      .zigrow-client-1 .f-card .icon {
        width: 52px;
        height: 52px;
        border-radius: 18px;
        display: grid;
        place-items: center;
        background: #ffffff;
        border: 1px solid #e4e8ff;
        color: var(--primary-colors, #6d7efb);
        font-size: 1.25rem;
      }

      .zigrow-client-1 .f-card .f-title {
        margin: 0 0 0.4rem;
        font-size: 1.1rem;
        font-weight: 700;
        color: #0f172a;
      }

      .zigrow-client-1 .f-card .f-desc {
        margin: 0;
        font-size: 0.96rem;
        line-height: 1.7;
        color: var(--secondary-colors, #7b8798);
      }

      /* GREEN BADGE ON 1st CARD */
      .zigrow-client-1 .f-card .badge-pill {
        position: absolute;
        top: 0;
        right: 1.15rem;
        background: #16a34a;
        color: #fff;
        font-size: 0.7rem;
        font-weight: 700;
        padding: 0.25rem 0.7rem;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 6px 20px rgba(22, 163, 74, 0.35);
        border: 1px solid rgba(22, 163, 74, 0.4);
      }

      .social-icon a i{
      color: #fff;}
      @media (max-width: 768px) {
        .zigrow-client-1 .f-card {
          grid-template-columns: 1fr;
          padding: 1.1rem 1.2rem;
        }

        .zigrow-client-1 .f-card .badge-pill {
          position: static;
          display: inline-block;
          margin-top: 0.5rem;
        }
      }

      /* ARROW BETWEEN CARDS & TESTIMONIAL */
      .zigrow-client-1 .arrow-wrap {
        text-align: center;
        position: relative;
        height: 60px;
        margin-top: -1.75rem;
        margin-bottom: 1.75rem;
      }

      .zigrow-client-1 .arrow-wrap img {
        position: absolute;
        left: 15%;
        top: -20px;
        width: 110px;
        height: auto;
        max-width: 100%;
        object-fit: cover;
        transform: rotate(-180deg);
        filter: drop-shadow(0 8px 18px rgba(15, 23, 42, 0.25));
      }

      @media (max-width: 992px) {
        .zigrow-client-1 .arrow-wrap {
          display: none;
        }
      }

     /* Replace with this */
.zigrow-client-1 .stage {
  border-radius: 24px;
  border: 1px solid color-mix(
    in srgb,
    var(--primary-colors, #6d7efb) 18%,
    #ffffff 82%
  );
  background:
    radial-gradient(
      800px 520px at 95% -10%,
      color-mix(
        in srgb,
        var(--primary-colors, #6d7efb) 14%,
        transparent
      ),
      transparent 58%
    ),
    radial-gradient(
      700px 460px at 0% 100%,
      color-mix(
        in srgb,
        var(--tertiary-colors, var(--territory-colors, #dbeafe)) 12%,
        transparent
      ),
      transparent 60%
    ),
    linear-gradient(
      180deg,
      color-mix(
        in srgb,
        var(--primary-colors, #6d7efb) 5%,
        #ffffff 95%
      ) 0%,
      color-mix(
        in srgb,
        var(--tertiary-colors, var(--territory-colors, #dbeafe)) 7%,
        #ffffff 93%
      ) 100%
    );
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
  padding: 1.75rem 1.75rem 0.4rem;
  overflow: hidden;
}
/* Replace with this */
.zigrow-client-1 .plate {
  position: relative;
  border-radius: 24px;
  padding: 1.5rem;
  background:
    radial-gradient(
      520px 320px at 10% 0%,
      color-mix(
        in srgb,
        var(--primary-colors, #6d7efb) 10%,
        transparent
      ),
      transparent 62%
    ),
    linear-gradient(
      180deg,
      color-mix(
        in srgb,
        var(--primary-colors, #6d7efb) 6%,
        #ffffff 94%
      ),
      color-mix(
        in srgb,
        var(--tertiary-colors, var(--territory-colors, #dbeafe)) 8%,
        #ffffff 92%
      )
    );
  border: 1px solid color-mix(
    in srgb,
    var(--primary-colors, #6d7efb) 20%,
    #ffffff 80%
  );
  height: 100%;
}

      .zigrow-client-1 .plate::before,
      .zigrow-client-1 .plate::after {
        content: "";
        position: absolute;
        inset: 14px -10px auto 18px;
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.6);
        z-index: 0;
      }

      .zigrow-client-1 .plate::after {
        inset: 26px 12px auto 30px;
        opacity: 0.8;
      }

      .zigrow-client-1 .quote-card {
        position: relative;
        z-index: 1;
        background: #ffffff;
        border-radius: 18px 18px 0 0;
        border: 1px solid #e4e9ff;
        padding: 1.1rem 1.25rem 1.3rem;
        box-shadow: 0 18px 45px rgba(109, 126, 251, 0.25);
        display: grid;
        gap: 0.8rem;
      }

      .zigrow-client-1 .quote-card .chip {
        display: inline-block;
        width: fit-content;
        padding: 0.5rem 0.7rem;
        border-radius: 999px;
        background: #f0f3f9;
        color: #3b4860;
        font-size: 0.72rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      .zigrow-client-1 .quote-card p {
        margin: 0.8rem 0;
        font-size: 1.1rem;
        line-height: 1.5;
        color: #0f172a;
      }

      .zigrow-client-1 .byline {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        gap: 0.6rem;
        width: fit-content;
      }
      .zigrow-client-1 .testimonial-img-box {
        text-align: center;
        border-radius: 999px;
      }
      .zigrow-client-1 .byline img {
        width: 40px;
        height: 40px;
        max-width: 100%;
        max-height: 100%;
        border-radius: 999px;
        object-fit: cover;
      }

      .zigrow-client-1 .byline strong {
        font-size: 1rem;
        font-weight: 700;
        color: #0f172a;
      }

      .zigrow-client-1 .byline p {
        display: block;
        font-size: 0.9rem;
        color: var(--secondary-colors, #7b8798);
      }

      /* Right person block */
      .zigrow-client-1 .person {
        text-align: center;
        position: relative;
        display: grid;
        place-items: end center;
        height: 100%;
      }

      .zigrow-client-1 .person img {
        width: min(380px, 100%);
        height: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: 22px;
        object-fit: cover;
        filter: drop-shadow(0 22px 50px rgba(15, 23, 42, 0.3));
      }

      .zigrow-client-1 .person .social-icon {
        position: absolute;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        color: #ffffff;
        font-size: 1.15rem;
        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.3);
      }

      .zigrow-client-1 .person .social-icon.ig {
        background: #e1306c;
        left: 22%;
        top: 18%;
      }

      .zigrow-client-1 .person .social-icon.fb {
        background: #1877f2;
        right: 10%;
        bottom: 16%;
      }

      @media (max-width: 992px) {
        .zigrow-client-1 .stage {
          padding: 1.4rem 1.4rem 1rem;
        }

        .zigrow-client-1 .plate {
          margin-bottom: 1.25rem;
        }

        .zigrow-client-1 .person {
          padding-bottom: 0.4rem;
        }

        .zigrow-client-1 .person img {
          position: relative;
        }
      }
      @media (max-width: 576px) {
        .zigrow-client-1 .person .social-icon {
          display: none;
        }
      }

      /* FOOTNOTE */
      .zigrow-client-1 .tiny-note {
        margin-top: 1.3rem;
        font-size: 0.86rem;
        color: var(--secondary-colors, #7b8798);
        text-align: left;
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-client-2", {
    name: "Client-2",
    category: "client",
    image: "https://i.postimg.cc/cHGWfFCf/Clients-2.png",
    html: `    <section
      class="zigrow-client-2 py-6"
      id="zigrow-client-2"
      data-section="zigrow-client-2"
      aria-label="Client zigrow-client-2"
    >
      <div class="zigrow-client-2-bg"></div>
      <div class="zigrow-client-2-overlay"></div>

      <div class="container">
        <div class="zigrow-client-2-content">
          <div class="zigrow-client-2-top">
            <i class="bi bi-quote" data-icon="quote"></i>
            <p>Reviews From Our Happy Clients</p>
          </div>

          <h2 class="no-theme-size zigrow-client-2-title">
            We aim to deliver exceptional value through thoughtfully designed
            services that focus on quality
          </h2>

          <div class="zigrow-client-2-stars">
            <p class="reviewer">Ankit Singh</p>
            <div class="stars" aria-label="5 out of 5">
              <i class="fa-solid fa-star" data-icon="star"></i>
              <i class="fa-solid fa-star" data-icon="star"></i>
              <i class="fa-solid fa-star" data-icon="star"></i>
              <i class="fa-solid fa-star" data-icon="star"></i>
              <i class="fa-solid fa-star" data-icon="star"></i>
            </div>
          </div>
        </div>
      </div> <style>
      .py-6 {
        padding: 3rem 0;
      }
      .zigrow-client-2 {
        position: relative;
        text-align: center;
        padding: clamp(3rem, 6vw, 6rem) 0;
        color: #fff;
      }
     .zigrow-client-2 {
  position: relative;
  text-align: center;
  padding: clamp(3rem, 6vw, 6rem) 0;
  color: #fff;
  background-image: url(https://i.postimg.cc/5NQ0V3F7/Screenshot-2025-11-29-155907.png);
  background-size: cover;
  background-position: center;
}
      .zigrow-client-2 .zigrow-client-2-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.45);
        pointer-events: none;
      }
      .zigrow-client-2 .zigrow-client-2-content {
        position: relative;
        z-index: 1;
        max-width: 900px;
        margin: 0 auto;
        pointer-events: painted;
      }
      .zigrow-client-2 .zigrow-client-2-top i {
        font-size: 2.25rem;
        display: block;
        margin-bottom: 0.25rem;
      }
      .zigrow-client-2 .zigrow-client-2-title {
        font-size: clamp(1.5rem, 2vw + 1rem, 2.25rem);
        margin: 0.5rem 0 1rem;
        color: #fff;
      }
      .zigrow-client-2 .zigrow-client-2-stars .reviewer {
        color: #cbd5e1;
        margin-bottom: 0.25rem;
      }
      .zigrow-client-2 .zigrow-client-2-stars .stars i {
        color: #fbbf24;
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-client-3", {
    name: "Client-3",
    category: "client",
    image: "https://i.postimg.cc/cH7Shftn/Clients-3-(2).png",
    html: ` <section id="zigrow-client-3" data-section="zigrow-client-3" class="zigrow-client-3 py-6">
      <div class="container">
        <div class="row zigrow-client-3-wraper">
          <div class="col-12">
            <div class="quote-icon">
              <i class="fas fa-quote-left" data-icon="quote"></i>
            </div>
          </div>

          <div class="col-12">
             <p class="zigrow-client-3-text">
              Working with this team made the entire process feel simple and well managed. Their attention to detail, timely communication, and thoughtful approach helped bring my ideas to life with much more confidence.
            </p>
          </div>

          <div class="col-12">
            <div class="zigrow-client-3-author">
              <div class="author-image-box">
                <img  src="/builder/img/zigrow-team-images/1.png" alt="Manshi Kumari" />
              </div>
              <div class="author-info">
                <h6>Manshi Kumari</h6>
                <small>Freelancer</small>
              </div>
            </div>
          </div>
        </div>
      </div>
        <style>
      .py-6 {
        padding: 3rem 0;
      }

      .zigrow-client-3 {
        background-color: #f8f9fc;
        text-align: center;
      }

      .zigrow-client-3-wraper {
        align-items: center;
      }
      .quote-icon {
        font-size: 2rem;
        color: var(--secondary-colors, #ccc);
        margin-bottom: 1rem;
      }

      .zigrow-client-3-text {
        font-size: 1.2rem;
        font-style: italic;
        color: #1e3dd3;
        max-width: 700px;
        margin: 0 auto 2rem auto;
        line-height: 1.7;
      }

      /* -----------------------------
         AUTHOR SECTION (GRID ONLY)
      ------------------------------*/

      .zigrow-client-3-author {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        max-width: 320px;
        margin: 0 auto;
      }

      .zigrow-client-3-author .row {
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: center;
        align-items: center;
        column-gap: 12px;
      }

      /* Author Image */
      .author-image-box {
        text-align: center;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        overflow: hidden;
      }

      .author-image-box img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
      .author-info{
        text-align: center;
      }

      .author-info h6 {
        margin: 0;
        font-weight: 600;
        font-size: 1rem;
        text-align: left;
      }

      .author-info p {
        color: var(--secondary-colors, #777);
        font-size: 0.85rem;
        text-align: left;
        display: block;
      }

      /* Responsive on mobile (image on top, text below) */
      @media (max-width: 576px) {
        .zigrow-client-3-author .row {
          grid-template-columns: 1fr;
          row-gap: 10px;
          text-align: center;
        }
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-client-4", {
  name: "Client-4",
  category: "client",
  image:
    "https://i.postimg.cc/zXF7LLv0/Screenshot-2026-07-22-162507.png",

  html: `
<section
  id="zigrow-client-4"
  data-section="zigrow-client-4"
  class="zigrow-client-4"
>
  <div class="zigrow-client-4-container">
    <div class="zigrow-client-4-heading">
      <h2 class="no-theme-size zigrow-client-4-title">What Our Clients Say</h2>

      <p class="zigrow-client-4-description">
        We value every customer experience. See how our solutions are helping
        businesses work smarter and achieve better results.
      </p>
    </div>

    <div class="zigrow-client-4-testimonials">
      <div class="zigrow-client-4-column ">
        <div
          class="zigrow-client-4-card"  data-zg-editable="surface"
      
        
          <p class="zigrow-client-4-review">
            The entire process was simple and well organised. We found
            everything we needed quickly, and the final result made our daily
            work much easier.
          </p>

          <div class="zigrow-client-4-author">
            <h3 class="zigrow-client-4-name">Sara Mehta</h3>
            <p class="zigrow-client-4-role">Content Consultant</p>
          </div>
        </div>
      </div>

      <div class="zigrow-client-4-column ">
        <div
          class="zigrow-client-4-card"  data-zg-editable="surface"
      
        >
          <p class="zigrow-client-4-review">
            Customising the service around our business was incredibly easy.
            The experience feels professional, clear, and perfectly suited to
            our requirements.
          </p>

          <div class="zigrow-client-4-author">
            <h3 class="zigrow-client-4-name">Jason Lee</h3>
            <p class="zigrow-client-4-role">Business Owner</p>
          </div>
        </div>
      </div>

      <div class="zigrow-client-4-column ">
        <div
          class="zigrow-client-4-card"  data-zg-editable="surface"
      
        >
          <p class="zigrow-client-4-review">
            Since working with this team, we have seen a noticeable improvement
            in customer interest and engagement. It delivered exactly what we
            needed.
          </p>

          <div class="zigrow-client-4-author">
            <h3 class="zigrow-client-4-name">Amanda Roy</h3>
            <p class="zigrow-client-4-role">Marketing Manager</p>
          </div>
        </div>
      </div>

      <div class="zigrow-client-4-column ">
        <div
          class="zigrow-client-4-card"  data-zg-editable="surface"
      
        >
          <p class="zigrow-client-4-review">
            Managing our projects used to feel complicated. Now everything is
            clear, accessible, and easy for our entire team to understand.
          </p>

          <div class="zigrow-client-4-author">
            <h3 class="zigrow-client-4-name">Chris Thomas</h3>
            <p class="zigrow-client-4-role">Creative Professional</p>
          </div>
        </div>
      </div>

      <div class="zigrow-client-4-column ">
        <div
          class="zigrow-client-4-card"  data-zg-editable="surface"
      
        >
          <p class="zigrow-client-4-review">
            The reporting tools help us understand what is working and where we
            can improve. The design is modern, practical, and easy to use.
          </p>

          <div class="zigrow-client-4-author">
            <h3 class="zigrow-client-4-name">Daniel Kapoor</h3>
            <p class="zigrow-client-4-role">Business Consultant</p>
          </div>
        </div>
      </div>

      <div class="zigrow-client-4-column ">
        <div
          class="zigrow-client-4-card"  data-zg-editable="surface"
      
        >
          <p class="zigrow-client-4-review">
            We can now present our services and communicate with customers in
            one place. The solution is clean, efficient, and simple to manage.
          </p>

          <div class="zigrow-client-4-author">
            <h3 class="zigrow-client-4-name">Emily Fernandes</h3>
            <p class="zigrow-client-4-role">Small Business Owner</p>
          </div>
        </div>
      </div>
    </div>

    <div class="zigrow-client-4-divider"></div>

    <div class="zigrow-client-4-results">
      <div class="zigrow-client-4-result ">
        <div
          class="zigrow-client-4-result-inner"
      
        >
          <h3 class="zigrow-client-4-result-value">+70% Engagement</h3>

          <p class="zigrow-client-4-result-text">
            Build stronger interactions with your audience.
          </p>
        </div>
      </div>

      <div class="zigrow-client-4-result ">
        <div
          class="zigrow-client-4-result-inner"
      
        >
          <h3 class="zigrow-client-4-result-value">5x Faster Setup</h3>

          <p class="zigrow-client-4-result-text">
            Get your business ready in less time.
          </p>
        </div>
      </div>

      <div class="zigrow-client-4-result ">
        <div
          class="zigrow-client-4-result-inner"
      
        >
          <h3 class="zigrow-client-4-result-value">+80% More Leads</h3>

          <p class="zigrow-client-4-result-text">
            Turn more customer interest into enquiries.
          </p>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-client-4 {
      width: 100%;
      overflow: hidden;
      padding: 54px 0 46px;
      background: color-mix(
        in srgb,
        var(--primary-colors, #222222) 4%,
        #ffffff 96%
      );
    }

    .zigrow-client-4 .zigrow-client-4-container {
      width: min(100% - 48px, 1080px);
      margin: 0 auto;
    }

    .zigrow-client-4 .zigrow-client-4-heading {
      max-width: 560px;
      margin: 0 auto 48px;
      text-align: center;
    }

    .zigrow-client-4 .zigrow-client-4-title {
      margin: 0;
      color: var(--primary-colors, #252525);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      letter-spacing: -0.035em;
      line-height: 1.1;
    }

    .zigrow-client-4 .zigrow-client-4-description {
      max-width: 500px;
      margin: 12px auto 0;
      color: var(--secondary-colors, #747474);
      font-size: 0.94rem;
      line-height: 1.55;
    }

    .zigrow-client-4 .zigrow-client-4-testimonials {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      overflow: hidden;
      border: 1px solid rgba(30, 30, 30, 0.09);
      border-radius: 12px;
      background: #ffffff;
    }

    .zigrow-client-4 .zigrow-client-4-column {
      min-width: 0;
      border-right: 1px solid rgba(30, 30, 30, 0.09);
      border-bottom: 1px solid rgba(30, 30, 30, 0.09);
    }

    .zigrow-client-4 .zigrow-client-4-column:nth-child(3n) {
      border-right: 0;
    }

    .zigrow-client-4 .zigrow-client-4-column:nth-child(n + 4) {
      border-bottom: 0;
    }

    .zigrow-client-4 .zigrow-client-4-card {
      display: grid;
      align-content: space-between;
      min-height: 180px;
      height: 100%;
      padding: 25px 24px 21px;
      background: #ffffff;
      transition:
        background-color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-client-4 .zigrow-client-4-column:nth-child(even)
      .zigrow-client-4-card {
      background: color-mix(
        in srgb,
        var(--territory-colors, #eeeeee) 32%,
        #ffffff 68%
      );
    }

    .zigrow-client-4 .zigrow-client-4-card:hover {
      background: color-mix(
        in srgb,
        var(--primary-colors, #222222) 6%,
        #ffffff 94%
      );
    }

    .zigrow-client-4 .zigrow-client-4-review {
      margin: 0;
      color: var(--secondary-colors, #282828);
      font-size: 0.82rem;
      line-height: 1.55;
    }

    .zigrow-client-4 .zigrow-client-4-author {
      margin-top: 24px;
    }

    .zigrow-client-4 .zigrow-client-4-name {
      margin: 0;
      color: var(--primary-colors, #222222);
      font-size: 0.78rem;
      font-weight: 700;
      line-height: 1.35;
    }

    .zigrow-client-4 .zigrow-client-4-role {
      margin: 3px 0 0;
      color: var(--secondary-colors, #858585);
      font-size: 0.68rem;
      line-height: 1.4;
    }

    .zigrow-client-4 .zigrow-client-4-divider {
      width: 100%;
      height: 1px;
      margin: 52px 0 40px;
      background: rgba(30, 30, 30, 0.1);
    }

    .zigrow-client-4 .zigrow-client-4-results {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 40px;
    }

    .zigrow-client-4 .zigrow-client-4-result {
      min-width: 0;
    }

    .zigrow-client-4 .zigrow-client-4-result-inner {
      background: transparent;
      text-align: center;
    }

    .zigrow-client-4 .zigrow-client-4-result-value {
      margin: 0;
      color: var(--primary-colors, #303030);
      font-size: clamp(1.5rem, 3vw, 2.1rem);
      font-weight: 700;
      letter-spacing: -0.035em;
      line-height: 1.15;
    }

    .zigrow-client-4 .zigrow-client-4-result-text {
      margin: 7px 0 0;
      color: var(--secondary-colors, #777777);
      font-size: 0.8rem;
      line-height: 1.45;
    }

    @media (max-width: 900px) {
      .zigrow-client-4 .zigrow-client-4-testimonials {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .zigrow-client-4 .zigrow-client-4-column {
        border-right: 1px solid rgba(30, 30, 30, 0.09);
        border-bottom: 1px solid rgba(30, 30, 30, 0.09);
      }

      .zigrow-client-4 .zigrow-client-4-column:nth-child(3n) {
        border-right: 1px solid rgba(30, 30, 30, 0.09);
      }

      .zigrow-client-4 .zigrow-client-4-column:nth-child(2n) {
        border-right: 0;
      }

      .zigrow-client-4 .zigrow-client-4-column:nth-child(n + 4) {
        border-bottom: 1px solid rgba(30, 30, 30, 0.09);
      }

      .zigrow-client-4 .zigrow-client-4-column:nth-child(n + 5) {
        border-bottom: 0;
      }
    }

    @media (max-width: 650px) {
      .zigrow-client-4 {
        padding: 48px 0 40px;
      }

      .zigrow-client-4 .zigrow-client-4-container {
        width: min(100% - 32px, 1080px);
      }

      .zigrow-client-4 .zigrow-client-4-heading {
        margin-bottom: 36px;
      }

      .zigrow-client-4 .zigrow-client-4-testimonials {
        grid-template-columns: 1fr;
      }

      .zigrow-client-4 .zigrow-client-4-column,
      .zigrow-client-4 .zigrow-client-4-column:nth-child(2n),
      .zigrow-client-4 .zigrow-client-4-column:nth-child(3n),
      .zigrow-client-4 .zigrow-client-4-column:nth-child(n + 4),
      .zigrow-client-4 .zigrow-client-4-column:nth-child(n + 5) {
        border-right: 0;
        border-bottom: 1px solid rgba(30, 30, 30, 0.09);
      }

      .zigrow-client-4 .zigrow-client-4-column:last-child {
        border-bottom: 0;
      }

      .zigrow-client-4 .zigrow-client-4-card {
        min-height: 160px;
      }

      .zigrow-client-4 .zigrow-client-4-divider {
        margin: 42px 0 34px;
      }

      .zigrow-client-4 .zigrow-client-4-results {
        grid-template-columns: 1fr;
        gap: 30px;
      }
    }

    @media (max-width: 420px) {
      .zigrow-client-4 .zigrow-client-4-container {
        width: min(100% - 24px, 1080px);
      }

      .zigrow-client-4 .zigrow-client-4-title {
        font-size: 2.1rem;
      }

      .zigrow-client-4 .zigrow-client-4-description {
        font-size: 0.88rem;
      }

      .zigrow-client-4 .zigrow-client-4-card {
        padding: 22px 19px 19px;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-client-5", {
  name: "Client-5",
  category: "client",
  image:
    "https://i.postimg.cc/sgfc5VGq/Screenshot-2026-07-22-162538.png",
  html: `
<section
  id="zigrow-client-5"
  class="zigrow-client-5 text-white"
  data-section="zigrow-client-5"
>
  <span class="zigrow-client-5-overlay" aria-hidden="true"></span>

  <div class="container">
    <div class="zigrow-client-5-heading">
      <h2 class="no-theme-size zigrow-client-5-title">
        What our trusted <span>clients say</span>
      </h2>

      <p class="zigrow-client-5-description">
        Trusted by growing businesses for reliable service, practical support,
        and consistently positive results.
      </p>
    </div>

    <div class="zigrow-client-5-grid">
      <div class="zigrow-client-5-card-item ">
        <div
          class="zigrow-client-5-card"
      
        >
          <div class="zigrow-client-5-profile">
            <div class="zigrow-client-5-avatar zigrow-client-5-media-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=240&amp;q=80"
                alt="Ananya Sharma"
              />
            </div>

            <div class="zigrow-client-5-profile-content">
              <h3 class="zigrow-client-5-name">Ananya Sharma</h3>
              <p class="zigrow-client-5-role">Operations Manager</p>
            </div>
          </div>

          <blockquote class="zigrow-client-5-quote">
            <p>
              The team helped us simplify our daily operations while improving
              response times. A reliable partner for consistent business
              support.
            </p>
          </blockquote>
        </div>
      </div>

      <div class="zigrow-client-5-card-item ">
        <div
          class="zigrow-client-5-card"
      
        >
          <div class="zigrow-client-5-profile">
            <div class="zigrow-client-5-avatar zigrow-client-5-media-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=240&amp;q=80"
                alt="Rohan Mehta"
              />
            </div>

            <div class="zigrow-client-5-profile-content">
              <h3 class="zigrow-client-5-name">Rohan Mehta</h3>
              <p class="zigrow-client-5-role">Business Head</p>
            </div>
          </div>

          <blockquote class="zigrow-client-5-quote">
            <p>
              Highly recommended for businesses looking for thoughtful
              guidance, dependable communication, and solutions that deliver
              measurable value.
            </p>
          </blockquote>
        </div>
      </div>

      <div class="zigrow-client-5-card-item ">
        <div
          class="zigrow-client-5-card"
      
        >
          <div class="zigrow-client-5-profile">
            <div class="zigrow-client-5-avatar zigrow-client-5-media-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=240&amp;q=80"
                alt="Arjun Kapoor"
              />
            </div>

            <div class="zigrow-client-5-profile-content">
              <h3 class="zigrow-client-5-name">Arjun Kapoor</h3>
              <p class="zigrow-client-5-role">Growth Advisor</p>
            </div>
          </div>

          <blockquote class="zigrow-client-5-quote">
            <p>
              Their structured approach helped us improve efficiency and move
              forward with greater clarity. The entire experience was smooth
              and professional.
            </p>
          </blockquote>
        </div>
      </div>

      <div class="zigrow-client-5-card-item ">
        <div
          class="zigrow-client-5-card"
      
        >
          <div class="zigrow-client-5-profile">
            <div class="zigrow-client-5-avatar zigrow-client-5-media-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=240&amp;q=80"
                alt="Meera Verma"
              />
            </div>

            <div class="zigrow-client-5-profile-content">
              <h3 class="zigrow-client-5-name">Meera Verma</h3>
              <p class="zigrow-client-5-role">Project Lead</p>
            </div>
          </div>

          <blockquote class="zigrow-client-5-quote">
            <p>
              It is refreshing to work with a team that understands our goals,
              communicates clearly, and remains focused on quality throughout.
            </p>
          </blockquote>
        </div>
      </div>

      <div class="zigrow-client-5-card-item ">
        <div
          class="zigrow-client-5-card"
      
        >
          <div class="zigrow-client-5-profile">
            <div class="zigrow-client-5-avatar zigrow-client-5-media-center">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=240&amp;q=80"
                alt="Kabir Singh"
              />
            </div>

            <div class="zigrow-client-5-profile-content">
              <h3 class="zigrow-client-5-name">Kabir Singh</h3>
              <p class="zigrow-client-5-role">Service Manager</p>
            </div>
          </div>

          <blockquote class="zigrow-client-5-quote">
            <p>
              Professional service, timely delivery, and dependable assistance
              in one seamless experience. We are extremely pleased with the
              results.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-client-5 {
      position: relative;
      width: 100%;
      min-height: 660px;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 6.5rem) 0;
      background-color: #17231d;
      background-image: url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .zigrow-client-5 .container {
      position: relative;
      z-index: 3;
    }

    .zigrow-client-5 .zigrow-client-5-media-center {
      text-align: center;
    }

    .zigrow-client-5 .zigrow-client-5-overlay {
      position: absolute;
      inset: 0;
      z-index: 2;
      background:
        linear-gradient(
          180deg,
          rgba(13, 26, 19, 0.72) 0%,
          rgba(13, 26, 19, 0.56) 45%,
          rgba(13, 26, 19, 0.74) 100%
        ),
        color-mix(
          in srgb,
          var(--territory-colors, #1f3528) 28%,
          transparent
        );
      pointer-events: none;
    }

    .zigrow-client-5 .zigrow-client-5-heading {
      max-width: 720px;
      margin: 0 auto clamp(2.7rem, 5vw, 4rem);
      text-align: center;
    }

    .zigrow-client-5 .zigrow-client-5-title {
      margin: 0;
      color: #ffffff;
      font-size: clamp(2.25rem, 4.3vw, 4rem);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.04em;
    }

    .zigrow-client-5 .zigrow-client-5-title span {
      color: var(--primary-colors, #69d13f);
    }

    .zigrow-client-5 .zigrow-client-5-description {
      max-width: 560px;
      margin: 0.9rem auto 0;
      color: rgba(255, 255, 255, 0.82);
      font-size: clamp(0.9rem, 1.2vw, 1.02rem);
      line-height: 1.55;
    }

    .zigrow-client-5 .zigrow-client-5-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: clamp(0.85rem, 1.5vw, 1.3rem);
      align-items: stretch;
    }

    .zigrow-client-5 .zigrow-client-5-card-item {
      position: relative;
      min-width: 0;
    }

    .zigrow-client-5
      .zigrow-client-5-card-item:not(:last-child)::after {
      content: "";
      position: absolute;
      top: 29%;
      right: calc(clamp(0.85rem, 1.5vw, 1.3rem) / -2 - 0.36rem);
      z-index: 3;
      width: 0.72rem;
      height: 48%;
      border-radius: 999px;
      background: rgba(9, 22, 15, 0.8);
      pointer-events: none;
    }

    .zigrow-client-5 .zigrow-client-5-card {
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
      gap: clamp(2.5rem, 5vw, 5.5rem);
      height: 100%;
      min-height: 340px;
      padding: clamp(1.1rem, 1.8vw, 1.45rem);
      border: 1px solid rgba(20, 30, 24, 0.08);
      border-radius: 0.75rem;
      background: #ffffff;
      box-shadow: 0 1.3rem 3rem rgba(6, 18, 10, 0.18);
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    }

    .zigrow-client-5 .zigrow-client-5-card:hover {
      transform: translateY(-0.45rem);
      box-shadow: 0 1.8rem 3.5rem rgba(6, 18, 10, 0.26);
    }

    .zigrow-client-5 .zigrow-client-5-profile {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 0.85rem;
      align-items: center;
    }

    .zigrow-client-5 .zigrow-client-5-avatar {
      width: 3.1rem;
      height: 3.1rem;
      overflow: hidden;
      border: 2px solid
        color-mix(
          in srgb,
          var(--primary-colors, #69d13f) 25%,
          white
        );
      border-radius: 50%;
      background: var(--territory-colors, #e5eee7);
    }

    .zigrow-client-5 .zigrow-client-5-avatar img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .zigrow-client-5 .zigrow-client-5-profile-content {
      min-width: 0;
    }

    .zigrow-client-5 .zigrow-client-5-name {
      margin: 0;
      color: #242824;
      font-size: clamp(0.9rem, 1.15vw, 1.05rem);
      font-weight: 700;
      line-height: 1.25;
    }

    .zigrow-client-5 .zigrow-client-5-role {
      margin: 0.25rem 0 0;
      color: var(--secondary-colors, #777c78);
      font-size: clamp(0.72rem, 0.9vw, 0.82rem);
      line-height: 1.35;
    }

    .zigrow-client-5 .zigrow-client-5-quote {
      display: grid;
      align-content: end;
      margin: 0;
    }

    .zigrow-client-5 .zigrow-client-5-quote p {
      margin: 0;
      color: var(--secondary-colors, #636963);
      font-size: clamp(0.84rem, 1vw, 0.94rem);
      line-height: 1.65;
    }

    @media (max-width: 1199px) {
      .zigrow-client-5 .zigrow-client-5-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .zigrow-client-5
        .zigrow-client-5-card-item:not(:last-child)::after {
        display: none;
      }
    }

    @media (max-width: 991px) {
      .zigrow-client-5 {
        min-height: auto;
      }

      .zigrow-client-5 .zigrow-client-5-card {
        min-height: 300px;
      }
    }

    @media (max-width: 767px) {
      .zigrow-client-5 {
        padding: 3rem 0;
      }

      .zigrow-client-5 .zigrow-client-5-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .zigrow-client-5 .zigrow-client-5-card {
        gap: 3rem;
      }
    }

    @media (max-width: 575px) {
      .zigrow-client-5 .zigrow-client-5-grid {
        grid-template-columns: 1fr;
      }

      .zigrow-client-5 .zigrow-client-5-card {
        min-height: 250px;
      }
    }

    @media (max-width: 479px) {
      .zigrow-client-5 .zigrow-client-5-title {
        font-size: clamp(2.2rem, 11vw, 3.1rem);
      }

      .zigrow-client-5 .zigrow-client-5-card {
        padding: 1.2rem;
      }
    }
  

    /* Custom utility for solid dark section backgrounds */
    .zigrow-client-5.text-white {
      color: #ffffff;
    }
  </style>
</section>
`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-client-6", {
  name: "Client-6",
  category: "client",
  image:
    "https://i.postimg.cc/VLWgSSvC/Screenshot-2026-07-22-162558.png",

  html: `
<section
  id="zigrow-client-6"
  data-section="zigrow-client-6"
  class="zigrow-client-6"
>
  <div class="zigrow-client-6-container">
    <div class="zigrow-client-6-heading">
      <p class="zigrow-client-6-eyebrow">Trusted Technology Partners</p>

      <h2 class="no-theme-size zigrow-client-6-title">
        Technologies & Partners that help businesses grow
      </h2>

      <p class="zigrow-client-6-description">
        We collaborate with reliable platforms, innovative tools, and trusted
        service partners to build stronger digital experiences for businesses
        across industries.
      </p>
    </div>

    <div class="zigrow-client-6-network">
      <div class="zigrow-client-6-arcs" aria-hidden="true">
        <span class="zigrow-client-6-arc zigrow-client-6-arc-one"></span>
        <span class="zigrow-client-6-arc zigrow-client-6-arc-two"></span>
        <span class="zigrow-client-6-arc zigrow-client-6-arc-three"></span>
        <span class="zigrow-client-6-arc zigrow-client-6-arc-four"></span>
      </div>

   <div class="zigrow-client-6-center-mark">
  <div class="zigrow-client-6-center-badge">
    <i class="bi bi-flower1" data-icon="flower1"></i>
  </div>
</div>

      <div class="zigrow-client-6-logo zigrow-client-6-logo-1 ">
        <div
          class="zigrow-client-6-logo-card"
      
        >
          <span>Nexa</span>
        </div>
      </div>

      <div class="zigrow-client-6-logo zigrow-client-6-logo-2 ">
        <div
          class="zigrow-client-6-logo-card"
      
        >
          <span>CoreGrid</span>
        </div>
      </div>

      <div class="zigrow-client-6-logo zigrow-client-6-logo-3 ">
        <div
          class="zigrow-client-6-logo-card"
      
        >
          <span>BluePeak</span>
        </div>
      </div>

      <div class="zigrow-client-6-logo zigrow-client-6-logo-4 ">
        <div
          class="zigrow-client-6-logo-card"
      
        >
          <span>MetaWorks</span>
        </div>
      </div>

      <div class="zigrow-client-6-logo zigrow-client-6-logo-5 ">
        <div
          class="zigrow-client-6-logo-card"
      
        >
          <span>Vertex</span>
        </div>
      </div>

      <div class="zigrow-client-6-logo zigrow-client-6-logo-6 ">
        <div
          class="zigrow-client-6-logo-card"
      
        >
          <span>CloudArc</span>
        </div>
      </div>

      <div class="zigrow-client-6-logo zigrow-client-6-logo-7 ">
        <div
          class="zigrow-client-6-logo-card"
      
        >
          <span>InnovaX</span>
        </div>
      </div>

      <div class="zigrow-client-6-logo zigrow-client-6-logo-8 ">
        <div
          class="zigrow-client-6-logo-card"
      
        >
          <span>Zenbyte</span>
        </div>
      </div>

      <div class="zigrow-client-6-logo zigrow-client-6-logo-9 ">
        <div
          class="zigrow-client-6-logo-card"
      
        >
          <span>LiftLab</span>
        </div>
      </div>

      <div class="zigrow-client-6-logo zigrow-client-6-logo-10 ">
        <div
          class="zigrow-client-6-logo-card"
      
        >
          <span>Northstar</span>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-client-6 {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding: 58px 0 0;
      background:
        radial-gradient(
          circle at 50% 0%,
          color-mix(in srgb, var(--primary-colors, #7f31b4) 16%, #ffffff 84%) 0%,
          color-mix(in srgb, var(--primary-colors, #7f31b4) 8%, #ffffff 92%) 38%,
          #ffffff 78%
        ),
        linear-gradient(
          180deg,
          color-mix(in srgb, var(--primary-colors, #7f31b4) 10%, #ffffff 90%) 0%,
          #ffffff 100%
        );
    }

    .zigrow-client-6 .zigrow-client-6-container {
      width: min(100% - 48px, 1160px);
      margin: 0 auto;
    }

    .zigrow-client-6 .zigrow-client-6-heading {
      max-width: 760px;
      margin: 0 auto;
      text-align: center;
    }

    .zigrow-client-6 .zigrow-client-6-eyebrow {
      margin: 0 0 10px;
      color: var(--primary-colors, #7f31b4);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      line-height: 1.4;
    }

    .zigrow-client-6 .zigrow-client-6-title {
      margin: 0;
      color: color-mix(
        in srgb,
        var(--primary-colors, #7f31b4) 78%,
        #000000 22%
      );
      font-size: clamp(2rem, 4vw, 3.4rem);
      font-weight: 700;
      letter-spacing: -0.04em;
      line-height: 1.08;
    }

    .zigrow-client-6 .zigrow-client-6-description {
      max-width: 700px;
      margin: 14px auto 0;
      color: var(--secondary-colors, #6d6874);
      font-size: 0.92rem;
      line-height: 1.6;
    }

    .zigrow-client-6 .zigrow-client-6-network {
      position: relative;
      min-height: 650px;
      margin-top: 36px;
      overflow: hidden;
    }

    .zigrow-client-6 .zigrow-client-6-arcs {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .zigrow-client-6 .zigrow-client-6-arc {
      position: absolute;
      left: 50%;
      border: 1.5px solid color-mix(
        in srgb,
        var(--primary-colors, #7f31b4) 52%,
        #ffffff 48%
      );
      border-bottom: 0;
      border-radius: 999px 999px 0 0;
      transform: translateX(-50%);
      opacity: 0.72;
    }

    .zigrow-client-6 .zigrow-client-6-arc-one {
      bottom: -32px;
      width: min(1180px, 108%);
      height: 530px;
    }

    .zigrow-client-6 .zigrow-client-6-arc-two {
      bottom: -22px;
      width: min(930px, 86%);
      height: 410px;
    }

    .zigrow-client-6 .zigrow-client-6-arc-three {
      bottom: -12px;
      width: min(700px, 65%);
      height: 295px;
    }

    .zigrow-client-6 .zigrow-client-6-arc-four {
      bottom: -6px;
      width: min(470px, 44%);
      height: 188px;
    }

    .zigrow-client-6 .zigrow-client-6-center-mark {
      position: absolute;
      bottom: 24px;
      left: 50%;
      z-index: 4;
      transform: translateX(-50%);
    }

    .zigrow-client-6 .zigrow-client-6-center-badge {
      display: grid;
      width: 84px;
      height: 84px;
      place-items: center;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 16px 32px rgba(73, 33, 102, 0.12);
    }

  .zigrow-client-6 .zigrow-client-6-center-badge > i {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  color: var(--primary-colors, #7f31b4);
  font-size: 2rem;
  line-height: 1;
}

    .zigrow-client-6 .zigrow-client-6-logo {
      position: absolute;
      z-index: 3;
    }

    .zigrow-client-6 .zigrow-client-6-logo-card {
      display: grid;
      min-width: 92px;
      min-height: 92px;
      padding: 14px 18px;
      place-items: center;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 10px 24px rgba(73, 33, 102, 0.08);
      text-align: center;
    }

    .zigrow-client-6 .zigrow-client-6-logo-card span {
      color: color-mix(
        in srgb,
        var(--primary-colors, #7f31b4) 80%,
        #222222 20%
      );
      font-size: 0.82rem;
      font-weight: 700;
      line-height: 1.25;
    }

    .zigrow-client-6 .zigrow-client-6-logo-1 {
      top: 44px;
      left: 10%;
    }

    .zigrow-client-6 .zigrow-client-6-logo-2 {
      top: 24px;
      left: 30%;
    }

    .zigrow-client-6 .zigrow-client-6-logo-3 {
      top: 14px;
      right: 26%;
    }

    .zigrow-client-6 .zigrow-client-6-logo-4 {
      top: 86px;
      right: 10%;
    }

    .zigrow-client-6 .zigrow-client-6-logo-5 {
      top: 182px;
      left: 6%;
    }

    .zigrow-client-6 .zigrow-client-6-logo-6 {
      top: 156px;
      left: 25%;
    }

    .zigrow-client-6 .zigrow-client-6-logo-7 {
      top: 136px;
      right: 28%;
    }

    .zigrow-client-6 .zigrow-client-6-logo-8 {
      top: 212px;
      right: 8%;
    }

    .zigrow-client-6 .zigrow-client-6-logo-9 {
      top: 252px;
      left: 22%;
    }

    .zigrow-client-6 .zigrow-client-6-logo-10 {
      top: 270px;
      right: 20%;
    }

    .zigrow-client-6 .zigrow-client-6-logo-card:hover {
      transform: translateY(-4px);
      transition: transform 0.25s ease;
    }

    @media (max-width: 991px) {
      .zigrow-client-6 {
        padding-top: 52px;
      }

      .zigrow-client-6 .zigrow-client-6-network {
        min-height: 710px;
      }

      .zigrow-client-6 .zigrow-client-6-logo-card {
        min-width: 84px;
        min-height: 84px;
        padding: 12px 14px;
      }

      .zigrow-client-6 .zigrow-client-6-logo-card span {
        font-size: 0.75rem;
      }

      .zigrow-client-6 .zigrow-client-6-logo-1 {
        left: 3%;
      }

      .zigrow-client-6 .zigrow-client-6-logo-2 {
        left: 23%;
      }

      .zigrow-client-6 .zigrow-client-6-logo-3 {
        right: 22%;
      }

      .zigrow-client-6 .zigrow-client-6-logo-4 {
        right: 2%;
      }

      .zigrow-client-6 .zigrow-client-6-logo-5 {
        left: 1%;
      }

      .zigrow-client-6 .zigrow-client-6-logo-6 {
        left: 18%;
      }

      .zigrow-client-6 .zigrow-client-6-logo-7 {
        right: 24%;
      }

      .zigrow-client-6 .zigrow-client-6-logo-8 {
        right: 1%;
      }

      .zigrow-client-6 .zigrow-client-6-logo-9 {
        left: 17%;
      }

      .zigrow-client-6 .zigrow-client-6-logo-10 {
        right: 15%;
      }
    }

    @media (max-width: 767px) {
      .zigrow-client-6 .zigrow-client-6-container {
        width: min(100% - 32px, 1160px);
      }

      .zigrow-client-6 .zigrow-client-6-network {
        min-height: auto;
        padding-bottom: 28px;
      }

      .zigrow-client-6 .zigrow-client-6-arcs,
      .zigrow-client-6 .zigrow-client-6-center-mark {
        display: none;
      }

      .zigrow-client-6 .zigrow-client-6-network {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
        margin-top: 34px;
      }

      .zigrow-client-6 .zigrow-client-6-logo {
        position: relative;
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
      }

      .zigrow-client-6 .zigrow-client-6-logo-card {
        width: 100%;
        min-width: 0;
        border-radius: 20px;
      }
    }

    @media (max-width: 480px) {
      .zigrow-client-6 .zigrow-client-6-container {
        width: min(100% - 24px, 1160px);
      }

      .zigrow-client-6 .zigrow-client-6-title {
        font-size: 2.15rem;
      }

      .zigrow-client-6 .zigrow-client-6-description {
        font-size: 0.88rem;
      }

      .zigrow-client-6 .zigrow-client-6-network {
        grid-template-columns: 1fr;
      }

      .zigrow-client-6 .zigrow-client-6-logo-card {
        min-height: 78px;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-client-7", {
    name: "Client-7",
    category: "client",
    image: "https://i.postimg.cc/hj1rpGDm/team-4.png",
    html: `    <section id="zigrow-client-7" data-section="zigrow-client-7" class="zigrow-client-7 py-6">
      <div class="container">
        <div class="brand-text row g-4">
          <div class="brand-heading col-12 col-md-7">
            <h6>our partners</h6>
            <h1>Brands & companies <br />we worked width.</h1>
          </div>
          <p class="col-12 col-md-5">
            From startups to established enterprises, trust our commitment we’ve
            collaborated with brands that trust our commitment to quality and
            trust our commitment innovation.
          </p>
        </div>

        <!-- ✅ Bootstrap grid for logos -->
        <div class="logo-box">
          <div class="row g-4 logo-box-container">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
              <div class="logo-img-box">
                <img  src="/builder/img/zigrow-logo-images/1.svg" alt="logoipsum" />
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
              <div class="logo-img-box">
               <img  src="/builder/img/zigrow-logo-images/2.svg" alt="logoipsum" />
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
              <div class="logo-img-box">
              <img  src="/builder/img/zigrow-logo-images/1.svg" alt="logoipsum" />
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
              <div class="logo-img-box">
               <img  src="/builder/img/zigrow-logo-images/2.svg" alt="logoipsum" />
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
              <div class="logo-img-box">
             <img  src="/builder/img/zigrow-logo-images/1.svg" alt="logoipsum" />
              </div>
            </div>
          </div>
        </div>
      </div>
          <style>
      .py-6 {
        padding: 3rem 0;
      }
         .zigrow-client-7 {
         background: #ffffff}

      .zigrow-client-7 .brand-text {
        align-items: center;
      }
      .zigrow-client-7 .brand-text .brand-heading h6 {
        text-transform: uppercase;
        color: var(--primary-colors, #facc15);
      }
      .zigrow-client-7 .brand-text .brand-heading h1 {
        font-size: 2.8rem;
        font-weight: 700;
      }
      .zigrow-client-7 .brand-text p {
        color: var(--secondary-colors, gray);
      }

      /* ✅ Removed flex from .logo-box; only spacing now */
      .zigrow-client-7 .logo-box {
        padding-top: 3rem;
        padding-bottom: 1rem;
      }
      .zigrow-client-7 .logo-box-container {
        justify-content: space-between;
      }

      /* ✅ New wrapper for each logo */
      .zigrow-client-7 .logo-img-box {
        text-align: center;
        max-width: 200px;
      }

      .zigrow-client-7 .logo-img-box img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        cursor: pointer;
        /* display: inline-block; */
      }
    </style>
    </section>`,
});

// Faq Section Blocks
Vvveb.Blocks.add("bootstrap4/zigrow-faq-1", {
    name: "Faq-1",
    category: "faq",
    image: "https://i.postimg.cc/FRb4p0k3/faq.png",
    html: `    <section id="zigrow-faq-1" data-section="zigrow-faq-1" class="zigrow-faq-1 py-6">
      <div class="container">
        <div class="row align-items-start g-5">
          <div class="col-lg-5">
            <div class="faq-label">
              <span class="faq-label-dot"></span>
              <span>+ FAQ</span>
            </div>
 
            <h2 class="no-theme-size faq-title">
              Frequently Asked
              <span>Questions</span>
            </h2>

            <p class="faq-text">
              Get all the details about our product and pricing. Still have
              questions? Our team is always here to help.
            </p>
          </div>

          <div class="col-lg-7">
            <div class="faq-panel">
              <div class="accordion faq-accordion" id="faqAccordion1">
                <div class="accordion-item">
                  <h2 class="no-theme-size accordion-header" id="faqHeading1-1">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-1" aria-expanded="true" aria-controls="faq1-1">
                      Do I Need Any Technical Skills To Use The Platform?
                    </button>
                  </h2>
                  <div id="faq1-1" class="accordion-collapse collapse show" aria-labelledby="faqHeading1-1" data-bs-parent="#faqAccordion1">
                    <div class="accordion-body">
                      <span>
                        Not at all. Everything is designed to be beginner-friendly. You can set up your workspace, launch
                        projects, and manage your clients without any coding experience.
                      </span>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="no-theme-size accordion-header" id="faqHeading1-2">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-2" aria-expanded="false" aria-controls="faq1-2">
                      How Many Projects Can I Create?
                    </button>
                  </h2>
                  <div id="faq1-2" class="accordion-collapse collapse" aria-labelledby="faqHeading1-2" data-bs-parent="#faqAccordion1">
                    <div class="accordion-body">
                      <span>You can create multiple projects based on your plan. Each project can have its own settings, assets, and analytics.</span>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="no-theme-size accordion-header" id="faqHeading1-3">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-3" aria-expanded="false" aria-controls="faq1-3">
                      What Happens If I Exceed My Usage Limits?
                    </button>
                  </h2>
                  <div id="faq1-3" class="accordion-collapse collapse" aria-labelledby="faqHeading1-3" data-bs-parent="#faqAccordion1">
                    <div class="accordion-body">
                      <span>We’ll notify you before you reach your limit and offer a smooth upgrade path, so your projects continue running without interruption.</span>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="no-theme-size accordion-header" id="faqHeading1-4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-4" aria-expanded="false" aria-controls="faq1-4">
                      Can I Collaborate With My Team?
                    </button>
                  </h2>
                  <div id="faq1-4" class="accordion-collapse collapse" aria-labelledby="faqHeading1-4" data-bs-parent="#faqAccordion1">
                    <div class="accordion-body">
                      <span>Yes. Invite teammates, assign roles, and collaborate on projects in real time with clear permissions.</span>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="no-theme-size accordion-header" id="faqHeading1-5">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-5" aria-expanded="false" aria-controls="faq1-5">
                      Is My Data Secure?
                    </button>
                  </h2>
                  <div id="faq1-5" class="accordion-collapse collapse" aria-labelledby="faqHeading1-5" data-bs-parent="#faqAccordion1">
                    <div class="accordion-body">
                      <span>We use industry-standard encryption and regular backups to keep your data safe and secure at all times.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
         <style>
      .py-6{
        padding: 3rem 0;
      }

      .zigrow-faq-1 {
        padding-block: 4rem;
        background: radial-gradient(circle at top left, #f9fafb 0, #ffffff 50%);
      }

      .zigrow-faq-1 .faq-label {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.25rem 0.9rem;
        border-radius: 999px;
        background: #ffffff;
        box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08);
        font-size: 0.82rem;
        font-weight: 600;
        margin-bottom: 1.75rem;
      }

      .zigrow-faq-1 .faq-label-dot {
        width: 10px;
        height: 10px;
        border-radius: 999px;
        background: var(--primary-colors, #22c55e);
        box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.25);
      }

      .zigrow-faq-1 .faq-label span:last-child {
        color: #020617;
      }

      .zigrow-faq-1 .faq-title {
        font-size: clamp(2rem, 4vw, 2.8rem);
        font-weight: 900;
        color: #020617;
        line-height: 1.05;
        margin-bottom: 1rem;
      }

      .zigrow-faq-1 .faq-title span {
        display: block;
        color: var(--secondary-colors, #6b7280);
        font-weight: 800;
      }

      .zigrow-faq-1 .faq-text {
        max-width: 380px;
        font-size: 0.96rem;
        color: var(--secondary-colors, #6b7280);
        line-height: 1.7;
      }

      .zigrow-faq-1 .faq-panel {
        max-width: 640px;
        margin-left: auto;
      }

      .zigrow-faq-1 .faq-accordion {
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
      }

      .zigrow-faq-1 .accordion-item {
        border-radius: 22px;
        border: 1px solid #eef1f4;
        background: #ffffff;
        box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
        overflow: hidden;
      }

      .zigrow-faq-1 .accordion-button {
        background: #ffffff;
        color: #020617;
        font-size: 1.02rem;
        font-weight: 800;
        padding: 1.1rem 1.4rem;
        box-shadow: none;
      }

      .zigrow-faq-1 .accordion-button:not(.collapsed) {
        background: var(--primary-colors, #e9f9ee);
        color: #fff;
      }

      .zigrow-faq-1 .accordion-button:focus {
        box-shadow: none;
        border-color: rgba(34, 197, 94, 0.4);
      }

      .zigrow-faq-1 .accordion-button::after {
        width: 34px;
        height: 34px;
        border-radius: 999px;
        background-color: #ffffff;
        background-position: center;
        border: 2px solid var(--territory-colors, #0f172a);
        box-shadow: 0 2px 10px rgba(34, 197, 94, 0.25);
      }

      .zigrow-faq-1 .accordion-body {
        padding: 0 1.4rem 1.2rem;
        font-size: 0.94rem;
        color: var(--secondary-colors, #6b7280);
        line-height: 1.7;
      }

      @media (max-width: 991.98px) {
        .zigrow-faq-1 .faq-panel {
          margin-top: 2.5rem;
          margin-left: 0;
        }
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-faq-2", {
    name: "Faq-2",
    category: "faq",
    image: "https://i.postimg.cc/MKcWPgc7/faq1.png",
    html: `
<section
  class="zigrow-faq-2 py-6"
  id="zigrow-faq-2"
  data-section="zigrow-faq-2"
>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <header class="zigrow-faq-2__header">
          <h2 class="no-theme-size zigrow-faq-2__title">Commonly Asked Questions</h2>
          <p class="zigrow-faq-2__subtitle">I am here to help!</p>
        </header>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="accordion zigrow-faq-2__list" id="faqAccordion2">
          <div class="accordion-item">
            <h2 class="no-theme-size accordion-header" id="faqHeading2-1">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-1" aria-expanded="false" aria-controls="faq2-1">
                How often should I exercise?
              </button>
            </h2>
            <div id="faq2-1" class="accordion-collapse collapse" aria-labelledby="faqHeading2-1" data-bs-parent="#faqAccordion2">
              <div class="accordion-body">
          <span>
            
              Most people do well with some form of movement every day and 3–5 focused workouts per week. Always adjust based on your energy, schedule, and recovery.
          </span>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="no-theme-size accordion-header" id="faqHeading2-2">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-2" aria-expanded="false" aria-controls="faq2-2">
                What's the best workout routine for weight loss?
              </button>
            </h2>
            <div id="faq2-2" class="accordion-collapse collapse" aria-labelledby="faqHeading2-2" data-bs-parent="#faqAccordion2">
              <div class="accordion-body">
                <span>A mix of strength training and light-to-moderate cardio is ideal. Strength work keeps muscle while cardio increases calorie burn and heart health.</span>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="no-theme-size accordion-header" id="faqHeading2-3">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-3" aria-expanded="false" aria-controls="faq2-3">
                What should I eat before and after a workout?
              </button>
            </h2>
            <div id="faq2-3" class="accordion-collapse collapse" aria-labelledby="faqHeading2-3" data-bs-parent="#faqAccordion2">
              <div class="accordion-body">
                <span>Before training, focus on light carbs and a little protein. Afterward, combine protein with carbs to support recovery and refill your energy stores.</span>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="no-theme-size accordion-header" id="faqHeading2-4">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-4" aria-expanded="false" aria-controls="faq2-4">
                How can I build muscle effectively?
              </button>
            </h2>
            <div id="faq2-4" class="accordion-collapse collapse" aria-labelledby="faqHeading2-4" data-bs-parent="#faqAccordion2">
              <div class="accordion-body">
                <span>Aim for progressive overload (gradually lifting heavier or doing more reps), eat enough protein, and allow time for rest and sleep.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-faq-2 {
      background-color: #ffffff;
    
      color: #111827;
    }
    .py-6 {
      padding: 3rem 0;
    }

    .zigrow-faq-2 .zigrow-faq-2__header {
      margin-bottom: 2rem;
    }

    .zigrow-faq-2 .zigrow-faq-2__title {
      margin: 0 0 0.4rem;
      font-size: 1.7rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }

    .zigrow-faq-2 .zigrow-faq-2__subtitle {
      margin: 0;
      font-size: 0.95rem;
      color: #6b7280;
    }

    .zigrow-faq-2 .zigrow-faq-2__list {
      border-top: 1px solid #e5e7eb;
    }

    .zigrow-faq-2 .accordion-item {
      border: 0;
      border-bottom: 1px solid #e5e7eb;
      border-radius: 0;
      background: transparent;
    }

    .zigrow-faq-2 .accordion-button {
      background: transparent;
      color: #111827;
      padding: 0.9rem 0;
      font-size: 0.95rem;
      font-weight: 600;
      box-shadow: none;
    }

    .zigrow-faq-2 .accordion-button:not(.collapsed) {
      background: transparent;
      color: #111827;
    }

    .zigrow-faq-2 .accordion-button:focus {
      box-shadow: none;
    }

    .zigrow-faq-2 .accordion-button::after {
      transform-origin: center;
    }

    .zigrow-faq-2 .accordion-body {
      padding: 0 0 0.85rem;
      font-size: 0.9rem;
      color: #4b5563;
    }

    @media (max-width: 767.98px) {
      .zigrow-faq-2 {
        padding: 3rem 0;
      }

      .zigrow-faq-2 .zigrow-faq-2__title {
        font-size: 1.35rem;
      }

      .zigrow-faq-2 .accordion-button {
        font-size: 0.9rem;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-faq-3", {
    name: "Faq-3",
    category: "faq",
    image: "https://i.postimg.cc/BQ8qYR8c/faq2.png",
    html: `
<section
  class="zigrow-faq-3 py-6"
  data-section="zigrow-faq-3"
  id="zigrow-faq-3"
>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <header class="zigrow-faq-3__header">
          <h2 class="no-theme-size zigrow-faq-3__title">
            Frequently Asked<br />Questions
          </h2>
        </header>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6">
        <div class="accordion zigrow-faq-3__accordion" id="faqAccordion3-left">
          <div class="accordion-item">
            <h2 class="no-theme-size accordion-header" id="faqHeading3-1">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3-1" aria-expanded="false" aria-controls="faq3-1">
                How do I book a photoshoot?
              </button>
            </h2>
            <div id="faq3-1" class="accordion-collapse collapse" aria-labelledby="faqHeading3-1" data-bs-parent="#faqAccordion3-left">
              <div class="accordion-body">
                You can book by filling out our online form with your preferred date, location, and style. We will confirm availability and send you a brief to finalize the booking.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="no-theme-size no-theme-size accordion-header" id="faqHeading3-2">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3-2" aria-expanded="false" aria-controls="faq3-2">
                Do you travel for destination sessions?
              </button>
            </h2>
            <div id="faq3-2" class="accordion-collapse collapse" aria-labelledby="faqHeading3-2" data-bs-parent="#faqAccordion3-left">
              <div class="accordion-body">
                Yes, we are available for destination shoots. Travel and stay requirements may apply depending on the location and schedule.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="no-theme-size accordion-header" id="faqHeading3-3">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3-3" aria-expanded="false" aria-controls="faq3-3">
                How long does it take to receive the final photos?
              </button>
            </h2>
            <div id="faq3-3" class="accordion-collapse collapse" aria-labelledby="faqHeading3-3" data-bs-parent="#faqAccordion3-left">
              <div class="accordion-body">
                Delivery timelines depend on the project, but most galleries are shared within 1 to 3 weeks after the shoot.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="no-theme-size accordion-header" id="faqHeading3-4">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3-4" aria-expanded="false" aria-controls="faq3-4">
                Can I choose the style or mood of the shoot?
              </button>
            </h2>
            <div id="faq3-4" class="accordion-collapse collapse" aria-labelledby="faqHeading3-4" data-bs-parent="#faqAccordion3-left">
              <div class="accordion-body">
                Absolutely. We align the styling, references, and mood with your vision before the shoot so the output matches your expectations.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="accordion zigrow-faq-3__accordion" id="faqAccordion3-right">
          <div class="accordion-item">
            <h2 class="no-theme-size accordion-header" id="faqHeading3-5">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3-5" aria-expanded="false" aria-controls="faq3-5">
                Do you provide raw photos as well?
              </button>
            </h2>
            <div id="faq3-5" class="accordion-collapse collapse" aria-labelledby="faqHeading3-5" data-bs-parent="#faqAccordion3-right">
              <div class="accordion-body">
                We deliver fully edited, high-resolution images. Raw files are not part of our standard packages but can be discussed if needed.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="no-theme-size accordion-header" id="faqHeading3-6">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3-6" aria-expanded="false" aria-controls="faq3-6">
                What are your prices and packages?
              </button>
            </h2>
            <div id="faq3-6" class="accordion-collapse collapse" aria-labelledby="faqHeading3-6" data-bs-parent="#faqAccordion3-right">
              <div class="accordion-body">
                We offer flexible packages based on duration, location, and deliverables. Share your requirements and we will send a custom quote.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="no-theme-size accordion-header" id="faqHeading3-7">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3-7" aria-expanded="false" aria-controls="faq3-7">
                Is a deposit required?
              </button>
            </h2>
            <div id="faq3-7" class="accordion-collapse collapse" aria-labelledby="faqHeading3-7" data-bs-parent="#faqAccordion3-right">
              <div class="accordion-body">
                Yes, a non-refundable deposit secures your date. The remaining balance is due on or before the day of the shoot.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="no-theme-size accordion-header" id="faqHeading3-8">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3-8" aria-expanded="false" aria-controls="faq3-8">
                How can I contact you quickly?
              </button>
            </h2>
            <div id="faq3-8" class="accordion-collapse collapse" aria-labelledby="faqHeading3-8" data-bs-parent="#faqAccordion3-right">
              <div class="accordion-body">
                You can reach us via WhatsApp, email, or the contact form on our website. We usually respond within one business day.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-faq-3 {
      background-color: #050506;
      color: #f9fafb;
     
    }
    .py-6 {
      padding: 3rem 0;
    }
    .zigrow-faq-3 .zigrow-faq-3__header {
      margin-bottom: 2.5rem;
    }

    .zigrow-faq-3 .zigrow-faq-3__title {
      margin: 0;
      font-size: 2.4rem;
      line-height: 1.15;
      font-weight: 600;
    }

    .zigrow-faq-3 .zigrow-faq-3__accordion {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .zigrow-faq-3 .accordion-item {
      margin-bottom: 0;
      border: 0;
      border-radius: 22px;
      overflow: hidden;
      background: #1f1f23;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.55);
    }

    .zigrow-faq-3 .accordion-button {
      width: 100%;
      padding: 0.95rem 1.4rem;
      border-radius: 22px;
      background-color: #1f1f23;
      color: #f9fafb;
      font-size: 0.95rem;
      font-weight: 500;
      box-shadow: none;
    }

    .zigrow-faq-3 .accordion-button:not(.collapsed) {
      background-color: #1f1f23;
      color: #ffffff;
    }

    .zigrow-faq-3 .accordion-button:focus {
      box-shadow: none;
    }

  /* Replace with this */
.zigrow-faq-3 .accordion-button::after {
  content: "\f078" ;
  background-image: none;
  width: auto;
  font-weight: 900;
  height: auto;
  color: var(--primary-colors, #ff6b35);
  font-size: 0.95rem;
  line-height: 1;
  transform: rotate(0deg);
  transition: transform 0.25s ease;
}

.zigrow-faq-3 .accordion-button:not(.collapsed)::after {
  background-image: none;
  color: var(--primary-colors, #ff6b35);
  transform: rotate(180deg);
}
    .zigrow-faq-3 .accordion-body {
      padding: 0 1.4rem 1rem;
      font-size: 0.9rem;
      color: #d1d5db;
      background: #1f1f23;
    }

    @media (max-width: 991.98px) {
      .zigrow-faq-3 {
        padding: 3rem 0 3.5rem;
      }

      .zigrow-faq-3 .zigrow-faq-3__title {
        font-size: 2rem;
      }
    }

    @media (max-width: 575.98px) {
      .zigrow-faq-3 .zigrow-faq-3__title {
        font-size: 1.8rem;
      }

      .zigrow-faq-3 .accordion-button {
        padding: 0.9rem 1.1rem;
      }

      .zigrow-faq-3 .accordion-body {
        padding: 0 1.1rem 0.85rem;
      }
    }
  </style>
</section>
`,
});


Vvveb.Blocks.add("bootstrap4/zigrow-faq-4", {
  name: "Faq-4",
  category: "faq",
  image:
    "https://i.postimg.cc/qvC7bKKM/Screenshot-2026-07-22-162315.png",

  html: `
<section
  id="zigrow-faq-4"
  data-section="zigrow-faq-4"
  class="zigrow-faq-4"
>
  <div class="zigrow-faq-4-container">
    <div class="zigrow-faq-4-heading">
      <p class="zigrow-faq-4-eyebrow">HELP CENTRE</p>

      <h2 class="no-theme-size zigrow-faq-4-title">
        Frequently Asked<br />
        Questions
      </h2>

      <p class="zigrow-faq-4-description">
        Find quick answers to common questions about our services, process, and
        customer support.
      </p>
    </div>

    <div class="zigrow-faq-4-grid">
      <div class="zigrow-faq-4-column ">
        <div
          class="zigrow-faq-4-card"
      
        >
          <div class="zigrow-faq-4-icon-wrap">
            <span class="zigrow-faq-4-icon">
              <i
                class="bi bi-tools"
                data-icon="tools"
              ></i>
            </span>
          </div>

          <h3 class="zigrow-faq-4-question">
            Can your services be customised?
          </h3>

          <p class="zigrow-faq-4-answer">
            Yes, our services can be tailored to your goals, preferences, and
            business requirements for a more suitable experience.
          </p>
        </div>
      </div>

      <div class="zigrow-faq-4-column ">
        <div
          class="zigrow-faq-4-card"
      
        >
          <div class="zigrow-faq-4-icon-wrap">
            <span class="zigrow-faq-4-icon">
              <i
                class="bi bi-geo-alt"
                data-icon="geo-alt"
              ></i>
            </span>
          </div>

          <h3 class="zigrow-faq-4-question">
            Which locations do you serve?
          </h3>

          <p class="zigrow-faq-4-answer">
            We support customers across multiple locations. Contact our team to
            confirm service availability in your city or region.
          </p>
        </div>
      </div>

      <div class="zigrow-faq-4-column ">
        <div
          class="zigrow-faq-4-card"
      
        >
          <div class="zigrow-faq-4-icon-wrap">
            <span class="zigrow-faq-4-icon">
              <i
                class="bi bi-arrow-repeat"
                data-icon="arrow-repeat"
              ></i>
            </span>
          </div>

          <h3 class="zigrow-faq-4-question">
            Can I change or cancel my service?
          </h3>

          <p class="zigrow-faq-4-answer">
            Yes, you can request changes or cancellation according to the terms
            of your selected service or plan.
          </p>
        </div>
      </div>

      <div class="zigrow-faq-4-column ">
        <div
          class="zigrow-faq-4-card"
      
        >
          <div class="zigrow-faq-4-icon-wrap">
            <span class="zigrow-faq-4-icon">
              <i
                class="bi bi-patch-check"
                data-icon="patch-check"
              ></i>
            </span>
          </div>

          <h3 class="zigrow-faq-4-question">
            How do you maintain service quality?
          </h3>

          <p class="zigrow-faq-4-answer">
            We follow a structured process, review every important detail, and
            maintain clear communication throughout each project.
          </p>
        </div>
      </div>

      <div class="zigrow-faq-4-column ">
        <div
          class="zigrow-faq-4-card"
      
        >
          <div class="zigrow-faq-4-icon-wrap">
            <span class="zigrow-faq-4-icon">
              <i
                class="bi bi-calendar-check"
                data-icon="calendar-check"
              ></i>
            </span>
          </div>

          <h3 class="zigrow-faq-4-question">
            What happens if a deadline changes?
          </h3>

          <p class="zigrow-faq-4-answer">
            Our team will review the updated requirement, communicate the
            impact clearly, and provide a revised delivery schedule.
          </p>
        </div>
      </div>

      <div class="zigrow-faq-4-column ">
        <div
          class="zigrow-faq-4-card"
      
        >
          <div class="zigrow-faq-4-icon-wrap">
            <span class="zigrow-faq-4-icon">
              <i
                class="bi bi-headset"
                data-icon="headset"
              ></i>
            </span>
          </div>

          <h3 class="zigrow-faq-4-question">
            Is customer support included?
          </h3>

          <p class="zigrow-faq-4-answer">
            Yes, our team provides dependable assistance to answer questions,
            resolve concerns, and guide you through the process.
          </p>
        </div>
      </div>
    </div>

    <div class="zigrow-faq-4-action">
      <a
        href="#contact"
        class="zigrow-faq-4-button"
        data-btn="faq"
      >
        Get in Touch
      </a>
    </div>
  </div>

  <style>
    .zigrow-faq-4 {
      width: 100%;
      overflow: hidden;
      background: #ffffff;
      padding: 72px 0 54px;
    }

    .zigrow-faq-4 .zigrow-faq-4-container {
      width: min(100% - 48px, 1160px);
      margin: 0 auto;
    }

    .zigrow-faq-4 .zigrow-faq-4-heading {
      max-width: 620px;
      margin: 0 auto 56px;
      text-align: center;
    }

    .zigrow-faq-4 .zigrow-faq-4-eyebrow {
      margin: 0 0 12px;
      color: #000000;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      line-height: 1.4;
    }

    .zigrow-faq-4 .zigrow-faq-4-title {
      margin: 0;
      color: #000000;
      font-size: clamp(2.4rem, 5vw, 4rem);
      font-weight: 600;
      letter-spacing: -0.045em;
      line-height: 1.05;
    }

    .zigrow-faq-4 .zigrow-faq-4-description {
      max-width: 520px;
      margin: 18px auto 0;
      color: var(--secondary-colors, #6f6f6f);
      font-size: 0.96rem;
      line-height: 1.6;
    }

    .zigrow-faq-4 .zigrow-faq-4-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 54px 42px;
    }

    .zigrow-faq-4 .zigrow-faq-4-column {
      min-width: 0;
    }

    .zigrow-faq-4 .zigrow-faq-4-card {
      display: grid;
      justify-items: center;
      height: 100%;
      padding: 8px 6px;
      background: transparent;
      text-align: center;
    }

    .zigrow-faq-4 .zigrow-faq-4-icon-wrap {
      display: grid;
      margin-bottom: 20px;
      place-items: center;
    }

    .zigrow-faq-4 .zigrow-faq-4-icon {
      display: grid;
      width: 48px;
      height: 48px;
      place-items: center;
      border: 1px solid #e7e7e7;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 8px 20px rgba(22, 22, 22, 0.04);
      color: #000000;
      font-size: 1rem;
      line-height: 1;
      transition:
        border-color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-faq-4 .zigrow-faq-4-icon i {
      line-height: 1;
    }

    .zigrow-faq-4 .zigrow-faq-4-question {
      margin: 0;
      color: var(--primary-colors, #252525);
      font-size: 1.05rem;
      font-weight: 700;
      line-height: 1.35;
    }

    .zigrow-faq-4 .zigrow-faq-4-answer {
      max-width: 320px;
      margin: 10px auto 0;
      color: var(--secondary-colors, #737373);
      font-size: 0.86rem;
      line-height: 1.55;
    }

    .zigrow-faq-4 .zigrow-faq-4-card:hover
      .zigrow-faq-4-icon {
      transform: translateY(-4px);
      border-color: #000000;
      background: #ffffff;
      color: #000000;
    }

    .zigrow-faq-4 .zigrow-faq-4-action {
      display: grid;
      justify-content: center;
      margin-top: 58px;
    }

    .zigrow-faq-4 .zigrow-faq-4-button {
      display: grid;
      min-width: 145px;
      min-height: 44px;
      padding: 11px 22px;
      place-items: center;
      border: 1px solid var(--primary-colors, #113f16);
      border-radius: 999px;
      background: var(--primary-colors, #113f16);
      color: #ffffff;
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      transition:
        background-color 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-faq-4 .zigrow-faq-4-button:hover {
      transform: translateY(-2px);
      background: transparent;
      box-shadow: 0 12px 24px rgba(17, 63, 22, 0.12);
      color: var(--primary-colors, #113f16);
    }

    @media (max-width: 991px) {
      .zigrow-faq-4 {
        padding: 64px 0 50px;
      }

      .zigrow-faq-4 .zigrow-faq-4-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 48px 34px;
      }
    }

    @media (max-width: 650px) {
      .zigrow-faq-4 .zigrow-faq-4-container {
        width: min(100% - 32px, 1160px);
      }

      .zigrow-faq-4 .zigrow-faq-4-heading {
        margin-bottom: 44px;
      }

      .zigrow-faq-4 .zigrow-faq-4-grid {
        grid-template-columns: 1fr;
        gap: 38px;
      }

      .zigrow-faq-4 .zigrow-faq-4-answer {
        max-width: 430px;
      }

      .zigrow-faq-4 .zigrow-faq-4-action {
        margin-top: 46px;
      }
    }

    @media (max-width: 420px) {
      .zigrow-faq-4 {
        padding: 48px 0 42px;
      }

      .zigrow-faq-4 .zigrow-faq-4-container {
        width: min(100% - 24px, 1160px);
      }

      .zigrow-faq-4 .zigrow-faq-4-title {
        font-size: 2.3rem;
      }

      .zigrow-faq-4 .zigrow-faq-4-description {
        font-size: 0.9rem;
      }

      .zigrow-faq-4 .zigrow-faq-4-question {
        font-size: 1rem;
      }

      .zigrow-faq-4 .zigrow-faq-4-answer {
        font-size: 0.84rem;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-faq-4 .zigrow-faq-4-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-faq-5", {
  name: "Faq-5",
  category: "faq",
  image:
    "https://i.postimg.cc/g2cD3Y6m/Screenshot-2026-07-22-162324.png",
  html: `
<section
  id="zigrow-faq-5"
  class="zigrow-faq-5"
  data-section="zigrow-faq-5"
>
  <div class="container">
    <div class="row zigrow-faq-5-layout">
      <div class="col-12 col-lg-5">
        <div class="zigrow-faq-5-intro">
          <h2 class="no-theme-size zigrow-faq-5-title">Got Questions?</h2>

          <p class="zigrow-faq-5-description">
            We have clear answers to help you understand our services and take
            the next step with confidence.
          </p>

          <div
            class="zigrow-faq-5-image-wrap"
        
          >
            <img
              src="/builder/img/zigrow-icon-images/zigrow-faq-mark.webp"
              alt="Colourful abstract question illustration"
            />
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-7">
        <div
          class="accordion zigrow-faq-5-accordion"
          id="zigrow-faq-5-accordion"
          data-component-accordion
        >
          <div class="accordion-item zigrow-faq-5-item ">
            <h3
              class="accordion-header zigrow-faq-5-item-heading"
              id="zigrow-faq-5-heading-1"
            >
              <button
                class="accordion-button collapsed zigrow-faq-5-question"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#zigrow-faq-5-collapse-1"
                aria-expanded="false"
                aria-controls="zigrow-faq-5-collapse-1"
              >
                <span>Can your services be adapted to my requirements?</span>

                <span class="zigrow-faq-5-toggle-icons">
                  <span class="zigrow-faq-5-plus-icon">
                    <i class="bi bi-plus-lg" data-icon="plus-lg"></i>
                  </span>

                  <span class="zigrow-faq-5-minus-icon">
                    <i class="bi bi-dash-lg" data-icon="dash-lg"></i>
                  </span>
                </span>
              </button>
            </h3>

            <div
              id="zigrow-faq-5-collapse-1"
              class="accordion-collapse collapse"
              aria-labelledby="zigrow-faq-5-heading-1"
              data-bs-parent="#zigrow-faq-5-accordion"
            >
              <div class="accordion-body zigrow-faq-5-answer">
                <p>
                  Yes, our solutions can be adjusted around your goals,
                  preferences, timeline, and the level of support you need.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item zigrow-faq-5-item ">
            <h3
              class="accordion-header zigrow-faq-5-item-heading"
              id="zigrow-faq-5-heading-2"
            >
              <button
                class="accordion-button zigrow-faq-5-question"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#zigrow-faq-5-collapse-2"
                aria-expanded="true"
                aria-controls="zigrow-faq-5-collapse-2"
              >
                <span>Can I get started without technical experience?</span>

                <span class="zigrow-faq-5-toggle-icons">
                  <span class="zigrow-faq-5-plus-icon">
                    <i class="bi bi-plus-lg" data-icon="plus-lg"></i>
                  </span>

                  <span class="zigrow-faq-5-minus-icon">
                    <i class="bi bi-dash-lg" data-icon="dash-lg"></i>
                  </span>
                </span>
              </button>
            </h3>

            <div
              id="zigrow-faq-5-collapse-2"
              class="accordion-collapse collapse show"
              aria-labelledby="zigrow-faq-5-heading-2"
              data-bs-parent="#zigrow-faq-5-accordion"
            >
              <div class="accordion-body zigrow-faq-5-answer">
                <p>
                  Yes, our process is simple and guided. You do not need
                  technical experience because our team provides clear support
                  throughout each stage.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item zigrow-faq-5-item ">
            <h3
              class="accordion-header zigrow-faq-5-item-heading"
              id="zigrow-faq-5-heading-3"
            >
              <button
                class="accordion-button collapsed zigrow-faq-5-question"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#zigrow-faq-5-collapse-3"
                aria-expanded="false"
                aria-controls="zigrow-faq-5-collapse-3"
              >
                <span>Will everything work properly on mobile devices?</span>

                <span class="zigrow-faq-5-toggle-icons">
                  <span class="zigrow-faq-5-plus-icon">
                    <i class="bi bi-plus-lg" data-icon="plus-lg"></i>
                  </span>

                  <span class="zigrow-faq-5-minus-icon">
                    <i class="bi bi-dash-lg" data-icon="dash-lg"></i>
                  </span>
                </span>
              </button>
            </h3>

            <div
              id="zigrow-faq-5-collapse-3"
              class="accordion-collapse collapse"
              aria-labelledby="zigrow-faq-5-heading-3"
              data-bs-parent="#zigrow-faq-5-accordion"
            >
              <div class="accordion-body zigrow-faq-5-answer">
                <p>
                  Yes, every solution is prepared to provide a smooth and
                  consistent experience across desktop, tablet, and mobile
                  devices.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item zigrow-faq-5-item ">
            <h3
              class="accordion-header zigrow-faq-5-item-heading"
              id="zigrow-faq-5-heading-4"
            >
              <button
                class="accordion-button collapsed zigrow-faq-5-question"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#zigrow-faq-5-collapse-4"
                aria-expanded="false"
                aria-controls="zigrow-faq-5-collapse-4"
              >
                <span>Can your team support long-term business needs?</span>

                <span class="zigrow-faq-5-toggle-icons">
                  <span class="zigrow-faq-5-plus-icon">
                    <i class="bi bi-plus-lg" data-icon="plus-lg"></i>
                  </span>

                  <span class="zigrow-faq-5-minus-icon">
                    <i class="bi bi-dash-lg" data-icon="dash-lg"></i>
                  </span>
                </span>
              </button>
            </h3>

            <div
              id="zigrow-faq-5-collapse-4"
              class="accordion-collapse collapse"
              aria-labelledby="zigrow-faq-5-heading-4"
              data-bs-parent="#zigrow-faq-5-accordion"
            >
              <div class="accordion-body zigrow-faq-5-answer">
                <p>
                  Yes, we can continue supporting your business as your goals,
                  services, customer expectations, and future requirements
                  develop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-faq-5 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 7rem) 0;
      background: #f7f7f7;
    }

    .zigrow-faq-5 .zigrow-faq-5-layout {
      row-gap: 3rem;
      align-items: center;
    }

    .zigrow-faq-5 .zigrow-faq-5-intro {
      max-width: 31rem;
    }

    .zigrow-faq-5 .zigrow-faq-5-title {
      margin: 0;
      color: #181818;
      font-size: clamp(2.5rem, 4.8vw, 4.4rem);
      font-weight: 500;
      line-height: 1.05;
      letter-spacing: -0.045em;
    }

    .zigrow-faq-5 .zigrow-faq-5-description {
      max-width: 24rem;
      margin: 1rem 0 0;
      color: var(--secondary-colors, #656565);
      font-size: clamp(0.9rem, 1.15vw, 1rem);
      line-height: 1.55;
    }

    .zigrow-faq-5 .zigrow-faq-5-image-wrap {
      width: min(100%, 24rem);
      height: clamp(16rem, 27vw, 23rem);
      margin-top: clamp(2rem, 5vw, 4rem);
      overflow: hidden;
      border-radius: 1.4rem;
      background: var(--territory-colors, #eee5ff);
      text-align: center;
    }

    .zigrow-faq-5 .zigrow-faq-5-image-wrap img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.45s ease;
    }

    .zigrow-faq-5 .zigrow-faq-5-image-wrap:hover img {
      transform: scale(1.035);
    }

    .zigrow-faq-5 .zigrow-faq-5-accordion {
      display: grid;
      gap: 1.15rem;
    }

    .zigrow-faq-5 .zigrow-faq-5-item {
      overflow: hidden;
      border: 1px solid rgba(26, 26, 26, 0.06);
      border-radius: 1rem;
      background: #ffffff;
      box-shadow: 0 0.4rem 1.5rem rgba(26, 26, 26, 0.035);
    }

    .zigrow-faq-5 .zigrow-faq-5-item-heading {
      margin: 0;
    }

    .zigrow-faq-5 .zigrow-faq-5-question {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 1.5rem;
      align-items: center;
      width: 100%;
      min-height: 5.2rem;
      padding: 1.35rem 1.6rem;
      border: 0;
      border-radius: 0;
      background: #ffffff;
      color: #242424;
      font-size: clamp(0.95rem, 1.3vw, 1.08rem);
      font-weight: 500;
      line-height: 1.4;
      text-align: left;
      box-shadow: none;
      cursor: pointer;
      transition:
        color 0.25s ease,
        background 0.25s ease;
    }

    .zigrow-faq-5 .zigrow-faq-5-question::after {
      display: none;
    }

    .zigrow-faq-5 .zigrow-faq-5-question:hover {
      color: var(--primary-colors, #713cff);
     
    }

    .zigrow-faq-5 .zigrow-faq-5-question:not(.collapsed) {
      background: #ffffff;
      color: #242424;
      box-shadow: none;
    }

    .zigrow-faq-5 .zigrow-faq-5-question:focus {
      box-shadow: inset 0 0 0 2px
        color-mix(
          in srgb,
          var(--primary-colors, #713cff) 35%,
          transparent
        );
    }

    .zigrow-faq-5 .zigrow-faq-5-toggle-icons {
      position: relative;
      display: grid;
      place-items: center;
      width: 1.7rem;
      height: 1.7rem;
      color: #303030;
    }

    .zigrow-faq-5 .zigrow-faq-5-plus-icon,
    .zigrow-faq-5 .zigrow-faq-5-minus-icon {
      position: absolute;
      display: grid;
      place-items: center;
      width: 100%;
      height: 100%;
      transition:
        opacity 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-faq-5 .zigrow-faq-5-minus-icon {
      opacity: 0;
      transform: rotate(-45deg);
    }

    .zigrow-faq-5
      .zigrow-faq-5-question[aria-expanded="true"]
      .zigrow-faq-5-plus-icon {
      opacity: 0;
      transform: rotate(45deg);
    }

    .zigrow-faq-5
      .zigrow-faq-5-question[aria-expanded="true"]
      .zigrow-faq-5-minus-icon {
      opacity: 1;
      transform: rotate(0);
    }

    .zigrow-faq-5 .zigrow-faq-5-toggle-icons i {
      font-size: 1.1rem;
      line-height: 1;
    }

    .zigrow-faq-5 .zigrow-faq-5-answer {
      padding: 0 1.6rem 1.5rem;
      background: #ffffff;
    }

    .zigrow-faq-5 .zigrow-faq-5-answer p {
      max-width: 41rem;
      margin: 0;
      color: var(--secondary-colors, #696969);
      font-size: clamp(0.88rem, 1.1vw, 0.98rem);
      line-height: 1.65;
    }

    @media (max-width: 991px) {
      .zigrow-faq-5 .zigrow-faq-5-intro {
        max-width: 44rem;
      }

      .zigrow-faq-5 .zigrow-faq-5-description {
        max-width: 38rem;
      }

      .zigrow-faq-5 .zigrow-faq-5-image-wrap {
        width: min(100%, 35rem);
        height: 22rem;
      }
    }

    @media (max-width: 767px) {
      .zigrow-faq-5 {
        padding: 3rem 0;
      }

      .zigrow-faq-5 .zigrow-faq-5-image-wrap {
        height: 19rem;
        margin-top: 2rem;
      }

      .zigrow-faq-5 .zigrow-faq-5-question {
        min-height: 4.7rem;
        padding: 1.15rem 1.2rem;
      }

      .zigrow-faq-5 .zigrow-faq-5-answer {
        padding: 0 1.2rem 1.3rem;
      }
    }

    @media (max-width: 479px) {
      .zigrow-faq-5 .zigrow-faq-5-title {
        font-size: clamp(2.4rem, 12vw, 3.3rem);
      }

      .zigrow-faq-5 .zigrow-faq-5-image-wrap {
        height: 16rem;
        border-radius: 1rem;
      }

      .zigrow-faq-5 .zigrow-faq-5-question {
        gap: 0.8rem;
        font-size: 0.92rem;
      }

      .zigrow-faq-5 .zigrow-faq-5-toggle-icons {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-faq-6", {
  name: "Faq-6",
  category: "faq",
  image:
    "https://i.postimg.cc/mgZw7bFG/Screenshot-2026-07-22-162408.png",

  html: `
<section
  id="zigrow-faq-6"
  data-section="zigrow-faq-6"
  class="zigrow-faq-6"
>
  <div class="zigrow-faq-6-container">
    <div class="zigrow-faq-6-heading">
      <p class="zigrow-faq-6-eyebrow">Our Services</p>

      <h2 class="no-theme-size zigrow-faq-6-title">
        Explore our full range of services for every goal and requirement
      </h2>
    </div>

    <div class="zigrow-faq-6-layout">
      <div class="zigrow-faq-6-visual">
        <div class="zigrow-faq-6-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"
            alt="Professional discussing tailored business solutions"
            class="zigrow-faq-6-image"
          />
        </div>

        <div
          class="zigrow-faq-6-note-card"  data-zg-editable="surface"
      
        >
          <span class="zigrow-faq-6-note-dot"></span>

          <p>
            Every service is shaped around your business needs, current
            challenges, and long-term goals. Our team combines practical
            experience with a clear process to deliver dependable results.
          </p>
        </div>
      </div>

      <div
        class="accordion zigrow-faq-6-accordion"
        id="zigrow-faq-6-accordion"
        data-component-accordion
      >

        <div class="accordion-item zigrow-faq-6-item ">
          <div
            class="zigrow-faq-6-item-inner"
          >
            <h3
              class="accordion-header zigrow-faq-6-item-heading"
              id="zigrow-faq-6-heading-1"
            >
              <button
                type="button"
                class="accordion-button zigrow-faq-6-trigger"
                data-variant="accordion"
                data-bs-toggle="collapse"
                data-bs-target="#zigrow-faq-6-collapse-1"
                aria-expanded="true"
                aria-controls="zigrow-faq-6-collapse-1"
              >
                <span>Tailored Business Solutions</span>

                <span class="zigrow-faq-6-trigger-icon">
                  <i
                    class="bi bi-dash-lg zigrow-faq-6-icon-open"
                    data-icon="dash-lg"
                  ></i>

                  <i
                    class="bi bi-plus-lg zigrow-faq-6-icon-closed"
                    data-icon="plus-lg"
                  ></i>
                </span>
              </button>
            </h3>

            <div
              id="zigrow-faq-6-collapse-1"
              class="accordion-collapse collapse show zigrow-faq-6-panel"
              aria-labelledby="zigrow-faq-6-heading-1"
              data-bs-parent="#zigrow-faq-6-accordion"
            >
              <div class="accordion-body zigrow-faq-6-panel-content">
                <p>
                  We review your goals, audience, and current requirements before developing a practical solution that fits your business. Every recommendation is designed to create clear value, improve efficiency, and support steady growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item zigrow-faq-6-item ">
          <div
            class="zigrow-faq-6-item-inner"
          >
            <h3
              class="accordion-header zigrow-faq-6-item-heading"
              id="zigrow-faq-6-heading-2"
            >
              <button
                type="button"
                class="accordion-button collapsed zigrow-faq-6-trigger"
                data-variant="accordion"
                data-bs-toggle="collapse"
                data-bs-target="#zigrow-faq-6-collapse-2"
                aria-expanded="false"
                aria-controls="zigrow-faq-6-collapse-2"
              >
                <span>Planning and Consultation</span>

                <span class="zigrow-faq-6-trigger-icon">
                  <i
                    class="bi bi-dash-lg zigrow-faq-6-icon-open"
                    data-icon="dash-lg"
                  ></i>

                  <i
                    class="bi bi-plus-lg zigrow-faq-6-icon-closed"
                    data-icon="plus-lg"
                  ></i>
                </span>
              </button>
            </h3>

            <div
              id="zigrow-faq-6-collapse-2"
              class="accordion-collapse collapse zigrow-faq-6-panel"
              aria-labelledby="zigrow-faq-6-heading-2"
              data-bs-parent="#zigrow-faq-6-accordion"
            >
              <div class="accordion-body zigrow-faq-6-panel-content">
                <p>
                  Our consultation process helps identify priorities, remove uncertainty, and create a clear plan of action. You receive practical guidance based on your goals, resources, and preferred timeline.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item zigrow-faq-6-item ">
          <div
            class="zigrow-faq-6-item-inner"
          >
            <h3
              class="accordion-header zigrow-faq-6-item-heading"
              id="zigrow-faq-6-heading-3"
            >
              <button
                type="button"
                class="accordion-button collapsed zigrow-faq-6-trigger"
                data-variant="accordion"
                data-bs-toggle="collapse"
                data-bs-target="#zigrow-faq-6-collapse-3"
                aria-expanded="false"
                aria-controls="zigrow-faq-6-collapse-3"
              >
                <span>Project Implementation</span>

                <span class="zigrow-faq-6-trigger-icon">
                  <i
                    class="bi bi-dash-lg zigrow-faq-6-icon-open"
                    data-icon="dash-lg"
                  ></i>

                  <i
                    class="bi bi-plus-lg zigrow-faq-6-icon-closed"
                    data-icon="plus-lg"
                  ></i>
                </span>
              </button>
            </h3>

            <div
              id="zigrow-faq-6-collapse-3"
              class="accordion-collapse collapse zigrow-faq-6-panel"
              aria-labelledby="zigrow-faq-6-heading-3"
              data-bs-parent="#zigrow-faq-6-accordion"
            >
              <div class="accordion-body zigrow-faq-6-panel-content">
                <p>
                  Once the direction is approved, our team manages each stage with clear communication and careful attention to detail. We keep the process organised while maintaining quality and consistency.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item zigrow-faq-6-item ">
          <div
            class="zigrow-faq-6-item-inner"
          >
            <h3
              class="accordion-header zigrow-faq-6-item-heading"
              id="zigrow-faq-6-heading-4"
            >
              <button
                type="button"
                class="accordion-button collapsed zigrow-faq-6-trigger"
                data-variant="accordion"
                data-bs-toggle="collapse"
                data-bs-target="#zigrow-faq-6-collapse-4"
                aria-expanded="false"
                aria-controls="zigrow-faq-6-collapse-4"
              >
                <span>Ongoing Business Support</span>

                <span class="zigrow-faq-6-trigger-icon">
                  <i
                    class="bi bi-dash-lg zigrow-faq-6-icon-open"
                    data-icon="dash-lg"
                  ></i>

                  <i
                    class="bi bi-plus-lg zigrow-faq-6-icon-closed"
                    data-icon="plus-lg"
                  ></i>
                </span>
              </button>
            </h3>

            <div
              id="zigrow-faq-6-collapse-4"
              class="accordion-collapse collapse zigrow-faq-6-panel"
              aria-labelledby="zigrow-faq-6-heading-4"
              data-bs-parent="#zigrow-faq-6-accordion"
            >
              <div class="accordion-body zigrow-faq-6-panel-content">
                <p>
                  Our support continues after the initial work is completed. We help answer questions, review new requirements, and make thoughtful improvements as your business develops.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item zigrow-faq-6-item ">
          <div
            class="zigrow-faq-6-item-inner"
          >
            <h3
              class="accordion-header zigrow-faq-6-item-heading"
              id="zigrow-faq-6-heading-5"
            >
              <button
                type="button"
                class="accordion-button collapsed zigrow-faq-6-trigger"
                data-variant="accordion"
                data-bs-toggle="collapse"
                data-bs-target="#zigrow-faq-6-collapse-5"
                aria-expanded="false"
                aria-controls="zigrow-faq-6-collapse-5"
              >
                <span>Performance and Improvement</span>

                <span class="zigrow-faq-6-trigger-icon">
                  <i
                    class="bi bi-dash-lg zigrow-faq-6-icon-open"
                    data-icon="dash-lg"
                  ></i>

                  <i
                    class="bi bi-plus-lg zigrow-faq-6-icon-closed"
                    data-icon="plus-lg"
                  ></i>
                </span>
              </button>
            </h3>

            <div
              id="zigrow-faq-6-collapse-5"
              class="accordion-collapse collapse zigrow-faq-6-panel"
              aria-labelledby="zigrow-faq-6-heading-5"
              data-bs-parent="#zigrow-faq-6-accordion"
            >
              <div class="accordion-body zigrow-faq-6-panel-content">
                <p>
                  We evaluate results, identify useful opportunities, and recommend improvements that support better performance. This helps your business continue moving forward with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <style>
    .zigrow-faq-6 {
      width: 100%;
      overflow: hidden;
      padding: 34px 0 58px;
      background: #f8f7ed;
      background: color-mix(
        in srgb,
        var(--primary-colors, #596348) 8%,
        #ffffff 92%
      );
    }

    .zigrow-faq-6 .zigrow-faq-6-container {
      width: min(100% - 48px, 1160px);
      margin: 0 auto;
    }

    .zigrow-faq-6 .zigrow-faq-6-heading {
      max-width: 860px;
      margin-bottom: 52px;
    }

    .zigrow-faq-6 .zigrow-faq-6-eyebrow {
      margin: 0 0 26px;
      color:  #111111;
      font-size: 0.92rem;
      font-weight: 600;
      font-style: italic;
      line-height: 1.4;
    }

    .zigrow-faq-6 .zigrow-faq-6-title {
      margin: 0;
      color:  #111111;
      font-size: clamp(2.4rem, 5vw, 3.5rem);
      font-weight: 700;
      letter-spacing: -0.055em;
      line-height: 1.02;
    }

    .zigrow-faq-6 .zigrow-faq-6-layout {
      display: grid;
      grid-template-columns: minmax(300px, 0.88fr) minmax(460px, 1.32fr);
      gap: clamp(64px, 10vw, 140px);
      align-items: start;
    }

    .zigrow-faq-6 .zigrow-faq-6-visual {
      position: relative;
      min-height: 430px;
      padding-bottom: 76px;
    }

    .zigrow-faq-6 .zigrow-faq-6-image-wrap {
      width: min(100%, 360px);
      height: 355px;
      overflow: hidden;
      border-radius: 18px;
      background: #e2dfd1;
      text-align: center;
    }

    .zigrow-faq-6 .zigrow-faq-6-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .zigrow-faq-6 .zigrow-faq-6-image-wrap:hover
      .zigrow-faq-6-image {
      transform: scale(1.035);
    }

    .zigrow-faq-6 .zigrow-faq-6-note-card {
      position: absolute;
      right: 0;
      bottom: 10px;
      width: min(78%, 295px);
      min-height: 185px;
      padding: 40px 28px 26px;
      border-radius: 9px;
      background: var(--territory-colors, #3f4d2e);
      box-shadow: 0 18px 38px rgba(42, 50, 31, 0.18);
      transform: rotate(-7deg);
    }

    .zigrow-faq-6 .zigrow-faq-6-note-dot {
      position: absolute;
      top: 24px;
      left: 28px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ffffff;
    }

    .zigrow-faq-6 .zigrow-faq-6-note-card p {
      margin: 0;
      color: #ffffff;
      font-size: 0.78rem;
      line-height: 1.55;
    }

    .zigrow-faq-6 .zigrow-faq-6-accordion {
      width: 100%;
    }

    .zigrow-faq-6 .zigrow-faq-6-item {
      border-bottom: 1px solid rgba(17, 17, 17, 0.13);
    }

    .zigrow-faq-6 .zigrow-faq-6-item-inner {
      background: transparent;
      padding: 0 0.5rem;
    }

    .zigrow-faq-6 .zigrow-faq-6-item-heading {
      margin: 0;
    }

    .zigrow-faq-6 .zigrow-faq-6-trigger {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 34px;
      gap: 24px;
      align-items: center;
      width: 100%;
      min-height: 78px;
      padding: 20px 2px;
      border: 0;
      border-radius: 0;
      outline: none;
      background: transparent;
      color: var(--primary-colors, #181818);
      font-size: 1.05rem;
      font-weight: 700;
      line-height: 1.35;
      text-align: left;
      cursor: pointer;
    }

    .zigrow-faq-6 .zigrow-faq-6-trigger::after {
      display: none;
    }

    .zigrow-faq-6 .zigrow-faq-6-trigger:not(.collapsed) {
      background: transparent;
      color: var(--primary-colors, #181818);
      box-shadow: none;
    }

    .zigrow-faq-6 .zigrow-faq-6-trigger:focus {
      box-shadow: none;
    }

    .zigrow-faq-6 .zigrow-faq-6-trigger:focus-visible {
      outline: 2px solid var(--primary-colors, #596348);
      outline-offset: 4px;
    }

    .zigrow-faq-6 .zigrow-faq-6-trigger-icon {
      display: grid;
      width: 34px;
      height: 34px;
      place-items: center;
      color: var(--primary-colors, #181818);
      font-size: 1rem;
      line-height: 1;
    }

    .zigrow-faq-6 .zigrow-faq-6-trigger-icon i {
      grid-column: 1;
      grid-row: 1;
      line-height: 1;
      transition:
        opacity 0.2s ease,
        transform 0.25s ease;
    }

    .zigrow-faq-6 .zigrow-faq-6-icon-open {
      opacity: 0;
      transform: rotate(-90deg);
    }

    .zigrow-faq-6 .zigrow-faq-6-icon-closed {
      opacity: 1;
      transform: rotate(0);
    }

    .zigrow-faq-6
      .zigrow-faq-6-trigger[aria-expanded="true"]
      .zigrow-faq-6-icon-open {
      opacity: 1;
      transform: rotate(0);
    }

    .zigrow-faq-6
      .zigrow-faq-6-trigger[aria-expanded="true"]
      .zigrow-faq-6-icon-closed {
      opacity: 0;
      transform: rotate(90deg);
    }

    .zigrow-faq-6 .zigrow-faq-6-panel {
      overflow: hidden;
    }


    .zigrow-faq-6 .zigrow-faq-6-panel-content {
      padding: 0 50px 26px 2px;
    }

    .zigrow-faq-6 .zigrow-faq-6-panel-content p {
      max-width: 600px;
      margin: 0;
      color: var(--secondary-colors, #686868);
      font-size: 0.88rem;
      line-height: 1.55;
    }

    @media (max-width: 991px) {
      .zigrow-faq-6 {
        padding: 50px 0 58px;
      }

      .zigrow-faq-6 .zigrow-faq-6-layout {
        grid-template-columns: minmax(280px, 0.85fr) minmax(380px, 1.15fr);
        gap: 54px;
      }

      .zigrow-faq-6 .zigrow-faq-6-image-wrap {
        height: 330px;
      }

      .zigrow-faq-6 .zigrow-faq-6-note-card {
        width: 80%;
      }
    }

    @media (max-width: 767px) {
      .zigrow-faq-6 .zigrow-faq-6-container {
        width: min(100% - 32px, 1160px);
      }

      .zigrow-faq-6 .zigrow-faq-6-heading {
        margin-bottom: 40px;
      }

      .zigrow-faq-6 .zigrow-faq-6-layout {
        grid-template-columns: 1fr;
        gap: 58px;
      }

      .zigrow-faq-6 .zigrow-faq-6-visual {
        width: min(100%, 560px);
      }

      .zigrow-faq-6 .zigrow-faq-6-image-wrap {
        width: 70%;
        height: 360px;
      }

      .zigrow-faq-6 .zigrow-faq-6-note-card {
        right: 4%;
        width: 58%;
      }
    }

    @media (max-width: 480px) {
      .zigrow-faq-6 {
        padding: 42px 0 48px;
      }

      .zigrow-faq-6 .zigrow-faq-6-container {
        width: min(100% - 24px, 1160px);
      }

      .zigrow-faq-6 .zigrow-faq-6-eyebrow {
        margin-bottom: 18px;
      }

      .zigrow-faq-6 .zigrow-faq-6-title {
        font-size: 2.25rem;
      }

      .zigrow-faq-6 .zigrow-faq-6-visual {
        min-height: auto;
        padding-bottom: 0;
      }

      .zigrow-faq-6 .zigrow-faq-6-image-wrap {
        width: 86%;
        height: 310px;
      }

      .zigrow-faq-6 .zigrow-faq-6-note-card {
        position: relative;
        right: auto;
        bottom: auto;
        width: 82%;
        min-height: 160px;
        margin: -54px 0 20px auto;
        padding: 36px 22px 22px;
      }

      .zigrow-faq-6 .zigrow-faq-6-trigger {
        min-height: 72px;
        font-size: 0.98rem;
      }

      .zigrow-faq-6 .zigrow-faq-6-panel-content {
        padding-right: 36px;
      }
    }
  </style>


</section>
`,
});

// Hero Sections Blocks
Vvveb.Blocks.add("bootstrap4/zigrow-hero-1", {
    name: "Hero-1",
    category: "hero",
    image: "https://i.postimg.cc/h4CvTqLZ/hero1.png",
    html: `  <section id="zigrow-hero-1" data-section="zigrow-hero-1" class="zigrow-hero-1 py-6">
      <!-- Background Image -->
      <div class="bg-image"></div>

      <div class="container">
        <!-- Bootstrap grid; align-items-center for vertical centering on desktop -->
        <div class="row g-4 hero-container">
          <!-- Text Content -->
          <div class="col-12 col-lg-6 hero-left">
            <p class="hero-subhead mb-2">Meet Your Tutor</p>
            <h1 class="hero-head mb-3">Richard Smith</h1>
            <p class="hero-subpara mb-4 mx-auto mx-lg-0">
              Hi! I’m Richard, with over six years of tutoring experience. I’m
              passionate about making learning fun and engaging. My goal is to
              create an adventurous atmosphere through interactive activities
              and tailored lesson plans, inspiring a love for learning in all my
              students.
            </p>
            <a href="#contact" class="call-now-btn" data-btn="contact">
              <i class="bi bi-telephone" data-icon="phone"></i> Contact Me
            </a>
          </div>

          <!-- Image Content -->
          <div class="col-12 col-lg-6 hero-right">
            <div class="circle-bg"></div>

           <!-- Decorative Icons -->
            <img  src="/builder/img/zigrow-icon-images/zigrow-hero-1-hero icon-a.png" class="hero-deco deco-1" alt="" />
            <img  src="/builder/img/zigrow-icon-images/zigrow-hero-1-hero icon-a.png" class="hero-deco deco-2" alt="" />
            <img  src="/builder/img/zigrow-icon-images/zigrow-hero-1-hero icon-a.png" class="hero-deco deco-3" alt="" />

            <!-- Tutor Image -->
           <img
              src="/builder/img/zigrow-team-images/zigrow-hero-1-hero-2.webp"
              class="hero-img "
              alt="Richard Smith"
            />
            </div>
          </div>
        </div>
      </div>
        <style>
      .py-6 {
        padding: 3rem 0;
      }

      /* HERO BASE */
      .zigrow-hero-1 {
        position: relative;
        overflow: hidden;
      }

      /* Background image behind everything */
      .zigrow-hero-1 {
  position: relative;
  overflow: hidden;
  background: url("./images/hero-bg.png") repeat center center;
  background-size: contain;
}

      .zigrow-hero-1 .hero-container{
        align-items: center;
      }
      /* LEFT + RIGHT COLUMNS */
      .zigrow-hero-1 .hero-left {
        align-items: center;
      }

      .zigrow-hero-1 .hero-right {
        position: relative;
        text-align: center;
      }

      /* TYPOGRAPHY */
      .zigrow-hero-1 .hero-subhead {
        color: #000;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .zigrow-hero-1 .hero-head {
        font-size: 3rem;
        font-weight: 400;
        color: #000;
        margin-bottom: 1.5rem;
      }

      .zigrow-hero-1 .hero-subpara {
        font-size: 1.05rem;
        color: rgba(0, 0, 0, 0.6);
        max-width: 550px;
        line-height: 1.7;
        margin-bottom: 1.75rem;
      }

      /* BUTTON */
      .zigrow-hero-1 .call-now-btn {
        background: var(--primary-colors, #000);
        color: #fff;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        display: inline-block;
        text-decoration: none;
        font-weight: 600;
        transition: 0.3s;
      }

      .zigrow-hero-1 .call-now-btn i {
        margin-right: 0.5rem;
      }

      .zigrow-hero-1 .call-now-btn:hover {
        box-shadow: 0 0 20px var(--primary-colors, #000);
      }

      /* CIRCLE BEHIND IMAGE */
      .zigrow-hero-1 .circle-bg {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 550px;
        height: 550px;
        background-color: var(--primary-colors, #fceecf);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }

      /* MAIN IMAGE */
      .zigrow-hero-1 .tutor-img-box {
        text-align: center;
        position: relative;
        z-index: 2;
        margin: 0 auto;
      }

      .zigrow-hero-1 .hero-img {
        max-width: 100%;
        max-height: 100%;
        width: 400px;
        object-fit: cover;
        z-index: 999;
        position: relative;
      }

      /* DECORATIVE ICONS */
      .zigrow-hero-1 .hero-deco {
        position: absolute;
        z-index: 0;
        width: 55px;
        height: auto;
      }

      .zigrow-hero-1 .hero-deco.deco-1 {
        top: 0%;
        left: 8%;
      }

      .zigrow-hero-1 .hero-deco.deco-2 {
        width: 155px;
        bottom: 16%;
        left: -7%;
      }

      .zigrow-hero-1 .hero-deco.deco-3 {
        width: 155px;
        top: 0%;
        right: 0%;
      }

      /* RESPONSIVE TWEAKS */

      /* Change background behaviour on smaller screens */
      @media (max-width: 1234px) {
        .zigrow-hero-1 .bg-image {
          background: url("./images/hero-bg.png") no-repeat center center;
          background-size: cover;
        }
        .zigrow-hero-1 .circle-bg {
          width: 400px;
          height: 400px;
        }
        .zigrow-hero-1 .hero-img {
          max-width: 320px;
        }
      }

      /* Tablet & below (stack via Bootstrap grid) */
      @media (max-width: 992px) {
        .zigrow-hero-1 .hero-left {
          text-align: center;
        }

        .zigrow-hero-1 .hero-subpara {
          margin-left: auto;
          margin-right: auto;
        }

        .zigrow-hero-1 .hero-img {
          max-width: 60%;
        }

        /* hide extra decorative icons on smaller screens */
        .zigrow-hero-1 .hero-deco {
          display: none;
        }
      }

      @media (max-width: 768px) {
        .zigrow-hero-1 {
          height: auto ;
        }

        .zigrow-hero-1 .hero-head {
          font-size: 2.2rem;
        }

        .zigrow-hero-1 .hero-subhead {
          font-size: 1.25rem;
        }

        .zigrow-hero-1 .hero-img {
          max-width: 220px;
        }

        .zigrow-hero-1 .circle-bg {
          width: 300px;
          height: 300px;
        }
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-hero-2", {
    name: "Hero-2",
    category: "hero",
    image: "https://i.postimg.cc/RVZRLfWK/Screenshot-2025-11-20-162300.png",
    html: `   <section id="zigrow-hero-2" data-section="zigrow-hero-2" class="zigrow-hero-2 py-6">
      <div class="container">
        <!-- Bootstrap grid instead of flex -->
        <div class="row zigrow-hero-2-wraper">
          <!-- Image Right on desktop, on top on mobile -->
          <div class="col-12 col-md-6 order-1 order-md-2 zigrow-hero-2-right">
            <div class="zigrow-hero-2-image-wrapper">
              <img src="/builder/img/zigrow-team-images/zigrow-hero-2-hero-2.webp" alt="Doctor" class="zigrow-hero-2-image" />
            </div>
          </div>

          <!-- Text Left on desktop, below image on mobile -->
          <div
            class="col-12 col-md-6 order-2 order-md-1 zigrow-hero-2-left content-container mt-4 mt-md-0"
          >
            <h1 class="zigrow-hero-2-title no-theme-size">
              Transform <br />Your Health,<br />One Meal at a Time
            </h1>
            <p class="zigrow-hero-2-text">
              Personalized diet plans to help you achieve your wellness goals.
            </p>
        
<div class="zigrow-hero-2-btn-wrap">
  <a href="#" class="zigrow-hero-2-btn" data-btn="hero-2">Book Now</a>
</div>
          </div>
        </div>
      </div>
         <style>
      .py-6 {
        padding: 3rem 0;
      }

      /* HERO BASE */
     /* Replace with this */
/* Find this */
.zigrow-hero-2 {
background:
  linear-gradient(
    135deg,
    color-mix(in srgb, var(--primary-colors, #1159f1) 42%, #ffffff 58%) 0%,
    color-mix(in srgb, var(--territory-colors, #f4ecff) 48%, #ffffff 52%) 55%,
    color-mix(in srgb, var(--primary-colors, #1159f1) 24%, #ffffff 76%) 100%
  );
  color: #111827;
}
      .zigrow-hero-2 .zigrow-hero-2-wraper {
        align-items: center;
      }
      /* LEFT & RIGHT COLUMNS */
      .zigrow-hero-2 .zigrow-hero-2-left {
        /* default mobile: center */
        text-align: center;
      }

      .zigrow-hero-2 .zigrow-hero-2-right {
        text-align: center;
      }

      .zigrow-hero-2 .content-container {
        padding-left: 0;
      }

      /* TYPOGRAPHY */
      .zigrow-hero-2 .zigrow-hero-2-title {
        color: #fff;
        font-size: 2.5rem;
        line-height: 1.1;
      }

      .zigrow-hero-2 .zigrow-hero-2-text {
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
      }

      .zigrow-hero-2 .zigrow-hero-2-btn-wrap {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
      /* BUTTON */
      .zigrow-hero-2 .zigrow-hero-2-btn {
        background-color: var(--primary-colors, #1159f1);
        color: #fff;
        border-radius: 28px;
        padding: 0.8rem 1.5rem;
        outline: none;
        cursor: pointer;
        border: 0;
        transition: all 0.35s ease-in-out;
        box-shadow: 0 4px 12px rgba(66, 133, 244, 0.25);
        position: relative;
        overflow: hidden;
        letter-spacing: 1px;
        text-decoration: none;
        display: inline-block;
      }

      .zigrow-hero-2 .zigrow-hero-2-btn:hover {
        box-shadow: 0 0px 16px var(--primary-colors, #1159f1);
      }

      /* IMAGE WRAPPER */
      .zigrow-hero-2 .zigrow-hero-2-image-wrapper {
        text-align: center;
        max-width: 850px;
        margin: 0 auto;
      }

      .zigrow-hero-2 .zigrow-hero-2-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }

      /* RESPONSIVE TWEAKS */
      @media (min-width: 768px) {
        /* on md+ make text left aligned */
        .zigrow-hero-2 .zigrow-hero-2-left {
          text-align: left;
        }
      }

      @media (min-width: 1024px) {
        .zigrow-hero-2 .content-container {
          padding-left: 4rem;
        }

        .zigrow-hero-2 .zigrow-hero-2-title {
          font-size: 3.5rem;
        }
      }

      @media (min-width: 769px) and (max-width: 1023.98px) {
        .zigrow-hero-2 .zigrow-hero-2-title {
          font-size: 3.5rem;
        }
      }
    </style>
    </section>
  `,
});
Vvveb.Blocks.add("bootstrap4/zigrow-hero-3", {
    name: "Hero-3",
    category: "hero",
    image: "https://i.postimg.cc/bN0451gj/Screenshot-2025-11-20-153809.png",
    html: ` <section id="zigrow-hero-3" data-section="zigrow-hero-3" class="zigrow-hero-3 py-6">
      <div class="container">
        <!-- Bootstrap grid instead of flex -->
        <div class="row zigrow-hero-3-inner">
          <!-- Left Vertical Text (hidden on small screens) -->
          <div class="col-md-1 d-none d-md-block zigrow-hero-3-left">
            <div class="zigrow-hero-3-left-content">
              <p class="rotate-text-small">Designer</p>
              <div class="zigrow-hero-3-vertical-line"></div>
              <p class="rotate-text-small">2025</p>
            </div>
          </div>

          <!-- Center Text -->
          <div class="col-12 col-md-6 zigrow-hero-3-center">
            <h1 class="zigrow-hero-3-title no-theme-size">
              Freelancer, <span class="zigrow-hero-3-highlight">designer</span> and a<br />
              content<br />
              creator
            </h1>

            <!-- Social Icons -->
            <div class="zigrow-hero-3-social">
              <a href="#"><i class="bi bi-twitter" data-icon="twitter"></i></a>
              <a href="#"
                ><i class="bi bi-linkedin" data-icon="linkedin"></i
              ></a>
              <a href="#"><i class="bi bi-behance" data-icon="behance"></i></a>
            </div>
          </div>

          <!-- Right Image + Scroll -->
          <div class="col-12 col-md-5 zigrow-hero-3-right mt-4 mt-md-0">
            <div class="zigrow-hero-3-image-wrapper">
               <img
                src="/builder/img/zigrow-team-images/zigrow-hero-3-portfolio template hero.webp"
                alt="Profile"
                class="zigrow-hero-3-image"
              />
            </div>

            <a id="scrollDown" href="#about" class="zigrow-hero-3-scroll-link">
              Scroll Down <i class="bi bi-arrow-down" data-icon="arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
       <style>
      .py-6 {
        padding: 3rem 0;
      }

      /* Wrapper – spacing only, no flex */
      .zigrow-hero-3 .zigrow-hero-3-inner {
        padding-top: 2rem;
        padding-bottom: 2rem;
        align-items: center;
      }

      /* LEFT VERTICAL TEXT */
      .zigrow-hero-3 .zigrow-hero-3-left {
        text-align: center;
      }

      .zigrow-hero-3 .zigrow-hero-3-left-content {
        display: inline-block;
      }

      .zigrow-hero-3 .rotate-text-small {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        font-size: 14px;
        letter-spacing: 0.08em;
        color: #1b2733;
        margin: 0;
      }

      .zigrow-hero-3 .zigrow-hero-3-vertical-line {
        width: 1px;
        height: 220px;
        background-color: #e0e0e0;
        margin: 1.2rem auto;
      }

      /* CENTER TEXT */
      .zigrow-hero-3 .zigrow-hero-3-center {
        max-width: 650px;
      }

      .zigrow-hero-3 .zigrow-hero-3-title {
        margin: 0;
        color: #20252b;
        font-weight: 400;
        line-height: 1.25;
        font-size: clamp(3.2rem, 6.4vw, 5rem);
      }

      .zigrow-hero-3 .zigrow-hero-3-highlight {
        color: var(--primary-colors, #ff6b35);
      }

      .zigrow-hero-3 .zigrow-hero-3-social {
        margin-top: 2.5rem;
      }

      .zigrow-hero-3 .zigrow-hero-3-social a {
        font-size: 1.75rem;
        color: #1b2733;
        margin-right: 2rem;
        text-decoration: none;
        display: inline-block;
        transition: 0.2s;
      }

      .zigrow-hero-3 .zigrow-hero-3-social a:last-child {
        margin-right: 0;
      }

      .zigrow-hero-3 .zigrow-hero-3-social a:hover {
        color: #98989b;
      }

      /* RIGHT IMAGE + SCROLL */
      .zigrow-hero-3 .zigrow-hero-3-right {
        text-align: center;
        /* align-items: center; */
      }

      .zigrow-hero-3 .zigrow-hero-3-image-wrapper {
        text-align: center;
        max-width: 360px;
        border-radius: 28px;
        margin: 0 auto;
      }

      .zigrow-hero-3 .zigrow-hero-3-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        width: 360px;
        border-radius: 28px;
      }

      .zigrow-hero-3 .zigrow-hero-3-scroll-link {
        display: block;
        margin-top: 1.2rem;
        font-size: 1rem;
        color: #3e4651;
        text-decoration: none;
      }

      .zigrow-hero-3 .zigrow-hero-3-scroll-link:hover {
        text-decoration: underline;
      }

      /* RESPONSIVE TWEAKS */
      @media (max-width: 768px) {
        .zigrow-hero-3 .zigrow-hero-3-center {
          max-width: 100%;
          margin-bottom: 2rem;
          text-align: center;
        }

        .zigrow-hero-3 .zigrow-hero-3-social {
          text-align: center;
        }
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-hero-4", {
    name: "Hero-4",
    category: "hero",
    image: "https://i.postimg.cc/ZK5cx3Wc/Screenshot-2025-11-20-162324.png",
    html: ` <section id="zigrow-hero-4" data-section="zigrow-hero-4" class="zigrow-hero-4 py-6">
      <div class="container">
        <!-- Bootstrap grid instead of flex -->
        <div class="row zigrow-hero-4-inner g-4">
          <!-- Left Column: Text -->
          <div class="col-12 col-lg-7 zigrow-hero-4-left">
            <!-- Icon -->
       
<div class="zigrow-hero-4-left-icon">
  <i class="fa-solid fa-bullhorn" aria-hidden="true"></i>
</div>

            <!-- Heading -->
            <h1 class="zigrow-hero-4-title font-montserrat">
              Boost Your <span class="text-purple">Business</span><br />
              <span class="zigrow-hero-4-subtitle">
                with Proven Digital Strategies
              </span>
            </h1>

            <!-- Description -->
            <p class="zigrow-hero-4-desc">
              Maximize your online presence with expert SEO, targeted ads, and
              high-converting content. Let’s create a strategy that drives real
              results for your business!
            </p>

            <!-- Buttons -->
            <div class="zigrow-hero-4-actions">
              <a class="primary-btn" href="tel:+91-9123456789" data-btn="hero-4">
                Book a FREE Consultation
              </a>
              <a class="secondary-btn" href="#our-services" data-btn="hero-4"> Learn More </a>
            </div>
          </div>

          <!-- Right Column: Overlapping Image Collage -->
          <div class="col-12 col-lg-5 zigrow-hero-4-right mt-4 mt-lg-0">
            <div class="zigrow-hero-4-collage">
              <!-- Image 1 -->
              <div class="zigrow-hero-4-img-box-right">
               <img
               src="/builder/img/zigrow-team-images/zigrow-hero-4-Digital Agency 1.webp"
                class="zigrow-hero-4-img zigrow-hero-4-img-main"
                alt="Digital Agency"
              />
              </div>
              <!-- Image 2 -->
              <div class="zigrow-hero-4-img-box-right">
               <img
                src="/builder/img/zigrow-team-images/zigrow-hero-4-Untitled design-6-2.webp"
                class="zigrow-hero-4-img zigrow-hero-4-img-2"
                alt="Marketing Visual 1"
              />
              </div>

              <!-- Image 3 -->
              <div class="zigrow-hero-4-img-box-right">
                 <img
              src="/builder/img/zigrow-team-images/zigrow-hero-4-Untitled design-7-2.webp"
                class="zigrow-hero-4-img zigrow-hero-4-img-3"
                alt="Marketing Visual 2"
              />
              </div>

              <!-- Top-right icon -->
          
<div class="zigrow-hero-4-icon zigrow-hero-4-icon-top">
  <i class="fa-solid fa-chart-line" aria-hidden="true"></i>
</div>

              <!-- Bottom-left icon -->
          
<div class="zigrow-hero-4-icon zigrow-hero-4-icon-bottom">
  <i class="fa-solid fa-lightbulb" aria-hidden="true"></i>
</div>
            </div>
          </div>
        </div>
      </div> <style>
      .py-6 {
        padding: 3rem 0;
      }

      .zigrow-hero-4 {
        background-color: #ffffff;
        
      }

      .zigrow-hero-4 .text-purple {
        color: var(--primary-colors, #7e22ce);
      }

      /* We now use Bootstrap row/col for layout.
         zigrow-hero-4-inner is only for spacing, no flex. */
      .zigrow-hero-4 .zigrow-hero-4-inner {
        align-items: center;
        padding: 1rem 0;
      }

      /* BUTTONS */
      .zigrow-hero-4 .primary-btn {
        background: var(
            --primary-colors,
            #6a0dad
          )
        );
        color: white;
        border-radius: 5px;
        padding: 0.8rem 1.2rem;
        outline: none;
        border: 0;
        transition: all 0.35s ease-in-out;
        box-shadow: 0 4px 12px var(--primary-colors, rgba(106, 13, 173, 0.25));
        position: relative;
        overflow: hidden;
        text-decoration: none;
      }

      .zigrow-hero-4 .primary-btn:before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.15);
        transition: all 0.6s ease-in-out;
        transform: skewX(-20deg);
      }

      .zigrow-hero-4 .primary-btn:hover::before {
        left: 100%;
      }

      .zigrow-hero-4 .primary-btn:hover {
        transform: translateY(-4px) scale(1.03);
        box-shadow: 0 10px 25px var(--primary-colors, rgba(106, 13, 173, 0.4));
      }

      .zigrow-hero-4 .primary-btn:active {
        transform: scale(0.98);
        box-shadow: 0 6px 12px var(--primary-colors, rgba(106, 13, 173, 0.25));
      }

      .zigrow-hero-4 .secondary-btn {
        background: white;
        color: black;
        border-radius: 5px;
        padding: 0.8rem 1.2rem;
        outline: none;
        border: 1px solid black;
        transition: all 0.35s ease-in-out;
        box-shadow: 0 4px 12px var(--primary-colors, rgba(106, 13, 173, 0.25));
        position: relative;
        overflow: hidden;
        text-decoration: none;
      }

      .zigrow-hero-4 .secondary-btn:before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.15);
        transition: all 0.6s ease-in-out;
        transform: skewX(-20deg);
      }

      .zigrow-hero-4 .secondary-btn:hover::before {
        left: 100%;
      }

      .zigrow-hero-4 .secondary-btn:hover {
        transform: translateY(-4px) scale(1.03);
        box-shadow: 0 10px 25px var(--primary-colors, rgba(106, 13, 173, 0.4));
      }

      .zigrow-hero-4 .secondary-btn:active {
        transform: scale(0.98);
        box-shadow: 0 6px 12px var(--primary-colors, rgba(106, 13, 173, 0.25));
      }

      /* LEFT COLUMN */
      .zigrow-hero-4 .zigrow-hero-4-left {
        position: relative;
        text-align: center;
      }

      @media (min-width: 992px) {
        .zigrow-hero-4 .zigrow-hero-4-left {
          text-align: left;
        }
      }

      .zigrow-hero-4 .zigrow-hero-4-left-icon {
        position: absolute;
        text-align: center;
        top: -6px;
        left: -12px;
        z-index: 5;
      }
      .zigrow-hero-4 .zigrow-hero-4-left-icon img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
      @media (max-width: 992px) {
        .zigrow-hero-4 .zigrow-hero-4-left-icon {
          display: none;
        }
      }

      .zigrow-hero-4 .zigrow-hero-4-title {
        font-weight: 700;
        font-size: clamp(2.5rem, 6vw, 3.5rem);
        line-height: 1.15;
        margin: 0;
      }

      .zigrow-hero-4 .zigrow-hero-4-subtitle {
        display: block;
        font-weight: 400;
        color: #111827;
        margin-top: 0.5rem;
        font-size: clamp(1.6rem, 5vw, 2.8rem);
      }

      .zigrow-hero-4 .zigrow-hero-4-desc {
        margin-top: 0.75rem;
        font-size: 1.1rem;
        line-height: 1.5;
        color: var(--secondary-colors, #6b7280);
        max-width: 520px;
        margin-left: auto;
        margin-right: auto;
      }

      @media (min-width: 992px) {
        .zigrow-hero-4 .zigrow-hero-4-desc {
          text-align: left;
          margin-left: 0;
          margin-right: 0;
        }
      }

      /* BUTTON WRAPPER – no flex, uses inline-block + text-align */
      .zigrow-hero-4 .zigrow-hero-4-actions {
        margin-top: 1.5rem;
        text-align: center;
      }

      .zigrow-hero-4 .zigrow-hero-4-actions a {
        display: inline-block;
        margin: 0.35rem 0.6rem 0.35rem 0;
      }

      @media (min-width: 992px) {
        .zigrow-hero-4 .zigrow-hero-4-actions {
          text-align: left;
        }
      }

      /* RIGHT COLUMN */
      .zigrow-hero-4 .zigrow-hero-4-right {
        text-align: center;
      }

      .zigrow-hero-4 .zigrow-hero-4-collage {
        position: relative;
        width: 300px;
        height: 320px;
        margin: 0 auto;
      }

      .zigrow-hero-4 .zigrow-hero-4-img {
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
      }

      .zigrow-hero-4 .zigrow-hero-4-img-box-right{
        text-align: center;
      }
      .zigrow-hero-4 .zigrow-hero-4-img-box-right img{
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
      .zigrow-hero-4 .zigrow-hero-4-img-main {
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        z-index: 1;
      }

      .zigrow-hero-4 .zigrow-hero-4-img-2 {
        position: absolute;
        top: 160px;
        right: -70px;
        width: 150px;
        z-index: 2;
        /* display: none; */
      }

      .zigrow-hero-4 .zigrow-hero-4-icon {
  position: absolute;
  z-index: 5;
}
.zigrow-hero-4 .zigrow-hero-4-left-icon i,
.zigrow-hero-4 .zigrow-hero-4-icon i {
  color: var(--primary-colors, #7e22ce);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.zigrow-hero-4 .zigrow-hero-4-left-icon i {
  font-size: 24px;
}

.zigrow-hero-4 .zigrow-hero-4-icon-top i {
  font-size: 34px;
}

.zigrow-hero-4 .zigrow-hero-4-icon-bottom i {
  font-size: 44px;
}

      .zigrow-hero-4 .zigrow-hero-4-img-3 {
        position: absolute;
        top: 150px;
        left: 10px;
        width: 182px;
        z-index: 1;
        /* display: none; */
      }

      .zigrow-hero-4 .zigrow-hero-4-icon {
        position: absolute;
        z-index: 5;
      }

      .zigrow-hero-4 .zigrow-hero-4-icon-top {
        text-align: center;
        top: 110px;
        right: -50px;
        box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);
        padding: 0.25rem;
        /* display: none; */
      }

      .zigrow-hero-4 .zigrow-hero-4-icon-bottom {
        text-align: center;
        bottom: 10px;
        left: -40px;
        padding: 0.5rem;
        /* display: none; */
      }

      @media (max-width: 992px) {
        
        .zigrow-hero-4 .zigrow-hero-4-icon-top,
        .zigrow-hero-4 .zigrow-hero-4-icon-bottom {
          display: none;
        }
      }

      /* MOBILE COLLAGE: no flex, just stacked & centered */
      @media (max-width: 991.98px) {
        .zigrow-hero-4 .zigrow-hero-4-collage {
          width: 100%;
          height: auto;
          text-align: center;
        }

        .zigrow-hero-4 .zigrow-hero-4-img-main {
          position: static;
          width: 100%;
          max-width: 320px;
          margin: 0 auto 1rem;
          display: block;
        }

        .zigrow-hero-4 .zigrow-hero-4-img-2,
        .zigrow-hero-4 .zigrow-hero-4-img-3 {
          position: static;
          width: 65%;
          max-width: 220px;
          margin: 0 auto 0.75rem;
          display: block;
        }
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-hero-5", {
    name: "Hero-5",
    category: "hero",
    image: "https://i.postimg.cc/WbC4Y6fn/hero5.png",
    html: `  <section id="zigrow-hero-5" data-section="zigrow-hero-5" class="zigrow-hero-5 py-6" aria-label="Hero">
      <div class="container">
        <!-- TOP: COPY AREA USING BOOTSTRAP GRID -->
        <div class="row copy-row">
          <div class="col-12 col-lg-6 copy-left">
            <p class="eyebrow">Hello There…</p>
            <h1 class="headline">
              I’m Sam. Your Design <br />Partner For new <br />
              Beautiful Ideas
              <span class="emoji" aria-hidden="true">🏀</span>
            </h1>
          </div>

          <div class="col-12 col-lg-6 copy-right">
            <p class="intro">
              <span class="ping" aria-hidden="true"></span>
              <span class="designer">A Freelance UI/UX Designer</span> based in Germany. I strive to
              build immersive and beautiful web applications through carefully
              crafted user-centric design.
            </p>
            <a href="#" class="cta" data-btn="hero-5">
              Contact Me
              <span aria-hidden="true"
                ><i class="fa-solid fa-arrow-right" data-icon="arrow-right"></i
              ></span>
            </a>
          </div>
        </div>

        <!-- BOTTOM: GALLERY GRID USING BOOTSTRAP ROW/COLS -->
        <div class="gallery">
          <div class="scroll-indicator" aria-hidden="true">
            <span>Scroll Down</span>
            <a class="dot" type="button" tabindex="-1">
              <i class="fa-solid fa-arrow-down" data-icon="arrow-down"></i>
            </a>
          </div>

          <div class="row img-row g-3 g-md-4">
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="card-figure notch-left">
               <img  src="/builder/img/zigrow-hero-images/1.webp" alt="" />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="card-figure notch-2">
               <img  src="/builder/img/zigrow-hero-images/2.webp" alt="" />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="card-figure notch-3">
            <img  src="/builder/img/zigrow-hero-images/3.webp" alt="" />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="card-figure notch-right">
             <img  src="/builder/img/zigrow-hero-images/4.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
       <style>
      .py-6 {
        padding: 3rem 0;
      }

      :root {
        /* --primary-colors: #9cf23a;
        --secondary-colors: #f5f5f5;
        --territory-colors: #0f0f10; */
        --grid: rgba(255, 255, 255, 0.06);
        --muted: #b9b9b9;
        --card: #171819;
        --radius-xl: 22px;
        --radius-2xl: 28px;
        --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.35);
        --header-h: 72px;
      }

      /* HERO BASE */
      .zigrow-hero-5 {
        background: radial-gradient(
            1200px 800px at 20% -10%,
            rgba(255, 255, 255, 0.06),
            transparent 60%
          ),
          var(--territory-colors, #0f0f10);
        color: var(--secondary-colors, #f5f5f5);
        padding-block: 3rem;
        position: relative;
        overflow: clip;
      }

      .zigrow-hero-5::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: linear-gradient(var(--grid) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid) 1px, transparent 1px);
        background-size: 60px 60px, 60px 60px;
        -webkit-mask: linear-gradient(
          180deg,
          transparent 0,
          rgba(0, 0, 0, 0.5) 30%,
          rgba(0, 0, 0, 0.9) 100%
        );
        mask: linear-gradient(
          180deg,
          transparent 0,
          rgba(0, 0, 0, 0.5) 30%,
          rgba(0, 0, 0, 0.9) 100%
        );
        pointer-events: none;
      }

      /* TOP COPY ROW (Bootstrap handles layout) */
      .zigrow-hero-5 .copy-row {
        margin-bottom: 2.5rem;
      }

      .zigrow-hero-5 .copy-left {
        min-width: 0;
      }

      .zigrow-hero-5 .copy-right {
        max-width: 450px;
        margin-left: auto;
        text-align: end;
      }

      @media (max-width: 992px) {
        .zigrow-hero-5 .copy-right {
          text-align: center;
          /* max-width: 100%; */
          margin: 1.5rem auto 0rem;
        }
        .zigrow-hero-5 .copy-row {
          text-align: center;
        }
      }

      .zigrow-hero-5 .eyebrow {
        color:#ffffff;
        font-size: clamp(0.9rem, 1.2vw, 1rem);
        margin: 0 0 0.25rem 0;
      }

      .zigrow-hero-5 .headline {
        margin: 0 0 1rem 0;
        font-size: clamp(1.4rem, 6vw, 3rem);
        line-height: 1.05;
        font-weight: 700;
        letter-spacing: 0.2px;
        max-width: 28ch;
        word-wrap: break-word;
      }

      .zigrow-hero-5 .headline .emoji {
        filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.35));
      }

      .zigrow-hero-5 .intro {
        color: #ffffff;
        max-width: 60ch;
        line-height: 1.6;
        margin: 0 0 1.25rem 0;
        position: relative;
        padding-left: 1.25rem;
      }

      .zigrow-hero-5 .intro .ping {
        position: absolute;
        left: 0;
        top: 0.45rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 999px;
        background: var(--primary-colors, #9cf23a);
        box-shadow: 0 0 0 0 rgba(156, 242, 58, 0.6);
        animation: ping 2s infinite;
      }

      /* CTA BUTTON – no flex */
      .zigrow-hero-5 .cta {
        background: var(--primary-colors, #9cf23a);
        color: #fff;
        text-decoration: none;
        padding: 0.9rem 2.15rem;
        border-radius: 20px;
        font-weight: 700;
        transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        display: inline-block;
      }

      .zigrow-hero-5 .cta span {
        margin-left: 0.4rem;
      }

      .zigrow-hero-5 .cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px var(--primary-colors, rgba(156, 242, 58, 0.28));
        filter: saturate(1.1);
      }

      @media (max-width: 420px) {
        .zigrow-hero-5 .cta {
          padding: 0.8rem 1.5rem;
        }
      }

      /* GALLERY WRAPPER */
      .zigrow-hero-5 .gallery {
        width: 100%;
        position: relative;
        margin-top: 2rem;
      }

      /* IMAGE GRID USING BOOTSTRAP ROW/COLS */
      .zigrow-hero-5 .img-row {
        align-items: end;
      }

      .zigrow-hero-5 .img-row .card-figure {
        text-align: center;
        height: auto;
        background: var(--card);
        border-radius: var(--radius-xl);
        overflow: hidden;
        box-shadow: var(--shadow-lg);
        aspect-ratio: 4/5;
      }

      .zigrow-hero-5 .img-row .card-figure img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      /* Notch styles */
      .zigrow-hero-5 .img-row .notch-left {
        border-top-right-radius: 46px 46px;
        aspect-ratio: 4/6;
      }

      .zigrow-hero-5 .img-row .notch-right {
        border-top-left-radius: 46px 46px;
        aspect-ratio: 4/6;
      }

      .zigrow-hero-5 .img-row .notch-2 {
        border-top-right-radius: 46px 46px;
      }

      .zigrow-hero-5 .img-row .notch-3 {
        border-top-left-radius: 46px 46px;
      }

      @media (max-width: 992px) {
        .zigrow-hero-5 .img-row .card-figure {
          border-radius: var(--radius-xl);
          aspect-ratio: 4/5;
        }

        .zigrow-hero-5 .img-row .notch-left {
          border-top-left-radius: var(--radius-xl);
        }

        .zigrow-hero-5 .img-row .notch-right {
          border-top-right-radius: var(--radius-xl);
        }
      }

      /* SCROLL INDICATOR */
      .zigrow-hero-5 .scroll-indicator {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        top: 1.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.6rem;
        color: #fff;
        font-size: 0.85rem;
      }

      .zigrow-hero-5 .scroll-indicator .dot {
        padding: 1.5rem 0.8rem;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: #141414;
        color: #e6e6e6;
        display: grid;
        text-decoration: none;
        place-items: center;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
      }

      @media (max-width: 992px) {
        .zigrow-hero-5 .scroll-indicator {
          top: -1rem;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .zigrow-hero-5 .intro .ping {
          animation: none;
        }

        .zigrow-hero-5 .cta {
          transition: none;
        }
      }

      /* ANIMATIONS */
      @keyframes ping {
        0% {
          box-shadow: 0 0 0 0 rgba(156, 242, 58, 0.6);
        }
        70% {
          box-shadow: 0 0 0 12px rgba(156, 242, 58, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(156, 242, 58, 0);
        }
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-hero-6", {
name: "Hero-6",
category: "hero",
image:
"https://i.postimg.cc/25yKf61p/Screenshot-2026-07-21-170544.png",

html: `

<section
  id="zigrow-hero-6"
  data-section="zigrow-hero-6"
  class="zigrow-hero-6"
>
  <div class="zigrow-hero-6-overlay"></div>

  <div class="zigrow-hero-6-container">
    <div class="zigrow-hero-6-content">
      <p class="zigrow-hero-6-eyebrow">DISCOVER</p>


  <h1 class="zigrow-hero-6-title">
    Transform Your Vision<br />
    with Expert Solutions
  </h1>

  <p class="zigrow-hero-6-description">
    We create thoughtful solutions designed around your unique goals. Let
    our experienced team help you build something valuable and lasting.
  </p>

  <div class="zigrow-hero-6-actions">
    <a
      href="#contact"
      class="zigrow-hero-6-button zigrow-hero-6-button-primary"
      data-btn="hero"
    >
      Contact
    </a>

    <a
      href="#about"
      class="zigrow-hero-6-button zigrow-hero-6-button-secondary"
      data-btn="hero"
    >
      Join
    </a>
  </div>
</div>


  </div>

  <style>
    .zigrow-hero-6 {
      position: relative;
      width: 100%;
      min-height: 530px;
      height: 85vh;
      overflow: hidden;
      background-image: url("https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1920&q=85");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .zigrow-hero-6 .zigrow-hero-6-overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: rgba(7, 12, 17, 0.58);
      pointer-events: none;
    }

    .zigrow-hero-6 .zigrow-hero-6-container {
      position: relative;
      z-index: 2;
      display: grid;
      align-items: center;
      width: min(100% - 40px, 1080px);
      min-height: 100%;
      margin: 0 auto;
    }

    .zigrow-hero-6 .zigrow-hero-6-content {
      max-width: 560px;
      padding: 70px 0;
    }

    .zigrow-hero-6 .zigrow-hero-6-eyebrow {
      margin: 0 0 10px;
      color: var(--territory-colors, #ffffff);
      font-size: 0.88rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      line-height: 1.4;
      text-transform: uppercase;
    }

    .zigrow-hero-6 .zigrow-hero-6-title {
      margin: 0 0 14px;
      color: #ffffff;
      font-size: clamp(2.25rem, 5vw, 3.25rem);
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.08;
    }

    .zigrow-hero-6 .zigrow-hero-6-description {
      max-width: 500px;
      margin: 0 0 24px;
      color: #fff;
      font-size: 1.05rem;
      line-height: 1.55;
    }

    .zigrow-hero-6 .zigrow-hero-6-actions {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      gap: 12px;
      align-items: center;
    }

    .zigrow-hero-6 .zigrow-hero-6-button {
      display: grid;
      min-height: 42px;
      padding: 10px 16px;
      place-items: center;
      border: 1px solid transparent;
      border-radius: 0;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1;
      text-decoration: none;
      transition:
        background-color 0.25s ease,
        border-color 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-hero-6 .zigrow-hero-6-button-primary {
      background: var(--primary-colors, #ffffff);
      color: #222222;
    }

    .zigrow-hero-6 .zigrow-hero-6-button-primary:hover {
      transform: translateY(-2px);
      background: #ffffff;
      color: var(--primary-colors, #222222);
    }

    .zigrow-hero-6 .zigrow-hero-6-button-secondary {
      border-color: rgba(255, 255, 255, 0.85);
      background: transparent;
      color: #ffffff;
    }

    .zigrow-hero-6 .zigrow-hero-6-button-secondary:hover {
      transform: translateY(-2px);
      border-color: var(--territory-colors, #ffffff);
      background: var(--territory-colors, #ffffff);
      color: #222222;
    }

    @media (max-width: 767px) {
      .zigrow-hero-6 {
        min-height: 600px;
        height: auto;
        background-position: 58% center;
      }

      .zigrow-hero-6 .zigrow-hero-6-container {
        width: min(100% - 32px, 1080px);
      }

      .zigrow-hero-6 .zigrow-hero-6-content {
        max-width: 520px;
        padding: 110px 0 80px;
      }

      .zigrow-hero-6 .zigrow-hero-6-title {
        font-size: clamp(2rem, 10vw, 2.7rem);
      }

      .zigrow-hero-6 .zigrow-hero-6-description {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .zigrow-hero-6 .zigrow-hero-6-actions {
        grid-template-columns: 1fr;
        width: min(100%, 220px);
      }

      .zigrow-hero-6 .zigrow-hero-6-button {
        width: 100%;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-hero-6 .zigrow-hero-6-actions {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>

</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-hero-7", {
  name: "Hero-7",
  category: "hero",
  image:
    "https://i.postimg.cc/QMCyrtFN/Screenshot-2026-07-21-170609.png",
  html: `
<section
  id="zigrow-hero-7"
  class="zigrow-hero-7 py-6"
  data-section="zigrow-hero-7"
>
  <div class="zigrow-hero-7-container">
    <div class="zigrow-hero-7-heading-wrap">
      <h1 class="zigrow-hero-7-heading">Grow With Purpose</h1>
    </div>

    <div class="zigrow-hero-7-intro-grid">
      <div class="zigrow-hero-7-intro-item">
        <p>
          Discover practical solutions designed to help your business grow with
          greater clarity and confidence.
        </p>
      </div>

      <div class="zigrow-hero-7-intro-item">
        <p>
          Our services support different goals, combining thoughtful ideas with
          dependable everyday guidance.
        </p>
      </div>
    </div>

    <div
      class="zigrow-hero-7-media zigrow-hero-7-media-center"
  
    >
      <img
        class="zigrow-hero-7-main-image"
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&amp;fit=crop&amp;w=1800&amp;q=85"
        alt="Modern workspace prepared for business growth"
      />

      <div class="zigrow-hero-7-thumbnail-grid">
        <div class="zigrow-hero-7-thumbnail-item ">
          <div
            class="zigrow-hero-7-thumbnail zigrow-hero-7-thumbnail-active zigrow-hero-7-media-center"
        
          >
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&amp;fit=crop&amp;w=500&amp;q=80"
              alt="Business team working together"
            />
          </div>
        </div>

        <div class="zigrow-hero-7-thumbnail-item ">
          <div
            class="zigrow-hero-7-thumbnail zigrow-hero-7-media-center"
        
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&amp;fit=crop&amp;w=500&amp;q=80"
              alt="Professionals discussing business plans"
            />
          </div>
        </div>

        <div class="zigrow-hero-7-thumbnail-item ">
          <div
            class="zigrow-hero-7-thumbnail zigrow-hero-7-media-center"
        
          >
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&amp;fit=crop&amp;w=500&amp;q=80"
              alt="Organized desk for productive work"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .py-6 {
      padding: 3rem 0;
    }

    .zigrow-hero-7 {
      width: 100%;
      overflow: hidden;
      background: #ffffff;
    }

    .zigrow-hero-7 .zigrow-hero-7-container {
      width: min(100% - 2rem, 1440px);
      margin: 0 auto;
    }

    .zigrow-hero-7 .zigrow-hero-7-heading-wrap {
      width: 100%;
      overflow: hidden;
    }

    .zigrow-hero-7 .zigrow-hero-7-heading {
      margin: 0;
      color: #050505;
      font-size: clamp(4rem, 11.5vw, 10.5rem);
      font-weight: 700;
      line-height: 0.9;
      letter-spacing: -0.075em;
      white-space: nowrap;
    }

    .zigrow-hero-7 .zigrow-hero-7-intro-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      column-gap: clamp(3rem, 14vw, 14rem);
      margin-top: clamp(3rem, 6vw, 6rem);
      margin-bottom: clamp(1.75rem, 3vw, 2.75rem);
    }

    .zigrow-hero-7 .zigrow-hero-7-intro-item:last-child {
      justify-self: end;
      max-width: 31rem;
    }

    .zigrow-hero-7 .zigrow-hero-7-intro-item p {
      max-width: 31rem;
      margin: 0;
      color: var(--secondary-colors, #4f4f4f);
      font-size: clamp(0.95rem, 1.2vw, 1.15rem);
      font-weight: 400;
      line-height: 1.45;
    }

    .zigrow-hero-7 .zigrow-hero-7-media {
      position: relative;
      min-height: clamp(26rem, 52vw, 43rem);
      overflow: hidden;
      border: 1px solid rgba(0, 0, 0, 0.06);
      border-radius: clamp(1.25rem, 2vw, 2rem);
      background: var(--territory-colors, #d9e8f2);
    }

    .zigrow-hero-7 .zigrow-hero-7-media-center {
      text-align: center;
    }

    .zigrow-hero-7 .zigrow-hero-7-main-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .zigrow-hero-7 .zigrow-hero-7-media::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.04) 0%,
        rgba(255, 255, 255, 0) 55%,
        rgba(255, 255, 255, 0.16) 100%
      );
      pointer-events: none;
    }

    .zigrow-hero-7 .zigrow-hero-7-thumbnail-grid {
      position: absolute;
      right: clamp(1rem, 2.4vw, 2.5rem);
      bottom: clamp(1rem, 2.4vw, 2.5rem);
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(3, minmax(5rem, 8.5rem));
      gap: clamp(0.55rem, 1vw, 1rem);
    }

    .zigrow-hero-7 .zigrow-hero-7-thumbnail-item {
      min-width: 0;
    }

    .zigrow-hero-7 .zigrow-hero-7-thumbnail {
      position: relative;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      border: 2px solid rgba(255, 255, 255, 0.75);
      border-radius: clamp(0.45rem, 0.8vw, 0.75rem);
      background: #ffffff;
      box-shadow: 0 0.7rem 1.8rem rgba(0, 0, 0, 0.14);
    }

    .zigrow-hero-7 .zigrow-hero-7-thumbnail-active {
      border-color: var(--primary-colors, #2563eb);
    }

    .zigrow-hero-7 .zigrow-hero-7-thumbnail img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease;
    }

    .zigrow-hero-7 .zigrow-hero-7-thumbnail:hover img {
      transform: scale(1.05);
    }

    @media (max-width: 991px) {
      .zigrow-hero-7 .zigrow-hero-7-heading {
        font-size: clamp(3.8rem, 12.5vw, 7.5rem);
      }

      .zigrow-hero-7 .zigrow-hero-7-intro-grid {
        column-gap: 3rem;
      }

      .zigrow-hero-7 .zigrow-hero-7-thumbnail-grid {
        grid-template-columns: repeat(3, minmax(4.5rem, 7rem));
      }
    }

    @media (max-width: 767px) {
      .zigrow-hero-7 .zigrow-hero-7-heading {
        font-size: clamp(3.4rem, 17vw, 6.5rem);
        line-height: 0.94;
        white-space: normal;
      }

      .zigrow-hero-7 .zigrow-hero-7-intro-grid {
        grid-template-columns: 1fr;
        row-gap: 1rem;
        margin-top: 2rem;
      }

      .zigrow-hero-7 .zigrow-hero-7-intro-item:last-child {
        justify-self: start;
      }

      .zigrow-hero-7 .zigrow-hero-7-media {
        min-height: 31rem;
      }

      .zigrow-hero-7 .zigrow-hero-7-thumbnail-grid {
        right: 1rem;
        bottom: 1rem;
        left: 1rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (max-width: 479px) {
      .zigrow-hero-7 .zigrow-hero-7-container {
        width: min(100% - 1.25rem, 1440px);
      }

      .zigrow-hero-7 .zigrow-hero-7-heading {
        font-size: clamp(3rem, 17vw, 4.8rem);
        letter-spacing: -0.065em;
      }

      .zigrow-hero-7 .zigrow-hero-7-media {
        min-height: 27rem;
        border-radius: 1rem;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-hero-8", {
  name: "Hero-8",
  category: "hero",
  image:
    "https://i.postimg.cc/ZKSjKPb4/Screenshot-2026-07-22-160313.png",

  html: `
<section
  id="zigrow-hero-8"
  data-section="zigrow-hero-8"
  class="zigrow-hero-8" style="background-image: linear-gradient(235deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%); background-size: cover; background-position: center center;"
>
  <div class="zigrow-hero-8-content">
    <h1 class="zigrow-hero-8-title">
      Building Tomorrow’s<br />
      Smarter Solutions
    </h1>

    <p class="zigrow-hero-8-description">
      We deliver practical services, tailored strategies, and reliable support
      that help modern businesses grow with confidence.
    </p>

    <div class="zigrow-hero-8-action">
      <a
        href="#contact"
        class="zigrow-hero-8-button"
        data-btn="hero"
      >
        <span>Get a Custom Quote</span>

        <span class="zigrow-hero-8-button-icon">
          <i
            class="bi bi-chevron-right"
            data-icon="chevron-right"
          ></i>
        </span>
      </a>
    </div>
  </div>

  <div class="zigrow-hero-8-showcase">
    <div
      class="zigrow-hero-8-image-wrap zigrow-hero-8-image-left "
  
    >
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85"
        alt="Business website displayed on a laptop"
        class="zigrow-hero-8-image"
      />
    </div>

    <div
      class="zigrow-hero-8-image-wrap zigrow-hero-8-image-center "
  
    >
      <img
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85"
        alt="Mobile application displayed on a smartphone"
        class="zigrow-hero-8-image"
      />
    </div>

    <div
      class="zigrow-hero-8-image-wrap zigrow-hero-8-image-right "
  
    >
      <img
        src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=85"
        alt="Modern website displayed on a laptop"
        class="zigrow-hero-8-image"
      />
    </div>
  </div>

  <style>
    .zigrow-hero-8 {
      position: relative;
      width: calc(100% - 48px);
      max-width: 1500px;
      min-height: 780px;
      margin: 24px auto;
      padding: 72px 40px 0;
      overflow: hidden;
      border-radius: 38px;
      background:
        repeating-linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.2) 0,
          rgba(255, 255, 255, 0.2) 2px,
          rgba(255, 255, 255, 0.04) 2px,
          rgba(255, 255, 255, 0.04) 8px
        ),
        linear-gradient(
          100deg,
          var(--territory-colors, #b8a4ff) 0%,
          #f1edff 39%,
          #ddf6ff 68%,
          var(--primary-colors, #48c8ff) 100%
        );
    }

    .zigrow-hero-8::before {
      content: "";
      position: absolute;
      top: -180px;
      left: -150px;
      width: 580px;
      height: 580px;
      border-radius: 50%;
      background: var(--primary-colors, #5638ff);
      opacity: 0.22;
      filter: blur(80px);
      pointer-events: none;
    }

    .zigrow-hero-8::after {
      content: "";
      position: absolute;
      top: 160px;
      right: -120px;
      width: 480px;
      height: 480px;
      border-radius: 50%;
      background: var(--territory-colors, #e657ff);
      opacity: 0.25;
      filter: blur(90px);
      pointer-events: none;
    }

    .zigrow-hero-8 .zigrow-hero-8-content {
      position: relative;
      z-index: 3;
      width: min(100%, 850px);
      margin: 0 auto;
      text-align: center;
    }

    .zigrow-hero-8 .zigrow-hero-8-title {
      margin: 0;
     color: var(--secondary-colors, #28233c);
      font-size: clamp(2.5rem, 5vw, 4.15rem);
      font-weight: 800;
      letter-spacing: -0.035em;
      line-height: 1.08;
    }

    .zigrow-hero-8 .zigrow-hero-8-description {
      max-width: 760px;
      margin: 26px auto 0;
      color: var(--secondary-colors, #28233c);
      font-size: clamp(1rem, 1.5vw, 1.25rem);
      line-height: 1.55;
    }

    .zigrow-hero-8 .zigrow-hero-8-action {
      display: grid;
      justify-content: center;
      margin-top: 34px;
    }

    .zigrow-hero-8 .zigrow-hero-8-button {
      display: grid;
      grid-template-columns: auto auto;
      gap: 10px;
      align-items: center;
      width: max-content;
      min-height: 48px;
      padding: 12px 18px;
      border: 0;
      border-radius: 10px;
      background: linear-gradient(
        110deg,
        var(--primary-colors, #3349f4),
        var(--territory-colors, #4bbcf5)
      );
      box-shadow: 0 12px 28px rgba(63, 78, 219, 0.22);
      color: #ffffff;
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-hero-8 .zigrow-hero-8-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 34px rgba(63, 78, 219, 0.32);
    }

    .zigrow-hero-8 .zigrow-hero-8-button-icon {
      display: grid;
      place-items: center;
      font-size: 0.8rem;
    }

    .zigrow-hero-8 .zigrow-hero-8-showcase {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      height: 345px;
    }

    .zigrow-hero-8 .zigrow-hero-8-image-wrap {
      position: absolute;
      overflow: hidden;
      border-radius: 22px 22px 0 0;
      background: #ffffff;
      box-shadow: 0 22px 55px rgba(35, 24, 89, 0.2);
      text-align: center;
    }

    .zigrow-hero-8 .zigrow-hero-8-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .zigrow-hero-8 .zigrow-hero-8-image-left {
      bottom: -2px;
      left: 5%;
      width: 28%;
      height: 240px;
      transform: rotate(-1deg);
    }

    .zigrow-hero-8 .zigrow-hero-8-image-center {
      bottom: -2px;
      left: 50%;
      width: 34%;
      height: 330px;
      transform: translateX(-50%);
      box-shadow: 0 28px 70px rgba(35, 24, 89, 0.25);
    }

    .zigrow-hero-8 .zigrow-hero-8-image-right {
      right: 5%;
      bottom: -2px;
      width: 28%;
      height: 240px;
      transform: rotate(1deg);
    }

    @media (max-width: 991px) {
      .zigrow-hero-8 {
        min-height: 740px;
        padding: 64px 30px 0;
      }

      .zigrow-hero-8 .zigrow-hero-8-showcase {
        height: 315px;
      }

      .zigrow-hero-8 .zigrow-hero-8-image-left {
        left: 2%;
        width: 31%;
        height: 210px;
      }

      .zigrow-hero-8 .zigrow-hero-8-image-center {
        width: 40%;
        height: 300px;
      }

      .zigrow-hero-8 .zigrow-hero-8-image-right {
        right: 2%;
        width: 31%;
        height: 210px;
      }
    }

    @media (max-width: 767px) {
      .zigrow-hero-8 {
        width: calc(100% - 28px);
        min-height: auto;
        padding: 52px 20px 24px;
        border-radius: 26px;
      }

      .zigrow-hero-8 .zigrow-hero-8-title {
        font-size: clamp(2.25rem, 11vw, 3rem);
      }

      .zigrow-hero-8 .zigrow-hero-8-description {
        margin-top: 20px;
      }

      .zigrow-hero-8 .zigrow-hero-8-action {
        margin-top: 26px;
      }

      .zigrow-hero-8 .zigrow-hero-8-showcase {
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        height: auto;
        margin-top: 52px;
      }

      .zigrow-hero-8 .zigrow-hero-8-image-wrap {
        position: relative;
        right: auto;
        bottom: auto;
        left: auto;
        width: 100%;
        height: 210px;
        border-radius: 18px;
        transform: none;
      }

      .zigrow-hero-8 .zigrow-hero-8-image-center {
        grid-column: 1 / -1;
        grid-row: 1;
        height: 270px;
      }
    }

    @media (max-width: 480px) {
      .zigrow-hero-8 {
        width: calc(100% - 20px);
        margin: 10px auto;
        padding: 44px 16px 16px;
      }

      .zigrow-hero-8 .zigrow-hero-8-title br {
        display: none;
      }

      .zigrow-hero-8 .zigrow-hero-8-button {
        width: 100%;
      }

      .zigrow-hero-8 .zigrow-hero-8-showcase {
        grid-template-columns: 1fr;
      }

      .zigrow-hero-8 .zigrow-hero-8-image-center {
        grid-column: auto;
        height: 240px;
      }

      .zigrow-hero-8 .zigrow-hero-8-image-wrap {
        height: 210px;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-hero-8 .zigrow-hero-8-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-hero-9", {
  name: "Hero-9",
  category: "hero",
  image:
    "https://i.postimg.cc/KzQckr6H/Zigrow-Hero-4.png",
  html: `
<section
  id="zigrow-hero-9"
  class="zigrow-hero-9 text-white"
  data-section="zigrow-hero-9"
>
  <div class="zigrow-hero-9-decoration" aria-hidden="true">
    <span class="zigrow-hero-9-line zigrow-hero-9-line-one"></span>
    <span class="zigrow-hero-9-line zigrow-hero-9-line-two"></span>
    <span class="zigrow-hero-9-line zigrow-hero-9-line-three"></span>
    <span class="zigrow-hero-9-line zigrow-hero-9-line-four"></span>
    <span class="zigrow-hero-9-line zigrow-hero-9-line-five"></span>
  </div>

  <div class="zigrow-hero-9-container">
    <div class="zigrow-hero-9-content">
      <span class="zigrow-hero-9-badge">
        Smart Solutions, Better Results
      </span>

      <h1 class="zigrow-hero-9-title">
        Better Experiences
        <span>Start With Excellence</span>
      </h1>

      <p class="zigrow-hero-9-description">
        We provide reliable, thoughtful, and flexible solutions tailored to
        your goals and designed to create a smoother experience.
      </p>

      <div class="zigrow-hero-9-action-row">
        <div class="zigrow-hero-9-button-wrap">
          <a
            href="#contact"
            class="zigrow-hero-9-button"
            data-btn="hero"
          >
            Start Your Journey
          </a>
        </div>

        <div class="zigrow-hero-9-trust">
          <div class="zigrow-hero-9-avatars">
            <div class="zigrow-hero-9-avatar zigrow-hero-9-image-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=160&amp;q=80"
                alt="Satisfied customer"
              />
            </div>

            <div class="zigrow-hero-9-avatar zigrow-hero-9-image-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=160&amp;q=80"
                alt="Satisfied customer"
              />
            </div>

            <div class="zigrow-hero-9-avatar zigrow-hero-9-image-center">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=160&amp;q=80"
                alt="Satisfied customer"
              />
            </div>
          </div>

          <p class="zigrow-hero-9-trust-text">
            More than 10K+
            <span>satisfied customers</span>
          </p>
        </div>
      </div>
      </div>


    <div class="zigrow-hero-9-visual">
      <div
        class="zigrow-hero-9-image-wrap zigrow-hero-9-image-center"
    
      >
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"
          alt="Professional team ready to support customers"
        />
      </div>
    </div>
  </div>

  <style>
    .zigrow-hero-9 {
      position: relative;
      width: 100%;
      min-height: 650px;
      overflow: hidden;
      padding: clamp(3rem, 6vw, 5rem) 0;
      background: var(--primary-colors, #287ed5);
      color: #ffffff;
    }

    .zigrow-hero-9 .zigrow-hero-9-container {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
      gap: clamp(2.5rem, 6vw, 7rem);
      align-items: center;
      width: min(100% - 2rem, 1440px);
      min-height: 550px;
      margin: 0 auto;
    }

    .zigrow-hero-9 .zigrow-hero-9-content {
      position: relative;
      z-index: 2;
      max-width: 760px;
    }

    .zigrow-hero-9 .zigrow-hero-9-badge {
      display: inline-block;
      margin-bottom: clamp(1.4rem, 3vw, 2.3rem);
      padding: 0.55rem 1.2rem;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.2);
      color: #ffffff;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.2;
      backdrop-filter: blur(10px);
    }

    .zigrow-hero-9 .zigrow-hero-9-title {
      max-width: 760px;
      margin: 0;
      color: #ffffff;
      font-size: clamp(3rem, 5.8vw, 5.6rem);
      font-weight: 500;
      line-height: 1.04;
      letter-spacing: -0.045em;
    }

    .zigrow-hero-9 .zigrow-hero-9-title span {
      display: block;
      margin-top: 0.18em;
      color: #ffffff;
    }

    .zigrow-hero-9 .zigrow-hero-9-title span::first-line {
      color: var(--territory-colors, #a9ddff);
    }

    .zigrow-hero-9 .zigrow-hero-9-description {
      max-width: 670px;
      margin: clamp(1.4rem, 2.8vw, 2.2rem) 0 0;
      color: rgba(255, 255, 255, 0.8);
      font-size: clamp(1rem, 1.3vw, 1.15rem);
      line-height: 1.7;
    }

    .zigrow-hero-9 .zigrow-hero-9-action-row {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: clamp(1.5rem, 3vw, 2.5rem);
      align-items: center;
      margin-top: clamp(2rem, 4vw, 3.4rem);
    }

    .zigrow-hero-9 .zigrow-hero-9-button-wrap {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .zigrow-hero-9 .zigrow-hero-9-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: auto;
      max-width: max-content;
      min-height: 52px;
      padding: 0.85rem 1.7rem;
      border: 1px solid var(--territory-colors, #ffd447);
      border-radius: 999px;
      background: var(--territory-colors, #ffd447);
      color: #1a2c42;
      font-size: 0.98rem;
      font-weight: 700;
      line-height: 1.2;
      text-decoration: none;
      white-space: nowrap;
      transition: transform 0.25s ease, box-shadow 0.25s ease,
        background 0.25s ease;
    }

    .zigrow-hero-9 .zigrow-hero-9-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 30px rgba(20, 48, 76, 0.25);
      background: #ffffff;
    }

    .zigrow-hero-9 .zigrow-hero-9-trust {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 1rem;
      align-items: center;
    }

    .zigrow-hero-9 .zigrow-hero-9-avatars {
      display: grid;
      grid-template-columns: repeat(3, 2.8rem);
      align-items: center;
    }

    .zigrow-hero-9 .zigrow-hero-9-avatar {
      position: relative;
      width: 3rem;
      height: 3rem;
      overflow: hidden;
      border: 3px solid #ffffff;
      border-radius: 50%;
      background: var(--territory-colors, #d5ecff);
    }

    .zigrow-hero-9 .zigrow-hero-9-avatar:nth-child(2),
    .zigrow-hero-9 .zigrow-hero-9-avatar:nth-child(3) {
      margin-left: -0.45rem;
    }

    .zigrow-hero-9 .zigrow-hero-9-image-center {
      text-align: center;
    }

    .zigrow-hero-9 .zigrow-hero-9-avatar img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .zigrow-hero-9 .zigrow-hero-9-trust-text {
      margin: 0;
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.95rem;
      font-weight: 500;
      line-height: 1.4;
    }

    .zigrow-hero-9 .zigrow-hero-9-trust-text span {
      display: block;
    }

    .zigrow-hero-9 .zigrow-hero-9-brand-list {
      display: grid;
      grid-template-columns: repeat(4, max-content);
      gap: clamp(1.6rem, 3.2vw, 3.2rem);
      align-items: center;
      margin-top: clamp(2.8rem, 5vw, 4.5rem);
    }

    .zigrow-hero-9 .zigrow-hero-9-brand-item {
      min-width: 0;
    }

    .zigrow-hero-9 .zigrow-hero-9-brand {
      display: inline-grid;
      grid-template-columns: auto auto;
      gap: 0.45rem;
      align-items: center;
      color: rgba(255, 255, 255, 0.85);
      font-size: clamp(0.8rem, 1vw, 1rem);
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      white-space: nowrap;
      transition: color 0.25s ease, transform 0.25s ease;
    }

    .zigrow-hero-9 .zigrow-hero-9-brand:hover {
      color: #ffffff;
      transform: translateY(-2px);
    }

    .zigrow-hero-9 .zigrow-hero-9-brand-icon {
      display: inline-grid;
      place-items: center;
      width: 1.65rem;
      height: 1.65rem;
      border-radius: 50%;
      color: #ffffff;
      font-size: 1.35rem;
    }

    .zigrow-hero-9 .zigrow-hero-9-brand-icon i {
      font-size: inherit;
      line-height: 1;
    }

    .zigrow-hero-9 .zigrow-hero-9-visual {
      position: relative;
      z-index: 2;
      width: 100%;
    }

    .zigrow-hero-9 .zigrow-hero-9-image-wrap {
      position: relative;
      width: 100%;
      aspect-ratio: 1.08 / 1;
      overflow: hidden;
      border: 7px solid #ffffff;
      border-radius: clamp(1.6rem, 3vw, 2.6rem);
      background: var(--territory-colors, #d5ecff);
      box-shadow: 0 28px 60px rgba(17, 55, 94, 0.24);
    }

    .zigrow-hero-9 .zigrow-hero-9-image-wrap::after {
      content: "";
      position: absolute;
      inset: 0;
      border: 1px solid rgba(255, 255, 255, 0.35);
      border-radius: inherit;
      pointer-events: none;
    }

    .zigrow-hero-9 .zigrow-hero-9-image-wrap img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.5s ease;
    }

    .zigrow-hero-9 .zigrow-hero-9-image-wrap:hover img {
      transform: scale(1.025);
    }

    .zigrow-hero-9 .zigrow-hero-9-decoration {
      position: absolute;
      inset: 0;
      z-index: 1;
      overflow: hidden;
      pointer-events: none;
    }

    .zigrow-hero-9 .zigrow-hero-9-line {
      position: absolute;
      display: block;
      width: 7.5rem;
      height: 7.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      border-right: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 0 0.85rem 0 0;
    }

    .zigrow-hero-9 .zigrow-hero-9-line-one {
      top: -0.1rem;
      left: 44%;
    }

    .zigrow-hero-9 .zigrow-hero-9-line-two {
      top: 7.4rem;
      left: 52%;
    }

    .zigrow-hero-9 .zigrow-hero-9-line-three {
      top: 15rem;
      left: 44%;
    }

    .zigrow-hero-9 .zigrow-hero-9-line-four {
      top: 22.5rem;
      left: 36%;
    }

    .zigrow-hero-9 .zigrow-hero-9-line-five {
      top: 30rem;
      left: 28%;
    }

    @media (max-width: 1199px) {
      .zigrow-hero-9 .zigrow-hero-9-container {
        grid-template-columns: minmax(0, 1fr) minmax(300px, 0.75fr);
        gap: 3rem;
      }

      .zigrow-hero-9 .zigrow-hero-9-title {
        font-size: clamp(3rem, 5.5vw, 4.8rem);
      }

      .zigrow-hero-9 .zigrow-hero-9-brand-list {
        grid-template-columns: repeat(2, max-content);
        row-gap: 1.5rem;
      }
    }

    @media (max-width: 991px) {
      .zigrow-hero-9 {
        padding: 4rem 0;
      }

      .zigrow-hero-9 .zigrow-hero-9-container {
        grid-template-columns: 1fr;
        min-height: auto;
      }

      .zigrow-hero-9 .zigrow-hero-9-content {
        max-width: 780px;
      }

      .zigrow-hero-9 .zigrow-hero-9-visual {
        max-width: 720px;
        margin: 0 auto;
      }

      .zigrow-hero-9 .zigrow-hero-9-image-wrap {
        aspect-ratio: 1.5 / 1;
      }

      .zigrow-hero-9 .zigrow-hero-9-decoration {
        opacity: 0.65;
      }
    }

    @media (max-width: 767px) {
      .zigrow-hero-9 {
        padding: 3rem 0;
      }

      .zigrow-hero-9 .zigrow-hero-9-container {
        width: min(100% - 1.5rem, 1440px);
        gap: 2.5rem;
      }

      .zigrow-hero-9 .zigrow-hero-9-title {
        font-size: clamp(2.7rem, 11vw, 4.5rem);
      }

      .zigrow-hero-9 .zigrow-hero-9-action-row {
        grid-template-columns: 1fr;
      }

      .zigrow-hero-9 .zigrow-hero-9-trust {
        width: max-content;
        max-width: 100%;
      }

      .zigrow-hero-9 .zigrow-hero-9-image-wrap {
        aspect-ratio: 1.2 / 1;
        border-width: 5px;
      }

      .zigrow-hero-9 .zigrow-hero-9-brand-list {
        grid-template-columns: repeat(2, minmax(0, max-content));
        column-gap: 2rem;
      }
    }

    @media (max-width: 479px) {
      .zigrow-hero-9 .zigrow-hero-9-badge {
        font-size: 0.78rem;
      }

      .zigrow-hero-9 .zigrow-hero-9-title {
        font-size: clamp(2.45rem, 12vw, 3.5rem);
      }

      .zigrow-hero-9 .zigrow-hero-9-description {
        font-size: 0.96rem;
      }

      .zigrow-hero-9 .zigrow-hero-9-action-row {
        gap: 1.5rem;
      }

      .zigrow-hero-9 .zigrow-hero-9-button {
        width: 100%;
        max-width: 100%;
      }

      .zigrow-hero-9 .zigrow-hero-9-trust {
        grid-template-columns: 1fr;
      }

      .zigrow-hero-9 .zigrow-hero-9-brand-list {
        grid-template-columns: 1fr 1fr;
        gap: 1.4rem 1rem;
      }

      .zigrow-hero-9 .zigrow-hero-9-image-wrap {
        aspect-ratio: 0.95 / 1;
        border-radius: 1.5rem;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-hero-9 .zigrow-hero-9-button-wrap {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  

    /* Custom utility for solid dark section backgrounds */
    .zigrow-hero-9.text-white {
      color: #ffffff;
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-hero-10", {
  name: "Hero-10",
  category: "hero",
  image:
    "https://i.postimg.cc/PqJRkxCh/Screenshot-2026-07-21-170756.png",

  html: `
<section
  id="zigrow-hero-10"
  data-section="zigrow-hero-10"
  class="zigrow-hero-10"
>
  <div class="zigrow-hero-10-overlay"></div>

  <div class="zigrow-hero-10-decoration zigrow-hero-10-decoration-left"></div>
  <div class="zigrow-hero-10-decoration zigrow-hero-10-decoration-right"></div>

  <div class="zigrow-hero-10-container">
    <div class="zigrow-hero-10-content">
      <h1 class="zigrow-hero-10-title">
        <span class="zigrow-hero-10-title-line">We Create</span>

        <span class="zigrow-hero-10-title-row">
          <span>Category</span>

          <span class="zigrow-hero-10-title-visual">
            <span class="zigrow-hero-10-visual-frame"></span>

            <span class="zigrow-hero-10-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=85"
                alt="A collaborative team working together"
                class="zigrow-hero-10-image"
              />
            </span>
          </span>

          <span>Leaders</span>
        </span>
      </h1>

      <p class="zigrow-hero-10-description">
        On every platform where strong ideas, clear strategy, and meaningful
        results matter.
      </p>

      <div class="zigrow-hero-10-action">
        <a
          href="#contact"
          class="zigrow-hero-10-button"
          data-btn="hero"
        >
          Book a Call
        </a>
      </div>
    </div>

    <div class="zigrow-hero-10-footer">
      <p class="zigrow-hero-10-footer-text zigrow-hero-10-footer-left">
        Creative business solutions built to improve visibility, strengthen
        engagement, and support long-term growth.
      </p>

      <p class="zigrow-hero-10-footer-text zigrow-hero-10-footer-right">
        Supporting businesses with dependable service, thoughtful strategy, and
        measurable results.
      </p>
    </div>
  </div>

  <style>
    .zigrow-hero-10 {
      position: relative;
      width: 100%;
      min-height: 720px;
      height: 100vh;
      overflow: hidden;
      background-image: url("https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1920&q=85");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .zigrow-hero-10 .zigrow-hero-10-overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background:
        linear-gradient(
          180deg,
          rgba(9, 29, 58, 0.28) 0%,
          rgba(14, 49, 89, 0.48) 100%
        );
      pointer-events: none;
    }

    .zigrow-hero-10 .zigrow-hero-10-container {
      position: relative;
      z-index: 3;
      display: grid;
      grid-template-rows: 1fr auto;
      width: min(100% - 48px, 1380px);
      min-height: 100%;
      margin: 0 auto;
      padding: 80px 0 22px;
    }

    .zigrow-hero-10 .zigrow-hero-10-content {
      display: grid;
      align-content: center;
      justify-items: center;
      text-align: center;
    }

    .zigrow-hero-10 .zigrow-hero-10-title {
      display: grid;
      justify-items: center;
      margin: 0;
      color: #ffffff;
      font-size: clamp(3rem, 7vw, 6.1rem);
      font-weight: 700;
      letter-spacing: -0.055em;
      line-height: 0.96;
    }

    .zigrow-hero-10 .zigrow-hero-10-title-line {
      display: block;
    }

    .zigrow-hero-10 .zigrow-hero-10-title-row {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 14px;
      align-items: center;
      justify-content: center;
    }

    .zigrow-hero-10 .zigrow-hero-10-title-visual {
      position: relative;
      display: grid;
      width: clamp(92px, 10vw, 142px);
      height: clamp(62px, 6.5vw, 92px);
      place-items: center;
    }

    .zigrow-hero-10 .zigrow-hero-10-visual-frame {
      position: absolute;
      top: -28%;
      left: -10%;
      width: 118%;
      height: 112%;
      border: 3px solid var(--primary-colors, #fff44f);
      border-radius: 15px;
      transform: rotate(-8deg);
    }

    .zigrow-hero-10 .zigrow-hero-10-image-wrap {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 13px;
      background: var(--territory-colors, #7254d6);
      text-align: center;
      box-shadow: 0 14px 32px rgba(8, 24, 54, 0.22);
    }

    .zigrow-hero-10 .zigrow-hero-10-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .zigrow-hero-10 .zigrow-hero-10-description {
      max-width: 590px;
      margin: 32px auto 0;
      color: #fff;
      font-size: clamp(0.95rem, 1.4vw, 1.08rem);
      line-height: 1.6;
    }

    .zigrow-hero-10 .zigrow-hero-10-action {
      display: grid;
      justify-content: center;
      margin-top: 28px;
    }

    .zigrow-hero-10 .zigrow-hero-10-button {
      display: grid;
      min-width: 145px;
      min-height: 48px;
      padding: 12px 24px;
      place-items: center;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.04);
      color: #ffffff;
      font-size: 0.95rem;
      font-weight: 500;
      line-height: 1;
      text-decoration: none;
      backdrop-filter: blur(8px);
      transition:
        background-color 0.25s ease,
        border-color 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-hero-10 .zigrow-hero-10-button:hover {
      transform: translateY(-3px);
      border-color: var(--primary-colors, #fff44f);
      background: var(--primary-colors, #fff44f);
      color: #152a48;
    }

    .zigrow-hero-10 .zigrow-hero-10-footer {
      display: grid;
      grid-template-columns: minmax(0, 280px) minmax(0, 280px);
      justify-content: space-between;
      align-items: end;
      gap: 40px;
    }

    .zigrow-hero-10 .zigrow-hero-10-footer-text {
      margin: 0;
      color: rgba(255, 255, 255, 0.88);
      font-size: 0.76rem;
      line-height: 1.45;
    }

    .zigrow-hero-10 .zigrow-hero-10-footer-left {
      text-align: left;
    }

    .zigrow-hero-10 .zigrow-hero-10-footer-right {
      text-align: right;
    }

    .zigrow-hero-10 .zigrow-hero-10-decoration {
      position: absolute;
      z-index: 2;
      pointer-events: none;
    }

    .zigrow-hero-10 .zigrow-hero-10-decoration-left {
      bottom: -95px;
      left: -45px;
      width: 270px;
      height: 220px;
      border-radius: 35px;
      background: var(--territory-colors, #8057e8);
      opacity: 0.48;
      transform: rotate(38deg);
    }

    .zigrow-hero-10 .zigrow-hero-10-decoration-right {
      right: -55px;
      bottom: -70px;
      width: 260px;
      height: 250px;
      border-radius: 36px;
      background: var(--primary-colors, #7059ec);
      opacity: 0.35;
      transform: rotate(-34deg);
    }

    @media (max-width: 991px) {
      .zigrow-hero-10 {
        min-height: 680px;
      }

      .zigrow-hero-10 .zigrow-hero-10-title {
        font-size: clamp(3rem, 8vw, 5rem);
      }

      .zigrow-hero-10 .zigrow-hero-10-title-row {
        gap: 10px;
      }
    }

    @media (max-width: 767px) {
      .zigrow-hero-10 {
        min-height: 760px;
        height: auto;
      }

      .zigrow-hero-10 .zigrow-hero-10-container {
        width: min(100% - 32px, 1380px);
        padding: 80px 0 28px;
      }

      .zigrow-hero-10 .zigrow-hero-10-title {
        font-size: clamp(2.7rem, 12vw, 4rem);
        line-height: 1;
      }

      .zigrow-hero-10 .zigrow-hero-10-title-row {
        grid-template-columns: auto auto;
      }

      .zigrow-hero-10 .zigrow-hero-10-title-row > span:last-child {
        grid-column: 1 / -1;
      }

      .zigrow-hero-10 .zigrow-hero-10-description {
        margin-top: 24px;
      }

      .zigrow-hero-10 .zigrow-hero-10-footer {
        grid-template-columns: 1fr;
        gap: 12px;
        margin-top: 70px;
      }

      .zigrow-hero-10 .zigrow-hero-10-footer-text {
        max-width: 320px;
        text-align: left;
      }
    }

    @media (max-width: 480px) {
      .zigrow-hero-10 {
        min-height: 720px;
        background-position: 54% center;
      }

      .zigrow-hero-10 .zigrow-hero-10-container {
        width: min(100% - 24px, 1380px);
        padding-top: 70px;
      }

      .zigrow-hero-10 .zigrow-hero-10-title {
        font-size: clamp(2.4rem, 13vw, 3.25rem);
      }

      .zigrow-hero-10 .zigrow-hero-10-title-row {
        gap: 8px;
      }

      .zigrow-hero-10 .zigrow-hero-10-title-visual {
        width: 88px;
        height: 58px;
      }

      .zigrow-hero-10 .zigrow-hero-10-description {
        font-size: 0.92rem;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-hero-10 .zigrow-hero-10-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

// Pricing Blocks
Vvveb.Blocks.add("bootstrap4/zigrow-pricing-1", {
    name: "Pricing-1",
    category: "pricing",
    image: "https://i.postimg.cc/3xnV87PM/Screenshot-2025-11-20-153914.png",
    html: ` <section id="zigrow-pricing-1" data-section="zigrow-pricing-1" class="zigrow-pricing-1 py-6">
      <div class="container">
        <div class="section-heading mb-5">
          <p>Choose One Of Our</p>
          <h2>Membership Options</h2>
          <div class="outline"></div>
        </div>

        <div class="row g-4">
          <!-- Card 1 -->
          <div class="col-lg-4 col-md-6 col-sm-12 clonable-card">
            <div class="zigrow-pricing-1-card">
              <h4>Desk</h4>
              <h3>
                <span>₹3,750</span><sup><small>/ Month</small></sup>
              </h3>
              <p>Excepteur sint occaecat cup proident</p>
              <ul>
                <li>
                  <i class="bi bi-check-lg" data-icon="check"></i> 24/7 Access
                </li>
                <li>
                  <i class="bi bi-check-lg" data-icon="check"></i> Free WiFi
                </li>
              </ul>
        
<div class="zigrow-pricing-1-btn-wrap">
  <a href="#" class="btn-join" data-btn="pricing-1">Join Now</a>
</div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="col-lg-4 col-md-6 col-sm-12 clonable-card">
            <div class="zigrow-pricing-1-card featured">
              <h4>Virtual</h4>
              <h3>
                <span>₹5,400</span><sup><small>/ Month</small></sup>
              </h3>
              <p>Excepteur sint occaecat cup proident</p>
              <ul>
                <li>
                  <i class="bi bi-check-lg" data-icon="check"></i> 24/7 Access
                </li>
                <li>
                  <i class="bi bi-check-lg" data-icon="check"></i> Free WiFi
                </li>
                <li>
                  <i class="bi bi-check-lg" data-icon="check"></i> Kitchen & Bar
                </li>
                <li>
                  <i class="bi bi-check-lg" data-icon="check"></i> All Area
                  Access
                </li>
              </ul>
          
<div class="zigrow-pricing-1-btn-wrap">
  <a href="#" class="btn-join" data-btn="pricing-1">Join Now</a>
</div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="col-lg-4 col-md-6 col-sm-12 clonable-card">
            <div class="zigrow-pricing-1-card">
              <h4>Office</h4>
              <h3>
                <span>₹3,750</span><sup><small>/ Month</small></sup>
              </h3>
              <p>Excepteur sint occaecat cup proident.</p>
              <ul>
                <li>
                  <i class="bi bi-check-lg" data-icon="check"></i> 24/7 Access
                </li>
                <li>
                  <i class="bi bi-check-lg" data-icon="check"></i> Free WiFi
                </li>
                <li>
                  <i class="bi bi-check-lg" data-icon="check"></i> Kitchen & Bar
                </li>
                <li>
                  <i class="bi bi-check-lg" data-icon="check"></i> All Area
                  Access
                </li>
              </ul>
           
<div class="zigrow-pricing-1-btn-wrap">
  <a href="#" class="btn-join" data-btn="pricing-1">Join Now</a>
</div>
            </div>
          </div>
        </div>
      </div>
        <style>
      .py-6{
        padding: 3rem 0;
      }
      .zigrow-pricing-1 {
        background-color: #f8f9fc;
      }
      .zigrow-pricing-1 .section-heading {
        text-align: center;
      }
      .zigrow-pricing-1 .section-heading .outline {
        background-color: var(--territory-colors, #a7a3a3);
        height: 2px;
        width: 50px;
        margin: 1rem auto;
      }
      .zigrow-pricing-1 .row {
        align-items: center;
      }
      @media (max-width: 992px) {
        .zigrow-pricing-1 .row {
          justify-content: center;
        }
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card {
        background: url("../assets/image/card-bg.png") center/cover no-repeat;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: 100%;
        min-height: 400px;
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card h4 {
        margin-bottom: 15px;
        font-size: 1.25rem;
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card h3 {
        margin-bottom: 10px;
        font-size: 1.8rem;
        color: #333;
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card h3 span {
        color: var(--territory-colors, #e94ea1);
        font-weight: bold;
        font-size: 2rem;
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card h3 small {
        font-size: 0.9rem;
        color: #666;
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card p {
        font-size: 0.95rem;
        color: #666;
        margin-bottom: 20px;
      }

      .zigrow-pricing-1 .zigrow-pricing-1-btn-wrap {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
      .zigrow-pricing-1 .zigrow-pricing-1-card ul {
        list-style: none;
        padding: 0;
        margin-bottom: 20px;
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card ul li {
        font-size: 0.95rem;
        color: #444;
        margin: 6px 0;
      }
      /* Replace display with this */
.zigrow-pricing-1 .zigrow-pricing-1-card .btn-join {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: max-content;
  white-space: nowrap;
        padding: 0.75rem 1.8rem;
        border-radius: 10rem;
        color: var(--primary-colors, #4b2fa3);
        border: 2px solid var(--primary-colors, #4b2fa3);
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s;
        position: relative;
        overflow: hidden;
        z-index: 1;
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card .btn-join:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10rem;
        z-index: -2;
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card .btn-join:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: var(
          --primary-colors,
          rgb(47.6785714286, 29.8785714286, 103.6214285714)
        );
        transition: all 0.3s;
        border-radius: 10rem;
        z-index: -1;
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card .btn-join:hover {
        color: #fff;
      }
      .zigrow-pricing-1 .zigrow-pricing-1-card .btn-join:hover:before {
        width: 100%;
      }
      @media (min-width: 992px) {
        .zigrow-pricing-1 .featured {
          transform: scale(1.05);
          height: 500px;
          margin: 0 auto;
          z-index: 2;
          position: relative;
        }
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-pricing-2", {
    name: "Pricing-2",
    category: "pricing",
    image: "https://i.postimg.cc/fT6M65XB/pricing-1.png",
    html: `
  <section
      class="zigrow-pricing-2 py-6"
      data-section="zigrow-pricing-2"
      id="zigrow-pricing-2"
    >
      <div class="container pricing-inner">
        <!-- HEADER -->
        <div class="pricing-header">
          <div>
            <p class="pricing-eyebrow">Pricing Plan</p>
            <h2 class="no-theme-size no-theme-size pricing-title">JOIN TODAY</h2>
          </div>

          <div class="billing-toggle" aria-label="Billing period toggle">
            <a href="#" class="billing-btn active" data-billing="monthly" data-btn="pricing-2">
              Monthly
            </a>
            <a href="#" class="billing-btn" data-billing="yearly" data-btn="pricing-2">Yearly</a>
          </div>
        </div>

        <!-- CARDS -->
        <div class="row pricing-row">
          <!-- Card 1 -->
          <div class="col-12 col-md-4 clonable-card">
            <div class="pricing-card">
              <p class="pricing-label">Beginner Plan</p>

              <div class="pricing-price">
                <span class="currency">₹</span>
                <span class="amount" data-monthly="10" data-yearly="100"
                  >10</span
                >
                <span class="per">/mo</span>
              </div>

              <p class="pricing-subtitle">
                Ideal for individuals starting out with small projects and side
                ideas.
              </p>

              <ul class="pricing-features">
                <li>
                  <i
                    class="bi bi-check-circle-fill"
                    data-icon="feature-check"
                  ></i>
                  <span>Access to all core tools and basic support</span>
                </li>
                <li>
                  <i
                    class="bi bi-check-circle-fill"
                    data-icon="feature-check"
                  ></i>
                  <span>Create up to three active projects at a time</span>
                </li>
                <li>
                  <i
                    class="bi bi-check-circle-fill"
                    data-icon="feature-check"
                  ></i>
                  <span>Simple dashboard with essential analytics</span>
                </li>
              </ul>

          
<div class="pricing-cta-wrap">
  <a href="#" class="pricing-cta" data-btn="pricing-2">Choose Plan</a>
</div>
            </div>
          </div>

          <!-- Card 2 (Featured) -->
          <div class="col-12 col-md-4 clonable-card">
            <div class="pricing-card pricing-card--featured">
              <p class="pricing-label">Premium Plan</p>

              <div class="pricing-price">
                <span class="currency">₹</span>
                <span class="amount" data-monthly="15" data-yearly="150"
                  >15</span
                >
                <span class="per">/mo</span>
              </div>

              <p class="pricing-subtitle">
                Perfect for growing teams that need more power and flexibility
                every day.
              </p>

              <ul class="pricing-features">
                <li>
                  <i
                    class="bi bi-check-circle-fill"
                    data-icon="feature-check"
                  ></i>
                  <span
                    >Everything in Beginner plus advanced automation tools</span
                  >
                </li>
                <li>
                  <i
                    class="bi bi-check-circle-fill"
                    data-icon="feature-check"
                  ></i>
                  <span>Unlimited projects and shared workspaces</span>
                </li>
                <li>
                  <i
                    class="bi bi-check-circle-fill"
                    data-icon="feature-check"
                  ></i>
                  <span>Priority email support for faster resolutions</span>
                </li>
              </ul>

            
<div class="pricing-cta-wrap">
  <a href="#" class="pricing-cta" data-btn="pricing-2">Choose Plan</a>
</div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="col-12 col-md-4 clonable-card">
            <div class="pricing-card">
              <p class="pricing-label">Expert Plan</p>

              <div class="pricing-price">
                <span class="currency">₹</span>
                <span class="amount" data-monthly="20" data-yearly="200"
                  >20</span
                >
                <span class="per">/mo</span>
              </div>

              <p class="pricing-subtitle">
                Built for established businesses that need reliability and
                scale.
              </p>

              <ul class="pricing-features">
                <li>
                  <i
                    class="bi bi-check-circle-fill"
                    data-icon="feature-check"
                  ></i>
                  <span>Dedicated success manager and guided onboarding</span>
                </li>
                <li>
                  <i
                    class="bi bi-check-circle-fill"
                    data-icon="feature-check"
                  ></i>
                  <span>Custom limits and options tailored to your needs</span>
                </li>
                <li>
                  <i
                    class="bi bi-check-circle-fill"
                    data-icon="feature-check"
                  ></i>
                  <span>Early access to upcoming expert-only features</span>
                </li>
              </ul>

          
<div class="pricing-cta-wrap">
  <a href="#" class="pricing-cta" data-btn="pricing-2">Choose Plan</a>
</div>
            </div>
          </div>
        </div>
      </div>
       <style>
      body {
        margin: 0;
        
        background-color: #ffffff;
        color: #111111;
      }

      /* SECTION WRAPPER */
      .zigrow-pricing-2 {
        background-color: #ffffff;
      }
      .py-6 {
        padding: 3rem 0;
      }

      .pricing-inner {
        max-width: 1100px;
        margin: 0 auto;
      }

      /* HEADER */
      .pricing-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2.5rem;
        gap: 1.5rem;
      }

      .zigrow-pricing-2 .pricing-cta-wrap {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: auto;
}
      .pricing-eyebrow {
        color: var(--secondary-colors, #999999);
        font-size: 0.9rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin: 0 0 0.35rem;
      }

      .pricing-title {
        font-size: 2.1rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin: 0;
      }

      /* Billing toggle */
      .billing-toggle {
        border: 1px solid #dddddd;
        border-radius: 3px;
        display: inline-flex;
        overflow: hidden;
      }

      .billing-btn {
        text-decoration: none;
        background-color: #ffffff;
        color: #000;
        border: none;
        padding: 0.5rem 1.25rem;
        font-size: 0.86rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        cursor: pointer;
        transition: background-color 0.15s ease, color 0.15s ease;
        white-space: nowrap;
      }

      .billing-btn + .billing-btn {
        border-left: 1px solid #dddddd;
      }

      .billing-btn.active {
        background-color: var(--primary-colors, #111111);
        color: #ffffff;
      }

      /* CARDS */
      .pricing-row {
        row-gap: 1.5rem;
      }

      .pricing-card {
        border: 1px solid #e6e6e6;
        background-color: #ffffff;
        padding: 1.75rem 1.75rem 1.5rem;
        display: flex;
        flex-direction: column;
        height: 100%;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.03);
        /* NEW: smooth hover transition */
        transition: transform 0.2s ease, box-shadow 0.2s ease,
          border-color 0.2s ease;
      }

      /* NEW: hover effect for all cards */
      .pricing-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
        border-color: #111111;
      }

      .pricing-card--featured {
        background-color: var(--primary-colors, #111111);
        color: #ffffff;
        border-color: #111111;
      }

      .pricing-card--featured .pricing-subtitle {
        color: #f2f2f2;
      }

      .pricing-card--featured .pricing-price,
      .pricing-card--featured .pricing-features li {
        color: #ffffff;
      }
      .pricing-card--featured .pricing-price,
      .pricing-card--featured .pricing-features i {
        color: #ffffff;
      }

      .pricing-card--featured .pricing-cta {
        background-color: #ffffff;
        color: var(--primary-colors, #000000);
      }

      .pricing-label {
        color: var(--secondary-colors, #888888);
        font-size: 0.78rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 0.6rem;
      }

      .pricing-card--featured .pricing-label {
        color: #f2f2f2;
      }

      .pricing-price {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 0.4rem;
        display: flex;
        align-items: baseline;
        gap: 0.15rem;
      }

      .pricing-price .currency {
        font-size: 1.5rem;
      }

      .pricing-price .per {
        font-size: 0.9rem;
        font-weight: 500;
        color: #777777;
      }

      .pricing-card--featured .pricing-price .per {
        color: #f2f2f2;
      }

      .pricing-subtitle {
        font-size: 0.85rem;
        color: var(--secondary-colors, #999999);
        margin-bottom: 1.3rem;
        max-width: 14rem;
      }

      /* Features */
      .pricing-features {
        list-style: none;
        padding: 0;
        margin: 0 0 1.8rem;
        font-size: 0.9rem;
      }
      .pricing-features i {
        color: var(--primary-colors, #111111);
      }
      .pricing-features li {
        display: flex;
        align-items: center;
        margin-bottom: 0.55rem;
        color: #333333;
        gap: 0.45rem;
      }

      .pricing-features i {
        font-size: 0.95rem;
      }

      /* CTA button */
      .pricing-cta {
        text-align: center;
    
        padding: 0.75rem 1rem;
        border-radius: 0;
        border: none;
        text-decoration: none;
        background-color: var(--primary-colors, #111111);
        color: #ffffff;
        font-size: 0.95rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color 0.15s ease, color 0.15s ease;
       /* Replace with this */
flex: 1 1 160px;
width: auto;
display: inline-flex;
align-items: center;
justify-content: center;
white-space: nowrap;
      }

      /* RESPONSIVE */
      @media (max-width: 991.98px) {
        .zigrow-pricing-2 {
          padding: 3rem 0;
        }

        .pricing-header {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      @media (max-width: 575.98px) {
        .zigrow-pricing-2 {
          padding: 2.5rem 0;
        }

        .pricing-title {
          font-size: 1.8rem;
        }

        .pricing-card {
          padding: 1.5rem 1.25rem 1.25rem;
        }
      }
    </style>
    <script>
      (function () {
        const toggleBtns = document.querySelectorAll(".billing-btn");
        const amounts = document.querySelectorAll(".pricing-price .amount");

        toggleBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            const billing = btn.getAttribute("data-billing");

            // Active state
            toggleBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            // Update prices
            amounts.forEach((span) => {
              const value = span.getAttribute(
                billing === "yearly" ? "data-yearly" : "data-monthly"
              );
              if (value) span.textContent = value;
            });
          });
        });
      })();
    </script>
    </section>

`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-pricing-3", {
    name: "Pricing-3",
    category: "pricing",
    image: "https://i.postimg.cc/7YpqpX7s/pricing-2.png",
    html: `   <section class="zigrow-pricing-3 py-6" id="zigrow-pricing-3" data-section="zigrow-pricing-3">
      <div class="container">
        <div class="zigrow-pricing-3__heading">
          <p class="zigrow-pricing-3__kicker">PRICING TABLE</p>
          <h2 class="no-theme-size no-theme-size zigrow-pricing-3__title">Subscribe to our Monthly Plans</h2>
          <p class="zigrow-pricing-3__subtext">
            Choose a plan that fits your household needs. Flexible monthly
            subscriptions, reliable doorstep delivery, and consistent quality
            you can trust every day.
          </p>
        </div>

        <div class="row g-4 zigrow-pricing-3__grid">
          <!-- Card 1 -->
          <div class="col-12 col-md-4 clonable-card">
            <div class="zigrow-pricing-3__card" tabindex="0">
              <p class="zigrow-pricing-3__plan">1 Bag</p>
              <p class="zigrow-pricing-3__price-row">
                <span class="zigrow-pricing-3__price">₹350</span>
                <span class="zigrow-pricing-3__per">/month</span>
              </p>
              <p class="zigrow-pricing-3__desc">
                Ideal for small families or light usage. Fresh supply delivered
                monthly with assured quality and easy renewals.
              </p>
            
<div class="zigrow-pricing-3__cta-wrap">
  <a href="#book-now" class="zigrow-pricing-3__cta" data-btn="pricing-3">Book Now</a>
</div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="col-12 col-md-4 clonable-card">
            <div
              class="zigrow-pricing-3__card zigrow-pricing-3__card--featured is-active"
              tabindex="0"
            >
              <p class="zigrow-pricing-3__plan">5 Bag</p>
              <p class="zigrow-pricing-3__price-row">
                <span class="zigrow-pricing-3__price">₹650</span>
                <span class="zigrow-pricing-3__per">/month</span>
              </p>
              <p class="zigrow-pricing-3__desc">
                Our most popular plan. Perfect balance of value and quantity for
                growing households with regular monthly needs.
              </p>
         
<div class="zigrow-pricing-3__cta-wrap">
  <a href="#book-now" class="zigrow-pricing-3__cta" data-btn="pricing-3">Book Now</a>
</div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="col-12 col-md-4 clonable-card">
            <div class="zigrow-pricing-3__card" tabindex="0">
              <p class="zigrow-pricing-3__plan">8 Bag</p>
              <p class="zigrow-pricing-3__price-row">
                <span class="zigrow-pricing-3__price">₹950</span>
                <span class="zigrow-pricing-3__per">/month</span>
              </p>
              <p class="zigrow-pricing-3__desc">
                Best suited for large families or bulk usage. Maximum savings
                with uninterrupted supply and priority support.
              </p>
           
<div class="zigrow-pricing-3__cta-wrap">
  <a href="#book-now" class="zigrow-pricing-3__cta" data-btn="pricing-3">Book Now</a>
</div>
            </div>
          </div>
        </div>
      </div>
          <style>
      body {
        margin: 0;
        background: #ffffff;
        color: #0f172a;
      }

      /* =========================
         SECTION
      ========================== */
      .zigrow-pricing-3 {
        background: #ffffff;
      }
      .py-6 {
        padding: 3rem 0;
      }

      .zigrow-pricing-3 .zigrow-pricing-3__heading {
        text-align: center;
        margin-bottom: 2.25rem;
      }

.zigrow-pricing-3 .zigrow-pricing-3__cta-wrap {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
      
      .zigrow-pricing-3 .zigrow-pricing-3__kicker {
        margin: 0 0 0.6rem;
        font-size: 0.75rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--secondary-colors, #2f3b7c);
        font-weight: 700;
      }

      .zigrow-pricing-3 .zigrow-pricing-3__title {
        margin: 0;
        font-size: clamp(1.7rem, 3.2vw, 2.25rem);
        line-height: 1.15;
        font-weight: 800;
        color: #000;
      }

      .zigrow-pricing-3 .zigrow-pricing-3__subtext {
        margin: 0.85rem auto 0;
        max-width: 620px;
        font-size: 0.95rem;
        line-height: 1.6;
        color: #64748b;
      }

      /* =========================
         CARD
      ========================== */
      .zigrow-pricing-3 .zigrow-pricing-3__grid {
        margin-top: 0.5rem;
      }

      .zigrow-pricing-3 .zigrow-pricing-3__card {
        background: #ffffff;
        border: 1px solid #e6eaf2;
        border-radius: 12px;
        padding: 1.5rem 1.5rem 1.4rem;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
        height: 100%;
        transition: transform 0.2s ease, box-shadow 0.2s ease,
          border-color 0.2s ease;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }

      .zigrow-pricing-3 .zigrow-pricing-3__card:hover {
        transform: translateY(-4px);
        box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
      }

      .zigrow-pricing-3 .zigrow-pricing-3__plan {
        margin: 0 0 0.35rem;
        font-size: 0.75rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-weight: 800;
        color: var(--secondary-colors, #64748b);
      }

      .zigrow-pricing-3 .zigrow-pricing-3__price-row {
        margin: 0;
      }

      .zigrow-pricing-3 .zigrow-pricing-3__price {
        font-size: 2rem;
        font-weight: 900;
        letter-spacing: -0.02em;
        color: #0f172a;
      }

      .zigrow-pricing-3 .zigrow-pricing-3__per {
        font-size: 0.85rem;
        color: var(--secondary-colors, #64748b);
        margin-left: 0.25rem;
        font-weight: 600;
      }

      .zigrow-pricing-3 .zigrow-pricing-3__desc {
        margin: 0.85rem 0 1.35rem;
        font-size: 0.92rem;
        line-height: 1.6;
        color: var(--secondary-colors, #64748b);
        max-width: 28rem;
      }

      /* CTA */
      .zigrow-pricing-3 .zigrow-pricing-3__cta {
      /* Replace with this */
display: inline-flex;
align-items: center;
justify-content: center;
flex: 1 1 160px;
width: auto;
white-space: nowrap;
        text-align: center;
        text-decoration: none;
        border-radius: 999px;
        padding: 0.85rem 1rem;
        background: var(--primary-colors, #4fadb8);
        color: #ffffff;
        font-weight: 800;
        font-size: 0.95rem;
        line-height: 1;
        cursor: pointer;
        box-shadow: 0 12px 22px rgba(79, 173, 184, 0.25);
        transition: filter 0.2s ease, transform 0.2s ease;
      }

      .zigrow-pricing-3 .zigrow-pricing-3__cta:hover {
        filter: brightness(0.96);
        transform: translateY(-1px);
      }

      .zigrow-pricing-3 .zigrow-pricing-3__cta:focus {
        outline: 3px solid rgba(79, 173, 184, 0.35);
        outline-offset: 3px;
      }

      /* FEATURED */
      .zigrow-pricing-3 .zigrow-pricing-3__card--featured {
        background: var(--primary-colors, #4fadb8);
        border-color: rgba(255, 255, 255, 0.25);
        box-shadow: 0 18px 44px rgba(15, 23, 42, 0.12);
      }

      .zigrow-pricing-3 .zigrow-pricing-3__card--featured .zigrow-pricing-3__plan,
      .zigrow-pricing-3 .zigrow-pricing-3__card--featured .zigrow-pricing-3__desc,
      .zigrow-pricing-3 .zigrow-pricing-3__card--featured .zigrow-pricing-3__per {
        color: rgba(255, 255, 255, 0.9);
      }

      .zigrow-pricing-3 .zigrow-pricing-3__card--featured .zigrow-pricing-3__price {
        color: #ffffff;
      }

      .zigrow-pricing-3 .zigrow-pricing-3__card--featured .zigrow-pricing-3__cta {
        background: #ffffff;
        color: #0f172a;
        box-shadow: 0 12px 22px rgba(15, 23, 42, 0.18);
      }

      /* ACTIVE */
      .zigrow-pricing-3 .zigrow-pricing-3__card.is-active {
        outline: 3px solid rgba(79, 173, 184, 0.35);
        outline-offset: 3px;
      }

      .zigrow-pricing-3 .zigrow-pricing-3__card--featured.is-active {
        outline-color: rgba(255, 255, 255, 0.6);
      }

      @media (max-width: 767.98px) {
        .zigrow-pricing-3 .zigrow-pricing-3__card {
          padding: 1.35rem 1.2rem 1.2rem;
        }
      }
    </style>
      <script>
      (function () {
        const cards = document.querySelectorAll(".zigrow-pricing-3__card");

        function setActive(card) {
          cards.forEach((c) => c.classList.remove("is-active"));
          card.classList.add("is-active");
        }

        cards.forEach((card) => {
          card.addEventListener("click", () => setActive(card));
          card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActive(card);
            }
          });
        });
      })();
    </script>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-pricing-4", {
    name: "Pricing-4",
    category: "pricing",
    image: "https://i.postimg.cc/zX9q9pW2/pricing-3.png",
  html: `
<section
  class="zigrow-pricing-4 py-6"
  data-section="zigrow-pricing-4"
  id="zigrow-pricing-4"
>
  <div class="container">
    <div class="zigrow-pricing-4__heading">
      <h2 class="no-theme-size no-theme-size zigrow-pricing-4__title">Choose the Cleaning Plan That Fits Your Space</h2>
      <p class="zigrow-pricing-4__subtext">
        Pick a service package based on the size of your home and the level of cleaning support you need.
      </p>
    </div>

    <div class="row g-4">
      <!-- BASIC -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div
          class="zigrow-pricing-4__card is-active"
          data-plan="basic"
          tabindex="0"
        >
          <p class="zigrow-pricing-4__plan">
            <i
              class="bi bi-stars"
              data-icon="plan-spark"
              aria-hidden="true"
            ></i>
            BASIC CLEANING
          </p>

          <h3 class="zigrow-pricing-4__price">₹350</h3>
          <p class="zigrow-pricing-4__per">/service</p>

          <p class="zigrow-pricing-4__desc">
            A simple and affordable cleaning plan for routine upkeep in smaller homes.
          </p>

          <div class="zigrow-pricing-4__divider" aria-hidden="true"></div>

          <ul class="zigrow-pricing-4__list">
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>Quick home assessment</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>2 bedroom cleaning</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>2 bathroom cleaning</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>Living room dusting and mopping</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>Service quality assurance</p>
            </li>
          </ul>

     
<div class="zigrow-pricing-4__btn-wrap">
  <a class="zigrow-pricing-4__btn" href="#" data-btn="pricing-4">Book Now</a>
</div>
        </div>
      </div>

      <!-- PRO (FEATURED) -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div
          class="zigrow-pricing-4__card zigrow-pricing-4__card--featured"
          data-plan="pro"
          tabindex="0"
        >
          <p class="zigrow-pricing-4__plan">
            <i
              class="bi bi-stars"
              data-icon="plan-spark"
              aria-hidden="true"
            ></i>
            PRO CLEANING
          </p>

          <h3 class="zigrow-pricing-4__price">₹650</h3>
          <p class="zigrow-pricing-4__per">/service</p>

          <p class="zigrow-pricing-4__desc">
            A more complete cleaning package designed for medium to large homes that need extra care.
          </p>

          <div class="zigrow-pricing-4__divider" aria-hidden="true"></div>

          <ul class="zigrow-pricing-4__list">
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>Detailed home assessment</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>4 bedroom cleaning</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>4 bathroom cleaning</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>Kitchen and living area deep cleaning</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>7 day service support</p>
            </li>
          </ul>

    
<div class="zigrow-pricing-4__btn-wrap">
  <a class="zigrow-pricing-4__btn" href="#" data-btn="pricing-4">Book Now</a>
</div>
        </div>
      </div>

      <!-- DELUXE -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div class="zigrow-pricing-4__card" data-plan="deluxe" tabindex="0">
          <p class="zigrow-pricing-4__plan">
            <i
              class="bi bi-stars"
              data-icon="plan-spark"
              aria-hidden="true"
            ></i>
            DELUXE CLEANING
          </p>

          <h3 class="zigrow-pricing-4__price">₹950</h3>
          <p class="zigrow-pricing-4__per">/service</p>

          <p class="zigrow-pricing-4__desc">
            Our most complete plan for larger homes that need a more detailed and polished cleaning experience.
          </p>

          <div class="zigrow-pricing-4__divider" aria-hidden="true"></div>

          <ul class="zigrow-pricing-4__list">
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>Priority home assessment</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>5 bedroom cleaning</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>5 bathroom cleaning</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>Full kitchen, living room, and hallway cleaning</p>
            </li>
            <li>
              <i
                class="bi bi-check-circle"
                data-icon="check"
                aria-hidden="true"
              ></i>
              <p>7 day service guarantee</p>
            </li>
          </ul>

         
<div class="zigrow-pricing-4__btn-wrap">
  <a class="zigrow-pricing-4__btn" href="#" data-btn="pricing-4">Book Now</a>
</div>
        </div>
      </div>
    </div>
  </div>

  <style>
    body {
      margin: 0;
      background: #ffffff;
      color: #0f172a;
    }

    /* =========================
       SECTION
    ========================== */
    .zigrow-pricing-4 {
      background: #ffffff;
    }
    .py-6 {
      padding: 3rem 0;
    }
    .zigrow-pricing-4 .zigrow-pricing-4__heading {
      text-align: center;
      max-width: 820px;
      margin: 0 auto 2.25rem;
      padding: 0 0.75rem;
    }

    .zigrow-pricing-4 .zigrow-pricing-4__title {
      margin: 0;
      font-size: clamp(1.55rem, 3vw, 2.2rem);
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
    }

    .zigrow-pricing-4 .zigrow-pricing-4__subtext {
      margin: 0.75rem 0 0;
      color: var(--secondary-colors, #6b7280);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .zigrow-pricing-4 .zigrow-pricing-4__btn-wrap {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: 1.25rem;
}
    /* =========================
       CARDS
    ========================== */
    .zigrow-pricing-4 .zigrow-pricing-4__card {
      background: #ffffff;
      border-radius: 14px;
      padding: 1.55rem 1.45rem 1.4rem;
      border: 1px solid #eef0f4;
      box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
      height: 100%;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
      overflow: hidden;
    }

    .zigrow-pricing-4 .zigrow-pricing-4__card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 36px rgba(15, 23, 42, 0.09);
    }

    .zigrow-pricing-4 .zigrow-pricing-4__card--featured {
      background: var(--primary-colors, #2f564a);
      border-color: rgba(255, 255, 255, 0.14);
    }

    .zigrow-pricing-4 .zigrow-pricing-4__plan {
      margin: 0;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #0f172a;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .zigrow-pricing-4 .zigrow-pricing-4__plan i {
      font-size: 0.7rem;
      color: var(--territory-colors, #ffc700);
    }

    .zigrow-pricing-4 .zigrow-pricing-4__price {
      margin: 0.75rem 0 0;
      font-size: 2.1rem;
      font-weight: 900;
      letter-spacing: -0.02em;
      color: #0f172a;
    }

    .zigrow-pricing-4 .zigrow-pricing-4__per {
      margin: 0.2rem 0 0;
      font-size: 0.86rem;
      font-weight: 700;
      color: var(--secondary-colors, #6b7280);
    }

    .zigrow-pricing-4 .zigrow-pricing-4__desc {
      margin: 1rem 0 1.15rem;
      color: var(--secondary-colors, #6b7280);
      font-size: 0.93rem;
      line-height: 1.6;
    }

    .zigrow-pricing-4 .zigrow-pricing-4__divider {
      height: 1px;
      background: #eef0f4;
      margin: 1.1rem 0 1.1rem;
    }

    /* list */
    .zigrow-pricing-4 .zigrow-pricing-4__list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .zigrow-pricing-4 .zigrow-pricing-4__list li {
      margin: 0.65rem 0;
      color: #4b5563;
      font-size: 0.92rem;
      line-height: 1.35;
      display: flex;
      gap: 0.65rem;
      align-items: flex-start;
    }

    .zigrow-pricing-4 .zigrow-pricing-4__list li i {
      font-size: 1rem;
      line-height: 1.1;
      opacity: 0.85;
    }

    /* button */
    .zigrow-pricing-4 .zigrow-pricing-4__btn {
    /* Replace with this */
display: inline-flex;
align-items: center;
justify-content: center;
flex: 1 1 160px;
width: auto;
margin-top: 0;
white-space: nowrap;
      border: 0;
      border-radius: 999px;
      padding: 0.85rem 1rem;
      font-weight: 900;
      font-size: 0.95rem;
      cursor: pointer;
      transition: transform 0.18s ease, filter 0.18s ease;
      background: var(--primary-colors, #2f564a);
      color: #ffffff;
     
      text-align: center;
      text-decoration: none;
    }

    .zigrow-pricing-4 .zigrow-pricing-4__btn:hover {
      transform: translateY(-1px);
      filter: brightness(0.98);
    }

    /* featured overrides */
    .zigrow-pricing-4
      .zigrow-pricing-4__card--featured
      .zigrow-pricing-4__plan,
    .zigrow-pricing-4
      .zigrow-pricing-4__card--featured
      .zigrow-pricing-4__price,
    .zigrow-pricing-4
      .zigrow-pricing-4__card--featured
      .zigrow-pricing-4__desc,
    .zigrow-pricing-4
      .zigrow-pricing-4__card--featured
      .zigrow-pricing-4__list
      li {
      color: rgba(255, 255, 255, 0.92);
    }

    .zigrow-pricing-4
      .zigrow-pricing-4__card--featured
      .zigrow-pricing-4__per {
      color: var(--territory-colors, #ffc700);
    }

    .zigrow-pricing-4
      .zigrow-pricing-4__card--featured
      .zigrow-pricing-4__divider {
      background: rgba(255, 255, 255, 0.18);
    }

    .zigrow-pricing-4
      .zigrow-pricing-4__card--featured
      .zigrow-pricing-4__btn {
      background: #ffffff;
      color: var(--primary-colors, #2f564a);
    }

    .zigrow-pricing-4
      .zigrow-pricing-4__card--featured
      .zigrow-pricing-4__list
      li
      i {
      opacity: 0.95;
    }

    /* responsive */
    @media (max-width: 767.98px) {
      .zigrow-pricing-4 {
        padding: 2.5rem 0;
      }
      .zigrow-pricing-4 .zigrow-pricing-4__card {
        padding: 1.35rem 1.2rem 1.15rem;
      }
    }
  </style>

  <!-- NOTE: Bootstrap Icons link should be loaded globally in <head>. -->
  <script>
    (function () {
      const cards = Array.from(
        document.querySelectorAll(".zigrow-pricing-4__card")
      );
      if (!cards.length) return;

      function setActive(card) {
        cards.forEach((c) => c.classList.remove("is-active"));
        card.classList.add("is-active");
      }

      cards.forEach((card) => {
        card.addEventListener("click", () => setActive(card));
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActive(card);
          }
        });

        const btn = card.querySelector(".zigrow-pricing-4__btn");
        if (btn) {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            setActive(card);
          });
        }
      });
    })();
  </script>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-pricing-5", {
  name: "Pricing-5",
  category: "pricing",
  image:
    "https://i.postimg.cc/rsZv4r0C/Screenshot-2026-07-21-173013.png",
  html: `
<section
  id="zigrow-pricing-5"
  class="zigrow-pricing-5"
  data-section="zigrow-pricing-5"
>
  <div class="container">
    <div class="zigrow-pricing-5-heading">
      <h2 class="no-theme-size zigrow-pricing-5-title">Select a pricing plan</h2>
    </div>

    <div
      class="zigrow-pricing-5-panel"  data-zg-editable="surface"
  
    >
      <div class="zigrow-pricing-5-features">
        <p class="zigrow-pricing-5-features-label">What’s included</p>

        <div class="zigrow-pricing-5-feature-list">
          <div class="zigrow-pricing-5-feature-item ">
            <div class="zigrow-pricing-5-feature-content">
              <p class="zigrow-pricing-5-feature-name">
                Team collaboration tools
              </p>

              <span class="zigrow-pricing-5-feature-icon">
                <i
                  class="bi bi-check-circle-fill"
                  data-icon="check-circle-fill"
                ></i>
              </span>
            </div>
          </div>

          <div class="zigrow-pricing-5-feature-item ">
            <div class="zigrow-pricing-5-feature-content">
              <p class="zigrow-pricing-5-feature-name">
                Ready-to-use resources
              </p>

              <span class="zigrow-pricing-5-feature-icon">
                <i
                  class="bi bi-check-circle-fill"
                  data-icon="check-circle-fill"
                ></i>
              </span>
            </div>
          </div>

          <div class="zigrow-pricing-5-feature-item ">
            <div class="zigrow-pricing-5-feature-content">
              <p class="zigrow-pricing-5-feature-name">
                Secure cloud storage
              </p>

              <span class="zigrow-pricing-5-feature-icon">
                <i
                  class="bi bi-check-circle-fill"
                  data-icon="check-circle-fill"
                ></i>
              </span>
            </div>
          </div>

          <div class="zigrow-pricing-5-feature-item ">
            <div class="zigrow-pricing-5-feature-content">
              <p class="zigrow-pricing-5-feature-name">
                Automatic data backup
              </p>

              <span class="zigrow-pricing-5-feature-icon">
                <i
                  class="bi bi-check-circle-fill"
                  data-icon="check-circle-fill"
                ></i>
              </span>
            </div>
          </div>

          <div class="zigrow-pricing-5-feature-item ">
            <div class="zigrow-pricing-5-feature-content">
              <p class="zigrow-pricing-5-feature-name">
                Advanced business tools
              </p>

              <span
                class="zigrow-pricing-5-feature-icon zigrow-pricing-5-feature-icon-muted"
              >
                <i
                  class="bi bi-check-circle-fill"
                  data-icon="check-circle-fill"
                ></i>
              </span>
            </div>
          </div>

          <div class="zigrow-pricing-5-feature-item ">
            <div class="zigrow-pricing-5-feature-content">
              <p class="zigrow-pricing-5-feature-name">
                Smart assistance tools
              </p>

              <span
                class="zigrow-pricing-5-feature-icon zigrow-pricing-5-feature-icon-muted"
              >
                <i
                  class="bi bi-check-circle-fill"
                  data-icon="check-circle-fill"
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="zigrow-pricing-5-plan-list">
        <div class="zigrow-pricing-5-plan-item ">
          <div
            class="zigrow-pricing-5-plan"
            data-zg-editable="surface"
          >
            <div class="zigrow-pricing-5-plan-content">
              <h3 class="zigrow-pricing-5-plan-name">Professional</h3>

              <p class="zigrow-pricing-5-plan-description">
                For established businesses
              </p>
            </div>

            <p class="zigrow-pricing-5-price">
              <span class="zigrow-pricing-5-price-amount">₹2,499</span>
              <span class="zigrow-pricing-5-price-period">/mo</span>
            </p>

            <div class="zigrow-pricing-5-plan-action">
              <a
                href="#contact"
                class="zigrow-pricing-5-plan-button"
                data-btn="pricing"
              >
                Choose Professional
              </a>
            </div>
          </div>
        </div>

        <div class="zigrow-pricing-5-plan-item ">
          <div
            class="zigrow-pricing-5-plan zigrow-pricing-5-plan-featured"
            data-zg-editable="surface"
          >
            <div class="zigrow-pricing-5-plan-content">
              <h3 class="zigrow-pricing-5-plan-name">Standard</h3>

              <p class="zigrow-pricing-5-popular">
                <span class="zigrow-pricing-5-popular-icon">
                  <i class="bi bi-star-fill" data-icon="star-fill"></i>
                </span>

                <span>Most Popular</span>
              </p>
            </div>

            <p class="zigrow-pricing-5-price">
              <span class="zigrow-pricing-5-price-amount">₹999</span>
              <span class="zigrow-pricing-5-price-period">/mo</span>
            </p>

            <div class="zigrow-pricing-5-plan-action">
              <a
                href="#contact"
                class="zigrow-pricing-5-plan-button"
                data-btn="pricing"
              >
                Choose Standard
              </a>
            </div>
          </div>
        </div>

        <div class="zigrow-pricing-5-plan-item ">
          <div
            class="zigrow-pricing-5-plan"
            data-zg-editable="surface"
          >
            <div class="zigrow-pricing-5-plan-content">
              <h3 class="zigrow-pricing-5-plan-name">Free</h3>

              <p class="zigrow-pricing-5-plan-description">
                Essential starter features
              </p>
            </div>

            <p class="zigrow-pricing-5-price">
              <span class="zigrow-pricing-5-price-amount">₹0</span>
              <span class="zigrow-pricing-5-price-period">/mo</span>
            </p>

            <div class="zigrow-pricing-5-plan-action">
              <a
                href="#contact"
                class="zigrow-pricing-5-plan-button"
                data-btn="pricing"
              >
                Start Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-pricing-5 {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 7rem) 0;
      background-image:
        linear-gradient(
          135deg,
          rgba(5, 4, 33, 0.2),
          rgba(5, 4, 33, 0.08)
        ),
        url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=90");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    .zigrow-pricing-5::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(2, 3, 25, 0.12);
      pointer-events: none;
    }

    .zigrow-pricing-5 .container {
      position: relative;
      z-index: 2;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-heading {
      margin-bottom: clamp(2rem, 4vw, 3rem);
      text-align: center;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-title {
      margin: 0;
      color: #ffffff;
      font-size: clamp(2.4rem, 4.5vw, 4.2rem);
      font-weight: 500;
      line-height: 1.1;
      letter-spacing: -0.04em;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-panel {
      display: grid;
      grid-template-columns: minmax(18rem, 0.85fr) minmax(28rem, 1.35fr);
      gap: clamp(2rem, 5vw, 5rem);
      width: min(100%, 1080px);
      margin: 0 auto;
      padding: clamp(1.5rem, 3vw, 2.5rem);
      border: 1px solid rgba(255, 255, 255, 0.13);
      border-radius: clamp(1.5rem, 3vw, 2.5rem);
      background: rgba(0, 0, 0, 0.94);
      box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.32);
      backdrop-filter: blur(16px);
    }

    .zigrow-pricing-5 .zigrow-pricing-5-features {
      align-self: center;
      min-width: 0;
      padding: 0 clamp(0rem, 2vw, 1rem);
    }

    .zigrow-pricing-5 .zigrow-pricing-5-features-label {
      margin: 0 0 1.25rem;
      color: rgba(255, 255, 255, 0.48);
      font-size: 0.72rem;
      font-weight: 500;
      line-height: 1.2;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-feature-list {
      display: grid;
      gap: clamp(0.9rem, 1.5vw, 1.3rem);
    }

    .zigrow-pricing-5 .zigrow-pricing-5-feature-item {
      min-width: 0;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-feature-content {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 1rem;
      align-items: center;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-feature-name {
      margin: 0;
      color: rgba(255, 255, 255, 0.78);
      font-size: clamp(0.82rem, 1.1vw, 0.95rem);
      line-height: 1.35;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-feature-icon {
      display: grid;
      place-items: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background: rgba(232, 0, 185, 0.15);
      color: #ef00be;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-feature-icon-muted {
      background: rgba(255, 255, 255, 0.12);
      color: rgba(255, 255, 255, 0.46);
    }

    .zigrow-pricing-5 .zigrow-pricing-5-feature-icon i {
      font-size: 0.9rem;
      line-height: 1;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan-list {
      display: grid;
      gap: 1rem;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan-item {
      min-width: 0;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto auto;
      gap: clamp(1rem, 2vw, 1.5rem);
      align-items: center;
      min-height: clamp(7.5rem, 11vw, 9rem);
      padding: clamp(1.3rem, 2.5vw, 2rem);
      overflow: hidden;
      border: 2px solid rgba(255, 255, 255, 0.13);
      border-radius: clamp(1.2rem, 2vw, 1.8rem);
      background: rgba(4, 4, 4, 0.92);
      color: #ffffff;
      text-decoration: none;
      box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, 0.03),
        0 0.8rem 2rem rgba(0, 0, 0, 0.22);
      transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan:hover {
      transform: translateY(-3px);
      border-color: rgba(255, 255, 255, 0.35);
      box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, 0.04),
        0 1.2rem 2.7rem rgba(0, 0, 0, 0.32);
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan-featured {
      border-color: transparent;
      background:
        linear-gradient(
          110deg,
          rgba(71, 3, 60, 0.82),
          rgba(8, 37, 48, 0.88)
        )
        padding-box;
      box-shadow:
        -0.15rem 0 1.2rem rgba(255, 0, 190, 0.75),
        0.15rem 0 1.2rem rgba(0, 192, 255, 0.75);
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan-featured::before {
      content: "";
      position: absolute;
      inset: -2px;
      z-index: -1;
      border-radius: inherit;
      background: linear-gradient(
        110deg,
        var(--primary-colors, #ff00c8),
        var(--territory-colors, #00bfff)
      );
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan-content {
      min-width: 0;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan-name {
      margin: 0;
      color: #ffffff;
      font-size: clamp(1rem, 1.5vw, 1.25rem);
      font-weight: 600;
      line-height: 1.2;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan-description {
      display: inline-block;
      margin: 0.8rem 0 0;
      padding: 0.38rem 0.65rem;
      border-radius: 0.25rem;
      background: rgba(255, 255, 255, 0.08);
      color: rgba(255, 255, 255, 0.48);
      font-size: 0.68rem;
      line-height: 1;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-popular {
      display: grid;
      grid-template-columns: auto auto;
      gap: 0.4rem;
      align-items: center;
      width: max-content;
      margin: 0.8rem 0 0;
      padding: 0.42rem 0.7rem;
      border-radius: 0.25rem;
      background: var(--primary-colors, #7c18df);
      color: #ffffff;
      font-size: 0.68rem;
      font-weight: 600;
      line-height: 1;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-popular-icon {
      display: grid;
      place-items: center;
      width: 0.9rem;
      height: 0.9rem;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-popular-icon i {
      font-size: 0.75rem;
      line-height: 1;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan-action {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      justify-content: flex-end;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 8.4rem;
      min-height: 2.65rem;
      padding: 0.72rem 1rem;
      border: 1px solid rgba(255, 255, 255, 0.36);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      color: #ffffff;
      font-size: 0.7rem;
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      white-space: nowrap;
      backdrop-filter: blur(8px);
      transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-plan-button:hover {
      transform: translateY(-2px);
      border-color: var(--primary-colors, #ff00c8);
      background: var(--primary-colors, #7c18df);
      color: #ffffff;
      box-shadow: 0 0.75rem 1.5rem rgba(124, 24, 223, 0.24);
    }

    .zigrow-pricing-5
      .zigrow-pricing-5-plan-featured
      .zigrow-pricing-5-plan-button {
      border-color: transparent;
      background: linear-gradient(
        110deg,
        var(--primary-colors, #ff00c8),
        var(--territory-colors, #00bfff)
      );
      box-shadow: 0 0.65rem 1.4rem rgba(0, 191, 255, 0.18);
    }

    .zigrow-pricing-5 .zigrow-pricing-5-price {
      display: grid;
      grid-template-columns: auto auto;
      gap: 0.28rem;
      align-items: baseline;
      margin: 0;
      color: #ffffff;
      white-space: nowrap;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-price-amount {
      font-size: clamp(1.8rem, 3vw, 2.7rem);
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.04em;
    }

    .zigrow-pricing-5 .zigrow-pricing-5-price-period {
      color: rgba(255, 255, 255, 0.7);
      font-size: clamp(0.7rem, 1vw, 0.85rem);
      font-weight: 600;
    }

    @media (max-width: 991px) {
      .zigrow-pricing-5 .zigrow-pricing-5-panel {
        grid-template-columns: 1fr;
      }

      .zigrow-pricing-5 .zigrow-pricing-5-features {
        padding: 0;
      }

      .zigrow-pricing-5 .zigrow-pricing-5-feature-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 2rem;
      }
    }

    @media (max-width: 767px) {
      .zigrow-pricing-5 {
        padding: 3rem 0;
      }

      .zigrow-pricing-5 .zigrow-pricing-5-panel {
        padding: 1.25rem;
        border-radius: 1.5rem;
      }

      .zigrow-pricing-5 .zigrow-pricing-5-plan {
        border-radius: 1.2rem;
      }
    }

    @media (max-width: 575px) {
      .zigrow-pricing-5 .zigrow-pricing-5-title {
        font-size: clamp(2.2rem, 11vw, 3.4rem);
      }

      .zigrow-pricing-5 .zigrow-pricing-5-feature-list {
        grid-template-columns: 1fr;
      }

      .zigrow-pricing-5 .zigrow-pricing-5-plan {
        grid-template-columns: 1fr;
        gap: 1.2rem;
      }

      .zigrow-pricing-5 .zigrow-pricing-5-price {
        justify-content: start;
      }

      .zigrow-pricing-5 .zigrow-pricing-5-plan-action {
        justify-content: flex-start;
      }
    }
  </style>
</section>
`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-pricing-6", {
  name: "Pricing-6",
  category: "pricing",
  image:
    "https://i.postimg.cc/wB8jSB5F/Screenshot-2026-07-22-162004.png",
  html: `
<section
  id="zigrow-pricing-6"
  class="zigrow-pricing-6"
  data-section="zigrow-pricing-6"
>
  <div class="zigrow-pricing-6-background" aria-hidden="true">
    <span class="zigrow-pricing-6-blob zigrow-pricing-6-blob-one"></span>
    <span class="zigrow-pricing-6-blob zigrow-pricing-6-blob-two"></span>
    <span class="zigrow-pricing-6-blob zigrow-pricing-6-blob-three"></span>
    <span class="zigrow-pricing-6-blob zigrow-pricing-6-blob-four"></span>
    <span class="zigrow-pricing-6-arc zigrow-pricing-6-arc-top"></span>
    <span class="zigrow-pricing-6-arc zigrow-pricing-6-arc-bottom"></span>
  </div>

  <div class="container">
    <div class="zigrow-pricing-6-heading">
      <h2 class="no-theme-size zigrow-pricing-6-title">Creative Pricing Plans</h2>

      <p class="zigrow-pricing-6-description">
        Choose the right plan and access practical features designed to support
        your everyday business needs.
      </p>
    </div>

    <div class="row zigrow-pricing-6-grid">
      <div class="col-12 col-md-6 col-lg-4 zigrow-pricing-6-grid-item clonable-card">
        <a
          href="#contact"
          class="zigrow-pricing-6-card zigrow-pricing-6-card-basic"
      
        >
          <div class="zigrow-pricing-6-icon-area">
            <div class="zigrow-pricing-6-icon">
              <i class="bi bi-key-fill" data-icon="key-fill"></i>
            </div>
          </div>

          <div class="zigrow-pricing-6-card-content">
            <h3 class="zigrow-pricing-6-plan-name">Basic</h3>

            <p class="zigrow-pricing-6-price">
              <span class="zigrow-pricing-6-currency">₹</span>
              <span class="zigrow-pricing-6-amount">499</span>
            </p>

            <p class="zigrow-pricing-6-plan-text">
              Essential features with reliable support for getting started.
            </p>
          </div>
        </a>
      </div>

      <div class="col-12 col-md-6 col-lg-4 zigrow-pricing-6-grid-item clonable-card">
        <a
          href="#contact"
          class="zigrow-pricing-6-card zigrow-pricing-6-card-premium"
      
        >
          <div class="zigrow-pricing-6-icon-area">
            <div class="zigrow-pricing-6-icon">
              <i class="bi bi-gem" data-icon="gem"></i>
            </div>
          </div>

          <div class="zigrow-pricing-6-card-content">
            <h3 class="zigrow-pricing-6-plan-name">Premium</h3>

            <p class="zigrow-pricing-6-price">
              <span class="zigrow-pricing-6-currency">₹</span>
              <span class="zigrow-pricing-6-amount">1,499</span>
            </p>

            <p class="zigrow-pricing-6-plan-text">
              Complete features with enhanced tools and priority assistance.
            </p>
          </div>
        </a>
      </div>

      <div class="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0 zigrow-pricing-6-grid-item clonable-card">
        <a
          href="#contact"
          class="zigrow-pricing-6-card zigrow-pricing-6-card-standard"
      
        >
          <div class="zigrow-pricing-6-icon-area">
            <div class="zigrow-pricing-6-icon">
              <i class="bi bi-cloud-fill" data-icon="cloud-fill"></i>
            </div>
          </div>

          <div class="zigrow-pricing-6-card-content">
            <h3 class="zigrow-pricing-6-plan-name">Standard</h3>

            <p class="zigrow-pricing-6-price">
              <span class="zigrow-pricing-6-currency">₹</span>
              <span class="zigrow-pricing-6-amount">999</span>
            </p>

            <p class="zigrow-pricing-6-plan-text">
              Flexible features with dependable tools for growing businesses.
            </p>
          </div>
        </a>
      </div>
    </div>

    
  </div>

  <style>
    .zigrow-pricing-6 {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 7rem) 0;
      background: #fff;
    }

    .zigrow-pricing-6 .container {
      position: relative;
      z-index: 2;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-background {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-blob {
      position: absolute;
      display: block;
      border-radius: 50%;
      background: var(--primary-colors, #9f87f5);
    }

    .zigrow-pricing-6 .zigrow-pricing-6-blob-one {
      top: -5.5rem;
      left: -3rem;
      width: 10rem;
      height: 10rem;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-blob-two {
      top: 4.2rem;
      left: 12%;
      width: 3.8rem;
      height: 3.8rem;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-blob-three {
      right: 2.5%;
      bottom: 2rem;
      width: 3rem;
      height: 3rem;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-blob-four {
      right: 8%;
      bottom: -5rem;
      width: 10rem;
      height: 10rem;
      background: color-mix(
        in srgb,
        var(--primary-colors, #9f87f5) 78%,
        var(--territory-colors, #eee9ff)
      );
    }

    .zigrow-pricing-6 .zigrow-pricing-6-arc {
      position: absolute;
      display: block;
      border: 1px solid
        color-mix(
          in srgb,
          var(--primary-colors, #9f87f5) 45%,
          transparent
        );
      border-radius: 50%;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-arc::before,
    .zigrow-pricing-6 .zigrow-pricing-6-arc::after {
      content: "";
      position: absolute;
      border: 1px solid
        color-mix(
          in srgb,
          var(--primary-colors, #9f87f5) 45%,
          transparent
        );
      border-radius: 50%;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-arc-top {
      top: -12rem;
      right: -9rem;
      width: 24rem;
      height: 24rem;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-arc-top::before {
      inset: 2rem;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-arc-top::after {
      inset: 4rem;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-arc-bottom {
      bottom: -12rem;
      left: -11rem;
      width: 23rem;
      height: 23rem;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-arc-bottom::before {
      inset: 2rem;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-arc-bottom::after {
      inset: 4rem;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-heading {
      max-width: 680px;
      margin: 0 auto clamp(2.5rem, 5vw, 4rem);
      text-align: center;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-title {
      margin: 0;
      color: #555555;
      font-size: clamp(2.5rem, 5vw, 3.6rem);
      font-weight: 700;
      line-height: 1.08;
      letter-spacing: -0.04em;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-description {
      max-width: 520px;
      margin: 0.9rem auto 0;
      color: var(--secondary-colors, #6b6872);
      font-size: clamp(0.95rem, 1.25vw, 1.08rem);
      line-height: 1.55;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-grid {
      align-items: flex-end;
      max-width: 1120px;
      margin-right: auto;
      margin-left: auto;
      padding-top: clamp(1rem, 3vw, 2.5rem);
      row-gap: clamp(1.5rem, 3vw, 2.5rem);
    }

    .zigrow-pricing-6 .zigrow-pricing-6-grid-item {
      min-width: 0;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-card {
      position: relative;
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
      min-height: clamp(20rem, 30vw, 25rem);
      overflow: hidden;
      border-radius: 1.25rem;
      color: #ffffff;
      text-align: center;
      text-decoration: none;
      box-shadow: 0 1.6rem 3rem rgba(75, 61, 120, 0.15);
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-card:hover {
      transform: translateY(-0.5rem);
      box-shadow: 0 2rem 4rem rgba(75, 61, 120, 0.23);
    }

    .zigrow-pricing-6 .zigrow-pricing-6-card-basic,
    .zigrow-pricing-6 .zigrow-pricing-6-card-standard {
      background: color-mix(
        in srgb,
        var(--primary-colors, #58aef6) 76%,
        white
      );
    }

    .zigrow-pricing-6 .zigrow-pricing-6-card-premium {
      min-height: clamp(22rem, 34vw, 28rem);
      background: var(--primary-colors, #8255f6);
      transform: translateY(-1.5rem);
      box-shadow: 0 2rem 4rem
        color-mix(
          in srgb,
          var(--primary-colors, #8255f6) 30%,
          transparent
        );
    }

    .zigrow-pricing-6 .zigrow-pricing-6-card-premium:hover {
      transform: translateY(-2rem);
    }

    .zigrow-pricing-6 .zigrow-pricing-6-icon-area {
      position: relative;
      display: grid;
      place-items: center;
      min-height: clamp(7rem, 12vw, 9.5rem);
      overflow: hidden;
      background: #ffffff;
      border-radius: 0 0 50% 50%;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-icon-area::before {
      content: "";
      position: absolute;
      right: -1rem;
      bottom: -2rem;
      left: -1rem;
      height: 4rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.35);
    }

    .zigrow-pricing-6 .zigrow-pricing-6-icon {
      position: relative;
      z-index: 2;
      display: grid;
      place-items: center;
      width: 5rem;
      height: 5rem;
      color: var(--primary-colors, #55c4d4);
    }

    .zigrow-pricing-6 .zigrow-pricing-6-card-premium .zigrow-pricing-6-icon {
      color: var(--primary-colors, #8255f6);
    }

    .zigrow-pricing-6 .zigrow-pricing-6-icon i {
      font-size: clamp(3rem, 5vw, 4.4rem);
      line-height: 1;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-card-content {
      display: grid;
      align-content: center;
      padding: clamp(1.5rem, 3vw, 2.5rem);
    }

    .zigrow-pricing-6 .zigrow-pricing-6-plan-name {
      margin: 0;
      color: #ffffff;
      font-size: clamp(1.15rem, 2vw, 1.5rem);
      font-weight: 700;
      line-height: 1.2;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-price {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
      align-items: start;
      margin: 0.4rem 0 0;
      color: #ffffff;
      line-height: 1;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-currency {
      margin-top: 0.35rem;
      font-size: clamp(1.1rem, 2vw, 1.45rem);
      font-weight: 400;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-amount {
      font-size: clamp(2.2rem, 4vw, 3.3rem);
      font-weight: 300;
      letter-spacing: -0.04em;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-plan-text {
      max-width: 17rem;
      margin: 1.2rem auto 0;
      color: rgba(255, 255, 255, 0.83);
      font-size: clamp(0.78rem, 1.05vw, 0.9rem);
      line-height: 1.55;
    }

    .zigrow-pricing-6 .zigrow-pricing-6-pagination {
      display: grid;
      grid-template-columns: repeat(3, 0.8rem);
      gap: 0.55rem;
      justify-content: center;
      margin-top: clamp(1.5rem, 3vw, 2.5rem);
    }

    .zigrow-pricing-6 .zigrow-pricing-6-pagination span {
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: var(--secondary-colors, #646167);
    }

    .zigrow-pricing-6 .zigrow-pricing-6-pagination-active {
      background: var(--primary-colors, #8255f6);
    }

    @media (max-width: 991px) {
      .zigrow-pricing-6 .zigrow-pricing-6-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-items: stretch;
      }

      .zigrow-pricing-6 .zigrow-pricing-6-grid-item:nth-child(3) {
        grid-column: 1 / -1;
        width: min(100%, 50%);
        margin: 0 auto;
      }

      .zigrow-pricing-6 .zigrow-pricing-6-card-premium {
        min-height: 25rem;
        transform: none;
      }

      .zigrow-pricing-6 .zigrow-pricing-6-card-premium:hover {
        transform: translateY(-0.5rem);
      }
    }

    @media (max-width: 767px) {
      .zigrow-pricing-6 {
        padding: 3rem 0;
      }

      .zigrow-pricing-6 .zigrow-pricing-6-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        width: min(100%, 32rem);
      }

      .zigrow-pricing-6 .zigrow-pricing-6-card,
      .zigrow-pricing-6 .zigrow-pricing-6-card-premium {
        min-height: 23rem;
      }

      .zigrow-pricing-6 .zigrow-pricing-6-blob-one {
        width: 7rem;
        height: 7rem;
      }

      .zigrow-pricing-6 .zigrow-pricing-6-blob-four {
        width: 7rem;
        height: 7rem;
      }
    }

    @media (max-width: 479px) {
      .zigrow-pricing-6 .zigrow-pricing-6-title {
        font-size: clamp(2.3rem, 12vw, 3.3rem);
      }

      .zigrow-pricing-6 .zigrow-pricing-6-card,
      .zigrow-pricing-6 .zigrow-pricing-6-card-premium {
        min-height: 21rem;
      }

      .zigrow-pricing-6 .zigrow-pricing-6-icon-area {
        min-height: 8rem;
      }
    }
  </style>
</section>
`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-pricing-7", {
  name: "Pricing-7",
  category: "pricing",
  image:
    "https://i.postimg.cc/43kxr3v8/Screenshot-2026-07-22-162059.png",

  html: `
<section
  id="zigrow-pricing-7"
  data-section="zigrow-pricing-7"
  class="zigrow-pricing-7"
>
  <div class="container zigrow-pricing-7-container">
    <div class="zigrow-pricing-7-heading">
      <h2 class="no-theme-size zigrow-pricing-7-title">Pricing Plans</h2>

      <p class="zigrow-pricing-7-description">
        Choose a flexible plan designed to support your current needs and future
        growth.
      </p>
    </div>

    <div class="row zigrow-pricing-7-grid">
      <div class="col-12 col-md-6 col-lg-4 zigrow-pricing-7-column">
        <div
          class="zigrow-pricing-7-card"
      
        >
          <div class="zigrow-pricing-7-card-header">
            <p class="zigrow-pricing-7-plan-name">STARTER</p>

            <h3 class="zigrow-pricing-7-price">
              <span class="zigrow-pricing-7-currency">₹</span>
              <span>499</span>
            </h3>

            <p class="zigrow-pricing-7-duration">per month</p>
          </div>

          <ul class="zigrow-pricing-7-features">
            <li>
              <span class="zigrow-pricing-7-feature-icon">
                <i class="bi bi-check" data-icon="check"></i>
              </span>
              <span>Essential business tools</span>
            </li>

            <li>
              <span class="zigrow-pricing-7-feature-icon">
                <i class="bi bi-check" data-icon="check"></i>
              </span>
              <span>Standard customer support</span>
            </li>

            <li>
              <span class="zigrow-pricing-7-feature-icon">
                <i class="bi bi-check" data-icon="check"></i>
              </span>
              <span>Monthly performance reports</span>
            </li>
          </ul>

          <div class="zigrow-pricing-7-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85"
              alt="Starter plan graphical illustration"
              class="zigrow-pricing-7-image"
            />
          </div>

          <div class="zigrow-pricing-7-action">
            <a
              href="#contact"
              class="zigrow-pricing-7-button"
              data-btn="pricing"
            >
              Choose Starter
            </a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4 zigrow-pricing-7-column">
        <div
          class="zigrow-pricing-7-card zigrow-pricing-7-card-featured"
      
        >
          <span class="zigrow-pricing-7-badge">POPULAR</span>

          <div class="zigrow-pricing-7-card-header">
            <p class="zigrow-pricing-7-plan-name">BASIC</p>

            <h3 class="zigrow-pricing-7-price">
              <span class="zigrow-pricing-7-currency">₹</span>
              <span>749</span>
            </h3>

            <p class="zigrow-pricing-7-duration">per month</p>
          </div>

          <ul class="zigrow-pricing-7-features">
            <li>
              <span class="zigrow-pricing-7-feature-icon">
                <i class="bi bi-check" data-icon="check"></i>
              </span>
              <span>Everything in Starter</span>
            </li>

            <li>
              <span class="zigrow-pricing-7-feature-icon">
                <i class="bi bi-check" data-icon="check"></i>
              </span>
              <span>Advanced management tools</span>
            </li>

            <li>
              <span class="zigrow-pricing-7-feature-icon">
                <i class="bi bi-check" data-icon="check"></i>
              </span>
              <span>Priority customer support</span>
            </li>
          </ul>

          <div class="zigrow-pricing-7-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85"
              alt="Basic plan graphical illustration"
              class="zigrow-pricing-7-image"
            />
          </div>

          <div class="zigrow-pricing-7-action">
            <a
              href="#contact"
              class="zigrow-pricing-7-button"
              data-btn="pricing"
            >
              Choose Basic
            </a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0 zigrow-pricing-7-column">
        <div
          class="zigrow-pricing-7-card"
      
        >
          <div class="zigrow-pricing-7-card-header">
            <p class="zigrow-pricing-7-plan-name">PREMIUM</p>

            <h3 class="zigrow-pricing-7-price">
              <span class="zigrow-pricing-7-currency">₹</span>
              <span>999</span>
            </h3>

            <p class="zigrow-pricing-7-duration">per month</p>
          </div>

          <ul class="zigrow-pricing-7-features">
            <li>
              <span class="zigrow-pricing-7-feature-icon">
                <i class="bi bi-check" data-icon="check"></i>
              </span>
              <span>Everything in Basic</span>
            </li>

            <li>
              <span class="zigrow-pricing-7-feature-icon">
                <i class="bi bi-check" data-icon="check"></i>
              </span>
              <span>Detailed business insights</span>
            </li>

            <li>
              <span class="zigrow-pricing-7-feature-icon">
                <i class="bi bi-check" data-icon="check"></i>
              </span>
              <span>Dedicated expert assistance</span>
            </li>
          </ul>

          <div class="zigrow-pricing-7-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85"
              alt="Premium plan graphical illustration"
              class="zigrow-pricing-7-image"
            />
          </div>

          <div class="zigrow-pricing-7-action">
            <a
              href="#contact"
              class="zigrow-pricing-7-button"
              data-btn="pricing"
            >
              Choose Premium
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="zigrow-pricing-7-footer">
      <p>
        Start your free 30-day trial today and discover the plan that works best
        for your business.
      </p>
    </div>
  </div>

  <style>
    .zigrow-pricing-7 {
      width: 100%;
      overflow: hidden;
      background: #ffffff;
      padding: 68px 0 42px;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-container {
      max-width: 1160px;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-heading {
      max-width: 650px;
      margin: 0 auto 44px;
      text-align: center;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-title {
      margin: 0;
      color: var(--primary-colors, #17233f);
      font-size: clamp(2.4rem, 5vw, 4rem);
      font-weight: 400;
      letter-spacing: -0.045em;
      line-height: 1.05;
      text-transform: lowercase;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-description {
      max-width: 520px;
      margin: 14px auto 0;
      color: var(--secondary-colors, #687083);
      font-size: 0.96rem;
      line-height: 1.55;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-grid {
      align-items: stretch;
      margin-right: -12px;
      margin-left: -12px;
      row-gap: 24px;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-column {
      min-width: 0;
      padding-right: 12px;
      padding-left: 12px;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-card {
      position: relative;
      display: grid;
      grid-template-rows: auto auto 1fr auto;
      height: 100%;
      min-height: 550px;
      padding: 34px 24px 26px;
      overflow: hidden;
      border: 1px solid #edf0f5;
      border-radius: 0 0 42px 0;
      background: #f5f8fb;
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-card:hover {
      transform: translateY(-6px);
      border-color: var(--primary-colors, #17233f);
      box-shadow: 0 20px 44px rgba(29, 43, 72, 0.12);
    }

    .zigrow-pricing-7 .zigrow-pricing-7-card-featured {
      border-color: var(--primary-colors, #17233f);
      background: var(--territory-colors, #eef5ff);
    }

    .zigrow-pricing-7 .zigrow-pricing-7-badge {
      position: absolute;
      top: 14px;
      right: 14px;
      padding: 6px 10px;
      border-radius: 999px;
      background: var(--primary-colors, #17233f);
      color: #ffffff;
      font-size: 0.58rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      line-height: 1;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-card-header {
      text-align: center;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-plan-name {
      margin: 0;
      color: var(--secondary-colors, #687083);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      line-height: 1.4;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-price {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
      align-items: start;
      margin: 12px 0 0;
      color: var(--primary-colors, #17233f);
      font-size: clamp(2.6rem, 4vw, 3.6rem);
      font-weight: 800;
      letter-spacing: -0.05em;
      line-height: 1;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-currency {
      margin-top: 4px;
      font-size: 0.72em;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-duration {
      margin: 4px 0 0;
      color: var(--secondary-colors, #687083);
      font-size: 0.72rem;
      line-height: 1.4;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-features {
      display: grid;
      gap: 9px;
      margin: 24px 0 22px;
      padding: 0;
      list-style: none;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-features li {
      display: grid;
      grid-template-columns: 22px minmax(0, 1fr);
      gap: 8px;
      align-items: start;
      color: var(--secondary-colors, #596273);
      font-size: 0.78rem;
      line-height: 1.45;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-feature-icon {
      display: grid;
      width: 20px;
      height: 20px;
      place-items: center;
      border-radius: 50%;
      background: var(--primary-colors, #17233f);
      color: #ffffff;
      font-size: 0.72rem;
      line-height: 1;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-image-wrap {
      min-height: 190px;
      overflow: hidden;
      background: #eaf0f6;
      text-align: center;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-image {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 190px;
      object-fit: cover;
      transition: transform 0.35s ease;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-card:hover
      .zigrow-pricing-7-image {
      transform: scale(1.04);
    }

    .zigrow-pricing-7 .zigrow-pricing-7-action {
      display: grid;
      justify-content: center;
      margin-top: 22px;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-button {
      display: grid;
      min-width: 150px;
      min-height: 42px;
      padding: 11px 20px;
      place-items: center;
      border: 1px solid var(--primary-colors, #17233f);
      border-radius: 999px;
      background: var(--primary-colors, #17233f);
      color: #ffffff;
      font-size: 0.76rem;
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      transition:
        background-color 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-button:hover {
      transform: translateY(-2px);
      background: transparent;
      color: var(--primary-colors, #17233f);
    }

    .zigrow-pricing-7 .zigrow-pricing-7-footer {
      max-width: 700px;
      margin: 48px auto 0;
      text-align: center;
    }

    .zigrow-pricing-7 .zigrow-pricing-7-footer p {
      margin: 0;
      color: var(--secondary-colors, #747b86);
      font-size: clamp(1.15rem, 2.4vw, 1.75rem);
      font-weight: 500;
      line-height: 1.25;
    }

    @media (max-width: 991px) {
    }

    @media (max-width: 700px) {
      .zigrow-pricing-7 {
        padding: 54px 0 38px;
      }

      .zigrow-pricing-7 .zigrow-pricing-7-card {
        min-height: 530px;
      }

      .zigrow-pricing-7 .zigrow-pricing-7-image-wrap,
      .zigrow-pricing-7 .zigrow-pricing-7-image {
        min-height: 220px;
      }
    }

    @media (max-width: 420px) {
      .zigrow-pricing-7 .zigrow-pricing-7-title {
        font-size: 2.6rem;
      }

      .zigrow-pricing-7 .zigrow-pricing-7-card {
        padding: 30px 18px 22px;
      }

      .zigrow-pricing-7 .zigrow-pricing-7-footer {
        margin-top: 36px;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-pricing-7 .zigrow-pricing-7-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-pricing-8", {
  name: "Pricing-8",
  category: "pricing",
  image:
    "https://i.postimg.cc/6QJpDQVr/Screenshot-2026-07-22-162209.png",
  html: `
<section
  id="zigrow-pricing-8"
  class="zigrow-pricing-8"
  data-section="zigrow-pricing-8"
>
  <div class="container zigrow-pricing-8-container">
    <div class="row zigrow-pricing-8-grid">
      <div class="col-12 col-md-6 col-lg-4 zigrow-pricing-8-grid-item clonable-card">
        <div
          class="zigrow-pricing-8-card zigrow-pricing-8-card-one"
      
        >
          <div class="zigrow-pricing-8-card-image zigrow-pricing-8-media-center">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
              alt="Professional plan illustration"
            />
          </div>

          <div class="zigrow-pricing-8-card-badge">
            <span class="zigrow-pricing-8-card-badge-icon">
              <i class="bi bi-heart" data-icon="heart"></i>
            </span>
          </div>

          <div class="zigrow-pricing-8-card-content">
            <h3 class="zigrow-pricing-8-plan-name">Professional</h3>

            <ul class="zigrow-pricing-8-feature-list">
              <li><strong>512 MB</strong> Memory</li>
              <li><strong>Unmetered</strong> Bandwidth</li>
              <li><strong>10 GB</strong> Amount of Space</li>
            </ul>

            <p class="zigrow-pricing-8-price">
              <span class="zigrow-pricing-8-currency">₹</span>
              <span class="zigrow-pricing-8-amount">30</span>
            </p>

            <div class="zigrow-pricing-8-button-wrap">
              <a
                href="#contact"
                class="zigrow-pricing-8-button"
                data-btn="pricing"
              >
                Purchase
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4 zigrow-pricing-8-grid-item clonable-card">
        <div
          class="zigrow-pricing-8-card zigrow-pricing-8-card-two"
      
        >
          <div class="zigrow-pricing-8-card-image zigrow-pricing-8-media-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
              alt="Corporate plan illustration"
            />
          </div>

          <div class="zigrow-pricing-8-card-badge">
            <span class="zigrow-pricing-8-card-badge-icon">
              <i class="bi bi-house-door-fill" data-icon="house-door-fill"></i>
            </span>
          </div>

          <div class="zigrow-pricing-8-card-content">
            <h3 class="zigrow-pricing-8-plan-name">Corporate</h3>

            <ul class="zigrow-pricing-8-feature-list">
              <li><strong>512 MB</strong> Memory</li>
              <li><strong>Unmetered</strong> Bandwidth</li>
              <li><strong>10 GB</strong> Amount of Space</li>
            </ul>

            <p class="zigrow-pricing-8-price">
              <span class="zigrow-pricing-8-currency">₹</span>
              <span class="zigrow-pricing-8-amount">50</span>
            </p>

            <div class="zigrow-pricing-8-button-wrap">
              <a
                href="#contact"
                class="zigrow-pricing-8-button"
                data-btn="pricing"
              >
                Purchase
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0 zigrow-pricing-8-grid-item clonable-card">
        <div
          class="zigrow-pricing-8-card zigrow-pricing-8-card-three"
      
        >
          <div class="zigrow-pricing-8-card-image zigrow-pricing-8-media-center">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
              alt="Enterprise plan illustration"
            />
          </div>

          <div class="zigrow-pricing-8-card-badge">
            <span class="zigrow-pricing-8-card-badge-icon">
              <i class="bi bi-flower1" data-icon="flower1"></i>
            </span>
          </div>

          <div class="zigrow-pricing-8-card-content">
            <h3 class="zigrow-pricing-8-plan-name">Enterprise</h3>

            <ul class="zigrow-pricing-8-feature-list">
              <li><strong>512 MB</strong> Memory</li>
              <li><strong>Unmetered</strong> Bandwidth</li>
              <li><strong>10 GB</strong> Amount of Space</li>
            </ul>

            <p class="zigrow-pricing-8-price">
              <span class="zigrow-pricing-8-currency">₹</span>
              <span class="zigrow-pricing-8-amount">99</span>
            </p>

            <div class="zigrow-pricing-8-button-wrap">
              <a
                href="#contact"
                class="zigrow-pricing-8-button"
                data-btn="pricing"
              >
                Purchase
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-pricing-8 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 6.5rem) 0;
      background: #ffffff;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-container {
      max-width: 1280px;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-grid {
      align-items: flex-end;
      margin-right: -1rem;
      margin-left: -1rem;
      row-gap: clamp(1.25rem, 2.4vw, 2.25rem);
    }

    .zigrow-pricing-8 .zigrow-pricing-8-grid-item {
      min-width: 0;
      padding-right: 1rem;
      padding-left: 1rem;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card {
      position: relative;
      overflow: visible;
      border-radius: 0.95rem;
      box-shadow: 0 1.2rem 2.8rem rgba(20, 20, 20, 0.12);
      background: #fff;
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card:hover {
      transform: translateY(-0.45rem);
      box-shadow: 0 1.6rem 3.2rem rgba(20, 20, 20, 0.16);
    }

   

    .zigrow-pricing-8 .zigrow-pricing-8-card-two {
     
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-three {
     
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-image {
      position: relative;
      width: 100%;
      height: 10.2rem;
      overflow: hidden;
      border-radius: 0.95rem 0.95rem 0 0;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-media-center {
      text-align: center;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-image img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.45s ease;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card:hover .zigrow-pricing-8-card-image img {
      transform: scale(1.04);
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-badge {
      position: absolute;
      top: 8rem;
      left: 50%;
      z-index: 3;
      width: 4.8rem;
      height: 4.8rem;
      padding: 0.28rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.65);
      box-shadow: 0 0.55rem 1.4rem rgba(0, 0, 0, 0.1);
      transform: translateX(-50%);
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-badge-icon {
      display: grid;
      place-items: center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #ececec;
      color: var(--primary-colors, #ff7d8d);
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-two .zigrow-pricing-8-card-badge-icon {
      color: color-mix(
        in srgb,
        var(--primary-colors, #47c7f2) 72%,
        var(--territory-colors, #7f7cff) 28%
      );
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-three .zigrow-pricing-8-card-badge-icon {
      color: color-mix(
        in srgb,
        var(--primary-colors, #ffbe5b) 35%,
        var(--territory-colors, #ff8e5c) 65%
      );
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-badge-icon i {
      font-size: 1.55rem;
      line-height: 1;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-content {
      padding: 3.15rem 1.35rem 1.6rem;
      text-align: center;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-plan-name {
      margin: 0;
      color: #454545;
      font-size: clamp(1.15rem, 1.6vw, 1.35rem);
      font-weight: 700;
      line-height: 1.2;
      text-transform: uppercase;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-feature-list {
      margin: 1.3rem 0 0;
      padding: 0;
      list-style: none;
      border-top: 1px solid rgba(255, 255, 255, 0.35);
    }

    .zigrow-pricing-8 .zigrow-pricing-8-feature-list li {
      padding: 1rem 0.35rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.35);
      color: #555555;
      font-size: clamp(0.96rem, 1.2vw, 1.05rem);
      line-height: 1.35;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-feature-list li strong {
      color: var(--primary-colors, #7d7aff);
      font-weight: 700;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-three .zigrow-pricing-8-feature-list li strong {
      color: color-mix(
        in srgb,
        var(--primary-colors, #ffbe5b) 20%,
        var(--territory-colors, #ff6f61) 80%
      );
    }

    .zigrow-pricing-8 .zigrow-pricing-8-price {
      margin: 1.35rem 0 0;
      color: #474747;
      line-height: 1;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-currency {
      font-size: clamp(1.8rem, 2.5vw, 2.2rem);
      font-weight: 400;
      vertical-align: top;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-amount {
      font-size: clamp(3rem, 5vw, 4rem);
      font-weight: 700;
      letter-spacing: -0.04em;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-button-wrap {
      margin-top: 1.35rem;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 8.5rem;
      min-height: 3rem;
      padding: 0.8rem 1.2rem;
      border: 1px solid transparent;
      background: color-mix(
        in srgb,
        var(--primary-colors, #7d7aff) 75%,
        white
      );
      color: #2d2d2d;
      font-size: 0.9rem;
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      text-transform: uppercase;
      box-shadow: 0 0.75rem 1.5rem rgba(125, 122, 255, 0.22);
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        filter 0.25s ease;
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-two .zigrow-pricing-8-button {
      background: color-mix(
        in srgb,
        var(--primary-colors, #47c7f2) 82%,
        var(--territory-colors, #7f7cff) 18%
      );
      box-shadow: 0 0.75rem 1.5rem rgba(71, 199, 242, 0.22);
    }

    .zigrow-pricing-8 .zigrow-pricing-8-card-three .zigrow-pricing-8-button {
      background: color-mix(
        in srgb,
        var(--primary-colors, #ffbe5b) 28%,
        var(--territory-colors, #ff6f61) 72%
      );
      box-shadow: 0 0.75rem 1.5rem rgba(255, 111, 97, 0.22);
    }

    .zigrow-pricing-8 .zigrow-pricing-8-button:hover {
      transform: translateY(-0.15rem);
      filter: brightness(1.03);
    }

    @media (max-width: 991px) {
    }

    @media (max-width: 767px) {
      .zigrow-pricing-8 {
        padding: 3rem 0;
      }

    }

    @media (max-width: 479px) {
      .zigrow-pricing-8 .zigrow-pricing-8-card-image {
        height: 8.8rem;
      }

      .zigrow-pricing-8 .zigrow-pricing-8-card-badge {
        top: 7rem;
        width: 4.3rem;
        height: 4.3rem;
      }

      .zigrow-pricing-8 .zigrow-pricing-8-card-content {
        padding-right: 1rem;
        padding-left: 1rem;
      }

      .zigrow-pricing-8 .zigrow-pricing-8-amount {
        font-size: 3.4rem;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-pricing-8 .zigrow-pricing-8-button-wrap {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content:center;
    }
  </style>
</section>
`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-pricing-9", {
  name: "Pricing-7",
  category: "pricing",
  image:
    "https://i.postimg.cc/L58chTX6/Screenshot-2026-07-21-173147.png",

  html: `
<section
  id="zigrow-pricing-9"
  data-section="zigrow-pricing-9"
  class="zigrow-pricing-9"
>
  <div class="zigrow-pricing-9-shape zigrow-pricing-9-shape-one"></div>
  <div class="zigrow-pricing-9-shape zigrow-pricing-9-shape-two"></div>

  <div class="zigrow-pricing-9-container">
    <div class="zigrow-pricing-9-heading">
      <p class="zigrow-pricing-9-eyebrow">Flexible Pricing</p>

      <h2 class="no-theme-size zigrow-pricing-9-title">
        Choose the right plan for your business
      </h2>

      <p class="zigrow-pricing-9-description">
        Select a plan that matches your current needs and gives your business
        room to grow.
      </p>
    </div>

    <div class="zigrow-pricing-9-grid">
      <div class="zigrow-pricing-9-column " >
        <div
          class="zigrow-pricing-9-card"
      
        >
          <div class="zigrow-pricing-9-image-wrap">
            <img
              src="https://placehold.co/500x330/f8f6fb/765498?text=Store+Illustration"
              alt="Starter plan store illustration"
              class="zigrow-pricing-9-image"
            />
          </div>

          <div class="zigrow-pricing-9-card-content"  data-zg-editable="surface">
            <h3 class="zigrow-pricing-9-plan-name">Starter</h3>

            <p class="zigrow-pricing-9-plan-description">
              A simple option for individuals and small teams getting started.
            </p>

            <div class="zigrow-pricing-9-price-wrap">
              <p class="zigrow-pricing-9-price">
                <span class="zigrow-pricing-9-currency">₹</span>
                <span>499</span>
              </p>

              <p class="zigrow-pricing-9-duration">per month</p>
            </div>

            <ul class="zigrow-pricing-9-feature-list">
              <li>
                <span class="zigrow-pricing-9-feature-icon">
                  <i class="bi bi-check" data-icon="check"></i>
                </span>

                <span>Essential business tools</span>
              </li>

              <li>
                <span class="zigrow-pricing-9-feature-icon">
                  <i class="bi bi-check" data-icon="check"></i>
                </span>

                <span>One active project</span>
              </li>

              <li>
                <span class="zigrow-pricing-9-feature-icon">
                  <i class="bi bi-check" data-icon="check"></i>
                </span>

                <span>Standard customer support</span>
              </li>
            </ul>

            <div class="zigrow-pricing-9-action">
              <a
                href="#contact"
                class="zigrow-pricing-9-button zigrow-pricing-9-button-light"
                data-btn="pricing"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="zigrow-pricing-9-column zigrow-pricing-9-column-featured "  >
        <div
          class="zigrow-pricing-9-card zigrow-pricing-9-card-featured"
      
        >
          <span class="zigrow-pricing-9-ribbon">POPULAR</span>

          <div class="zigrow-pricing-9-image-wrap">
            <img
              src="https://placehold.co/500x330/f8f6fb/5f2e91?text=Store+Illustration"
              alt="Professional plan store illustration"
              class="zigrow-pricing-9-image"
            />
          </div>

          <div class="zigrow-pricing-9-card-content"  data-zg-editable="surface">
            <h3 class="zigrow-pricing-9-plan-name">Professional</h3>

            <p class="zigrow-pricing-9-plan-description">
              Advanced features for growing teams managing more opportunities.
            </p>

            <div class="zigrow-pricing-9-price-wrap">
              <p class="zigrow-pricing-9-price zigrow-pricing-9-price-featured">
                <span class="zigrow-pricing-9-currency">₹</span>
                <span>1,299</span>
              </p>

              <p class="zigrow-pricing-9-duration">per month</p>
            </div>

            <ul class="zigrow-pricing-9-feature-list">
              <li>
                <span class="zigrow-pricing-9-feature-icon">
                  <i class="bi bi-check" data-icon="check"></i>
                </span>

                <span>Everything in Starter</span>
              </li>

              <li>
                <span class="zigrow-pricing-9-feature-icon">
                  <i class="bi bi-check" data-icon="check"></i>
                </span>

                <span>Unlimited active projects</span>
              </li>

              <li>
                <span class="zigrow-pricing-9-feature-icon">
                  <i class="bi bi-check" data-icon="check"></i>
                </span>

                <span>Priority customer support</span>
              </li>
            </ul>

            <div class="zigrow-pricing-9-action">
              <a
                href="#contact"
                class="zigrow-pricing-9-button zigrow-pricing-9-button-primary"
                data-btn="pricing"
              >
                Choose Professional
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="zigrow-pricing-9-column " >
        <div
          class="zigrow-pricing-9-card"
      
        >
          <span class="zigrow-pricing-9-discount">20%<small>OFF</small></span>

          <div class="zigrow-pricing-9-image-wrap">
            <img
              src="https://placehold.co/500x330/f8f6fb/9a86ae?text=Store+Illustration"
              alt="Business plan store illustration"
              class="zigrow-pricing-9-image"
            />
          </div>

          <div class="zigrow-pricing-9-card-content"  data-zg-editable="surface">
            <h3 class="zigrow-pricing-9-plan-name">Business</h3>

            <p class="zigrow-pricing-9-plan-description">
              Complete support for established businesses and larger teams.
            </p>

            <div class="zigrow-pricing-9-price-wrap">
              <p class="zigrow-pricing-9-price">
                <span class="zigrow-pricing-9-currency">₹</span>
                <span>2,499</span>
              </p>

              <p class="zigrow-pricing-9-duration">per month</p>
            </div>

            <ul class="zigrow-pricing-9-feature-list">
              <li>
                <span class="zigrow-pricing-9-feature-icon">
                  <i class="bi bi-check" data-icon="check"></i>
                </span>

                <span>Everything in Professional</span>
              </li>

              <li>
                <span class="zigrow-pricing-9-feature-icon">
                  <i class="bi bi-check" data-icon="check"></i>
                </span>

                <span>Advanced business reports</span>
              </li>

              <li>
                <span class="zigrow-pricing-9-feature-icon">
                  <i class="bi bi-check" data-icon="check"></i>
                </span>

                <span>Dedicated account assistance</span>
              </li>
            </ul>

            <div class="zigrow-pricing-9-action">
              <a
                href="#contact"
                class="zigrow-pricing-9-button zigrow-pricing-9-button-light"
                data-btn="pricing"
              >
                Choose Business
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-pricing-9 {
      position: relative;
      width: 100%;
      min-height: 760px;
      padding: 88px 0 92px;
      overflow: hidden;
      background:
        radial-gradient(
          circle at 55% -15%,
          rgba(153, 56, 132, 0.48) 0,
          rgba(153, 56, 132, 0) 38%
        ),
        linear-gradient(
          145deg,
          var(--primary-colors, #281041) 0%,
          #34134f 48%,
          #160720 100%
        );
    }

    .zigrow-pricing-9 .zigrow-pricing-9-container {
      position: relative;
      z-index: 3;
      width: min(100% - 48px, 1120px);
      margin: 0 auto;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-heading {
      max-width: 650px;
      margin: 0 auto 64px;
      text-align: center;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-eyebrow {
      margin: 0 0 12px;
      color: var(--territory-colors, #f3ad3d);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      line-height: 1.4;
      text-transform: uppercase;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-title {
      margin: 0;
      color: #ffffff;
      font-size: clamp(2.2rem, 4.5vw, 3.6rem);
      font-weight: 700;
      letter-spacing: -0.04em;
      line-height: 1.08;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-description {
      max-width: 530px;
      margin: 16px auto 0;
      color: #fff;
      font-size: 0.96rem;
      line-height: 1.6;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0;
      align-items: center;
      justify-content: center;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-column {
      position: relative;
      min-width: 0;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-column:first-child {
      margin-right: -8px;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-column:last-child {
      margin-left: -8px;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-column-featured {
      z-index: 3;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-card {
      position: relative;
      display: grid;
      grid-template-rows: auto 1fr;
      min-height: 565px;
      overflow: hidden;
      border-radius: 10px;
      background: #ffffff;
      box-shadow: 0 22px 50px rgba(8, 2, 13, 0.24);
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 28px 60px rgba(8, 2, 13, 0.34);
    }

    .zigrow-pricing-9 .zigrow-pricing-9-card-featured {
      min-height: 635px;
      border: 2px solid rgba(255, 255, 255, 0.55);
      box-shadow: 0 30px 65px rgba(8, 2, 13, 0.38);
    }

    .zigrow-pricing-9 .zigrow-pricing-9-image-wrap {
      width: 100%;
      height: 210px;
      overflow: hidden;
      background: #f8f6fb;
      text-align: center;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-card-featured
      .zigrow-pricing-9-image-wrap {
      height: 235px;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.35s ease;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-card:hover
      .zigrow-pricing-9-image {
      transform: scale(1.04);
    }

    .zigrow-pricing-9 .zigrow-pricing-9-card-content {
      display: grid;
      align-content: start;
      padding: 26px 30px 30px;
      text-align: center;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-plan-name {
      margin: 0;
      color: var(--primary-colors, #281041);
      font-size: 1.2rem;
      font-weight: 800;
      letter-spacing: 0.02em;
      line-height: 1.3;
      text-transform: uppercase;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-plan-description {
      max-width: 240px;
      min-height: 42px;
      margin: 10px auto 0;
      color: var(--secondary-colors, #67606c);
      font-size: 0.78rem;
      line-height: 1.5;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-price-wrap {
      display: grid;
      grid-template-columns: auto auto;
      gap: 7px;
      align-items: end;
      justify-content: center;
      margin-top: 22px;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-price {
      display: grid;
      grid-template-columns: auto auto;
      align-items: start;
      margin: 0;
      color: #111111;
      font-size: clamp(2.6rem, 4vw, 3.5rem);
      font-weight: 800;
      letter-spacing: -0.045em;
      line-height: 1;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-price-featured {
      color: var(--territory-colors, #f3ad3d);
    }

    .zigrow-pricing-9 .zigrow-pricing-9-currency {
      margin-top: 5px;
      font-size: 0.55em;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-duration {
      max-width: 42px;
      margin: 0 0 5px;
      color: var(--secondary-colors, #8b858e);
      font-size: 0.66rem;
      line-height: 1.2;
      text-align: left;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-feature-list {
      display: grid;
      gap: 8px;
      margin: 20px 0 0;
      padding: 0;
      list-style: none;
      text-align: left;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-feature-list li {
      display: grid;
      grid-template-columns: 20px minmax(0, 1fr);
      gap: 8px;
      align-items: start;
      color: var(--secondary-colors, #625c67);
      font-size: 0.75rem;
      line-height: 1.45;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-feature-icon {
      display: grid;
      width: 18px;
      height: 18px;
      place-items: center;
      border-radius: 50%;
      background: rgba(91, 48, 132, 0.1);
      color: var(--primary-colors, #5b3084);
      font-size: 0.68rem;
      line-height: 1;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-action {
      display: grid;
      justify-content: center;
      margin-top: 24px;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-button {
      display: grid;
      width: 100%;
      min-height: 46px;
      padding: 12px 20px;
      place-items: center;
      border: 1px solid transparent;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      line-height: 1;
      text-decoration: none;
      text-transform: uppercase;
      transition:
        background-color 0.25s ease,
        border-color 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-button-light {
      border-color: #dfdce2;
      background: #dfdce2;
      color: #ffffff;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-button-primary {
      border-color: var(--primary-colors, #5b3084);
      background: var(--primary-colors, #5b3084);
      color: #ffffff;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-button:hover {
      transform: translateY(-2px);
      border-color: var(--primary-colors, #5b3084);
      background: transparent;
      color: var(--primary-colors, #5b3084);
    }

    .zigrow-pricing-9 .zigrow-pricing-9-ribbon {
      position: absolute;
      top: 18px;
      right: -35px;
      z-index: 4;
      width: 130px;
      padding: 8px 12px;
      background: var(--primary-colors, #5b3084);
      color: #ffffff;
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      line-height: 1;
      text-align: center;
      transform: rotate(45deg);
    }

    .zigrow-pricing-9 .zigrow-pricing-9-discount {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 4;
      display: grid;
      width: 54px;
      height: 54px;
      place-items: center;
      border-radius: 50%;
      background: var(--primary-colors, #5b3084);
      color: #ffffff;
      font-size: 0.8rem;
      font-weight: 800;
      line-height: 0.9;
      text-align: center;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-discount small {
      display: block;
      font-size: 0.55rem;
      letter-spacing: 0.03em;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-shape {
      position: absolute;
      z-index: 1;
      pointer-events: none;
    }

    .zigrow-pricing-9 .zigrow-pricing-9-shape-one {
      top: -165px;
      left: 27%;
      width: 450px;
      height: 330px;
      border-radius: 42%;
      background: linear-gradient(
        135deg,
        var(--territory-colors, #a93079),
        rgba(169, 48, 121, 0.08)
      );
      opacity: 0.46;
      transform: rotate(23deg);
    }

    .zigrow-pricing-9 .zigrow-pricing-9-shape-two {
      bottom: -240px;
      left: -90px;
      width: 520px;
      height: 410px;
      border-radius: 45%;
      background: linear-gradient(
        135deg,
        rgba(127, 38, 117, 0.58),
        rgba(34, 11, 49, 0)
      );
      transform: rotate(18deg);
    }

    @media (max-width: 991px) {
      .zigrow-pricing-9 {
        padding: 74px 0;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px;
        align-items: stretch;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-column:first-child,
      .zigrow-pricing-9 .zigrow-pricing-9-column:last-child {
        margin: 0;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-column-featured {
        grid-row: 1;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-column:last-child {
        grid-column: 1 / -1;
        width: calc(50% - 12px);
        justify-self: center;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-card,
      .zigrow-pricing-9 .zigrow-pricing-9-card-featured {
        min-height: 590px;
      }
    }

    @media (max-width: 700px) {
      .zigrow-pricing-9 .zigrow-pricing-9-container {
        width: min(100% - 32px, 1120px);
      }

      .zigrow-pricing-9 .zigrow-pricing-9-heading {
        margin-bottom: 44px;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-grid {
        grid-template-columns: 1fr;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-column:last-child {
        grid-column: auto;
        width: 100%;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-card,
      .zigrow-pricing-9 .zigrow-pricing-9-card-featured {
        min-height: auto;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-image-wrap,
      .zigrow-pricing-9 .zigrow-pricing-9-card-featured
        .zigrow-pricing-9-image-wrap {
        height: 250px;
      }
    }

    @media (max-width: 420px) {
      .zigrow-pricing-9 {
        padding: 56px 0;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-container {
        width: min(100% - 24px, 1120px);
      }

      .zigrow-pricing-9 .zigrow-pricing-9-title {
        font-size: 2.25rem;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-card-content {
        padding: 24px 20px;
      }

      .zigrow-pricing-9 .zigrow-pricing-9-image-wrap,
      .zigrow-pricing-9 .zigrow-pricing-9-card-featured
        .zigrow-pricing-9-image-wrap {
        height: 220px;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-pricing-9 .zigrow-pricing-9-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

// Team Blocks
Vvveb.Blocks.add("bootstrap4/zigrow-team-1", {
    name: "Team-1",
    category: "team",
    image: "https://i.postimg.cc/4Nvj0pPz/Screenshot-2025-11-20-153848.png",
    html: `  <section
      id="zigrow-team-1"
      data-section="zigrow-team-1"
      class="zigrow-team-1 py-6"
    >
      <div class="container">
        <!-- Section Title -->
        <div class="section-title">
          <h6 class="section-subtitle">Testimonials</h6>
          <h2 class="no-theme-size section-heading">What Clients Think About Us</h2>
        </div>

        <!-- Testimonials Grid -->
        <div class="zigrow-team-1-grid py-4">
          <div class="row g-3">
            <div class="col-12 col-md-6 col-lg-4 clonable-card">
              <div class="testimonial-card">
                <div class="testimonial-icon">
                  <i class="bi bi-quote" data-icon="quote"></i>
                </div>
                <p class="testimonial-text">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <h4 class="testimonial-name">Aanand kumar</h4>
                <span class="testimonial-role">CEO & Founder Crix</span>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 clonable-card">
              <div class="testimonial-card">
                <div class="testimonial-icon">
                  <i class="bi bi-quote" data-icon="quote"></i>
                </div>
                <p class="testimonial-text">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <h4 class="testimonial-name">Ankit singh</h4>
                <span class="testimonial-role">Director at Dynamic</span>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 clonable-card">
              <div class="testimonial-card">
                <div class="testimonial-icon">
                  <i class="bi bi-quote" data-icon="quote"></i>
                </div>
                <p class="testimonial-text">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <h4 class="testimonial-name">Manish kumar</h4>
                <span class="testimonial-role">Director at Initech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
          <style>
      .py-6 {
        padding: 3rem 0;
      }
      .zigrow-team-1 {
        background: #f2f4f7;
      }
      .zigrow-team-1 .section-title {
        text-align: center;
        margin-bottom: 2.5rem;
      }
      .zigrow-team-1 .section-title .section-subtitle {
        color: var(--primary-colors, #0056ff);
        font-size: 0.9rem;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      .zigrow-team-1 .section-title .section-heading {
        font-size: 2rem;
        font-weight: 700;
        color: rgb(0, 0, 38);
      }
      .zigrow-team-1 .zigrow-team-1-grid {
        /* display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem; */
        margin-bottom: 3rem;
      }
      .zigrow-team-1 .zigrow-team-1-grid .testimonial-card {
        background: var(--primary-colors, #f2f4f7);
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .zigrow-team-1 .zigrow-team-1-grid .testimonial-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
      }
      .zigrow-team-1 .zigrow-team-1-grid .testimonial-card .testimonial-icon i {
        font-size: 1.6rem;
        color: rgb(0, 0, 38);
        margin-bottom: 1rem;
      }
      .zigrow-team-1 .zigrow-team-1-grid .testimonial-card .testimonial-text {
         color: #fff;
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }
      .zigrow-team-1 .zigrow-team-1-grid .testimonial-card .testimonial-name {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 0.3rem;
           color: #fff;
      }
      .zigrow-team-1 .zigrow-team-1-grid .testimonial-card .testimonial-role {
      color: #fff;
        font-size: 0.9rem;
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-team-2", {
    name: "Team-2",
    category: "team",
    image: "https://i.postimg.cc/xC3RtdfP/team-2.png",
    html: `    <section
      class="zigrow-team-2 py-6"
      data-section="zigrow-team-2"
      id="zigrow-team-2"
    >
      <div class="container">
        <p class="section-subtitle">WHAT YOU SAY</p>

        <div class="testimonial-card">
          <!-- Bootstrap grid controls layout -->
          <div class="row g-4 g-md-0">
            <!-- Image column -->
            <div class="col-12 col-md-4">
              <div class="testimonial-image h-100">
                 <img
              src="/builder/img/zigrow-icon-images/zigrow-team-2-design.jpg"
              alt="Parent and child"
            />
              </div>
            </div>

            <!-- Content column -->
            <div class="col-12 col-md-8">
              <div class="testimonial-content" data-zg-editable="surface">
            
<span class="quote-mark" aria-label="Quote">
  <i class="fa-solid fa-quote-left" aria-hidden="true"></i>
</span>
               <p class="testimonial-text">
                  Working with this team was a smooth and reassuring experience from start to finish. They understood exactly what we needed, communicated clearly at every step, and delivered results that truly made a difference for our business.
                </p>
                <p class="testimonial-author">Ramita jain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <style>
      .py-6 {
        padding: 3rem 0;
      }

      .zigrow-team-2 {
        background-color: #fff;
      }

      .zigrow-team-2 .section-subtitle {
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 1px;
        color: var(--secondary-colors, #444);
        text-align: center;
        margin-bottom: 2rem;
      }

      /* Card wrapper – no flex here, Bootstrap handles layout inside */
      .zigrow-team-2 .testimonial-card {
        background-color: #fff;
        border: 2px solid var(--territory-colors, #c3ebf0);
        border-radius: 1rem;
        overflow: visible;
        max-width: 900px;
        margin: 0 auto;
      }

      .zigrow-team-2 .testimonial-image {
        text-align: center;
        position: relative;
        /* height: 100%; */
      }

      .zigrow-team-2 .testimonial-image img {
        max-width: 100%;
         max-height: 100%; 
        height: calc(100% + 50px);
        object-fit: cover;
        position: relative;
        top: -20px;
        border-radius: 1rem;
      }

      .zigrow-team-2 .testimonial-content {
        padding: 2rem;
      }

      @media (min-width: 992px) {
        .zigrow-team-2 .testimonial-content {
          padding: 5rem;
        }
      }

    /* Replace with this */
.zigrow-team-2 .testimonial-content .quote-mark {
  color: var(--primary-colors, #ff7f32);
  line-height: 1;
  display: block;
  margin-bottom: 0.5rem;
}

.zigrow-team-2 .testimonial-content .quote-mark i {
  font-size: 3.5rem;
  line-height: 1;
}
      .zigrow-team-2 .testimonial-content .testimonial-text {
        font-size: 1.2rem;
        color: var(--secondary-colors, #595757);
        line-height: 1.6;
        margin-bottom: 1rem;
      }

      .zigrow-team-2 .testimonial-content .testimonial-author {
        font-weight: 700;
        color: #192b3f;
        margin: 0;
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-team-3", {
    name: "Team-3",
    category: "team",
    image: "https://i.postimg.cc/k4vcf5Jx/team-3.png",
    html: `   <section
      id="zigrow-team-3"
      data-section="zigrow-team-3"
      class="zigrow-team-3 py-6"
    >
      <div class="container">
        <div class="wrap">
          <div class="zigrow-team-3-heading">
            <h6>What Our Clients Say</h6>
            <h3>Testimonial</h3>
          </div>

          <!-- Bootstrap grid instead of CSS grid -->
          <div class="row g-3">
            <div class="col-12 col-md-6 clonable-card">
              <div class="zigrow-team-3-card">
                <div class="client-img-box">
                  <div class="client-img">
                     <img
                 src="/builder/img/zigrow-team-images/1.png"
                  alt="Anita Singh profile"
                />
                  </div>
                </div>
                <h5>Engineering Manager</h5>
                <h3>Anita Singh</h3>
                <p>
                  Outstanding experience — the team delivered exactly what we
                  needed with great attention to detail.
                </p>
              </div>
            </div>

            <div class="col-12 col-md-6 clonable-card">
              <div class="zigrow-team-3-card">
                <div class="client-img-box">
                  <div class="client-img">
                    <img
               src="/builder/img/zigrow-team-images/2.png"
                  alt="Amit Singh profile"
                />
                  </div>
                </div>
                <h5>Engineering Manager</h5>
                <h3>Amit Singh</h3>
                <p>
                  Highly professional and reliable. Their solutions helped us
                  streamline our entire workflow efficiently.
                </p>
              </div>
            </div>

            <div class="col-12 col-md-6 clonable-card">
              <div class="zigrow-team-3-card">
                <div class="client-img-box">
                  <div class="client-img">
                      <img
                  src="/builder/img/zigrow-team-images/3.png"
                  alt="Atul Kumar profile"
                />
                  </div>
                </div>
                <h5>Engineering Manager</h5>
                <h3>Atul Kumar</h3>
                <p>
                  Excellent service with strong execution. They understood our
                  requirements clearly and delivered confidently.
                </p>
              </div>
            </div>

            <div class="col-12 col-md-6 clonable-card">
              <div class="zigrow-team-3-card">
                <div class="client-img-box">
                  <div class="client-img">
                    <img
                  src="/builder/img/zigrow-team-images/4.png"
                  alt="Manish Kumar profile"
                />
                  </div>
                </div>
                <h5>Engineering Manager</h5>
                <h3>Manish Kumar</h3>
                <p>
                  Truly dependable and skilled. Their support helped us achieve
                  better performance across our projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <style>
      /* :root {
        --primary-colors: #feb909;
        --secondary-colors: #595f6b;
        --territory-colors: #1c2b45;
        --text-light: #ffffff;
      } */
      .py-6 {
        padding: 3rem 0;
      }
      .zigrow-team-3 {
        background: var(--text-light, #ffffff);
        color: var(--territory-colors,#1c2b45);
      }

      /* Heading */
      .zigrow-team-3 .zigrow-team-3-heading {
        text-align: center;
        padding-bottom: clamp(12px, 2vw, 20px);
      }

      .zigrow-team-3 .zigrow-team-3-heading h6 {
        font-size: clamp(12px, 1.4vw, 16px);
        color: var(--primary-colors, #feb909);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0 0 6px;
        opacity: 0.9;
      }

      .zigrow-team-3 .zigrow-team-3-heading h3 {
        font-size: clamp(20px, 3vw, 32px);
        font-weight: 800;
        color: rgb(43, 41, 41);
        margin: 0;
      }

      /* Card */
      .zigrow-team-3 .zigrow-team-3-card {
        text-align: start;
        background: var(--territory-colors,#1c2b45);
        color: #fff;
        border-bottom: 4px solid var(--primary-colors, #feb909);
        padding: clamp(16px, 2.5vw, 24px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease;
        border-radius: 0.5rem;
        height: 100%; /* so all cards match height in row */
      }

      .zigrow-team-3 .zigrow-team-3-card:hover {
        transform: translateY(-5px);
      }

      /* Image wrapper – separate div per image */
      .zigrow-team-3 .client-img-box {
        display: inline-block;
        /* align-items: start; */
      }

      .zigrow-team-3 .client-img {
        text-align: center;
        margin-bottom: 0.8rem;
        border-radius: 50%;
        align-items: start;
      }

      .zigrow-team-3 .client-img img {
        width: 80px;
        height: 80px;
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #ddd;
        cursor: pointer;
      }

      .zigrow-team-3 .zigrow-team-3-card h5 {
        font-size: clamp(14px, 1.6vw, 18px);
        margin: 1rem 0;
        color: var(--primary-colors, #feb909);
        font-weight: 700;
      }

      .zigrow-team-3 .zigrow-team-3-card h3 {
        font-size: clamp(16px, 2vw, 22px);
        font-weight: 800;
        margin: 1rem 0;
        color: #fff;
      }

      .zigrow-team-3 .zigrow-team-3-card p {
        font-size: clamp(13px, 1.6vw, 15px);
        margin: 0;
        line-height: 1.7;
        color: var(--text-light, #ffffff);
      }

      @media (max-width: 576px) {
        .zigrow-team-3 .zigrow-team-3-card {
          padding: 24px 16px;
        }
        .zigrow-team-3 .client-img img {
          width: 60px;
          height: 60px;
        }
      }
    </style>
    </section>`,
});



Vvveb.Blocks.add("bootstrap4/zigrow-team-5", {
    name: "Team-5",
    category: "team",
    image: "https://i.postimg.cc/Jz1SCtYB/Screenshot-2025-11-20-153903.png",
    html: ` <section
      id="zigrow-team-5"
      data-section="zigrow-team-5"
      class="zigrow-team-5 py-6"
    >
      <div class="container">
        <div class="zigrow-team-5-grid">
          <!-- ⭐ Bootstrap row with spacing -->
          <div class="row g-4">
            <!-- Testimonial 1 -->
            <div class="col-12 col-md-6 col-lg-4 clonable-card">
              <div class="testimonial-card">
                <div class="testimonial-header">
                  <div class="stars">
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                  </div>
                  <div class="source"><p>G+</p></div>
                </div>
              <p>
  “The team delivered a smooth and reliable experience from start to finish.
  Their attention to detail, clear communication, and professional approach
  made the entire process simple and stress-free.”
</p>
                <div class="testimonial-footer">
                  <div class="img-container">
                    <img src="/builder/img/zigrow-team-images/2.png" alt="Manish singh" />
                  </div>
                  <div>
                    <h4>Manish singh</h4>
                    <span>Lawyer</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="col-12 col-md-6 col-lg-4 clonable-card">
              <div class="testimonial-card">
                <div class="testimonial-header">
                  <div class="stars">
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                  </div>
                  <div class="source"><p>G+</p></div>
                </div>
             <p>
  “We are very happy with the quality of service provided. Everything was
  handled on time, the support was excellent, and the final result matched
  our expectations perfectly.”
</p>
                <div class="testimonial-footer">
                  <div class="img-container">
                   <img src="/builder/img/zigrow-team-images/2.png" alt="Navnit singh" />
                  </div>
                  <div>
                    <h4>Navnit singh</h4>
                    <span>Mechanic</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Testimonial 3 -->
            <div class="col-12 col-md-6 col-lg-4 clonable-card">
              <div class="testimonial-card">
                <div class="testimonial-header">
                  <div class="stars">
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                    <i class="bi bi-star-fill" data-icon="star"></i>
                  </div>
                  <div class="source"><p>G+</p></div>
                </div>
             <p>
  “Working with this team was a great experience. They understood our needs,
  provided helpful guidance, and delivered a result that was clean,
  professional, and easy to use.”
</p>
                <div class="testimonial-footer">
                  <div class="img-container">
                   <img src="/builder/img/zigrow-team-images/1.png"  alt="Nicky" />
                  </div>
                  <div>
                    <h4>Nicky</h4>
                    <span>Dancer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end row -->
        </div>
      </div>
       <style>
      .py-6 {
        padding: 3rem 0;
      }

      .zigrow-team-5 {
     background: #fff;
     }

      .zigrow-team-5 .testimonial-card {
        border: 2px solid var(--secondary-colors, #ddd);
        border-radius: 12px 12px 12px 0px;
        padding: 1.8rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .zigrow-team-5 .testimonial-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      }
      .zigrow-team-5 .testimonial-card .testimonial-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }
      .zigrow-team-5 .testimonial-card .testimonial-header .stars i {
        color: var(--primary-colors, #06d58d);
        font-size: 0.8rem;
      }
      .zigrow-team-5 .testimonial-card .testimonial-header .source p {
        font-size: 2.8rem;
        font-weight: 600;
        color: var(--secondary-colors, #d3d3d3);
      }
      .zigrow-team-5 .testimonial-card p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #333;
        font-weight: 500;
        margin-bottom: 1.5rem;
      }
      .zigrow-team-5 .testimonial-card .testimonial-footer {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .zigrow-team-5 .testimonial-card .testimonial-footer .img-container {
        text-align: center;
        border-radius: 50%;
      }
      .zigrow-team-5 .testimonial-card .testimonial-footer .img-container img {
        width: 45px;
        height: 45px;
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
      .zigrow-team-5 .testimonial-card .testimonial-footer h4 {
        font-size: 1rem;
        font-weight: 600;
        margin: 0;
      }
      .zigrow-team-5 .testimonial-card .testimonial-footer span {
        font-size: 0.85rem;
        color: var(--secondary-colors, 0.777);
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-team-6", {
  name: "Team-6",
  category: "team",
  image:
    "https://i.postimg.cc/VNqk1cD6/Screenshot-2026-07-22-161243.png",

  html: `
<section
  id="zigrow-team-6"
  data-section="zigrow-team-6"
  class="zigrow-team-6"
>
  <div class="zigrow-team-6-container">
    <div class="zigrow-team-6-heading">
      <h2 class="no-theme-size zigrow-team-6-title">Meet Our Team</h2>

      <p class="zigrow-team-6-description">
        Our team combines creativity and experience to deliver thoughtful
        services tailored to your needs. We are passionate about creating
        practical solutions that support your goals.
      </p>
    </div>

    <div class="zigrow-team-6-grid">
      <div class="zigrow-team-6-column ">
        <div
          class="zigrow-team-6-card"
      
        >
          <div class="zigrow-team-6-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=85"
              alt="Portrait of Ananya Sharma"
              class="zigrow-team-6-image"
            />
          </div>

          <div class="zigrow-team-6-member-content">
            <h3 class="zigrow-team-6-member-name">Ananya Sharma</h3>
            <p class="zigrow-team-6-member-role">Creative Director</p>
          </div>
        </div>
      </div>

      <div class="zigrow-team-6-column zigrow-team-6-column-lower ">
        <div
          class="zigrow-team-6-card"
      
        >
          <div class="zigrow-team-6-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85"
              alt="Portrait of Rohan Mehta"
              class="zigrow-team-6-image"
            />
          </div>

          <div class="zigrow-team-6-member-content">
            <h3 class="zigrow-team-6-member-name">Rohan Mehta</h3>
            <p class="zigrow-team-6-member-role">Project Manager</p>
          </div>
        </div>
      </div>

      <div class="zigrow-team-6-column ">
        <div
          class="zigrow-team-6-card"
      
        >
          <div class="zigrow-team-6-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85"
              alt="Portrait of Priya Kapoor"
              class="zigrow-team-6-image"
            />
          </div>

          <div class="zigrow-team-6-member-content">
            <h3 class="zigrow-team-6-member-name">Priya Kapoor</h3>
            <p class="zigrow-team-6-member-role">Strategy Expert</p>
          </div>
        </div>
      </div>

      <div class="zigrow-team-6-column zigrow-team-6-column-lower ">
        <div
          class="zigrow-team-6-card"
      
        >
          <div class="zigrow-team-6-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85"
              alt="Portrait of Arjun Malhotra"
              class="zigrow-team-6-image"
            />
          </div>

          <div class="zigrow-team-6-member-content">
            <h3 class="zigrow-team-6-member-name">Arjun Malhotra</h3>
            <p class="zigrow-team-6-member-role">Solutions Planner</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-team-6 {
      width: 100%;
      overflow: hidden;
      padding: 70px 0 64px;
      background: #f5f5f5;
    }

    .zigrow-team-6 .zigrow-team-6-container {
      width: min(100% - 48px, 1160px);
      margin: 0 auto;
    }

    .zigrow-team-6 .zigrow-team-6-heading {
      max-width: 520px;
      margin-bottom: 54px;
    }

    .zigrow-team-6 .zigrow-team-6-title {
      margin: 0;
     color: var(--secondary-colors, #676767);
      font-size: clamp(2.3rem, 4vw, 3.4rem);
      font-weight: 700;
      letter-spacing: -0.04em;
      line-height: 1.1;
    }

    .zigrow-team-6 .zigrow-team-6-description {
      margin: 15px 0 0;
      color: var(--secondary-colors, #676767);
      font-size: 0.96rem;
      line-height: 1.5;
    }

    .zigrow-team-6 .zigrow-team-6-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: clamp(24px, 4vw, 56px);
      align-items: start;
    }

    .zigrow-team-6 .zigrow-team-6-column {
      min-width: 0;
    }

    .zigrow-team-6 .zigrow-team-6-column-lower {
      padding-top: 42px;
    }

    .zigrow-team-6 .zigrow-team-6-card {
      background: transparent;
      text-align: center;
    }

    .zigrow-team-6 .zigrow-team-6-image-wrap {
      width: 100%;
      max-width: 230px;
      aspect-ratio: 1 / 1;
      margin: 0 auto;
      overflow: hidden;
      border-radius: 50%;
      background: #dddddd;
      text-align: center;
    }

    .zigrow-team-6 .zigrow-team-6-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      filter: grayscale(100%);
      transition:
        filter 0.35s ease,
        transform 0.35s ease;
    }

    .zigrow-team-6 .zigrow-team-6-card:hover .zigrow-team-6-image {
      filter: grayscale(20%);
      transform: scale(1.04);
    }

    .zigrow-team-6 .zigrow-team-6-member-content {
      margin-top: 16px;
    }

    .zigrow-team-6 .zigrow-team-6-member-name {
      margin: 0;
      color: var(--primary-colors, #222222);
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.25;
    }

    .zigrow-team-6 .zigrow-team-6-member-role {
      margin: 4px 0 0;
      color: var(--secondary-colors, #888888);
      font-size: 0.82rem;
      line-height: 1.4;
    }

    @media (max-width: 991px) {
      .zigrow-team-6 {
        padding: 64px 0 58px;
      }

      .zigrow-team-6 .zigrow-team-6-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 46px 34px;
      }

      .zigrow-team-6 .zigrow-team-6-column-lower {
        padding-top: 0;
      }

      .zigrow-team-6 .zigrow-team-6-column:nth-child(even) {
        padding-top: 38px;
      }

      .zigrow-team-6 .zigrow-team-6-image-wrap {
        max-width: 260px;
      }
    }

    @media (max-width: 600px) {
      .zigrow-team-6 .zigrow-team-6-container {
        width: min(100% - 32px, 1160px);
      }

      .zigrow-team-6 .zigrow-team-6-heading {
        margin-bottom: 42px;
      }

      .zigrow-team-6 .zigrow-team-6-grid {
        grid-template-columns: 1fr;
        gap: 38px;
      }

      .zigrow-team-6 .zigrow-team-6-column:nth-child(even) {
        padding-top: 0;
      }

      .zigrow-team-6 .zigrow-team-6-image-wrap {
        max-width: 250px;
      }
    }

    @media (max-width: 420px) {
      .zigrow-team-6 {
        padding: 48px 0;
      }

      .zigrow-team-6 .zigrow-team-6-container {
        width: min(100% - 24px, 1160px);
      }

      .zigrow-team-6 .zigrow-team-6-title {
        font-size: 2.25rem;
      }

      .zigrow-team-6 .zigrow-team-6-description {
        font-size: 0.9rem;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-team-7", {
name: "Team-7",
category: "team",
  image:
    "https://i.postimg.cc/W4G1jPXz/Screenshot-2026-07-22-161330.png",

html: `
<section
  id="zigrow-team-7"
  class="zigrow-team-7"
  data-section="zigrow-team-7"
>
  <div class="container">
    <div class="row zigrow-team-7-heading-row">
      <div class="col-12 col-lg-6">
        <div class="zigrow-team-7-heading-content">
          <p class="zigrow-team-7-eyebrow">Our Team</p>

      <h2 class="no-theme-size zigrow-team-7-title">
        Meet our skilled professional team
      </h2>
    </div>
  </div>

  <div class="col-12 col-lg-6">
    <div class="zigrow-team-7-intro-wrap">
      <p class="zigrow-team-7-intro">
        Our professionals combine practical knowledge, creative thinking,
        and dependable expertise to help every customer move forward with
        confidence.
      </p>
    </div>
  </div>
</div>

<div class="row zigrow-team-7-grid">
  <div class="col-12 col-md-6 col-lg-4 ">
    <div
      class="zigrow-team-7-card"
  
    >
      <div class="zigrow-team-7-image-wrap zigrow-team-7-media-center">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
          alt="Aarohi Mehta"
        />
      </div>

      <div class="zigrow-team-7-card-content">
        <div class="zigrow-team-7-name-row">
          <h3 class="zigrow-team-7-name">Aarohi Mehta</h3>

          <div class="zigrow-team-7-socials">
            <a href="#" aria-label="Aarohi Mehta on Twitter">
              <i class="bi bi-twitter-x" data-icon="twitter-x"></i>
            </a>

            <a href="#" aria-label="Aarohi Mehta on Facebook">
              <i class="bi bi-facebook" data-icon="facebook"></i>
            </a>

            <a href="#" aria-label="Aarohi Mehta on Instagram">
              <i class="bi bi-instagram" data-icon="instagram"></i>
            </a>
          </div>
        </div>

        <div class="zigrow-team-7-footer-row">
          <p class="zigrow-team-7-role">Founder of Company</p>

          <a
            href="#"
            class="zigrow-team-7-arrow"
            
            aria-label="View Aarohi Mehta profile"
          >
            <span class="zigrow-team-7-arrow-icon">
              <i class="bi bi-arrow-right" data-icon="arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-6 col-lg-4 ">
    <div
      class="zigrow-team-7-card"
  
    >
      <div class="zigrow-team-7-image-wrap zigrow-team-7-media-center">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
          alt="Rohan Kapoor"
        />
      </div>

      <div class="zigrow-team-7-card-content">
        <div class="zigrow-team-7-name-row">
          <h3 class="zigrow-team-7-name">Rohan Kapoor</h3>

          <div class="zigrow-team-7-socials">
            <a href="#" aria-label="Rohan Kapoor on Twitter">
              <i class="bi bi-twitter-x" data-icon="twitter-x"></i>
            </a>

            <a href="#" aria-label="Rohan Kapoor on Facebook">
              <i class="bi bi-facebook" data-icon="facebook"></i>
            </a>

            <a href="#" aria-label="Rohan Kapoor on Instagram">
              <i class="bi bi-instagram" data-icon="instagram"></i>
            </a>
          </div>
        </div>

        <div class="zigrow-team-7-footer-row">
          <p class="zigrow-team-7-role">Creative Director</p>

          <a
            href="#"
            class="zigrow-team-7-arrow"
            
            aria-label="View Rohan Kapoor profile"
          >
            <span class="zigrow-team-7-arrow-icon">
              <i class="bi bi-arrow-right" data-icon="arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-6 col-lg-4 ">
    <div
      class="zigrow-team-7-card"
  
    >
      <div class="zigrow-team-7-image-wrap zigrow-team-7-media-center">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
          alt="Meera Sharma"
        />
      </div>

      <div class="zigrow-team-7-card-content">
        <div class="zigrow-team-7-name-row">
          <h3 class="zigrow-team-7-name">Meera Sharma</h3>

          <div class="zigrow-team-7-socials">
            <a href="#" aria-label="Meera Sharma on Twitter">
              <i class="bi bi-twitter-x" data-icon="twitter-x"></i>
            </a>

            <a href="#" aria-label="Meera Sharma on Facebook">
              <i class="bi bi-facebook" data-icon="facebook"></i>
            </a>

            <a href="#" aria-label="Meera Sharma on Instagram">
              <i class="bi bi-instagram" data-icon="instagram"></i>
            </a>
          </div>
        </div>

        <div class="zigrow-team-7-footer-row">
          <p class="zigrow-team-7-role">Product Designer</p>

          <a
            href="#"
            class="zigrow-team-7-arrow"
            
            aria-label="View Meera Sharma profile"
          >
            <span class="zigrow-team-7-arrow-icon">
              <i class="bi bi-arrow-right" data-icon="arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-6 col-lg-4 ">
    <div
      class="zigrow-team-7-card"
  
    >
      <div class="zigrow-team-7-image-wrap zigrow-team-7-media-center">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
          alt="Arjun Malhotra"
        />
      </div>

      <div class="zigrow-team-7-card-content">
        <div class="zigrow-team-7-name-row">
          <h3 class="zigrow-team-7-name">Arjun Malhotra</h3>

          <div class="zigrow-team-7-socials">
            <a href="#" aria-label="Arjun Malhotra on Twitter">
              <i class="bi bi-twitter-x" data-icon="twitter-x"></i>
            </a>

            <a href="#" aria-label="Arjun Malhotra on Facebook">
              <i class="bi bi-facebook" data-icon="facebook"></i>
            </a>

            <a href="#" aria-label="Arjun Malhotra on Instagram">
              <i class="bi bi-instagram" data-icon="instagram"></i>
            </a>
          </div>
        </div>

        <div class="zigrow-team-7-footer-row">
          <p class="zigrow-team-7-role">Business Strategist</p>

          <a
            href="#"
            class="zigrow-team-7-arrow"
            
            aria-label="View Arjun Malhotra profile"
          >
            <span class="zigrow-team-7-arrow-icon">
              <i class="bi bi-arrow-right" data-icon="arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-6 col-lg-4 ">
    <div
      class="zigrow-team-7-card"
  
    >
      <div class="zigrow-team-7-image-wrap zigrow-team-7-media-center">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
          alt="Naina Verma"
        />
      </div>

      <div class="zigrow-team-7-card-content">
        <div class="zigrow-team-7-name-row">
          <h3 class="zigrow-team-7-name">Naina Verma</h3>

          <div class="zigrow-team-7-socials">
            <a href="#" aria-label="Naina Verma on Twitter">
              <i class="bi bi-twitter-x" data-icon="twitter-x"></i>
            </a>

            <a href="#" aria-label="Naina Verma on Facebook">
              <i class="bi bi-facebook" data-icon="facebook"></i>
            </a>

            <a href="#" aria-label="Naina Verma on Instagram">
              <i class="bi bi-instagram" data-icon="instagram"></i>
            </a>
          </div>
        </div>

        <div class="zigrow-team-7-footer-row">
          <p class="zigrow-team-7-role">Customer Experience Lead</p>

          <a
            href="#"
            class="zigrow-team-7-arrow"
            
            aria-label="View Naina Verma profile"
          >
            <span class="zigrow-team-7-arrow-icon">
              <i class="bi bi-arrow-right" data-icon="arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-6 col-lg-4 ">
    <div
      class="zigrow-team-7-card"
  
    >
      <div class="zigrow-team-7-image-wrap zigrow-team-7-media-center">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
          alt="Kabir Singh"
        />
      </div>

      <div class="zigrow-team-7-card-content">
        <div class="zigrow-team-7-name-row">
          <h3 class="zigrow-team-7-name">Kabir Singh</h3>

          <div class="zigrow-team-7-socials">
            <a href="#" aria-label="Kabir Singh on Twitter">
              <i class="bi bi-twitter-x" data-icon="twitter-x"></i>
            </a>

            <a href="#" aria-label="Kabir Singh on Facebook">
              <i class="bi bi-facebook" data-icon="facebook"></i>
            </a>

            <a href="#" aria-label="Kabir Singh on Instagram">
              <i class="bi bi-instagram" data-icon="instagram"></i>
            </a>
          </div>
        </div>

        <div class="zigrow-team-7-footer-row">
          <p class="zigrow-team-7-role">Operations Manager</p>

          <a
            href="#"
            class="zigrow-team-7-arrow"
            
            aria-label="View Kabir Singh profile"
          >
            <span class="zigrow-team-7-arrow-icon">
              <i class="bi bi-arrow-right" data-icon="arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>

  <style>
    .zigrow-team-7 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 7rem) 0;
      background: #ffffff;
    }

    .zigrow-team-7 .zigrow-team-7-heading-row {
      row-gap: 2rem;
      align-items: end;
      margin-bottom: clamp(2.5rem, 5vw, 4rem);
    }

    .zigrow-team-7 .zigrow-team-7-heading-content {
      max-width: 40rem;
    }

    .zigrow-team-7 .zigrow-team-7-eyebrow {
      display: inline-block;
      margin: 0 0 1.2rem;
      padding: 0.45rem 0.85rem;
      border: 1px solid #26282d;
      border-radius: 999px;
      color: #26282d;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .zigrow-team-7 .zigrow-team-7-title {
      max-width: 39rem;
      margin: 0;
      color: #16171a;
      font-size: clamp(2.5rem, 4.8vw, 4.7rem);
      font-weight: 500;
      line-height: 1.12;
      letter-spacing: -0.05em;
    }

    .zigrow-team-7 .zigrow-team-7-intro-wrap {
      max-width: 39rem;
      margin-left: auto;
      padding-bottom: 0.5rem;
    }

    .zigrow-team-7 .zigrow-team-7-intro {
      margin: 0;
      color: var(--secondary-colors, #62646a);
      font-size: clamp(1rem, 1.4vw, 1.18rem);
      line-height: 1.65;
    }

    .zigrow-team-7 .zigrow-team-7-grid {
      row-gap: 1.5rem;
    }

    .zigrow-team-7 .zigrow-team-7-card {
      position: relative;
      height: 100%;
      overflow: hidden;
      padding: 1rem;
      border: 1px solid rgba(20, 24, 31, 0.04);
      border-radius: 1.6rem;
      background:  #f4f4f4;
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background 0.3s ease;
    }

    .zigrow-team-7 .zigrow-team-7-card:hover,
    .zigrow-team-7 .zigrow-team-7-card:focus-within {
      transform: translateY(-5px);
      background: #ffffff;
      box-shadow: 0 1.5rem 3.5rem rgba(20, 24, 31, 0.12);
    }

    .zigrow-team-7 .zigrow-team-7-image-wrap {
      position: relative;
      width: 100%;
      aspect-ratio: 1.22 / 1;
      overflow: hidden;
      border-radius: 1.2rem;
      background: #d8d9dc;
    }

    .zigrow-team-7 .zigrow-team-7-media-center {
      text-align: center;
    }

    .zigrow-team-7 .zigrow-team-7-image-wrap::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(20, 24, 31, 0) 58%,
        rgba(20, 24, 31, 0.12) 100%
      );
      pointer-events: none;
    }

    .zigrow-team-7 .zigrow-team-7-image-wrap img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.5s ease;
    }

    .zigrow-team-7 .zigrow-team-7-card:hover .zigrow-team-7-image-wrap img,
    .zigrow-team-7 .zigrow-team-7-card:focus-within .zigrow-team-7-image-wrap img {
      transform: scale(1.04);
    }

    .zigrow-team-7 .zigrow-team-7-card-content {
      padding: 1.2rem 0.15rem 0.2rem;
    }

 .zigrow-team-7 .zigrow-team-7-name-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  width: 100%;
  min-height: 2.6rem;
}

.zigrow-team-7 .zigrow-team-7-name {
  flex: 1 1 10rem;
  min-width: 0;
  margin: 0;
  color: #202126;
  font-size: clamp(1.05rem, 1.5vw, 1.3rem);
  font-weight: 600;
  line-height: 1.3;
}

.zigrow-team-7 .zigrow-team-7-socials {
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.35rem;
  max-width: 100%;
  min-width: 0;
  margin-left: auto;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0.5rem);
  transition:
    opacity 0.25s ease,
    visibility 0.25s ease,
    transform 0.25s ease;
}

    .zigrow-team-7 .zigrow-team-7-card:hover .zigrow-team-7-socials,
    .zigrow-team-7 .zigrow-team-7-card:focus-within .zigrow-team-7-socials {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .zigrow-team-7 .zigrow-team-7-socials a {
      display: grid;
      place-items: center;
      width: 2.4rem;
      height: 2.4rem;
      border: 1px solid var(--primary-colors, #8992ef);
      border-radius: 0.65rem;
      background: var(--primary-colors, #8992ef);
      color: #ffffff;
      text-decoration: none;
      transition:
        transform 0.25s ease,
        background 0.25s ease,
        color 0.25s ease;
    }

    .zigrow-team-7 .zigrow-team-7-socials a:hover {
      transform: translateY(-2px);
      background: #ffffff;
      color: var(--primary-colors, #8992ef);
    }

    .zigrow-team-7 .zigrow-team-7-socials i {
      font-size: 0.95rem;
      line-height: 1;
    }

    .zigrow-team-7 .zigrow-team-7-footer-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 1rem;
      align-items: end;
      min-height: 3.3rem;
      margin-top: 0.9rem;
    }

    .zigrow-team-7 .zigrow-team-7-role {
      margin: 0;
      color: #37393f;
      font-size: clamp(0.72rem, 0.9vw, 0.82rem);
      font-weight: 600;
      line-height: 1.35;
      letter-spacing: 0.015em;
      text-transform: uppercase;
    }

    .zigrow-team-7 .zigrow-team-7-arrow {
      display: grid;
      place-items: center;
      width: 2.6rem;
      height: 2.6rem;
      color: var(--primary-colors, #8992ef);
      text-decoration: none;
      transition:
        transform 0.25s ease,
        color 0.25s ease;
    }

    .zigrow-team-7 .zigrow-team-7-arrow:hover {
      color: #202126;
      transform: translateX(0.25rem);
    }

    .zigrow-team-7 .zigrow-team-7-arrow-icon {
      display: grid;
      place-items: center;
      width: 1.8rem;
      height: 1.8rem;
    }

    .zigrow-team-7 .zigrow-team-7-arrow-icon i {
      font-size: 1.8rem;
      line-height: 1;
    }

    @media (max-width: 1199px) {
    

      .zigrow-team-7 .zigrow-team-7-socials a {
        width: 2.1rem;
        height: 2.1rem;
      }
    }

    @media (max-width: 991px) {
      .zigrow-team-7 .zigrow-team-7-intro-wrap {
        max-width: 100%;
        margin-left: 0;
      }

      .zigrow-team-7 .zigrow-team-7-title {
        max-width: 42rem;
      }
    }

    @media (max-width: 767px) {
      .zigrow-team-7 {
        padding: 3rem 0;
      }

      .zigrow-team-7 .zigrow-team-7-card {
        border-radius: 1.3rem;
      }

      .zigrow-team-7 .zigrow-team-7-image-wrap {
        border-radius: 1rem;
      }

      .zigrow-team-7 .zigrow-team-7-socials {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }

    @media (max-width: 479px) {
  .zigrow-team-7 .zigrow-team-7-name-row {
    gap: 0.8rem;
  }

  .zigrow-team-7 .zigrow-team-7-name {
    flex-basis: 100%;
  }

  .zigrow-team-7 .zigrow-team-7-socials {
    width: 100%;
    margin-left: 0;
    justify-content: flex-start;
  }
}
    @media (max-width: 479px) {
      .zigrow-team-7 .zigrow-team-7-title {
        font-size: clamp(2.3rem, 11vw, 3.2rem);
      }

      .zigrow-team-7 .zigrow-team-7-image-wrap {
        aspect-ratio: 1.05 / 1;
      }

      .zigrow-team-7 .zigrow-team-7-name-row {
        grid-template-columns: 1fr;
        gap: 0.8rem;
      }

      .zigrow-team-7 .zigrow-team-7-socials {
        justify-content: start;
      }

      .zigrow-team-7 .zigrow-team-7-footer-row {
        margin-top: 1.1rem;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-team-7 .zigrow-team-7-footer-row {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>

</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-team-8", {
  name: "Team-8",
  category: "team",

    image:
"https://i.postimg.cc/tg34yH2y/Screenshot-2026-07-22-161401.png",

  html: `
<section
  id="zigrow-team-8"
  data-section="zigrow-team-8"
  class="zigrow-team-8"
>
  <div class="zigrow-team-8-container">
    <div class="zigrow-team-8-layout">
      <div class="zigrow-team-8-content">
        <h2 class="no-theme-size zigrow-team-8-title">
          A team that is all in<br />
          from day one
          <span class="zigrow-team-8-accent">
            <span class="zigrow-team-8-accent-bar zigrow-team-8-accent-bar-primary"></span>
            <span class="zigrow-team-8-accent-bar zigrow-team-8-accent-bar-territory"></span>
          </span>
        </h2>

        <p class="zigrow-team-8-description">
          Bringing practical experience and fresh energy to every company we
          support. When you work with us, you gain the strength and dedication
          of a team committed to your growth.
        </p>
      </div>

      <div class="zigrow-team-8-grid">
        <div class="zigrow-team-8-column ">
          <div class="zigrow-team-8-card" data-zg-editable="surface">
            <div class="zigrow-team-8-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=85"
                alt="Portrait of Aisha Verma"
                class="zigrow-team-8-image"
              />
            </div>
            <div class="zigrow-team-8-card-content">
              <h3 class="zigrow-team-8-name">AISHA VERMA</h3>
            </div>
          </div>
        </div>

        <div class="zigrow-team-8-column ">
          <div class="zigrow-team-8-card" data-zg-editable="surface">
            <div class="zigrow-team-8-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85"
                alt="Portrait of Rahul Mehta"
                class="zigrow-team-8-image"
              />
            </div>
            <div class="zigrow-team-8-card-content">
              <h3 class="zigrow-team-8-name">RAHUL MEHTA</h3>
            </div>
          </div>
        </div>

        <div class="zigrow-team-8-column ">
          <div class="zigrow-team-8-card" data-zg-editable="surface">
            <div class="zigrow-team-8-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85"
                alt="Portrait of Karan Sethi"
                class="zigrow-team-8-image"
              />
            </div>
            <div class="zigrow-team-8-card-content">
              <h3 class="zigrow-team-8-name">KARAN SETHI</h3>
            </div>
          </div>
        </div>

        <div class="zigrow-team-8-column ">
          <div class="zigrow-team-8-card" data-zg-editable="surface">
            <div class="zigrow-team-8-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=700&q=85"
                alt="Portrait of Neel Joshi"
                class="zigrow-team-8-image"
              />
            </div>
            <div class="zigrow-team-8-card-content">
              <h3 class="zigrow-team-8-name">NEEL JOSHI</h3>
            </div>
          </div>
        </div>

        <div class="zigrow-team-8-column ">
          <div class="zigrow-team-8-card" data-zg-editable="surface">
            <div class="zigrow-team-8-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=85"
                alt="Portrait of Isha Kapoor"
                class="zigrow-team-8-image"
              />
            </div>
            <div class="zigrow-team-8-card-content">
              <h3 class="zigrow-team-8-name">ISHA KAPOOR</h3>
            </div>
          </div>
        </div>

        <div class="zigrow-team-8-column ">
          <div class="zigrow-team-8-card" data-zg-editable="surface">
            <div class="zigrow-team-8-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=700&q=85"
                alt="Portrait of Meera Nair"
                class="zigrow-team-8-image"
              />
            </div>
            <div class="zigrow-team-8-card-content">
              <h3 class="zigrow-team-8-name">MEERA NAIR</h3>
            </div>
          </div>
        </div>

        <div class="zigrow-team-8-column ">
          <div class="zigrow-team-8-card" data-zg-editable="surface">
            <div class="zigrow-team-8-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85"
                alt="Portrait of Tanya Malhotra"
                class="zigrow-team-8-image"
              />
            </div>
            <div class="zigrow-team-8-card-content">
              <h3 class="zigrow-team-8-name">TANYA MALHOTRA</h3>
            </div>
          </div>
        </div>

        <div class="zigrow-team-8-column ">
          <div class="zigrow-team-8-card" data-zg-editable="surface">
            <div class="zigrow-team-8-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=700&q=85"
                alt="Portrait of Vikram Arora"
                class="zigrow-team-8-image"
              />
            </div>
            <div class="zigrow-team-8-card-content">
              <h3 class="zigrow-team-8-name">VIKRAM ARORA</h3>
            </div>
          </div>
        </div>

        <div class="zigrow-team-8-column ">
          <div class="zigrow-team-8-card" data-zg-editable="surface">
            <div class="zigrow-team-8-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=700&q=85"
                alt="Portrait of Arjun Khanna"
                class="zigrow-team-8-image"
              />
            </div>
            <div class="zigrow-team-8-card-content">
              <h3 class="zigrow-team-8-name">ARJUN KHANNA</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-team-8 {
      width: 100%;
      overflow: hidden;
      background: #ffffff;
      padding: 70px 0;
    }

    .zigrow-team-8 .zigrow-team-8-container {
      width: min(100% - 48px, 1220px);
      margin: 0 auto;
    }

    .zigrow-team-8 .zigrow-team-8-layout {
      display: grid;
      grid-template-columns: minmax(260px, 0.95fr) minmax(0, 1.45fr);
      gap: 54px;
      align-items: start;
    }

    .zigrow-team-8 .zigrow-team-8-content {
      max-width: 360px;
      padding-top: 8px;
    }

    .zigrow-team-8 .zigrow-team-8-title {
      margin: 0;
      color:  #111111;
      font-size: clamp(2.3rem, 4.8vw, 4.2rem);
      font-weight: 700;
      letter-spacing: -0.045em;
      line-height: 1.02;
    }

    .zigrow-team-8 .zigrow-team-8-accent {
      display: inline-grid;
      grid-template-columns: auto auto;
      gap: 4px;
      align-items: end;
      margin-left: 6px;
      vertical-align: middle;
    }

    .zigrow-team-8 .zigrow-team-8-accent-bar {
      display: block;
      border-radius: 999px;
    }

    .zigrow-team-8 .zigrow-team-8-accent-bar-primary {
      width: 14px;
      height: 6px;
      background: var(--primary-colors, #111111);
    }

    .zigrow-team-8 .zigrow-team-8-accent-bar-territory {
      width: 10px;
      height: 6px;
      background: var(--territory-colors, #8cc63f);
    }

    .zigrow-team-8 .zigrow-team-8-description {
      max-width: 300px;
      margin: 34px 0 0;
      color: var(--secondary-colors, #555555);
      font-size: 0.95rem;
      line-height: 1.55;
    }

    .zigrow-team-8 .zigrow-team-8-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 22px 18px;
    }

    .zigrow-team-8 .zigrow-team-8-column {
      min-width: 0;
    }

    .zigrow-team-8 .zigrow-team-8-card {
padding-bottom:.5rem;
    background: #ffffff;
    }

    .zigrow-team-8 .zigrow-team-8-image-wrap {
      width: 100%;
      aspect-ratio: 1.1 / 0.92;
      overflow: hidden;
      background: #f5f5f5;
      text-align: center;
    }

    .zigrow-team-8 .zigrow-team-8-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      transition: transform 0.35s ease;
    }

    .zigrow-team-8 .zigrow-team-8-card:hover .zigrow-team-8-image {
      transform: scale(1.04);
    }

    .zigrow-team-8 .zigrow-team-8-card-content {
      padding-top: 9px;
    }

    .zigrow-team-8 .zigrow-team-8-name {
      margin: 0;
      color: var(--primary-colors, #111111);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      line-height: 1.35;
      text-transform: uppercase;
    }

    @media (max-width: 991px) {
      .zigrow-team-8 {
        padding: 62px 0;
      }

      .zigrow-team-8 .zigrow-team-8-layout {
        grid-template-columns: 1fr;
        gap: 42px;
      }

      .zigrow-team-8 .zigrow-team-8-content {
        max-width: 520px;
        padding-top: 0;
      }

      .zigrow-team-8 .zigrow-team-8-description {
        max-width: 420px;
        margin-top: 24px;
      }
    }

    @media (max-width: 767px) {
      .zigrow-team-8 .zigrow-team-8-container {
        width: min(100% - 32px, 1220px);
      }

      .zigrow-team-8 .zigrow-team-8-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 480px) {
      .zigrow-team-8 {
        padding: 48px 0;
      }

      .zigrow-team-8 .zigrow-team-8-container {
        width: min(100% - 24px, 1220px);
      }

      .zigrow-team-8 .zigrow-team-8-title {
        font-size: 2.35rem;
      }

      .zigrow-team-8 .zigrow-team-8-description {
        font-size: 0.9rem;
      }

      .zigrow-team-8 .zigrow-team-8-grid {
        grid-template-columns: 1fr;
      }

      .zigrow-team-8 .zigrow-team-8-name {
        font-size: 0.76rem;
      }
    }
  </style>
</section>
`,
});

// Products
// Products
// Products
Vvveb.Blocks.add("bootstrap4/zigrow-product-1", {
  name: "Product-1",
  category: "product",
  image: "https://i.postimg.cc/hPHKHMx6/product1.png",

  html: `
<section
  class="zigrow-product-1 py-6"
  id="zigrow-product-1"
  data-section="zigrow-product-1"
>
  <div class="container">
    <div class="row mb-4">
      <div class="col-12 col-lg-6">
        <div>
          <h2 class="no-theme-size shop-heading-small">SHOP</h2>
          <h2 class="no-theme-size shop-heading-big">OUR PRODUCTS</h2>
        </div>
      </div>
    </div>

    <div class="row g-3">
      <!-- Card 1 -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div
          class="product-card"
          style="background-image: url('/builder/img/zigrow-product-images/zigrow-product-1-1.webp');"
        >
          <div class="product-overlay">
            <span class="product-title">Products name</span>

            <div class="product-btn-wrap">
              <a href="#" class="product-btn" data-btn="product-1">
                See all
                <i
                  class="bi bi-arrow-right"
                  data-icon="arrow-right"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div
          class="product-card"
          style="background-image: url('/builder/img/zigrow-product-images/zigrow-product-1-2.webp');"
        >
          <div class="product-overlay">
            <span class="product-title">Products name</span>

            <div class="product-btn-wrap">
              <a href="#" class="product-btn" data-btn="product-2">
                See all
                <i
                  class="bi bi-arrow-right"
                  data-icon="arrow-right"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div
          class="product-card"
          style="background-image: url('/builder/img/zigrow-product-images/zigrow-product-1-3.webp');"
        >
          <div class="product-overlay">
            <span class="product-title">Products name</span>

            <div class="product-btn-wrap">
              <a href="#" class="product-btn" data-btn="product-3">
                See all
                <i
                  class="bi bi-arrow-right"
                  data-icon="arrow-right"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-product-1 {
      width: 100%;
      background-color: #ffffff;
    }

    .zigrow-product-1.py-6 {
      padding: 3rem 0;
    }

    .zigrow-product-1 .shop-heading-small {
      margin: 0;
      font-size: 2.5rem;
      font-weight: 900;
      line-height: 0.9;
      text-transform: uppercase;
    }

    .zigrow-product-1 .shop-heading-big {
      margin: 0;
      font-size: 3.5rem;
      font-weight: 900;
      line-height: 0.9;
      text-transform: uppercase;
    }

    .zigrow-product-1 .product-card {
      position: relative;
      width: 100%;
      aspect-ratio: 4 / 5;
      overflow: hidden;
      background-color: #f3f3f3;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      transition:
        background-size 0.45s ease,
        background-position 0.45s ease;
    }

  

    .zigrow-product-1 .product-overlay {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      padding: 1.5rem;
      color: #ffffff;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.65),
        rgba(0, 0, 0, 0)
      );
    }

    .zigrow-product-1 .product-title {
      display: block;
      margin-bottom: 0.75rem;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.3;
    }

    .zigrow-product-1 .product-btn-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
    }

    .zigrow-product-1 .product-btn {
      display: inline-flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      padding: 0.55rem 1.4rem;
      border-radius: 999px;
      background: #ffffff;
      color: #000000;
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
    }

    .zigrow-product-1 .product-btn i {
      line-height: 1;
      transition: transform 0.3s ease;
    }

    .zigrow-product-1 .product-btn:hover {
      background-color: var(
        --primary-colors,
        rgb(222, 188, 52)
      );
    }

    .zigrow-product-1 .product-btn:hover i {
      transform: translateX(4px);
    }

    @media (max-width: 768px) {
      .zigrow-product-1 .shop-heading-small {
        font-size: 2rem;
      }

      .zigrow-product-1 .shop-heading-big {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 575.98px) {
      .zigrow-product-1 .product-card {
        min-height: 320px;
        aspect-ratio: 4 / 5;
      }

      .zigrow-product-1 .product-overlay {
        padding: 1.25rem;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-product-2", {
    name: "Product-2",
    category: "product",
    image: "https://i.postimg.cc/t4W9yPtB/product2.png",
    html: ` <section
      class="zigrow-product-2 py-6"
      id="zigrow-product-2"
      data-section="zigrow-product-2"
    >
      <div class="container">
        <!-- Heading -->
        <div class="row mb-4 mb-lg-5">
          <div class="col-12 col-lg-5">
            <h2 class="no-theme-size gear-heading">
              EXPLORE OUR<br />
              <span>SPORTS GEAR COLLECTION</span>
            </h2>
          </div>
        </div>

        <!-- Cards -->
        <div class="row gy-4 gx-0 gx-md-3">
          <!-- Card 1 -->
          <div class="col-12 col-sm-6 col-lg-3 clonable-card">
            <div class="gear-card gear-card-first">
              <div class="gear-img-wrapper">
                <img src="/builder/img/zigrow-product-images/zigrow-product-2-1.webp" alt="item-1" />
              </div>
              <p class="gear-label-bottom">Category-1</p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="col-12 col-sm-6 col-lg-3 clonable-card">
            <div class="gear-card">
              <p class="gear-label-top">Category-2</p>
              <div class="gear-img-wrapper">
                <img src="/builder/img/zigrow-product-images/zigrow-product-2-2.webp"  alt="item-2" />
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="col-12 col-sm-6 col-lg-3 clonable-card">
            <div class="gear-card">
              <div class="gear-img-wrapper">
                <img src="/builder/img/zigrow-product-images/zigrow-product-2-3.webp"  alt="item-3" />
              </div>
              <p class="gear-label-bottom">Category-3</p>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="col-12 col-sm-6 col-lg-3 clonable-card">
            <div class="gear-card gear-card-last">
              <p class="gear-label-top">Category-4</p>
              <div class="gear-img-wrapper">
                <img src="/builder/img/zigrow-product-images/zigrow-product-2-4.webp"  alt="item-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
        <style>
      /* =============================================================
       MAIN SECTION
    ============================================================= */
      .zigrow-product-2 {
        background-color: #ffffff;
      }
      .py-6 {
        padding: 3rem 0;
      }

      .zigrow-product-2 .gear-heading {
        font-weight: 700;
        font-size: 2.1rem;
        line-height: 1.1;
        text-transform: uppercase;
      }

      .zigrow-product-2 .gear-heading span {
        font-weight: 900;
      }

      @media (max-width: 767.98px) {
        .zigrow-product-2 .gear-heading {
          text-align: center;
          font-size: 1.8rem;
          margin-bottom: 1.75rem;
        }
      }

      /* =============================================================
       CARD WRAPPER
    ============================================================= */
      .gear-card {
        background-color: #ffffff;
        border-left: 2px solid #dcdcdc;
        border-right: 2px solid #dcdcdc;
        padding-bottom: 0.6rem;
        height: 100%;
      }

      /* remove extra borders for first and last card on desktop */
      @media (min-width: 992px) {
        .gear-card-first {
          border-left: 0;
        }
        .gear-card-last {
          border-right: 0;
        }
      }

      .gear-card .gear-img-wrapper {
        width: 100%;
        padding: 0.8rem;
        overflow: hidden;
        text-align: center;
      }

      .gear-card .gear-img-wrapper img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }

      .gear-card .gear-label-top,
      .gear-card .gear-label-bottom {
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        padding: 0.45rem 0.75rem;
        margin: 0;
      }

      .gear-card .gear-label-top {
        border-bottom: 2px solid #dcdcdc;
      }

      .gear-card .gear-label-bottom {
        border-top: 2px solid #dcdcdc;
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-product-3", {
    name: "Product-3",
    category: "product",
    image: "https://i.postimg.cc/GhZbZzGw/product3.png",
    html: `   <section
      class="zigrow-product-3 py-6"
      id="zigrow-product-3"
      data-section="zigrow-product-3"
    >
      <div class="container">
        <!-- Section Heading -->
        <div class="row">
          <div class="col-12 col-lg-6">
            <h2 class="no-theme-size section-title">
              Find the Perfect Piece for<br />
              Every Corner of Your Home
            </h2>
          </div>
        </div>

        <!-- Cards Row -->
        <div class="row gy-4">
          <!-- Card 1: Living Room -->
          <div class="col-12 col-md-6 clonable-card">
            <div class="room-card room-card-light">
              <div class="room-img">
                <img src="/builder/img/zigrow-product-images/zigrow-product-3-1.webp" alt="Living Room" />
              </div>

              <h3 class="room-title">Living Room</h3>
              <p class="room-text">
                Create a cozy gathering space with plush sofas, elegant
                sectionals, and statement tables.
              </p>

              <a href="#" class="room-cta">
                <i class="bi bi-arrow-up-right" data-icon="right-arrow"></i>
              </a>
            </div>
          </div>

          <!-- Card 2: Bedroom -->
          <div class="col-12 col-md-6 clonable-card">
            <div class="room-card room-card-dark">
              <h3 class="room-title">Bedroom</h3>
              <p class="room-text">
                Turn your bedroom into a peaceful sanctuary with luxurious beds
                and minimalist décor.
              </p>

              <div class="room-img">
                <img src="/builder/img/zigrow-product-images/zigrow-product-3-2.webp" alt="Bedroom" />
              </div>

              <a href="#" class="room-cta">
                <i class="bi bi-arrow-up-right" data-icon="right-arrow"></i>
              </a>
            </div>
          </div>

          <!-- Card 3: Dining Room -->
          <div class="col-12 col-md-6 clonable-card">
            <div class="room-card room-card-brown">
              <h3 class="room-title">Dining Room</h3>
              <p class="room-text">
                Bring people together with beautifully crafted dining tables,
                comfy chairs, and warm ambiance.
              </p>

              <div class="room-img">
                <img src="/builder/img/zigrow-product-images/zigrow-product-3-3.webp" alt="Dining Room" />
              </div>

              <a href="#" class="room-cta">
                <i class="bi bi-arrow-up-right" data-icon="right-arrow"></i>
              </a>
            </div>
          </div>

          <!-- Card 4: Home Office -->
          <div class="col-12 col-md-6 clonable-card">
            <div class="room-card room-card-light">
              <div class="room-img">
                <img src="/builder/img/zigrow-product-images/zigrow-product-3-4.webp" alt="Home Office" />
              </div>

              <h3 class="room-title">Home Office</h3>
              <p class="room-text">
                Boost productivity with ergonomic desks, stylish chairs, and
                organized workspace solutions.
              </p>

              <a href="#" class="room-cta">
                <i class="bi bi-arrow-up-right" data-icon="right-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
         <style>
      /* ===========================================
       SECTION BASE
    ============================================ */
      .zigrow-product-3 {
        background-color: #f5f3e8;
      }
      .py-6 {
        padding: 3rem 0;
      }

      .zigrow-product-3 .section-title {
        color: #1a1a1a;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 2.5rem;
        max-width: 550px;
      }

      @media (max-width: 767px) {
        .zigrow-product-3 .section-title {
          text-align: center;
          font-size: 2rem;
          margin: 0 auto 2rem;
        }
      }

      /* ===========================================
       CARD BASE
    ============================================ */
      .room-card {
        border-radius: 26px;
        padding: 1.8rem;
        height: 100%;
        overflow: hidden;
      }

      /* Light Card */
      .room-card-light {
        background-color: #ffffff;
        color: #1a1a1a;
      }

      /* Dark Green Card */
      .room-card-dark {
        background-color: var(--primary-colors, #0f4734);
        color: #ffffff;
      }

      /* Dark Brown Card (for Dining Room) */
      .room-card-brown {
        background-color: var(--territory-colors, #5b2c19);
        color: #ffffff;
      }

      /* ===========================================
       CARD INNER CONTENT
    ============================================ */
      .room-card .room-title {
        font-weight: 700;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      .room-card .room-text {
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 1.4rem;
      }

      .room-card .room-img {
        text-align: center;
        width: 100%;
        max-height: 300px;
        border-radius: 18px;
        overflow: hidden;
        margin-bottom: 1.4rem;
      }

      .room-card .room-img img {
        border-radius: 18px;
        max-width: 100%;
        height: auto;
        object-fit: cover;
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.05);
        }
      }

      .room-card .room-cta {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #d1f5da;
        color: var(--primary-colors, #0f4734);
        text-align: center;
        line-height: 40px;
        font-size: 1.1rem;
        text-decoration: none;
        display: inline-block;
      }

      .room-card-dark .room-cta,
      .room-card-brown .room-cta {
        background-color: #bbf7d0;
      }

      @media (max-width: 767px) {
        .room-card {
          max-width: 430px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    </style>
    </section>
    `,
});
Vvveb.Blocks.add("bootstrap4/zigrow-product-4", {
    name: "Product-4",
    category: "product",
    image: "https://i.postimg.cc/P5YdhZz0/product4.png",
    html: `  <section
      class="zigrow-product-4 py-6"
      data-section="zigrow-product-4"
      id="zigrow-product-4"
    >
      <div class="container">
        <p class="section-label">POPULAR PRODUCTS</p>
        <h2 class="no-theme-size section-title">Best and Quality Products</h2>
        <p class="section-subtitle">
          Our mission is to deliver superior products and enhance customer
          lifestyles through quality and innovation.
        </p>

        <div class="row gy-4">
          <!-- PRODUCT 1 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="product-card">
              <div class="product-img-box">
                <img src="/builder/img/zigrow-product-images/zigrow-product-4-1.webp" alt="Skincare Application" />
                <a href="#" class="product-add"
                  ><i class="bi bi-plus" data-icon="add"></i
                ></a>
              </div>

              <div class="product-body">
                <p class="product-rating">
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  (12 reviews)
                </p>
                <h5 class="product-title">Skincare Application</h5>
                <p class="product-price">₹120</p>
              </div>

              <div class="product-actions">
                <a href="#" class="product-btn product-btn-dark" data-btn="product-1">
                  BUY NOW 
                </a>
                <a href="#" class="product-btn" data-btn="product-1">
                  QUICK VIEW
                </a>
              </div>
            </div>
          </div>

          <!-- PRODUCT 2 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="product-card">
              <div class="product-img-box">
                <img src="/builder/img/zigrow-product-images/zigrow-product-4-2.webp" alt="Skin Hydration" />
                <a href="#" class="product-add"
                  ><i class="bi bi-plus" data-icon="add"></i
                ></a>
              </div>

              <div class="product-body">
                <p class="product-rating">
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  (12 reviews)
                </p>
                <h5 class="product-title">Skin Hydration</h5>
                <p class="product-price">₹220</p>
              </div>

              <div class="product-actions">
                <a href="#" class="product-btn product-btn-dark" data-btn="product-2">
                  BUY NOW 
                </a>
                <a href="#" class="product-btn" data-btn="product-2">
                  QUICK VIEW 
                </a>
              </div>
            </div>
          </div>

          <!-- PRODUCT 3 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="product-card">
              <div class="product-img-box">
                <img src="/builder/img/zigrow-product-images/zigrow-product-4-3.webp" alt="Face Cream" />
                <a href="#" class="product-add"
                  ><i class="bi bi-plus" data-icon="add"></i
                ></a>
              </div>

              <div class="product-body">
                <p class="product-rating">
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  <i class="bi bi-star-fill" data-icon="star"></i>
                  (12 reviews)
                </p>
                <h5 class="product-title">Face Cream</h5>
                <p class="product-price">₹300</p>
              </div>

              <div class="product-actions">
                <a href="#" class="product-btn product-btn-dark" data-btn="product-3">
                  BUY NOW 
                </a>
                <a href="#" class="product-btn" data-btn="product-3">
                  QUICK VIEW 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
         <style>
      /* ============================================================
   SECTION (Parent → Child)
============================================================ */
      .zigrow-product-4 {
        background: #ffffff;
      
      }
      .py-6 {
        padding: 3rem 0;
      }

      .zigrow-product-4 .section-label {
        text-align: center;
        font-size: 0.85rem;
        font-weight: 600;
          color: var(--primary-colors, #666);
        letter-spacing: 0.15em;
        margin-bottom: 0.4rem;
      }

      .zigrow-product-4 .section-title {
        text-align: center;
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 0.6rem;
      }

      .zigrow-product-4 .section-subtitle {
        text-align: center;
        max-width: 650px;
        margin: 0 auto 2rem;
        font-size: 0.95rem;
        color: var(--secondary-colors, #666);
      }

      @media (max-width: 768px) {
        .zigrow-product-4 .section-title {
          font-size: 1.8rem;
        }
        .zigrow-product-4 .section-subtitle {
          padding: 0 1rem;
        }
      }

      /* ============================================================
   PRODUCT CARD (Parent)
============================================================ */
      .product-card {
        border: 2px solid #959494;
        background: #ffffff;
        position: relative;
        height: 100%;
      }

      /* ============================================================
   PRODUCT IMAGE GROUP (Parent → Child → Inner Child)
============================================================ */
      .product-card .product-img-box {
        text-align: center;
        width: 100%;
        aspect-ratio: 14/15;
        overflow: hidden;
        position: relative;
      }

      .product-card .product-img-box img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }

      .product-card .product-img-box .product-add {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 28px;
        height: 28px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 50%;
        line-height: 26px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }
      .product-card .product-img-box .product-add i{
        color: #111;
      }

      /* ============================================================
   PRODUCT CONTENT (Parent → Children)
============================================================ */
      .product-card .product-body {
        padding: 1rem 1.25rem; /* space for bottom buttons */
      }

      .product-card .product-body .product-rating {
        font-size: 0.9rem;
        margin-bottom: 6px;
      }

      .product-card .product-body .product-rating i {
        color: #f5a623;
      }

      .product-card .product-body .product-title {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .product-card .product-body .product-price {
        font-weight: 700;
        color: var(--primary-colors, #d1002f);
        margin-bottom: 4px;
      }

      /* ============================================================
   PRODUCT BUTTONS (Pinned Bottom)
============================================================ */
    /* Replace with this */
.zigrow-product-4 .product-card .product-actions {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  border-top: 1px solid #e6e6e6;
  background: #ffffff;
}

   .product-card .product-actions .product-btn-dark {
         background: var(--primary-colors, #111);
        color: #fff;
      }
  /* Replace with this */
.zigrow-product-4 .product-card .product-actions .product-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 130px;
  width: auto;
        text-align: center;
        padding: 0.55rem 1.1rem;
        border: 1px solid #111;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.85rem;
        color: #111;
        background: #fff;
        /* margin-right: 6px; */
      }

   

      .product-card .product-actions .product-btn i {
        margin-left: 4px;
      }

      /* MOBILE BUTTON FIX */
      @media (max-width: 576px) {
        .product-card .product-actions {
          text-align: center;
        }
        .product-card .product-actions .product-btn {
          margin-bottom: 6px;
        }
      }
    </style>
    </section>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-product-5", {
  name: "Product-5",
  category: "product",
  image:
    "https://i.postimg.cc/GpT6ytdQ/Screenshot-2026-07-21-171929.png",

  html: `
<section
  id="zigrow-product-5"
  data-section="zigrow-product-5"
  class="zigrow-product-5"
>
  <div class="zigrow-product-5-container">
    <div class="zigrow-product-5-layout">
      <div class="zigrow-product-5-content">
        <h2 class="no-theme-size zigrow-product-5-title">
          Innovative<br />
          Product<br />
          Solutions
        </h2>

        <p class="zigrow-product-5-description">
          Your trusted partner for high-quality products designed around
          modern needs.
        </p>

        <div class="zigrow-product-5-actions">
          <a
            href="#products"
            class="zigrow-product-5-primary-button"
            data-btn="product"
          >
            Explore Product
          </a>

          <div class="zigrow-product-5-trust">
            <span class="zigrow-product-5-trust-icon">
              <i
                class="bi bi-hand-thumbs-up-fill"
                data-icon="hand-thumbs-up-fill"
              ></i>
            </span>

            <span>Trusted by 500+ customers</span>
          </div>
        </div>

        <div class="zigrow-product-5-card-column ">
          <div
            class="zigrow-product-5-card"  data-zg-editable="surface"
        
          >
            <div class="zigrow-product-5-card-image-wrap text-center">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=85"
                alt="Premium product package"
                class="zigrow-product-5-card-image"
              />
            </div>

            <div class="zigrow-product-5-card-content">
              <p class="zigrow-product-5-card-category">Custom Product</p>

              <h3 class="zigrow-product-5-card-title">
                Advanced Solution
              </h3>

              <div class="zigrow-product-5-rating">
                <span class="zigrow-product-5-rating-icon">
                  <i
                    class="bi bi-star-fill"
                    data-icon="star-fill"
                  ></i>
                </span>

                <span>4.8/5</span>
              </div>

              <div class="zigrow-product-5-card-action">
                <a
                  href="#product-details"
                  class="zigrow-product-5-card-button"
                  data-btn="product"
                >
                  See Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="zigrow-product-5-visual">
        <div class="zigrow-product-5-main-image-wrap text-center">
          <img
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=85"
            alt="Premium products displayed in a natural setting"
            class="zigrow-product-5-main-image"
          />
        </div>

        <div class="zigrow-product-5-feature zigrow-product-5-feature-one">
          <span class="zigrow-product-5-feature-dot"></span>
          <span>Expert Support</span>
        </div>

        <div class="zigrow-product-5-feature zigrow-product-5-feature-two">
          <span>Fast Delivery</span>
          <span class="zigrow-product-5-feature-dot"></span>
        </div>

        <div class="zigrow-product-5-feature zigrow-product-5-feature-three">
          <span class="zigrow-product-5-feature-dot"></span>
          <span>High Quality</span>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-product-5 {
      width: 100%;
      overflow: hidden;
      background: #f4f5f6;
      padding: 32px 0;
    }

    .zigrow-product-5 .zigrow-product-5-container {
      width: min(100% - 48px, 1380px);
      margin: 0 auto;
    }

    .zigrow-product-5 .zigrow-product-5-layout {
      display: grid;
      grid-template-columns: minmax(290px, 0.76fr) minmax(520px, 1.6fr);
      gap: 54px;
      align-items: stretch;
    }

    .zigrow-product-5 .zigrow-product-5-content {
      display: grid;
      align-content: center;
    }

    .zigrow-product-5 .zigrow-product-5-title {
      margin: 0;
      color: #111111;
      font-size: clamp(3rem, 5vw, 5rem);
      font-weight: 800;
      letter-spacing: -0.055em;
      line-height: 0.92;
    }

    .zigrow-product-5 .zigrow-product-5-description {
      max-width: 380px;
      margin: 32px 0 0;
      color: var(--secondary-colors, #4f5357);
      font-size: 1rem;
      line-height: 1.55;
    }

    .zigrow-product-5 .zigrow-product-5-actions {
      display: grid;
      grid-template-columns: max-content max-content;
      gap: 20px;
      align-items: center;
      margin-top: 28px;
    }

    .zigrow-product-5 .zigrow-product-5-primary-button {
      display: grid;
      min-height: 42px;
      padding: 11px 20px;
      place-items: center;
      border: 1px solid var(--primary-colors, #27894f);
      border-radius: 999px;
      background: var(--primary-colors, #27894f);
      color: #ffffff;
      font-size: 0.82rem;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-product-5 .zigrow-product-5-primary-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(39, 137, 79, 0.24);
    }

    .zigrow-product-5 .zigrow-product-5-trust {
      display: grid;
      grid-template-columns: auto auto;
      gap: 8px;
      align-items: center;
      color: #252525;
      font-size: 0.78rem;
      font-weight: 600;
    }

    .zigrow-product-5 .zigrow-product-5-trust-icon {
      display: grid;
      place-items: center;
      color: var(--territory-colors, #f4a915);
      font-size: 1.1rem;
    }

    .zigrow-product-5 .zigrow-product-5-card-column {
      margin-top: 30px;
    }

    .zigrow-product-5 .zigrow-product-5-card {
      display: grid;
      grid-template-columns: 116px minmax(0, 1fr);
      gap: 20px;
      width: min(100%, 430px);
      min-height: 170px;
      padding: 16px;
      border-radius: 15px;
      background: #ffffff;
      box-shadow: 0 14px 34px rgba(24, 37, 30, 0.06);
    }

    .zigrow-product-5 .zigrow-product-5-card-image-wrap {
      height: 138px;
      overflow: hidden;
      border-radius: 10px;
      background: var(--territory-colors, #dbe8d6);
    }

    .zigrow-product-5 .zigrow-product-5-card-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .zigrow-product-5 .zigrow-product-5-card-content {
      display: grid;
      align-content: center;
    }

    .zigrow-product-5 .zigrow-product-5-card-category {
      margin: 0;
      color: var(--secondary-colors, #555a57);
      font-size: 0.72rem;
      line-height: 1.4;
    }

    .zigrow-product-5 .zigrow-product-5-card-title {
      margin: 4px 0 0;
      color: #171717;
      font-size: 1.18rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .zigrow-product-5 .zigrow-product-5-rating {
      display: grid;
      grid-template-columns: auto auto;
      gap: 5px;
      justify-content: start;
      align-items: center;
      margin-top: 7px;
      color: var(--secondary-colors, #5d625f);
      font-size: 0.72rem;
    }

    .zigrow-product-5 .zigrow-product-5-rating-icon {
      color: var(--territory-colors, #f0b323);
      font-size: 0.72rem;
    }

    .zigrow-product-5 .zigrow-product-5-card-action {
      display: grid;
      justify-content: start;
      margin-top: 14px;
    }

    .zigrow-product-5 .zigrow-product-5-card-button {
      display: grid;
      min-height: 34px;
      padding: 8px 17px;
      place-items: center;
      border: 1px solid #252525;
      border-radius: 999px;
      background: transparent;
      color: #252525;
      font-size: 0.74rem;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      transition:
        background-color 0.25s ease,
        color 0.25s ease;
    }

    .zigrow-product-5 .zigrow-product-5-card-button:hover {
      background: #252525;
      color: #ffffff;
    }

    .zigrow-product-5 .zigrow-product-5-visual {
      position: relative;
      min-height: 590px;
      overflow: hidden;
      border-radius: 12px;
      background: var(--territory-colors, #dce4c7);
    }

    .zigrow-product-5 .zigrow-product-5-main-image-wrap {
      width: 100%;
      height: 100%;
    }

    .zigrow-product-5 .zigrow-product-5-main-image {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 590px;
      object-fit: cover;
    }

    .zigrow-product-5 .zigrow-product-5-feature {
      position: absolute;
      z-index: 2;
      display: grid;
      grid-template-columns: auto auto;
      gap: 7px;
      align-items: center;
      min-height: 34px;
      padding: 8px 13px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.82);
      color: #1c211e;
      font-size: 0.78rem;
      font-weight: 500;
      box-shadow: 0 8px 22px rgba(35, 48, 38, 0.08);
      backdrop-filter: blur(8px);
    }

    .zigrow-product-5 .zigrow-product-5-feature-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--primary-colors, #27894f);
    }

    .zigrow-product-5 .zigrow-product-5-feature-one {
      top: 23%;
      left: 52%;
    }

    .zigrow-product-5 .zigrow-product-5-feature-two {
      top: 61%;
      left: 30%;
    }

    .zigrow-product-5 .zigrow-product-5-feature-three {
      right: 2%;
      bottom: 24%;
    }

    @media (max-width: 1100px) {
      .zigrow-product-5 .zigrow-product-5-layout {
        grid-template-columns: minmax(280px, 0.9fr) minmax(440px, 1.4fr);
        gap: 36px;
      }

      .zigrow-product-5 .zigrow-product-5-title {
        font-size: clamp(3rem, 5vw, 4.2rem);
      }

      .zigrow-product-5 .zigrow-product-5-card {
        grid-template-columns: 100px minmax(0, 1fr);
      }

      .zigrow-product-5 .zigrow-product-5-card-image-wrap {
        height: 128px;
      }
    }

    @media (max-width: 900px) {
      .zigrow-product-5 {
        padding: 50px 0;
      }

      .zigrow-product-5 .zigrow-product-5-layout {
        grid-template-columns: 1fr;
      }

      .zigrow-product-5 .zigrow-product-5-content {
        max-width: 620px;
      }

      .zigrow-product-5 .zigrow-product-5-card {
        width: min(100%, 470px);
      }

      .zigrow-product-5 .zigrow-product-5-visual {
        min-height: 520px;
      }

      .zigrow-product-5 .zigrow-product-5-main-image {
        min-height: 520px;
      }
    }

    @media (max-width: 600px) {
      .zigrow-product-5 .zigrow-product-5-container {
        width: min(100% - 32px, 1380px);
      }

      .zigrow-product-5 .zigrow-product-5-title {
        font-size: clamp(2.8rem, 14vw, 4rem);
      }

      .zigrow-product-5 .zigrow-product-5-actions {
        grid-template-columns: 1fr;
        justify-items: start;
      }

      .zigrow-product-5 .zigrow-product-5-card {
        grid-template-columns: 92px minmax(0, 1fr);
        gap: 14px;
      }

      .zigrow-product-5 .zigrow-product-5-card-image-wrap {
        height: 120px;
      }

      .zigrow-product-5 .zigrow-product-5-visual {
        min-height: 430px;
      }

      .zigrow-product-5 .zigrow-product-5-main-image {
        min-height: 430px;
      }

      .zigrow-product-5 .zigrow-product-5-feature {
        font-size: 0.7rem;
      }

      .zigrow-product-5 .zigrow-product-5-feature-one {
        top: 17%;
        left: 42%;
      }

      .zigrow-product-5 .zigrow-product-5-feature-two {
        top: 58%;
        left: 8%;
      }

      .zigrow-product-5 .zigrow-product-5-feature-three {
        right: 3%;
        bottom: 17%;
      }
    }

    @media (max-width: 420px) {
      .zigrow-product-5 .zigrow-product-5-container {
        width: min(100% - 24px, 1380px);
      }

      .zigrow-product-5 .zigrow-product-5-card {
        grid-template-columns: 1fr;
      }

      .zigrow-product-5 .zigrow-product-5-card-image-wrap {
        height: 190px;
      }

      .zigrow-product-5 .zigrow-product-5-visual {
        min-height: 390px;
      }

      .zigrow-product-5 .zigrow-product-5-main-image {
        min-height: 390px;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-product-5 .zigrow-product-5-actions,
    .zigrow-product-5 .zigrow-product-5-card-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-product-6", {
  name: "Product-6",
  category: "product",
  image:
    "https://i.postimg.cc/vmxCVTbv/Screenshot-2026-07-21-172013.png",

  html: `
<section
  id="zigrow-product-6"
  class="zigrow-product-6"
  data-section="zigrow-product-6"
>
  <div class="container-fluid zigrow-product-6-container">
    <div class="zigrow-product-6-heading">
      <p class="zigrow-product-6-eyebrow">
        Explore Our Products
      </p>

      <h2 class="no-theme-size zigrow-product-6-title">
        Discover Excellence
      </h2>
    </div>

    <div class="row zigrow-product-6-grid">
      <!-- Product 1 -->
      <div
        class="col-12 col-sm-6 col-lg-4 col-xl-3 zigrow-product-6-grid-item clonable-card"
      >
        <div
          class="zigrow-product-6-card"
          style="background-image: url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&amp;fit=crop&amp;w=800&amp;q=85');"
          role="img"
          aria-label="Essential product collection"
        >
          <div class="zigrow-product-6-card-top">
            <h3 class="zigrow-product-6-product-name">
              Essential Starter Set
            </h3>

            <a
              href="#"
              class="zigrow-product-6-product-action"
              aria-label="View Essential Starter Set"
            >
              <i class="bi bi-bag" data-icon="bag"></i>
            </a>
          </div>

          <div class="zigrow-product-6-card-bottom">
            <p class="zigrow-product-6-description">
              Simple, practical, and ready for daily use.
            </p>

            <p class="zigrow-product-6-price">₹799</p>
          </div>
        </div>
      </div>

      <!-- Product 2 -->
      <div
        class="col-12 col-sm-6 col-lg-4 col-xl-3 zigrow-product-6-grid-item clonable-card"
      >
        <div
          class="zigrow-product-6-card"
          style="background-image: url('https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&amp;fit=crop&amp;w=800&amp;q=85');"
          role="img"
          aria-label="Everyday product essentials"
        >
          <div class="zigrow-product-6-card-top">
            <h3 class="zigrow-product-6-product-name">
              Everyday Essential Kit
            </h3>

            <a
              href="#"
              class="zigrow-product-6-product-action"
              aria-label="View Everyday Essential Kit"
            >
              <i class="bi bi-bag" data-icon="bag"></i>
            </a>
          </div>

          <div class="zigrow-product-6-card-bottom">
            <p class="zigrow-product-6-description">
              Reliable quality for regular everyday needs.
            </p>

            <p class="zigrow-product-6-price">₹599</p>
          </div>
        </div>
      </div>

      <!-- Product 3 -->
      <div
        class="col-12 col-sm-6 col-lg-4 col-xl-3 zigrow-product-6-grid-item clonable-card"
      >
        <div
          class="zigrow-product-6-card"
          style="background-image: url('https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&amp;fit=crop&amp;w=800&amp;q=85');"
          role="img"
          aria-label="Premium signature product"
        >
          <div class="zigrow-product-6-card-top">
            <h3 class="zigrow-product-6-product-name">
              Signature Product Set
            </h3>

            <a
              href="#"
              class="zigrow-product-6-product-action"
              aria-label="View Signature Product Set"
            >
              <i class="bi bi-bag" data-icon="bag"></i>
            </a>
          </div>

          <div class="zigrow-product-6-card-bottom">
            <p class="zigrow-product-6-description">
              Refined details with dependable performance.
            </p>

            <p class="zigrow-product-6-price">₹1,299</p>
          </div>
        </div>
      </div>

      <!-- Product 4 -->
      <div
        class="col-12 col-sm-6 col-lg-4 col-xl-3 zigrow-product-6-grid-item clonable-card"
      >
        <div
          class="zigrow-product-6-card"
          style="background-image: url('https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&amp;fit=crop&amp;w=800&amp;q=85');"
          role="img"
          aria-label="Compact daily product"
        >
          <div class="zigrow-product-6-card-top">
            <h3 class="zigrow-product-6-product-name">
              Compact Daily Choice
            </h3>

            <a
              href="#"
              class="zigrow-product-6-product-action"
              aria-label="View Compact Daily Choice"
            >
              <i class="bi bi-bag" data-icon="bag"></i>
            </a>
          </div>

          <div class="zigrow-product-6-card-bottom">
            <p class="zigrow-product-6-description">
              Convenient design with lasting everyday value.
            </p>

            <p class="zigrow-product-6-price">₹449</p>
          </div>
        </div>
      </div>

      <!-- Product 5 -->
      <div
        class="col-12 col-sm-6 col-lg-4 col-xl-3 zigrow-product-6-grid-item clonable-card"
      >
        <div
          class="zigrow-product-6-card"
          style="background-image: url('https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&amp;fit=crop&amp;w=800&amp;q=85');"
          role="img"
          aria-label="Complete product collection"
        >
          <div class="zigrow-product-6-card-top">
            <h3 class="zigrow-product-6-product-name">
              Complete Value Pack
            </h3>

            <a
              href="#"
              class="zigrow-product-6-product-action"
              aria-label="View Complete Value Pack"
            >
              <i class="bi bi-bag" data-icon="bag"></i>
            </a>
          </div>

          <div class="zigrow-product-6-card-bottom">
            <p class="zigrow-product-6-description">
              Useful essentials combined in one smart set.
            </p>

            <p class="zigrow-product-6-price">₹999</p>
          </div>
        </div>
      </div>

      <!-- Product 6 -->
      <div
        class="col-12 col-sm-6 col-lg-4 col-xl-3 zigrow-product-6-grid-item clonable-card"
      >
        <div
          class="zigrow-product-6-card"
          style="background-image: url('https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&amp;fit=crop&amp;w=800&amp;q=85');"
          role="img"
          aria-label="Premium product collection"
        >
          <div class="zigrow-product-6-card-top">
            <h3 class="zigrow-product-6-product-name">
              Premium Select Range
            </h3>

            <a
              href="#"
              class="zigrow-product-6-product-action"
              aria-label="View Premium Select Range"
            >
              <i class="bi bi-bag" data-icon="bag"></i>
            </a>
          </div>

          <div class="zigrow-product-6-card-bottom">
            <p class="zigrow-product-6-description">
              Carefully selected for comfort and quality.
            </p>

            <p class="zigrow-product-6-price">₹1,499</p>
          </div>
        </div>
      </div>

      <!-- Product 7 -->
      <div
        class="col-12 col-sm-6 col-lg-4 col-xl-3 zigrow-product-6-grid-item clonable-card"
      >
        <div
          class="zigrow-product-6-card"
          style="background-image: url('https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&amp;fit=crop&amp;w=800&amp;q=85');"
          role="img"
          aria-label="Modern product selection"
        >
          <div class="zigrow-product-6-card-top">
            <h3 class="zigrow-product-6-product-name">
              Modern Choice Bundle
            </h3>

            <a
              href="#"
              class="zigrow-product-6-product-action"
              aria-label="View Modern Choice Bundle"
            >
              <i class="bi bi-bag" data-icon="bag"></i>
            </a>
          </div>

          <div class="zigrow-product-6-card-bottom">
            <p class="zigrow-product-6-description">
              Clean design created for flexible daily use.
            </p>

            <p class="zigrow-product-6-price">₹849</p>
          </div>
        </div>
      </div>

      <!-- Product 8 -->
      <div
        class="col-12 col-sm-6 col-lg-4 col-xl-3 zigrow-product-6-grid-item clonable-card"
      >
        <div
          class="zigrow-product-6-card"
          style="background-image: url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&amp;fit=crop&amp;w=800&amp;q=85');"
          role="img"
          aria-label="Refreshing product collection"
        >
          <div class="zigrow-product-6-card-top">
            <h3 class="zigrow-product-6-product-name">
              Refreshing Daily Pick
            </h3>

            <a
              href="#"
              class="zigrow-product-6-product-action"
              aria-label="View Refreshing Daily Pick"
            >
              <i class="bi bi-bag" data-icon="bag"></i>
            </a>
          </div>

          <div class="zigrow-product-6-card-bottom">
            <p class="zigrow-product-6-description">
              A practical choice made for everyday routines.
            </p>

            <p class="zigrow-product-6-price">₹399</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-product-6 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3rem, 6vw, 6rem) 0;
      background: #ffffff;
    }

    .zigrow-product-6 .zigrow-product-6-container {
      max-width: 1480px;
      padding-right: 0.75rem;
      padding-left: 0.75rem;
    }

    .zigrow-product-6 .zigrow-product-6-heading {
      margin-bottom: clamp(2.5rem, 5vw, 4.5rem);
      text-align: center;
    }

    .zigrow-product-6 .zigrow-product-6-eyebrow {
      display: inline-block;
      margin: 0 0 0.75rem;
      padding: 0.35rem 0.7rem;
      border-radius: 999px;
      background: var(--territory-colors, #e9f3f2);
      color: var(--secondary-colors, #56706d);
      font-size: clamp(0.65rem, 0.8vw, 0.78rem);
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .zigrow-product-6 .zigrow-product-6-title {
      margin: 0;
      color: #16181a;
      font-size: clamp(3.4rem, 8vw, 7.5rem);
      font-weight: 500;
      font-style: italic;
      line-height: 0.95;
      letter-spacing: -0.065em;
    }

    .zigrow-product-6 .zigrow-product-6-grid {
      margin-right: -0.5rem;
      margin-left: -0.5rem;
      row-gap: 1rem;
    }

    .zigrow-product-6 .zigrow-product-6-grid-item {
      min-width: 0;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .zigrow-product-6 .zigrow-product-6-card {
      position: relative;
      isolation: isolate;
      width: 100%;
      aspect-ratio: 0.84 / 1;
      overflow: hidden;
      border: 1px solid rgba(17, 24, 39, 0.08);
      border-radius: clamp(0.9rem, 1.5vw, 1.4rem);
      background-color: var(--territory-colors, #eef1f0);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 0 0.4rem 1.5rem rgba(17, 24, 39, 0.06);
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background-position 0.45s ease;
    }

    .zigrow-product-6 .zigrow-product-6-card::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.08) 0%,
        transparent 30%,
        transparent 68%,
        rgba(20, 25, 29, 0.1) 100%
      );
      pointer-events: none;
    }

    .zigrow-product-6 .zigrow-product-6-card:hover,
    .zigrow-product-6 .zigrow-product-6-card:focus-within {
      transform: translateY(-4px);
      background-position: center 48%;
      box-shadow: 0 1.2rem 2.6rem rgba(17, 24, 39, 0.13);
    }

    .zigrow-product-6 .zigrow-product-6-card-top {
      position: absolute;
      top: 0.65rem;
      right: 0.65rem;
      left: 0.65rem;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      justify-content: space-between;
    }

    .zigrow-product-6 .zigrow-product-6-product-name {
      flex: 0 1 auto;
      width: max-content;
      max-width: calc(100% - 2.5rem);
      margin: 0;
      padding: 0.42rem 0.75rem;
      overflow: hidden;
      border: 1px solid rgba(17, 24, 39, 0.06);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.92);
      color: #303438;
      font-size: clamp(0.65rem, 0.85vw, 0.78rem);
      font-weight: 500;
      line-height: 1.15;
      text-overflow: ellipsis;
      white-space: nowrap;
      backdrop-filter: blur(10px);
    }

    .zigrow-product-6 .zigrow-product-6-product-action {
      display: grid;
      flex: 0 0 auto;
      width: 2rem;
      height: 2rem;
      place-items: center;
      border: 1px solid rgba(17, 24, 39, 0.08);
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.92);
      color: var(--primary-colors, #293943);
      font-size: 0.9rem;
      line-height: 1;
      text-decoration: none;
      backdrop-filter: blur(10px);
      transition:
        background 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-product-6 .zigrow-product-6-product-action i {
      line-height: 1;
    }

    .zigrow-product-6 .zigrow-product-6-product-action:hover {
      transform: translateY(-2px);
      background: var(--primary-colors, #293943);
      color: #ffffff;
    }

    .zigrow-product-6 .zigrow-product-6-card-bottom {
      position: absolute;
      right: 0.65rem;
      bottom: 0.65rem;
      left: 0.65rem;
      z-index: 2;
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 0.65rem;
      align-items: center;
    }

    .zigrow-product-6 .zigrow-product-6-description,
    .zigrow-product-6 .zigrow-product-6-price {
      margin: 0;
      padding: 0.45rem 0.75rem;
      border: 1px solid rgba(17, 24, 39, 0.06);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.92);
      color: var(--secondary-colors, #555d62);
      font-size: clamp(0.6rem, 0.75vw, 0.72rem);
      line-height: 1.2;
      backdrop-filter: blur(10px);
    }

    .zigrow-product-6 .zigrow-product-6-description {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .zigrow-product-6 .zigrow-product-6-price {
      color: #202428;
      font-weight: 700;
      white-space: nowrap;
    }

    @media (max-width: 991px) {
      .zigrow-product-6 .zigrow-product-6-card {
        aspect-ratio: 0.9 / 1;
      }
    }

    @media (max-width: 575px) {
      .zigrow-product-6 {
        padding: 3rem 0;
      }

      .zigrow-product-6 .zigrow-product-6-heading {
        margin-bottom: 2rem;
      }

      .zigrow-product-6 .zigrow-product-6-title {
        font-size: clamp(3rem, 17vw, 4.8rem);
      }

      .zigrow-product-6 .zigrow-product-6-card {
        aspect-ratio: 0.9 / 1;
      }

      .zigrow-product-6 .zigrow-product-6-product-name {
        font-size: 0.72rem;
      }

      .zigrow-product-6 .zigrow-product-6-description,
      .zigrow-product-6 .zigrow-product-6-price {
        font-size: 0.68rem;
      }
    }
  </style>
</section>
`,
});

// Footer
Vvveb.Blocks.add("bootstrap4/zigrow-footer-1", {
    name: "footer-1",
    category: "footer",
    image: "https://i.postimg.cc/gkfGf4Rw/footer-1.png",
    html: `   <footer class="zigrow-footer-1 py-6" data-section="zigrow-footer-1" id="zigrow-footer-1">
      <div class="container">
        <!-- Top: Brand & Description -->
        <div class="row">
          <div class="col-12">
            <div class="zigrow-footer-1__top">
              <h2 class="no-theme-size zigrow-footer-1__brand" data-logo="footer">Willso.</h2>
              <p class="zigrow-footer-1__desc">
               We focus on the details so you don’t have to. Every visit includes a thorough clean, careful handling of your space, and consistent results you can count on. If something isn’t right, we’ll make it right.
              </p>

         <div class="zigrow-footer-1__socials" aria-label="Social links">
  <a href="#" class="zigrow-footer-1__social-link zigrow-footer-1__social-link--facebook" aria-label="Facebook">
    <i class="bi bi-facebook" data-icon="facebook"></i>
  </a>

  <a href="#" class="zigrow-footer-1__social-link zigrow-footer-1__social-link--twitter" aria-label="Twitter / X">
    <i class="bi bi-twitter-x" data-icon="twitter"></i>
  </a>

  <a href="#" class="zigrow-footer-1__social-link zigrow-footer-1__social-link--linkedin" aria-label="LinkedIn">
    <i class="bi bi-linkedin" data-icon="linkedin"></i>
  </a>

  <a href="#" class="zigrow-footer-1__social-link zigrow-footer-1__social-link--instagram" aria-label="Instagram">
    <i class="bi bi-instagram" data-icon="instagram"></i>
  </a>
</div>
            </div>
          </div>
        </div>

        <hr class="zigrow-footer-1__divider" />

        <!-- Bottom Row -->
        <div class="row">
          <!-- Left: Copyright -->
          <div
            class="col-12 col-md-4 zigrow-footer-1__bottom-col zigrow-footer-1__bottom-col--left"
          >
            <p class="zigrow-footer-1__bottom-text">
     
Copyright 2025 © <span>all right reserved</span>, Designed by
<a href="https://zigrow.com" target="_blank" rel="noopener noreferrer" class="zigrow-footer-backlink">Zigrow</a>
            </p>
          </div>

          <!-- Center: Email -->
          <div
            class="col-12 col-md-4 zigrow-footer-1__bottom-col zigrow-footer-1__bottom-col--center"
          >
            <div class="zigrow-footer-1__info">
              <span class="zigrow-footer-1__info-icon">
                <i class="bi bi-envelope-fill" data-icon="email"></i>
              </span>
              <div class="zigrow-footer-1__info-texts">
                <p class="zigrow-footer-1__info-label"><span>Send Us Email</span></p>
                <p class="zigrow-footer-1__info-main">
                  <a href="mailto:info@yourmail.com">
                    yourname@domainname.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Location -->
          <div
            class="col-12 col-md-4 zigrow-footer-1__bottom-col zigrow-footer-1__bottom-col--right"
          >
            <div class="zigrow-footer-1__info">
              <span class="zigrow-footer-1__info-icon">
                <i class="bi bi-geo-alt-fill" data-icon="location"></i>
              </span>
              <div class="zigrow-footer-1__info-texts">
                <p class="zigrow-footer-1__info-label"><span>Our Location</span></p>
                <p class="zigrow-footer-1__info-main">
                  E-123, ABC Plaza, XYZ Street, New Delhi - 110077
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <style>
      /* =========================
       zigrow-footer-1 BASE
    ==========================*/
      .zigrow-footer-1 {
        background-color: #181818;
        color: #bdbdbd;
      
      }
      .py-6{
        padding: 3rem 0;
      }

      .zigrow-footer-1 .zigrow-footer-1__top {
        text-align: center;
        margin-bottom: 2rem;
      }

      .zigrow-footer-1 .zigrow-footer-1__brand {
        font-size: 2rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 0.6rem;
      }

      .zigrow-footer-1 .zigrow-footer-1__desc {
        font-size: 0.9rem;
        max-width: 540px;
        margin: 0 auto;
        line-height: 1.6;
      }

      .zigrow-footer-1 .zigrow-footer-backlink {
  color: var(--primary-colors, #ff8a00);
  text-decoration: none;
  font-weight: 600;
}

.zigrow-footer-1 .zigrow-footer-backlink:hover {
  text-decoration: underline;
}

      /* =========================
       SOCIAL ICONS
    ==========================*/
   .zigrow-footer-1 .zigrow-footer-1__socials {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.8rem;
  margin-bottom: 2.5rem;
}

 

      .zigrow-footer-1 .zigrow-footer-1__social-link {
        width: 40px;
        height: 40px;
        border-radius: 4px;
        border: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-decoration: none;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
      }

      .zigrow-footer-1 .zigrow-footer-1__social-link i {
        font-size: 1.1rem;
        color: #ffffff;
      }

      .zigrow-footer-1 .zigrow-footer-1__social-link--facebook {
        background-color: #008046;
      }

      .zigrow-footer-1 .zigrow-footer-1__social-link--twitter {
        background-color: #0a66c2;
      }

      .zigrow-footer-1 .zigrow-footer-1__social-link--linkedin {
        background-color: #d02e2e;
      }

      .zigrow-footer-1 .zigrow-footer-1__social-link--instagram {
        background-color: #ff8a00;
      }

      .zigrow-footer-1 .zigrow-footer-1__social-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
      }

      /* =========================
       DIVIDER
    ==========================*/
      .zigrow-footer-1 .zigrow-footer-1__divider {
        border: none;
        border-top: 1px solid #2a2a2a;
        margin: 0 auto 1.8rem;
        max-width: 780px;
      }

      /* =========================
       BOTTOM ROW
    ==========================*/
      .zigrow-footer-1 .zigrow-footer-1__bottom-col {
        margin-bottom: 1.2rem;
      }

      .zigrow-footer-1 .zigrow-footer-1__bottom-text {
        font-size: 0.78rem;
        color: #7a7a7a;
        text-align: center;
        margin: 0;
      }

      .zigrow-footer-1 .zigrow-footer-1__info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
      }

      .zigrow-footer-1 .zigrow-footer-1__info-icon {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        /* border: 1px solid #ff8a00; */
        background-color: #2a2a2a;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        flex-shrink: 0;
      }

      .zigrow-footer-1 .zigrow-footer-1__info-icon i {
        font-size: 1rem;
      }

      .zigrow-footer-1 .zigrow-footer-1__info-texts {
        text-align: left;
      }

      .zigrow-footer-1 .zigrow-footer-1__info-label {
        font-size: 0.78rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #a0a0a0;
        margin: 0 0 0.1rem;
      }
      .zigrow-footer-1 span {
        color: var(--primary-colors, #ff8a00);
      }

      .zigrow-footer-1 .zigrow-footer-1__info-main {
        font-size: 0.8rem;
        color: #eaeaea;
        margin: 0;
      }

      .zigrow-footer-1 .zigrow-footer-1__info-main a {
        color: #eaeaea;
        text-decoration: none;
      }

      .zigrow-footer-1 .zigrow-footer-1__info-main a:hover {
        text-decoration: underline;
      }

      /* =========================
       RESPONSIVE
    ==========================*/
      @media (min-width: 768px) {
        .zigrow-footer-1 .zigrow-footer-1__bottom-text {
          text-align: left;
        }

        .zigrow-footer-1 .zigrow-footer-1__bottom-col--right .zigrow-footer-1__info {
          justify-content: flex-end;
        }

        .zigrow-footer-1 .zigrow-footer-1__bottom-col--center .zigrow-footer-1__info {
          justify-content: center;
        }
      }

      @media (max-width: 767.98px) {
        .zigrow-footer-1 {
          padding: 2.5rem 0 2rem;
        }

        .zigrow-footer-1 .zigrow-footer-1__top {
          padding: 0 1rem;
        }

        .zigrow-footer-1 .zigrow-footer-1__info {
          align-items: flex-start;
        }
      }
    </style>
    </footer>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-footer-2", {
    name: "footer-2",
    category: "footer",
    image: "https://i.postimg.cc/KvdmdQLg/footer-2.png",
    html: `  <footer
      class="zigrow-footer-2-evnty py-6"
      data-section="zigrow-footer-2-evnty"
      id="zigrow-footer-2-evnty"
    >
      <div class="container">
        <!-- TOP ROW -->
        <div class="row zigrow-footer-2-evnty__top-row">
          <!-- Brand / description -->
          <div class="col-12 col-md-4">
            <div class="zigrow-footer-2-evnty__brand">
              <div class="zigrow-footer-2-evnty__logo"><p>N</p></div>
              <div class="zigrow-footer-2-evnty__brand-text">
                <h2 class="no-theme-size zigrow-footer-2-evnty__brand-name" data-logo="footer">Evnty</h2>
                <p class="zigrow-footer-2-evnty__brand-desc">
                  Curated events, creative studios, and stories that turn
                  everyday moments into experiences.
                </p>
              </div>
            </div>
          </div>

          <!-- Center navigation -->
          <div class="col-12 col-md-6">
       <nav class="zigrow-footer-2-evnty__nav" aria-label="Footer navigation">
  <ul class="zigrow-footer-2-evnty__nav-list">
    <li>
      <a href="#" class="zigrow-footer-2-evnty__nav-link">Studios</a>
    </li>
    <li>
      <a href="#" class="zigrow-footer-2-evnty__nav-link">Features</a>
    </li>
    <li>
      <a href="#" class="zigrow-footer-2-evnty__nav-link">News</a>
    </li>
  </ul>
</nav>
          </div>

          <!-- Social links (right column: block right, text left) -->
          <div class="col-12 col-md-2">
            <div class="zigrow-footer-2-evnty__social-wrapper">
           <ul class="zigrow-footer-2-evnty__social" aria-label="Social links">
  <li>
    <a href="#" class="zigrow-footer-2-evnty__social-link">Twitter</a>
  </li>
  <li>
    <a href="#" class="zigrow-footer-2-evnty__social-link">Youtube</a>
  </li>
  <li>
    <a href="#" class="zigrow-footer-2-evnty__social-link">Instagram</a>
  </li>
</ul>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <hr class="zigrow-footer-2-evnty__divider" />

        <!-- BOTTOM ROW -->
        <div class="row zigrow-footer-2-evnty__bottom-row">
          <div class="col-12 col-md-6">
            <p class="zigrow-footer-2-evnty__bottom-text">
        
Copyright 2026 © <span>all right reserved</span>, Designed by
<a href="https://zigrow.com" target="_blank" rel="noopener noreferrer" class="zigrow-footer-backlink">Zigrow</a>
            </p>
          </div>
          <div class="col-12 col-md-6">
            <a href="#"
              class="zigrow-footer-2-evnty__bottom-text zigrow-footer-2-evnty__bottom-text--right"
            >
            Privacy Policy
            </a>
          </div>
        </div>
      </div>
        <style>
      /* ====================================================
         EVNTY zigrow-footer-2
         (Bootstrap only for .container / .row / .col-*)
      =====================================================*/
      .zigrow-footer-2-evnty {
        background-color: #101623;
        color: #e5e7eb;
      
        border-bottom: 1px solid #1f2933; /* bottom border */
      }
      .py-6 {
        padding: 3rem 0;
      }

      /* ---------- TOP ROW ---------- */
      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__top-row {
        margin-bottom: 2rem;
      }

      /* Brand block */
      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__brand {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__logo {
        text-align: center;
        width: 40px;
        height: 40px;
        border-radius: 999px;
        color: #101623;
        background: #ffffff;
      }
      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__logo p {
        font-size: 1.5rem;
        font-weight: 700;
      }
      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__brand-text {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__brand-name {
        font-size: 1.35rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin: 0;
      }

      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__brand-desc {
        margin: 0;
        font-size: 0.9rem;
        color: #fff;
        line-height: 1.6;
        max-width: 260px;
      }

      .zigrow-footer-2-evnty .zigrow-footer-backlink {
  color: var(--primary-colors, #ffffff);
  text-decoration: none;
  font-weight: 600;
}

.zigrow-footer-2-evnty .zigrow-footer-backlink:hover {
  text-decoration: underline;
}
     .zigrow-footer-2-evnty .zigrow-footer-2-evnty__nav {
  margin-bottom: 1.5rem;
}

.zigrow-footer-2-evnty .zigrow-footer-2-evnty__nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-evenly;
}

.zigrow-footer-2-evnty .zigrow-footer-2-evnty__nav-list li {
  margin: 0;
}

      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__nav-link {
        font-size: 0.95rem;
        color: #e5e7eb;
        text-decoration: underline;
        text-underline-offset: 0.18em;
        cursor: pointer;
      }

      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__nav-link:hover {
        color: #ffffff;
      }

      /* Social links (right column) */
      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__social-wrapper {
        text-align: right; /* whole block sits toward the right */
      }

     .zigrow-footer-2-evnty .zigrow-footer-2-evnty__social {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: inline-flex;
  flex-direction: column;
  gap: 0.35rem;
  align-items: flex-start;
}

.zigrow-footer-2-evnty .zigrow-footer-2-evnty__social li {
  margin: 0;
}

      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__social-link {
        font-size: 0.95rem;
        color: #e5e7eb;
        text-decoration: none;
      }

    

      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__social-link:hover {
        color: #ffffff;
      }

      /* Divider */
      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__divider {
        border: none;
        border-top: 2px solid #a3a3a3;
        margin: 0 0 1.5rem;
      }

      /* ---------- BOTTOM ROW ---------- */
      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__bottom-row {
        font-size: 0.9rem;
        color: #9ca3af;
      }

      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__bottom-text {
        margin: 0.2rem 0;
      }

      .zigrow-footer-2-evnty .zigrow-footer-2-evnty__bottom-text--right {
        text-align: right;
      }

      /* ---------- RESPONSIVE ---------- */
      @media (max-width: 767.98px) {
        .zigrow-footer-2-evnty {
          padding: 2.5rem 0 2rem;
        }

        .zigrow-footer-2-evnty .zigrow-footer-2-evnty__brand {
          flex-wrap: wrap;
          margin-bottom: 1.8rem;
        }

        .zigrow-footer-2-evnty .zigrow-footer-2-evnty__brand-desc {
          max-width: none;
        }

        .zigrow-footer-2-evnty .zigrow-footer-2-evnty__nav {
          justify-content: flex-start;
        }

        .zigrow-footer-2-evnty .zigrow-footer-2-evnty__social-wrapper {
          text-align: left; /* on mobile keep it left */
        }

        .zigrow-footer-2-evnty .zigrow-footer-2-evnty__bottom-text--right {
          text-align: left;
          margin-top: 0.6rem;
        }
      }

      @media (min-width: 992px) {
        .zigrow-footer-2-evnty .zigrow-footer-2-evnty__nav {
          justify-content: center;
        }
      }
    </style>
    </footer>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-footer-3", {
    name: "footer-3",
    category: "footer",
    image: "https://i.postimg.cc/QxRjRS57/footer-3.png",
    html: `   <footer class="zigrow-footer-3 py-6">
      <div class="container">
        <!-- TOP HERO ROW -->
        <div class="row zigrow-footer-3__top-row">
          <!-- Left: headline + benefits -->
          <div class="col-12 col-lg-7">
            <div class="zigrow-footer-3__headline">
              <h1 class="zigrow-footer-3__headline-main">
                It's time to support zero pollution,
              </h1>
              <h2 class="no-theme-size zigrow-footer-3__headline-sub">with renewable resources</h2>
            </div>

            <div class="zigrow-footer-3__benefits">
              <div class="zigrow-footer-3__benefit">
                <i
                  class="bi bi-check-circle-fill zigrow-footer-3__benefit-icon"
                  data-icon="check"
                ></i>
                <p class="zigrow-footer-3__benefit-text">
                  Experienced for more than 10 years
                </p>
              </div>
              <div class="zigrow-footer-3__benefit">
                <i
                  class="bi bi-check-circle-fill zigrow-footer-3__benefit-icon"
                  data-icon="check"
                ></i>
                <p class="zigrow-footer-3__benefit-text">
                  Support for the latest technology
                </p>
              </div>
            </div>
          </div>

          <!-- Right: text + CTA -->
          <div class="col-12 col-lg-5">
            <div class="zigrow-footer-3__cta-panel">
              <p class="zigrow-footer-3__cta-text">
                By increasing the effectiveness and efficiency of electricity
                use, the use of renewable resources is very profitable for all
                industrial services.
              </p>
           
<div class="zigrow-footer-3__cta-button-wrap">
  <a href="#" class="zigrow-footer-3__cta-button" data-btn="footer-3">
    <span class="zigrow-footer-3__cta-button-text">Get in touch</span>
    <span class="zigrow-footer-3__cta-icon">
      <i class="bi bi-arrow-up-right" data-icon="arrow-up-right"></i>
    </span>
  </a>
</div>
            </div>
          </div>
        </div>

        <!-- MIDDLE: brand / nav / socials -->
        <div class="row zigrow-footer-3__middle-row">
          <!-- Brand -->
          <div class="col-12 col-lg-3">
            <div class="zigrow-footer-3__brand" data-logo="footer">
          
              <h3 class="zigrow-footer-3__brand-name">logo</h3>
            </div>
          </div>

          <!-- Navigation -->
          <div class="col-12 col-lg-6">
       <nav class="zigrow-footer-3__nav" aria-label="Footer navigation">
  <ul class="zigrow-footer-3__nav-list">
    <li>
      <a href="#" class="zigrow-footer-3__nav-link">Home</a>
    </li>
    <li>
      <a href="#" class="zigrow-footer-3__nav-link">About Us</a>
    </li>
    <li>
      <a href="#" class="zigrow-footer-3__nav-link">Features</a>
    </li>
    <li>
      <a href="#" class="zigrow-footer-3__nav-link">Services</a>
    </li>
    <li>
      <a href="#" class="zigrow-footer-3__nav-link">Contact</a>
    </li>
  </ul>
</nav>
          </div>

          <!-- Social icons -->
          <div class="col-12 col-lg-3">
            <div class="zigrow-footer-3__socials-wrapper">
     <div class="zigrow-footer-3__socials" aria-label="Social links">
  <a href="#" class="zigrow-footer-3__social-link" aria-label="LinkedIn">
    <i class="bi bi-linkedin" data-icon="linkedin" aria-hidden="true"></i>
  </a>

  <a href="#" class="zigrow-footer-3__social-link" aria-label="Twitter / X">
    <i class="bi bi-twitter-x" data-icon="x" aria-hidden="true"></i>
  </a>

  <a href="#" class="zigrow-footer-3__social-link" aria-label="Facebook">
    <i class="bi bi-facebook" data-icon="facebook" aria-hidden="true"></i>
  </a>

  <a href="#" class="zigrow-footer-3__social-link" aria-label="Instagram">
    <i class="bi bi-instagram" data-icon="instagram" aria-hidden="true"></i>
  </a>
</div>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <hr class="zigrow-footer-3__divider" />

        <!-- BOTTOM ROW -->
        <div class="row zigrow-footer-3__bottom-row">
          <div class="col-12 col-md-6">
            <p class="zigrow-footer-3__bottom-text">
       
Copyright 2026 © <span>all right reserved</span>, Designed by
<a href="https://zigrow.com" target="_blank" rel="noopener noreferrer" class="zigrow-footer-backlink">Zigrow</a>
            </p>
          </div>
          <div class="col-12 col-md-6">
        <ul class="zigrow-footer-3__bottom-links">
  <li>
    <a href="#" class="zigrow-footer-3__bottom-link">Terms of Service</a>
  </li>
  <li>
    <a href="#" class="zigrow-footer-3__bottom-link">Privacy Policy</a>
  </li>
</ul>
          </div>
        </div>
      </div>
        <style>
      /* ====================================================
         XURYA HERO + FOOTER SECTION
         (Bootstrap only for .container / .row / .col-*)
      =====================================================*/
      .zigrow-footer-3 {
        background-color: #020303;
        color: #f9fafb;
       
      }

      .py-6 {
        padding: 3rem 0;
      }

      /* ---------- TOP HERO ROW ---------- */
      .zigrow-footer-3 .zigrow-footer-3__top-row {
        margin-bottom: 5.5rem;
      }

      .zigrow-footer-3 .zigrow-footer-3__headline {
        margin-bottom: 2rem;
      }

      .zigrow-footer-3 .zigrow-footer-3__cta-button-wrap {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
      .zigrow-footer-3 .zigrow-footer-3__headline-main {
        font-size: 2.5rem;
        line-height: 1.15;
        font-weight: 600;
        letter-spacing: -0.03em;
        margin: 0 0 0.5rem;
      }

      .zigrow-footer-3 .zigrow-footer-3__headline-sub {
        font-size: 2.6rem;
        line-height: 1.1;
        font-weight: 500;
        letter-spacing: -0.04em;
        margin: 0;
        color: var(--secondary-colors, #e5e7eb);
      }

      .zigrow-footer-3 .zigrow-footer-3__benefits {
        display: flex;
        flex-wrap: wrap;
        gap: 1.75rem;
      }

      .zigrow-footer-3 .zigrow-footer-3__benefit {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
      }

      .zigrow-footer-3 .zigrow-footer-3__benefit-icon {
        color: var(--primary-colors, #22c55e);
        font-size: 1.1rem;
      }

      .zigrow-footer-3 .zigrow-footer-3__benefit-text {
        margin: 0;
        font-size: 0.95rem;
        color: #e5e7eb;
      }

      /* Right side text + CTA */
      .zigrow-footer-3 .zigrow-footer-3__cta-panel {
        max-width: 420px;
        margin-left: auto;
      }
        .zigrow-footer-3 .zigrow-footer-backlink {
  color: var(--primary-colors, #22c55e);
  text-decoration: none;
  font-weight: 600;
}

.zigrow-footer-3 .zigrow-footer-backlink:hover {
  text-decoration: underline;
}

      .zigrow-footer-3 .zigrow-footer-3__cta-text {
        margin: 0 0 1.6rem;
        font-size: 0.98rem;
        line-height: 1.7;
        color: #d1d5db;
      }

      .zigrow-footer-3 .zigrow-footer-3__cta-button {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.75rem 1.7rem;
        border-radius: 999px;
           background-color: var(--primary-colors, #f9fafb);
        text-decoration: none;
        border: 1px solid var(--primary-colors, #f9fafb);
        transition: background-color 0.15s ease, transform 0.15s ease,
          box-shadow 0.15s ease;
          white-space: nowrap;
      }

      .zigrow-footer-3 .zigrow-footer-3__cta-button-text {
        margin: 0;
        font-size: 0.95rem;
        font-weight: 500;
        color: #020617;
      }

      .zigrow-footer-3 .zigrow-footer-3__cta-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .zigrow-footer-3 .zigrow-footer-3__cta-icon i {
        font-size: 0.9rem;
        color: #020617;
      }

      .zigrow-footer-3 .zigrow-footer-3__cta-button:hover {
         background-color: var(--primary-colors, #22c55e);
    transform: translateY(-1px);
    box-shadow: 0 4px 20px var(--primary-colors, #22c55e);
      }

      /* ---------- MIDDLE NAV / BRAND / SOCIAL ---------- */
      .zigrow-footer-3 .zigrow-footer-3__middle-row {
        margin-top: 2.5rem; /* CHANGED: margin-top instead of margin-bottom */
        margin-bottom: 0; /* CHANGED */
        align-items: flex-end; /* align all three columns to bottom on wide screens */
      }

      .zigrow-footer-3 .zigrow-footer-3__brand {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin-bottom: 1.5rem;
      }

      .zigrow-footer-3 .zigrow-footer-3__brand-icon {
        width: 26px;
        height: 26px;
        border-radius: 8px;
        background-color: var(--primary-colors, #22c55e);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .zigrow-footer-3 .zigrow-footer-3__brand-icon i {
        font-size: 1rem;
        color: #020617;
      }

      .zigrow-footer-3 .zigrow-footer-3__brand-name {
        margin: 0;
        font-size: 1.05rem;
        font-weight: 500;
      }

    .zigrow-footer-3 .zigrow-footer-3__nav {
  margin-bottom: 1.5rem;
}

.zigrow-footer-3 .zigrow-footer-3__nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  justify-content: center;
}

.zigrow-footer-3 .zigrow-footer-3__nav-list li {
  margin: 0;
}

.zigrow-footer-3 .zigrow-footer-3__nav-link {
  text-decoration: none;
  font-size: 0.95rem;
  color: #e5e7eb;
}

.zigrow-footer-3 .zigrow-footer-3__nav-link:hover {
  color: #ffffff;
}

@media (max-width: 768px) {
  .zigrow-footer-3 .zigrow-footer-3__nav-list {
    justify-content: flex-start;
  }
}

      /* Social icons */
      .zigrow-footer-3 .zigrow-footer-3__socials-wrapper {
        text-align: right;
      }

 /* Replace with this */
.zigrow-footer-3 .zigrow-footer-3__socials {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

      .zigrow-footer-3 .zigrow-footer-3__social-link {
        width: 34px;
        height: 34px;
        border-radius: 999px;
        border: 1px solid #4b5563;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
      }

      .zigrow-footer-3 .zigrow-footer-3__social-link i {
        font-size: 0.9rem;
        color: #e5e7eb;
      }

      .zigrow-footer-3 .zigrow-footer-3__social-link:hover {
        border-color: #e5e7eb;
      }

      /* Divider */
      .zigrow-footer-3 .zigrow-footer-3__divider {
        border: none;
        border-top: 1px solid #111827;
        margin: 0 0 1.4rem;
      }

      /* ---------- BOTTOM ROW ---------- */
      .zigrow-footer-3 .zigrow-footer-3__bottom-row {
        font-size: 0.85rem;
        color: #9ca3af;
      }

      .zigrow-footer-3 .zigrow-footer-3__bottom-text {
        margin: 0.2rem 0;
      }

   .zigrow-footer-3 .zigrow-footer-3__bottom-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  justify-content: flex-end;
}

.zigrow-footer-3 .zigrow-footer-3__bottom-links li {
  margin: 0;
}

.zigrow-footer-3 .zigrow-footer-3__bottom-link {
  text-decoration: none;
  color: #d1d5db;
}

.zigrow-footer-3 .zigrow-footer-3__bottom-link:hover {
  color: #ffffff;
}

      /* ---------- RESPONSIVE ---------- */
      @media (max-width: 991.98px) {
        .zigrow-footer-3 {
          padding: 3rem 0 2.5rem;
        }

        .zigrow-footer-3 .zigrow-footer-3__headline-main {
          font-size: 2.3rem;
        }

        .zigrow-footer-3 .zigrow-footer-3__headline-sub {
          font-size: 2.1rem;
        }

        .zigrow-footer-3 .zigrow-footer-3__cta-panel {
          margin-top: 2rem;
          max-width: none;
        }

        .zigrow-footer-3 .zigrow-footer-3__brand {
          margin-bottom: 1rem;
        }

        .zigrow-footer-3 .zigrow-footer-3__socials-wrapper {
          text-align: left;
          margin-top: 1.2rem;
        }

        .zigrow-footer-3 .zigrow-footer-3__bottom-links {
          justify-content: flex-start;
          margin-top: 0.6rem;
        }

        /* On small screens we don't need bottom alignment */
        .zigrow-footer-3 .zigrow-footer-3__middle-row {
          align-items: flex-start;
        }
      }

      @media (max-width: 575.98px) {
        .zigrow-footer-3 .zigrow-footer-3__headline-main {
          font-size: 2rem;
        }

        .zigrow-footer-3 .zigrow-footer-3__headline-sub {
          font-size: 1.8rem;
        }

        .zigrow-footer-3 .zigrow-footer-3__benefits {
          gap: 1rem;
        }
      }
    </style>
    </footer>`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-footer-4", {
  name: "Footer-4",
  category: "footer",
  image:
    "https://i.postimg.cc/jd4cWW23/Screenshot-2026-07-22-162708.png",
  html: `
<footer
  id="zigrow-footer-4"
  class="zigrow-footer-4"
  data-section="zigrow-footer-4"
>
  <div class="zigrow-footer-4-main">
    <div class="container">
      <div class="zigrow-footer-4-newsletter">
        <h2 class="no-theme-size zigrow-footer-4-newsletter-title">
          Sign up for our newsletter
        </h2>

        <form
          action="https://api.zigrow.com/api/forms/submit"
          method="post"
          data-zigrow-form
          class="zigrow-footer-4-newsletter-form"
        >
          <input type="hidden" name="domain" value="" />
          <input type="hidden" name="form_key" value="newsletter" />
          <input type="hidden" name="page_url" value="" />
          <input type="hidden" name="_company" value="" />

          <div form-question-zigrow>
            <label>Email Address</label>

            <div class="zigrow-footer-4-email-control">
              <input
                type="email"
                name="newsletter_email"
                placeholder="Enter your email address"
                required
                maxlength="254"
                autocomplete="email"
                title="Please enter a valid email address."
              />

              <button type="submit" class="zigrow-footer-4-submit-button" >
                <span>Subscribe</span>

                <span class="zigrow-footer-4-submit-icon">
                  <i class="bi bi-send" data-icon="send"></i>
                </span>
              </button>
            </div>
          </div>

          <div form-question-zigrow>
            <label class="zigrow-footer-4-consent">
              <input
                type="checkbox"
                name="privacy_consent"
                value="accepted"
                required
              />

              <span>
                I agree to the
                <a href="#privacy">Privacy Policy</a>
              </span>
            </label>
          </div>
        </form>
      </div>

      <div class="row zigrow-footer-4-content-row">
        <div class="col-12 col-lg-5">
          <div class="zigrow-footer-4-brand">
            <div class="zigrow-footer-4-logo" data-logo="footer">
              <h3>YOUR BRAND</h3>
            </div>

            <p class="zigrow-footer-4-brand-description">
              We provide thoughtful services and dependable experiences
              designed to help customers feel supported, confident, and
              connected.
            </p>

            <div class="zigrow-footer-4-social-icons">
              <a href="#" aria-label="Facebook">
                <i class="bi bi-facebook" data-icon="facebook"></i>
              </a>

              <a href="#" aria-label="Twitter">
                <i class="bi bi-twitter-x" data-icon="twitter-x"></i>
              </a>

              <a href="#" aria-label="Pinterest">
                <i class="bi bi-pinterest" data-icon="pinterest"></i>
              </a>

              <a href="#" aria-label="YouTube">
                <i class="bi bi-youtube" data-icon="youtube"></i>
              </a>

              <a href="#" aria-label="Instagram">
                <i class="bi bi-instagram" data-icon="instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="zigrow-footer-4-contact">
            <h3 class="zigrow-footer-4-column-title">Reach Out</h3>

            <ul class="zigrow-footer-4-contact-list">
              <li>
                <span>Email:</span>

                <a
                  href="mailto:yourname@domainname.com"
                >
                  yourname@domainname.com
                </a>
              </li>

              <li>
                <span>Telephone:</span>

                <a href="tel:+919123456789">
                  +91-9123456789
                </a>
              </li>

              <li>
                <span>Address:</span>

                <a href="#location">
                  E-123, ABC Plaza, XYZ Street, New Delhi - 110077
                </a>
              </li>
            </ul>

            <div class="zigrow-footer-4-direction-wrap">
              <a
                href="#location"
                class="zigrow-footer-4-direction"
                
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <nav
            class="zigrow-footer-4-navigation"
            aria-label="Footer navigation"
          >
            <h3 class="zigrow-footer-4-column-title">Navigate</h3>

            <ul class="zigrow-footer-4-navigation-list">
              <li>
                <a href="#about">About Us</a>
              </li>

              <li>
                <a href="#services">Our Services</a>
              </li>

              <li>
                <a href="#portfolio">Recent Work</a>
              </li>

              <li>
                <a href="#team">Our Team</a>
              </li>

              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div class="zigrow-footer-4-bottom">
    <div class="container">
      <div class="zigrow-footer-4-bottom-layout">
        <div class="zigrow-footer-4-copyright">
          <p>
            © 2026 Your Brand. All rights reserved.
          </p>

          <a
            href="https://zigrow.com"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            Powered by Zigrow
          </a>
        </div>

        <nav
          class="zigrow-footer-4-legal-navigation"
          aria-label="Legal navigation"
        >
          <ul>
            <li>
              <a href="#privacy">Privacy</a>
            </li>

            <li>
              <a href="#terms">Terms of Use</a>
            </li>

            <li>
              <a href="#policy">Policy</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <style>
    .zigrow-footer-4 {
      width: 100%;
      overflow: hidden;
      color: #ffffff;
      background: linear-gradient(
          90deg,
          rgba(17, 20, 17, 0.78),
          rgba(17, 20, 17, 0.58) 48%,
          rgba(17, 20, 17, 0.72)
        ),
        linear-gradient(
          180deg,
          rgba(17, 20, 17, 0.22),
          rgba(17, 20, 17, 0.72)
        ),
        url("https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=85&fm=webp")
          center center / cover no-repeat;
    }

    .zigrow-footer-4 .zigrow-footer-4-main {
      position: relative;
      padding: clamp(3.5rem, 7vw, 6rem) 0 clamp(3rem, 6vw, 5rem);
      background: transparent;
    }

    .zigrow-footer-4 .zigrow-footer-4-newsletter {
      max-width: 100%;
      padding-bottom: clamp(2.5rem, 5vw, 4rem);
      border-bottom: 1px solid rgba(255, 255, 255, 0.28);
    }

    .zigrow-footer-4 .zigrow-footer-4-newsletter-title {
      margin: 0 0 clamp(1.5rem, 3vw, 2.5rem);
      color: #ffffff;
      font-size: clamp(2rem, 3.6vw, 3.4rem);
      font-weight: 400;
      line-height: 1.12;
      letter-spacing: -0.035em;
    }

    .zigrow-footer-4 .zigrow-footer-4-newsletter-form {
      display: grid;
      gap: 1rem;
    }

    .zigrow-footer-4
      .zigrow-footer-4-newsletter-form
      div[form-question-zigrow] {
      display: grid;
      gap: 0.5rem;
    }

    .zigrow-footer-4 .zigrow-footer-4-newsletter-form label {
      margin: 0;
      color: rgba(255, 255, 255, 0.68);
      font-size: 0.72rem;
      line-height: 1.4;
    }

    .zigrow-footer-4 .zigrow-footer-4-email-control {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 1rem;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.72);
    }

    .zigrow-footer-4 .zigrow-footer-4-email-control input {
      width: 100%;
      min-height: 3.2rem;
      padding: 0.65rem 0;
      border: 0;
      outline: none;
      background: transparent;
      color: #ffffff;
      font-size: 0.95rem;
      line-height: 1.4;
    }

    .zigrow-footer-4
      .zigrow-footer-4-email-control
      input::placeholder {
      color: rgba(255, 255, 255, 0.58);
    }

    .zigrow-footer-4 .zigrow-footer-4-email-control input:focus {
      box-shadow: none;
    }

    .zigrow-footer-4 .zigrow-footer-4-email-control button {
      display: grid;
      grid-template-columns: auto auto;
      gap: 0.55rem;
      align-items: center;
      min-height: 2.8rem;
      padding: 0.5rem 0;
      border: 0;
      background: transparent;
      color: #ffffff;
      font-size: 0.78rem;
      font-weight: 500;
      line-height: 1;
      cursor: pointer;
      transition:
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-footer-4 .zigrow-footer-4-email-control button:hover {
      color: var(--primary-colors, #d8b976);
      transform: translateX(0.15rem);
    }

    .zigrow-footer-4 .zigrow-footer-4-submit-icon {
      display: grid;
      place-items: center;
      width: 1rem;
      height: 1rem;
    }

    .zigrow-footer-4 .zigrow-footer-4-submit-icon i {
      font-size: 0.85rem;
      line-height: 1;
    }

    .zigrow-footer-4 .zigrow-footer-4-consent {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 0.65rem;
      align-items: center;
      width: max-content;
      max-width: 100%;
      cursor: pointer;
    }

    .zigrow-footer-4 .zigrow-footer-4-consent input {
      width: 0.85rem;
      height: 0.85rem;
      margin: 0;
      accent-color: var(--primary-colors, #d8b976);
    }

    .zigrow-footer-4 .zigrow-footer-4-consent a {
      color: #ffffff;
      text-decoration: none;
      transition: color 0.25s ease;
    }

    .zigrow-footer-4 .zigrow-footer-4-consent a:hover {
      color: var(--primary-colors, #d8b976);
    }

    .zigrow-footer-4 .zigrow-footer-4-content-row {
      row-gap: 2.5rem;
      padding-top: clamp(2.5rem, 5vw, 4rem);
    }

    .zigrow-footer-4 .zigrow-footer-4-brand {
      max-width: 34rem;
    }

    .zigrow-footer-4 .zigrow-footer-4-logo {
      width: max-content;
      max-width: 100%;
    }

    .zigrow-footer-4 .zigrow-footer-4-logo h3 {
      margin: 0;
      color: #ffffff;
      font-size: clamp(1.7rem, 2.5vw, 2.25rem);
      font-weight: 400;
      line-height: 1;
      letter-spacing: 0.08em;
    }

    .zigrow-footer-4 .zigrow-footer-4-brand-description {
      max-width: 31rem;
      margin: 1.25rem 0 0;
      color: rgba(255, 255, 255, 0.76);
      font-size: clamp(0.82rem, 1vw, 0.92rem);
      line-height: 1.75;
    }

    .zigrow-footer-4 .zigrow-footer-4-social-icons {
      display: flex;
      flex-wrap:wrap;
      flex-direction: row;
      gap: 0.65rem;
      margin-top: 1.5rem;
    }

    .zigrow-footer-4 .zigrow-footer-4-social-icons a {
      display: grid;
      place-items: center;
      width: 2rem;
      height: 2rem;
      border: 1px solid transparent;
      border-radius: 50%;
      color: #ffffff;
      text-decoration: none;
      transition:
        color 0.25s ease,
        border-color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-footer-4 .zigrow-footer-4-social-icons a:hover {
      color: var(--primary-colors, #d8b976);
      border-color: rgba(255, 255, 255, 0.38);
      transform: translateY(-0.2rem);
    }

    .zigrow-footer-4 .zigrow-footer-4-social-icons i {
      font-size: 0.95rem;
      line-height: 1;
    }

    .zigrow-footer-4 .zigrow-footer-4-column-title {
      margin: 0 0 1.35rem;
      color: #ffffff;
      font-size: clamp(1.3rem, 2vw, 1.75rem);
      font-weight: 400;
      line-height: 1.2;
    }

    .zigrow-footer-4 .zigrow-footer-4-contact-list,
    .zigrow-footer-4 .zigrow-footer-4-navigation-list {
      display: grid;
      gap: 0.7rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .zigrow-footer-4 .zigrow-footer-4-contact-list li {
      color: rgba(255, 255, 255, 0.72);
      font-size: 0.78rem;
      line-height: 1.55;
    }

    .zigrow-footer-4 .zigrow-footer-4-contact-list li span {
      margin-right: 0.25rem;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 600;
    }

    .zigrow-footer-4 .zigrow-footer-4-contact-list a,
    .zigrow-footer-4 .zigrow-footer-4-navigation-list a {
      color: rgba(255, 255, 255, 0.72);
      text-decoration: none;
      overflow-wrap: anywhere;
      transition:
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-footer-4 .zigrow-footer-4-contact-list a:hover,
    .zigrow-footer-4 .zigrow-footer-4-navigation-list a:hover {
      color: var(--primary-colors, #d8b976);
    }

    .zigrow-footer-4 .zigrow-footer-4-direction-wrap {
      display: inline-flex;
      margin-top: 1.25rem;
    }

    .zigrow-footer-4 .zigrow-footer-4-direction {
      display: inline-flex;
      align-items: center;
      width: auto;
      max-width: max-content;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.62);
      color: #ffffff;
      font-size: 0.68rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.08em;
      text-decoration: none;
      text-transform: uppercase;
      transition:
        color 0.25s ease,
        border-color 0.25s ease;
    }

    .zigrow-footer-4 .zigrow-footer-4-direction:hover {
      border-color: var(--primary-colors, #d8b976);
      color: var(--primary-colors, #d8b976);
    }

    .zigrow-footer-4 .zigrow-footer-4-navigation-list a {
      display: inline-block;
      font-size: 0.8rem;
      line-height: 1.4;
    }

    .zigrow-footer-4 .zigrow-footer-4-bottom {
      padding: 1.6rem 0;
      background: #101010;
    }

    .zigrow-footer-4 .zigrow-footer-4-bottom-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 2rem;
      align-items: center;
    }

    .zigrow-footer-4 .zigrow-footer-4-copyright {
      display: grid;
      grid-template-columns: auto auto;
      gap: 1rem;
      align-items: center;
      width: max-content;
      max-width: 100%;
    }

    .zigrow-footer-4 .zigrow-footer-4-copyright p {
      margin: 0;
      color: rgba(255, 255, 255, 0.62);
      font-size: 0.68rem;
      line-height: 1.4;
    }

    .zigrow-footer-4 .zigrow-footer-4-copyright a {
      color: rgba(255, 255, 255, 0.76);
      font-size: 0.68rem;
      line-height: 1.4;
      text-decoration: none;
      transition: color 0.25s ease;
    }

    .zigrow-footer-4 .zigrow-footer-4-copyright a:hover {
      color: var(--primary-colors, #d8b976);
    }

    .zigrow-footer-4 .zigrow-footer-4-legal-navigation ul {
      display: grid;
      grid-template-columns: repeat(3, max-content);
      gap: clamp(1rem, 2.5vw, 2.5rem);
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .zigrow-footer-4 .zigrow-footer-4-legal-navigation a {
      color: rgba(255, 255, 255, 0.68);
      font-size: 0.65rem;
      font-weight: 500;
      line-height: 1;
      letter-spacing: 0.04em;
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.25s ease;
    }

    .zigrow-footer-4 .zigrow-footer-4-legal-navigation a:hover {
      color: var(--primary-colors, #d8b976);
    }

    @media (max-width: 991px) {
      .zigrow-footer-4 .zigrow-footer-4-main {
        background-position: center;
      }

      .zigrow-footer-4 .zigrow-footer-4-bottom-layout {
        grid-template-columns: 1fr;
      }

      .zigrow-footer-4 .zigrow-footer-4-legal-navigation {
        justify-self: start;
      }
    }

    @media (max-width: 767px) {
      .zigrow-footer-4 .zigrow-footer-4-main {
        padding: 3rem 0;
      }

      .zigrow-footer-4 .zigrow-footer-4-email-control {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .zigrow-footer-4 .zigrow-footer-4-email-control button {
        justify-self: start;
        padding-bottom: 0.8rem;
      }

      .zigrow-footer-4 .zigrow-footer-4-copyright {
        grid-template-columns: 1fr;
        gap: 0.35rem;
      }
    }

    @media (max-width: 479px) {
      .zigrow-footer-4 .zigrow-footer-4-newsletter-title {
        font-size: clamp(2rem, 11vw, 2.8rem);
      }

      .zigrow-footer-4 .zigrow-footer-4-social-icons {
        grid-template-columns: repeat(5, 1.8rem);
      }

      .zigrow-footer-4 .zigrow-footer-4-social-icons a {
        width: 1.8rem;
        height: 1.8rem;
      }

      .zigrow-footer-4 .zigrow-footer-4-legal-navigation ul {
        grid-template-columns: 1fr;
        gap: 0.8rem;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-footer-4 .zigrow-footer-4-email-control,
    .zigrow-footer-4 .zigrow-footer-4-direction-wrap {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .zigrow-footer-4 .zigrow-footer-4-email-control input {
      flex: 1 1 auto;
      min-width: 0;
    }
  </style>
</footer>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-footer-5", {
  name: "Footer-5",
  category: "footer",
  image:
    "https://i.postimg.cc/15QM50mX/Screenshot-2026-07-22-162748.png",

  html: `
<footer
  id="zigrow-footer-5"
  data-section="zigrow-footer-5"
  class="zigrow-footer-5"
>
  <div class="zigrow-footer-5-main">
    <div class="zigrow-footer-5-container">
      <div class="zigrow-footer-5-layout">
        <div class="zigrow-footer-5-intro">
          <p class="zigrow-footer-5-intro-text">
            BASED IN INDIA &amp;<br />
            SERVING CLIENTS<br />
            WORLDWIDE
          </p>
        </div>

        <div class="zigrow-footer-5-logo-wrap">
          <a
            href="#home"
            class="zigrow-footer-5-logo"
            data-logo="true"
            aria-label="Go to homepage"
          >
            <span class="zigrow-footer-5-logo-letter zigrow-footer-5-logo-letter-l">
              L
            </span>

            <span class="zigrow-footer-5-logo-letter zigrow-footer-5-logo-letter-b">
              B
            </span>
          </a>
        </div>

        <div class="zigrow-footer-5-links-area">
          <div class="zigrow-footer-5-socials">
            <a
              href="https://www.instagram.com/"
              class="zigrow-footer-5-social-link"
              aria-label="Visit our Instagram profile"
            >
              <i
                class="bi bi-instagram"
                data-icon="instagram"
              ></i>
            </a>

            <a
              href="https://www.youtube.com/"
              class="zigrow-footer-5-social-link"
              aria-label="Visit our YouTube channel"
            >
              <i
                class="bi bi-youtube"
                data-icon="youtube"
              ></i>
            </a>
          </div>

          <nav
            class="zigrow-footer-5-navigation"
            aria-label="Footer navigation"
          >
            <a href="#services">Services</a>
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-and-conditions">Terms &amp; Conditions</a>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div
    class="zigrow-footer-5-bottom"

  >
    <div class="zigrow-footer-5-bottom-container">
      <p>
        © 2026 LB Studio. All rights reserved.
      </p>

      <p>
        Thoughtful solutions for modern businesses.
      </p>
    </div>
  </div>

  <style>
    .zigrow-footer-5 {
      width: 100%;
      overflow: hidden;
      background: #ffffff;
    }

    .zigrow-footer-5 .zigrow-footer-5-main {
      background: color-mix(
        in srgb,
        var(--primary-colors, #5f675d) 4%,
        #ffffff 96%
      );
    }

    .zigrow-footer-5 .zigrow-footer-5-container {
      width: min(100% - 48px, 1120px);
      margin: 0 auto;
    }

    .zigrow-footer-5 .zigrow-footer-5-layout {
      display: grid;
      grid-template-columns: minmax(190px, 1fr) minmax(180px, 0.7fr) minmax(
          190px,
          1fr
        );
      gap: 48px;
      align-items: center;
      min-height: 245px;
      padding: 32px 0;
    }

    .zigrow-footer-5 .zigrow-footer-5-intro {
      display: grid;
      justify-content: center;
    }

    .zigrow-footer-5 .zigrow-footer-5-intro-text {
      margin: 0;
      color: var(--secondary-colors, #5e625e);
      font-size: 0.77rem;
      font-weight: 500;
      letter-spacing: 0.22em;
      line-height: 1.55;
      text-align: center;
    }

    .zigrow-footer-5 .zigrow-footer-5-logo-wrap {
      display: grid;
      place-items: center;
    }

    .zigrow-footer-5 .zigrow-footer-5-logo {
      position: relative;
      display: block;
      width: 112px;
      height: 138px;
      color: color-mix(
        in srgb,
        var(--primary-colors, #111111) 86%,
        #000000 14%
      );
      text-decoration: none;
    }

    .zigrow-footer-5 .zigrow-footer-5-logo-letter {
      position: absolute;
      display: block;
      font-size: 6.8rem;
      font-weight: 500;
      letter-spacing: -0.14em;
      line-height: 1;
    }

    .zigrow-footer-5 .zigrow-footer-5-logo-letter-l {
      top: 0;
      left: 0;
      z-index: 2;
    }

    .zigrow-footer-5 .zigrow-footer-5-logo-letter-b {
      right: 2px;
      bottom: 0;
      z-index: 3;
    }

  

    .zigrow-footer-5 .zigrow-footer-5-links-area {
      display: grid;
      gap: 18px;
      justify-content: center;
      text-align: center;
    }

    .zigrow-footer-5 .zigrow-footer-5-socials {
      display: grid;
      grid-auto-flow: column;
      gap: 12px;
      justify-content: center;
    }

    .zigrow-footer-5 .zigrow-footer-5-social-link {
      display: grid;
      width: 28px;
      height: 28px;
      place-items: center;
      border-radius: 50%;
      color: var(--primary-colors, #222222);
      font-size: 0.9rem;
      line-height: 1;
      text-decoration: none;
      transition:
        background-color 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-footer-5 .zigrow-footer-5-social-link:hover {
      transform: translateY(-2px);
      background: var(--primary-colors, #222222);
      color: #ffffff;
    }

    .zigrow-footer-5 .zigrow-footer-5-navigation {
      display: grid;
      gap: 5px;
      justify-items: center;
    }

    .zigrow-footer-5 .zigrow-footer-5-navigation a {
      width: max-content;
      color: var(--secondary-colors, #666b66);
      font-size: 0.7rem;
      line-height: 1.35;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 2px;
      transition: color 0.25s ease;
    }

    .zigrow-footer-5 .zigrow-footer-5-navigation a:hover {
      color: var(--primary-colors, #222222);
    }

    .zigrow-footer-5 .zigrow-footer-5-bottom {
      min-height: 58px;
      background: var(--territory-colors, #afb4ad);
    }

    .zigrow-footer-5 .zigrow-footer-5-bottom-container {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 30px;
      align-items: center;
      justify-content: space-between;
      width: min(100% - 48px, 1120px);
      min-height: 58px;
      margin: 0 auto;
    }

    .zigrow-footer-5 .zigrow-footer-5-bottom-container p {
      margin: 0;
      color: color-mix(
        in srgb,
        var(--primary-colors, #222222) 74%,
        #ffffff 26%
      );
      font-size: 0.65rem;
      line-height: 1.4;
    }

    @media (max-width: 767px) {
      .zigrow-footer-5 .zigrow-footer-5-container {
        width: min(100% - 32px, 1120px);
      }

      .zigrow-footer-5 .zigrow-footer-5-layout {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 36px;
        padding: 48px 0;
      }

      .zigrow-footer-5 .zigrow-footer-5-logo-wrap {
        grid-column: 1 / -1;
        grid-row: 1;
      }

      .zigrow-footer-5 .zigrow-footer-5-intro {
        grid-column: 1;
        grid-row: 2;
      }

      .zigrow-footer-5 .zigrow-footer-5-links-area {
        grid-column: 2;
        grid-row: 2;
      }

      .zigrow-footer-5 .zigrow-footer-5-bottom-container {
        width: min(100% - 32px, 1120px);
      }
    }

    @media (max-width: 480px) {
      .zigrow-footer-5 .zigrow-footer-5-container {
        width: min(100% - 24px, 1120px);
      }

      .zigrow-footer-5 .zigrow-footer-5-layout {
        grid-template-columns: 1fr;
        gap: 34px;
        padding: 42px 0;
      }

      .zigrow-footer-5 .zigrow-footer-5-logo-wrap,
      .zigrow-footer-5 .zigrow-footer-5-intro,
      .zigrow-footer-5 .zigrow-footer-5-links-area {
        grid-column: 1;
        grid-row: auto;
      }

      .zigrow-footer-5 .zigrow-footer-5-logo-wrap {
        grid-row: 1;
      }

      .zigrow-footer-5 .zigrow-footer-5-intro {
        grid-row: 2;
      }

      .zigrow-footer-5 .zigrow-footer-5-links-area {
        grid-row: 3;
      }

      .zigrow-footer-5 .zigrow-footer-5-bottom-container {
        grid-template-columns: 1fr;
        gap: 5px;
        justify-items: center;
        width: min(100% - 24px, 1120px);
        padding: 16px 0;
        text-align: center;
      }
    }
  </style>
</footer>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-footer-6", {
  name: "Footer-6",
  category: "footer",
  image:
    "https://i.postimg.cc/LsK8rskb/Screenshot-2026-07-22-162814.png",
  html: `
<footer
  id="zigrow-footer-6"
  class="zigrow-footer-6"
  data-section="zigrow-footer-6"
>
  <div class="zigrow-footer-6-main">
    <span class="zigrow-footer-6-overlay" aria-hidden="true"></span>

    <div class="container">
      <div class="zigrow-footer-6-navigation-layout">
        <nav
          class="zigrow-footer-6-navigation zigrow-footer-6-navigation-left"
          aria-label="Primary footer navigation"
        >
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#offers">Offers</a>
            </li>

            <li>
              <a href="#portfolio">Recent Work</a>
            </li>
          </ul>
        </nav>

        <div class="zigrow-footer-6-logo" data-logo="footer">
          <h2>EVERGREEN</h2>
        </div>

        <nav
          class="zigrow-footer-6-navigation zigrow-footer-6-navigation-right"
          aria-label="Secondary footer navigation"
        >
          <ul>
            <li>
              <a href="#about">Why Choose Us</a>
            </li>

            <li>
              <a href="#testimonials">Testimonials</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="zigrow-footer-6-center-content">
        <p class="zigrow-footer-6-eyebrow">Built Around Your Goals</p>

        <h3 class="zigrow-footer-6-heading">
          Thoughtful solutions for meaningful growth
        </h3>

        <p class="zigrow-footer-6-description">
          Explore dependable services, practical ideas, and professional
          support designed to help your business move forward.
        </p>

        <div class="zigrow-footer-6-button-wrap">
          <a
            href="#contact"
            class="zigrow-footer-6-button"
            data-btn="footer"
          >
            <span>Start a Conversation</span>

            <span class="zigrow-footer-6-button-icon">
              <i
                class="bi bi-arrow-up-right"
                data-icon="arrow-up-right"
              ></i>
            </span>
          </a>
        </div>
      </div>

      <div class="zigrow-footer-6-brand-display" aria-hidden="true">
        <p>EVERGREEN</p>
      </div>

      <div class="zigrow-footer-6-bottom">
        <div class="zigrow-footer-6-copyright">
          <p>© 2026 Evergreen. All rights reserved.</p>

          <a
            href="https://zigrow.com"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            Powered by Zigrow
          </a>
        </div>

        <nav
          class="zigrow-footer-6-legal-navigation"
          aria-label="Legal navigation"
        >
          <ul>
            <li>
              <a href="#privacy">Privacy</a>
            </li>

            <li>
              <a href="#terms">Terms</a>
            </li>

            <li>
              <a href="#policy">Policy</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <style>
    .zigrow-footer-6 {
      width: 100%;
      overflow: hidden;
      background: linear-gradient(
          180deg,
          rgba(2, 18, 17, 0.42) 0%,
          rgba(2, 18, 17, 0.52) 48%,
          rgba(2, 18, 17, 0.94) 100%
        ),
        url("https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=88&fm=webp")
          center center / cover no-repeat;
    }

    .zigrow-footer-6 .zigrow-footer-6-main {
      position: relative;
      min-height: clamp(38rem, 68vw, 54rem);
      padding: clamp(2rem, 4vw, 3.5rem) 0 1.5rem;
      background: transparent;
    }

    .zigrow-footer-6 .zigrow-footer-6-main::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        radial-gradient(
          circle at 51% 48%,
          rgba(126, 177, 68, 0.2),
          transparent 28%
        ),
        linear-gradient(
          90deg,
          rgba(0, 8, 8, 0.54),
          transparent 38%,
          transparent 62%,
          rgba(0, 8, 8, 0.54)
        );
      pointer-events: none;
    }

    .zigrow-footer-6 .zigrow-footer-6-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 15, 15, 0.16);
      pointer-events: none;
    }

    .zigrow-footer-6 .container {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-rows: auto minmax(13rem, 1fr) auto auto;
      min-height: clamp(34rem, 62vw, 49rem);
    }

    .zigrow-footer-6 .zigrow-footer-6-navigation-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
      gap: clamp(1.5rem, 4vw, 4rem);
      align-items: center;
    }

    .zigrow-footer-6 .zigrow-footer-6-navigation ul {
      display: grid;
      grid-template-columns: repeat(3, max-content);
      gap: clamp(1rem, 2.3vw, 2.4rem);
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .zigrow-footer-6 .zigrow-footer-6-navigation-right ul {
      justify-content: end;
    }

    .zigrow-footer-6 .zigrow-footer-6-navigation a {
      display: inline-block;
      color: rgba(255, 255, 255, 0.74);
      font-size: clamp(0.6rem, 0.8vw, 0.72rem);
      font-weight: 500;
      line-height: 1;
      letter-spacing: 0.04em;
      text-decoration: none;
      text-transform: uppercase;
      white-space: nowrap;
      transition:
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-footer-6 .zigrow-footer-6-navigation a:hover {
      color: var(--primary-colors, #9dd85f);
      transform: translateY(-0.15rem);
    }

    .zigrow-footer-6 .zigrow-footer-6-logo {
      text-align: center;
    }

    .zigrow-footer-6 .zigrow-footer-6-logo h2 {
      margin: 0;
      color: #ffffff;
      font-size: clamp(1.5rem, 2.7vw, 2.4rem);
      font-weight: 400;
      line-height: 1;
      letter-spacing: 0.04em;
    }

    .zigrow-footer-6 .zigrow-footer-6-center-content {
      align-self: center;
      justify-self: center;
      max-width: 39rem;
      padding: 3rem 1rem;
      text-align: center;
      opacity: 0;
      transition: opacity 0.35s ease;
    }

    .zigrow-footer-6:hover .zigrow-footer-6-center-content,
    .zigrow-footer-6:focus-within .zigrow-footer-6-center-content {
      opacity: 1;
    }

    .zigrow-footer-6 .zigrow-footer-6-eyebrow {
      margin: 0 0 0.8rem;
      color: var(--primary-colors, #9dd85f);
      font-size: 0.7rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .zigrow-footer-6 .zigrow-footer-6-heading {
      margin: 0;
      color: #ffffff;
      font-size: clamp(2rem, 4vw, 3.8rem);
      font-weight: 400;
      line-height: 1.1;
      letter-spacing: -0.035em;
    }

    .zigrow-footer-6 .zigrow-footer-6-description {
      max-width: 34rem;
      margin: 1rem auto 0;
      color: rgba(255, 255, 255, 0.72);
      font-size: clamp(0.88rem, 1.15vw, 1rem);
      line-height: 1.65;
    }

    .zigrow-footer-6 .zigrow-footer-6-button-wrap {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content:center;
      margin-top: 1.5rem;
    }

    .zigrow-footer-6 .zigrow-footer-6-button {
      display: grid;
      grid-template-columns: auto auto;
      gap: 0.7rem;
      align-items: center;
      width: max-content;
      padding: 0.75rem 0.85rem 0.75rem 1.2rem;
      border: 1px solid rgba(255, 255, 255, 0.52);
      border-radius: 999px;
      background: rgba(0, 17, 16, 0.42);
      color: #ffffff;
      font-size: 0.72rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.04em;
      text-decoration: none;
      text-transform: uppercase;
      backdrop-filter: blur(8px);
      transition:
        background 0.25s ease,
        border-color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-footer-6 .zigrow-footer-6-button:hover {
      transform: translateY(-0.2rem);
      border-color: var(--primary-colors, #9dd85f);
      background: var(--primary-colors, #9dd85f);
    }

    .zigrow-footer-6 .zigrow-footer-6-button-icon {
      display: grid;
      place-items: center;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      background: #ffffff;
      color: #10201c;
    }

    .zigrow-footer-6 .zigrow-footer-6-button-icon i {
      font-size: 0.8rem;
      line-height: 1;
    }

    .zigrow-footer-6 .zigrow-footer-6-brand-display {
      align-self: end;
      width: 100%;
      overflow: hidden;
      text-align: center;
    }

    .zigrow-footer-6 .zigrow-footer-6-brand-display p {
      margin: 0;
      color: rgba(220, 229, 224, 0.2);
      font-size: clamp(5.5rem, 18vw, 18rem);
      font-weight: 400;
      line-height: 0.72;
      letter-spacing: -0.055em;
      white-space: nowrap;
    }

    .zigrow-footer-6 .zigrow-footer-6-bottom {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 2rem;
      align-items: center;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
    }

    .zigrow-footer-6 .zigrow-footer-6-copyright {
      display: grid;
      grid-template-columns: auto auto;
      gap: 0.8rem;
      align-items: center;
      width: max-content;
      max-width: 100%;
    }

    .zigrow-footer-6 .zigrow-footer-6-copyright p {
      margin: 0;
      color: rgba(255, 255, 255, 0.62);
      font-size: 0.65rem;
      line-height: 1.4;
    }

    .zigrow-footer-6 .zigrow-footer-6-copyright a {
      color: rgba(255, 255, 255, 0.75);
      font-size: 0.65rem;
      line-height: 1.4;
      text-decoration: none;
      transition: color 0.25s ease;
    }

    .zigrow-footer-6 .zigrow-footer-6-copyright a:hover {
      color: var(--primary-colors, #9dd85f);
    }

    .zigrow-footer-6 .zigrow-footer-6-legal-navigation ul {
      display: grid;
      grid-template-columns: repeat(3, max-content);
      gap: clamp(1rem, 2vw, 2rem);
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .zigrow-footer-6 .zigrow-footer-6-legal-navigation a {
      color: rgba(255, 255, 255, 0.62);
      font-size: 0.62rem;
      font-weight: 500;
      line-height: 1;
      letter-spacing: 0.05em;
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.25s ease;
    }

    .zigrow-footer-6 .zigrow-footer-6-legal-navigation a:hover {
      color: var(--primary-colors, #9dd85f);
    }

    @media (max-width: 1199px) {
      .zigrow-footer-6 .zigrow-footer-6-navigation-layout {
        gap: 2rem;
      }

      .zigrow-footer-6 .zigrow-footer-6-navigation ul {
        gap: 1.2rem;
      }
    }

    @media (max-width: 991px) {
      .zigrow-footer-6 .zigrow-footer-6-navigation-layout {
        grid-template-columns: 1fr;
        justify-items: center;
      }

      .zigrow-footer-6 .zigrow-footer-6-logo {
        grid-row: 1;
      }

      .zigrow-footer-6 .zigrow-footer-6-navigation-left {
        grid-row: 2;
      }

      .zigrow-footer-6 .zigrow-footer-6-navigation-right {
        grid-row: 3;
      }

      .zigrow-footer-6 .zigrow-footer-6-navigation ul,
      .zigrow-footer-6 .zigrow-footer-6-navigation-right ul {
        justify-content: center;
      }

      .zigrow-footer-6 .zigrow-footer-6-center-content {
        opacity: 1;
      }

      .zigrow-footer-6 .zigrow-footer-6-brand-display p {
        font-size: clamp(6rem, 18vw, 11rem);
      }
    }

    @media (max-width: 767px) {
      .zigrow-footer-6 .zigrow-footer-6-main {
        min-height: auto;
        padding: 2.5rem 0 1.5rem;
      }

      .zigrow-footer-6 .container {
        min-height: auto;
      }

      .zigrow-footer-6 .zigrow-footer-6-navigation ul {
        grid-template-columns: repeat(3, max-content);
        gap: 0.9rem;
      }

      .zigrow-footer-6 .zigrow-footer-6-center-content {
        padding: 4rem 0.5rem;
      }

      .zigrow-footer-6 .zigrow-footer-6-bottom {
        grid-template-columns: 1fr;
      }

      .zigrow-footer-6 .zigrow-footer-6-legal-navigation {
        justify-self: start;
      }
    }

    @media (max-width: 575px) {
      .zigrow-footer-6 .zigrow-footer-6-navigation ul {
        grid-template-columns: 1fr;
        justify-items: center;
      }

      .zigrow-footer-6 .zigrow-footer-6-center-content {
        padding: 3.5rem 0;
      }

      .zigrow-footer-6 .zigrow-footer-6-brand-display p {
        font-size: clamp(4.7rem, 20vw, 7rem);
      }

      .zigrow-footer-6 .zigrow-footer-6-copyright {
        grid-template-columns: 1fr;
        gap: 0.3rem;
      }
    }

    @media (max-width: 479px) {
      .zigrow-footer-6 .zigrow-footer-6-heading {
        font-size: clamp(2rem, 11vw, 3rem);
      }

      .zigrow-footer-6 .zigrow-footer-6-button {
        width: 100%;
        grid-template-columns: minmax(0, 1fr) auto;
      }

      .zigrow-footer-6 .zigrow-footer-6-legal-navigation ul {
        grid-template-columns: 1fr;
        gap: 0.8rem;
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-footer-6 .zigrow-footer-6-button-wrap {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</footer>
`,
});


// Design
Vvveb.Blocks.add("bootstrap4/zigrow-design-3", {
    name: "design-1",
    category: "design",
    image: "https://i.postimg.cc/vH1QqC1V/design-1.png",

    html: `  <section class="zigrow-design-3 py-6" id="zigrow-design-3" data-section="zigrow-design-3">
      <!-- floating stars with icons -->
      <span class="zigrow-design-3__star zigrow-design-3__star--left">
        <i class="bi bi-star-fill" data-icon="star-left"></i>
      </span>
      <span class="zigrow-design-3__star zigrow-design-3__star--right">
        <i class="bi bi-star-fill" data-icon="star-right"></i>
      </span>
      <span class="zigrow-design-3__star zigrow-design-3__star--mid">
        <i class="bi bi-star-fill" data-icon="star-mid"></i>
      </span>

      <div class="container">
        <!-- MAIN TEXT ROW -->
        <div class="row">
          <div class="col-12">
            <div class="zigrow-design-3__content">
              <h1 class="zigrow-design-3__headline-main">Christmas Sale</h1>
              <h2 class="no-theme-size zigrow-design-3__headline-sub">50% OFF</h2>
              <p class="zigrow-design-3__subtext">
                Use coupon at checkout to get discount. Sale ends 03.01
              </p>

              <div class="zigrow-design-3__coupon-wrapper">
              
<a href="#" class="zigrow-design-3__coupon-link" data-btn="design">
  <span class="zigrow-design-3__coupon-icon">
    <i class="bi bi-ticket-perforated" data-icon="coupon"></i>
  </span>
  <span class="zigrow-design-3__coupon-text">BYEBYE2025</span>
</a>
              </div>
            </div>
          </div>
        </div>

        <!-- CARDS ROW (PRODUCT PREVIEW STYLE) -->
        <div class="row zigrow-design-3__cards-row">
          <div class="col-12">
            <div class="zigrow-design-3__cards-wrapper">
              <!-- Card 1 -->
           
<div class="zigrow-design-3__card zigrow-design-3__card--left">
  <div class="zigrow-design-3__card-image">
    <img
      src="/builder/img/zigrow-design-images/zigrow-design-1-1.webp"
      alt="Laptop on desk"
      class="zigrow-design-3__card-img"
    />
  </div>

  <div class="zigrow-design-3__card-inner">
    <p class="zigrow-design-3__card-text">Laptops & gadgets</p>
  </div>
</div>

              <!-- Card 2 -->
            
<div class="zigrow-design-3__card zigrow-design-3__card--mid">
  <div class="zigrow-design-3__card-image">
    <img
      src="/builder/img/zigrow-design-images/zigrow-design-1-2.webp"
      alt="Colorful holiday bundle"
      class="zigrow-design-3__card-img"
    />
  </div>

  <div class="zigrow-design-3__card-inner">
    <p class="zigrow-design-3__card-text">Holiday bundles</p>
  </div>
</div>

              <!-- Card 3 -->
           
<div class="zigrow-design-3__card zigrow-design-3__card--right">
  <div class="zigrow-design-3__card-image">
    <img
      src="/builder/img/zigrow-design-images/zigrow-design-1-3.webp"
      alt="Accessories on table"
      class="zigrow-design-3__card-img"
    />
  </div>

  <div class="zigrow-design-3__card-inner">
    <p class="zigrow-design-3__card-text">Colorful accessories</p>
  </div>
</div>

              <!-- Card 4 -->
         
<div class="zigrow-design-3__card zigrow-design-3__card--extra">
  <div class="zigrow-design-3__card-image">
    <img
      src="/builder/img/zigrow-design-images/zigrow-design-1-4.webp"
      alt="Gift boxes"
      class="zigrow-design-3__card-img"
    />
  </div>

  <div class="zigrow-design-3__card-inner">
    <p class="zigrow-design-3__card-text">Gift-ready deals</p>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
       <style>
      /* ====================================================
         CHRISTMAS SALE HERO
         (Bootstrap only for .container / .row / .col-*)
      =====================================================*/
   /* Replace with this */
.zigrow-design-3 {
  min-height: 100vh;
  background:
    radial-gradient(
      circle at 20% 0%,
      color-mix(in srgb, var(--primary-colors, #0e5b4e) 70%, transparent) 0%,
      transparent 55%
    ),
    radial-gradient(
      circle at 80% 0%,
      color-mix(in srgb, var(--tertiary-colors, var(--territory-colors, #0f6756)) 60%, transparent) 0%,
      transparent 55%
    ),
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--primary-colors, #0e5b4e) 70%, #000000 30%) 0%,
      color-mix(in srgb, var(--tertiary-colors, var(--territory-colors, #0f6756)) 60%, #000000 40%) 100%
    );
  background-size: cover;
  background-position: center;
  color: #fff7e6;

  position: relative;
  overflow: hidden;
}

      .py-6 {
        padding: 3rem 0;
      }

      /* Little floating stars */
      .zigrow-design-3 .zigrow-design-3__star {
        position: absolute;
        color: #ffe69c;
        font-size: 1.1rem;
      }

      .zigrow-design-3 .zigrow-design-3__star--left {
        top: 18%;
        left: 10%;
      }

      .zigrow-design-3 .zigrow-design-3__star--right {
        top: 10%;
        right: 12%;
      }

      .zigrow-design-3 .zigrow-design-3__star--mid {
        top: 40%;
        right: 6%;
      }

      /* ---------- MAIN CONTENT ---------- */
      .zigrow-design-3 .zigrow-design-3__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.2rem;
        margin-bottom: 3.5rem;
      }

      .zigrow-design-3 .zigrow-design-3__headline-main {
        font-size: 4rem;
        line-height: 1.1;
        font-weight: 600;
        letter-spacing: 0.02em;
        margin: 0;
        color: #ffe98a;
      }

      .zigrow-design-3 .zigrow-design-3__headline-sub {
        font-size: 3.4rem;
        line-height: 1.1;
        font-weight: 700;
        margin: 0;
        color: #ffe98a;
      }

      .zigrow-design-3 .zigrow-design-3__subtext {
        margin: 0.3rem 0 0;
        font-size: 0.95rem;
        color: var(--secondary-colors, #f4f4f4);
      }

      /* Coupon / CTA */
     /* Replace with this */
.zigrow-design-3 .zigrow-design-3__coupon-wrapper {
  margin-top: 1.2rem;
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

      .zigrow-design-3 .zigrow-design-3__coupon-link {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.75rem 2.3rem;
        border-radius: 999px;
        border: 1px dashed #ffe69c;
        background-color: rgba(0, 0, 0, 0.18);
        text-decoration: none;
        transition: background-color 0.15s ease, transform 0.15s ease,
          box-shadow 0.15s ease;
      }

      .zigrow-design-3 .zigrow-design-3__coupon-text{
        margin: 0;
        font-size: 0.95rem;
        font-weight: 600;
        letter-spacing: 0.15em;
        color: #f4f4f4;
        white-space: nowrap;
      }

      .zigrow-design-3 .zigrow-design-3__coupon-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .zigrow-design-3 .zigrow-design-3__coupon-icon i {
        font-size: 0.9rem;
        color: #ffe69c;
      }

      .zigrow-design-3 .zigrow-design-3__coupon-link:hover {
        background-color: rgba(0, 0, 0, 0.35);
        transform: translateY(-1px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.55);
      }

      /* ---------- BOTTOM CARDS ROW ---------- */
      .zigrow-design-3 .zigrow-design-3__cards-row {
        margin-top: 1rem;
      }

      .zigrow-design-3 .zigrow-design-3__cards-wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-end; /* align “bottom” nicely */
        gap: 1.5rem;
        flex-wrap: wrap;
      }

      .zigrow-design-3 .zigrow-design-3__card {
        text-align: center;
        width: 200px;
        height: 150px;
        border-radius: 18px;
        overflow: hidden;
        position: relative;
        background: #111827;
        box-shadow: 0 18px 35px rgba(0, 0, 0, 0.6);
        transform-origin: center bottom;
      }

    /* Replace with this */
.zigrow-design-3 .zigrow-design-3__card-image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

     /* Replace with this */
.zigrow-design-3 .zigrow-design-3__card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.zigrow-design-3 .zigrow-design-3__card-inner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 0.75rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.65),
    transparent 45%
  );
  z-index: 2;
  pointer-events: none;
}

.zigrow-design-3 .zigrow-design-3__card-text {
  position: relative;
  z-index: 3;
  pointer-events: auto;
  cursor: text;
}

    .zigrow-design-3 .zigrow-design-3__card-text {
  position: relative;
  z-index: 3;
  pointer-events: auto;
  cursor: text;
  margin: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: #f9fafb;
}
      /* Fan-style rotations (desktop / tablet) */
      .zigrow-design-3 .zigrow-design-3__card--left {
        transform: rotate(-12deg) translateY(20px);
      }

      .zigrow-design-3 .zigrow-design-3__card--mid {
        transform: rotate(-4deg) translateY(10px);
      }

      .zigrow-design-3 .zigrow-design-3__card--right {
        transform: rotate(4deg) translateY(10px);
      }

      .zigrow-design-3 .zigrow-design-3__card--extra {
        transform: rotate(12deg) translateY(20px);
      }

      /* ---------- RESPONSIVE ---------- */
      @media (max-width: 991.98px) {
        .zigrow-design-3 {
          padding: 3rem 0 2.5rem;
        }

        .zigrow-design-3 .zigrow-design-3__headline-main {
          font-size: 2.4rem;
        }

        .zigrow-design-3 .zigrow-design-3__headline-sub {
          font-size: 2rem;
        }
      }

      @media (max-width: 575.98px) {
        .zigrow-design-3 .zigrow-design-3__headline-main {
          font-size: 2rem;
        }

        .zigrow-design-3 .zigrow-design-3__headline-sub {
          font-size: 1.7rem;
        }

        .zigrow-design-3 .zigrow-design-3__cards-wrapper {
          gap: 1rem;
        }

        .zigrow-design-3 .zigrow-design-3__card {
          width: 100%;
          max-width: 260px;
          height: 150px;
          margin: 0 auto;
        }

        /* On small screens, remove rotation so cards stack nicely */
        .zigrow-design-3 .zigrow-design-3__card--left,
        .zigrow-design-3 .zigrow-design-3__card--mid,
        .zigrow-design-3 .zigrow-design-3__card--right,
        .zigrow-design-3 .zigrow-design-3__card--extra {
          transform: translateY(0);
        }
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-design-2", {
    name: "design-2",
    category: "design",
    image: "https://i.postimg.cc/0268Wh67/design-2.png",
    html: ` <section class="zigrow-design-2 py-6" data-section="zigrow-design-2" id="zigrow-design-2">
      <!-- doodle icons -->
      <span class="zigrow-design-2__doodle zigrow-design-2__doodle--tl">
        <i class="bi bi-stars" data-icon="stars-tl"></i>
      </span>
      <span class="zigrow-design-2__doodle zigrow-design-2__doodle--tr">
        <i class="bi bi-bezier" data-icon="bezier-tr"></i>
      </span>
      <span class="zigrow-design-2__doodle zigrow-design-2__doodle--br">
        <i class="bi bi-stars" data-icon="stars-br"></i>
      </span>

      <div class="container">
        <div class="row zigrow-design-2__row">
          <!-- LEFT: EVENT IMAGE -->
          <div class="col-12 col-lg-6">
            <div class="zigrow-design-2__image-card">
              <div class="zigrow-design-2__image-inner">
                <img
                 src="/builder/img/zigrow-design-images/zigrow-design-2-1.webp"
                  alt="Conference audience"
                  class="zigrow-design-2__image"
                />
              </div>
            </div>
          </div>

          <!-- RIGHT: TEXT + STRIP -->
          <div class="col-12 col-lg-6">
            <div class="zigrow-design-2__content">
              <p class="zigrow-design-2__eyebrow">TechXperience 2025</p>

              <h1 class="zigrow-design-2__title-line">
                Fuel
                <span class="zigrow-design-2__title-highlight">Innovation</span>,
              </h1>
              <h1 class="zigrow-design-2__title-line">Spark Connection</h1>

              <p class="zigrow-design-2__description">
                Discover breakthrough ideas, connect with experts, and unlock
                the future of technology at the most immersive digital
                experience of the year.
              </p>

              <!-- TICKET STRIP -->
              <div class="zigrow-design-2__ticket-strip" data-zg-editable="surface">
                <div class="zigrow-design-2__ticket-info">
                  <h3 class="zigrow-design-2__ticket-title">
                    Unleashing the Power of Change
                  </h3>

                  <div class="zigrow-design-2__meta-row">
                    <p class="zigrow-design-2__meta-item">
                      <i class="bi bi-calendar-event" data-icon="calendar"></i>
                      April 24, 2025
                    </p>
                    <p class="zigrow-design-2__meta-item">
                      <i class="bi bi-geo-alt" data-icon="location"></i>
                      Ballroom Extra Hotel
                    </p>
                  </div>
                </div>

                <div class="zigrow-design-2__ticket-cta">
             
<a href="#" class="zigrow-design-2__cta-link" data-btn="design-2">
  <span class="zigrow-design-2__cta-text">Get a Ticket</span>
  <span>
    <i class="bi bi-arrow-right" data-icon="arrow-right"></i>
  </span>
</a>
                </div>
              </div>
              <!-- /ticket strip -->
            </div>
          </div>
        </div>
      </div>
          <style>
      /* ====================================================
         TECHXPERIENCE HERO
         (Bootstrap only for .container / .row / .col-*)
      =====================================================*/
      .zigrow-design-2 {
        min-height: 100vh;
        padding: 3.5rem 0;
       /* Replace with this */
background:
  radial-gradient(
    circle at 10% 20%,
    color-mix(in srgb, var(--primary-colors, #a855f7) 70%, transparent) 0%,
    transparent 55%
  ),
  radial-gradient(
    circle at 90% 10%,
    color-mix(in srgb, var(--tertiary-colors, var(--territory-colors, #f973ff)) 60%, transparent) 0%,
    transparent 58%
  ),
  linear-gradient(
    135deg,
    color-mix(in srgb, var(--primary-colors, #a855f7) 12%, #ffffff 88%) 0%,
    #ffffff 42%,
    color-mix(in srgb, var(--tertiary-colors, var(--territory-colors, #f973ff)) 18%, #ffffff 82%) 100%
  );
      
        color: #111827;
        position: relative;
        overflow: hidden;
      }

      .zigrow-design-2 .zigrow-design-2__row {
        display: flex; /* row is flex in BS, but we keep explicit for clarity */
        align-items: center;
      }

      /* doodle icons */
      .zigrow-design-2 .zigrow-design-2__doodle {
        position: absolute;
        color: var(--primary-colors, #d946ef);
        font-size: 1.6rem;
        opacity: 0.9;
      }

      .zigrow-design-2 .zigrow-design-2__doodle--tl {
        top: 12%;
        left: 3%;
      }

      .zigrow-design-2 .zigrow-design-2__doodle--br {
        bottom: 18%;
        right: 6%;
      }

      .zigrow-design-2 .zigrow-design-2__doodle--tr {
        top: 14%;
        right: 12%;
      }

      /* ---------- LEFT IMAGE CARD ---------- */
      .zigrow-design-2 .zigrow-design-2__image-card {
        text-align: center;
        border-radius: 32px;
        overflow: hidden;
        box-shadow: 0 24px 55px rgba(15, 23, 42, 0.28);
        background-color: #020617;
      }

      .zigrow-design-2 .zigrow-design-2__image-inner {
        text-align: center;
        width: 100%;
        height: 100%;
      }

      .zigrow-design-2 .zigrow-design-2__image {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }

      /* ---------- RIGHT CONTENT ---------- */
      .zigrow-design-2 .zigrow-design-2__content {
        max-width: 520px;
        margin-left: auto;
      }

      .zigrow-design-2 .zigrow-design-2__eyebrow {
        margin: 0 0 0.75rem;
        font-size: 0.85rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--primary-colors, #a855f7);
      }

      .zigrow-design-2 .zigrow-design-2__title-line {
        margin: 0;
        font-size: 2.8rem;
        line-height: 1.08;
      }

      .zigrow-design-2 .zigrow-design-2__title-highlight {
        color: var(--primary-colors, #ec4899);
      }

      .zigrow-design-2 .zigrow-design-2__description {
        margin: 1.2rem 0 1.8rem;
        font-size: 0.98rem;
        line-height: 1.7;
        color: #4b5563;
      }

      /* ---------- TICKET STRIP ---------- */
      .zigrow-design-2 .zigrow-design-2__ticket-strip {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        padding: 1.4rem 1.6rem;
        border-radius: 999px;
    /* Replace with this */
background:
  radial-gradient(
    circle at 0% 0%,
    color-mix(in srgb, var(--primary-colors, #a855f7) 70%, transparent) 0%,
    transparent 65%
  ),
  linear-gradient(
    90deg,
    color-mix(in srgb, var(--primary-colors, #a855f7) 70%, #ffffff 30%) 0%,
    color-mix(in srgb, var(--tertiary-colors, var(--territory-colors, #f973ff)) 60%, #ffffff 40%) 48%,
    color-mix(in srgb, var(--primary-colors, #a855f7) 70%, var(--tertiary-colors, var(--territory-colors, #f973ff)) 30%) 100%
  );
box-shadow: 0 18px 36px color-mix(
  in srgb,
  var(--primary-colors, #a855f7) 35%,
  transparent
);
        @media (max-width: 1200px) {
          border-radius: 28px;
          flex-direction: column;
          align-items: flex-start;
        }
      }

      .zigrow-design-2 .zigrow-design-2__ticket-info {
        flex: 1;
        color: #111827;
      }

      .zigrow-design-2 .zigrow-design-2__ticket-title {
        margin: 0 0 0.4rem;
        font-size: 1.05rem;
        font-weight: 600;
      }

      .zigrow-design-2 .zigrow-design-2__ticket-subtitle {
        margin: 0 0 0.7rem;
        font-size: 0.9rem;
      }

      .zigrow-design-2 .zigrow-design-2__meta-row {
        display: flex;
        flex-wrap: wrap;
        gap: 1.2rem;
      }

      .zigrow-design-2 .zigrow-design-2__meta-item {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.82rem;
      }

      .zigrow-design-2 .zigrow-design-2__meta-item i {
        font-size: 0.9rem;
        color: #111827;
      }

      /* CTA LINK BUTTON */
     /* Replace with this */
.zigrow-design-2 .zigrow-design-2__ticket-cta {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}

      .zigrow-design-2 .zigrow-design-2__cta-link {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.9rem 1.8rem;
        border-radius: 999px;
        background-color: #111827;
        text-decoration: none;
      }

      .zigrow-design-2 .zigrow-design-2__cta-text {
        margin: 0;
        font-size: 0.86rem;
        font-weight: 600;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: #f9fafb;
      }

      .zigrow-design-2 .zigrow-design-2__cta-link span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .zigrow-design-2 .zigrow-design-2__cta-link span i {
        font-size: 1rem;
        color: #f9fafb;
      }

      .zigrow-design-2 .zigrow-design-2__cta-link:hover {
        background-color: #020617;
      }

      /* ---------- RESPONSIVE BREAKPOINTS ---------- */

      /* tablets & small laptops */
      @media (max-width: 1199.98px) {
        .zigrow-design-2 .zigrow-design-2__title-line {
          font-size: 2.4rem;
        }
      }

      /* <= 992px: stack content nicely, scale strip */
      @media (max-width: 991.98px) {
        .zigrow-design-2 {
          padding: 3rem 0;
          min-height: auto;
        }

        .zigrow-design-2 .zigrow-design-2__row {
          align-items: flex-start;
        }

        .zigrow-design-2 .zigrow-design-2__image-card {
          max-width: 560px;
          margin: 0 auto 2rem;
        }

        .zigrow-design-2 .zigrow-design-2__content {
          max-width: none;
          margin: 0 auto;
        }

        .zigrow-design-2 .zigrow-design-2__title-line {
          font-size: 2.3rem;
        }

        .zigrow-design-2 .zigrow-design-2__ticket-strip {
          border-radius: 28px;
          flex-direction: column;
          align-items: flex-start;
          @media (max-width: 1200px) {
            border-radius: 28px;
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .zigrow-design-2 .zigrow-design-2__ticket-cta {
          width: 100%;
        }

        .zigrow-design-2 .zigrow-design-2__cta-link {
          width: 100%;
          justify-content: center;
        }
      }

      /* phones */
      @media (max-width: 575.98px) {
        .zigrow-design-2 {
          padding: 2.6rem 0;
        }

        .zigrow-design-2 .zigrow-design-2__title-line {
          font-size: 2rem;
        }

        .zigrow-design-2 .zigrow-design-2__description {
          font-size: 0.94rem;
          margin-bottom: 1.5rem;
        }

        .zigrow-design-2 .zigrow-design-2__ticket-strip {
          padding: 1.1rem 1.3rem;
        }

        .zigrow-design-2 .zigrow-design-2__meta-row {
          gap: 0.7rem;
        }

        .zigrow-design-2 .zigrow-design-2__doodle {
          font-size: 1.2rem;
        }

        .zigrow-design-2 .zigrow-design-2__doodle--tl,
        .zigrow-design-2 .zigrow-design-2__doodle--tr,
        .zigrow-design-2 .zigrow-design-2__doodle--br {
          display: none;
        }
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-design-1", {
    name: "design-3",
    category: "design",

    image: "https://i.postimg.cc/bNGzC4Gk/design-3.png",

    html: `
<section
  class="zigrow-design-1 py-6"
  data-section="zigrow-design-1"
  id="zigrow-design-1"
>
  

  <div class="container zigrow-design-1__container">
    <div class="zigrow-design-1__top">
      <div class="zigrow-design-1__soft-panel" aria-hidden="true"></div>

      <div class="row">
        <!-- LEFT -->
        <div class="col-12 col-lg-6">
          <div class="zigrow-design-1__left">
            <h2 class="no-theme-size zigrow-design-1__title">
              Innovate ideas for<br />
              your products &<br />
              Business
            </h2>
            <p class="zigrow-design-1__lead">
              Agency that build many amazing product to boost your business to
              next level.
            </p>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="col-12 col-lg-6">
          <div class="zigrow-design-1__right">
            <div class="zigrow-design-1__right-head">
              <div class="zigrow-design-1__right-title-row">
                <h3 class="zigrow-design-1__right-title">Global partners</h3>

                <div
                  class="zigrow-design-1__spark-btn"
                  type="button"
                  aria-label="Spark"
                  data-icon="spark"
                >
               
<i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
                </div>
              </div>

              <div class="row zigrow-design-1__right-cols">
                <div class="col-12 col-sm-6">
                  <p class="zigrow-design-1__right-text">
                    Agency that build many amazing product to boost your business
                    to next level.
                  </p>
                </div>
                <div class="col-12 col-sm-6">
                  <p class="zigrow-design-1__right-text">
                    We are officially partner with world to best brands,
                    Subscribe to our new letter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BADGE -->
      <div class="zigrow-design-1__badge" aria-hidden="true">
        <div class="zigrow-design-1__badge-ring" data-rotate-ring>
          <svg viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
              />
            </defs>
            <text font-size="8.6" fill="#fff" letter-spacing="1.5">
              <textPath href="#circlePath" startOffset="0%">
                subscribe to view collection • subscribe to view collection •
                subscribe to view collection •
              </textPath>
            </text>
          </svg>
        </div>
        <div class="zigrow-design-1__badge-center" >
          <span class="zigrow-design-1__badge-flower"></span>
        </div>
      </div>
    </div>

    <!-- BOTTOM CARDS -->
    <div class="zigrow-design-1__bottom">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="zigrow-design-1__card zigrow-design-1__card--dark" data-zg-editable="surface">
            <h3 class="zigrow-design-1__percent">28%</h3>
            <p class="zigrow-design-1__small">
              INVENTING THE<br />FUTURE OF<br />DESIGN
            </p>
          </div>
        </div>

        <div class="col-12 col-md-5">
          <div class="zigrow-design-1__card zigrow-design-1__card--soft">
            <div
              class="zigrow-design-1__spark-mini"
              type="button"
              aria-label="Spark"
              data-icon="spark"
            >
           
<i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
            </div>

            <h3 class="zigrow-design-1__percent">55%</h3>
            <p class="zigrow-design-1__grow">Grow since las day</p>


         
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- RIGHT DECOR -->
  <div class="zigrow-design-1__decor" aria-hidden="true">
    <svg
      class="zigrow-design-1__arcs"
      viewBox="0 0 520 340"
      preserveAspectRatio="none"
    >
      <path
        d="M140 320 C140 190, 260 120, 380 120 C500 120, 620 190, 620 320"
        fill="none"
        stroke="rgba(0,0,0,0.65)"
        stroke-width="2"
      />
      <path
        d="M160 320 C160 205, 270 145, 380 145 C490 145, 600 205, 600 320"
        fill="none"
        stroke="rgba(0,0,0,0.55)"
        stroke-width="2"
      />
      <path
        d="M180 320 C180 220, 280 170, 380 170 C480 170, 580 220, 580 320"
        fill="none"
        stroke="rgba(0,0,0,0.45)"
        stroke-width="2"
      />
      <path
        d="M200 320 C200 235, 290 195, 380 195 C470 195, 560 235, 560 320"
        fill="none"
        stroke="rgba(0,0,0,0.35)"
        stroke-width="2"
      />
      <path
        d="M220 320 C220 250, 300 220, 380 220 C460 220, 540 250, 540 320"
        fill="none"
        stroke="rgba(0,0,0,0.25)"
        stroke-width="2"
      />
    </svg>

    <div class="zigrow-design-1__object-card"></div>
    <div class="zigrow-design-1__object" data-icon="3d-object"></div>
  </div>

  <style>
    body {
      margin: 0;
   
      background: #0b0b0b;
    }

 /* Replace with this */
.zigrow-design-1 {
  --zigrow-design-1-primary-light: color-mix(
    in srgb,
    var(--primary-colors, #7e22ce) 16%,
    #ffffff 84%
  );

  position: relative;
  overflow: hidden;
  background: #eee5ff;
  background: var(--zigrow-design-1-primary-light);
}
    .py-6 {
      padding: 3rem 0;
    }

    .zigrow-design-1::before,
    .zigrow-design-1::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 26px;
      background: #0b0b0b;
      z-index: 1;
    }
    .zigrow-design-1::before {
      left: 0;
    }
    .zigrow-design-1::after {
      right: 0;
    }

  

    .zigrow-design-1 .zigrow-design-1__container {
      position: relative;
      z-index: 2;
      max-width: 1140px;
    }

    .zigrow-design-1 .zigrow-design-1__top {
      position: relative;
    }

    .zigrow-design-1 .zigrow-design-1__soft-panel {
      position: absolute;
      left: 0;
      top: 0.2rem;
      width: min(520px, 92%);
      height: 240px;
      background: rgba(255, 255, 255, 0.12);
      z-index: 0;
    }

    .zigrow-design-1 .zigrow-design-1__left,
    .zigrow-design-1 .zigrow-design-1__right {
      position: relative;
      z-index: 2;
      padding: 0.25rem 0;
    }

    .zigrow-design-1 .zigrow-design-1__title {
      font-size: clamp(2.1rem, 4.2vw, 3.2rem);
      line-height: 1.02;
      letter-spacing: -0.02em;
      font-weight: 800;
      margin: 0;
      color: #111;
    }

    .zigrow-design-1 .zigrow-design-1__lead {
      margin: 1.2rem 0 0;
      max-width: 360px;
      color: #2b2b2b;
      font-size: 0.98rem;
      line-height: 1.45;
    }

    .zigrow-design-1 .zigrow-design-1__right-head {
      position: relative;
      padding-left: 1.25rem;
    }

    .zigrow-design-1 .zigrow-design-1__right-head::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.35rem;
      width: 1px;
      height: 78px;
      background: rgba(0, 0, 0, 0.35);
    }

    .zigrow-design-1 .zigrow-design-1__right-title-row {
      position: relative;
      padding-right: 54px;
    }

    .zigrow-design-1 .zigrow-design-1__right-title {
      margin: 0;
      font-size: 1.15rem;
      font-weight: 800;
      color: #111;
    }

    .zigrow-design-1 .zigrow-design-1__spark-btn {
      position: absolute;
      right: 0;
      top: -0.15rem;
      width: 42px;
      height: 42px;
      border: 0;
      border-radius: 999px;
      background: #fff;
      cursor: pointer;
      box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
    }
  /* Replace with this */
.zigrow-design-1 .zigrow-design-1__spark-btn i {
  color: #111;
  font-size: 18px;
  line-height: 1;
}

    .zigrow-design-1 .zigrow-design-1__right-cols {
      margin-top: 0.75rem;
    }

    .zigrow-design-1 .zigrow-design-1__right-text {
      margin: 0.75rem 0 0;
      color: #2b2b2b;
      font-size: 0.86rem;
      line-height: 1.45;
      max-width: 230px;
    }

    .zigrow-design-1 .zigrow-design-1__badge {
      position: absolute;
      left: 50%;
      top: 165px;
      transform: translateX(-50%);
      width: 98px;
      height: 98px;
      border-radius: 999px;
      background: black;
      box-shadow: none;
      z-index: 3;
    }

    .zigrow-design-1 .zigrow-design-1__badge-ring {
      position: absolute;
      inset: 0;
      display: block;
      transform: rotate(0deg);
    }
    .zigrow-design-1 .zigrow-design-1__badge-ring svg {
      width: 100%;
      height: 100%;
    }

    .zigrow-design-1 .zigrow-design-1__badge-center {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
    }

    .zigrow-design-1 .zigrow-design-1__badge-flower {
      width: 22px;
      height: 22px;
      display: inline-block;
      background: radial-gradient(circle at 50% 50%, #fff 0 22%, transparent 23%),
        conic-gradient(
          from 0deg,
          transparent 0 15deg,
          #fff 15deg 25deg,
          transparent 25deg 45deg,
          #fff 45deg 55deg,
          transparent 55deg 75deg,
          #fff 75deg 85deg,
          transparent 85deg 105deg,
          #fff 105deg 115deg,
          transparent 115deg 135deg,
          #fff 135deg 145deg,
          transparent 145deg 165deg,
          #fff 165deg 175deg,
          transparent 175deg 195deg,
          #fff 195deg 205deg,
          transparent 205deg 225deg,
          #fff 225deg 235deg,
          transparent 235deg 255deg,
          #fff 255deg 265deg,
          transparent 265deg 285deg,
          #fff 285deg 295deg,
          transparent 295deg 315deg,
          #fff 315deg 325deg,
          transparent 325deg 345deg,
          #fff 345deg 355deg,
          transparent 355deg 360deg
        );
      border-radius: 999px;
      opacity: 0.95;
    }

    .zigrow-design-1 .zigrow-design-1__bottom {
      margin-top: 2.4rem;
      position: relative;
      z-index: 2;
    }

    .zigrow-design-1 .zigrow-design-1__card {
      border-radius: 0;
      overflow: hidden;
      position: relative;
    }

    .zigrow-design-1 .zigrow-design-1__card--dark {
      background: #0f0f10;
      color: #fff;
      padding: 1.5rem 1.4rem;
      min-height: 155px;
    }

    .zigrow-design-1 .zigrow-design-1__percent {
      margin: 0;
      font-size: 2.6rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .zigrow-design-1 .zigrow-design-1__small {
      margin: 0.55rem 0 0;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      line-height: 1.35;
      opacity: 0.95;
      max-width: 170px;
    }

    .zigrow-design-1 .zigrow-design-1__card--soft {
      background: rgba(17, 17, 17, 0.06);
      color: #111;
      padding: 1.4rem 1.4rem 1.2rem;
      min-height: 155px;
    }

    .zigrow-design-1 .zigrow-design-1__spark-mini {
      position: absolute;
      right: 10px;
      top: -18px;
      width: 38px;
      height: 38px;
      border: 0;
      border-radius: 999px;
      background: #fff;
      cursor: pointer;
      box-shadow: 0 12px 18px rgba(0, 0, 0, 0.12);
    }
 /* Replace with this */
.zigrow-design-1 .zigrow-design-1__spark-mini i {
  color: #111;
  font-size: 16px;
  line-height: 1;
}

    .zigrow-design-1 .zigrow-design-1__grow {
      margin: 0.5rem 0 0;
      font-size: 0.84rem;
      color: rgba(0, 0, 0, 0.7);
    }

    .zigrow-design-1 .zigrow-design-1__avatars {
      margin-top: 0.7rem;
      position: relative;
      height: 26px;
    }

    .zigrow-design-1 .zigrow-design-1__avatar {
      width: 26px;
      height: 26px;
      border-radius: 999px;
      border: 2px solid #e7dbff;
      position: absolute;
      top: 0;
      background: radial-gradient(circle at 30% 30%, #fff, #cfc7ff 55%, #9b8bff);
    }
    .zigrow-design-1 .zigrow-design-1__avatar:nth-child(1) {
      left: 0;
    }
    .zigrow-design-1 .zigrow-design-1__avatar:nth-child(2) {
      left: 16px;
    }
    .zigrow-design-1 .zigrow-design-1__avatar:nth-child(3) {
      left: 32px;
    }
    .zigrow-design-1 .zigrow-design-1__avatar:nth-child(4) {
      left: 48px;
      background: #0f0f10;
      color: #fff;
      display: grid;
      place-items: center;
      font-size: 0.75rem;
      border-color: #e7dbff;
    }

    .zigrow-design-1 .zigrow-design-1__arrow {
      position: absolute;
      right: 14px;
      bottom: 16px;
      width: 26px;
      height: 26px;
      border-radius: 999px;
      background: transparent;
      border: 1px solid rgba(0, 0, 0, 0.25);
    }
    .zigrow-design-1 .zigrow-design-1__arrow::before {
      content: "";
      position: absolute;
      left: 9px;
      top: 9px;
      width: 8px;
      height: 8px;
      border-right: 2px solid rgba(0, 0, 0, 0.7);
      border-top: 2px solid rgba(0, 0, 0, 0.7);
      transform: rotate(45deg);
    }

    .zigrow-design-1 .zigrow-design-1__decor {
      position: absolute;
      right: 60px;
      bottom: -18px;
      width: min(520px, 54vw);
      height: 340px;
      z-index: 1;
      pointer-events: none;
    }
    .zigrow-design-1 .zigrow-design-1__arcs {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0.9;
    }
    .zigrow-design-1 .zigrow-design-1__object-card {
      position: absolute;
      right: 70px;
      bottom: 28px;
      width: 180px;
      height: 180px;
      background: rgba(17, 17, 17, 0.06);
    }
    .zigrow-design-1 .zigrow-design-1__object {
      position: absolute;
      left: 50%;
      top: 55%;
      transform: translate(-50%, -50%);
      width: 96px;
      height: 96px;
      border-radius: 28px;
      background: radial-gradient(
          circle at 30% 25%,
          rgba(255, 255, 255, 0.6),
          rgba(255, 255, 255, 0) 42%
        ),
        radial-gradient(
          circle at 65% 70%,
          rgba(255, 255, 255, 0.15),
          rgba(0, 0, 0, 0) 45%
        ),
        linear-gradient(135deg, #0a0a0a, #262626);
      box-shadow: 0 26px 35px rgba(0, 0, 0, 0.35);
      filter: saturate(1.05);
      animation: blobFloat 3.4s ease-in-out infinite;
    }

    .zigrow-design-1 .zigrow-design-1__object::before,
    .zigrow-design-1 .zigrow-design-1__object::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 28px;
      background: conic-gradient(
        from 0deg,
        rgba(255, 255, 255, 0.04),
        rgba(255, 255, 255, 0) 35%,
        rgba(255, 255, 255, 0.08) 55%,
        rgba(255, 255, 255, 0) 85%,
        rgba(255, 255, 255, 0.04)
      );
      mix-blend-mode: screen;
      opacity: 0.55;
    }
    .zigrow-design-1 .zigrow-design-1__object::after {
      inset: 8px;
      opacity: 0.35;
    }

    @keyframes blobFloat {
      0% {
        transform: translate(-50%, -50%) rotate(-4deg);
      }
      50% {
        transform: translate(-50%, -55%) rotate(6deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(-4deg);
      }
    }

    @media (max-width: 1199.98px) {
      .zigrow-design-1::before,
      .zigrow-design-1::after {
        display: none;
      }
      .zigrow-design-1 .zigrow-design-1__pink {
        display: none;
      }
    }

    @media (max-width: 767.98px) {
      .zigrow-design-1 {
        padding: 2.6rem 0 2.4rem;
      }

      .zigrow-design-1 .zigrow-design-1__badge {
        background-color: transparent;
      }

      .zigrow-design-1 .zigrow-design-1__soft-panel {
        display: none;
      }

      .zigrow-design-1 .zigrow-design-1__right-head {
        margin-top: 1.4rem;
        padding-left: 0;
      }

      .zigrow-design-1 .zigrow-design-1__right-head::before {
        display: none;
      }

      .zigrow-design-1 .zigrow-design-1__badge {
        position: static;
        transform: none;
        margin: 1.2rem auto 0;
      }

      .zigrow-design-1 .zigrow-design-1__decor {
        position: relative;
        right: auto;
        bottom: auto;
        width: 100%;
        height: 260px;
        margin-top: 1.2rem;
      }

      .zigrow-design-1 .zigrow-design-1__object-card {
        right: 14%;
        width: 160px;
        height: 160px;
      }

      .zigrow-design-1 .zigrow-design-1__right-text {
        max-width: none;
      }
    }

    @media (max-width: 575.98px) {
      .zigrow-design-1 .zigrow-design-1__spark-btn,
      .zigrow-design-1 .zigrow-design-1__spark-mini {
        display: none;
      }

      .zigrow-design-1 .zigrow-design-1__title {
        font-size: 1.9rem;
        line-height: 1.05;
      }

      .zigrow-design-1 .zigrow-design-1__lead {
        font-size: 0.95rem;
        margin-top: 0.85rem;
      }

      .zigrow-design-1 .zigrow-design-1__bottom {
        margin-top: 1.35rem;
      }

      .zigrow-design-1 .zigrow-design-1__card--soft {
        min-height: auto;
      }
    }
  </style>

  <script>
    (function () {
      const ring = document.querySelector("[data-rotate-ring]");
      if (!ring) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduceMotion) return;

      let angle = 0;
      function tick() {
        angle = (angle + 0.35) % 360;
        ring.style.transform = "rotate(" + angle + "deg)";
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    })();
  </script>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-design-4", {
  name: "Design-4",
  category: "design",
  image:
    "https://i.postimg.cc/d0Zgy3wm/Screenshot-2026-07-21-172030.png",

  html: `
<section
  id="zigrow-design-4"
  data-section="zigrow-design-4"
  class="zigrow-design-4"
>
  <div class="zigrow-design-4-layout">
    <div class="zigrow-design-4-phone-area zigrow-design-4-phone-area-left">
      <div class="zigrow-design-4-phone zigrow-design-4-phone-left">
        <span class="zigrow-design-4-phone-button zigrow-design-4-phone-button-one"></span>
        <span class="zigrow-design-4-phone-button zigrow-design-4-phone-button-two"></span>

        <div class="zigrow-design-4-phone-screen zigrow-design-4-media-center">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=85"
            alt="Digital progress application interface"
            class="zigrow-design-4-screen-image"
          />

          <div class="zigrow-design-4-phone-status">
            <span>9:41</span>

            <span class="zigrow-design-4-status-icons">
              <i class="bi bi-reception-4" data-icon="reception-4"></i>
              <i class="bi bi-wifi" data-icon="wifi"></i>
              <i class="bi bi-battery-full" data-icon="battery-full"></i>
            </span>
          </div>

          <div class="zigrow-design-4-phone-notch">
            <span class="zigrow-design-4-phone-speaker"></span>
            <span class="zigrow-design-4-phone-camera"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="zigrow-design-4-content">
      <div class="zigrow-design-4-rating">
        <span class="zigrow-design-4-rating-icon">
          <i class="bi bi-star-fill" data-icon="star-fill"></i>
        </span>

        <span>4.7/5 based on 2K reviews</span>
      </div>

      <h2 class="no-theme-size zigrow-design-4-title">
        Level Up Your<br />
        Daily Experience
      </h2>

      <p class="zigrow-design-4-description">
        Build better routines with simple tools, clear progress, and practical
        support that fits naturally into your day.
      </p>

      <div class="zigrow-design-4-action">
        <a
          href="#get-started"
          class="zigrow-design-4-button"
          data-btn="design"
        >
          Get Started
        </a>
      </div>
    </div>

    <div class="zigrow-design-4-phone-area zigrow-design-4-phone-area-right">
      <div class="zigrow-design-4-phone zigrow-design-4-phone-right">
        <span class="zigrow-design-4-phone-button zigrow-design-4-phone-button-one"></span>
        <span class="zigrow-design-4-phone-button zigrow-design-4-phone-button-two"></span>

        <div class="zigrow-design-4-phone-screen zigrow-design-4-media-center">
          <img
            src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=700&q=85"
            alt="Active lifestyle application interface"
            class="zigrow-design-4-screen-image"
          />

          <div class="zigrow-design-4-phone-status">
            <span>9:41</span>

            <span class="zigrow-design-4-status-icons">
              <i class="bi bi-reception-4" data-icon="reception-4"></i>
              <i class="bi bi-wifi" data-icon="wifi"></i>
              <i class="bi bi-battery-full" data-icon="battery-full"></i>
            </span>
          </div>

          <div class="zigrow-design-4-phone-notch">
            <span class="zigrow-design-4-phone-speaker"></span>
            <span class="zigrow-design-4-phone-camera"></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-design-4 {
      position: relative;
      width: 100%;
      min-height: 610px;
      overflow: hidden;
      border-radius: 26px;
      background: #f5f5f5;
    }

    .zigrow-design-4 .zigrow-design-4-layout {
      display: grid;
      grid-template-columns: minmax(250px, 0.9fr) minmax(430px, 1.2fr) minmax(
          250px,
          0.9fr
        );
      align-items: center;
      min-height: 610px;
    }

    .zigrow-design-4 .zigrow-design-4-content {
      position: relative;
      z-index: 4;
      padding: 70px 20px;
      text-align: center;
    }

    .zigrow-design-4 .zigrow-design-4-rating {
      display: grid;
      grid-template-columns: auto auto;
      gap: 10px;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      color: #252525;
      font-size: 1rem;
      font-weight: 600;
    }

    .zigrow-design-4 .zigrow-design-4-rating-icon {
      display: grid;
      place-items: center;
      color: var(--primary-colors, #ff8a00);
      font-size: 1.25rem;
    }

    .zigrow-design-4 .zigrow-design-4-title {
      margin: 0;
      color: #050505;
      font-size: clamp(3rem, 5.5vw, 5.4rem);
      font-weight: 500;
      letter-spacing: -0.065em;
      line-height: 0.86;
    }

    .zigrow-design-4 .zigrow-design-4-description {
      max-width: 470px;
      margin: 30px auto 0;
      color: var(--secondary-colors, #444444);
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      line-height: 1.45;
    }

    .zigrow-design-4 .zigrow-design-4-action {
      display: grid;
      justify-content: center;
      margin-top: 28px;
    }

    .zigrow-design-4 .zigrow-design-4-button {
      display: grid;
      min-width: 142px;
      min-height: 48px;
      padding: 12px 26px;
      place-items: center;
      border: 1px solid var(--primary-colors, #151515);
      border-radius: 999px;
      background: var(--primary-colors, #151515);
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.18);
      color: #ffffff;
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-design-4 .zigrow-design-4-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 14px 26px rgba(0, 0, 0, 0.24);
    }

    .zigrow-design-4 .zigrow-design-4-phone-area {
      position: relative;
      align-self: stretch;
      min-width: 0;
    }

    .zigrow-design-4 .zigrow-design-4-phone {
      position: absolute;
      z-index: 2;
      width: 310px;
      height: 625px;
      padding: 10px;
      border: 3px solid #252525;
      border-radius: 48px;
      background: #090909;
      box-shadow:
        0 18px 38px rgba(0, 0, 0, 0.22),
        inset 0 0 0 1px #555555;
    }

    .zigrow-design-4 .zigrow-design-4-phone-left {
      top: -290px;
      right: 4px;
      transform: rotate(-1deg);
    }

    .zigrow-design-4 .zigrow-design-4-phone-right {
      top: 142px;
      left: 4px;
      transform: rotate(1deg);
    }

    .zigrow-design-4 .zigrow-design-4-phone-screen {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 37px;
      background: var(--territory-colors, #3426ff);
    }

    .zigrow-design-4 .zigrow-design-4-media-center {
      text-align: center;
    }

    .zigrow-design-4 .zigrow-design-4-screen-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .zigrow-design-4 .zigrow-design-4-phone-screen::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(44, 28, 255, 0.12),
        rgba(51, 31, 255, 0.48)
      );
      pointer-events: none;
    }

    .zigrow-design-4 .zigrow-design-4-phone-status {
      position: absolute;
      top: 15px;
      right: 24px;
      left: 24px;
      z-index: 4;
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      justify-content: space-between;
      color: #ffffff;
      font-size: 0.68rem;
      font-weight: 700;
    }

    .zigrow-design-4 .zigrow-design-4-status-icons {
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: 5px;
      align-items: center;
      font-size: 0.7rem;
    }

    .zigrow-design-4 .zigrow-design-4-phone-notch {
      position: absolute;
      top: 9px;
      left: 50%;
      z-index: 5;
      display: grid;
      grid-template-columns: 42px 8px;
      gap: 7px;
      align-items: center;
      width: 77px;
      height: 23px;
      padding: 0 10px;
      border-radius: 999px;
      background: #050505;
      transform: translateX(-50%);
    }

    .zigrow-design-4 .zigrow-design-4-phone-speaker {
      width: 42px;
      height: 4px;
      border-radius: 999px;
      background: #292929;
    }

    .zigrow-design-4 .zigrow-design-4-phone-camera {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #152342;
      box-shadow: inset 0 0 0 2px #080808;
    }

    .zigrow-design-4 .zigrow-design-4-phone-button {
      position: absolute;
      width: 4px;
      border-radius: 4px;
      background: #242424;
    }

    .zigrow-design-4 .zigrow-design-4-phone-left .zigrow-design-4-phone-button {
      right: -6px;
    }

    .zigrow-design-4 .zigrow-design-4-phone-right .zigrow-design-4-phone-button {
      left: -6px;
    }

    .zigrow-design-4 .zigrow-design-4-phone-button-one {
      top: 128px;
      height: 70px;
    }

    .zigrow-design-4 .zigrow-design-4-phone-button-two {
      top: 212px;
      height: 42px;
    }

    @media (max-width: 1100px) {
      .zigrow-design-4 .zigrow-design-4-layout {
        grid-template-columns: minmax(190px, 0.65fr) minmax(390px, 1.2fr) minmax(
            190px,
            0.65fr
          );
      }

      .zigrow-design-4 .zigrow-design-4-phone {
        width: 275px;
        height: 565px;
      }

      .zigrow-design-4 .zigrow-design-4-phone-left {
        right: -44px;
      }

      .zigrow-design-4 .zigrow-design-4-phone-right {
        left: -44px;
      }

      .zigrow-design-4 .zigrow-design-4-title {
        font-size: clamp(3rem, 6vw, 4.6rem);
      }
    }

    @media (max-width: 820px) {
      .zigrow-design-4 {
        min-height: auto;
      }

      .zigrow-design-4 .zigrow-design-4-layout {
        grid-template-columns: 1fr 1fr;
        min-height: auto;
      }

      .zigrow-design-4 .zigrow-design-4-content {
        grid-column: 1 / -1;
        grid-row: 1;
        padding: 70px 28px 48px;
      }

      .zigrow-design-4 .zigrow-design-4-phone-area {
        height: 380px;
      }

      .zigrow-design-4 .zigrow-design-4-phone-area-left {
        grid-column: 1;
        grid-row: 2;
      }

      .zigrow-design-4 .zigrow-design-4-phone-area-right {
        grid-column: 2;
        grid-row: 2;
      }

      .zigrow-design-4 .zigrow-design-4-phone {
        width: 240px;
        height: 490px;
      }

      .zigrow-design-4 .zigrow-design-4-phone-left {
        top: 20px;
        right: 10px;
      }

      .zigrow-design-4 .zigrow-design-4-phone-right {
        top: 20px;
        left: 10px;
      }
    }

    @media (max-width: 560px) {
      .zigrow-design-4 {
        border-radius: 20px;
      }

      .zigrow-design-4 .zigrow-design-4-layout {
        grid-template-columns: 1fr;
      }

      .zigrow-design-4 .zigrow-design-4-content {
        padding: 54px 20px 42px;
      }

      .zigrow-design-4 .zigrow-design-4-title {
        font-size: clamp(3rem, 14vw, 4.2rem);
      }

      .zigrow-design-4 .zigrow-design-4-title br {
        display: none;
      }

      .zigrow-design-4 .zigrow-design-4-description {
        font-size: 1rem;
      }

      .zigrow-design-4 .zigrow-design-4-phone-area {
        height: 350px;
      }

      .zigrow-design-4 .zigrow-design-4-phone-area-left {
        grid-column: 1;
        grid-row: 2;
      }

      .zigrow-design-4 .zigrow-design-4-phone-area-right {
        display: none;
      }

      .zigrow-design-4 .zigrow-design-4-phone-left {
        top: 10px;
        right: 50%;
        width: 230px;
        height: 470px;
        transform: translateX(50%);
      }
    }
  

    /* Zigrow button parent configuration */
    .zigrow-design-4 .zigrow-design-4-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-design-5", {
  name: "Design-5",
  category: "design",
 image: "https://i.postimg.cc/MG7px8dX/Screenshot-2026-07-22-161130.png",

  html: `
<section
  id="zigrow-design-5"
  data-section="zigrow-design-5"
  class="zigrow-design-5"
>
  <div class="zigrow-design-5-container">
    <div class="zigrow-design-5-heading">
      <p class="zigrow-design-5-eyebrow">Our Vision</p>

      <h2 class="no-theme-size zigrow-design-5-title">
        Shaping the future with clarity<br />
        and purpose
      </h2>
    </div>

    <div class="zigrow-design-5-journey">
      <div class="zigrow-design-5-path" aria-hidden="true">
        <span class="zigrow-design-5-path-part zigrow-design-5-path-part-one"></span>
        <span class="zigrow-design-5-path-part zigrow-design-5-path-part-two"></span>
        <span class="zigrow-design-5-path-part zigrow-design-5-path-part-three"></span>
        <span class="zigrow-design-5-path-part zigrow-design-5-path-part-four"></span>
        <span class="zigrow-design-5-path-dot"></span>
      </div>

      <div class="zigrow-design-5-item zigrow-design-5-item-growth ">
        <div class="zigrow-design-5-item-inner">
       <div class="zigrow-design-5-icon-wrap">
  <i
    class="bi bi-diagram-3-fill"
    data-icon="diagram-3-fill"
  ></i>
</div>

          <div class="zigrow-design-5-item-content">
            <h3>Growth</h3>

            <p>
              Creating steady progress through clear goals and practical
              direction.
            </p>
          </div>
        </div>
      </div>

      <div class="zigrow-design-5-item zigrow-design-5-item-innovation ">
        <div class="zigrow-design-5-item-inner">
       <div class="zigrow-design-5-icon-wrap">
  <i
    class="bi bi-diagram-3-fill"
    data-icon="diagram-3-fill"
  ></i>
</div>

          <div class="zigrow-design-5-item-content">
            <h3>Innovation</h3>

            <p>
              Moving ideas forward through creativity and thoughtful
              improvement.
            </p>
          </div>
        </div>
      </div>

      <div class="zigrow-design-5-item zigrow-design-5-item-partnership ">
        <div class="zigrow-design-5-item-inner">
      <div class="zigrow-design-5-icon-wrap">
  <i
    class="bi bi-diagram-3-fill"
    data-icon="diagram-3-fill"
  ></i>
</div>

          <div class="zigrow-design-5-item-content">
            <h3>Partnership</h3>

            <p>
              Building strong relationships through trust and shared
              commitment.
            </p>
          </div>
        </div>
      </div>

      <div class="zigrow-design-5-item zigrow-design-5-item-excellence ">
        <div class="zigrow-design-5-item-inner">
         <div class="zigrow-design-5-icon-wrap">
  <i
    class="bi bi-diagram-3-fill"
    data-icon="diagram-3-fill"
  ></i>
</div>

          <div class="zigrow-design-5-item-content">
            <h3>Excellence</h3>

            <p>
              Delivering dependable results with quality and attention to
              detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-design-5 {
      position: relative;
      width: 100%;
      min-height: 570px;
      overflow: hidden;
      background: #fff;
      padding-block:3rem;
    }

    .zigrow-design-5 .zigrow-design-5-container {
      position: relative;
      width: min(100%, 1440px);
      min-height: 570px;
      margin: 0 auto;
    }

    .zigrow-design-5 .zigrow-design-5-heading {
      position: absolute;
      top: 62px;
      left: 15%;
      z-index: 4;
      max-width: 540px;
    }

    .zigrow-design-5 .zigrow-design-5-eyebrow {
      margin: 0 0 18px;
      color: #252525;
      font-size: 0.78rem;
      font-weight: 700;
      line-height: 1.4;
    }

    .zigrow-design-5 .zigrow-design-5-title {
      margin: 0;
      color: #202020;
      font-size: clamp(2rem, 3.3vw, 3.2rem);
      font-weight: 500;
      letter-spacing: -0.035em;
      line-height: 1.06;
    }

    .zigrow-design-5 .zigrow-design-5-journey {
      position: relative;
      min-height: 570px;
    }

    .zigrow-design-5 .zigrow-design-5-path {
      position: absolute;
      inset: 0;
      z-index: 1;
      overflow: hidden;
      pointer-events: none;
    }

    .zigrow-design-5 .zigrow-design-5-path-part {
      position: absolute;
      display: block;
      border-color: rgba(89, 105, 133, 0.18);
      border-style: solid;
      border-width: 0;
    }

    .zigrow-design-5 .zigrow-design-5-path-part-one {
      top: 172px;
      left: -8%;
      width: 31%;
      height: 245px;
      border-bottom-width: 2px;
      border-radius: 0 0 55% 55%;
      transform: rotate(31deg);
    }

    .zigrow-design-5 .zigrow-design-5-path-part-two {
      top: 297px;
      left: 18%;
      width: 27%;
      height: 140px;
      border-top-width: 2px;
      border-radius: 50% 50% 0 0;
      transform: rotate(-21deg);
    }

    .zigrow-design-5 .zigrow-design-5-path-part-three {
      top: 294px;
      left: 40%;
      width: 25%;
      height: 130px;
      border-bottom-width: 2px;
      border-radius: 0 0 50% 50%;
      transform: rotate(17deg);
    }

    .zigrow-design-5 .zigrow-design-5-path-part-four {
      top: 154px;
      left: 59%;
      width: 50%;
      height: 230px;
      border-top-width: 2px;
      border-radius: 50% 50% 0 0;
      transform: rotate(-24deg);
    }

    .zigrow-design-5 .zigrow-design-5-path-dot {
      position: absolute;
      top: 332px;
      left: 7.2%;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--primary-colors, #1958ff);
      box-shadow: 0 0 0 3px rgba(25, 88, 255, 0.08);
    }

    .zigrow-design-5 .zigrow-design-5-item {
      position: absolute;
      z-index: 3;
      width: 205px;
    }

    .zigrow-design-5 .zigrow-design-5-item-inner {
      display: grid;
      gap: 17px;
    }

 
.zigrow-design-5 .zigrow-design-5-icon-wrap {
  display: grid;
  width: 78px;
  height: 78px;
  place-items: center;
  border-radius: 50%;
  background: #dce6ed;
}

.zigrow-design-5 .zigrow-design-5-icon-wrap i {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  color: var(--primary-colors, #1958ff);
  font-size: 2.25rem;
  line-height: 1;
}
    .zigrow-design-5 .zigrow-design-5-icon i {
      line-height: 1;
    }

    .zigrow-design-5 .zigrow-design-5-item-content h3 {
      margin: 0 0 7px;
      color: #303030;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.3;
    }

    .zigrow-design-5 .zigrow-design-5-item-content p {
      max-width: 190px;
      margin: 0;
      color: var(--secondary-colors, #777c84);
      font-size: 0.78rem;
      line-height: 1.45;
    }

    .zigrow-design-5 .zigrow-design-5-item-growth {
      top: 404px;
      left: 15%;
    }

    .zigrow-design-5 .zigrow-design-5-item-innovation {
      top: 263px;
      left: 32.5%;
    }

    .zigrow-design-5 .zigrow-design-5-item-partnership {
      top: 354px;
      left: 55%;
    }

    .zigrow-design-5 .zigrow-design-5-item-excellence {
      top: 174px;
      left: 71.5%;
    }

    @media (max-width: 1100px) {
      .zigrow-design-5 .zigrow-design-5-heading {
        left: 10%;
      }

      .zigrow-design-5 .zigrow-design-5-item-growth {
        left: 10%;
      }

      .zigrow-design-5 .zigrow-design-5-item-innovation {
        left: 31%;
      }

      .zigrow-design-5 .zigrow-design-5-item-partnership {
        left: 54%;
      }

      .zigrow-design-5 .zigrow-design-5-item-excellence {
        left: 76%;
      }
    }

    @media (max-width: 850px) {
      .zigrow-design-5 {
        min-height: auto;
        padding: 64px 0;
      }

      .zigrow-design-5 .zigrow-design-5-container {
        width: min(100% - 40px, 720px);
        min-height: auto;
      }

      .zigrow-design-5 .zigrow-design-5-heading {
        position: relative;
        top: auto;
        left: auto;
        margin-bottom: 54px;
      }

      .zigrow-design-5 .zigrow-design-5-title br {
        display: none;
      }

      .zigrow-design-5 .zigrow-design-5-journey {
        display: grid;
        gap: 34px;
        min-height: auto;
        padding-left: 36px;
      }

      .zigrow-design-5 .zigrow-design-5-journey::before {
        content: "";
        position: absolute;
        top: 38px;
        bottom: 38px;
        left: 38px;
        width: 2px;
        background: rgba(89, 105, 133, 0.18);
      }

      .zigrow-design-5 .zigrow-design-5-path {
        display: none;
      }

      .zigrow-design-5 .zigrow-design-5-item {
        position: relative;
        top: auto;
        left: auto;
        width: 100%;
      }

      .zigrow-design-5 .zigrow-design-5-item-inner {
        grid-template-columns: 78px minmax(0, 1fr);
        gap: 24px;
        align-items: center;
      }

      .zigrow-design-5 .zigrow-design-5-item-content p {
        max-width: 430px;
      }
    }

    @media (max-width: 480px) {
      .zigrow-design-5 {
        padding: 48px 0;
      }

      .zigrow-design-5 .zigrow-design-5-container {
        width: min(100% - 28px, 720px);
      }

      .zigrow-design-5 .zigrow-design-5-heading {
        margin-bottom: 40px;
      }

      .zigrow-design-5 .zigrow-design-5-title {
        font-size: 2rem;
      }

      .zigrow-design-5 .zigrow-design-5-journey {
        gap: 30px;
        padding-left: 22px;
      }

      .zigrow-design-5 .zigrow-design-5-journey::before {
        left: 28px;
      }

      .zigrow-design-5 .zigrow-design-5-item-inner {
        grid-template-columns: 58px minmax(0, 1fr);
        gap: 17px;
      }

      .zigrow-design-5 .zigrow-design-5-icon-wrap {
        width: 58px;
        height: 58px;
      }

     .zigrow-design-5 .zigrow-design-5-icon-wrap i {
  width: 38px;
  height: 38px;
  font-size: 1.75rem;
}
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-design-6", {
  name: "Design-6",
  category: "design",
    image:
    "https://i.postimg.cc/TP5BD1fD/Screenshot-2026-07-21-172052.png",
  html: `
<section
  id="zigrow-design-6"
  class="zigrow-design-6"
  data-section="zigrow-design-6"
>
  <div class="container">
    <div class="zigrow-design-6-heading">
      <p class="zigrow-design-6-eyebrow">How It Works</p>

      <h2 class="no-theme-size zigrow-design-6-title">
        A Clear Process From First Step to Final Result
      </h2>

      <p class="zigrow-design-6-intro">
        Our simple four-step approach keeps every stage organized, transparent,
        and focused on achieving the right outcome for your needs.
      </p>
    </div>

    <div class="row zigrow-design-6-grid">
      <div class="col-12 col-lg-6 clonable-card" data-zg-editable="no-surface" >
        <div
          class="zigrow-design-6-step-card"
      
        >
          <p class="zigrow-design-6-step-number">01</p>

          <h3 class="zigrow-design-6-step-title">
            We understand your needs
          </h3>

          <p class="zigrow-design-6-step-description">
            You share your goals, current challenges, and expectations so we can
            understand what matters most before planning the next step.
          </p>

          <div
            class="zigrow-design-6-preview zigrow-design-6-preview-form"  data-zg-editable="surface"
        
          >
            <div class="zigrow-design-6-preview-sheet">
              <span class="zigrow-design-6-preview-accent"></span>

              <h4 class="zigrow-design-6-preview-title">
                Tell us what you need
              </h4>

              <p class="zigrow-design-6-preview-text">
                Share a few details so we can prepare the right approach.
              </p>

              <div class="zigrow-design-6-field">
                <span class="zigrow-design-6-field-label">
                  Describe your requirement
                </span>

                <p class="zigrow-design-6-field-placeholder">
                  Write your message here...
                </p>
              </div>
            </div>

            <span class="zigrow-design-6-paper zigrow-design-6-paper-one"></span>
            <span class="zigrow-design-6-paper zigrow-design-6-paper-two"></span>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 clonable-card" data-zg-editable="no-surface" >
        <div
          class="zigrow-design-6-step-card"
      
        >
          <p class="zigrow-design-6-step-number">02</p>

          <h3 class="zigrow-design-6-step-title">
            We prepare your solution
          </h3>

          <p class="zigrow-design-6-step-description">
            We review every detail and create a practical plan using the right
            resources, experience, and direction for your goals.
          </p>

          <div
            class="zigrow-design-6-preview zigrow-design-6-preview-plan"  data-zg-editable="surface"
        
          >
            <div class="zigrow-design-6-plan-sheet">
              <div class="zigrow-design-6-plan-icon">
                <i class="bi bi-person-fill" data-icon="person-fill"></i>
              </div>

              <h4 class="zigrow-design-6-plan-title">
                A tailored solution is being prepared
              </h4>

              <div class="zigrow-design-6-plan-row">
                <p class="zigrow-design-6-plan-label">Requirement</p>
                <p class="zigrow-design-6-plan-value">Business support</p>
              </div>

              <div class="zigrow-design-6-plan-row">
                <p class="zigrow-design-6-plan-label">Priority</p>
                <p class="zigrow-design-6-plan-value">High</p>
              </div>

              <div class="zigrow-design-6-plan-row">
                <p class="zigrow-design-6-plan-label">Customer</p>
                <p class="zigrow-design-6-plan-value">Aarav Sharma</p>
              </div>

              <div class="zigrow-design-6-plan-row">
                <p class="zigrow-design-6-plan-label">Status</p>
                <p class="zigrow-design-6-plan-value">Plan in progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 clonable-card" data-zg-editable="no-surface" >
        <div
          class="zigrow-design-6-step-card"
      
        >
          <p class="zigrow-design-6-step-number">03</p>

          <h3 class="zigrow-design-6-step-title">
            We manage every stage
          </h3>

          <p class="zigrow-design-6-step-description">
            We coordinate the process, share progress updates, and remain
            available whenever an adjustment or additional action is required.
          </p>

          <div
            class="zigrow-design-6-preview zigrow-design-6-preview-tracker"  data-zg-editable="surface"
        
          >
            <div class="zigrow-design-6-tracker-sheet">
              <h4 class="zigrow-design-6-tracker-title">
                Project Tracker
              </h4>

              <p class="zigrow-design-6-tracker-text">
                Follow the progress of your request
              </p>

              <div class="zigrow-design-6-progress">
                <span class="zigrow-design-6-progress-line"></span>
                <span class="zigrow-design-6-progress-dot"></span>
                <span class="zigrow-design-6-progress-dot"></span>
                <span class="zigrow-design-6-progress-dot"></span>
              </div>

              <div class="zigrow-design-6-progress-labels">
                <div class="zigrow-design-6-progress-item">
                  <p class="zigrow-design-6-progress-title">Received</p>
                  <p class="zigrow-design-6-progress-description">
                    Request confirmed
                  </p>
                </div>

                <div class="zigrow-design-6-progress-item">
                  <p class="zigrow-design-6-progress-title">In Progress</p>
                  <p class="zigrow-design-6-progress-description">
                    Work underway
                  </p>
                </div>

                <div class="zigrow-design-6-progress-item">
                  <p class="zigrow-design-6-progress-title">Review</p>
                  <p class="zigrow-design-6-progress-description">
                    Final checks
                  </p>
                </div>
              </div>

              <div class="zigrow-design-6-update-box">
                <p class="zigrow-design-6-update-title">Latest update</p>
                <p class="zigrow-design-6-update-text">
                  Your request is currently moving through the review stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 clonable-card" data-zg-editable="no-surface" >
        <div
          class="zigrow-design-6-step-card"
      
        >
          <p class="zigrow-design-6-step-number">04</p>

          <h3 class="zigrow-design-6-step-title">
            You receive the result
          </h3>

          <p class="zigrow-design-6-step-description">
            Once everything is completed, we share the final outcome and ensure
            that it meets your expectations before closing the process.
          </p>

          <div
            class="zigrow-design-6-preview zigrow-design-6-preview-result"  data-zg-editable="surface"
        
          >
            <span class="zigrow-design-6-result-paper zigrow-design-6-result-paper-one"></span>
            <span class="zigrow-design-6-result-paper zigrow-design-6-result-paper-two"></span>

            <div class="zigrow-design-6-result-card">
              <div class="zigrow-design-6-result-icon">
                <i
                  class="bi bi-patch-check"
                  data-icon="patch-check"
                ></i>
              </div>

              <h4 class="zigrow-design-6-result-title">
                Your request has been successfully completed.
              </h4>

              <div class="zigrow-design-6-result-tags">
                <span>Reviewed</span>
                <span>Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-design-6 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 7rem) 0;
      background: #f7f9fb;
    }

    .zigrow-design-6 .zigrow-design-6-heading {
      max-width: 780px;
      margin: 0 auto clamp(3rem, 6vw, 5rem);
      text-align: center;
    }

    .zigrow-design-6 .zigrow-design-6-eyebrow {
      display: inline-block;
      margin: 0 0 0.8rem;
      padding: 0.45rem 0.85rem;
      border-radius: 999px;
      background: var(--territory-colors, #f4e6f8);
      color: #fff;
      font-size: 0.78rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .zigrow-design-6 .zigrow-design-6-title {
      margin: 0;
      color: #111827;
      font-size: clamp(2.25rem, 4.5vw, 4rem);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.045em;
    }

    .zigrow-design-6 .zigrow-design-6-intro {
      max-width: 680px;
      margin: 1.25rem auto 0;
      color: var(--secondary-colors, #68717d);
      font-size: clamp(0.98rem, 1.3vw, 1.1rem);
      line-height: 1.7;
    }

    .zigrow-design-6 .zigrow-design-6-grid {
      row-gap: clamp(3rem, 6vw, 5rem);
    }

    .zigrow-design-6 .zigrow-design-6-step-card {
      height: 100%;
    }

    .zigrow-design-6 .zigrow-design-6-step-number {
      margin: 0 0 0.8rem;
      color: var(--secondary-colors, #59616d);
      font-size: 0.95rem;
      font-weight: 700;
      line-height: 1;
    }

    .zigrow-design-6 .zigrow-design-6-step-title {
      margin: 0;
      color: #111827;
      font-size: clamp(1.6rem, 2.4vw, 2.2rem);
      font-weight: 700;
      line-height: 1.18;
      letter-spacing: -0.025em;
    }

    .zigrow-design-6 .zigrow-design-6-step-description {
      max-width: 600px;
      min-height: 4.6rem;
      margin: 0.75rem 0 1.8rem;
      color: var(--secondary-colors, #68717d);
      font-size: clamp(0.94rem, 1.15vw, 1.03rem);
      line-height: 1.55;
    }

    .zigrow-design-6 .zigrow-design-6-preview {
      position: relative;
      min-height: clamp(18rem, 30vw, 24rem);
      overflow: hidden;
      border-radius: 0.65rem;
      background:
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.5),
          rgba(255, 255, 255, 0)
        ),
        var(--territory-colors, #f4def8);
    }

    .zigrow-design-6 .zigrow-design-6-preview::before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0.32;
      background-image:
        linear-gradient(
          90deg,
          transparent 49.5%,
          rgba(168, 85, 247, 0.16) 50%,
          transparent 50.5%
        ),
        linear-gradient(
          transparent 49.5%,
          rgba(168, 85, 247, 0.16) 50%,
          transparent 50.5%
        );
      background-size: 9rem 9rem;
      pointer-events: none;
    }

    .zigrow-design-6 .zigrow-design-6-preview-form {
      padding: clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 6vw, 5rem) 0;
    }

    .zigrow-design-6 .zigrow-design-6-preview-sheet {
      position: relative;
      z-index: 3;
      width: min(100%, 30rem);
      min-height: 21rem;
      margin: 0 auto;
      padding: clamp(1.5rem, 3vw, 2.25rem);
      border: 1px solid rgba(17, 24, 39, 0.08);
      border-radius: 0.65rem 0.65rem 0 0;
      background: #ffffff;
      box-shadow: 0 1rem 2.5rem rgba(59, 26, 72, 0.12);
    }

    .zigrow-design-6 .zigrow-design-6-preview-accent {
      display: block;
      width: 80%;
      height: 0.28rem;
      margin-bottom: 1.35rem;
      border-radius: 999px;
      background: var(--primary-colors, #bd4bd8);
    }

    .zigrow-design-6 .zigrow-design-6-preview-title {
      margin: 0;
      color: #22252b;
      font-size: clamp(1.1rem, 1.8vw, 1.4rem);
      font-weight: 700;
      line-height: 1.25;
    }

    .zigrow-design-6 .zigrow-design-6-preview-text {
      margin: 0.55rem 0 1.35rem;
      color: var(--secondary-colors, #7a818b);
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .zigrow-design-6 .zigrow-design-6-field {
      min-height: 8.5rem;
      padding: 1rem;
      border: 1px solid #d8dce2;
      border-radius: 0.45rem;
      background: #ffffff;
    }

    .zigrow-design-6 .zigrow-design-6-field-label {
      display: block;
      margin-bottom: 0.7rem;
      color: #4b525b;
      font-size: 0.78rem;
      font-weight: 600;
    }

    .zigrow-design-6 .zigrow-design-6-field-placeholder {
      margin: 0;
      color: #a0a6ae;
      font-size: 0.9rem;
    }

    .zigrow-design-6 .zigrow-design-6-paper {
      position: absolute;
      bottom: -2rem;
      width: 17rem;
      height: 18rem;
      border-radius: 0.6rem;
      background: rgba(255, 255, 255, 0.72);
      box-shadow: 0 1rem 2rem rgba(59, 26, 72, 0.08);
    }

    .zigrow-design-6 .zigrow-design-6-paper-one {
      right: 1.5rem;
      transform: rotate(7deg);
    }

    .zigrow-design-6 .zigrow-design-6-paper-two {
      left: 1.5rem;
      transform: rotate(-7deg);
    }

    .zigrow-design-6 .zigrow-design-6-preview-plan {
      padding: clamp(2rem, 4vw, 3.5rem) 0 0 clamp(2rem, 6vw, 4.5rem);
    }

    .zigrow-design-6 .zigrow-design-6-plan-sheet {
      position: relative;
      z-index: 2;
      width: 115%;
      min-height: 22rem;
      padding: clamp(1.7rem, 3vw, 2.5rem);
      border-radius: 0.65rem 0 0;
      background: #ffffff;
      box-shadow: 0 1rem 2.5rem rgba(59, 26, 72, 0.12);
    }

    .zigrow-design-6 .zigrow-design-6-plan-icon {
      display: grid;
      place-items: center;
      width: 3.5rem;
      height: 3.5rem;
      margin-bottom: 1.2rem;
      border-radius: 0.45rem;
      background: #111827;
      color: #ffffff;
    }

    .zigrow-design-6 .zigrow-design-6-plan-icon i {
      font-size: 1.8rem;
      line-height: 1;
    }

    .zigrow-design-6 .zigrow-design-6-plan-title {
      max-width: 32rem;
      margin: 0 0 1.2rem;
      color: #2a2d33;
      font-size: clamp(1rem, 1.6vw, 1.3rem);
      font-weight: 700;
      line-height: 1.4;
    }

    .zigrow-design-6 .zigrow-design-6-plan-row {
      display: grid;
      grid-template-columns: 7rem minmax(0, 1fr);
      gap: 1rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid #eceef1;
    }

    .zigrow-design-6 .zigrow-design-6-plan-label,
    .zigrow-design-6 .zigrow-design-6-plan-value {
      margin: 0;
      color: var(--secondary-colors, #737a83);
      font-size: 0.82rem;
      line-height: 1.4;
    }

    .zigrow-design-6 .zigrow-design-6-plan-label {
      font-weight: 600;
    }

    .zigrow-design-6 .zigrow-design-6-preview-tracker {
      padding: clamp(2rem, 4vw, 3.2rem) clamp(1.5rem, 5vw, 3.5rem) 0;
    }

    .zigrow-design-6 .zigrow-design-6-tracker-sheet {
      position: relative;
      z-index: 2;
      min-height: 22rem;
      padding: clamp(1.5rem, 3vw, 2.2rem);
      border-radius: 0.65rem 0.65rem 0 0;
      background: #ffffff;
      box-shadow: 0 1rem 2.5rem rgba(59, 26, 72, 0.12);
    }

    .zigrow-design-6 .zigrow-design-6-tracker-title {
      margin: 0;
      color: #272b31;
      font-size: clamp(1.1rem, 1.8vw, 1.4rem);
      font-weight: 700;
    }

    .zigrow-design-6 .zigrow-design-6-tracker-text {
      margin: 0.35rem 0 2rem;
      color: var(--secondary-colors, #7b828b);
      font-size: 0.85rem;
    }

    .zigrow-design-6 .zigrow-design-6-progress {
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      margin: 0 0 0.7rem;
    }

    .zigrow-design-6 .zigrow-design-6-progress-line {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      height: 0.2rem;
      border-radius: 999px;
      background: var(--primary-colors, #bd4bd8);
      transform: translateY(-50%);
    }

    .zigrow-design-6 .zigrow-design-6-progress-dot {
      position: relative;
      z-index: 2;
      width: 1rem;
      height: 1rem;
      border: 0.2rem solid var(--primary-colors, #bd4bd8);
      border-radius: 50%;
      background: #ffffff;
    }

    .zigrow-design-6 .zigrow-design-6-progress-dot:nth-child(3) {
      justify-self: center;
    }

    .zigrow-design-6 .zigrow-design-6-progress-dot:nth-child(4) {
      justify-self: end;
    }

    .zigrow-design-6 .zigrow-design-6-progress-labels {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }

    .zigrow-design-6 .zigrow-design-6-progress-item:nth-child(2) {
      text-align: center;
    }

    .zigrow-design-6 .zigrow-design-6-progress-item:nth-child(3) {
      text-align: right;
    }

    .zigrow-design-6 .zigrow-design-6-progress-title,
    .zigrow-design-6 .zigrow-design-6-progress-description {
      margin: 0;
      font-size: 0.72rem;
      line-height: 1.4;
    }

    .zigrow-design-6 .zigrow-design-6-progress-title {
      color: #34383f;
      font-weight: 700;
    }

    .zigrow-design-6 .zigrow-design-6-progress-description {
      color: var(--secondary-colors, #838a93);
    }

    .zigrow-design-6 .zigrow-design-6-update-box {
      margin-top: 2rem;
      padding: 1rem;
      border-radius: 0.45rem;
      background: var(--territory-colors, #faeffc);
    }

    .zigrow-design-6 .zigrow-design-6-update-title {
      margin: 0 0 0.35rem;
      color: #34383f;
      font-size: 0.78rem;
      font-weight: 700;
    }

    .zigrow-design-6 .zigrow-design-6-update-text {
      margin: 0;
      color: var(--secondary-colors, #747b84);
      font-size: 0.78rem;
      line-height: 1.5;
    }

    .zigrow-design-6 .zigrow-design-6-preview-result {
      display: grid;
      place-items: center;
      padding: 2rem;
    }

    .zigrow-design-6 .zigrow-design-6-result-card {
      position: relative;
      z-index: 3;
      width: min(100%, 18rem);
      min-height: 16rem;
      padding: clamp(1.5rem, 3vw, 2rem);
      border: 1px solid rgba(22, 163, 143, 0.12);
      border-radius: 0.55rem;
      background: #effdfa;
      box-shadow: 0 1.2rem 2.5rem rgba(50, 93, 86, 0.15);
      transform: rotate(1.5deg);
    }

    .zigrow-design-6 .zigrow-design-6-result-icon {
      display: grid;
      place-items: center;
      width: 3.5rem;
      height: 3.5rem;
      margin-bottom: 1.2rem;
      border-radius: 0.45rem;
      background: #a7f3e6;
      color: #158f7c;
    }

    .zigrow-design-6 .zigrow-design-6-result-icon i {
      font-size: 1.7rem;
      line-height: 1;
    }

    .zigrow-design-6 .zigrow-design-6-result-title {
      margin: 0;
      color: #293037;
      font-size: clamp(1.05rem, 1.7vw, 1.3rem);
      font-weight: 700;
      line-height: 1.45;
    }

    .zigrow-design-6 .zigrow-design-6-result-tags {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      gap: 0.5rem;
      margin-top: 1.4rem;
    }

    .zigrow-design-6 .zigrow-design-6-result-tags span {
      padding: 0.4rem 0.75rem;
      border: 1px solid #67d8c6;
      border-radius: 999px;
      color: #168a78;
      font-size: 0.7rem;
      font-weight: 600;
      line-height: 1;
    }

    .zigrow-design-6 .zigrow-design-6-result-paper {
      position: absolute;
      width: 17rem;
      height: 18rem;
      border-radius: 0.55rem;
      background: rgba(255, 255, 255, 0.75);
      box-shadow: 0 1rem 2rem rgba(59, 26, 72, 0.08);
    }

    .zigrow-design-6 .zigrow-design-6-result-paper-one {
      transform: rotate(-7deg);
    }

    .zigrow-design-6 .zigrow-design-6-result-paper-two {
      transform: rotate(8deg);
    }

    @media (max-width: 991px) {
      .zigrow-design-6 .zigrow-design-6-step-description {
        min-height: auto;
      }
    }

    @media (max-width: 767px) {
      .zigrow-design-6 {
        padding: 3rem 0;
      }

      .zigrow-design-6 .zigrow-design-6-heading {
        margin-bottom: 3rem;
      }

      .zigrow-design-6 .zigrow-design-6-preview {
        min-height: 20rem;
      }

      .zigrow-design-6 .zigrow-design-6-plan-sheet {
        width: 108%;
      }
    }

    @media (max-width: 479px) {
      .zigrow-design-6 .zigrow-design-6-preview-form,
      .zigrow-design-6 .zigrow-design-6-preview-plan,
      .zigrow-design-6 .zigrow-design-6-preview-tracker,
      .zigrow-design-6 .zigrow-design-6-preview-result {
        padding: 1.25rem 1rem 0;
      }

      .zigrow-design-6 .zigrow-design-6-plan-sheet {
        width: 110%;
      }

      .zigrow-design-6 .zigrow-design-6-plan-row {
        grid-template-columns: 5.5rem minmax(0, 1fr);
      }

      .zigrow-design-6 .zigrow-design-6-progress-labels {
        gap: 0.4rem;
      }

      .zigrow-design-6 .zigrow-design-6-progress-title,
      .zigrow-design-6 .zigrow-design-6-progress-description {
        font-size: 0.62rem;
      }

      .zigrow-design-6 .zigrow-design-6-result-card {
        width: min(100%, 16rem);
      }
    }
  </style>
</section>
`,
});


// Service
Vvveb.Blocks.add("bootstrap4/zigrow-service-1", {
    name: "service-1",
    category: "service",
    image: "https://i.postimg.cc/GmGbrYJW/service-1.png",
    html: `   <section
      id="zigrow-service-1"
      data-section="zigrow-service-1"
      class="zigrow-service-1-section py-6"
    >
      <div class="container">
        <div class="row zigrow-service-1-inner">
          <!-- Left Column: Heading, Description, Image Grid -->
          <div class="col-12 col-lg-6">
            <h2 class="no-theme-size zigrow-service-1-title">Our Services</h2>
            <p class="zigrow-service-1-text">
              We provide data-driven digital marketing solutions designed to
              grow your business. From increasing website traffic with SEO to
              driving sales through PPC, we create strategies tailored to your
              goals. Our social media marketing helps build brand awareness, and
              content marketing establishes credibility. Plus, with analytics &
              conversion optimization, we ensure every campaign delivers
              measurable results.
            </p>

            <!-- Image grid -->
            <div class="row g-3 image-grid-row">
              <div class="col-sm-4 col-12 image-grid-col">
                <div class="image-wrapper-main" >
                  <div class="purple-bg-box" ></div>
                  <img
                    src="/builder/img/zigrow-service-images/zigrow-service-1-a.webp"
                    alt="Service 1"
                    class="service-image"
                  />
                </div>
              </div>
              <div class="col-sm-4 col-12 image-grid-col">
                <img
                  src="/builder/img/zigrow-service-images/zigrow-service-1-b.webp"
                  alt="Service 2"
                  class="service-image"
                />
              </div>
              <div class="col-sm-4 col-12 image-grid-col">
                <img
                src="/builder/img/zigrow-service-images/zigrow-service-1-c.webp"
                  alt="Service 3"
                  class="service-image"
                />
              </div>
            </div>
          </div>

          <!-- Right Column: Service List -->
          <div class="col-12 col-lg-6 service-list-column">
            <!-- Service 1 -->
            <div class="row service-item-row">
              <div class="col-2 col-md-1 service-item-icon-col">
             
<div class="service-icon-box">
  <i class="fa-solid fa-share-nodes" aria-hidden="true"></i>
</div>
              </div>
              <div class="col-10 col-md-11 service-item-text-col">
                <h5 class="service-title">Social Media Marketing</h5>
                <p class="service-text">
                  Engage and grow your audience with strategic content, ads, and
                  brand positioning across Facebook, Instagram, LinkedIn, and
                  more.
                </p>
              </div>
            </div>

            <!-- Service 2 -->
            <div class="row service-item-row">
              <div class="col-2 col-md-1 service-item-icon-col">
            
<div class="service-icon-box">
  <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
</div>
              </div>
              <div class="col-10 col-md-11 service-item-text-col">
                <h5 class="service-title">Content Marketing</h5>
                <p class="service-text">
                  Attract and convert customers with compelling blog posts,
                  website copy, case studies, guides, and email marketing
                  campaigns.
                </p>
              </div>
            </div>

            <!-- Service 3 -->
            <div class="row service-item-row">
              <div class="col-2 col-md-1 service-item-icon-col">
             
<div class="service-icon-box">
  <i class="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i>
</div>
              </div>
              <div class="col-10 col-md-11 service-item-text-col">
                <h5 class="service-title">SEO &amp; SEM Optimization</h5>
                <p class="service-text">
                  Boost your website's search engine rankings with expert
                  keyword strategies, on-page optimization, and high-quality
                  backlinks.
                </p>
              </div>
            </div>

            <!-- Service 4 -->
            <div class="row service-item-row">
              <div class="col-2 col-md-1 service-item-icon-col">
             
<div class="service-icon-box">
  <i class="fa-solid fa-bullseye" aria-hidden="true"></i>
</div>
              </div>
              <div class="col-10 col-md-11 service-item-text-col">
                <h5 class="service-title">PPC (Pay-Per-Click Advertising)</h5>
                <p class="service-text">
                  Maximize ROI with targeted Google Ads and social media
                  campaigns that drive high-quality traffic and conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <style>
      .zigrow-service-1-section {
        background-color: #f7f3fb;
      }
      .py-6 {
        padding: 3rem 0;
      }
      /* Inner wrapper */
      /* .zigrow-service-1-section .zigrow-service-1-inner {
      } */

      /* Typography */
      .zigrow-service-1-section .zigrow-service-1-title {
   
        font-size: 2rem;
        font-weight: 700;
        color: #000000;
        margin-bottom: 16px;
        text-align: center;
      }

      .zigrow-service-1-section .zigrow-service-1-text {
        font-size: 1.06rem;
        line-height: 1.6;
        color: var(--secondary-colors, #6c6c6c);
        margin-bottom: 32px;
        text-align: center;
      }

      @media (min-width: 768px) {
        .zigrow-service-1-section .zigrow-service-1-title,
        .zigrow-service-1-section .zigrow-service-1-text {
          text-align: left;
        }
      }

      /* Image grid */
      .zigrow-service-1-section .image-grid-row {
        margin-left: -8px;
        margin-right: -8px;
      }

      .zigrow-service-1-section .image-grid-col {
        border-radius: 8px;
        text-align: center;
        padding-left: 8px;
        padding-right: 8px;
      }

      .zigrow-service-1-section .image-wrapper-main {
        position: relative;
        height: 100%;
      }

      .zigrow-service-1-section .purple-bg-box {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 100%;
        height: 100%;
        background-color: var(--primary-colors, #6a0dad);
        border-radius: 10px;
        transform: rotate(-5deg) translateX(-20px);
        z-index: 1;
        overflow: hidden;
      }

      .zigrow-service-1-section .service-image {
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
        object-fit: cover;
        position: relative;
        z-index: 2;
      }

      @media (max-width: 767.98px) {
        .zigrow-service-1-section .purple-bg-box {
          display: none;
        }

        .zigrow-service-1-section .image-grid-row {
          margin-top: 16px;
        }
      }

      /* Right column – service list */
      .zigrow-service-1-section .service-list-column {
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      @media (min-width: 992px) {
        .zigrow-service-1-section .service-list-column {
          margin-top: 0;
        }
      }

      .zigrow-service-1-section .service-item-row {
        margin-bottom: 24px;
      }

      /* .zigrow-service-1-section .service-item-icon-col {
      } */

      /* .zigrow-service-1-section .service-item-text-col {
      } */

    /* Replace with this */
.zigrow-service-1-section .service-icon-box {
  text-align: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary-colors, #6a0dad);
  border-radius: 8px;
  padding: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

     /* Replace with this */
.zigrow-service-1-section .service-icon-box i {
  color: #ffffff;
  font-size: 20px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

      .zigrow-service-1-section .service-title {
        font-size: 1.15rem;
        font-weight: 600;
        margin: 0 0 6px;
        color: #111111;
      }

      .zigrow-service-1-section .service-text {
        font-size: 1.06rem;
        line-height: 1.5;
        color: var(--secondary-colors, #6c6c6c);
        margin: 0;
      }

      @media (min-width: 768px) {
        .zigrow-service-1-section .service-item-row {
          margin-bottom: 32px;
        }
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-service-2", {
    name: "service-2",
    category: "service",
    image: "https://i.postimg.cc/K8BmFLDS/service-2.png",
    html: `  <section
      id="zigrow-service-2"
      data-section="zigrow-service-2"
      class="zigrow-service-2 py-6"
    >
      <div class="container">
        <!-- Heading -->
        <div class="row">
          <div class="col-12">
            <div class="programs-heading">
              <h2 class="no-theme-size programs-title main-heading">
                Tailored Plans for Every Health Goal
              </h2>
              <p class="programs-subtitle muted">
                Your journey to better health starts with expert guidance.
              </p>
            </div>
          </div>
        </div>

        <!-- Cards -->
        <div class="row g-md-3 programs-row">
          <!-- Card 1 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="program-card">
           
<div class="icon">
  <i class="fa-solid fa-utensils" aria-hidden="true"></i>
</div>
              <h5>Personalized Meal Plans</h5>
              <p>
                Custom diet plans based on your goals, health conditions &
                preferences.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="program-card">
            
<div class="icon">
  <i class="fa-solid fa-heart-pulse" aria-hidden="true"></i>
</div>
              <h5>Lifestyle Coaching</h5>
              <p>Habit-building strategies for long-term success.</p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="program-card">
           
<div class="icon">
  <i class="fa-solid fa-capsules" aria-hidden="true"></i>
</div>
              <h5>Supplement Guidance</h5>
              <p>Safe, research-backed supplement recommendations.</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="row">
          <div class="col-12">
            <div class="programs-cta">
              <a href="#" class="programs-btn" data-btn="service-2">Start Your Journey</a>
            </div>
          </div>
        </div>

        <!-- Absolute Arrow -->
       
      </div>
       <style>
      .zigrow-service-2 {
        background-color: #ffffff;
        position: relative;
        padding: 60px 0;
      }
      .py-6 {
        padding: 3rem 0;
      }
      /* Heading block */
      .zigrow-service-2 .programs-heading {
        text-align: center;
        margin-bottom: 24px;
        padding: 0 12px;
      }

      .zigrow-service-2 .programs-title {
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .zigrow-service-2 .programs-subtitle {
        font-size: 1rem;
        color: var(--secondary-colors, #777777);
      }

      @media (min-width: 576px) {
        .zigrow-service-2 .programs-heading {
          margin-bottom: 40px;
        }

        .zigrow-service-2 .programs-title {
          font-size: 2.6rem;
        }

        .zigrow-service-2 .programs-subtitle {
          font-size: 1.05rem;
        }
      }

      @media (min-width: 992px) {
        .zigrow-service-2 .programs-title {
          font-size: 3rem;
        }

        .zigrow-service-2 .programs-subtitle {
          font-size: 1.2rem;
        }
      }

      /* Cards row */
      .zigrow-service-2 .programs-row > [class*="col-"] {
        margin-bottom: 24px;
      }

      @media (min-width: 768px) {
        .zigrow-service-2 .programs-row > [class*="col-"] {
          margin-bottom: 0;
        }
      }

      .zigrow-service-2 .program-card {
        background: #fafafa;
        border-radius: 25px;
        padding: 28px 22px;
        transition: all 0.3s ease;
        cursor: pointer;
        min-height: 16rem;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
      }

      @media (min-width: 768px) {
        .zigrow-service-2 .program-card {
          padding: 35px 25px;
          min-height: 19rem;
        }
      }

      .zigrow-service-2 .program-card .icon {
        margin-bottom: 15px;
        background-color: var(--primary-colors, #34a853);
        color: #ffffff;
        border-radius: 16px;
        width: 55px;
        height: 55px;
        position: relative;

        /* Center icon perfectly */
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .zigrow-service-2 .program-card .icon i {
        font-size: 2rem;
      }

      .zigrow-service-2 .program-card h5 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 10px;
        margin-top: 20px;
        color: #222222;
        transition: color 0.3s ease;
      }

      .zigrow-service-2 .program-card p {
        font-size: 0.98rem;
        color: var(--secondary-colors, #969696);
        transition: color 0.3s ease;
      }

      @media (min-width: 992px) {
        .zigrow-service-2 .program-card h5 {
          font-size: 1.4rem;
          margin-top: 25px;
        }

        .zigrow-service-2 .program-card p {
          font-size: 1rem;
        }
      }

      .zigrow-service-2 .program-card:hover {
        background: var(--primary-colors, #34a853);
        color: #ffffff;
      }

      .zigrow-service-2 .program-card:hover .icon {
        background-color: #ffffff;
        color: var(--primary-colors, #34a853);
      }

      .zigrow-service-2 .program-card:hover .icon i {
        color: var(--primary-colors, #34a853);
      }

      .zigrow-service-2 .program-card:hover h5,
      .zigrow-service-2 .program-card:hover p {
        color: #ffffff;
      }

      /* CTA button block */
      .zigrow-service-2 .programs-cta {
        margin-top: 32px;
        text-align: center;
      }

      @media (min-width: 768px) {
        .zigrow-service-2 .programs-cta {
          margin-top: 40px;
          text-align: right;
        }
      }

      .zigrow-service-2 .arrow-img-box {
        text-align: center;
      }
      .zigrow-service-2 .arrow-img-box img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
      .zigrow-service-2 .programs-btn {
        display: inline-block;
        padding: 12px 26px;
        border-radius: 999px;
        background-color: var(--primary-colors, #34a853);
        color: #ffffff;
        text-decoration: none;
        font-weight: 500;
        font-size: 1rem;
        transition: background-color 0.3s ease, transform 0.2s ease,
          box-shadow 0.2s ease;
        box-shadow: 0 8px 18px rgba(52, 168, 83, 0.35);
      }

      .zigrow-service-2 .programs-btn:hover {
        background-color: #2f9448;
        transform: translateY(-1px);
        box-shadow: 0 10px 24px rgba(52, 168, 83, 0.45);
      }

      /* Arrow image */
      .zigrow-service-2 .programs-arrow {
        position: absolute;
        left: 15%;
        bottom: 5%;
        width: 120px;
        transform: rotate(10deg);
      }

      @media (max-width: 768px) {
        .zigrow-service-2 .programs-arrow {
          display: none;
        }
      }
    </style>
    </section>`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-service-3", {
    name: "service-3",
    category: "service",
    image: "https://i.postimg.cc/zGKq5WFr/service-3.png",
    html: `
<section
  id="zigrow-service-3"
  data-section="zigrow-service-3"
  class="zigrow-service-3 py-6"
>
  <div class="container">
    <!-- Heading -->
    <div class="row service-heading">
      <div class="col-12">
        <h2 class="no-theme-size service-title">
          Professional Photography <br />
          Services
        </h2>
      </div>
    </div>

    <!-- Cards grid -->
    <div class="row service-row">
      <!-- Card 1 -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div class="service-card">
          <span class="left-border"></span>

          <div class="service-card-inner">
            <div class="row service-card-top">
              <div class="col-auto">
              
<div class="card-icon" aria-label="Corporate Shoots">
  <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
</div>
              </div>
              <div class="col">
                <h5 class="card-title">Corporate Shoots</h5>
              </div>
            </div>

            <div class="service-card-middle">
              <p class="card-text">
                Polished headshots and brand images for teams, founders, and
                professionals—shot with consistent lighting and clean editing.
              </p>
            </div>

            <div class="service-card-bottom">
              <a href="#" class="card-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div class="service-card">
          <span class="left-border"></span>

          <div class="service-card-inner">
            <div class="row service-card-top">
              <div class="col-auto">
              
<div class="card-icon" aria-label="Travel Photography">
  <i class="fa-solid fa-earth-americas" aria-hidden="true"></i>
</div>
              </div>
              <div class="col">
                <h5 class="card-title">Travel Photography</h5>
              </div>
            </div>

            <div class="service-card-middle">
              <p class="card-text">
                Story-driven travel visuals—landscapes, culture, and details
                captured with a cinematic look for brands and creators.
              </p>
            </div>

            <div class="service-card-bottom">
              <a href="#" class="card-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div class="service-card">
          <span class="left-border"></span>

          <div class="service-card-inner">
            <div class="row service-card-top">
              <div class="col-auto">
              
<div class="card-icon" aria-label="Portrait Sessions">
  <i class="fa-solid fa-masks-theater" aria-hidden="true"></i>
</div>
              </div>
              <div class="col">
                <h5 class="card-title">Portrait Sessions</h5>
              </div>
            </div>

            <div class="service-card-middle">
              <p class="card-text">
                Personal portraits with natural direction—great for actors,
                creators, and anyone who wants confident, authentic images.
              </p>
            </div>

            <div class="service-card-bottom">
              <a href="#" class="card-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div class="service-card">
          <span class="left-border"></span>

          <div class="service-card-inner">
            <div class="row service-card-top">
              <div class="col-auto">
              
<div class="card-icon" aria-label="Wedding Shoots">
  <i class="fa-solid fa-ring" aria-hidden="true"></i>
</div>
              </div>
              <div class="col">
                <h5 class="card-title">Wedding Shoots</h5>
              </div>
            </div>

            <div class="service-card-middle">
              <p class="card-text">
                Candid moments and classic portraits—documenting your day with
                warm tones, true-to-life color, and timeless framing.
              </p>
            </div>

            <div class="service-card-bottom">
              <a href="#" class="card-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div class="service-card">
          <span class="left-border"></span>

          <div class="service-card-inner">
            <div class="row service-card-top">
              <div class="col-auto">
              
<div class="card-icon" aria-label="Product Photography">
  <i class="fa-solid fa-bag-shopping" aria-hidden="true"></i>
</div>
              </div>
              <div class="col">
                <h5 class="card-title">Product Photography</h5>
              </div>
            </div>

            <div class="service-card-middle">
              <p class="card-text">
                High-converting product shots for ecommerce—clean backgrounds,
                crisp details, and styled images that fit your brand.
              </p>
            </div>

            <div class="service-card-bottom">
              <a href="#" class="card-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="col-12 col-md-6 col-lg-4 clonable-card">
        <div class="service-card">
          <span class="left-border"></span>

          <div class="service-card-inner">
            <div class="row service-card-top">
              <div class="col-auto">
             
<div class="card-icon" aria-label="Fashion Shoots">
  <i class="fa-solid fa-shirt" aria-hidden="true"></i>
</div>
              </div>
              <div class="col">
                <h5 class="card-title">Fashion Shoots</h5>
              </div>
            </div>

            <div class="service-card-middle">
              <p class="card-text">
                Editorial-style fashion photography—posed and candid frames that
                highlight styling, texture, and movement for brands and models.
              </p>
            </div>

            <div class="service-card-bottom">
              <a href="#" class="card-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-service-3 {
      background-color: #121212;
      color: #ffffff;
    }
    .py-6 {
      padding: 3rem 0;
    }

    .zigrow-service-3 .service-heading {
      margin-bottom: 32px;
    }

    .zigrow-service-3 .service-title {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 1.2;
      margin: 0;
      text-align: center;
    }

    @media (min-width: 768px) {
      .zigrow-service-3 .service-title {
        font-size: 3rem;
        text-align: left;
      }
      .zigrow-service-3 .service-heading {
        margin-bottom: 40px;
      }
    }

    .zigrow-service-3 .service-row > [class*="col-"] {
      margin-bottom: 24px;
    }
    @media (min-width: 768px) {
      .zigrow-service-3 .service-row > [class*="col-"] {
        margin-bottom: 32px;
      }
    }

    .zigrow-service-3 .service-card {
      background-color: #2c2c2f;
      border-radius: 1rem;
      transition: transform 0.3s ease, background 0.3s ease;
      height: 100%;
      cursor: pointer;
      padding: 20px 18px;
      position: relative;
    }
    @media (min-width: 768px) {
      .zigrow-service-3 .service-card {
        padding: 24px 20px;
      }
    }

    .zigrow-service-3 .service-card:hover {
      transform: translateY(-5px);
      background-color: #292929;
    }

    .zigrow-service-3 .left-border {
      position: absolute;
      top: 25%;
      left: 0;
      width: 0.2rem;
      height: 100px;
      background: var(--primary-colors, #ff6b35);
    }

    .zigrow-service-3 .service-card-top {
      margin-bottom: 12px;
    }

 /* Replace with this */
.zigrow-service-3 .card-icon {
  text-align: center;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

  /* Replace with this */
.zigrow-service-3 .card-icon i {
  color: var(--primary-colors, #ff6b35);
  font-size: 24px;
  line-height: 1;
}

    .zigrow-service-3 .card-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 4px 0 0;
      color: #ffffff;
    }

    @media (min-width: 768px) {
      .zigrow-service-3 .card-title {
        font-size: 1.2rem;
      }
    }

    .zigrow-service-3 .card-text {
      font-size: 0.95rem;
      color:#fff;
      margin: 12px 0 0;
    }

    .zigrow-service-3 .card-link {
      display: inline-block;
      margin-top: 10px;
      font-size: 0.9rem;
      color: var(--primary-colors, #ff6b35);
      text-decoration: none;
    }

    .zigrow-service-3 .card-link:hover {
      text-decoration: underline;
    }

    .zigrow-service-3 .service-card-inner {
      height: 100%;
    }

    .zigrow-service-3 .service-card-bottom {
      margin-top: 10px;
    }

    @media (min-width: 992px) {
      .zigrow-service-3 .service-card {
        min-height: 215px;
      }
    }
  </style>

  <script>
    // NOTE: Your HTML currently doesn't include .mySwiper markup.
    // Keep this only if you're using Swiper somewhere else on the page.
    if (window.Swiper) {
      const swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
          0: { slidesPerView: 1, slidesPerGroup: 1, grid: { rows: 1 } },
          768: { slidesPerView: 2, slidesPerGroup: 2, grid: { rows: 2, fill: "row" } },
          1200: { slidesPerView: 3, slidesPerGroup: 3, grid: { rows: 2, fill: "row" } },
        },
      });
    }
  </script>
</section>
`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-service-4", {
    name: "service-4",
    category: "service",
    image: "https://i.postimg.cc/htTKgx1K/service-4.png",
    html: `   <section id="zigrow-service-4" class="zigrow-service-4 py-6" data-section="zigrow-service-4">
      <div class="container">
        <h2 class="no-theme-size top-title">Tailored Tours for Every <br />Traveler</h2>

        <div class="row g-4 g-md-5">
          <!-- CARD 1 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="tour-card">
              <span class="tour-label">Royal Heritage Walk</span>

              <div class="tour-image-wrapper">
                <img
                   src="/builder/img/zigrow-service-images/zigrow-service-4-top-categories e.webp"
                  alt="Royal Heritage Walk"
                  class="tour-image"
                />
              </div>

              <a href="#" class="arrow-btn">
                <i class="bi bi-arrow-right" data-icon="arrow"></i>
              </a>
            </div>
          </div>

          <!-- CARD 2 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="tour-card">
              <span class="tour-label">Mountain Escape</span>

              <div class="tour-image-wrapper">
                <img
                    src="/builder/img/zigrow-service-images/zigrow-service-4-top-categories d.webp"
                  alt="Mountain Escape"
                  class="tour-image"
                />
              </div>

              <a href="#" class="arrow-btn">
                <i class="bi bi-arrow-right" data-icon="arrow"></i>
              </a>
            </div>
          </div>

          <!-- CARD 3 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="tour-card">
              <span class="tour-label">Hidden City Gems</span>

              <div class="tour-image-wrapper">
                <img
                  src="/builder/img/zigrow-service-images/zigrow-service-4-top-categories c.webp"
                  alt="Hidden City Gems"
                  class="tour-image"
                />
              </div>

              <a href="#" class="arrow-btn">
                <i class="bi bi-arrow-right" data-icon="arrow"></i>
              </a>
            </div>
          </div>

          <!-- CARD 4 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="tour-card">
              <span class="tour-label">Coastal Serenity</span>

              <div class="tour-image-wrapper">
                <img
                  src="/builder/img/zigrow-service-images/zigrow-service-4-top-categories b.webp"
                  alt="Coastal Serenity"
                  class="tour-image"
                />
              </div>

              <a href="#" class="arrow-btn">
                <i class="bi bi-arrow-right" data-icon="arrow"></i>
              </a>
            </div>
          </div>

          <!-- CARD 5 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="tour-card">
              <span class="tour-label">Wildlife Safari</span>

              <div class="tour-image-wrapper">
                <img
                  src="/builder/img/zigrow-service-images/zigrow-service-4-top-categories a.webp"
                  alt="Wildlife Safari"
                  class="tour-image"
                />
              </div>

              <a href="#" class="arrow-btn">
                <i class="bi bi-arrow-right" data-icon="arrow"></i>
              </a>
            </div>
          </div>

          <!-- CARD 6 -->
          <div class="col-12 col-md-6 col-lg-4 clonable-card">
            <div class="tour-card">
              <span class="tour-label">Culinary &amp; Wine Tour</span>

              <div class="tour-image-wrapper">
                <img
                   src="/builder/img/zigrow-service-images/zigrow-service-4-top-categories f.webp"
                  alt="Culinary &amp; Wine Tour"
                  class="tour-image"
                />
              </div>

              <a href="#" class="arrow-btn">
                <i class="bi bi-arrow-right" data-icon="arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
        <style>
      /* ===========================
   TOUR SECTION (PARENT)
=========================== */
      .zigrow-service-4 {
        background-color: #ffffff;
      }

      .py-6 {
        padding: 3rem 0;
      }

      /* Section heading */
      .zigrow-service-4 .top-title {
        font-size: 2.3rem;
        font-weight: 600;
        margin-bottom: 2.5rem;
        line-height: 1.2;
      }

      /* ===========================
   CARD WRAPPER
=========================== */
      .zigrow-service-4 .tour-card {
        position: relative;
        border-radius: 50px;
        overflow: hidden;
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
        transition: box-shadow 0.3s ease;
        background: #ffffff;
      }

      /* Hover elevation */
      .zigrow-service-4 .tour-card-hover:hover {
        box-shadow: 0 24px 50px rgba(0, 0, 0, 0.22);
      }

      /* Optional wrapper (in your HTML) */
      .zigrow-service-4 .tour-card .tour-image-wrapper {
        text-align: center;
        width: 100%;
        overflow: hidden;
        border-radius: 40px;
      }

      /* ===========================
   IMAGE
=========================== */
      .zigrow-service-4 .tour-card .tour-image {
        max-width: 100%;
        max-height: 100%;
        height: 260px;
        object-fit: cover;
        border-radius: 40px;
        transition: transform 0.3s ease;
      }

      /* Image zoom on hover */
      .zigrow-service-4 .tour-card .tour-image:hover {
        transform: scale(1.05);
      }

      /* ===========================
   TITLE PILL
=========================== */
      .zigrow-service-4 .tour-card .tour-label {
        position: absolute;
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        padding: 8px 28px;
        border-radius: 999px;
        font-weight: 600;
        font-size: 0.98rem;
        width: 80%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        z-index: 3;
      }

      /* ===========================
   WHITE CURVED CUT (BOTTOM RIGHT)
=========================== */
      .zigrow-service-4 .tour-card::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 90px;
        height: 90px;
        /* background: #ffffff; */
        border-top-left-radius: 100%;
        border-bottom-right-radius: 0;
        z-index: 1;
      }

      /* ===========================
   ARROW BUTTON (ANCHOR)
=========================== */
      .zigrow-service-4 .tour-card .arrow-btn {
        position: absolute;
        right: 14px;
        bottom: 18px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: none;
        background: #000;
        color: #fff;
        text-decoration: none;
        font-size: 2rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
        transition: transform 0.25s ease;
      }

      /* icon inside arrow */
      .zigrow-service-4 .tour-card .arrow-btn i[data-icon="arrow"] {
        font-size: 1.9rem;
      }

      /* subtle move on hover */
      .zigrow-service-4 .tour-card .arrow-btn:hover {
        transform: translateX(2px);
      }

      /* focus state */
      .zigrow-service-4 .tour-card .arrow-btn:focus {
        outline: 2px solid #fff;
        outline-offset: 3px;
      }

      /* ===========================
   RESPONSIVE TWEAKS
=========================== */

      /* Laptops / small desktops (<= 1199px) */
      @media (max-width: 1199.98px) {
        .zigrow-service-4 .top-title {
          font-size: 2rem;
        }

        .zigrow-service-4 .tour-card .tour-image {
          height: 240px;
        }

        .zigrow-service-4 .tour-card .arrow-btn {
          width: 64px;
          height: 64px;
          bottom: 16px;
          right: 14px;
        }

        .zigrow-service-4 .tour-card::after {
          width: 85px;
          height: 85px;
        }
      }

      /* Tablets (<= 991px) – 2 columns by Bootstrap */
      @media (max-width: 991.98px) {
        .zigrow-service-4 .top-title {
          font-size: 1.9rem;
          margin-bottom: 2rem;
        }

        .zigrow-service-4 .tour-card .tour-image {
          height: 230px;
        }

        .zigrow-service-4 .tour-card .tour-label {
          font-size: 0.9rem;
          width: 85%;
        }

        .zigrow-service-4 .tour-card::after {
          width: 80px;
          height: 80px;
        }

        .zigrow-service-4 .tour-card .arrow-btn {
          width: 60px;
          height: 60px;
          bottom: 16px;
          right: 14px;
        }

        .zigrow-service-4 .tour-card .arrow-btn i[data-icon="arrow"] {
          font-size: 1.6rem;
        }
      }

      /* Mobiles (<= 767px) – 1 column by Bootstrap */
      @media (max-width: 767.98px) {
        .py-6 {
          padding: 2.5rem 0;
        }

        .zigrow-service-4 .top-title {
          font-size: 1.8rem;
        }

        .zigrow-service-4 .tour-card {
          border-radius: 40px;
        }

        .zigrow-service-4 .tour-card .tour-image {
          height: 220px;
        }

        .zigrow-service-4 .tour-card .tour-label {
          font-size: 0.88rem;
          padding: 6px 18px;
          width: 90%;
          white-space: normal;
        }

        .zigrow-service-4 .tour-card::after {
          width: 75px;
          height: 75px;
        }

        .zigrow-service-4 .tour-card .arrow-btn {
          width: 56px;
          height: 56px;
          right: 14px;
          bottom: 16px;
        }

        .zigrow-service-4 .tour-card .arrow-btn i[data-icon="arrow"] {
          font-size: 1.4rem;
        }
      }

      /* Extra small mobiles (<= 575px) */
      @media (max-width: 575.98px) {
        .zigrow-service-4 .top-title {
          font-size: 1.7rem;
          margin-bottom: 1.8rem;
        }

        .zigrow-service-4 .tour-card .tour-image {
          height: 210px;
        }

        .zigrow-service-4 .tour-card .tour-label {
          width: 92%;
        }
      }
    </style>
    </section>`,
});


Vvveb.Blocks.add("bootstrap4/zigrow-service-5", {
  name: "Service-5",
  category: "service",
  image:
    "https://i.postimg.cc/DzrwFKBX/Screenshot-2026-07-22-160936.png",

  html: `
<section
  id="zigrow-service-5"
  data-section="zigrow-service-5"
  class="zigrow-service-5"
>
  <div class="container zigrow-service-5-container">
    <div class="zigrow-service-5-heading">
      <h2>Our Professional Services</h2>

      <p>
        Tailored solutions created to support your unique business needs.
      </p>

      <div class="zigrow-service-5-heading-action">
        <a
          href="#services"
          class="zigrow-service-5-heading-button"
          data-btn="service"
        >
          See More
        </a>
      </div>
    </div>

    <div class="row zigrow-service-5-grid">
      <!-- Card 1 -->
      <div
        class="col-12 col-md-6 col-lg-4 zigrow-service-5-column clonable-card"
      >
        <div
          class="zigrow-service-5-card"
          style="background-image: url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=85');"
          role="img"
          aria-label="Professionals planning a tailored business solution"
        >
          <div class="zigrow-service-5-overlay"></div>

          <div class="zigrow-service-5-card-content">
            <h3>Strategic Planning</h3>

            <p>
              Build a clear direction with practical plans designed around your
              goals and priorities.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="col-12 col-md-6 col-lg-4 zigrow-service-5-column clonable-card"
      >
        <div
          class="zigrow-service-5-card"
          style="background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85');"
          role="img"
          aria-label="Team developing an effective service approach"
        >
          <div class="zigrow-service-5-overlay"></div>

          <div class="zigrow-service-5-card-content">
            <h3>Custom Solutions</h3>

            <p>
              Receive flexible solutions carefully developed to match your
              requirements and workflow.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="col-12 col-md-6 col-lg-4 zigrow-service-5-column clonable-card"
      >
        <div
          class="zigrow-service-5-card"
          style="background-image: url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85');"
          role="img"
          aria-label="Professional team providing ongoing business support"
        >
          <div class="zigrow-service-5-overlay"></div>

          <div class="zigrow-service-5-card-content">
            <h3>Reliable Support</h3>

            <p>
              Stay supported with responsive guidance that keeps your business
              moving with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-service-5 {
      width: 100%;
      padding: 72px 0;
      overflow: hidden;
      background: #ffffff;
    }

    .zigrow-service-5 .zigrow-service-5-container {
      max-width: 1120px;
    }

    .zigrow-service-5 .zigrow-service-5-heading {
      max-width: 650px;
      margin: 0 auto 48px;
      text-align: center;
    }

    .zigrow-service-5 .zigrow-service-5-heading h2 {
      margin: 0;
      color: var(--secondary-colors, #77716d);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      letter-spacing: -0.035em;
      line-height: 1.15;
    }

    .zigrow-service-5 .zigrow-service-5-heading p {
      margin: 8px 0 0;
      color: var(--secondary-colors, #77716d);
      font-size: 0.98rem;
      line-height: 1.55;
    }

    .zigrow-service-5 .zigrow-service-5-heading-action {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      margin-top: 18px;
    }

    .zigrow-service-5 .zigrow-service-5-heading-button {
      display: grid;
      min-height: 34px;
      padding: 8px 16px;
      place-items: center;
      border: 1px solid transparent;
      border-radius: 0;
      background: var(--primary-colors, #efedeb);
      color: #ffffff;
      font-size: 0.78rem;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      transition:
        background-color 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }

    .zigrow-service-5 .zigrow-service-5-heading-button:hover {
      transform: translateY(-2px);
      color: #ffffff;
    }

    .zigrow-service-5 .zigrow-service-5-grid {
      margin-right: -10px;
      margin-left: -10px;
      row-gap: 20px;
    }

    .zigrow-service-5 .zigrow-service-5-column {
      min-width: 0;
      padding-right: 10px;
      padding-left: 10px;
    }

    .zigrow-service-5 .zigrow-service-5-card {
      position: relative;
      isolation: isolate;
      height: 430px;
      overflow: hidden;
      border-radius: 0;
      background-color: var(--territory-colors, #dad6d1);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 0 14px 34px rgba(30, 26, 23, 0.08);
      transition:
        background-size 0.45s ease,
        background-position 0.45s ease;
    }

    .zigrow-service-5 .zigrow-service-5-overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(
        180deg,
        rgba(18, 16, 15, 0.04) 35%,
        rgba(18, 16, 15, 0.82) 100%
      );
      pointer-events: none;
    }

    .zigrow-service-5 .zigrow-service-5-card-content {
      position: absolute;
      right: 22px;
      bottom: 20px;
      left: 22px;
      z-index: 2;
      text-align: center;
    }

    .zigrow-service-5 .zigrow-service-5-card-content h3 {
      margin: 0 0 8px;
      color: #ffffff;
      font-size: 1.18rem;
      font-weight: 700;
      line-height: 1.25;
    }

    .zigrow-service-5 .zigrow-service-5-card-content p {
      max-width: 290px;
      margin: 0 auto;
      color: #f3f3f3;
      font-size: 0.82rem;
      line-height: 1.5;
    }

    @media (max-width: 991px) {
      .zigrow-service-5 {
        padding: 62px 0;
      }

      .zigrow-service-5 .zigrow-service-5-card {
        height: 400px;
      }
    }

    @media (max-width: 767px) {
      .zigrow-service-5 .zigrow-service-5-heading {
        margin-bottom: 36px;
      }

      .zigrow-service-5 .zigrow-service-5-card {
        height: 440px;
      }
    }

    @media (max-width: 480px) {
      .zigrow-service-5 {
        padding: 48px 0;
      }

      .zigrow-service-5 .zigrow-service-5-heading h2 {
        font-size: 2rem;
      }

      .zigrow-service-5 .zigrow-service-5-card {
        height: 390px;
      }

      .zigrow-service-5 .zigrow-service-5-card-content {
        right: 18px;
        bottom: 18px;
        left: 18px;
      }
    }
  </style>
</section>
`,
});


Vvveb.Blocks.add("bootstrap4/zigrow-howItWorks-1", {
  name: "How It Works-1",
  category: "how-it-works",
  image: "https://i.postimg.cc/Zq85ZhVp/Howitwork-1.png",
  html: `
<section
  id="zigrow-howItWorks-1"
  class="zigrow-howItWorks-1"
  data-section="zigrow-howItWorks-1"
>
  <div class="container">
    <div class="zigrow-howItWorks-1-heading">
      <p class="zigrow-howItWorks-1-eyebrow">Our Process</p>

      <h2 class="no-theme-size zigrow-howItWorks-1-title">
        How we work
      </h2>
    </div>

    <div class="zigrow-howItWorks-1-grid">
      <div class="zigrow-howItWorks-1-grid-item clonable-card">
        <div
          class="zigrow-howItWorks-1-step"
          data-zg-editable="surface"
        >
          <p class="zigrow-howItWorks-1-number">1</p>

          <h3 class="zigrow-howItWorks-1-step-title">
            Consultation and Discovery
          </h3>

          <p class="zigrow-howItWorks-1-step-text">
            Share your goals and requirements so we can understand your
            business, audience, and priorities.
          </p>
        </div>
      </div>

      <div class="zigrow-howItWorks-1-grid-item clonable-card">
        <div
          class="zigrow-howItWorks-1-step"
          data-zg-editable="surface"
        >
          <p class="zigrow-howItWorks-1-number">2</p>

          <h3 class="zigrow-howItWorks-1-step-title">
            Planning and Strategy
          </h3>

          <p class="zigrow-howItWorks-1-step-text">
            We create a focused plan that combines practical direction with
            solutions suited to your needs.
          </p>
        </div>
      </div>

      <div class="zigrow-howItWorks-1-grid-item clonable-card">
        <div
          class="zigrow-howItWorks-1-step"
          data-zg-editable="surface"
        >
          <p class="zigrow-howItWorks-1-number">3</p>

          <h3 class="zigrow-howItWorks-1-step-title">
            Build, Test, and Refine
          </h3>

          <p class="zigrow-howItWorks-1-step-text">
            Our team develops the solution, reviews every detail, and improves
            it for reliable performance.
          </p>
        </div>
      </div>

      <div class="zigrow-howItWorks-1-grid-item clonable-card">
        <div
          class="zigrow-howItWorks-1-step"
          data-zg-editable="surface"
        >
          <p class="zigrow-howItWorks-1-number">4</p>

          <h3 class="zigrow-howItWorks-1-step-title">
            Support and Growth
          </h3>

          <p class="zigrow-howItWorks-1-step-text">
            We monitor progress, share useful updates, and provide support as
            your requirements continue to grow.
          </p>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-howItWorks-1 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3rem, 6vw, 5.5rem) 0;
      background: #fff;
    }

    .zigrow-howItWorks-1 .zigrow-howItWorks-1-heading {
      margin-bottom: clamp(3.5rem, 8vw, 7rem);
    }

    .zigrow-howItWorks-1 .zigrow-howItWorks-1-eyebrow {
      margin: 0 0 1.1rem;
      color: var(--secondary-colors, #7e818c);
      font-size: 0.68rem;
      font-weight: 500;
      line-height: 1;
      letter-spacing: 0.02em;
    }

    .zigrow-howItWorks-1 .zigrow-howItWorks-1-title {
      margin: 0;
      color: #d9d9dc;
      font-size: clamp(2.7rem, 5vw, 4.8rem);
      font-weight: 400;
      line-height: 1;
      letter-spacing: -0.045em;
    }

    .zigrow-howItWorks-1 .zigrow-howItWorks-1-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: clamp(1.8rem, 4vw, 4.5rem);
    }

    .zigrow-howItWorks-1 .zigrow-howItWorks-1-grid-item {
      min-width: 0;
    }

    .zigrow-howItWorks-1 .zigrow-howItWorks-1-step {
      height: 100%;
      padding: 0.5rem;

    }

    .zigrow-howItWorks-1 .zigrow-howItWorks-1-number {
      margin: 0 0 0.8rem;
      color: var(--secondary-colors, #94969e);
      font-size: clamp(2.7rem, 4vw, 4rem);
      font-weight: 300;
      line-height: 1;
      letter-spacing: -0.04em;
    }

    .zigrow-howItWorks-1 .zigrow-howItWorks-1-step-title {
      margin: 0;
      color: #d0d1d5;
      font-size: clamp(1.15rem, 1.7vw, 1.55rem);
      font-weight: 400;
      line-height: 1.25;
      letter-spacing: -0.025em;
    }

    .zigrow-howItWorks-1 .zigrow-howItWorks-1-step-text {
      max-width: 18rem;
      margin: 0.9rem 0 0;
      color: var(--secondary-colors, #858892);
      font-size: clamp(0.82rem, 1vw, 0.92rem);
      line-height: 1.55;
    }

    .zigrow-howItWorks-1 .zigrow-howItWorks-1-step {
      transition: transform 0.3s ease;
    }

    .zigrow-howItWorks-1 .zigrow-howItWorks-1-step:hover {
      transform: translateY(-0.3rem);
    }

    .zigrow-howItWorks-1
      .zigrow-howItWorks-1-step:hover
      .zigrow-howItWorks-1-number {
      color: var(--primary-colors, #b6b8c2);
    }

    @media (max-width: 991px) {
      .zigrow-howItWorks-1 .zigrow-howItWorks-1-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        row-gap: 3.5rem;
      }
    }

    @media (max-width: 575px) {
      .zigrow-howItWorks-1 {
        padding: 3rem 0;
      }

      .zigrow-howItWorks-1 .zigrow-howItWorks-1-heading {
        margin-bottom: 3.5rem;
      }

      .zigrow-howItWorks-1 .zigrow-howItWorks-1-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .zigrow-howItWorks-1 .zigrow-howItWorks-1-step-text {
        max-width: 26rem;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-howItWorks-2", {
  name: "How It Works-2",
  category: "how-it-works",
  image:
    "https://i.postimg.cc/cHT1gMpX/Howitwork-2.png",
  html: `
<section
  id="zigrow-howItWorks-2"
  class="zigrow-howItWorks-2"
  data-section="zigrow-howItWorks-2"
>
  <div class="zigrow-howItWorks-2-container">
    <div class="zigrow-howItWorks-2-heading">
      <p class="zigrow-howItWorks-2-eyebrow">
        <span class="zigrow-howItWorks-2-eyebrow-icon">
          <i class="bi bi-stars" data-icon="stars"></i>
        </span>

        <span>Efficient</span>
      </p>

      <h2 class="no-theme-size zigrow-howItWorks-2-title">How It Works With Us</h2>

      <div class="zigrow-howItWorks-2-button-wrap">
        <a
          href="#contact"
          class="zigrow-howItWorks-2-button"
          data-btn="how-it-works"
        >
          Contact Us
        </a>
      </div>
    </div>

    <div
      class="zigrow-howItWorks-2-tabs"
      id="tabs-zigrow-howItWorks-2"
      data-component-tabs
    >
      <div class="zigrow-howItWorks-2-layout">
        <nav
          class="zigrow-howItWorks-2-navigation"
          aria-label="How it works process"
        >
          <div
            class="nav nav-tabs zigrow-howItWorks-2-tab-list"
            role="tablist"
          >
            <button
              class="nav-link active zigrow-howItWorks-2-tab-button"
              id="nav-tab-zigrow-howItWorks-2-1"
              data-bs-toggle="tab"
              data-bs-target="#nav-zigrow-howItWorks-2-1"
              type="button"
              role="tab"
              aria-controls="nav-zigrow-howItWorks-2-1"
              aria-selected="true"
            >
              <span class="zigrow-howItWorks-2-tab-heading">
                <span class="zigrow-howItWorks-2-tab-title">
                  Book a Discovery Call
                </span>

                <span class="zigrow-howItWorks-2-tab-icon">
                  <i
                    class="bi bi-chevron-down"
                    data-icon="chevron-down"
                  ></i>
                </span>
              </span>

              <span class="zigrow-howItWorks-2-tab-description">
                We begin by understanding your goals, current challenges, and
                priorities so we can recommend the right direction with
                clarity.
              </span>
            </button>

            <button
              class="nav-link zigrow-howItWorks-2-tab-button"
              id="nav-tab-zigrow-howItWorks-2-2"
              data-bs-toggle="tab"
              data-bs-target="#nav-zigrow-howItWorks-2-2"
              type="button"
              role="tab"
              aria-controls="nav-zigrow-howItWorks-2-2"
              aria-selected="false"
            >
              <span class="zigrow-howItWorks-2-tab-heading">
                <span class="zigrow-howItWorks-2-tab-title">
                  Strategy Session
                </span>

                <span class="zigrow-howItWorks-2-tab-icon">
                  <i
                    class="bi bi-chevron-down"
                    data-icon="chevron-down"
                  ></i>
                </span>
              </span>

              <span class="zigrow-howItWorks-2-tab-description">
                We turn the initial insights into a clear plan with practical
                steps, realistic timelines, and well-defined deliverables.
              </span>
            </button>

            <button
              class="nav-link zigrow-howItWorks-2-tab-button"
              id="nav-tab-zigrow-howItWorks-2-3"
              data-bs-toggle="tab"
              data-bs-target="#nav-zigrow-howItWorks-2-3"
              type="button"
              role="tab"
              aria-controls="nav-zigrow-howItWorks-2-3"
              aria-selected="false"
            >
              <span class="zigrow-howItWorks-2-tab-heading">
                <span class="zigrow-howItWorks-2-tab-title">
                  Design and Development
                </span>

                <span class="zigrow-howItWorks-2-tab-icon">
                  <i
                    class="bi bi-chevron-down"
                    data-icon="chevron-down"
                  ></i>
                </span>
              </span>

              <span class="zigrow-howItWorks-2-tab-description">
                Our team creates and refines the solution with a strong focus on
                quality, usability, performance, and your business objectives.
              </span>
            </button>

            <button
              class="nav-link zigrow-howItWorks-2-tab-button"
              id="nav-tab-zigrow-howItWorks-2-4"
              data-bs-toggle="tab"
              data-bs-target="#nav-zigrow-howItWorks-2-4"
              type="button"
              role="tab"
              aria-controls="nav-zigrow-howItWorks-2-4"
              aria-selected="false"
            >
              <span class="zigrow-howItWorks-2-tab-heading">
                <span class="zigrow-howItWorks-2-tab-title">
                  Launch and Support
                </span>

                <span class="zigrow-howItWorks-2-tab-icon">
                  <i
                    class="bi bi-chevron-down"
                    data-icon="chevron-down"
                  ></i>
                </span>
              </span>

              <span class="zigrow-howItWorks-2-tab-description">
                After launch, we provide dependable assistance, useful updates,
                and improvements that support your continued business growth.
              </span>
            </button>
          </div>
        </nav>

        <div
          class="tab-content zigrow-howItWorks-2-tab-content"
          data-zg-editable="surface"
        >
          <div
            class="tab-pane fade show active zigrow-howItWorks-2-tab-pane"
            id="nav-zigrow-howItWorks-2-1"
            role="tabpanel"
            aria-labelledby="nav-tab-zigrow-howItWorks-2-1"
            tabindex="0"
          >
            <div
              class="zigrow-howItWorks-2-image-wrap zigrow-howItWorks-2-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"
                alt="Professionals having a business discovery call"
              />
            </div>
          </div>

          <div
            class="tab-pane fade zigrow-howItWorks-2-tab-pane"
            id="nav-zigrow-howItWorks-2-2"
            role="tabpanel"
            aria-labelledby="nav-tab-zigrow-howItWorks-2-2"
            tabindex="0"
          >
            <div
              class="zigrow-howItWorks-2-image-wrap zigrow-howItWorks-2-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"
                alt="Team working through a business strategy session"
              />
            </div>
          </div>

          <div
            class="tab-pane fade zigrow-howItWorks-2-tab-pane"
            id="nav-zigrow-howItWorks-2-3"
            role="tabpanel"
            aria-labelledby="nav-tab-zigrow-howItWorks-2-3"
            tabindex="0"
          >
            <div
              class="zigrow-howItWorks-2-image-wrap zigrow-howItWorks-2-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"
                alt="Design and development work in progress"
              />
            </div>
          </div>

          <div
            class="tab-pane fade zigrow-howItWorks-2-tab-pane"
            id="nav-zigrow-howItWorks-2-4"
            role="tabpanel"
            aria-labelledby="nav-tab-zigrow-howItWorks-2-4"
            tabindex="0"
          >
            <div
              class="zigrow-howItWorks-2-image-wrap zigrow-howItWorks-2-media-center"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"
                alt="Professional team providing launch and ongoing support"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-howItWorks-2 {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding: clamp(3rem, 6vw, 5.5rem) 0;
      background:
        radial-gradient(
          circle at top left,
          rgba(112, 86, 181, 0.32),
          transparent 25%
        ),
        radial-gradient(
          circle at right center,
          rgba(86, 72, 184, 0.26),
          transparent 24%
        ),
        linear-gradient(180deg, #141318 0%, #0d0d12 100%);
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-container {
      width: min(100% - 2rem, 1280px);
      margin: 0 auto;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-heading {
      margin-bottom: clamp(2rem, 4vw, 3rem);
      text-align: center;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-eyebrow {
      display: inline-grid;
      grid-template-columns: auto auto;
      gap: 0.4rem;
      align-items: center;
      margin: 0 0 0.85rem;
      color: #a38adf;
      font-size: 0.78rem;
      font-weight: 500;
      line-height: 1;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-eyebrow-icon {
      display: grid;
      place-items: center;
      width: 0.9rem;
      height: 0.9rem;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-eyebrow-icon i {
      font-size: 0.8rem;
      line-height: 1;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-title {
      margin: 0;
      color: #f3f0f6;
      font-size: clamp(2.2rem, 4vw, 3.6rem);
      font-weight: 500;
      line-height: 1.08;
      letter-spacing: -0.04em;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-button-wrap {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      margin-top: 1.25rem;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: auto;
      max-width: max-content;
      min-height: 2.7rem;
      padding: 0.75rem 1.35rem;
      border: 1px solid var(--primary-colors, #ff8b47);
      border-radius: 999px;
      background: var(--primary-colors, #ff8b47);
      color: #ffffff;
      font-size: 0.82rem;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        filter 0.25s ease;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-button:hover {
      transform: translateY(-0.15rem);
      box-shadow: 0 0.8rem 1.8rem rgba(255, 139, 71, 0.2);
      filter: brightness(1.03);
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(22rem, 0.95fr);
      gap: clamp(1.5rem, 3vw, 2.5rem);
      align-items: stretch;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-navigation {
      min-width: 0;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-list {
      display: grid;
      gap: 0.85rem;
      border: 0;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-button {
      width: 100%;
      margin: 0;
      padding: 1.1rem 1.2rem;
      overflow: hidden;
      border: 1px solid rgba(120, 92, 201, 0.18);
      border-radius: 0.9rem;
      background: rgba(14, 14, 20, 0.88);
      color: #f2eef8;
      text-align: left;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
      transition:
        border-color 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-button:hover {
      border-color: rgba(126, 96, 214, 0.35);
      color: #f2eef8;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-button.active {
      border-color: rgba(126, 96, 214, 0.42);
      background: linear-gradient(
        180deg,
        rgba(38, 31, 66, 0.92) 0%,
        rgba(21, 19, 31, 0.96) 100%
      );
      color: #f2eef8;
      box-shadow:
        0 0.5rem 1.8rem rgba(18, 16, 30, 0.28),
        inset 0 0 0 1px rgba(166, 137, 236, 0.08);
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-button:focus {
      border-color: rgba(166, 137, 236, 0.55);
      box-shadow: 0 0 0 0.18rem rgba(126, 96, 214, 0.14);
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-heading {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 1rem;
      align-items: center;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-title {
      color: #f2eef8;
      font-size: 1.02rem;
      font-weight: 400;
      line-height: 1.35;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-icon {
      display: grid;
      place-items: center;
      width: 1.65rem;
      height: 1.65rem;
      border: 1px solid rgba(123, 101, 187, 0.26);
      border-radius: 50%;
      background: rgba(74, 63, 106, 0.24);
      color: #a690e7;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-icon i {
      font-size: 0.78rem;
      line-height: 1;
      transition: transform 0.25s ease;
    }

    .zigrow-howItWorks-2
      .zigrow-howItWorks-2-tab-button.active
      .zigrow-howItWorks-2-tab-icon {
      background: rgba(113, 91, 176, 0.34);
      color: #d6c7ff;
    }

    .zigrow-howItWorks-2
      .zigrow-howItWorks-2-tab-button.active
      .zigrow-howItWorks-2-tab-icon
      i {
      transform: rotate(180deg);
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-description {
      display: block;
      max-height: 0;
      margin-top: 0;
      overflow: hidden;
      color: #9b96a8;
      font-size: 0.86rem;
      line-height: 1.7;
      opacity: 0;
      transition:
        max-height 0.35s ease,
        margin-top 0.35s ease,
        opacity 0.25s ease;
    }

    .zigrow-howItWorks-2
      .zigrow-howItWorks-2-tab-button.active
      .zigrow-howItWorks-2-tab-description {
      max-height: 9rem;
      margin-top: 0.8rem;
      opacity: 1;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-content {
      position: relative;
      min-height: 31rem;
      padding: 1rem;
      border: 1px solid rgba(255, 139, 71, 0.18);
      border-radius: 1rem;
      background: linear-gradient(
        135deg,
        rgba(64, 45, 75, 0.68) 0%,
        rgba(71, 42, 28, 0.76) 100%
      );
      box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, 0.03),
        0 1rem 2.6rem rgba(14, 10, 14, 0.3);
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-content::before {
      content: "";
      position: absolute;
      inset: 1rem;
      z-index: 2;
      border: 1px solid rgba(255, 139, 71, 0.08);
      border-radius: 0.9rem;
      pointer-events: none;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-pane {
      position: absolute;
      inset: 1rem;
      overflow: hidden;
      border-radius: 0.85rem;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-pane:not(.active) {
      pointer-events: none;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-image-wrap {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 0.85rem;
      background: rgba(29, 23, 36, 0.62);
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-media-center {
      text-align: center;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-image-wrap::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgba(55, 39, 76, 0.25),
        rgba(91, 44, 23, 0.32)
      );
      pointer-events: none;
    }

    .zigrow-howItWorks-2 .zigrow-howItWorks-2-image-wrap img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
    }

    @media (max-width: 991px) {
      .zigrow-howItWorks-2 .zigrow-howItWorks-2-layout {
        grid-template-columns: 1fr;
      }

      .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-content {
        min-height: 25rem;
      }
    }

    @media (max-width: 767px) {
      .zigrow-howItWorks-2 {
        padding: 3rem 0;
      }

      .zigrow-howItWorks-2 .zigrow-howItWorks-2-container {
        width: min(100% - 1.25rem, 1280px);
      }

      .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-button {
        padding: 1rem;
      }

      .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-title {
        font-size: 0.96rem;
      }

      .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-content {
        min-height: 21rem;
        padding: 0.85rem;
      }

      .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-content::before,
      .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-pane {
        inset: 0.85rem;
      }
    }

    @media (max-width: 479px) {
      .zigrow-howItWorks-2 .zigrow-howItWorks-2-title {
        font-size: clamp(2rem, 10vw, 2.8rem);
      }

      .zigrow-howItWorks-2 .zigrow-howItWorks-2-button {
        width: 100%;
        max-width: 100%;
      }

      .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-content {
        min-height: 18rem;
      }

      .zigrow-howItWorks-2 .zigrow-howItWorks-2-tab-description {
        font-size: 0.8rem;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-howItWorks-3", {
  name: "How It Works-3",
  category: "how-it-works",
  image:
    "https://i.postimg.cc/k47Xghp2/Screenshot-2026-07-22-160858.png",
  html: `
<section
  id="zigrow-howItWorks-3"
  class="zigrow-howItWorks-3"
  data-section="zigrow-howItWorks-3"
>
  <div class="zigrow-howItWorks-3-container">
    <div class="zigrow-howItWorks-3-heading">
      <p class="zigrow-howItWorks-3-eyebrow">
        <span class="zigrow-howItWorks-3-eyebrow-icon">
          <i class="bi bi-arrow-left-right" data-icon="arrow-left-right"></i>
        </span>

        <span>How It Works</span>
      </p>

      <h2 class="no-theme-size zigrow-howItWorks-3-title">
        Start In Four Steps And Move Forward With A Clear, Reliable Process.
      </h2>
    </div>

    <div class="zigrow-howItWorks-3-grid">
      <div class="zigrow-howItWorks-3-grid-item ">
        <div
          class="zigrow-howItWorks-3-card"
          data-zg-editable="surface"
        >
          <div class="zigrow-howItWorks-3-card-heading">
            <p class="zigrow-howItWorks-3-step-label">Step One</p>
            <h3 class="zigrow-howItWorks-3-card-title">
              Share Your Needs
            </h3>
          </div>

          <div
            class="zigrow-howItWorks-3-image-wrap zigrow-howItWorks-3-image-wrap-one"
          >
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&amp;fit=crop&amp;w=700&amp;q=85"
              alt="Customer sharing business requirements"
            />
          </div>

          <p class="zigrow-howItWorks-3-card-badge">
            Easy Beginning!
          </p>
        </div>
      </div>

      <div class="zigrow-howItWorks-3-connector" aria-hidden="true">
        <span class="zigrow-howItWorks-3-connector-line"></span>

        <span class="zigrow-howItWorks-3-connector-icon">
          <i class="bi bi-arrow-right-short" data-icon="arrow-right-short"></i>
        </span>
      </div>

      <div class="zigrow-howItWorks-3-grid-item ">
        <div
          class="zigrow-howItWorks-3-card"
          data-zg-editable="surface"
        >
          <div class="zigrow-howItWorks-3-card-heading">
            <p class="zigrow-howItWorks-3-step-label">Step Two</p>
            <h3 class="zigrow-howItWorks-3-card-title">
              Choose Your Solution
            </h3>
          </div>

          <div
            class="zigrow-howItWorks-3-image-wrap zigrow-howItWorks-3-image-wrap-two"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=700&amp;q=85"
              alt="Customer reviewing available business solutions"
            />
          </div>

          <span class="zigrow-howItWorks-3-image-status">
            <i class="bi bi-check-lg" data-icon="check-lg"></i>
          </span>

          <p class="zigrow-howItWorks-3-card-badge">
            Quick Selection!
          </p>
        </div>
      </div>

      <div class="zigrow-howItWorks-3-connector" aria-hidden="true">
        <span class="zigrow-howItWorks-3-connector-line"></span>

        <span class="zigrow-howItWorks-3-connector-icon">
          <i class="bi bi-arrow-right-short" data-icon="arrow-right-short"></i>
        </span>
      </div>

      <div class="zigrow-howItWorks-3-grid-item ">
        <div
          class="zigrow-howItWorks-3-card"
          data-zg-editable="surface"
        >
          <div class="zigrow-howItWorks-3-card-heading">
            <p class="zigrow-howItWorks-3-step-label">Step Three</p>
            <h3 class="zigrow-howItWorks-3-card-title">
              We Complete The Work
            </h3>
          </div>

          <div
            class="zigrow-howItWorks-3-image-wrap zigrow-howItWorks-3-image-wrap-three"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;w=700&amp;q=85"
              alt="Professional team completing customer work"
            />
          </div>

          <span class="zigrow-howItWorks-3-image-detail">
            <i class="bi bi-clipboard-check" data-icon="clipboard-check"></i>
          </span>

          <p class="zigrow-howItWorks-3-card-badge">
            Smooth Progress!
          </p>
        </div>
      </div>

      <div class="zigrow-howItWorks-3-connector" aria-hidden="true">
        <span class="zigrow-howItWorks-3-connector-line"></span>

        <span class="zigrow-howItWorks-3-connector-icon">
          <i class="bi bi-arrow-right-short" data-icon="arrow-right-short"></i>
        </span>
      </div>

      <div class="zigrow-howItWorks-3-grid-item ">
        <div
          class="zigrow-howItWorks-3-card"
          data-zg-editable="surface"
        >
          <div class="zigrow-howItWorks-3-card-heading">
            <p class="zigrow-howItWorks-3-step-label">Step Four</p>
            <h3 class="zigrow-howItWorks-3-card-title">
              Receive Your Result
            </h3>
          </div>

          <div
            class="zigrow-howItWorks-3-image-wrap zigrow-howItWorks-3-image-wrap-four"
          >
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&amp;fit=crop&amp;w=700&amp;q=85"
              alt="Customer receiving the completed business result"
            />
          </div>

          <div class="zigrow-howItWorks-3-result-notes">
            <span>Completed</span>
            <span>Ready To Use</span>
            <span>Support Included</span>
          </div>

          <p class="zigrow-howItWorks-3-card-badge">
            Reliable Result!
          </p>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-howItWorks-3 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 7rem) 0;
      background: #ffffff;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-container {
      width: min(100% - 2rem, 1440px);
      margin: 0 auto;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-heading {
      max-width: 980px;
      margin: 0 auto clamp(2.5rem, 5vw, 4rem);
      text-align: center;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-eyebrow {
      display: inline-grid;
      grid-template-columns: auto auto;
      gap: 0.55rem;
      align-items: center;
      margin: 0 0 1.2rem;
      padding: 0.55rem 1rem;
      border: 1px solid #deded9;
      border-radius: 999px;
      background: #f8f8f5;
      color: #4d4d49;
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-eyebrow-icon {
      display: grid;
      place-items: center;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background: #eeeeea;
      color: #555550;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-eyebrow-icon i {
      font-size: 0.68rem;
      line-height: 1;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-title {
      margin: 0;
      color: #111111;
      font-size: clamp(2.4rem, 3.6vw, 4.5rem);
      font-weight: 500;
      line-height: 1.1;
      letter-spacing: -0.045em;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-grid {
      display: grid;
      grid-template-columns:
        minmax(0, 1fr)
        1.5rem
        minmax(0, 1fr)
        1.5rem
        minmax(0, 1fr)
        1.5rem
        minmax(0, 1fr);
      align-items: center;
      width: 100%;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-grid-item {
      min-width: 0;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-card {
      position: relative;
      min-height: clamp(20rem, 29vw, 27rem);
      overflow: hidden;
      padding: clamp(1.25rem, 2vw, 1.8rem);
      border: 1px solid #eeeeeb;
      border-radius: 1.35rem;
      background: #f5f5f2;
      box-shadow: 0 0.7rem 2rem rgba(32, 32, 29, 0.04);
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-card:hover {
      transform: translateY(-0.35rem);
      box-shadow: 0 1.4rem 3rem rgba(32, 32, 29, 0.1);
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-card-heading {
      position: relative;
      z-index: 4;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-step-label {
      margin: 0 0 0.35rem;
      color: #74746f;
      font-size: 0.7rem;
      font-weight: 500;
      line-height: 1;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-card-title {
      margin: 0;
      color: #222220;
      font-size: clamp(1rem, 1.35vw, 1.2rem);
      font-weight: 500;
      line-height: 1.35;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-wrap {
      position: absolute;
      z-index: 2;
      overflow: hidden;
      border: 0.45rem solid rgba(255, 255, 255, 0.75);
      border-radius: 0.8rem;
      background: #ffffff;
      box-shadow: 0 1rem 2rem rgba(37, 37, 34, 0.1);
      text-align: center;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-wrap::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.08),
        rgba(255, 255, 255, 0.38)
      );
      pointer-events: none;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-wrap-one {
      top: 4.2rem;
      right: 1.2rem;
      width: 56%;
      height: 67%;
      transform: rotate(1deg);
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-wrap-two {
      top: 7.4rem;
      right: 1.3rem;
      left: 1.3rem;
      height: 34%;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-wrap-three {
      top: 5.3rem;
      right: 2rem;
      width: 54%;
      height: 58%;
      transform: rotate(-5deg);
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-wrap-four {
      top: 6rem;
      right: 1.6rem;
      left: 1.6rem;
      height: 51%;
      transform: rotate(2deg);
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-wrap img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      filter: saturate(0.65) brightness(1.08);
      transition:
        transform 0.45s ease,
        filter 0.45s ease;
    }

    .zigrow-howItWorks-3
      .zigrow-howItWorks-3-card:hover
      .zigrow-howItWorks-3-image-wrap
      img {
      transform: scale(1.04);
      filter: saturate(0.85) brightness(1.03);
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-status,
    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-detail {
      position: absolute;
      z-index: 5;
      display: grid;
      place-items: center;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 50%;
      background: #e2e7dc;
      color: #7f8975;
      box-shadow: 0 0.55rem 1.2rem rgba(40, 44, 37, 0.08);
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-status {
      top: 6.7rem;
      right: 1rem;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-detail {
      top: 8rem;
      left: 47%;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-status i,
    .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-detail i {
      font-size: 0.82rem;
      line-height: 1;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-result-notes {
      position: absolute;
      top: 8.3rem;
      right: 1rem;
      z-index: 5;
      display: grid;
      gap: 0.35rem;
      justify-items: end;
      transform: rotate(-2deg);
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-result-notes span {
      display: block;
      padding: 0.42rem 0.65rem;
      border-radius: 0.3rem;
      background: #ffffff;
      color: #2d2d2a;
      font-size: 0.57rem;
      font-weight: 600;
      line-height: 1;
      box-shadow: 0 0.45rem 1rem rgba(40, 40, 36, 0.09);
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-card-badge {
      position: absolute;
      bottom: 1rem;
      left: 1.25rem;
      z-index: 5;
      width: max-content;
      max-width: calc(100% - 2.5rem);
      margin: 0;
      padding: 0.5rem 0.85rem;
      border: 1px solid #e7e7e2;
      border-radius: 999px;
      background: #ffffff;
      color: #484844;
      font-size: 0.63rem;
      font-weight: 500;
      line-height: 1;
      box-shadow: 0 0.5rem 1rem rgba(40, 40, 36, 0.04);
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-connector {
      position: relative;
      z-index: 8;
      display: grid;
      place-items: center;
      width: 100%;
      height: 3rem;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-connector-line {
      position: absolute;
      right: -0.2rem;
      left: -0.2rem;
      height: 1px;
      background: #dfe2da;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-connector-icon {
      position: relative;
      z-index: 2;
      display: grid;
      place-items: center;
      width: 2.25rem;
      height: 2.25rem;
      border: 0.35rem solid #f5f5f2;
      border-radius: 50%;
      background: #e0e5da;
      color: #858f7b;
    }

    .zigrow-howItWorks-3 .zigrow-howItWorks-3-connector-icon i {
      font-size: 0.9rem;
      line-height: 1;
    }

    @media (max-width: 1199px) {
      .zigrow-howItWorks-3 .zigrow-howItWorks-3-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
      }

      .zigrow-howItWorks-3 .zigrow-howItWorks-3-connector {
        display: none;
      }

      .zigrow-howItWorks-3 .zigrow-howItWorks-3-card {
        min-height: 26rem;
      }
    }

    @media (max-width: 767px) {
      .zigrow-howItWorks-3 {
        padding: 3rem 0;
      }

      .zigrow-howItWorks-3 .zigrow-howItWorks-3-container {
        width: min(100% - 1.25rem, 1440px);
      }

      .zigrow-howItWorks-3 .zigrow-howItWorks-3-grid {
        grid-template-columns: 1fr;
      }

      .zigrow-howItWorks-3 .zigrow-howItWorks-3-card {
        min-height: 25rem;
      }
    }

    @media (max-width: 479px) {
      .zigrow-howItWorks-3 .zigrow-howItWorks-3-title {
        font-size: clamp(2.15rem, 11vw, 3rem);
      }

      .zigrow-howItWorks-3 .zigrow-howItWorks-3-card {
        min-height: 23rem;
      }

      .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-wrap-one,
      .zigrow-howItWorks-3 .zigrow-howItWorks-3-image-wrap-three {
        width: 62%;
      }
    }
  </style>
</section>
`,
});

/* Configured using Zigrow Section Configuration Rules. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1} */

Vvveb.Blocks.add("bootstrap4/zigrow-counter-1", {
  name: "Counter-1",
  category: "counter",
  image:
     "https://i.postimg.cc/Y0cf7fsL/Screenshot-2026-08-13-094610.png",
  html: `
<section
  id="zigrow-counter-1"
  class="zigrow-counter-1"
  data-section="zigrow-counter-1"
>
  <div
    class="zigrow-counter-1-container"
    data-zg-editable="surface"
  >
    <div class="zigrow-counter-1-heading">
      <p class="zigrow-counter-1-eyebrow">Statistics</p>

      <h2 class="zigrow-counter-1-title">
        More than numbers, real progress that matters
      </h2>

      <p class="zigrow-counter-1-description">
        Our work is focused on creating useful experiences, dependable results,
        and lasting value for every customer we support.
      </p>
    </div>

    <div class="zigrow-counter-1-layout">
      <div class="zigrow-counter-1-visual">
        <div class="zigrow-counter-1-image zigrow-counter-1-media-center">
          <img
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"
            alt="Modern abstract business design"
          />
        </div>
      </div>

      <div class="zigrow-counter-1-stats">
        <p class="zigrow-counter-1-stats-heading">
          Our progress, in numbers
        </p>

        <div class="zigrow-counter-1-stat-list">
          <div class="zigrow-counter-1-stat-item clonable-card">
            <div class="zigrow-counter-1-stat-card">
              <p class="zigrow-counter-1-number">25,664+</p>
              <p class="zigrow-counter-1-label">Projects Delivered</p>
            </div>
          </div>

          <div class="zigrow-counter-1-stat-item clonable-card">
            <div class="zigrow-counter-1-stat-card">
              <p class="zigrow-counter-1-number">17,219+</p>
              <p class="zigrow-counter-1-label">Happy Customers</p>
            </div>
          </div>

          <div class="zigrow-counter-1-stat-item clonable-card">
            <div class="zigrow-counter-1-stat-card">
              <p class="zigrow-counter-1-number">190,654+</p>
              <p class="zigrow-counter-1-label">Successful Interactions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-counter-1 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 7rem) 0;
      background: #f4f5f6;
    }

    .zigrow-counter-1 .zigrow-counter-1-container {
      width: min(100% - 2rem, 1480px);
      margin: 0 auto;
      padding: clamp(3rem, 6vw, 6rem);
      border-radius: 0.7rem;
      background: #ffffff;
      box-shadow: 0 1rem 3rem rgba(26, 31, 36, 0.12);
    }

    .zigrow-counter-1 .zigrow-counter-1-heading {
      max-width: 1180px;
      margin: 0 auto clamp(3rem, 6vw, 5rem);
      text-align: center;
    }

    .zigrow-counter-1 .zigrow-counter-1-eyebrow {
      margin: 0 0 1rem;
      color: var(--primary-colors, #4d3dcc);
      font-size: clamp(0.95rem, 1.3vw, 1.15rem);
      font-weight: 600;
      line-height: 1.2;
    }

    .zigrow-counter-1 .zigrow-counter-1-title {
      margin: 0;
      color: #161616;
      font-size: clamp(2.5rem, 3.8vw, 4.6rem);
      font-weight: 600;
      line-height: 1.08;
      letter-spacing: -0.04em;
    }

    .zigrow-counter-1 .zigrow-counter-1-description {
      max-width: 970px;
      margin: 1.2rem auto 0;
      color: #575757;
      font-size: clamp(1rem, 1.4vw, 1.2rem);
      line-height: 1.6;
    }

    .zigrow-counter-1 .zigrow-counter-1-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(26rem, 1fr);
      gap: clamp(2rem, 4vw, 3rem);
      align-items: stretch;
      width: min(100%, 1240px);
      margin: 0 auto;
    }

    .zigrow-counter-1 .zigrow-counter-1-visual {
      min-width: 0;
    }

    .zigrow-counter-1 .zigrow-counter-1-image {
      width: 100%;
      height: 100%;
      min-height: 32rem;
      overflow: hidden;
      background: #edf1f5;
    }

    .zigrow-counter-1 .zigrow-counter-1-media-center {
      text-align: center;
    }

    .zigrow-counter-1 .zigrow-counter-1-image img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .zigrow-counter-1 .zigrow-counter-1-stats {
      display: grid;
      align-content: start;
      min-width: 0;
    }

    .zigrow-counter-1 .zigrow-counter-1-stats-heading {
      margin: 0 0 1.6rem;
      color: #444444;
      font-size: clamp(1.05rem, 1.5vw, 1.3rem);
      line-height: 1.4;
    }

    .zigrow-counter-1 .zigrow-counter-1-stat-list {
      display: grid;
      gap: 1.8rem;
    }

    .zigrow-counter-1 .zigrow-counter-1-stat-item {
      min-width: 0;
    }

    .zigrow-counter-1 .zigrow-counter-1-stat-card {
      display: grid;
      place-items: center;
      min-height: 9rem;
      padding: 1.5rem;
      border: 1px solid #dedede;
      border-radius: 0.4rem;
      background: #ffffff;
      text-align: center;
      box-shadow: 0 0.2rem 0.5rem rgba(30, 30, 30, 0.08);
    }

    .zigrow-counter-1 .zigrow-counter-1-number {
      margin: 0;
      color: var(--primary-colors, #4d3dcc);
      font-size: clamp(2.5rem, 4vw, 4rem);
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.035em;
    }

    .zigrow-counter-1 .zigrow-counter-1-label {
      margin: 0.9rem 0 0;
      color: #555555;
      font-size: clamp(1rem, 1.3vw, 1.2rem);
      line-height: 1.35;
    }

    @media (max-width: 991px) {
      .zigrow-counter-1 .zigrow-counter-1-layout {
        grid-template-columns: 1fr;
      }

      .zigrow-counter-1 .zigrow-counter-1-image {
        min-height: 30rem;
      }
    }

    @media (max-width: 767px) {
      .zigrow-counter-1 {
        padding: 3rem 0;
      }

      .zigrow-counter-1 .zigrow-counter-1-container {
        width: min(100% - 1.25rem, 1480px);
        padding: 2rem 1.25rem;
      }

      .zigrow-counter-1 .zigrow-counter-1-image {
        min-height: 24rem;
      }
    }

    @media (max-width: 479px) {
      .zigrow-counter-1 .zigrow-counter-1-title {
        font-size: clamp(2.2rem, 11vw, 3rem);
      }

      .zigrow-counter-1 .zigrow-counter-1-image {
        min-height: 20rem;
      }

      .zigrow-counter-1 .zigrow-counter-1-stat-card {
        min-height: 8rem;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-counter-2", {
  name: "Counter-2",
  category: "counter",
  image:
    "https://i.postimg.cc/903t2tnq/Screenshot-2026-08-13-094524.png",
  html: `
<section
  id="zigrow-counter-2"
  class="zigrow-counter-2"
  data-section="zigrow-counter-2"
>
  <div
    class="zigrow-counter-2-frame"
    data-zg-editable="surface"
  >
    <div class="zigrow-counter-2-layout">
      <div class="zigrow-counter-2-content">
        <h2 class="zigrow-counter-2-title">
          Over 4000+ Projects
          <span>Completed</span>
        </h2>

        <p class="zigrow-counter-2-description">
          We turn ideas into dependable outcomes through thoughtful planning,
          practical execution, and a clear focus on customer satisfaction.
        </p>
      </div>

      <div class="zigrow-counter-2-visual">
        <div class="zigrow-counter-2-main-circle">
          <p class="zigrow-counter-2-main-number">22000+</p>
          <p class="zigrow-counter-2-main-label">Happy Customers</p>
        </div>

        <div class="zigrow-counter-2-stat zigrow-counter-2-stat-one">
          <div class="zigrow-counter-2-stat-circle">
            <p class="zigrow-counter-2-number">7+</p>
            <p class="zigrow-counter-2-label">Services</p>
          </div>
        </div>

        <div class="zigrow-counter-2-stat zigrow-counter-2-stat-two">
          <div class="zigrow-counter-2-stat-circle">
            <p class="zigrow-counter-2-number">23+</p>
            <p class="zigrow-counter-2-label">Solutions</p>
          </div>
        </div>

        <div class="zigrow-counter-2-stat zigrow-counter-2-stat-three">
          <div class="zigrow-counter-2-stat-circle">
            <p class="zigrow-counter-2-number">100+</p>
            <p class="zigrow-counter-2-label">Projects</p>
          </div>
        </div>

        <span class="zigrow-counter-2-orbit-circle"></span>
        <span class="zigrow-counter-2-dot zigrow-counter-2-dot-one"></span>
        <span class="zigrow-counter-2-dot zigrow-counter-2-dot-two"></span>
        <span class="zigrow-counter-2-dot zigrow-counter-2-dot-three"></span>
        <span class="zigrow-counter-2-dot zigrow-counter-2-dot-four"></span>
      </div>
    </div>
  </div>

  <style>
    .zigrow-counter-2 {
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 6.5rem);
      background: linear-gradient(
        135deg,
        var(--primary-colors, #25b7d2) 0%,
        #c8925c 100%
      );
    }

    .zigrow-counter-2 .zigrow-counter-2-frame {
      width: min(100%, 1450px);
      margin: 0 auto;
      padding: clamp(3rem, 7vw, 7rem);
      background: #f6fbff;
      box-shadow: 0 1rem 4rem rgba(34, 72, 86, 0.08);
    }

    .zigrow-counter-2 .zigrow-counter-2-layout {
      display: grid;
      grid-template-columns: minmax(0, 0.9fr) minmax(28rem, 1.1fr);
      gap: clamp(3rem, 7vw, 7rem);
      align-items: center;
    }

    .zigrow-counter-2 .zigrow-counter-2-content {
      max-width: 520px;
    }

    .zigrow-counter-2 .zigrow-counter-2-title {
      margin: 0;
      color: #10151b;
      font-size: clamp(2.5rem, 3.5vw, 4.6rem);
      font-weight: 600;
      line-height: 1.08;
      letter-spacing: -0.045em;
    }

    .zigrow-counter-2 .zigrow-counter-2-title span {
      display: block;
      text-decoration: underline;
      text-decoration-thickness: 0.08em;
      text-underline-offset: 0.12em;
    }

    .zigrow-counter-2 .zigrow-counter-2-description {
      max-width: 520px;
      margin: 2.5rem 0 0;
      color: #696f75;
      font-size: clamp(0.95rem, 1.2vw, 1.08rem);
      line-height: 1.7;
    }

    .zigrow-counter-2 .zigrow-counter-2-visual {
      position: relative;
      min-height: clamp(32rem, 42vw, 39rem);
    }

    .zigrow-counter-2 .zigrow-counter-2-main-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      display: grid;
      place-items: center;
      align-content: center;
      width: clamp(21rem, 30vw, 29rem);
      height: clamp(21rem, 30vw, 29rem);
      border: 1px solid rgba(54, 199, 222, 0.28);
      border-radius: 50%;
      background: rgba(131, 225, 240, 0.3);
      text-align: center;
      transform: translate(-50%, -50%);
    }

    .zigrow-counter-2 .zigrow-counter-2-main-number {
      margin: 0;
      color: #175ec8;
      font-size: clamp(3rem, 5vw, 4.8rem);
      font-weight: 700;
      line-height: 1;
    }

    .zigrow-counter-2 .zigrow-counter-2-main-label {
      margin: 0.7rem 0 0;
      color: #374550;
      font-size: clamp(1rem, 1.5vw, 1.3rem);
      line-height: 1.3;
    }

    .zigrow-counter-2 .zigrow-counter-2-stat {
      position: absolute;
      z-index: 3;
    }

    .zigrow-counter-2 .zigrow-counter-2-stat-one {
      top: 0;
      left: 47%;
      transform: translateX(-50%);
    }

    .zigrow-counter-2 .zigrow-counter-2-stat-two {
      top: 40%;
      left: 8%;
      transform: translateY(-50%);
    }

    .zigrow-counter-2 .zigrow-counter-2-stat-three {
      top: 46%;
      right: 1%;
      transform: translateY(-50%);
    }

    .zigrow-counter-2 .zigrow-counter-2-stat-circle {
      display: grid;
      place-items: center;
      align-content: center;
      width: clamp(8.5rem, 12vw, 11rem);
      height: clamp(8.5rem, 12vw, 11rem);
      padding: 0.75rem;
      border-radius: 50%;
      background: #ffffff;
      text-align: center;
      box-shadow: 0 1rem 2rem rgba(74, 86, 92, 0.12);
    }

    .zigrow-counter-2 .zigrow-counter-2-number {
      margin: 0;
      color: var(--primary-colors, #2bbbd6);
      font-size: clamp(1.8rem, 3vw, 2.7rem);
      font-weight: 700;
      line-height: 1;
    }

    .zigrow-counter-2
      .zigrow-counter-2-stat-one
      .zigrow-counter-2-number {
      color: #ef7a83;
    }

    .zigrow-counter-2
      .zigrow-counter-2-stat-three
      .zigrow-counter-2-number {
      color: #8142d8;
    }

    .zigrow-counter-2 .zigrow-counter-2-label {
      margin: 0.35rem 0 0;
      color: #5f6670;
      font-size: 0.78rem;
      font-weight: 600;
      line-height: 1.2;
    }

    .zigrow-counter-2 .zigrow-counter-2-orbit-circle {
      position: absolute;
      right: 28%;
      bottom: 0;
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 1rem 2rem rgba(74, 86, 92, 0.1);
    }

    .zigrow-counter-2 .zigrow-counter-2-dot {
      position: absolute;
      display: block;
      border-radius: 50%;
    }

    .zigrow-counter-2 .zigrow-counter-2-dot-one {
      top: 8%;
      left: 20%;
      width: 2rem;
      height: 2rem;
      background: #ffc766;
    }

    .zigrow-counter-2 .zigrow-counter-2-dot-two {
      top: 11%;
      right: 11%;
      width: 2.7rem;
      height: 2.7rem;
      background: #f48791;
    }

    .zigrow-counter-2 .zigrow-counter-2-dot-three {
      bottom: 6%;
      left: 24%;
      width: 2.8rem;
      height: 2.8rem;
      background: var(--primary-colors, #26b9de);
    }

    .zigrow-counter-2 .zigrow-counter-2-dot-four {
      right: 13%;
      bottom: 12%;
      width: 1rem;
      height: 1rem;
      background: #7240dc;
    }

    @media (max-width: 991px) {
      .zigrow-counter-2 .zigrow-counter-2-layout {
        grid-template-columns: 1fr;
      }

      .zigrow-counter-2 .zigrow-counter-2-content {
        max-width: 720px;
      }

      .zigrow-counter-2 .zigrow-counter-2-visual {
        width: min(100%, 620px);
        margin: 0 auto;
      }
    }

    @media (max-width: 767px) {
      .zigrow-counter-2 {
        padding: 1.5rem;
      }

      .zigrow-counter-2 .zigrow-counter-2-frame {
        padding: 2.5rem 1.25rem;
      }

      .zigrow-counter-2 .zigrow-counter-2-visual {
        min-height: 29rem;
      }
    }

    @media (max-width: 479px) {
      .zigrow-counter-2 .zigrow-counter-2-title {
        font-size: clamp(2.2rem, 11vw, 3rem);
      }

      .zigrow-counter-2 .zigrow-counter-2-visual {
        min-height: 25rem;
      }

      .zigrow-counter-2 .zigrow-counter-2-main-circle {
        width: 17rem;
        height: 17rem;
      }

      .zigrow-counter-2 .zigrow-counter-2-stat-circle {
        width: 7rem;
        height: 7rem;
      }

      .zigrow-counter-2 .zigrow-counter-2-stat-two {
        left: 0;
      }

      .zigrow-counter-2 .zigrow-counter-2-stat-three {
        right: 0;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-counter-3", {
  name: "Counter-3",
  category: "counter",
  image:
    "https://i.postimg.cc/wMKczcGN/Screenshot-2026-08-13-094636.png",

  html: `
<section
  id="zigrow-counter-3"
  class="zigrow-counter-3"
  data-section="zigrow-counter-3"
  style="background-image: url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=88');"
>
  <div class="zigrow-counter-3-container">

    <div class="zigrow-counter-3-top">
      <h2 class="zigrow-counter-3-title">
        Statistics that reflect meaningful business progress.
      </h2>

      <div class="zigrow-counter-3-intro">
        <p>
          Our results reflect the trust of our customers, the consistency of
          our work, and the value we continue to create.
        </p>

        <div class="zigrow-counter-3-button-wrap">
          <a
            href="#contact"
            class="zigrow-counter-3-button"
            data-btn="counter"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>

    <div class="zigrow-counter-3-grid">

      <div class="zigrow-counter-3-stat-item clonable-card">
        <div class="zigrow-counter-3-stat">
          <p class="zigrow-counter-3-number">13M</p>
          <p class="zigrow-counter-3-description">
            Customers reached through our services across different industries.
          </p>
        </div>
      </div>

      <div class="zigrow-counter-3-stat-item clonable-card">
        <div class="zigrow-counter-3-stat">
          <p class="zigrow-counter-3-number">50M</p>
          <p class="zigrow-counter-3-description">
            Meaningful interactions delivered through dependable experiences.
          </p>
        </div>
      </div>

      <div class="zigrow-counter-3-stat-item clonable-card">
        <div class="zigrow-counter-3-stat">
          <p class="zigrow-counter-3-number">98%</p>
          <p class="zigrow-counter-3-description">
            Customers satisfied with the quality and support they receive.
          </p>
        </div>
      </div>

      <div class="zigrow-counter-3-stat-item clonable-card">
        <div class="zigrow-counter-3-stat">
          <p class="zigrow-counter-3-number">80%</p>
          <p class="zigrow-counter-3-description">
            Projects completed successfully and delivered with confidence.
          </p>
        </div>
      </div>

    </div>
  </div>

  <style>
    .zigrow-counter-3 {
      position: relative;
      width: 100%;
      min-height: 720px;
      overflow: hidden;
      padding: clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem);

      background-color: #111111;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      color: #ffffff;
    }

    /* Overlay directly on section */
    .zigrow-counter-3::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.62);
      pointer-events: none;
    }

    /* Content above section overlay */
    .zigrow-counter-3 .zigrow-counter-3-container {
      position: relative;
      z-index: 2;

      display: grid;
      grid-template-rows: auto minmax(12rem, 1fr) auto;

      width: min(100% - 2rem, 1440px);
      min-height: 600px;
      margin: 0 auto;
    }

    .zigrow-counter-3 .zigrow-counter-3-top {
      display: grid;
      grid-template-columns:
        minmax(0, 0.9fr)
        minmax(20rem, 1.1fr);
      gap: clamp(2rem, 6vw, 7rem);
      align-items: start;
    }

    .zigrow-counter-3 .zigrow-counter-3-title {
      max-width: 620px;
      margin: 0;
      color: #ffffff;
      font-size: clamp(2.3rem, 3.4vw, 4.4rem);
      font-weight: 600;
      line-height: 1.25;
      letter-spacing: -0.035em;
    }

    .zigrow-counter-3 .zigrow-counter-3-intro {
      max-width: 650px;
    }

    .zigrow-counter-3 .zigrow-counter-3-intro p {
      margin: 0;
      color: rgba(255, 255, 255, 0.9);
      font-size: clamp(1rem, 1.4vw, 1.2rem);
      line-height: 1.65;
    }

    .zigrow-counter-3 .zigrow-counter-3-button-wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1.4rem;
    }

    .zigrow-counter-3 .zigrow-counter-3-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 3rem;
      padding: 0.8rem 1.5rem;
      border: 1px solid var(--primary-colors, #ffffff);
      border-radius: 999px;
      background: var(--primary-colors, #ffffff);
      color: #111111;
      font-size: 0.9rem;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        filter 0.25s ease;
    }

    .zigrow-counter-3 .zigrow-counter-3-button:hover {
      transform: translateY(-0.15rem);
      box-shadow: 0 0.8rem 1.8rem rgba(0, 0, 0, 0.25);
      filter: brightness(0.96);
    }

    .zigrow-counter-3 .zigrow-counter-3-grid {
      grid-row: 3;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: clamp(1.5rem, 4vw, 4rem);
      align-items: end;
    }

    .zigrow-counter-3 .zigrow-counter-3-stat-item {
      min-width: 0;
    }

    .zigrow-counter-3 .zigrow-counter-3-stat {
      text-align: center;
    }

    .zigrow-counter-3 .zigrow-counter-3-number {
      margin: 0;
      color: #ffffff;
      font-size: clamp(3rem, 5vw, 4.5rem);
      font-weight: 500;
      line-height: 1;
      letter-spacing: -0.03em;
    }

    .zigrow-counter-3 .zigrow-counter-3-description {
      max-width: 280px;
      margin: 1.4rem auto 0;
      color: rgba(255, 255, 255, 0.78);
      font-size: clamp(0.95rem, 1.25vw, 1.1rem);
      line-height: 1.6;
    }

    @media (max-width: 991px) {
      .zigrow-counter-3 .zigrow-counter-3-container {
        grid-template-rows: auto 7rem auto;
      }

      .zigrow-counter-3 .zigrow-counter-3-top {
        grid-template-columns: 1fr;
      }

      .zigrow-counter-3 .zigrow-counter-3-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        row-gap: 3rem;
      }
    }

    @media (max-width: 767px) {
      .zigrow-counter-3 {
        min-height: auto;
        padding: 3rem 0;
      }

      .zigrow-counter-3 .zigrow-counter-3-container {
        width: min(100% - 1.25rem, 1440px);
      }
    }

    @media (max-width: 575px) {
      .zigrow-counter-3 .zigrow-counter-3-grid {
        grid-template-columns: 1fr;
      }

      .zigrow-counter-3 .zigrow-counter-3-stat {
        text-align: left;
      }

      .zigrow-counter-3 .zigrow-counter-3-description {
        margin-left: 0;
      }
    }
  </style>
</section>
`,
});
Vvveb.Blocks.add("bootstrap4/zigrow-counter-4", {
  name: "Counter-4",
  category: "counter",
  image:
    "https://i.postimg.cc/DZ4dRYBg/Screenshot-2026-08-13-094544.png",
  html: `
<section
  id="zigrow-counter-4"
  class="zigrow-counter-4"
  data-section="zigrow-counter-4"
>
  <div class="zigrow-counter-4-decoration" aria-hidden="true">
    <span class="zigrow-counter-4-line zigrow-counter-4-line-one"></span>
    <span class="zigrow-counter-4-line zigrow-counter-4-line-two"></span>
    <span class="zigrow-counter-4-line zigrow-counter-4-line-three"></span>
    <span class="zigrow-counter-4-circle zigrow-counter-4-circle-one"></span>
    <span class="zigrow-counter-4-circle zigrow-counter-4-circle-two"></span>
  </div>

  <div class="zigrow-counter-4-container">
    <div class="zigrow-counter-4-heading">
      <p class="zigrow-counter-4-eyebrow">Our Impact</p>

      <h2 class="zigrow-counter-4-title">
        Numbers that show the difference we create
      </h2>

      <p class="zigrow-counter-4-description">
        Every milestone represents real customers, meaningful work, and
        measurable progress created through the services we deliver.
      </p>
    </div>

    <div class="zigrow-counter-4-main-stat">
      <p class="zigrow-counter-4-main-number">16,020</p>

      <p class="zigrow-counter-4-main-label">
        successful outcomes created through our work
      </p>
    </div>

    <div class="zigrow-counter-4-grid">
      <div class="zigrow-counter-4-stat-item clonable-card">
        <div class="zigrow-counter-4-stat">
          <p class="zigrow-counter-4-number">1,039</p>
          <p class="zigrow-counter-4-label">Customers Supported</p>
        </div>
      </div>

      <div class="zigrow-counter-4-stat-item clonable-card">
        <div class="zigrow-counter-4-stat">
          <p class="zigrow-counter-4-number">28</p>
          <p class="zigrow-counter-4-label">Service Categories</p>
        </div>
      </div>

      <div class="zigrow-counter-4-stat-item clonable-card">
        <div class="zigrow-counter-4-stat">
          <p class="zigrow-counter-4-number">160</p>
          <p class="zigrow-counter-4-label">Projects This Year</p>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-counter-4 {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding: clamp(3.5rem, 7vw, 6.5rem) 0;
      background: #f8f6ef;
    }

    .zigrow-counter-4 .zigrow-counter-4-container {
      position: relative;
      z-index: 2;
      width: min(100% - 2rem, 1440px);
      margin: 0 auto;
    }

    .zigrow-counter-4 .zigrow-counter-4-decoration {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .zigrow-counter-4 .zigrow-counter-4-line {
      position: absolute;
      display: block;
      border: 1px solid rgba(34, 34, 34, 0.16);
      transform: rotate(-8deg);
    }

    .zigrow-counter-4 .zigrow-counter-4-line-one {
      top: 35%;
      left: -4%;
      width: 45%;
      height: 19rem;
    }

    .zigrow-counter-4 .zigrow-counter-4-line-two {
      right: 3%;
      bottom: 8%;
      width: 35%;
      height: 15rem;
      transform: rotate(7deg);
    }

    .zigrow-counter-4 .zigrow-counter-4-line-three {
      right: 26%;
      bottom: 20%;
      width: 19rem;
      height: 19rem;
      border-radius: 50%;
    }

    .zigrow-counter-4 .zigrow-counter-4-circle {
      position: absolute;
      display: block;
      border: 1px solid rgba(34, 34, 34, 0.14);
      border-radius: 50%;
    }

    .zigrow-counter-4 .zigrow-counter-4-circle-one {
      top: 34%;
      right: -5%;
      width: 14rem;
      height: 14rem;
    }

    .zigrow-counter-4 .zigrow-counter-4-circle-two {
      bottom: -4rem;
      left: 22%;
      width: 11rem;
      height: 11rem;
    }

    .zigrow-counter-4 .zigrow-counter-4-heading {
      max-width: 760px;
      margin: 0 auto clamp(2rem, 4vw, 3rem);
      text-align: center;
    }

    .zigrow-counter-4 .zigrow-counter-4-eyebrow {
      margin: 0 0 0.7rem;
      color: #67645d;
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .zigrow-counter-4 .zigrow-counter-4-title {
      margin: 0;
      color: #1d1e20;
      font-size: clamp(2.4rem, 3.4vw, 4rem);
      font-weight: 600;
      line-height: 1.08;
      letter-spacing: -0.04em;
    }

    .zigrow-counter-4 .zigrow-counter-4-description {
      max-width: 650px;
      margin: 1rem auto 0;
      color: #66635e;
      font-size: clamp(0.95rem, 1.2vw, 1.08rem);
      line-height: 1.6;
    }

    .zigrow-counter-4 .zigrow-counter-4-main-stat {
      text-align: center;
    }

    .zigrow-counter-4 .zigrow-counter-4-main-number {
      margin: 0;
      color: #1d1e20;
      font-size: clamp(8rem, 20vw, 20rem);
      font-weight: 800;
      line-height: 0.85;
      letter-spacing: -0.075em;
    }

    .zigrow-counter-4 .zigrow-counter-4-main-label {
      margin: 1rem auto 0;
      color: #1f2022;
      font-size: clamp(1rem, 1.7vw, 1.4rem);
      font-weight: 600;
      line-height: 1.35;
    }

    .zigrow-counter-4 .zigrow-counter-4-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(2rem, 6vw, 7rem);
      width: min(100%, 1050px);
      margin: clamp(3rem, 6vw, 5rem) auto 0;
    }

    .zigrow-counter-4 .zigrow-counter-4-stat-item {
      min-width: 0;
    }

    .zigrow-counter-4 .zigrow-counter-4-stat {
      text-align: center;
    }

    .zigrow-counter-4 .zigrow-counter-4-number {
      margin: 0;
      color: #1d1e20;
      font-size: clamp(3.6rem, 6vw, 6rem);
      font-weight: 800;
      line-height: 1;
      letter-spacing: -0.06em;
    }

    .zigrow-counter-4 .zigrow-counter-4-label {
      margin: 1rem 0 0;
      color: #242527;
      font-size: clamp(0.9rem, 1.2vw, 1rem);
      font-weight: 600;
      line-height: 1.4;
    }

    @media (max-width: 767px) {
      .zigrow-counter-4 {
        padding: 3rem 0;
      }

      .zigrow-counter-4 .zigrow-counter-4-container {
        width: min(100% - 1.25rem, 1440px);
      }

      .zigrow-counter-4 .zigrow-counter-4-main-number {
        font-size: clamp(6rem, 24vw, 10rem);
      }

      .zigrow-counter-4 .zigrow-counter-4-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
    }
  </style>
</section>
`,
});

Vvveb.Blocks.add("bootstrap4/zigrow-counter-5", {
  name: "Counter-5",
  category: "counter",
  image:
"https://i.postimg.cc/j2VQTQF7/Screenshot-2026-08-13-094452.png",
  html: `
<section
  id="zigrow-counter-5"
  class="zigrow-counter-5"
  data-section="zigrow-counter-5"
>
  <div class="zigrow-counter-5-container">
    <div class="zigrow-counter-5-heading-layout">
      <div class="zigrow-counter-5-heading">
        <h2 class="zigrow-counter-5-title">
          Driven by Results, Powered by Better Business Decisions
        </h2>

        <p class="zigrow-counter-5-description">
          Our approach combines thoughtful planning, practical solutions, and
          dependable execution to createzigrow-counter-2-stat zigrow-counter-2-stat-one clonable-card results that support sustainable
          business growth.
        </p>
      </div>

      <div class="zigrow-counter-5-button-wrap">
        <a
          href="#contact"
          class="zigrow-counter-5-button"
          data-btn="counter"
        >Explore More</a>
      </div>
    </div>

    <div class="zigrow-counter-5-grid">
      <div class="zigrow-counter-5-grid-item clonable-card">
        <div class="zigrow-counter-5-card">
          <p class="zigrow-counter-5-number">369%</p>

          <div class="zigrow-counter-5-card-content">
            <h3 class="zigrow-counter-5-card-title">
              Increase in Retention
            </h3>

            <p class="zigrow-counter-5-card-text">
              We help businesses build loyalty through consistent service,
              thoughtful experiences, and dependable customer support.
            </p>
          </div>
        </div>
      </div>

      <div class="zigrow-counter-5-grid-item clonable-card">
        <div class="zigrow-counter-5-card">
          <p class="zigrow-counter-5-number">368%</p>

          <div class="zigrow-counter-5-card-content">
            <h3 class="zigrow-counter-5-card-title">
              Faster Time to Market
            </h3>

            <p class="zigrow-counter-5-card-text">
              Our collaborative process helps customers move forward faster
              without compromising quality, clarity, or long-term value.
            </p>
          </div>
        </div>
      </div>

      <div class="zigrow-counter-5-grid-item clonable-card">
        <div class="zigrow-counter-5-card">
          <p class="zigrow-counter-5-number">265M</p>

          <div class="zigrow-counter-5-card-content">
            <h3 class="zigrow-counter-5-card-title">
              Successful Customer Results
            </h3>

            <p class="zigrow-counter-5-card-text">
              Real outcomes, satisfied customers, and solutions that continue
              to make a meaningful difference for growing businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .zigrow-counter-5 {
      width: 100%;
      overflow: hidden;
      padding: clamp(4rem, 8vw, 8rem) 0;
      background: #f8f6ef;
    }

    .zigrow-counter-5 .zigrow-counter-5-container {
      width: min(100% - 2rem, 1280px);
      margin: 0 auto;
    }

    .zigrow-counter-5 .zigrow-counter-5-heading-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: clamp(2rem, 5vw, 5rem);
      align-items: center;
    }

    .zigrow-counter-5 .zigrow-counter-5-heading {
      max-width: 690px;
    }

    .zigrow-counter-5 .zigrow-counter-5-title {
      margin: 0;
      color: #12140f;
      font-size: clamp(2.5rem, 3.6vw, 4.5rem);
      font-weight: 600;
      line-height: 1.12;
      letter-spacing: -0.045em;
    }

    .zigrow-counter-5 .zigrow-counter-5-description {
      max-width: 650px;
      margin: 1.5rem 0 0;
      color: #5e5d56;
      font-size: clamp(1rem, 1.3vw, 1.12rem);
      line-height: 1.65;
    }

    .zigrow-counter-5 .zigrow-counter-5-button-wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      gap: 0.75rem;
      min-width: 0;
    }

    .zigrow-counter-5 .zigrow-counter-5-button {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      width: max-content;
      padding: 0.85rem 1.35rem;
      border: 1px solid var(--primary-colors, #12170d);
      border-radius: 1rem;
      background: var(--primary-colors, #12170d);
      color: #ffffff;
      font-size: 0.9rem;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }

    .zigrow-counter-5 .zigrow-counter-5-button:hover {
      transform: translateY(-0.15rem);
      box-shadow: 0 0.8rem 1.7rem rgba(18, 23, 13, 0.16);
    }

    .zigrow-counter-5 .zigrow-counter-5-button-icon {
      display: grid;
      place-items: center;
      flex: 0 0 auto;
      width: 2.9rem;
      height: 2.9rem;
      border-radius: 0.85rem;
      background: #ffffff;
      color: var(--primary-colors, #12170d);
    }

    .zigrow-counter-5 .zigrow-counter-5-button-icon i {
      font-size: 1.05rem;
      line-height: 1;
    }

    .zigrow-counter-5 .zigrow-counter-5-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(1rem, 2vw, 1.5rem);
      width: min(100%, 850px);
      margin: clamp(4rem, 7vw, 6rem) 0 0 auto;
    }

    .zigrow-counter-5 .zigrow-counter-5-grid-item {
      min-width: 0;
    }

    .zigrow-counter-5 .zigrow-counter-5-card {
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
      min-height: clamp(22rem, 31vw, 27rem);
      padding: clamp(1.4rem, 2.3vw, 2rem);
      border-radius: 0.55rem;
      background: #efecdf;
    }

    .zigrow-counter-5 .zigrow-counter-5-number {
      margin: 0;
      color: #10120e;
      font-size: clamp(3rem, 5vw, 4.6rem);
      font-weight: 500;
      line-height: 1;
      letter-spacing: -0.04em;
    }

    .zigrow-counter-5 .zigrow-counter-5-card-content {
      align-self: end;
    }

    .zigrow-counter-5 .zigrow-counter-5-card-title {
      margin: 0;
      color: #12140f;
      font-size: clamp(1.1rem, 1.5vw, 1.3rem);
      font-weight: 500;
      line-height: 1.3;
    }

    .zigrow-counter-5 .zigrow-counter-5-card-text {
      margin: 0.9rem 0 0;
      color: #5c5b54;
      font-size: clamp(0.9rem, 1.1vw, 1rem);
      line-height: 1.55;
    }

    @media (max-width: 991px) {
      .zigrow-counter-5 .zigrow-counter-5-heading-layout {
        grid-template-columns: 1fr;
      }

      .zigrow-counter-5 .zigrow-counter-5-button-wrap {
        justify-content: flex-start;
      }

      .zigrow-counter-5 .zigrow-counter-5-grid {
        width: 100%;
      }
    }

    @media (max-width: 767px) {
      .zigrow-counter-5 {
        padding: 3rem 0;
      }

      .zigrow-counter-5 .zigrow-counter-5-container {
        width: min(100% - 1.25rem, 1280px);
      }

      .zigrow-counter-5 .zigrow-counter-5-grid {
        grid-template-columns: 1fr;
      }

      .zigrow-counter-5 .zigrow-counter-5-card {
        min-height: 18rem;
      }
    }

    @media (max-width: 479px) {
      .zigrow-counter-5 .zigrow-counter-5-title {
        font-size: clamp(2.2rem, 11vw, 3rem);
      }

      .zigrow-counter-5 .zigrow-counter-5-button {
        width: 100%;
        justify-content: space-between;
      }
    }
  </style>
</section>
`,
});