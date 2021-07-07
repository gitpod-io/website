<script lang="ts">
  import type { EducationFeature } from "../../types/education.type";

  export let feature: EducationFeature;
</script>

<style type="text/postcss">
  .card {
    @apply gap-5 my-micro items-start;
    min-height: 192px;

    @media (min-width: 768px) {
      @apply grid;
      grid-template-columns: 1fr m-micro minmax(280px, 80%);
    }
  }
</style>

<div class="card">
  <h3 class="h4">{feature.title}</h3>
  <p>{@html feature.description}</p>
</div>
