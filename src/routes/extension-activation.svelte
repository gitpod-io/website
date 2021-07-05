<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
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

<header>
  <h1>Gitpod for {currentBrowser} is Now Active</h1>
  <p>The browser extension has been installed</p>
</header>

<section class="halfimages">
  <article>
    <div>
      <img
        src="/images/extension-activation/extension-screenshot.png"
        alt="A GitHub project page with the Gitpod button highlighted"
        height="688"
        width="688"
      />
    </div>
    <div>
      <h2 class="h3">Spin up dev environments with a single click.</h2>
      <p class="text-large">
        The extension adds a Gitpod button on every project and branch across
        GitLab, GitHub, and Bitbucket so you can easily open a new workspace for
        any project.
      </p>
    </div>
  </article>
</section>

<Config />

<section class="cards triple">
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

<section class="brief">
  <h2>Learn More About Gitpod</h2>
  <a href="/docs" class="btn-conversion">See Docs</a>
</section>
