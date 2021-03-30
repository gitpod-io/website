<script>
  import OpenGraph from "../../components/open-graph.svelte";
  import Screencast from "../../components/screencasts/screencast.svelte";
  import screencasts from "../../contents/screencasts";
</script>

<style type="scss">
  h1 {
    text-align: center;
    margin-bottom: 2em;
  }
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 400px));
    gap: 60px 20px;
    justify-content: center;
    padding: 0 20px;
  }
</style>

<OpenGraph
  data={{
    description: "Learn more about Gitpod with these short screencasts.",
    title: "Screencasts",
    type: "website",
  }}
/>
<h1 class="h3">Get started with a screencast</h1>
<section>
  {#each screencasts as screencast, index}
    <Screencast {screencast} screencastNumber={index + 1} />
  {/each}
</section>
<!-- Explore Gitpod card -->
<!-- Wait for https://github.com/gitpod-io/website-kumquat/pull/39 and reuse the component created there -->
