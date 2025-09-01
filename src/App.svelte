<script lang="ts">
  import TopNav from "./components/topNav.svelte";
  import Home from "./Home.svelte";

  import { Router } from "@mateothegreat/svelte5-router";
  const routes = [
    {
      path: "/",
      component: Home,
    },
  ];
  // hululululiu
</script>

<TopNav />
<Router {routes} />
