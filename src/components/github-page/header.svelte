<script>
  export let title;
  export let description;
</script>

<style>
  a {
    margin-top: var(--small);
  }
</style>

<header>
  <h1>{title}</h1>
  <p>
    {@html description}
  </p>
  <a target="_blank" href="https://gitpod.io/plans" class="btn-conversion">
    Claim Offer
  </a>
</header>
