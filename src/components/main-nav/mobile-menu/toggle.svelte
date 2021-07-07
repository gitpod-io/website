<script lang="ts">
  import menuState from "./state";
</script>

<style type="text/postcss">
  button {
    @media (min-width: 931px) {
      @apply hidden;
    }
  }
</style>

<button
  on:click={() => ($menuState = !$menuState)}
  aria-label="Show / hiide nav items"
  class="flex justify-center items-center h-6 w-12 rounded-xl bg-black"
>
  {#if $menuState}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <path
        fill="#F3F1F0"
        fill-rule="evenodd"
        d="M10.242 11.657a1 1 0 001.414-1.414L7.413 6l4.243-4.243A1 1 0 0010.242.343L5.999 4.586 1.757.343A1 1 0 10.342 1.757L4.585 6 .342 10.243a1 1 0 001.415 1.414l4.242-4.243 4.243 4.243z"
        clip-rule="evenodd"
      />
    </svg>
  {:else}
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="2" rx="1" fill="#F4F2F1" />
      <rect y="6" width="16" height="2" rx="1" fill="#F3F1F0" />
    </svg>
  {/if}
</button>
