<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import type { Email } from "../functions/submit-form";
  import type { Form } from "../types/form.type";

  const extensionUrls = {
    chrome:
      "https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki",
    firefox: "https://addons.mozilla.org/en-GB/firefox/addon/gitpod/",
  };

  const currentBrowser =
    ["Chrome", "Firefox"].find(
      (browser) =>
        typeof window !== "undefined" &&
        window.navigator.userAgent.includes(browser)
    ) || "";

  const extensionUrl = extensionUrls[currentBrowser.toLowerCase()];

  const reasons = [
    { id: "usage", label: "I never used it" },
    { id: "configuring", label: "I have problems configuring my projects" },
    { id: "local", label: "I prefer my local development" },
    { id: "expected", label: "Gitpod isn’t what I expected" },
  ];

  const formData: Form = {
    reason: {
      el: null,
      valid: false,
      selected: [],
    },
    otherFeedback: {
      el: null,
      valid: false,
      value: "",
    },
  };
  let isFormDirty = false;
  let isEmailSent = false;

  $: isFormValid = Object.values(formData).every((field) => field.valid);

  const handleSubmit = async () => {
    isFormDirty = true;
    if (!isFormValid) {
      return;
    }

    const email: Email = {
      from: {
        email: "contact+browserextension@gitpod.io",
        name: "Contact - Browser Extension Uninstall",
      },
      subject: "Why did I uninstall the browser extension?",
      feedback: formData.reason.selected.reduce(
        (result, reason) =>
          `${reasons.find(({ id }) => id === reason).label}\n${result}`,
        ``
      ),
      otherFeedback: formData.otherFeedback.value,
    };

    try {
      const response = await fetch("/.netlify/functions/submit-form", {
        method: "POST",
        body: JSON.stringify(email),
      });
      if (response.ok) {
        isEmailSent = true;
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<style>
  .letter {
    display: flex;
    place-content: center center;
    padding: 3em;
    order: -1;
  }
  .letter p {
    padding: 2rem;
    background-color: var(--white);
    border: 1px solid var(--divider);
    max-width: 20rem;
  }
</style>

<header>
  {#if extensionUrl}
    <a href={extensionUrl} rel="noopener" target="_blank">Reinstall Extension</a
    >
  {/if}
  <h1>How Can We Improve?</h1>
</header>
<section class=" halfimages">
  <article class="card">
    <div class="letter">
      <p>
        Hi there, Sad to see you leave 😕 To improve and make sure that other
        developers are happier with Gitpod, we’d love to get your opinion on why
        you decided to uninstall your browser extension. We will work hard to
        build a product that (hopefully) convinces you to use Gitpod again at a
        later point ✌️
      </p>
    </div>
    <form
      on:submit|preventDefault={handleSubmit}
      name="Extension Deletion"
      novalidate
    >
      <input type="hidden" name="form-name" value="extension-deletion" />
      <p class="h5">Why did you uninstall the browser extension?</p>
      <ul>
        <li class:error={isFormDirty && !formData.reason.valid}>
          <fieldset>
            <legend>Check all that apply:</legend>
            <ul>
              {#each reasons as { id, label }}
                <li>
                  <input
                    type="checkbox"
                    name="reason"
                    value={id}
                    {id}
                    data-text={label}
                    bind:group={formData.reason.selected}
                    bind:this={formData.reason.el}
                    on:change={() => {
                      formData.reason.valid =
                        formData.reason.selected.length > 0 &&
                        formData.reason.el.validity.valid;
                    }}
                  />
                  <label for={id}>{label}</label>
                </li>
              {/each}
            </ul>
          </fieldset>
        </li>
        <li class:error={isFormDirty && !formData.otherFeedback.valid}>
          <label for="otherFeedback">Do you have any other feedback?</label>
          <textarea
            aria-label="Do you have any other feedback?"
            id="otherFeedback"
            name="otherFeedback"
            bind:value={formData.otherFeedback.value}
            bind:this={formData.otherFeedback.el}
            on:change={() => {
              formData.otherFeedback.valid =
                formData.otherFeedback.value &&
                formData.otherFeedback.el.validity.valid;
            }}
          />
        </li>
        <li>
          <button
            class="btn-conversion"
            disabled={isFormDirty && !isFormValid}
            type="submit">Send</button
          >
        </li>
      </ul>
      {#if isEmailSent}
        <p>Thanks for your Feedback</p>
      {/if}
    </form>
  </article>
</section>
