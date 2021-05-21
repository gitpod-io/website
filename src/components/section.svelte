<script lang="ts">
  export let id: string = "";
  export let className: string = "";
</script>

<style lang="scss">
  section {
    margin-top: var(--xx-large);

    &:last-of-type {
      margin-bottom: var(--xx-large);
    }

    @media (max-width: 972px) {
      margin-top: var(--x-large);

      &:last-of-type {
        margin-bottom: var(--x-large);
      }
    }
  }
</style>

<section {id} class={className}>
  <slot />
</section>
