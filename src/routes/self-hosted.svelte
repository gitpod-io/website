<script context="module">
  export const prerender = true;
</script>

<script>
  import Explore from "../components/explore.svelte";
  import Faqs from "../components/self-hosted/faqs.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import PlansAndPricing from "../components/self-hosted/plans-and-pricing.svelte";
</script>

<OpenGraph
  data={{
    description: "Self-Host Gitpod on Your Own Infrastructure.",
    title: "Self-Hosted",
    type: "website",
  }}
/>
<PlansAndPricing />
<Faqs />
<Explore />
