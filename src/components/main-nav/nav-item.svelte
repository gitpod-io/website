<script lang="ts">
  import { page } from "$app/stores";

  export let navItem;
  const { href, isHighlighted, label } = navItem;

  $: isActivePage =
    $page.path === "/" ? /\/$/.test(href) : href.indexOf($page.path) >= 0;
</script>

<style type="text/postcss">
  a {
    @media (min-width: 931px) {
      @apply text-base;
    }
  }

  .active {
    color: var(--black);
  }
</style>

<a
  class:active={isActivePage}
  {href}
  on:click
  sveltekit:prefetch
  class="text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black"
>
  {label}
  {#if isHighlighted}
    <sup class="text-orange-800">*</sup>
  {/if}
</a>
