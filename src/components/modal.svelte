<script lang="ts">
  import { createEventDispatcher, tick } from "svelte";

  export let isOpen = false;

  const dispatch = createEventDispatcher();

  let closeEl: HTMLButtonElement;
  let focusedEl: HTMLElement;

  $: if (isOpen) {
    if (typeof document !== "undefined")
      focusedEl = <HTMLElement>document.activeElement;
    closeEl && closeEl.focus();
  }

  const closeModal = () => {
    dispatch("close");
    focusedEl && focusedEl.focus();
    focusedEl = null;
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
      <button
        bind:this={closeEl}
        aria-label="close this popup"
        on:click={closeModal}
        ><img alt="Close" role="presentation" src="/x.svg" /></button
      >
      <slot />
    </div>
  </div>
{/if}
