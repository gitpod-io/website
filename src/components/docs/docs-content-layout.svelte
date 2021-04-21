<script>
  import OpenGraph from "../open-graph.svelte";
  import docsCurrentSectionStore from "../../stores/docs-current-section";

  export let section;
  export let title;

  $: $docsCurrentSectionStore = section;
</script>

<!-- <style lang="scss" global>
  @import "../../assets/docs";
</style> -->

<OpenGraph
  data={{
    description:
      "Explore the documentation to learn more about Gitpod.io and Gitpod Self-Hosted.",
    title: title ? title : "Gitpod Documentation",
    type: "website",
  }}
/>
<div class="content-docs">
  <slot />
</div>
