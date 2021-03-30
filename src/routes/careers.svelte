<script lang="ts">
  import OpenGraph from "../components/open-graph.svelte";
  import { jobs } from "../contents/careers";

  const values = [
    {
      icon: "",
      iconAlt: "",
      title: "Open and transparent",
      description:
        "We are open minded, transparent and curious. We remain students of the game, not masters of the game.",
    },
    {
      icon: "",
      iconAlt: "",
      title: "Developer-first",
      description:
        "Developers architect our future. We are developers ourselves and built Gitpod to make lives of developers easier.",
    },
    {
      icon: "",
      iconAlt: "",
      title: "Fully remote",
      description:
        "You can work from anywhere and schedule your working hours the way it fits best for you. We make sure you are all set and will treat you well.",
    },
    {
      icon: "",
      iconAlt: "",
      title: "Frictionless",
      description:
        "Everybody should have a frictionless experience with Gitpod, our product and our comany: no hurdles, no BS, no unnecessary extra steps.",
    },
  ];
</script>

<OpenGraph
  data={{
    description: "Come join our fast-growing, venture-backed team.",
    title: "Careers at Gitpod",
    type: "website",
  }}
/>
<h1>Come join our fast-growing, venture-backed team.</h1>
<p>Gitpod is built on a culture of trust and empathy.</p>

<div>
  <!-- TODO: Insert team photo -->
  <p>
    Come join a quickly growing venture-backed team and work together with
    incredible humans from 🇦🇺 🇧🇷 🇨🇦 🇫🇷 🇩🇪 🇬🇷 🇵🇰 🇷🇺 🇺🇸 - in an environment with
    strong values around openness, honesty, and diversity. We are not as diverse
    as we would like to be. Help us to change that and shape Gitpod’s future
    from anywhere in the world! 🌈 🌍
  </p>
</div>

<div>
  <h2>We’re driven by a set of values</h2>
  {#each values as value}
    <div>
      <img src={value.icon} alt={value.iconAlt} />
      <p><strong>{value.title}</strong></p>
      <p>{value.description}</p>
    </div>
  {/each}
</div>

<div>
  <h2>Current openings</h2>
  <p>
    We aim to free developers from the friction of manual, stateful, local dev
    environments. We believe that in a few years working with ephemeral,
    automated dev environments is going to be as common as using version control
    or having CI/CD.
  </p>
</div>

<div>
  {#each jobs as job}
    <!-- Reuse the accordion from src/components/pricing/faq.svelte once https://github.com/gitpod-io/website-kumquat/pull/22 is merged -->
    {job.title}
  {/each}
</div>

<div>
  <h2>We’re always curious</h2>
  <p>
    If no current Job offer fits your qualifications, but you're totally in love
    with Gitpod and want to help us improving it, please send your application
    at <strong>career@gitpod.io</strong> anyway. We'd love to hear from you.
  </p>
</div>
