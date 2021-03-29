<script>
  import docsCurrentSectionStore from "../../stores/docs-current-section";
  import MenuLink from "./menu-link.svelte";

  export let menuItem;

  $: isActiveSection = $docsCurrentSectionStore
    ? menuItem.path.endsWith(`${$docsCurrentSectionStore}/`)
    : false;
</script>

<style>
  .menu-item {
    @apply px-6;
    font-size: var(--p-large);
  }

  .submenu {
    @apply ml-4 mt-4;
    font-size: var(--p-medium);
    line-height: var(--x-small);
  }

  .isActiveSection {
    @apply bg-white;
    @apply py-6;
    border-radius: 1.6rem;
    box-shadow: var(--shadow);
  }
</style>

<li class:isActiveSection class="menu-item">
  <MenuLink href={menuItem.path} class="text-h6">{menuItem.title}</MenuLink>
  {#if menuItem.subMenu && isActiveSection}
    <ul class="submenu">
      {#each menuItem.subMenu as sub}
        <li>
          <MenuLink href={sub.path}>{sub.title}</MenuLink>
        </li>
      {/each}
    </ul>
  {/if}
</li>
