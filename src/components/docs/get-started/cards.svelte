<script lang="ts">
  import Card from "./card.svelte";
  import type { ContentType } from "../../../types/get-started-card-content.type";

  export let cardContents: ContentType[];
</script>

<div class="card-container flex flex-wrap align-middle">
  {#each cardContents as content}
    <Card {content} />
  {/each}
</div>
