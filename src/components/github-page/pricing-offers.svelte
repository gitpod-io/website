<script lang="ts">
  import PricingBoxes from "../pricing/pricing-boxes.svelte";
  import type { Pricing } from "../../types/pricing.type";

  export let title: string;
  export let pricingPlans: Pricing[];
</script>

<style lang="scss">
  .section {
    text-align: center;
  }

  .header {
    max-width: 780px;
    margin: 0 auto var(--small);
  }

  .header :global(a) {
    @apply underline;
  }
</style>

<div class="section text-center">
  <div class="header">
    <h2>{title}</h2>
    <div><slot name="description" /></div>
  </div>

  <PricingBoxes {pricingPlans} />
</div>
