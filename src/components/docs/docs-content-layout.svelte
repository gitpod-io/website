<script>
  import BetaBanner from "./beta-banner.svelte";
  import OpenGraph from "../open-graph.svelte";
  import FeedbackWidget from "./feedback-widget.svelte";
  import EditInGitpod from "../../components/docs/edit-in-gitpod.svelte";
  import docsCurrentSectionStore from "../../stores/docs-current-section";
  import PrevNext from "./prev-next.svelte";

  export let section;
  export let title;

  $: $docsCurrentSectionStore = section;
</script>

<svelte:head>
  <link rel="stylesheet" href="/prism-solarized-light.min.css" />
</svelte:head>

<OpenGraph
  data={{
    description:
      "Explore the documentation to learn more about Gitpod.io and Gitpod Self-Hosted.",
    title: title ? title : "Gitpod Documentation",
  }}
/>
<div class="content-docs">
  <BetaBanner />
  <EditInGitpod />
  <slot />
  <FeedbackWidget />
  <PrevNext />
</div>
