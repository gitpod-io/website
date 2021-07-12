<script lang="ts">
  import type { ContentType } from "../../../types/get-started-card-content.type";

  export let content: ContentType;
  const { imgSrc, imgAlt, title, description, btnHref, btnText } = content;
</script>

<div
  class="text-center w-full lg:w-72 bg-off-white rounded-2xl pb-xx-small pt-x-small px-5 shadow-normal mr-micro mb-x-small flex flex-col items-center"
>
  <img src={imgSrc} alt={imgAlt} width="173" height="112" />
  <div class="flex items-start justify-center lg:h-14 mt-5 lg:mt-10 mb-4">
    <h5 class="leading-normal">{title}</h5>
  </div>
  <div class="flex items-start justify-center lg:h-24 mb-5 overflow-hidden">
    <p>{description}</p>
  </div>
  <a href={btnHref} class="btn-conversion">{btnText}</a>
</div>
