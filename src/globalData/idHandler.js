
  import { writable } from "svelte/store";
  export let selection = writable("chicken");
  export const err = writable(false);

