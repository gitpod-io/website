<script lang="ts">
  import { pricingPlans } from "../../contents/pricing";
  import Section from "../section.svelte";
  import PricingBoxes from "./pricing-boxes.svelte";

  export let trackingContext: String;
</script>

<style>
  h1 {
    text-align: center;
  }
</style>

<Section>
  <h1>Plans and pricing</h1>
  <PricingBoxes {trackingContext} {pricingPlans} />
</Section>
