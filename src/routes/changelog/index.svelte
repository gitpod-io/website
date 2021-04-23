<script lang="ts" context="module">
  export async function load({ session }) {
    const changelogEntries = session.changelogEntries;
    return { props: { changelogEntries } };
  }
</script>

<script lang="ts">
  import type { Changelog } from "../../types/changelog.type";
  import OpenGraph from "../../components/open-graph.svelte";
  import "../../assets/docs.scss";

  export let changelogEntries: Changelog[];
</script>

<OpenGraph
  data={{
    description: "New features and improvements to Gitpod.",
    title: "Changelog",
    type: "website",
  }}
/>

<div class="flex">
  <div class="w-4/12" />
  <header class="w-8/12 mb-xx-large">
    <h1 class="mt-xx-large mb-x-small">Changelog</h1>
    <p>Gitpod product improvements and updates</p>
    <p>
      <a
        href="https://www.twitter.com/gitpod"
        rel="noopener"
        class="btn-primary">Follow us on Twitter</a
      >
    </p>
  </header>
</div>

{#each changelogEntries as entry}
  <div class="flex pb-xx-large border-b-2 border-gray-300">
    <div class="w-4/12">
      <h2>
        {new Date(Date.parse(entry.date)).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </h2>
    </div>
    <div class="w-8/12 content-docs">
      {@html entry.content}
    </div>
    <hr />
  </div>
{/each}
