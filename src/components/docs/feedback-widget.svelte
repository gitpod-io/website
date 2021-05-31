<script>
  // Credit: www.vercel.com/docs 🙏
  import { page } from "$app/stores";

  let selectedEmotion;
  let note = "";
  let resultMessage;

  const submitFeedback = async () => {
    const response = await fetch("/.netlify/functions/feedback", {
      method: "post",
      body: JSON.stringify({
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

<style>
  .selected {
    @apply grayscale-0 scale-150;
  }
</style>

<div>
  <h5 class="mt-12 mb-6 text-center">Was this helpful?</h5>
  {#if resultMessage}
    <p class="text-center">{resultMessage}</p>
  {:else}
    <form
      on:submit|preventDefault={submitFeedback}
      title="Share your feedback about our docs"
    >
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
              class="h-6 w-6"
            />
          </button>
        {/each}
      </div>
      {#if selectedEmotion}
        <div class="">
          <div class="">
            <label class="">Feedback</label>
            <div class="">
              <textarea
                bind:value={note}
                width="100%"
                placeholder="Your feedback..."
                aria-label="Feedback input"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                type="text"
                class=""
              />
            </div>
          </div>
          <div class="">
            <span class=""
              ><button role="button" type="submit" class=""
                ><span class="">Send</span></button
              ></span
            >
          </div>
        </div>
      {/if}
    </form>
  {/if}
</div>
