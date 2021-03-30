<script lang="ts">
  import type { Testimonial } from "../../types/testimonial.type";
  export let testimonial: Testimonial;

  const { name, avatar, role, org, text, tweetId, twitterHandle } = testimonial;
</script>

<style lang="scss">
  .testimonial {
    width: 400px;
    padding: var(--x-small);
    background: var(--white);
    border-radius: 16px;

    p + p {
      margin-top: var(--xx-small);
    }

    &__author {
      display: flex;
      margin-top: var(--micro);
    }

    img {
      display: block;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 0.75rem;
    }

    @media (min-width: 769px) {
      &:not(:last-child) {
        margin-right: var(--xx-small);
      }
    }

    @media (max-width: 768px) {
      &:not(:last-child) {
        margin-bottom: var(--xx-small);
      }
    }
  }
</style>

<div class="testimonial text-small">
  <!-- TODO: Nisar, this breaks "npm run export". I need to look into it when you open your PR to finish the testimonial work. -->
  <!-- <div>{@html text}</div> -->
  <div class="testimonial__author">
    <img src={`/${avatar}`} alt={name} />
    <div>
      <h3 class="text-small">{name}</h3>
      <p>{role} {@html org}</p>
    </div>
  </div>
</div>
