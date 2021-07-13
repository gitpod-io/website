<script lang="ts">
  let clazz = "";
  export { clazz as class };
  let email;
  let resultMessage = "";
  let isSubmittedOnce = false;

  const submitEmail = async () => {
    isSubmittedOnce = true;
    try {
      const response = await fetch("/.netlify/functions/newsletter", {
        method: "post",
        body: email,
      });
      if (response.ok) {
        resultMessage = "Thanks you are now signed up for our newsletter.";
      } else {
        resultMessage = "Oh no, something went wrong :(.";
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<style type="text/postcss">
  input {
    @apply mb-0;
  }
  button {
    @apply mr-0 w-32;
  }
</style>

<form
  class="bg-white shadow-normal rounded-2xl max-w-lg py-small px-xx-small sm:px-small {clazz} relative"
  on:submit|preventDefault={submitEmail}
  id="newsletter"
  on:click|stopPropagation
>
  <h2 class="h3">Stay updated</h2>
  {#if resultMessage}
    <p class="my-medium">{resultMessage}</p>
  {:else}
    <p class="text-medium">Sign up now for our newsletter.</p>
    <div class="flex mt-x-small">
      <input
        type="email"
        bind:value={email}
        required
        autocomplete="email"
        placeholder="Enter your email"
        class="mr-macro sm:mr-xx-small"
      />
      <button class="btn-primary" type="submit" disabled={isSubmittedOnce}
        >Sign up</button
      >
    </div>
  {/if}
</form>
