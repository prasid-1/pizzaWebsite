<script>
  import Swiper from "swiper";
  import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  import { onMount } from "svelte";
  onMount(() => {
    const swiper = new Swiper(".swiper", {
      modules: [EffectCoverflow, Pagination],
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      initialSlide: 1,
      slidesPerView: 1.2, // Default for mobile
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: false,
      },
      direction: "horizontal",
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 1.2,
        },
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });
  });
</script>

<h1 class="deals-title">Deals</h1>
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <button class="order-button">Order Now</button>
    </div>
    <div class="swiper-slide">
      <button class="order-button">Order Now</button>
    </div>
    <div class="swiper-slide">
      <button class="order-button">Order Now</button>
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>

<style>
  /* h1 {
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .swiper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: clamp(300px, 50vw, 600px);
    padding: 20px 0 40px 0;
    box-sizing: border-box;
  }
  .swiper-wrapper {
    align-items: center;
  }
  .swiper-slide {
    padding: 16px;
    width: clamp(220px, 30vw, 350px);
    height: clamp(320px, 45vw, 500px);
    background-image: url("src/assets/Pizza Poster.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.2s;
  }
  :global(.swiper-slide-active) {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
    z-index: 2;
  }
  .swiper-slide:active {
    border: 2px solid #ff5722;
    border-radius: 18px;
  }
  .order-button {
    background-color: #ff5722;
    color: white;
    border: none;
    font-size: 1.2em;
    padding: 12px 24px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 24px;
    margin-top: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition:
      background 0.2s,
      border-radius 0.2s;
  }
  .order-button:hover {
    background-color: #e64a19;
    border-radius: 14px;
  } */
  /* Pagination styling */
  /* :global(.swiper-pagination) {
    position: absolute !important;
    bottom: 10px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: auto !important;
    z-index: 10;
  }
  :global(.swiper-pagination-bullet) {
    width: 12px;
    height: 12px;
    background: #ccc;
    opacity: 0.7;
    margin: 0 4px;
    border-radius: 50%;
    transition: background 0.2s;
  }
  :global(.swiper-pagination-bullet-active) {
    background: #ff5722;
    opacity: 1;
  }
  @media (max-width: 1024px) {
    .swiper {
      height: clamp(220px, 60vw, 400px);
    }
    .swiper-slide {
      width: clamp(180px, 45vw, 300px);
      height: clamp(220px, 60vw, 400px);
    }
  }
  @media (max-width: 720px) {
    h1 {
      font-size: clamp(1.5rem, 8vw, 2.5rem);
    }
    .swiper {
      height: clamp(180px, 70vw, 320px);
      padding: 10px 0 30px 0;
    }
    .swiper-slide {
      width: 80vw;
      height: 60vw;
      min-width: 180px;
      min-height: 180px;
      margin-left: 0;
      border-radius: 12px;
    }
    .order-button {
      font-size: 1em;
      padding: 10px 16px;
      margin-bottom: 16px;
    }
    :global(.swiper-pagination) {
      bottom: 2px !important;
    }
  }
  @media (max-width: 480px) {
    .swiper {
      height: clamp(120px, 80vw, 220px);
    }
    .swiper-slide {
      width: 90vw;
      height: 70vw;
      min-width: 120px;
      min-height: 120px;
      border-radius: 8px;
    }
    .order-button {
      font-size: 0.95em;
      padding: 8px 12px;
      margin-bottom: 10px;
    }
  } */
  .deals-title {
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .swiper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0 40px 0;
    box-sizing: border-box;
  }

  /* Flex alignment */
  .swiper-wrapper {
    align-items: center;
    margin-left: 0; /* slight offset for better centering */
    padding: 0 40px 0 0; /* padding to prevent clipping */
  }

  /* Cards */
  .swiper-slide {
    width: 280px; /* base width */
    max-width: 90vw; /* don’t overflow on small screens */
    aspect-ratio: 9 / 13; /* consistent ratio (e.g. poster-like) */
    padding: 0;

    background-image: url("src/assets/Pizza Poster.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    transition:
      box-shadow 0.2s,
      transform 0.2s;
  }

  /* Active card highlight */
  :global(.swiper-slide-active) {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
    z-index: 2;
    transform: scale(1.02);
  }

  .order-button {
    background-color: #ff5722;
    color: white;
    border: none;
    font-size: 1rem;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition:
      background 0.2s,
      border-radius 0.2s;
  }

  .order-button:hover {
    background-color: #e64a19;
    border-radius: 14px;
  }

  /* Pagination */
  :global(.swiper-pagination) {
    position: absolute !important;
    bottom: 10px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: auto !important;
    z-index: 10;
  }
  :global(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    background: #ccc;
    opacity: 0.7;
    margin: 0 4px;
    border-radius: 50%;
    transition: background 0.2s;
  }
  :global(.swiper-pagination-bullet-active) {
    background: #ff5722;
    opacity: 1;
  }
</style>
