<script lang="ts">
  import TopNav from "./components/topNav.svelte";
  import Home from "./Home.svelte";
  import Menu from "./menu.svelte";
  import ViewMore from "./components/viewMore.svelte";
  import Chatbot from "./components/chatbot.svelte";

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
