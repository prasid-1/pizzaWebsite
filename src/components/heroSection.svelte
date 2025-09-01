<script>
</script>

<div class="hero-section">
  <div class="hero-content">
    <div class="hero-text">
      <h1>
        YOUR PIZZA, YOUR <br /> <span class="highlight">66,402</span> WAYS.
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
      <button class="menu-button">Menu</button>
      <button class="top-deals-button">Top Deals</button>
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
    margin: 5% 0;
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
    font-size: 5em;
    color: #333;
  }

  .hero-details {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 20px 0;
  }

  .hero-details div {
    text-align: center;
  }

  .hero-details .sauces,
  .hero-details .cheeses,
  .hero-details .toppings,
  .hero-details .crusts {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5em;
  }

  .hero-content button {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.2em;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 87, 34, 0.3);
  }

  .hero-details .number {
    padding: 0 15px;
    font-size: 3em;
    color: rgb(218, 184, 35);
  }

  .hero-details .label {
    font-size: 1.2em;
    color: #242424;
  }

  .hero-content button:hover {
    background-color: #e64919;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 87, 34, 0.4);
  }

  .hero-image {
    display: flex;
    width: 50%;
    padding: 0 0;
    height: auto;
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
