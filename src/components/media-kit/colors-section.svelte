<script>
  import Section from "../section.svelte";
  import ColorBox from "./color-box.svelte";
</script>

<Section>
  <h2 class="text-center">Primary colors</h2>
  <div class="flex justify-around flex-wrap my-small">
    <ColorBox colorName="Sand light" colorValue="#f5f4f4" />
    <ColorBox colorName="Kumquat" colorValue="#FFB45B" />
    <ColorBox colorName="Black" colorValue="#12100C" isDark={true} />
  </div>
  <img
    src="/svg/media-kit/gradient.svg"
    alt="Gitpod Brand Gradient"
    class="w-72 sm:w-96 mt-large md:mt-x-large m-auto"
  />
</Section>
