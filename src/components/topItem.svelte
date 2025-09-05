<script>
  const pizzaData = {
    chicken: {
      name: "Chicken Pizza",
      description:
        "Grilled chicken strips and savory mushrooms are topped with fresh, spicy jalapeño slices. The perfect combination of hearty and heat.",
      price: "$12.99",
      image: "src/assets/pizzaHero.png",
    },
    margherita: {
      name: "Margherita Pizza",
      description:
        "A classic Italian masterpiece featuring fresh mozzarella, ripe tomatoes, and aromatic basil leaves on our signature wood-fired crust.",
      price: "$10.99",
      image: "src/assets/pizzaHero.png",
    },
    pepperoni: {
      name: "Pepperoni Pizza",
      description:
        "America's favorite! Generous slices of spicy pepperoni with melted mozzarella cheese create the ultimate comfort food experience.",
      price: "$11.99",
      image: "src/assets/pizzaHero.png",
    },
    vegetarian: {
      name: "Garden Vegetarian",
      description:
        "Fresh bell peppers, mushrooms, red onions, black olives, and tomatoes create a colorful and nutritious pizza paradise.",
      price: "$13.99",
      image: "src/assets/pizzaHero.png",
    },
    supreme: {
      name: "Supreme Pizza",
      description:
        "The ultimate loaded pizza with pepperoni, sausage, bell peppers, onions, mushrooms, and olives. A feast for the senses!",
      price: "$15.99",
      image: "src/assets/pizzaHero.png",
    },
  };

  // Pizza options for selection
  const pizzaOptions = [
    {
      id: "chicken",
      image: "src/assets/pizzaHero.png",
      alt: "Chicken Pizza",
    },
    {
      id: "margherita",
      image: "src/assets/pizzaHero.png",
      alt: "Margherita Pizza",
    },
    {
      id: "pepperoni",
      image: "src/assets/pizzaHero.png",
      alt: "Pepperoni Pizza",
    },
    {
      id: "vegetarian",
      image: "src/assets/pizzaHero.png",
      alt: "Vegetarian Pizza",
    },
    {
      id: "supreme",
      image: "src/assets/pizzaHero.png",
      alt: "Supreme Pizza",
    },
  ];

  // Reactive variables
  let selectedPizza = "chicken";
  let isAnimating = false;

  // Reactive statements for current pizza data
  $: currentPizza = pizzaData[selectedPizza];

  // Function to handle pizza selection
  function selectPizza(pizzaId) {
    if (isAnimating || pizzaId === selectedPizza) return;

    isAnimating = true;

    // Small delay to show animation, then update
    setTimeout(() => {
      selectedPizza = pizzaId;
      setTimeout(() => {
        isAnimating = false;
      }, 300);
    }, 250);
  }

  // Handle order button click
  function handleOrder() {
    alert(`Ordering ${currentPizza.name} for ${currentPizza.price}!`);
  }

  // Handle view more button click
  function handleViewMore() {
    alert(`Viewing more details for ${currentPizza.name}...`);
  }
</script>

<div class="container">
  <div class="fav">
    <h2 class="favoritesTitle">OUR FAVOURITES</h2>
  </div>
  <div class="topItem">
    <div class="image-section">
      <img
        class="topItem-image"
        class:changing={isAnimating}
        src={currentPizza.image}
        alt={currentPizza.name}
      />
    </div>
    <div class="details">
      <div class="descriptions">
        <h1 class="ItemName" class:changing={isAnimating}>
          {currentPizza.name}
        </h1>
        <p class="ItemDescription" class:changing={isAnimating}>
          {currentPizza.description}
        </p>
        <h3 class="ItemPrice" class:changing={isAnimating}>
          {currentPizza.price}
        </h3>
        <div class="buttons">
          <button class="orderButton" on:click={handleOrder}>Order</button>
          <button
            class="viewMoreButton"
            on:click={() => {
              window.location.href = "/view-more";
            }}>View More</button
          >
        </div>
      </div>
      <div class="pizza-selection-lg">
        {#each pizzaOptions as pizza}
          <div
            class="pizza-option"
            class:active={selectedPizza === pizza.id}
            on:click={() => selectPizza(pizza.id)}
            on:keydown={(e) => e.key === "Enter" && selectPizza(pizza.id)}
            role="button"
            tabindex="0"
          >
            <img src={pizza.image} alt={pizza.alt} />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
  .topItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
  .details {
    margin: 0 5%;
    padding: 0 30px;
  }
  .descriptions {
    padding: 16px;
    /* background-color: #f9f9f9;
    border: 1px solid #eee; */
    border-radius: 8px;
    flex: 1;
    margin-left: 30px;
  }
  .favoritesTitle {
    font-size: 3.5em;
    margin-bottom: 20px;
    margin-left: 10px;
    color: #ff5722;
  }
  .ItemName {
    font-size: 4em;
    margin: 10px 0;
    color: #333;
    font-weight: bold;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ItemName.changing {
    opacity: 0;
    transform: translateY(-20px);
  }
  .ItemDescription {
    font-size: 1.4em;
    margin: 10px 40% 10px 0;
    line-height: 1.6;
    color: #666;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
  }
  .ItemDescription.changing {
    opacity: 0;
    transform: translateY(-20px);
  }

  .ItemPrice {
    font-size: 1.5em;
    color: #ff5722;
    margin: 10px 0;
    font-weight: bold;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  }

  .ItemPrice.changing {
    opacity: 0;
    transform: translateY(-10px);
  }

  .buttons {
    display: flex;
    gap: 8px;
  }

  .orderButton {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 10px 25px;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.2em;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 87, 34, 0.3);
  }

  .orderButton:hover {
    background-color: #e64919;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 87, 34, 0.4);
  }

  .viewMoreButton {
    background-color: transparent;
    color: #000000;
    border: 2px solid #000000;
    padding: 10px 25px;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.2em;
    transition: all 0.3s ease;
  }

  .viewMoreButton:hover {
    background-color: #333;
    color: white;
    transform: translateY(-2px);
  }

  .topItem-image {
    display: flex;
    width: 100%;
    padding: 0 0 0 0;
    height: auto;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .topItem-image.changing {
    opacity: 0.7;
    transform: scale(0.95);
  }

  .image-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pizza-selection-lg {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    padding: 20px;
  }

  .pizza-option {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
    border: 4px solid transparent;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .pizza-option:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  .pizza-option.active {
    border-color: #ff5722;
    transform: translateY(-10px) scale(1.1);
    box-shadow: 0 10px 30px rgba(255, 87, 34, 0.3);
    animation: pulse 1s infinite;
  }

  .pizza-option img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .pizza-option:hover img {
    transform: scale(1.1);
  }

  .pizza-option::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 87, 34, 0);
    border-radius: 50%;
    transition: background 0.3s ease;
  }

  .pizza-option.active::after {
    background: rgba(255, 87, 34, 0.1);
  }

  @media (max-width: 1300px) {
    .topItem {
      flex-direction: column;
      text-align: center;
    }

    .topItem-image {
      width: 100%;
      margin-bottom: 20px;
    }

    .ItemName {
      font-size: 3em;
    }

    .ItemDescription {
      font-size: 1.2em;
      margin: 20px 0;
    }

    .ItemPrice {
      font-size: 1.5em;
    }

    .buttons {
      flex-direction: column;
      gap: 10px;
    }

    .orderButton,
    .viewMoreButton {
      width: 100%;
      padding: 15px 0;
      font-size: 1em;
    }
    .pizza-selection-lg {
      gap: 15px;
      flex-wrap: wrap;
    }

    .pizza-option {
      width: 100px;
      height: 100px;
    }
  }
</style>
