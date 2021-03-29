<script>
  import Menu from "../../components/docs/menu.svelte";
  import Search from "../../components/docs/search.svelte";
</script>

<div class="flex mx-auto max-w-row px-8 w-full">
  <div class="w-2/5">
    <Menu />
  </div>
  <div class="w-3/5">
    <Search />
    <slot />
  </div>
</div>
