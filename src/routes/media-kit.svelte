<script>
  import Founders from "../components/media-kit/founders.svelte";
  import AdditionalImages from "../components/media-kit/additional-images.svelte";
  import ColorsSection from "../components/media-kit/colors-section.svelte";
  import LogoSection from "../components/media-kit/logo-section.svelte";
  import OpenGraph from "../components/open-graph.svelte";
</script>

<OpenGraph
  data={{
    description: "We’ve put together some assets to help you using our brand.",
    title: "Media kit",
  }}
/>

<header>
  <h1>Media kit</h1>
  <p>We’ve put together some assets to help you using our brand.</p>
  <img
    src="/images/media-kit/media-kit.png"
    alt="Gitpod Illustration"
    class="mt-x-large rounded-4xl w-full"
  />
</header>

<LogoSection />
<ColorsSection />
<AdditionalImages />
<Founders />
