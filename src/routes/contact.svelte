<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import type { ContactCard } from "../types/contact-card.type";
  import type { Form } from "../types/form.type";
  import type { Email } from "../functions/submit-form";
  import Card from "../components/contact/card.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import SubmissionSuccess from "../components/submission-success.svelte";

  const contactCards: ContactCard[] = [
    {
      btnHref: "https://community.gitpod.io",
      btnText: "Open community",
      description:
        "If you are looking for help for common requests pease visit our community.",
      title: "Ask the community",
      image: "icon-enter.svg",
      imgHeight: "154",
      imgWidth: "147",
    },
    {
      btnHref: "/docs/professional-open-source#who-is-eligible",
      btnText: "Open documentation",
      description:
        "If you want to find out if you are elegible for our professional open source programm you can check out our docs.",
      title: "Professional Open Source",
      image: "icon-cube.svg",
      imgHeight: "154",
      imgWidth: "147",
    },
  ];

  const studentUnlimitedSubject =
    "Student Unlimited: Get Verified as a Student";

  const subjects = [
    "Question about Gitpod Self-Hosted",
    "Question about Gitpod's Paid Plans",
    "Applying for Professional Open Source",
    "Applying for the Custom IDE Beta",
    studentUnlimitedSubject,
    "Other",
  ];

  let isStudentEmailNoteShown: boolean = false;
  let sectionStart;

  $: if (formData.selectedSubject.value === studentUnlimitedSubject) {
    isStudentEmailNoteShown = true;
  } else {
    isStudentEmailNoteShown = false;
  }

  const formData: Form = {
    consent: {
      el: null,
      valid: false,
      checked: false,
    },
    email: {
      el: null,
      valid: false,
      value: "",
    },
    message: {
      el: null,
      valid: false,
      value: "",
    },
    name: {
      el: null,
      valid: false,
      value: "",
    },
    selectedSubject: {
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
        email: formData.email.value,
        name: formData.name.value,
      },
      subject:
        formData.selectedSubject.value +
        "  (from " +
        formData.email.value +
        ")",
      message: formData.message.value,
    };

    try {
      const response = await fetch("/.netlify/functions/submit-form", {
        method: "POST",
        body: JSON.stringify(email),
      });
      if (response.ok) {
        isEmailSent = true;
        setTimeout(() => {
          sectionStart.scrollIntoView();
        });
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<style>
  p {
    color: var(--dark-grey);
  }
  form {
    max-width: 45rem;
    margin: auto;
  }
  fieldset ul {
    display: flex;
    flex-flow: wrap;
  }
  fieldset li {
    margin: 0 1rem 0 0;
  }
</style>

<OpenGraph
  data={{
    description: "Contact us if you have any questions regarding Gitpod.",
    title: "Contact us",
  }}
/>
<header class="tight">
  <h1>Contact us</h1>
  <p>Please let us know if you have any questions regarding Gitpod.</p>
</header>

<div class="cards double sm:mx-8">
  {#each contactCards as contactCard}
    <Card {contactCard} />
  {/each}
</div>

<section class="card shadow-xl mb-32 sm:mx-8" bind:this={sectionStart}>
  {#if isEmailSent}
    <SubmissionSuccess
      title="Thank you for your message"
      text="We received your message. Our team will take a look and get back to you as
      soon as possible."
    />
  {:else}
    <form on:submit|preventDefault={handleSubmit} novalidate>
      <h2 class="h3 text-center mb-8">Send us a message</h2>
      <ul>
        <li class:error={isFormDirty && !formData.name.valid}>
          <label for="name">Name*</label>
          <input
            id="name"
            bind:value={formData.name.value}
            bind:this={formData.name.el}
            on:change={() => {
              formData.name.valid =
                formData.name.value && formData.name.el.checkValidity();
            }}
            type="text"
            autocomplete="name"
          />
        </li>
        <li class:error={isFormDirty && !formData.email.valid}>
          <label for="email"
            >E-Mail*
            {#if isStudentEmailNoteShown}
              (Please use your student email)
            {/if}
          </label>
          <input
            id="email"
            bind:value={formData.email.value}
            bind:this={formData.email.el}
            on:change={() => {
              formData.email.valid =
                formData.email.value && formData.email.el.checkValidity();
            }}
            type="email"
            autocomplete="email"
          />
        </li>
        <li class:error={isFormDirty && !formData.selectedSubject.valid}>
          <fieldset>
            <legend>Please choose a subject</legend>
            <ul>
              {#each subjects as subject, index}
                <li>
                  <input
                    id="subject-{index}"
                    type="radio"
                    bind:group={formData.selectedSubject.value}
                    bind:this={formData.selectedSubject.el}
                    on:change={() => {
                      formData.selectedSubject.valid =
                        formData.selectedSubject.value &&
                        formData.selectedSubject.el.validity.valid;
                    }}
                    value={subject}
                    name="subject"
                  />
                  <label for="subject-{index}" class="font-medium"
                    >{subject}</label
                  >
                </li>
              {/each}
            </ul>
          </fieldset>
        </li>
        <li class:error={isFormDirty && !formData.message.valid}>
          <label for="message">Your message*</label>
          <textarea
            id="message"
            bind:value={formData.message.value}
            bind:this={formData.message.el}
            on:change={() => {
              formData.message.valid =
                formData.message.value && formData.message.el.validity.valid;
            }}
            cols="30"
            rows="10"
          />
        </li>
        <li class:error={isFormDirty && !formData.consent.valid}>
          <input
            id="consent"
            bind:checked={formData.consent.checked}
            bind:this={formData.consent.el}
            on:change={() => {
              formData.consent.valid =
                formData.consent.checked && formData.consent.el.validity.valid;
            }}
            type="checkbox"
          />
          <label for="consent"
            >I consent to having this website store my submitted information so
            that a support staff can respond to my inquiry.</label
          >
        </li>
        <li>
          <button
            type="submit"
            class="btn"
            disabled={isFormDirty && !isFormValid}>Send message</button
          >
        </li>
      </ul>
      {#if isEmailSent}
        <p>Thank you! We'll get back to you soon.</p>
      {/if}
    </form>
  {/if}
</section>
