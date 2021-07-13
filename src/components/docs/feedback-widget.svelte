<script>
  // Credit: www.vercel.com/docs 🙏
  import { page } from "$app/stores";

  let selectedEmotion;
  let note = "";
  let resultMessage;
  let isSubmittedOnce = false;

  const submitFeedback = async () => {
    isSubmittedOnce = true;

    window.analytics.track("feedback_submitted", {
      score: selectedEmotion,
      feedback: note,
    });

    const response = await fetch("/.netlify/functions/feedback", {
      method: "post",
      body: JSON.stringify({
        type: "docs",
        emotion: selectedEmotion,
        note,
        url: `https://${$page.host + $page.path}`,
      }),
    });

    if (response.status === 201) {
      resultMessage = "Thanks for your feedback, we appreciate it.";
    } else {
      resultMessage = "Oh no, something went wrong :(.";
    }
    setTimeout(() => {
      selectedEmotion = undefined;
      note = "";
      resultMessage = "";
    }, 5000);
  };
</script>

<style type="text/postcss">
  .selected {
    @apply grayscale-0 scale-150;
  }
</style>

<div class="my-huge">
  <div
    class="bg-white shadow-normal rounded-2xl max-w-md py-small px-xx-small m-auto"
  >
    <h5 class="mb-6 text-center w-full">Was this helpful?</h5>
    {#if resultMessage}
      <p class="text-center">{resultMessage}</p>
    {:else}
      <form on:submit|preventDefault={submitFeedback}>
        <div class="flex justify-center space-x-6">
          {#each new Array(4) as _, index}
            <button
              on:click|preventDefault={() => (selectedEmotion = index + 1)}
              class:selected={selectedEmotion === index + 1}
              class="filter grayscale transform transition duration-150 hover:grayscale-0 hover:scale-150"
            >
              <img
                src="/images/docs/feedback-widget/{index + 1}.svg"
                alt="Feedback {index + 1} of 4"
                title="Feedback {index + 1} of 4"
                class="h-6 w-6"
              />
            </button>
          {/each}
        </div>
        {#if selectedEmotion}
          <div class="mt-x-small">
            <label for="note">Feedback</label>
            <div>
              <textarea
                bind:value={note}
                id="note"
                width="100%"
                placeholder="Your feedback..."
                aria-label="Feedback input"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                type="text"
                class="mb-0"
              />
            </div>
            <div>
              <span
                ><button
                  role="button"
                  type="submit"
                  disabled={isSubmittedOnce}
                  class="btn-primary mt-micro"><span>Send</span></button
                ></span
              >
            </div>
          </div>
        {/if}
      </form>
    {/if}
  </div>
</div>
