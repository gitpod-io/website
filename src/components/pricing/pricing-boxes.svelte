<script lang="ts">
  import type { Pricing } from "../../types/pricing.type";
  import PricingBox from "./pricing-box.svelte";

  export let pricingPlans: Pricing[];
  export let trackingContext: String;
</script>

<div class="pricingContainer">
  {#each pricingPlans as pricing}
    <PricingBox {trackingContext} {pricing} />
  {/each}
</div>
