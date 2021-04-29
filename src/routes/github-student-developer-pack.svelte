<script>
  import Header from "../components/github-student-developer-pack/header.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import PricingOffers from "../components/github-student-developer-pack/pricing-offers.svelte";
  import Explore from "../components/explore.svelte";
  import Headline from "../components/github-student-developer-pack/headline.svelte";
</script>

<style>
</style>

<OpenGraph
  data={{
    title: "GitHub Student Developer Pack",
    description:
      "With the GitHub Student Developer Pack, you get the same features as with our usual plans but at a much better price. We’re happy to be able to empower student developers participating in it.",
  }}
/>

<Header />
<PricingOffers />
<Headline />
<Explore />
