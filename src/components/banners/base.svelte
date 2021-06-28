<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let storageKey: string;
  export let location: "top" | "bottom" = "top";

  let showBanner = false;

  const closeBanner = () => {
    showBanner = false;
    window.localStorage.setItem(storageKey, "true");
  };

  onMount(() => {
    showBanner = !window.localStorage.getItem(storageKey);
  });
</script>

<style type="text/postcss">
  .top {
    @apply top-0;
  }

  .bottom {
    @apply bottom-0 fixed z-10;
  }
</style>

{#if showBanner}
  <div
    transition:fade
    class="{location} px-4 py-2 flex justify-between items-center w-full bg-sand-dark shadow-sm text-xs sm:text-sm md:text-base"
  >
    <slot {closeBanner} />
  </div>
{/if}
