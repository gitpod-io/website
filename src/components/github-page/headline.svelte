<script lang="ts">
  import Section from "../section.svelte";
  export let text: string;
</script>

<Section>
  <h2 class="text-center m-auto max-w-5xl">
    {text}
  </h2>
</Section>
