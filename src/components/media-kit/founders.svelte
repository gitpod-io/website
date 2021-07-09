<script lang="ts">
  import Section from "../section.svelte";

  const imgSrc = "/images/media-kit/founders.jpg";
</script>

<Section className="text-center">
  <h2 class="mb-medium">The founders</h2>
  <div
    class="shadow-normal rounded-4xl bg-white p-small sm:p-x-large mb-x-large"
  >
    <img src="imgSrc" alt="Gitpod founders group" class="rounded-4xl mx-auto" />
    <p class="py-xx-small">Download founder group picture</p>
    <a
      href="imgSrc"
      on:click={() =>
        window.analytics.track("media_downloaded", {
          name: imgSrc,
        })}
      download
      class="btn-cta">PNG</a
    >
  </div>
  <p class="text-large">
    Please <a href="/contact">contact us</a> for any intended use not covered by
    these guidelines.
  </p>
</Section>
