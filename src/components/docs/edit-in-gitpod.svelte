<script lang="ts">
  import { page } from "$app/stores";
  import LogoTextless from "../svgs/logo-textless.svelte";

  const BASE_PATH =
    "https://gitpod.io#https://github.com/gitpod-io/website/tree/main/src/routes";
  const currentPage =
    $page.path === "/docs" ? `${$page.path}/index` : $page.path;
  const href = `${BASE_PATH}${currentPage}.md`;
</script>

<style type="text/postcss">
  a::after {
    display: none !important;
  }

  .btn-otherbrand {
    display: inline-flex !important;
    @apply rounded-2xl text-btn-small px-micro;
  }

  .logo {
    transform: -1px;
  }
</style>

<div class="flex justify-end mb-micro">
  <a
    {href}
    target="_blank"
    on:click={() =>
      window.analytics.track("gitpod_editor_clicked", { context: "docs" })}
    class="btn-otherbrand"
  >
    <span class="logo">
      <LogoTextless />
    </span> <span class="ml-macro">Edit in Gitpod</span>
  </a>
</div>
