<script lang="ts">
  import OpenGraph from "../components/open-graph.svelte";

  const investors = [
    {
      logo: "",
      name: "Vertex US",
      description:
        "Vertex Ventures US partners with enterprising founders who seek to disrupt large markets.",
    },
    {
      logo: "",
      name: "Crane Ventures",
      description:
        "Speedinvest is one of Europe’s most active early-stage investors.",
    },
    {
      logo: "",
      name: "Ameet Patel",
      description:
        "Start your workflow from your Git hosting platform and let Gitpod beam you in a ready-to-code dev environment.",
    },
    {
      logo: "",
      name: "SpeedInvest",
      description:
        "Install any VS Code extension with one click via the integrated vendor-neutral marketplace Open VSX.",
    },
    {
      logo: "",
      name: "Hanno Renner",
      description:
        "Start your workflow from your Git hosting platform and let Gitpod beam you in a ready-to-code dev environment. ",
    },
  ];
</script>

<OpenGraph
  data={{
    description: "On a mission to make developers' lives easier!",
    title: "About Gitpod",
    type: "website",
  }}
/>
<h1>On a mission to make developers' lives easier!</h1>
<p>
  We’re a fully distributed and engineering-led team of developer tool
  specialists and long time open-source contributors. We believe that in a few
  years working with automated, ready-to-code dev environments is going to be as
  common as using version control or having CI/CD.
</p>
<!-- TODO: Insert team photo -->

<div>
  <h2>Democratizing Software Development</h2>
  <p>
    We have built developer tools, created programming languages and
    successfully grew open source communities over the last 10 years. We are
    developers ourselves - with Gitpod we want to capitalize on our learnings
    and build a company that simplifies the lives of all developers. Experienced
    international investors support us on our journey. We are a fully
    distributed team with humans from all over the world.
  </p>
</div>

<div>
  <!-- TODO: Insert images as per design -->
</div>

<div>
  <h2>Diversity at Gitpod</h2>
  <p>
    Values are important to us. We are developer-led and aim for a frictionless
    experience when interacting with our product, our company and our brand: no
    hurdles, no BS, no unnecessary extra steps. We believe in the benefits of an
    open culture. We are open minded, inclusive, transparent and curious. We
    always remain students of the game, not masters of the game. We have
    opinions, but are not opinionated. We integrate, don't dictate. We are also
    not as diverse as we would like to be.
  </p>
</div>

<div>
  <!-- TODO: Insert cube icon -->
  <h2>We have 8 open positions</h2>
  <!-- TODO: Figure out a way to dynamically set the number of open positions -->
  <p>
    We’re on the hunt for new talent, as what we’re building is going to take a
    lot of it
  </p>
  <a href="/careers">See openings</a>
</div>

<div>
  <h2>We’re backed by some of the best</h2>
  <p>
    These fine investors share the same values we do, and believe in what we’re
    doing enough to come along for the ride.
  </p>
  {#each investors as investor}
    <div>
      <img src={investor.logo} alt="{investor.name} logo" />
      <p><strong>{investor.name}</strong></p>
      <p>{investor.description}</p>
    </div>
  {/each}
</div>
