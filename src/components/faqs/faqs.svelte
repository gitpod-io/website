<script context="module">
  export const faqsKey = {};
</script>

<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  const activeFaq = writable(null);

  setContext(faqsKey, activeFaq);
</script>

<slot />
