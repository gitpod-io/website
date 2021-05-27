<script lang="ts">
  import LogoTextless from "../svgs/logo-textless.svelte";
  export let pagePath;

  const BASE_PATH =
    "https://gitpod.io#https://github.com/gitpod-io/website/tree/main/src/routes";
  const currentPage = pagePath === "/docs" ? `${pagePath}/index` : pagePath;
  const href = `${BASE_PATH}${currentPage}.md`;
</script>

<style>
  .btn-otherbrand {
    padding: 0.75rem;
    @apply rounded-2xl text-p-medium px-micro;
  }

  .logo {
    transform: -1px;
  }
</style>

<div class="flex justify-end mb-micro">
  <a {href} class="btn-otherbrand" target="_blank">
    <span class="logo">
      <LogoTextless />
    </span> <span class="ml-macro">Edit in Gitpod</span>
  </a>
</div>
