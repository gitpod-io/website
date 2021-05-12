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
</style>

<div
  class="logo-box py-large px-huge rounded-4xl bg-white shadow-normal mx-micro mb-small"
  class:bg-gray-900={isDark}
  class:text-white={isDark}
>
  <img src={svgSrc} {alt} class="mx-auto" />
  <p class="mt-medium mb-micro">Download {text}</p>
  <a href={svgSrc} download class="btn-primary w-20">SVG</a>
  <a href={`/images/media-kit/${srcPNG}`} download class="btn-otherbrand w-20"
    >PNG</a
  >
</div>
