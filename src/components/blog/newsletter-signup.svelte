<script>
  const submitEmail = async () => {
    // todo submit email
  };
</script>

<div class="mt-large my-xx-large">
  <form
    class="bg-white shadow-normal rounded-2xl max-w-2xl py-small px-xx-small sm:px-small md:px-x-large m-auto"
    on:submit|preventDefault={submitEmail}
  >
    <h2>Stay updated</h2>
    <p class="text-large">Sign up now for our newsletter.</p>
    <div class="flex mt-x-small">
      <input
        type="email"
        placeholder="Enter your email"
        autocomplete="email"
        class="mb-0 mr-macro sm:mr-xx-small"
      />
      <button class="btn-primary mr-0 w-32" type="submit">Sign up</button>
    </div>
  </form>
</div>
