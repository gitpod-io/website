<script lang="ts">
  import docsCurrentSectionStore from "../../stores/docs-current-section";
  import MenuLink from "./menu-link.svelte";

  import type { MenuEntry } from "../../types/menu-entry.type";
  export let menuItem: MenuEntry;

  $: isActiveSection = $docsCurrentSectionStore
    ? menuItem.path.indexOf(
        /self-hosted\/\d\.\d\.\d/.test($docsCurrentSectionStore)
          ? $docsCurrentSectionStore.replace(/\d\.\d\.\d/, "latest")
          : $docsCurrentSectionStore
      ) >= 0
    : /\/docs\/?$/.test(menuItem.path);
</script>

<style type="text/postcss">
  /* override _forms.scss */
  .menu-item {
    margin-bottom: 0;
  }

  .menu-container {
    @apply px-6;
    display: inline-block;
    font-size: var(--p-large);
    line-height: var(--x-small);

    &.isActiveSection {
      @apply bg-white;
      @apply py-6;
      border-radius: 1rem;
      box-shadow: var(--shadow);
    }
  }

  .submenu {
    @apply ml-4 mt-4;
    font-size: var(--p-medium);
    line-height: var(--x-small);
  }
</style>

<li class="menu-item">
  <div
    class:isActiveSection={isActiveSection && menuItem.subMenu}
    class="menu-container"
  >
    <MenuLink href={menuItem.path} class="text-large">{menuItem.title}</MenuLink
    >
    {#if menuItem.subMenu && isActiveSection}
      <ul class="submenu">
        {#each menuItem.subMenu as sub}
          <li class="menu-item">
            <MenuLink href={sub.path}>{sub.title}</MenuLink>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</li>
