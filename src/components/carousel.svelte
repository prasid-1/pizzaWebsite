<script>
  import Swiper from "swiper";
  import { Navigation, Pagination } from "swiper/modules";
  // import Swiper and modules styles
  import "swiper/css";
  import "swiper/css/effect-coverflow";

  import "swiper/css/pagination";
  import { EffectCoverflow } from "swiper/modules";
  import { onMount } from "svelte";
  onMount(() => {
    // Initialize Swiper when the component is mounted
    const swiper = new Swiper(".swiper", {
      modules: [EffectCoverflow, Pagination], // Add this module
      effect: "coverflow", // Enable coverflow effect
      grabCursor: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      initialSlide: 1,
      slidesPerView: 3, // Show 3 cards at once for 3D effect
      coverflowEffect: {
        rotate: 0, // Rotation angle of side slides
        stretch: 0, // Stretch space between slides
        depth: 150, // Depth offset in px
        modifier: 1, // Effect multiplier
        slideShadows: false, // Enable slide shadows
      },
      direction: "horizontal",
      loop: false,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        560: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
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
  h1 {
    font-size: 80px;
    font-weight: bold;
    text-align: center;
  }
  .swiper {
    width: 1200px;
    height: 1400px;
    padding: 50px 0;
  }
  .swiper-slide {
    padding: 16px;
    width: 500px;
    height: 600px;
    background-image: url("src/assets/Pizza Poster.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  :global(.swiper-slide-active) {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .swiper-slide:active {
    border: 2px solid #ff5722;
    border-radius: 4px;
  }

  .order-button {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 12px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: auto;
  }

  .order-button:hover {
    background-color: #e64a19;
    border-radius: 4px;
  }

  /* Pagination styling */
  :global(.swiper-pagination) {
    bottom: 700px !important;
    position: relative !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: auto !important;
  }

  :global(.swiper-pagination-bullet) {
    width: 12px;
    height: 12px;
    background: #ccc;
    opacity: 0.7;
    margin: 0 4px;
  }

  :global(.swiper-pagination-bullet-active) {
    background: #ff5722;
    opacity: 1;
  }
</style>
