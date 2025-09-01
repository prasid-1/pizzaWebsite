<script>
  export let title = "Menu Item";
  export let description = "Description of the menu item.";
  export let price = 0;
  export let titleD = "itemName";

  function handleOrder(titleD) {
    alert(`Ordering ${titleD} for ${price}!`);
  }

  // Handle view more button click
  function handleViewMore(titleD) {
    alert(`Viewing more details for ${titleD}...`);
  }
</script>

<div class="menu-item">
  <img class="menu-item-image" src="src/assets/pizzaHero.png" alt={title} />
  <h2>{title}</h2>
  <p>{description}</p>
  <p class="price">${price.toFixed(2)}</p>
  <div class="buttons">
    <button class="orderButton" on:click={() => handleOrder(titleD)}
      >Order</button
    >
    <button class="viewMoreButton" on:click={() => handleViewMore(titleD)}
      >View More</button
    >
  </div>
</div>

<style>
  .menu-item-image {
    width: 100%;
    height: auto;
  }
  .menu-item {
    /* border: 1px solid #eee; */
    padding: 20px 0;
    text-align: center;
    height: auto;
  }

  .menu-item h2 {
    font-size: 2em;
    margin: 0;
  }

  .menu-item p {
    margin: 20px 0;
    font-size: 1.2em;
  }

  .menu-item .price {
    font-size: 1.5em;
    font-weight: bold;
    color: #ff5722;
  }

  .buttons {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  .orderButton {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1em;
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
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1em;
    transition: all 0.3s ease;
  }

  .viewMoreButton:hover {
    background-color: #333;
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 1300px) {
    .buttons {
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
