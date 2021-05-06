<script lang="ts">
  import PricingBoxes from "../pricing/pricing-boxes.svelte";
  import type { Pricing } from "../../types/pricing.type";

  export let title: string;
  export let pricingPlans: Pricing[];
</script>

<style lang="scss">
  .top :global(a) {
    @apply underline;
  }
</style>

<div class="text-center">
  <div class="top max-w-3xl mx-auto mb-small">
    <h2>{title}</h2>
    <div><slot name="description" /></div>
  </div>

  <PricingBoxes {pricingPlans} />
</div>
