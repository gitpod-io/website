<script>
  import OpenGraph from "../../components/open-graph.svelte";
  import Screencast from "../../components/screencasts/screencast.svelte";
  import screencasts from "../../contents/screencasts";
  import Section from "../../components/section.svelte";
  import Explore from "../../components/explore.svelte";
</script>

<style type="scss">
  h1 {
    text-align: center;
  }
</style>

<OpenGraph
  data={{
    description: "Learn more about Gitpod with these short screencasts.",
    title: "Screencasts",
  }}
/>

<Section>
  <h1 class="h2">Get started with a screencast</h1>
</Section>

<section class="screencasts">
  {#each screencasts as screencast, index}
    <Screencast {screencast} screencastNumber={index + 1} />
  {/each}
</section>

<Explore />
