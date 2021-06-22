<script lang="ts">
  import Menu from "../../components/docs/menu.svelte";
  import MobileMenu from "../../components/docs/mobile-menu/index.svelte";
  import Search from "../../components/docs/search.svelte";
  import "../../assets/markdown-commons.scss";
  import { MENU } from "./menu";
  import Toc from "../../components/docs/toc.svelte";
</script>

<style>
  :root {
    --side-nav-width: 310px;
    --toc-width: 200px;
  }

  .menu {
    @apply pt-12 pb-36 pr-6 h-screen sticky overflow-y-scroll overflow-x-hidden z-10 bg-sand-light;
    top: var(--header-height);
    width: var(--side-nav-width);

    @media (max-width: 1340px) {
      @apply hidden;
    }
  }

  .doc-contents {
    @apply mx-auto p-small overflow-x-hidden;
    width: calc(100% - var(--side-nav-width) - var(--toc-width));

    @media (max-width: 1340px) {
      width: calc(100% - var(--toc-width));
      @apply pl-0 ml-0 pr-medium;
    }

    @media (max-width: 768px) {
      @apply w-full pr-0;
    }
  }

  .toc {
    @apply hidden;

    @media (min-width: 769px) {
      @apply block sticky h-screen text-p-small pt-medium z-30 bg-sand-light;
      top: var(--header-height);
      width: var(--toc-width);
    }
  }

  :global(main > *) {
    margin-bottom: 0;
  }
</style>

<div class="flex docs-layout row">
  <div class="menu">
    <Menu {MENU} />
  </div>
  <div class="doc-contents">
    <Search />
    <MobileMenu {MENU} />
    <!-- The page table of content is inserted here -->
    <slot />
  </div>
  <div class="toc">
    <Toc />
  </div>
</div>
