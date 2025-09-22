<script lang="ts">
  import "@fontsource/manrope";
  import { onMount } from "svelte";
  import Counter from "../cards/counter.svelte";

  let isaminating = false;

  function callMenu() {
    addEventListener("click", () => {
      window.location.href = "/menu";
    });
  }
  async function autoscroll() {
    const dealContainer = document.querySelector(".deals-title") as HTMLElement;
    const margin = 50;
    window.scrollTo({
      top: dealContainer.offsetTop - margin,
      behavior: "smooth",
    });
  }
  // function countTo(target: number) {
  //   let current = 0;
  //   const increment = Math.ceil(target / 50); // Adjust the divisor to change speed
  //   const interval = setInterval(() => {
  //     current += increment;
  //     if (current >= target) {
  //       current = target;
  //       clearInterval(interval);
  //     }
  //     document.querySelector(".highlight")!.textContent =
  //       current.toLocaleString();
  //   }, 50); // Adjust the interval time to change speed
  // }
  let count = 0;
  let highlightEl: HTMLElement;

  function countTo(target: number, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 → 1
      const eased = easeOutCubic(progress);

      count = Math.floor(start + (target - start) * eased);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  // Run when mounted (example: count to 66,402)
  // onMount(() => {
  //   countTo(66_402, 1500);
  // });
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="hero-section">
  <div class="hero-content">
    <div class="hero-text">
      <h1>
        Your Pizza, Your <br />
        <!-- {#if isaminating} -->
        <!-- 
          >{countTo(66_402, 1500, highlightEl)} --><span
          class="highlight"
          bind:this={highlightEl}
          ><Counter target={66_402} duration={1500} />
        </span>

        <!-- {:else}
         count.toLocaleString()
          <span class="highlight">66,402</span> -->
        <!-- {/if} -->
        <span class="spacing">66,402</span> Ways.
      </h1>
    </div>
    <div class="hero-details">
      <div class="sauces">
        <li class="number">
          <Counter target={5} duration={1000} color="#dab823" />
        </li>
        <li class="label">Sauces</li>
      </div>
      <div class="cheeses">
        <li class="number">
          <Counter target={6} duration={1000} color="#dab823" />
        </li>
        <li class="label">Cheeses</li>
      </div>
      <div class="toppings">
        <li class="number">
          <Counter target={34} duration={1000} color="#dab823" />
        </li>
        <li class="label">Toppings</li>
      </div>
      <div class="crusts">
        <li class="number">
          <Counter target={3} duration={1000} color="#dab823" />
        </li>
        <li class="label">Crusts</li>
      </div>
    </div>
    <div class="hero-actions">
      <button on:click={callMenu} class="menu-button">Menu</button>
      <button on:click={autoscroll} class="top-deals-button">Top Deals</button>
    </div>
  </div>
  <img
    class="hero-image"
    src="src/assets/pizzaHero.png"
    alt="Delicious Pizza"
  />
</div>

<!-- margin-right: 10px;
    margin-top: 40px;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    background-color: #ff5722;
    color: white;
    cursor: pointer;
    font-size: 1.5em; -->

<style>
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 30px;
  }

  .hero-text {
    /* padding-left: 20%; */
    width: 120%;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100%; */
    margin-left: 9%;
  }

  .spacing {
    visibility: hidden;
  }

  .highlight {
    font-family: "Manrope", sans-serif;
    position: absolute;
    width: fit-content;
    overflow: hidden;
    color: #ff5722;
  }

  .hero-content h1 {
    font-family: "Manrope", sans-serif;
    font-size: 5em;
    color: #333;
  }

  .hero-details {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 0 10% 0 0;
    margin: 0 0;
    gap: 40px;
  }

  .hero-details .sauces,
  .hero-details .cheeses,
  .hero-details .toppings,
  .hero-details .crusts {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* font-size: 2.5em; */
  }

  .hero-content button {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 15px 30px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 10px;
    font-family: "Manrope", sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 87, 34, 0.3);
  }

  .hero-details .number {
    font-family: "Manrope", sans-serif;
    font-size: 3em;
    font-weight: bold;
    color: rgb(218, 184, 35);
  }

  .hero-details .label {
    font-family: "Manrope", sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    color: #242424;
  }

  .hero-content button:hover {
    background-color: #e64919;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 87, 34, 0.4);
  }

  .hero-actions {
    display: flex;
    justify-content: flex-start;
    width: 120%;
    padding: 20px 0 0 40%;
    gap: 20px;
  }

  .hero-image {
    display: flex;
    width: 40%;
    padding: 0 0;
  }

  @media (max-width: 768px) {
    .hero-section {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 20px 0 20px 0;
      background-image: url("src/assets/pizzaHero.png");
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      background-blend-mode: darken;
      background-size: 100%;
      background-position: 50% 60%;
      background-repeat: no-repeat;
      height: 100vw;
    }

    .hero-image {
      width: 0%;
      margin-top: 20px;
      margin-left: 10px;
    }

    .hero-content {
      margin: 0 0;
      width: 50%;
      padding: 0 0;
      align-items: center;
    }

    .hero-content h1 {
      font-size: 2em;
      margin-left: 0;
      color: white;
    }

    .hero-details {
      flex-direction: row;
      justify-content: center;
      gap: 10px;
      margin-left: 0;
      padding: 0 0 0 0;
      width: 100%;
    }

    .hero-details .number {
      font-size: 2em;
      /* color: white; */
    }

    .hero-details .label {
      font-size: 1em;
      color: white;
    }

    .hero-content button {
      width: 100%;
      margin: 0 0;
      font-size: 1em;
      padding: 10px 15px;
    }

    .hero-actions {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      padding: 20px 0 0 0;
      gap: 20px;
    }
  }
</style>
