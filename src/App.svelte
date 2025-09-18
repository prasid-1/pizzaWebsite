<script lang="ts">
  import TopNav from "./components/topNav.svelte";
  import Home from "./Home/Home.svelte";
  import Menu from "./Menu/menu.svelte";
  import ViewMore from "./components/viewMore.svelte";
  import Chatbot from "./components/chatbot.svelte";
  import Footer from "./components/footer.svelte";

  import { Router } from "@mateothegreat/svelte5-router";
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/menu",
      component: Menu,
    },
    {
      path: "/view-more",
      component: ViewMore,
    },
  ];
</script>

<TopNav />
<Chatbot />
<Router {routes} />
<Footer />
