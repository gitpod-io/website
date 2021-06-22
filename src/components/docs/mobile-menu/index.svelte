<script>
  // Components
  import MobileMenuTopics from "./topics.svelte";
  import MobileMenuSubMenu from "./sub-menu.svelte";

  // States
  import topicsState from "../states/topics-state";

  import docsCurrentSectionStore from "../../../stores/docs-current-section";
  export let MENU;

  $: currentSection = MENU.find(({ path }) =>
    $docsCurrentSectionStore
      ? path.indexOf(
          /self-hosted\/\d\.\d\.\d/.test($docsCurrentSectionStore)
            ? $docsCurrentSectionStore.replace(/\d\.\d\.\d/, "latest")
            : $docsCurrentSectionStore
        ) >= 0
      : /\/docs$/.test(path)
  );
</script>

<style lang="scss">
  .mobile-menu {
    margin-bottom: 2.5rem;

    @media (min-width: 1041px) {
      @apply hidden;
    }
  }
</style>

<div class="mobile-menu">
  {#if $topicsState}
    <MobileMenuTopics {MENU} />
  {:else}
    <MobileMenuSubMenu {currentSection} />
  {/if}
</div>
