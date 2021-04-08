<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let isOpen = false;

  const dispatch = createEventDispatcher();

  const closeModal = () => {
    dispatch("close");
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div class="modal" on:click={closeModal}>
    <div class="content text-blob" on:click={(e) => e.stopPropagation()}>
      <button aria-label="close this popup" on:click={closeModal}
        ><img alt="Close" role="presentation" src="/x.svg" /></button
      >
      <slot />
    </div>
  </div>
{/if}
