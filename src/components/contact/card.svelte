<script lang="ts">
  import type { ContactCard } from "../../types/contact-card.type";

  export let contactCard: ContactCard;
</script>

<style lang="scss">
  .card {
    @media (max-width: 375px) {
      @apply px-micro;
    }
  }
  p {
    color: var(--dark-grey);
  }
</style>

<div class="card text-center shadow-xl">
  <!-- svelte-ignore a11y-missing-attribute -->
  <img
    src="/images/contact/{contactCard.image}"
    height={contactCard.imgHeight}
    width={contactCard.imgWidth}
    role="presentation"
  />
  <h2 class="h3">{contactCard.title}</h2>
  <p>{contactCard.description}</p>
  <a
    href={contactCard.btnHref}
    on:click={() => {
      if (contactCard.tracking) contactCard.tracking();
    }}
    class="btn btn-conversion m-8">{contactCard.btnText}</a
  >
</div>
