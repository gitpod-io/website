<script lang="ts">
  import Menu from "../../components/docs/menu.svelte";
  import MobileMenu from "../../components/docs/mobile-menu/index.svelte";
  import Search from "../../components/docs/search.svelte";
  import "../../assets/markdown-commons.scss";
  import { MENU } from "./menu";
</script>

<style type="text/postcss">
  .docs-layout {
    @apply pb-10;

    @media (min-width: 769px) {
      @apply flex;
      @apply pt-10;
    }
  }

  .menu {
    @apply w-2/5 pt-24 pr-8;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .doc-contents {
    @media (min-width: 769px) {
      @apply w-3/5;
    }
  }
</style>

<div class="docs-layout row">
  <div class="menu">
    <Menu {MENU} />
  </div>
  <div class="doc-contents">
    <Search />
    <MobileMenu {MENU} />
    <slot />
  </div>
</div>
