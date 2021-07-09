<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { hyphenate } from "../utils/helper";

  import CareerModal from "../components/careers/modal.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import { careers, perks } from "../contents/careers";
  import { onMount } from "svelte";
  import Section from "../components/section.svelte";

  let selectedCareer;

  $: if (selectedCareer) {
    window.location.hash = `#${hyphenate(selectedCareer.title)}`;
    selectedCareer.focusEl && selectedCareer.focusEl.focus();
  }

  onMount(() => {
    const hash = window.location.hash.substring(1);
    selectedCareer = careers.find((career) => hyphenate(career.title) === hash);
  });
</script>

<style lang="scss">
  .heroImage {
    margin: 0 auto 2rem auto;
    border-radius: 1rem;
  }
  :global(.careers-section) {
    margin-top: 0 !important;
  }
  p {
    @apply text-p-large;
    @media (min-width: 900px) {
      @apply text-2xl;
    }
  }
  .content-container {
    max-width: 96vw;
    margin: auto;

    @media (min-width: 900px) {
      width: 50rem;
    }
  }
  .content-container h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    line-height: 2.5rem;
  }
  .content-container p,
  .content-container h2 {
    @apply pl-x-small;
  }
  .perks {
    color: #12100c;
    font-weight: bold;
    font-size: 1.25rem;
  }
  .mt-5rem {
    margin-top: 5rem;
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
  }}
/>
<header class="tight">
  <h1>To remove all friction from the developer experience.</h1>
  <p>Bring back joy and speed to dev workflows.</p>
  <p>
    <a
      href="#jobs"
      on:click={() =>
        window.analytics.track("hiring_interaction", {
          subtype: "cta_clicked",
        })}
      class="btn-conversion">View {careers.length} openings</a
    >
  </p>
</header>

<!-- svelte-ignore a11y-missing-attribute -->
<img
  src="/images/illustration-zoom.jpg"
  role="presentation"
  width="1136"
  height="631"
  class="heroImage"
/>

<Section className="careers-section">
  <div class="content-container">
    <article class="hilited">
      <h2 class="h4">
        Make software engineering collaborative and joyful again.
      </h2>
      <p>
        Developers write software within languages/frameworks, build tools, glue
        them together to (tool) chains, develop against APIs and communicate and
        collaborate with our colleagues. All of that should be efficient, joyful
        and secure.
      </p>
      <p>
        Yet it is not. Devs constantly struggle with larger codebases, cluttered
        dependencies, security policies and unnecessary friction in their
        workflows.
      </p>
      <p>
        We want to make developers feel again that everything is at their
        fingertips.
      </p>
      <h2 class="h4 mt-5rem">
        Gitpod was founded because we were frustrated by manually setting up and
        maintaining dev environments.
      </h2>
      <p>
        We are building Gitpod in the open to easily spin-up fresh dev
        environments for any task. Those ephemeral environments are fast &
        powerful, fully automated & initialized. They empower developers to
        immediately start coding, debugging, and testing their code.
      </p>
      <p>Only then developers are always ready-to-code.</p>
      <h2 class="h4 mt-5rem">
        The company was established in 2020 and today over 400,000 devs
        gitpodified their workflows.
      </h2>
      <p>
        We are greateful to be backed by some of the best venture firms and
        advisors of the world. We recently announced a 13m funding round.
      </p>
      <p>
        Come join a quickly growing venture-backed team and work together with
        incredible humans from four continents 🌍
      </p>
      <p>
        We are open minded, transparent and curious. We remain students of the
        game, not masters of the game.
      </p>
      <p>
        We aim for a frictionless experience when interacting with our product,
        our company and our brand: no hurdles, no BS, no unnecessary extra
        steps.
      </p>
      <p>
        We are fully-distributed. You can work from anywhere and schedule your
        working hours the way it fits best for you. We make sure you are all set
        and will treat you well.
      </p>
      <p class="text-2xl font-bold">
        We are not as diverse as we would like to be.
      </p>
      <p>
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
    <p>
      If there isn't an open position for you but you'd still want to work at
      Gitpod let us know via <a
        href="mailto:career@gitpod.io"
        on:click={() =>
          window.analytics.track("hiring_interaction", {
            subtype: "email_clicked",
          })}>career@gitpod.io</a
      >
    </p>

    <ul class="jobs">
      {#each careers as career, i}
        <li id={hyphenate(career.title)}>
          <button
            bind:this={career.focusEl}
            on:click={() => {
              selectedCareer = career;
              window.analytics.track("hiring_interaction", {
                subtype: "position_opened",
                name: career.title,
                position: i,
              });
            }}
          >
            <div class="group flex justify-center items-center text-gray-900">
              {career.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="permalink-icon ml-micro text-white group-hover:text-gray-900 transition-all duration-100"
                viewBox="0 0 512 512"
                height="22"
                ><path
                  d="M208 352h-64a96 96 0 010-192h64m96 0h64a96 96 0 010 192h-64m-140.71-96h187.42"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="36"
                /></svg
              >
            </div>
          </button>
        </li>
      {/each}
    </ul>

    <CareerModal
      career={selectedCareer}
      on:close={() => (selectedCareer = null)}
    />
  </div>
</Section>
