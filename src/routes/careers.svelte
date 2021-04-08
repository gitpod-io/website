<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import CareerModal from "../components/careers/modal.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import { careers, perks } from "../contents/careers";

  let selectedCareer;
</script>

<style>
  .heroImage {
    margin: 0 auto 2rem auto;
    border-radius: 1rem;
  }
  section {
    width: 50rem;
    max-width: 96vw;
    margin: auto;
  }
  section h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    line-height: 2.5rem;
  }
  section p,
  section h2 {
    padding-left: 2rem;
  }
  .perks {
    color: #12100c;
    font-weight: bold;
    font-size: 1.25rem;
  }
  .mt-5rem {
    margin-top: 5rem;
  }
  .mb-10rem {
    margin-bottom: 10rem;
  }
  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .font-bold {
    font-weight: bold;
  }
</style>

<OpenGraph
  data={{
    description: "Come join our fast-growing, venture-backed team.",
    title: "Careers at Gitpod",
    type: "website",
  }}
/>
<header class="tight">
  <h1>To remove all friction from the developer experience.</h1>
  <p>Bring back joy and speed to dev workflows.</p>
  <p>
    <a href="#jobs" class="btn-conversion">View {careers.length} openings</a>
  </p>
</header>

<img
  src="/images/illustration-zoom.jpg"
  alt=""
  role="presentation"
  width="1136"
  height="631"
  class="heroImage"
/>

<section>
  <article class="hilited">
    <h2 class="h4">
      Make software engineering collaborative and joyful again.
    </h2>
    <p class="text-2xl">
      Developers write software within languages/frameworks, build tools, glue
      them together to (tool) chains, develop against APIs and communicate and
      collaborate with our colleagues. All of that should be efficient, joyful
      and secure.
    </p>
    <p class="text-2xl">
      Yet it is not. Devs constantly struggle with larger codebases, cluttered
      dependencies, security policies and unnecessary friction in their
      workflows.
    </p>
    <p class="text-2xl">
      We want to make developers feel again that everything is at their
      fingertips.
    </p>
    <h2 class="h4 mt-5rem">
      Gitpod was founded because we were frustrated by manually setting up and
      maintaining dev environments.
    </h2>
    <p class="text-2xl">
      We are building Gitpod in the open to easily spin-up fresh dev
      environments for any task. Those ephemeral environments are fast &
      powerful, fully automated & initialized. They empower developers to
      immediately start coding, debugging, and testing their code.
    </p>
    <p class="text-2xl">Only then developers are always ready-to-code.</p>
    <h2 class="h4 mt-5rem">
      The company was established in 2020 and today over 350,000 devs
      gitpodified their workflows.
    </h2>
    <p class="text-2xl">
      We are greateful to be backed by some of the best venture firms and
      advisors of the world. We recently announced a 13m funding round.
    </p>
    <p class="text-2xl">
      Come join a quickly growing venture-backed team and work together with
      incredible humans from four continents 🌍
    </p>
    <p class="text-2xl">
      We are open minded, transparent and curious. We remain students of the
      game, not masters of the game.
    </p>
    <p class="text-2xl">
      We aim for a frictionless experience when interacting with our product,
      our company and our brand: no hurdles, no BS, no unnecessary extra steps.
    </p>
    <p class="text-2xl">
      We are fully-distributed. You can work from anywhere and schedule your
      working hours the way it fits best for you. We make sure you are all set
      and will treat you well.We are not as diverse as we would like to be.
    </p>
    <p class="text-2xl font-bold">
      We are not as diverse as we would like to be.
    </p>
    <p class="text-2xl">
      Help us to change that and shape Gitpod’s future from anywhere in the
      world! 🌈 🌍
    </p>
  </article>

  <h2 class="h4 mt-5rem">What we offer</h2>
  <ul class="perks">
    {#each perks as { title }}
      <li>{title}</li>
    {/each}
  </ul>

  <h2 id="jobs" class="h4 mt-5rem">Open positions</h2>
  <p class="text-2xl">
    If there isn't an open position for you but you'd still want to work at
    Gitpod let us know via <a href="mailto:career@gitpod.io">career@gitpod.io</a
    >
  </p>

  <div class="mb-10rem">
    <ul class="jobs">
      {#each careers as career}
        <li id={career.title.toLowerCase().replace(/\s/g, "-")}>
          <button
            on:click={() => {
              selectedCareer = career;
            }}>{career.title}</button
          >
        </li>
      {/each}
    </ul>
  </div>

  <CareerModal
    career={selectedCareer}
    on:close={() => (selectedCareer = null)}
  />
</section>
