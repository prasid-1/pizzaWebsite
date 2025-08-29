<script>
  import { onMount } from "svelte";

  // Pizza data
  const pizzaData = {
    chicken: {
      name: "Chicken Pizza",
      description:
        "Grilled chicken strips and savory mushrooms are topped with fresh, spicy jalapeño slices. The perfect combination of hearty and heat.",
      price: "$12.99",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
    },
    margherita: {
      name: "Margherita Pizza",
      description:
        "A classic Italian masterpiece featuring fresh mozzarella, ripe tomatoes, and aromatic basil leaves on our signature wood-fired crust.",
      price: "$10.99",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
    },
    pepperoni: {
      name: "Pepperoni Pizza",
      description:
        "America's favorite! Generous slices of spicy pepperoni with melted mozzarella cheese create the ultimate comfort food experience.",
      price: "$11.99",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=400&fit=crop",
    },
    vegetarian: {
      name: "Garden Vegetarian",
      description:
        "Fresh bell peppers, mushrooms, red onions, black olives, and tomatoes create a colorful and nutritious pizza paradise.",
      price: "$13.99",
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=400&fit=crop",
    },
    supreme: {
      name: "Supreme Pizza",
      description:
        "The ultimate loaded pizza with pepperoni, sausage, bell peppers, onions, mushrooms, and olives. A feast for the senses!",
      price: "$15.99",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
    },
  };

  // Pizza options for selection
  const pizzaOptions = [
    {
      id: "chicken",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&h=150&fit=crop",
      alt: "Chicken Pizza",
    },
    {
      id: "margherita",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=150&h=150&fit=crop",
      alt: "Margherita Pizza",
    },
    {
      id: "pepperoni",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=150&h=150&fit=crop",
      alt: "Pepperoni Pizza",
    },
    {
      id: "vegetarian",
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=150&h=150&fit=crop",
      alt: "Vegetarian Pizza",
    },
    {
      id: "supreme",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop",
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
  <div class="topItem">
    <img
      class="topItem-image"
      class:changing={isAnimating}
      src={currentPizza.image}
      alt={currentPizza.name}
    />
    <div class="details">
      <div class="fav">
        <h2 class="favoritesTitle">OUR FAVOURITES</h2>
      </div>
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
          <button class="viewMoreButton" on:click={handleViewMore}
            >View More</button
          >
        </div>
      </div>
    </div>
  </div>

  <div class="pizza-selection">
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

<style>
  :global(body) {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .topItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5% 0;
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .descriptions {
    padding: 16px;
    border-radius: 8px;
    flex: 1;
    margin-left: 30px;
  }

  .fav {
    margin-bottom: 20px;
  }

  .favoritesTitle {
    font-size: 2em;
    margin-bottom: 20px;
    margin-left: 10px;
    color: #ff5722;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .ItemName {
    font-size: 4em;
    margin: 20px 0;
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
    font-size: 1.3em;
    margin: 30px 20% 30px 0;
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
    font-size: 2.2em;
    color: #ff5722;
    margin: 20px 0;
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
    gap: 15px;
    margin-top: 30px;
  }

  .orderButton {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 15px 35px;
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
    color: #333;
    border: 2px solid #333;
    padding: 15px 35px;
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
    width: 45%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .topItem-image.changing {
    opacity: 0.7;
    transform: scale(0.95);
  }

  /* Pizza Selection Styles */
  .pizza-selection {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    padding: 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .pizza-option {
    width: 120px;
    height: 120px;
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
    animation: pulse 2s infinite;
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

  /* Pulse animation for active selection */
  @keyframes pulse {
    0% {
      box-shadow: 0 10px 30px rgba(255, 87, 34, 0.3);
    }
    50% {
      box-shadow: 0 10px 40px rgba(255, 87, 34, 0.5);
    }
    100% {
      box-shadow: 0 10px 30px rgba(255, 87, 34, 0.3);
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .topItem {
      flex-direction: column;
      text-align: center;
    }

    .descriptions {
      margin-left: 0;
      margin-top: 20px;
    }

    .topItem-image {
      width: 80%;
    }

    .ItemName {
      font-size: 3em;
    }

    .ItemDescription {
      margin: 20px 0;
    }

    .pizza-selection {
      gap: 15px;
      flex-wrap: wrap;
    }

    .pizza-option {
      width: 100px;
      height: 100px;
    }
  }
</style>
