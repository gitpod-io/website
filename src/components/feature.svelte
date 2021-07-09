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
    terminal,
    image,
    previewComponent,
  } = feature;
</script>

<style lang="scss">
  :global(.feature-container-section) {
    &:nth-of-type(even) {
      .feature {
        @media (min-width: 801px) {
          @apply flex-row-reverse;
        }

        &__text {
          flex: 0 0 45%;
        }

        &__preview {
          flex: 0 0 45%;
        }
      }
    }
  }

  .feature {
    display: flex;
    justify-content: space-between;
    min-height: 340px;

    @media (max-width: 800px) {
      @apply flex-col-reverse;
      @apply pb-medium;
    }

    &__text {
      display: flex;
      flex-direction: column;
      @apply justify-around;
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
        @apply pb-small;

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

<Section className="feature-container-section">
  <div class="feature">
    <div class="feature__text">
      <div class="text-large">
        <h2 class="h3">{title}</h2>
        <p>{paragraph}</p>
      </div>
      {#if moreButton || documentationLink}
        <div
          class={`feature__buttons ${
            moreButton && documentationLink ? "buttons-wrapper" : ""
          }`}
        >
          <a
            href={moreButton.href}
            class={`btn-${moreButton.type || "primary"}`}
          >
            {moreButton.text}
          </a>
          {#if documentationLink}
            <a href={documentationLink} class="btn-secondary">Documentation </a>
          {/if}
        </div>
      {/if}
    </div>
    <div class="feature__preview">
      {#if terminal}
        <Console source={terminal.source} skipToEnd={terminal.skipToEnd} />
      {/if}
      {#if image}
        <img src={image.src} alt={image.alt} />
        <!--height="{image.height}" width="{image.width}" />-->
      {/if}
      {#if previewComponent}
        <svelte:component this={previewComponent} />
      {/if}
    </div>
  </div>
</Section>
