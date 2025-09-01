<script>
  import App from "../App.svelte";
  import MenuItem from "../cards/menuItemsCard.svelte";

  let selectedCategory = "All Items";
  let isAnimating = false;

  $: itemsToShow =
    selectedCategory === "All Items"
      ? Object.values(itemData).flat()
      : itemData[selectedCategory];

  const itemData = {
    "🍕 Pizza": [
      {
        title: "Item 1",
        description: "Description for Item 1",
        price: 9.99,
        titleD: "PIZZA1",
      },
      {
        title: "Item 2",
        description: "Description for Item 2",
        price: 14.99,
        titleD: "PIZZA2",
      },
      {
        title: "Item 3",
        description: "Description for Item 3",
        price: 19.99,
        titleD: "PIZZA3",
      },
      {
        title: "Item 4",
        description: "Description for Item 4",
        price: 12.99,
        titleD: "PIZZA4",
      },
      {
        title: "Item 5",
        description: "Description for Item 5",
        price: 11.99,
        titleD: "PIZZA5",
      },
      {
        title: "Item 6",
        description: "Description for Item 6",
        price: 13.99,
        titleD: "PIZZA6",
      },
      {
        title: "Item 7",
        description: "Description for Item 7",
        price: 15.99,
        titleD: "PIZZA7",
      },
      {
        title: "Item 8",
        description: "Description for Item 8",
        price: 17.99,
        titleD: "PIZZA8",
      },
    ],
    "🍽️ Appetizers": [
      {
        title: "Item 1",
        description: "Description for Item 1",
        price: 9.99,
        titleD: "Appetizers1",
      },
      {
        title: "Item 2",
        description: "Description for Item 2",
        price: 14.99,
        titleD: "Appetizers2",
      },
      {
        title: "Item 3",
        description: "Description for Item 3",
        price: 19.99,
        titleD: "Appetizers3",
      },
      {
        title: "Item 4",
        description: "Description for Item 4",
        price: 12.99,
        titleD: "Appetizers4",
      },
    ],
    "🍹 Beverages": [
      {
        title: "Item 1",
        description: "Description for Item 1",
        price: 9.99,
        titleD: "BEVERAGE1",
      },
      {
        title: "Item 2",
        description: "Description for Item 2",
        price: 14.99,
        titleD: "BEVERAGE2",
      },
      {
        title: "Item 3",
        description: "Description for Item 3",
        price: 19.99,
        titleD: "BEVERAGE3",
      },
    ],
  };

  function selectCategory(category) {
    if (isAnimating || category === selectedCategory) return;

    isAnimating = true;

    // Small delay to show animation, then update
    setTimeout(() => {
      selectedCategory = category;
      setTimeout(() => {
        isAnimating = false;
      }, 200);
    }, 250);
  }
</script>

<div class="menu-container">
  <div class="menu-category-select">
    <div class="menu-category-buttons">
      <button
        class:selected={selectedCategory === "All Items"}
        on:click={() => selectCategory("All Items")}>All Items</button
      >
      {#each Object.keys(itemData) as category}
        <button
          class:selected={selectedCategory === category}
          on:click={() => selectCategory(category)}
          ><!---<img
            class="Category-pasta-button-image"
            src="/path/to/pasta-icon.png"
            alt=""
          />-->
          {category}
        </button>
      {/each}
    </div>
  </div>
  <div class="menu-title-container">
    <h1 class="menu-title" class:changing={isAnimating}>
      {selectedCategory}<br />
      <hr />
    </h1>
    <div class="items-container">
      <div class="menu-list" class:changing={isAnimating}>
        {#each itemsToShow as item}
          <span class="menu-item">
            <MenuItem
              title={item.title}
              description={item.description}
              price={item.price}
              titleD={item.titleD}
            />
          </span>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .menu-category-buttons {
    position: sticky;
    top: 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;
  }

  .items-container {
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    background-color: white;
    padding: 20px;
    margin-top: 5%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  .menu-item:hover {
    transform: scale(1.05);
    border-radius: 10%;
    box-shadow: 0 4px 15px rgba(255, 87, 34, 0.3);
    transition: all 0.3s ease;
  }
  .menu-title-container {
    /* background-color: #f9f9f9; */
    margin: 0 70px;
  }
  .menu-title {
    font-size: 5em;
    margin-bottom: 20px;
    color: black;
    padding-left: 0 0;
    font-weight: bold;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .menu-title.changing {
    opacity: 0;
    transform: translateY(-20px);
  }
  .menu-container {
    display: flex;
    flex-direction: row;
    padding: 20px;
  }
  .menu-category-select {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    background-color: #f9f9f9;
    padding: 10px;
    margin-top: 50px;
    border-radius: 5px;
  }
  hr {
    border: 1px solid #000000;
    height: 1px;
    background-color: #eee;
    margin: 20px 0;
  }
  .menu-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 0px;
    margin: 0px 0;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
  }

  .menu-list.changing {
    opacity: 0;
    transform: translateY(-20px);
  }

  h1 {
    font-size: 4em;
    color: #333;
  }

  .menu-category-select {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 20%;
    align-items: center;
    background: none;
  }

  .menu-category-select button {
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 10px 0;
    width: 100%;
    background: white;
    border: none;
    border-radius: 9999px; /* pill shape */
    padding: 10px 16px;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    color: #333;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
  }

  .menu-category-select button img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .menu-category-select button:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .menu-category-select button:active,
  .menu-category-select button.selected {
    background: #ff5722;
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); */
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 87, 34, 0.4);
  }

  @media (max-width: 1300px) {
    .menu-container {
      flex-direction: column;
    }

    .menu-title {
      font-size: 3em;
      text-align: center;
      overflow: hidden;
    }

    .menu-category-buttons {
      display: flex;
      flex-direction: row;
    }

    .menu-category-select {
      /* position: sticky;
      top: 50px; */
      padding: 0 0;
      margin: 0 0;
      /* width: 100%; */
      /* overflow-x: hidden; */
      flex-direction: column;
      z-index: 10;
    }

    .menu-category-select button {
      flex: 0 0 auto;
      margin-right: 10px;
      font-size: 1.2em;
    }

    .menu-list {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
</style>
