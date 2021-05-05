<script lang="ts">
  export let title: string;
</script>

<style>
  header p :global(a) {
    @apply underline;
  }
</style>

<header>
  <h1>{title}</h1>
  <p>
    <slot name="description" />
  </p>
  <a
    target="_blank"
    href="https://gitpod.io/plans"
    class="btn-conversion mt-small"
  >
    Claim Offer
  </a>
</header>
