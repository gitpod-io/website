<script>
  import LoginButton from "../login-button.svelte";
  import NavItem from "../nav-item.svelte";
  import menuState from "./state";

  export let navItems = [];
</script>

<style lang="scss">
</style>

{#if $menuState}
  <div class="items h">
    {#each navItems as { href, label }}
      <NavItem {href} on:click={() => ($menuState = !$menuState)}
        >{@html label}</NavItem
      >
    {/each}
    <LoginButton />
  </div>
{/if}
