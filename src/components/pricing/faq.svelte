<script>
  export let title;
</script>

<style lang="scss">
  .faq {
    border-radius: 16px;
    background: var(--sand-dark);
    border: 1px solid transparent;

    &:hover,
    &:focus {
      border: 1px solid #fff;
    }

    &:not(:last-child) {
      margin-bottom: var(--xx-small);
    }

    &__top {
      padding: var(--medium);
      align-items: center;
      width: 100%;
      outline: none;

      @media (max-width: 860px) {
        padding: var(--xx-small);
        align-items: flex-start;
      }

      @media (max-width: 375px) {
        padding: var(--micro);
      }
    }

    &__title {
      display: inline-block;
      width: 86%;
    }

    &__arrow {
      height: 1.5rem;
      width: 1.5rem;
      outline: none;
      transition: all 0.2s;

      @media (max-width: 768px) {
        margin-top: 0.188rem;
      }
    }

    &__text {
      margin: var(--medium);
      margin-top: -2.5rem;

      @media (max-width: 860px) {
        margin: var(--xx-small);
        margin-top: -1rem;
      }

      @media (max-width: 375px) {
        margin: var(--micro);
        margin-top: -0.5rem;
      }
    }

    & :global(a) {
      font-weight: 600;
    }
  }

  .h4 {
    margin-bottom: 0;
  }

  details[open] .faq__arrow {
    transform: rotate(180deg);
  }

  summary {
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }
</style>

<details class="faq">
  <summary class="faq__top">
    <h3 class="h4 faq__title inline">{title}</h3>
    <img
      class="faq__arrow inline float-right"
      width="24"
      height="24"
      src="/arrow.svg"
      alt="Arrow"
    />
  </summary>
  <div class="faq__text text-large">
    <slot />
  </div>
</details>
