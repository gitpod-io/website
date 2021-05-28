<script lang="ts">
  export let title: string;
  export let text: string;
</script>

<style>
  div {
    height: 45rem;
    background-image: url("/images/illustration-crop.jpg");
  }
</style>

<h2 class="h3 text-center mb-8">{title}</h2>
<p class="text-center">
  {text}
</p>
<div class="hidden bg-right-top md:block" />
