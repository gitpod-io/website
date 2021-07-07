<script lang="ts">
  import LoginButton from "../login-button.svelte";
  import NavItem from "../nav-item.svelte";
  import menuState from "./state";

  export let navItems = [];
</script>

<style type="text/postcss">
  @media (min-width: 931px) {
    .nav-items {
      @apply hidden;
    }
  }
</style>

{#if $menuState}
  <div
    class="nav-items absolute flex flex-col pt-10 pb-16 w-screen items-center bg-off-white space-y-xx-small z-10 shadow-md"
  >
    {#each navItems as navItem}
      <NavItem {navItem} on:click={() => ($menuState = !$menuState)} />
    {/each}
    <LoginButton />
  </div>
{/if}
