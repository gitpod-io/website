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

<div class="row mb-40 mt-16">
  <section>
    <div class="explore">
      <div class="explore__text">
        <h1 style="text-align: left;">Explore Gitpod</h1>
        <p class="h4">Automated and ephemeral dev environments in the cloud.</p>
        <p><a href="/features" class="btn-conversion">See Features</a></p>
      </div>
      <div class="explore__illustration">
        <img src="/images/illustration-crop.jpg" alt="Gitpod in a Nutshell" />
        <img
          src="/images/illustration-small.jpg"
          class="small"
          alt="Gitpod in a Nutshell"
        />
      </div>
    </div>
  </section>
</div>
