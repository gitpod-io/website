<script lang="ts" context="module">
  import screencasts from "../../contents/screencasts";

  export const load = async function ({ page }) {
    const { title } = page.params;
    const screencast = screencasts.find((s) => hyphenate(s.title) === title);
    return { props: { screencast } };
  };
</script>

<script lang="ts">
  import type { Screencast as ScreencastType } from "../../types/screencasts.type";
  import ScreencastPreview from "../../components/screencasts/preview.svelte";
  import YouTubeEmbed from "../../components/youtube-embed.svelte";
  import { hyphenate } from "../../utils/helper";

  export let screencast: ScreencastType;
</script>

<style>
  .related {
    margin: 2rem auto;
  }
</style>

<header>
  <h1>{screencast.title}</h1>
  <p>{screencast.description}</p>
</header>

<YouTubeEmbed embedId={screencast.youtubeId} title={screencast.title} />
<p class="related">
  Related documentation:
  {#each screencast.relatedDocs as relatedDoc, i}
    <a href="/docs{relatedDoc.path}">{relatedDoc.title}</a>
    {screencast.relatedDocs.length > 0 &&
    screencast.relatedDocs[i + 1] &&
    !screencast.relatedDocs[i + 2]
      ? " and "
      : screencast.relatedDocs.length > 0 && screencast.relatedDocs[i + 1]
      ? ", "
      : ""}
  {/each}
</p>

{#if screencast.nextScreencast}
  <div class="screencasts">
    <h2>Next up...</h2>
    <ScreencastPreview
      screencast={screencasts[screencast.nextScreencast]}
      screencastNumber={screencast.nextScreencast}
    />
  </div>
{/if}
