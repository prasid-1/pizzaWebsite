<script>
  import { onMount, onDestroy } from "svelte";

  let slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
  ];

  let currentSlideIndex = 0;
  let intervalId;
  const slideDuration = 3000; // milliseconds

  onMount(() => {
    intervalId = setInterval(() => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    }, slideDuration);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div class="carousel-container">
  {#each slides as slide, i}
    <div class="carousel-slide" class:active={i === currentSlideIndex}>
      {slide.content}
    </div>
  {/each}
</div>

<style>
  .carousel-container {
    position: relative;
    width: 100%;
    height: 200px; /* Adjust as needed */
    overflow: hidden;
  }

  .carousel-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .carousel-slide.active {
    opacity: 1;
  }
</style>
