<script>
  import { selection } from "../globalData/idHandler";
  import { onMount } from "svelte";

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

  onMount(() => {
    selectPizza($selection);
  });

  const pizzaOptions = Object.keys(pizzaData);
  console.log("Pizza Options:", pizzaOptions);

  let isAnimating = false;

  let selectedPizza = $selection; // default selection

  console.log("Initial selectedPizza:", $selection);
  let scrollContainer;

  // Detect center pizza while scrolling
  function handleScroll() {
    const containerRect = scrollContainer.getBoundingClientRect();
    const centerY = containerRect.top + containerRect.height / 2;

    let closestId = selectedPizza;
    let closestDist = Infinity;

    pizzaOptions.forEach((id) => {
      const el = document.getElementById(`pizza-${id}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const dist = Math.abs(centerY - itemCenter);

        if (dist < closestDist) {
          closestDist = dist;
          closestId = id;
        }
      }
    });

    if (closestId !== selectedPizza) {
      selectedPizza = closestId;
    }
  }

  function selectPizza(pizzaId) {
    isAnimating = true;
    selectedPizza = pizzaId; // update details immediately

    const el = document.getElementById(`pizza-${pizzaId}`);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: window.innerWidth <= 768 ? "nearest" : "center",
        inline: window.innerWidth <= 768 ? "center" : "nearest",
      });
    }

    // Small delay to show animation, then update
    setTimeout(() => {
      selectedPizza = pizzaId;
      setTimeout(() => {
        isAnimating = false;
      }, 300);
    }, 250);
  }
</script>

<div class="container">
  <!-- LEFT SCROLLABLE IMAGES -->
  <div
    class="pizza-selection"
    bind:this={scrollContainer}
    on:scroll={handleScroll}
  >
    <div class="spacer"></div>

    {#each pizzaOptions as id}
      <button
        type="button"
        id={`pizza-${id}`}
        class="pizza-option"
        class:active={selectedPizza === id}
        on:click={() => selectPizza(id)}
        aria-label={`Select ${pizzaData[id].name}`}
      >
        <img src={pizzaData[id].image} alt={pizzaData[id].name} />
      </button>
    {/each}
    <div class="spacer"></div>
  </div>

  <!-- RIGHT DETAILS -->
  <div class="details" class:changing={isAnimating}>
    <h2>{pizzaData[selectedPizza].name}</h2>
    <p>{pizzaData[selectedPizza].description}</p>
    <h3>{pizzaData[selectedPizza].price}</h3>
    <button class="orderButton">Order Now</button>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    height: 100vh;
    background: url("src/assets/pizzaBg.png") repeat;
    background-size: contain;
  }

  .pizza-selection {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 700px;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    padding: 20px 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .spacer {
    flex-shrink: 0;
    height: 200px;
  }

  .pizza-option {
    width: 300px;
    height: 300px;
    flex-shrink: 0;
    margin: 20px 0;
    border-radius: 50%;
    border: 4px solid transparent;
    scroll-snap-align: center;
    transition:
      transform 0.3s,
      border-color 0.3s;
    cursor: pointer;
  }

  .pizza-option img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .pizza-option.active {
    transform: scale(1.4);
    border-color: #ffcc00;
    z-index: 2;
  }

  .details {
    max-width: 400px;
    padding: 30px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
  }

  .details.changing {
    opacity: 0;
    transform: translateY(-20px);
  }

  .details h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #333;
  }

  .details p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 15px;
    line-height: 1.5;
  }

  .details h3 {
    font-size: 1.3rem;
    color: #000;
    margin-bottom: 20px;
  }

  .orderButton {
    background-color: #ffcc00;
    color: black;
    border: none;
    padding: 12px 25px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .orderButton:hover {
    background-color: #e6b800;
  }

  .pizza-selection::-webkit-scrollbar {
    width: 8px;
  }
  .pizza-selection::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column; /* stack vertically */
      gap: 30px;
      height: auto;
    }

    .pizza-selection {
      flex-direction: row; /* horizontal scroll */
      width: 100%;
      height: 250px;
      overflow-x: scroll;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      padding: 20px 0;
    }

    .pizza-option {
      width: 200px;
      height: 200px;
      margin: 0 15px;
      scroll-snap-align: center;
    }

    .spacer {
      width: 40vw; /* allow first/last to center */
      height: auto;
    }

    .details {
      width: 90%;
      text-align: center;
      padding: 20px;
    }

    .details h2 {
      font-size: 1.5rem;
    }
    .details p {
      font-size: 1rem;
    }
    .details h3 {
      font-size: 1.2rem;
    }
  }
</style>
