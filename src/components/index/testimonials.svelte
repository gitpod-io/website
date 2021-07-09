<script lang="ts">
  import Carousel from "../carousel.svelte";
  import Section from "../section.svelte";
  import Brands from "./brands.svelte";
  import Testimonial from "./testimonial.svelte";
  import type { Testimonial as TestimonialType } from "../../types/testimonial.type";

  export let testimonials: TestimonialType[];
</script>

<style lang="scss">
  h2 {
    text-align: center;
  }

  :global(.slides) {
    margin-bottom: var(--small);
  }

  :global(.slides) > :global(div) > :global(div) {
    display: flex;
    justify-content: center;
  }

  :global(.carousel.carousel.carousel) :global(li) {
    background-color: var(--divider);
    transition: all 0.2s;

    &:hover {
      background-color: var(--light-grey);
    }

    &.active {
      background-color: var(--light-grey);
    }
  }
</style>

<Section>
  <div class="row">
    <h2 class="h1">Used by 400,000+ developers.</h2>
    <Carousel>
      {#each testimonials as testimonial, position}
        <Testimonial {testimonial} {position} />
      {/each}
    </Carousel>
    <Brands />
  </div>
</Section>
