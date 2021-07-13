<script lang="ts" context="module">
  export async function load({ session }) {
    const changelogEntries = session.changelogEntries;
    return { props: { changelogEntries } };
  }
</script>

<script lang="ts">
  import type { Changelog } from "../../types/changelog.type";
  import OpenGraph from "../../components/open-graph.svelte";
  import NewsletterSignup from "../../components/blog/newsletter-signup.svelte";
  import "../../assets/markdown-commons.scss";
  import Modal from "../../components/modal.svelte";

  export let changelogEntries: Changelog[];

  let isNewsLetterFormShown: boolean = false;

  const handleClose = () => {
    isNewsLetterFormShown = false;
  };
</script>

<style type="text/postcss">
  .content-docs :global(a) {
    @apply font-normal;
  }

  .content-docs :global(img) {
    @apply rounded-3xl;
  }

  .content-docs :global(h2) {
    @apply mt-12 mb-4 md:mt-16 !important;
  }

  .content-docs :global(h3) {
    @apply mt-12 mb-6 md:mt-16 md:mb-8 !important;
  }

  .content-docs :global(li) {
    @apply mt-0 mb-6 md:mb-4;
  }
</style>

<OpenGraph
  data={{
    description: "New features and improvements to Gitpod.",
    title: "Changelog",
    type: "website",
  }}
/>

<div class="flex">
  <div class="hidden w-4/12 md:block" />
  <header class="w-full mb-x-large md:w-8/12 md:mb-xx-large">
    <h1 class="mt-x-large mb-macro md:mt-xx-large">Changelog</h1>
    <p>Gitpod product improvements and updates</p>
    <p class="mt-micro">
      <a
        href="https://www.twitter.com/gitpod"
        rel="noopener"
        class="btn-primary">Follow us on Twitter</a
      >
      <button
        class="btn-secondary"
        on:click={() => (isNewsLetterFormShown = true)}
      >
        Signup for the Newsletter
      </button>
    </p>
  </header>
</div>

<div class="flex flex-col space-y-x-large md:space-y-xx-large">
  {#each changelogEntries as entry}
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-4/12">
        <h2 class="mb-xx-small text-h4">
          {new Date(Date.parse(entry.date)).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h2>
      </div>
      <div class="w-full md:w-8/12 content-docs">
        {@html entry.content}
      </div>
    </div>
    <div class="border-b border-gray-300" />
  {/each}
</div>
<div class="flex py-large md:py-x-large">
  <div class="hidden w-4/12 md:block" />
  <div class="w-full md:w-8/12">
    <p>
      For older updates, please visit <a href="/docs/changelog"
        >the previous changelog.</a
      >
    </p>
  </div>
</div>

<Modal isOpen={isNewsLetterFormShown} on:close={handleClose}>
  <NewsletterSignup />
</Modal>
