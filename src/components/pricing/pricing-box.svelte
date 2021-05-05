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
    learnMoreHref,
    footnote,
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

  .learn-more {
    @apply underline;
  }

  :global(.crossed-out) {
    text-decoration: line-through;
  }

  :global(.price-small),
  :global(.crossed-out) {
    color: var(--light-grey);
    font-size: var(--h4);
    margin-right: var(--macro);
  }
</style>

<div class={`box ${spiced ? "spiced" : ""}`}>
  <div class="min-h-full flex flex-col">
    <h2 class="h4">{title}</h2>
    <div class="h1 flex items-center justify-center">{@html price}</div>
    <div class="box__duration">
      {#if duration}
        {duration}
      {:else}
        <span>&nbsp;</span>
      {/if}
    </div>
    {#if features}
      <ul class="box__list">
        {#each features as feature}
          <li class="box__list-item">{feature}</li>
        {/each}
      </ul>
    {/if}
    {#if learnMoreHref}
      <div class="flex flex-1 justify-center items-center">
        <a href={learnMoreHref} class="learn-more">Learn More</a>
      </div>
    {/if}
  </div>
  {#if btnHref && btnText}
    <a href={btnHref} class="btn-cta">{btnText}</a>
  {/if}
  {#if footnote}
    <div class="text-p-xsmall px-small text-gray-700">{footnote}</div>
  {/if}
</div>
