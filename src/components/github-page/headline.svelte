<script>
  import Section from "../section.svelte";
  export let text;
</script>

<style>
  h2 {
    text-align: center;
    max-width: 1000px;
    margin: auto;
  }
</style>

<Section>
  <h2>
    {text}
  </h2>
</Section>
