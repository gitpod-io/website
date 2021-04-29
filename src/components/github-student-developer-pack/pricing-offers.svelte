<script lang="ts">
  import { pricingPlans } from "../../contents/github-student-developer-pack";
  import PricingBoxes from "../pricing/pricing-boxes.svelte";
</script>

<style lang="scss">
  .section {
    text-align: center;
  }

  .header {
    max-width: 780px;
    margin: 0 auto var(--small);
  }
</style>

<div class="section">
  <div class="header">
    <h2>GitHub Student Offer</h2>
    <p>
      With the GitHub Student Developer Pack, you get the same features as with
      our usual plans but at a much better price. We’re happy to be able to
      empower student developers participating in it.
    </p>
  </div>

  <PricingBoxes {pricingPlans} />
</div>
