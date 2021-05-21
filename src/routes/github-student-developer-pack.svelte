<script>
  import Header from "../components/github-page/header.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import PricingOffers from "../components/github-page/pricing-offers.svelte";
  import Explore from "../components/explore.svelte";
  import Headline from "../components/github-page/headline.svelte";
  import { ghStudentPricingPlans as pricingPlans } from "../contents/github-page";
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

<Header title="GitHub Student Developer Pack">
  <svelte:fragment slot="description">
    Make Your Life Easier with Gitpod. With Gitpod you have no more tedious
    setups, you save hours of compiling code, and you can start coding from any
    device, immediately.
  </svelte:fragment>
</Header>
<PricingOffers title="GitHub Student Offer" {pricingPlans}>
  <svelte:fragment slot="description">
    <p>
      With the <a
        href="https://education.github.com/pack/?utm_source=github+gitpod"
        target="_blank">GitHub Student Developer Pack</a
      >, you get the same features as with our usual plans but at a much better
      price. We’re happy to be able to empower student developers participating
      in it.
    </p>
  </svelte:fragment>
</PricingOffers>
<Headline
  text="Stop wasting time with tedious setups, learn amazing programming skills instead!"
/>
<Explore />
