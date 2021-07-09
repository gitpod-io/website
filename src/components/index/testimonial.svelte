<script lang="ts">
  import type { Testimonial } from "../../types/testimonial.type";
  export let testimonial: Testimonial;

  const { name, avatar, role, org, text, twitterHandle, tweetId } = testimonial;

  export let position: Number;
</script>

<style lang="scss">
  .testimonial {
    color: var(--black);
    scroll-snap-align: start;

    @media (max-width: 768px) {
      width: 320px;
    }
  }

  .testimonial :global(a) {
    color: var(--blue);
    font-weight: 600;
  }

  .testimonial :global(p) + :global(p) {
    margin-top: var(--macro);
  }

  .role :global(span) {
    font-weight: bold;
  }
</style>

<a
  href={`https://twitter.com/${twitterHandle}/status/${tweetId}`}
  target="_blank"
  on:click={() =>
    window.analytics.track("socialproof_clicked", {
      type: "tweet",
      url: `https://twitter.com/${twitterHandle}/status/${tweetId}`,
      position: position,
    })}
  class="my-2 text-small"
>
  <div
    class="testimonial w-96 p-6 overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
  >
    <div>{@html text}</div>
    <div class="mt-4 flex">
      <img
        src={`/images/avatars/${avatar}`}
        alt={name}
        class="w-12 h-12 rounded-full"
        width="48"
        height="48"
      />
      <div class="ml-3">
        <p class="mb-0 font-semibold text-small leading-6">{name}</p>
        <p class="role">{role} {@html org}</p>
      </div>
    </div>
  </div>
</a>
