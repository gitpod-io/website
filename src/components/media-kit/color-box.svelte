<script lang="ts">
  export let colorName: string;
  export let colorValue: string;
  export let isDark: boolean;
</script>

<div
  class="w-64 sm:w-80 shadow-normal py-medium pl-medium rounded-4xl text-large m-micro"
  class:text-white={isDark}
  style={`background: ${colorValue}`}
>
  {colorName}
  <br />
  {colorValue}
</div>
