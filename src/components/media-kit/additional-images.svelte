<script lang="ts">
  import Section from "../section.svelte";
  import ImageBox from "./image-box.svelte";
  import type { ImageBox as Image } from "../../types/image-box.type";

  const images: Image[] = [
    {
      src: "/images/gitpod-editor.jpg",
      alt: "Gitpod",
      text: "light theme screenshot",
      btnText: "JPG",
      imgClass: "shadow-brand",
      containerClasses: "px-huge",
    },
    {
      src: "/images/extension-activation/extension-screenshot.png",
      alt: "Gitpod Extension",
      text: "screenshot of the Gitpod browser extension within GitHub",
      btnText: "PNG",
      imgClass: "h-auto md:h-72",
      containerClasses: "max-w-xl",
    },
    {
      src: "/images/blog/gitlab-integration/gitpod-button-on-gitlab.png",
      alt: "Gitpod button on GitLab",
      text: "screenshot of the native Gitpod integration within GitLab",
      btnText: "PNG",
      imgClass: "h-auto md:h-72",
      containerClasses: "max-w-xl",
    },
  ];
</script>

<Section className="text-center">
  <h2>Additional images</h2>
  <div class="flex justify-around xl:justify-between flex-wrap mt-medium">
    {#each images as image}
      <ImageBox {image} />
    {/each}
  </div>
</Section>
