<script lang="ts">
  import LoginButton from "../login-button.svelte";
  import NavItem from "../nav-item.svelte";
  import menuState from "./state";

  export let navItems = [];
</script>

{#if $menuState}
  <div
    class="absolute flex flex-col pt-10 pb-16 w-screen items-center bg-off-white space-y-6 z-10 shadow-md sm:hidden"
  >
    {#each navItems as navItem}
      <NavItem {navItem} on:click={() => ($menuState = !$menuState)} />
    {/each}
    <LoginButton />
  </div>
{/if}
