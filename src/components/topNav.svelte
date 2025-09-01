<script>
</script>

<div class="navContainer">
  <a href="/"><img src="src/assets/logoMain.png" alt="Logo" /></a>
  <div class="nav-links">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/#">Locations</a></li>
    </ul>
    <button>Order now</button>
  </div>
</div>

<!-- margin-left: 10px;
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1em; -->

<style>
  .navContainer {
    position: sticky;
    top: 0px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: #ffffff; */
    padding: 5px 0;
    background-color: white;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
  }

  img {
    height: 40px;
    width: auto;
  }

  .nav-links {
    margin: 0 20px;
    display: flex;
  }

  .nav-links ul {
    list-style: none;
    padding: 0 20px;
    display: flex;
  }

  .nav-links li {
    margin: 0 10px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: large;
  }

  .nav-links a {
    text-decoration: none;
    color: #333;
  }

  .nav-links button {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.2em;
  }

  button:hover {
    background-color: #e64a19;
  }

  @media (max-width: 670px) {
    .nav-links {
      margin: 10px 0 0 0;
      width: 100%;
      justify-content: space-between;
    }

    .nav-links ul {
      padding: 0;
    }

    .nav-links li {
      margin: 0 5px;
      font-size: 1em;
    }

    .nav-links button {
      padding: 5px 15px;
      font-size: 1em;
    }
  }
</style>
