<script lang="ts">
  import type { Logo } from "../../types/logo.type";

  export let logo: Logo;
  const { src, alt, text, srcPNG, isDark } = logo;
  const svgSrc = `/svg/media-kit/${src}`;
</script>

<style lang="scss">
  .logo-box {
    width: 480px;

    @media (max-width: 50px) {
      width: 100%;
    }
  }

  .svg-button {
    @apply bg-orange-900;
  }

  .svg-button:hover,
  .svg-button:focus {
    background: var(--brand-hover);
  }
</style>

<div
  class="logo-box px-small py-medium sm:p-large rounded-4xl bg-white shadow-normal mx-micro mb-small"
  class:bg-gray-900={isDark}
  class:text-white={isDark}
>
  <img src={svgSrc} {alt} class="mx-auto" />
  <p class="mt-medium mb-micro">Download {text}</p>
  <div class="buttons-wrapper">
    <a
      href={svgSrc}
      on:click={() =>
        window.analytics.track("media_downloaded", {
          name: svgSrc,
        })}
      download
      class="btn-cta svg-button">SVG</a
    >
    <a
      href={`/images/media-kit/${srcPNG}`}
      on:click={() =>
        window.analytics.track("media_downloaded", {
          name: srcPNG,
        })}
      download
      class="btn-cta">PNG</a
    >
  </div>
</div>
