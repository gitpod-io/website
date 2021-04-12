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
      display: flex;
      padding: var(--medium);
      justify-content: space-between;
      align-items: center;
      width: 100%;
      outline: none;

      &::-webkit-details-marker {
        display: none;
      }

      @media (max-width: 860px) {
        padding: var(--xx-small);
        align-items: flex-start;
      }

      @media (max-width: 375px) {
        padding: var(--micro);
      }
    }

    &__title {
      flex: 1;
    }

    &__arrow {
      flex: 0 0 1.5rem;
      display: block;
      height: 1.5rem;
      width: 1.5rem;
      outline: none;
      margin-left: var(--micro);
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
</style>

<details class="faq">
  <summary class="faq__top">
    <h3 class="h4 faq__title">{title}</h3>
    <img
      class="faq__arrow"
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
