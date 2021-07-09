<script context="module">
  export const prerender = true;
  const trackingContext = "general";
</script>

<script>
  import Explore from "../components/explore.svelte";
  import Faqs from "../components/pricing/faqs.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import OtherPlans from "../components/pricing/other-plans.svelte";
  import PlansAndPricing from "../components/pricing/plans-and-pricing.svelte";
  import { otherPlans } from "../contents/pricing";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod is free for Open Source, and offers productive features for you, your team and your business at reasonable prices.",
    title: "Pricing",
  }}
/>
<PlansAndPricing {trackingContext} />
<OtherPlans {trackingContext} {otherPlans} />
<Faqs {trackingContext} />
<Explore />
