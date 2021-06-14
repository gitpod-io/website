<script lang="ts">
  import { page } from "$app/stores";
  import { getMenuContext } from "../../routes/docs/menu";
  const menuCtx = getMenuContext($page.path);
</script>

<style lang="scss">
  a {
    @apply font-normal;
  }
</style>

<div
  class="flex justify-between pt-xx-small border-t border-solid border-gray-400"
>
  {#if menuCtx.prev}
    <a href={menuCtx.prev.path} title={`Prev: ${menuCtx.prev.title}`}> Prev </a>
  {:else}
    <div />
  {/if}
  {#if menuCtx.next}
    <a href={menuCtx.next.path} title={`Next: ${menuCtx.next.title}`}> Next </a>
  {:else}
    <div />
  {/if}
</div>
