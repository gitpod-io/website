<script>
  import { features, testimonials } from "../contents/index";

  import Features from "../components/features.svelte";
  import ChooseProject from "../components/index/choose-project.svelte";
  import Hero from "../components/index/hero.svelte";
  import SectionScreenshot from "../components/index/section-screenshot.svelte";
  import Testimonials from "../components/index/testimonials.svelte";
  import GetStarted from "../components/index/get-started/index.svelte";
  import OpenGraph from "../components/open-graph.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod streamlines developer workflows by providing prebuilt, collaborative development environments in your browser - powered by VS Code.",
    title: "Gitpod - Dev environments built for the cloud",
    type: "website",
  }}
/>
<Hero />
<ChooseProject />
<Features {features} />
<SectionScreenshot />
<Testimonials {testimonials} />
<GetStarted />
