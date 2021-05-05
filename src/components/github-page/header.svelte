<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<header>
  <h1>{title}</h1>
  <p>
    {@html description}
  </p>
  <a target="_blank" href="https://gitpod.io/plans" class="btn-conversion mt-4">
    Claim Offer
  </a>
</header>
