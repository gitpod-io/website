<script lang="ts">
  import type { Form } from "src/types/form.type";

  const data: Form = {
    email: {
      el: null,
      valid: false,
      value: "",
    },
  };

  let isEmailDirty = false;
  $: isEmailValid = data.email.valid;

  const submitEmail = async () => {
    isEmailDirty = true;
    if (!isEmailValid) {
      return;
    }

    try {
      const response = await fetch("/.netlify/functions/newsletter", {
        method: "POST",
        body: JSON.stringify(data.email.value),
      });
      if (response.ok) {
        // todo update the ui to indicate success.
      } else {
        console.error(response.statusText);
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

<div class="mt-large my-xx-large" id="newsletter">
  <form
    class="bg-white shadow-normal rounded-2xl max-w-lg py-small px-xx-small sm:px-small m-auto"
    on:submit|preventDefault={submitEmail}
  >
    <h2 class="h3">Stay updated</h2>
    <p class="text-medium">Sign up now for our newsletter.</p>
    <div class="flex mt-x-small">
      <input
        type="email"
        bind:this={data.email.el}
        bind:value={data.email.value}
        class:error={isEmailDirty && !data.email.valid}
        on:change={() => {
          data.email.valid = data.email.value && data.email.el.checkValidity();
        }}
        autocomplete="email"
        required
        placeholder="Enter your email"
        class="mb-0 mr-macro sm:mr-xx-small"
      />
      <button
        class="btn-primary mr-0 w-32"
        type="submit"
        disabled={isEmailDirty && !isEmailValid}>Sign up</button
      >
    </div>
  </form>
</div>
