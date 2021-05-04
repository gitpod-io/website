<script lang="ts">
  import PricingBoxes from "../pricing/pricing-boxes.svelte";

  export let title;
  export let description;
  export let pricingPlans;
</script>

<style lang="scss">
  .section {
    text-align: center;
  }

  .header {
    max-width: 780px;
    margin: 0 auto var(--small);
  }

  a {
    text-decoration: underline;
  }
</style>

<div class="section">
  <div class="header">
    <h2>{title}</h2>
    <div>
      {@html description}
    </div>
  </div>

  <PricingBoxes {pricingPlans} />
</div>
