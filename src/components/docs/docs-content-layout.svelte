<script>
  import { page } from "$app/stores";
  import BetaBanner from "./beta-banner.svelte";
  import OpenGraph from "../open-graph.svelte";
  import docsCurrentSectionStore from "../../stores/docs-current-section";

  export let section;
  export let title;

  $: $docsCurrentSectionStore = section;
  $: isBetaPage = $page.path.startsWith("/docs/beta");
</script>

<OpenGraph
  data={{
    description:
      "Explore the documentation to learn more about Gitpod.io and Gitpod Self-Hosted.",
    title: title ? title : "Gitpod Documentation",
  }}
/>
<div class="content-docs">
  {#if isBetaPage}
    <BetaBanner />
  {/if}
  <slot />
</div>
