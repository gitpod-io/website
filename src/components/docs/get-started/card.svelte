<script lang="ts">
  import type { ContentType } from "../../../types/get-started-card-content.type";

  export let content: ContentType;
  const { imgSrc, imgAlt, title, description, btnHref, btnText } = content;
</script>

<div
  class="text-center w-72 bg-off-white rounded-2xl py-xx-small px-x-small shadow-normal mr-micro mb-x-small flex flex-col"
>
  <img src={imgSrc} alt={imgAlt} />
  <div class="flex items-start justify-center h-14 mt-10 mb-4">
    <h5 class="leading-normal">{title}</h5>
  </div>
  <div class="flex items-start justify-center h-24 mb-5 overflow-hidden">
    <p>{description}</p>
  </div>
  <a href={btnHref} class="btn-conversion">{btnText}</a>
</div>
