<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Feature from "../components/feature.svelte";
  import { feature } from "../contents/extension-activation";
  import Config from "../components/extension-activation/config.svelte";

  const currentBrowser = ["Opera", "Chrome", "Firefox", "IE"].find(
    (browser) =>
      typeof window !== "undefined" &&
      window.navigator.userAgent.includes(browser)
  );

  const features = [
    {
      icon: "/images/extension-activation/prebuild.svg",
      title: "Skip the Waiting",
      description:
        "Gitpod continuously builds your git branches like a CI server. This means no more waiting for dependencies to be downloaded and builds to finish.",
    },
    {
      icon: "/images/extension-activation/collaborate.svg",
      title: "Code Together",
      description:
        "Do code reviews within Gitpod, work together in one workspace in real-time and share reproducible workspaces with your team.",
    },
    {
      icon: "/images/extension-activation/fresh.svg",
      title: "Work Remotely",
      description:
        "You no longer need an over-powered laptop, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser.",
    },
  ];
</script>

<style type="text/postcss">
  article h2 {
    @media (min-width: 930px) {
      @apply pb-medium;
    }
  }
</style>

<header>
  <h1>Gitpod for {currentBrowser} is Now Active</h1>
  <p>The browser extension has been installed</p>
</header>

<Feature {feature} />

<Config />

<section class="cards triple sm:pb-huge">
  {#each features as feature}
    <div class="py-small px-xx-small bg-gray-100 rounded-4xl">
      <div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={feature.icon} role="presentation" height="100" width="100" />
        <h2 class="h3">{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
    </div>
  {/each}
</section>
