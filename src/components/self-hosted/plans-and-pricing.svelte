<script lang="ts">
  import { pricingPlans } from "../../contents/self-hosted";
  import Section from "../section.svelte";
  import PricingBoxes from "../pricing/pricing-boxes.svelte";

  export let trackingContext: String;
</script>

<header class="tight">
  <h1>Self-hosted plans</h1>
  <p>
    Install Gitpod Self-Hosted on <strong>Google Cloud Platform</strong> and
    <strong>K3s</strong>.
  </p>
</header>
<div class="self-hosted-pricing">
  <PricingBoxes {trackingContext} {pricingPlans} />
</div>
