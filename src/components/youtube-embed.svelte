<script lang="ts">
  export let embedId: string;
  export let title: string;
</script>

<style>
  .youtube {
    position: relative;
    overflow: hidden;
    max-width: 100%;
    max-height: 315px;
    width: 560px;
    margin: auto;
  }

  .youtube::after {
    display: block;
    content: "";
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
</style>

<div class="youtube">
  <iframe
    src={`https://www.youtube.com/embed/${embedId}`}
    {title}
    width="560"
    height="315"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</div>
