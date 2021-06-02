<script>
  import { page } from "$app/stores";

  $: isBetaPage = $page.path.startsWith("/docs/beta");
</script>

<!-- See https://github.com/gitpod-io/website/issues/478 -->
{#if isBetaPage}
  <div>
    <blockquote>
      {#if isBetaPage}
        <p><strong>Beta Docs</strong></p>
        Welcome to the next version of the docs 🎉. We are actively working on this
        page, please
        <a
          href="https://github.com/gitpod-io/website/issues/461"
          target="__self">provide feedback on GitHub</a
        > 🙏.
      {/if}
    </blockquote>
  </div>
{/if}
