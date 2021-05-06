<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import LogoAnimated from "../components/logo-animated.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import { careers } from "../contents/careers";

  const investors = [
    {
      logo: "",
      imgHeight: "",
      imgWidth: "",
      name: "Vertex US",
      description:
        "Vertex Ventures US partners with enterprising founders who seek to disrupt large markets.",
    },
    {
      logo: "",
      imgHeight: "",
      imgWidth: "",
      name: "Crane Ventures",
      description:
        "Speedinvest is one of Europe’s most active early-stage investors.",
    },
    {
      logo: "",
      imgHeight: "",
      imgWidth: "",
      name: "Ameet Patel",
      description:
        "Start your workflow from your Git hosting platform and let Gitpod beam you in a ready-to-code dev environment.",
    },
    {
      logo: "",
      imgHeight: "",
      imgWidth: "",
      name: "SpeedInvest",
      description:
        "Install any VS Code extension with one click via the integrated vendor-neutral marketplace Open VSX.",
    },
    {
      logo: "",
      imgHeight: "",
      imgWidth: "",
      name: "Hanno Renner",
      description:
        "Start your workflow from your Git hosting platform and let Gitpod beam you in a ready-to-code dev environment. ",
    },
  ];
</script>

<style>
  .cardlike a {
    padding: 1.5rem;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>

<OpenGraph
  data={{
    description: "On a mission to make developers' lives easier!",
    title: "About Gitpod",
  }}
/>
<header class="tight">
  <h1 class="visually-hidden">Gitpod</h1>
  <LogoAnimated center={true} iterations={1} />
  <p>
    Open source developer platform. Originally from Kiel now fully-remote from
    all around the globe.
  </p>
</header>

<div class="hilited redirector">
  <h2 class="h4">
    Remove all friction from the developer experience to be always ready-to-code
    and make software engineering more collaborative, joyful, and secure.
  </h2>
</div>

<ul class="imageCarousel">
  <li>
    <img
      src="/images/about/team-2.jpg"
      alt="A female Gitpod team member"
      height="310"
      width="310"
    />
  </li>
  <li>
    <img
      src="/images/about/team-3.jpg"
      alt="A laptop and office chair in a tent"
      height="310"
      width="310"
      role="presentation"
    />
  </li>
  <li>
    <img
      src="/images/about/about-6.png"
      alt="Gitpod team members on the beach"
      height="310"
      width="310"
      role="presentation"
    />
  </li>
  <li>
    <img
      src="/images/about/about-5.png"
      alt="4 kumquats on a table"
      height="310"
      width="310"
    />
  </li>
</ul>

<div class="redirector">
  <h2>Obsessed with developer experience</h2>
  <p>
    We have built developer tools, created programming languages and
    successfully grew open source communities over the last 10 years. We are
    developers ourselves - with Gitpod we want to capitalize on our learnings
    and build a company that simplifies the lives of all developers. Experienced
    international investors support us on our journey. We are a fully
    distributed team with humans from all over the world.
  </p>
  <p>
    <a
      class="btn-otherbrand"
      href="https://www.notion.so/gitpod/Gitpod-s-Direction-be35d064c0704fbda61c542b84e07ef6"
      target="_blank"
      ><span class="icon">🗺️</span> <span class="arrow">↗︎</span>Gitpod's
      Direction</a
    >
    <a
      class="btn-otherbrand"
      href="https://www.notion.so/gitpod/Product-Roadmap-b9b5eac0a15147ac8d2dd25cf0519203"
      target="_blank"
      ><span class="icon">🛣</span> <span class="arrow">↗︎</span> Gitpod's Roadmap</a
    >
  </p>
</div>

<div class="redirector">
  <h2>Built on shared principles</h2>
  <p>
    Values are important to us. We are developer-led and aim for a frictionless
    experience when interacting with our product, our company and our brand: no
    hurdles, no BS, no unnecessary extra steps. We believe in the benefits of an
    open culture. We are open minded, inclusive, transparent and curious. We
    always remain students of the game, not masters of the game. We have
    opinions, but are not opinionated. We integrate, don't dictate.
  </p>
  <p>
    <a
      class="btn-otherbrand"
      href="https://www.notion.so/gitpod/Brand-Values-2ed4c2f93c84499b98e3b5389980992e"
      target="_blank"
      ><span class="icon">✨</span> <span class="arrow">↗︎</span> Brand &amp; Values</a
    >
  </p>
</div>

<div class="redirector">
  <h2>Backed by great investors</h2>
  <p>
    Gitpod Inc. was founded in 2020 and in early 2021 we raised $13m from
    General Catalyst and our early backers Speedinvest, Crane and Vertex. We are
    proud to work with experienced, international investors and great
    individuals who have been early backers of <span class="othercompanies"
      ><span>SignalFX</span>, <span>Cloudera</span>, <span>Couchbase</span>,
      <span>Snyk</span>, <span>Render</span>, <span>BuildKite</span>,
      <span>LaunchDarkly</span>, <span>H20</span>, <span>Hasura</span>,
      <span>Instana</span></span
    >, and several other exciting companies in the world of developer tools and
    open source software.
    <!--
    {#each investors as investor}
      <div>
        <img
          src={investor.logo}
          alt="{investor.name} logo"
          height={investor.imgHeight}
          width={investor.imgWidth}
        />
        <p><strong>{investor.name}</strong></p>
        <p>{investor.description}</p>
      </div>
    {/each} -->
  </p>
</div>

<div class="redirector">
  <h2>Find out more. We are open</h2>
  <p>
    We have always built in the open. If you want to learn skim through some of
    our public Notion pages.
  </p>
  <p>
    <a
      class="btn-otherbrand"
      href="https://www.notion.so/gitpod/How-we-work-0f9159f282d24f9d9776372e0c7dbab4"
      target="_blank"
      ><span class="icon">💻</span> <span class="arrow">↗︎</span>How we work</a
    >
    <a
      class="btn-otherbrand"
      href="https://www.notion.so/gitpod/Development-Process-080f1e439e0440f9b063a000ee213692"
      target="_blank"
      ><span class="icon">🔨</span> <span class="arrow">↗︎</span> How we develop</a
    >
  </p>
</div>

<div class="row">
  <section>
    <div class="explore">
      <div class="explore__text">
        <h1>
          We have {careers.length} open position{careers.length == 1 ? "" : "s"}
        </h1>
        <p class="h4">Come join us.</p>
        <p><a href="/careers" class="btn-conversion">See openings</a></p>
      </div>
      <div class="explore__illustration">
        <img src="/images/illustration-grid.jpg" alt="Gitpod in a Nutshell" />
        <img
          src="/images/illustration-small.jpg"
          class="small"
          alt="Gitpod in a Nutshell"
        />
      </div>
    </div>
  </section>
</div>

<div class="redirector header">
  <h2>Gitpod in the news</h2>
  <ul class="cardlike">
    <li>
      <a
        href="https://www.theregister.com/2020/08/25/gitpod_open_sources_cloud_development_platform/"
        target="_blank"
      >
        <img
          src="/images/about/TheRegister.svg"
          alt="The Register"
          height="40"
          width=""
        />
      </a>
    </li>
    <li>
      <a
        href="https://www.infoq.com/articles/cloud-based-development/"
        target="_blank"
      >
        <img src="/images/about/InfoQ.svg" alt="Info Q" height="40" width="" />
      </a>
    </li>
    <li>
      <a
        href="https://devops.com/gitpod-open-sources-automated-local-development-environment/"
        target="_blank"
      >
        <img
          src="/images/about/DevOpsDotCom.svg"
          alt="DevOps.com"
          height="40"
          width=""
        />
      </a>
    </li>
    <li>
      <a
        href="https://thenewstack.io/gitpod-open-sources-a-holistic-ide/"
        target="_blank"
      >
        <img
          src="/images/about/TheNewStack.svg"
          alt="The New Stack"
          height="40"
          width=""
        />
      </a>
    </li>
  </ul>
</div>
