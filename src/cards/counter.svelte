<!-- Counter.svelte -->
<script lang="ts">
  export let target: number;
  export let duration: number = 2000;
  export let color: string = "#ff5722";

  let count = 0;

  function animate() {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      count = Math.floor(start + (target - start) * eased);

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  import { onMount } from "svelte";
  onMount(animate);
</script>

<span style="color: {color}">{count.toLocaleString()}</span>

<style>
  span {
    font-family: "Manrope", sans-serif;
    position: relative;
    width: fit-content;
    overflow: hidden;
  }
</style>
