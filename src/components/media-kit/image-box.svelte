<script lang="ts">
  import type { ImageBox } from "../../types/image-box.type";
  export let image: ImageBox;
  const { src, alt, text, btnText, imgClass, containerClasses } = image;
</script>

<div
  class={`shadow-normal rounded-4xl py-small px-micro sm:p-small ${containerClasses} bg-white mb-large`}
>
  <img {src} {alt} class={`${imgClass} rounded m-auto w-full`} />
  <p class="mt-small mb-micro max-w-sm mx-auto">Download {text}</p>
  <a
    href={src}
    on:click={() =>
      window.analytics.track("media_downloaded", {
        name: src,
      })}
    class="btn-cta"
    download>{btnText}</a
  >
</div>
