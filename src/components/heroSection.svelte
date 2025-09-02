<script lang="ts">
  import "@fontsource/manrope";
  function callMenu() {
    addEventListener("click", () => {
      window.location.href = "/menu";
    });
  }
  async function autoscroll() {
    const dealContainer = document.querySelector(".deals-title") as HTMLElement;
    window.scrollTo({
      top: dealContainer.offsetTop,
      behavior: "smooth",
    });
  }
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
        Your Pizza, Your <br /> <span class="highlight">66,402</span> Ways.
      </h1>
    </div>
    <div class="hero-details">
      <div class="sauces">
        <li class="number">6</li>
        <li class="label">Sauces</li>
      </div>
      <div class="cheeses">
        <li class="number">6</li>
        <li class="label">Cheeses</li>
      </div>
      <div class="toppings">
        <li class="number">34</li>
        <li class="label">Toppings</li>
      </div>
      <div class="crusts">
        <li class="number">3</li>
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

  .highlight {
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
    width: 120%;
    margin: 0 0;
    gap: 40px;
  }

  .hero-details div {
    text-align: left;
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
    width: 50%;
    padding: 0 0;
  }

  @media (max-width: 768px) {
    .hero-section {
      flex-direction: column;
      text-align: center;
    }

    .hero-image {
      width: 80%;
      margin-top: 20px;
    }

    .hero-content h1 {
      font-size: 2.5em;
    }

    .hero-details {
      flex-direction: column;
      gap: 10px;
    }

    .hero-details .number {
      font-size: 2em;
    }

    .hero-details .label {
      font-size: 1em;
    }

    .hero-content button {
      width: 100%;
      margin: 10px 0;
    }
  }
</style>
