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
    trackingName,
  } = pricing;

  export let trackingContext: String;
</script>

<style type="text/postcss">
  .box {
    width: 295px;
  }

  .h1 {
    margin-bottom: 0.25rem;
  }

  li::before {
    content: url("/tick.svg");
    @apply absolute inline-block;
    left: -2.188rem;
    height: 1.375rem;
    width: 1.375rem;
  }

  .btn-cta {
    @apply self-center;
  }

  .learn-more {
    @apply underline;
  }

  :global(.crossed-out) {
    @apply line-through;
  }

  :global(.price-small),
  :global(.crossed-out) {
    @apply text-gray-700 text-h4 mr-macro;
  }
</style>

<div
  class={`box flex flex-col justify-between bg-gray-100 pt-x-small pb-medium px-0 mt-0 mx-micro mb-x-small rounded-2xl shadow-normal text-center transition-all duration-200 hover:shadow-brand ${
    spiced ? "spiced shadow-brand" : ""
  }`}
>
  <div class="min-h-full flex flex-col">
    <h2 class="h4">{title}</h2>
    <div class="h1 font-bold text-black flex items-center justify-center">
      {@html price}
    </div>
    <div
      class="px-large lgx:px-medium mb-xx-small text-light-grey font-semibold"
    >
      {#if duration}
        {duration}
      {:else}
        <span>&nbsp;</span>
      {/if}
    </div>
    {#if features}
      <ul class="px-large lgx:px-medium my-small mx-0 space-y-micro text-left">
        {#each features as feature}
          <li class="relative text-black">
            {feature}
          </li>
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
    <a
      href={btnHref}
      on:click={() =>
        window.analytics.track("pricing_plan_clicked", {
          context: trackingContext,
          plan: trackingName,
          name: "cta",
        })}
      class="btn-cta">{btnText}</a
    >
  {/if}
  {#if footnote}
    <div class="text-p-xsmall px-small text-gray-700">{footnote}</div>
  {/if}
</div>
