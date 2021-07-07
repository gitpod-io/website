<script lang="ts">
  import MenuSection from "./menu-section.svelte";
  import type { MenuEntry } from "../../types/menu-entry.type";
  export let MENU: MenuEntry[];
</script>

<ul class="space-y-8">
  {#each MENU as menuItem}
    <MenuSection {menuItem} />
  {/each}
</ul>
