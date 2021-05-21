<script lang="ts">
  import type { Feature } from "../types/feature.type";
  import Console from "./console.svelte";
  import Section from "./section.svelte";

  export let feature: Feature;
  const {
    documentationLink,
    moreButton,
    paragraph,
    title,
    terminalSource,
    image,
  } = feature;
</script>

<style lang="scss">
  .feature {
    display: flex;
    justify-content: space-between;
    min-height: 340px;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 0 0 50%;

      @media (min-width: 801px) {
        margin: var(--medium) 0;
      }
    }

    .buttons-wrapper {
      @apply justify-start;
    }

    &__preview {
      flex: 0 0 45%;

      @media (max-width: 800px) {
        margin-top: var(--small);

        img {
          margin-left: auto;
          margin-right: auto;
        }
      }

      img {
        display: block;
        max-height: 500px;
        border-radius: 1.25rem;
        box-shadow: 0 1.25rem 2.5rem rgba(0, 0, 0, 0.1);
      }
    }

    &__buttons {
      @media (max-width: 850px) {
        margin-top: var(--xx-small);
      }
    }
  }
</style>

<Section>
  <div class="feature">
    <div class="feature__text">
      <div class="text-large">
        <h2 class="h3">{title}</h2>
        <p>{paragraph}</p>
      </div>
      <div
        class={`feature__buttons ${
          moreButton && documentationLink ? "buttons-wrapper" : ""
        }`}
      >
        <a href={moreButton.href} class="btn-primary">
          {moreButton.text}
        </a>
        {#if documentationLink}
          <a href={documentationLink} class="btn-secondary">Documentation </a>
        {/if}
      </div>
    </div>
    <div class="feature__preview">
      {#if terminalSource}
        <Console source={terminalSource} />
      {/if}
      {#if image}
        <img src={image.src} alt={image.alt} />
        <!--height="{image.height}" width="{image.width}" />-->
      {/if}
    </div>
  </div>
</Section>
