<script lang="ts">
  import type { Career } from "../../types/career.type";
  import Modal from "../modal.svelte";

  export let career: Career;
</script>

<style>
  .my-7rem {
    margin-top: 7rem;
    margin-bottom: 7rem;
  }
</style>

<Modal isOpen={!!career} on:close>
  <h2 class="jobTitle">{career.title}</h2>
  <p>{@html career.intro}</p>
  <p>{@html career.paragraphs}</p>

  {#each career.lists as list}
    <h3>{@html list.title}</h3>
    <ul>
      {#each list.items as item}
        <li>
          <p>
            <strong>{@html item.split(". ")[0]}</strong><br />
            {@html item
              .split(". ")
              .slice(1, item.split(". ").length)
              .join(". ")}
          </p>
        </li>
      {/each}
    </ul>
  {/each}
  <p class="my-7rem">
    <a
      class="btn-conversion"
      href="mailto:career@gitpod.io?subject=Application as {career.title}"
      on:click={() =>
        window.analytics.track("hiring_interaction", {
          subtype: "apply_clicked",
          name: career.title,
        })}>Apply now</a
    >
  </p>
</Modal>
