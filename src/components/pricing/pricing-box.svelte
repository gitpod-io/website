<script lang="ts">
  import type { Pricing } from "../../types/pricing.type";

  export let pricing: Pricing;
  const {
    title,
    duration,
    features,
    price,
    btnHref,
    btnText,
    spiced,
  } = pricing;
</script>

<style lang="scss">
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--off-white);
    padding: var(--x-small) 0 var(--medium);
    border-radius: 1rem;
    box-shadow: var(--shadow);
    text-align: center;
    transition: all 0.2s;
    margin: 0 var(--micro) var(--x-small);
    width: 295px;

    @media (max-width: 1140px) {
      padding: var(--x-small) 0 var(--medium);
    }

    .h1 {
      margin-bottom: 0.25rem;
      font-weight: bold;
      color: var(--black);
    }

    .price {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__duration,
    &__list {
      padding-left: var(--medium);
      padding-right: var(--medium);

      @media (max-width: 1140px) {
        padding-left: var(--large);
        padding-right: var(--large);
      }
    }

    &__duration {
      margin-bottom: var(--xx-small);
      color: var(--light-grey);
      font-weight: 600;
    }

    &__list {
      margin: var(--small) 0;
      text-align: left;
    }

    &__list-item {
      position: relative;
      color: var(--black);

      &::before {
        content: url("/tick.svg");
        position: absolute;
        left: -2.188rem;
        display: inline-block;
        height: 1.375rem;
        width: 1.375rem;
      }

      &:not(:last-child) {
        margin-bottom: var(--micro);
      }
    }
  }

  .box:hover,
  .spiced {
    box-shadow: var(--shadow-brand);
  }

  .btn-cta {
    align-self: center;
  }

  :global(.crossed-out) {
    text-decoration: line-through;
    color: var(--light-grey);
    font-size: var(--h4);
    margin-right: var(--macro);
  }
</style>

<div class={`box ${spiced ? "spiced" : ""}`}>
  <div>
    <h2 class="h4">{title}</h2>
    <div class="h1 price">{@html price}</div>
    <div class="box__duration">
      {#if duration}
        {duration}
      {:else}
        <span>&nbsp;</span>
      {/if}
    </div>
    <ul class="box__list">
      {#each features as feature}
        <li class="box__list-item">{feature}</li>
      {/each}
    </ul>
  </div>
  <a href={btnHref} class="btn-cta">{btnText}</a>
</div>
