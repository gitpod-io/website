<script lang="ts">
  import type { ContentType } from "../../../types/get-started-card-content.type";

  export let content: ContentType;
  const { imgSrc, imgAlt, title, description, btnHref, btnText } = content;
</script>

<div
  class="text-center w-72 bg-off-white rounded-2xl py-xx-small px-x-small shadow-normal mr-micro mb-x-small flex flex-col"
>
  <div class="h-44 w-full">
    <img class="h-full" src={imgSrc} alt={imgAlt} />
  </div>

  <h5 class="h-12 my-6">{title}</h5>
  <p class="h-28">{description}</p>
  <a href={btnHref} class="btn-conversion">{btnText}</a>
</div>
