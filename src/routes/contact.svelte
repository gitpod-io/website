<script lang="ts">
  import type { ContactCard } from "../types/contact-card.type";
  import Card from "../components/contact/card.svelte";
  import OpenGraph from "../components/open-graph.svelte";

  const contactCards: ContactCard[] = [
    {
      btnHref: "https://community.gitpod.io",
      btnText: "Open community",
      description:
        "If you are looking for help for common requests pease visit our community.",
      title: "Ask the community",
    },
    {
      btnHref: "/docs",
      btnText: "Open documentation",
      description:
        "If you want to find out if you are elegible for our professional open source programm you can check out our docs.",
      title: "Professional Open Source",
    },
  ];

  const subjects = [
    "Question about Gitpod Self-Hosted",
    "Question about Gitpod's Paid Plans",
    "Applying for Professional Open Source",
    "Applying for the Custom IDE Beta",
    "Student Unlimited: Get Verified as a Student",
  ];

  let formData: {
    consent: string;
    email: string;
    message: string;
    name: string;
    selectedSubject: string;
  } = {
    consent: "",
    email: "",
    message: "",
    name: "",
    selectedSubject: "",
  };

  const handleSubmit = () => {
    console.log(formData);
    // TODO: Implement form validation
    // TODO: Submit Netlify form. See https://github.com/gitpod-io/website/blob/master/src/pages/contact.tsx#L148
  };
</script>

<OpenGraph
  data={{
    description: "Reach out if you have any questions regarding Gitpod.",
    title: "Contact us",
    type: "website",
  }}
/>
<h1>Contact us</h1>
<p>Please reach out if you have any questions regarding Gitpod.</p>

<div>
  {#each contactCards as contactCard}
    <Card {contactCard} />
  {/each}
</div>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="name">Name*</label>
    <input id="name" bind:value={formData.name} type="text" required />
  </div>
  <div>
    <label for="email">E-Mail*</label>
    <input id="email" bind:value={formData.email} type="email" required />
  </div>

  <div>
    <span>Please choose a subject</span>
    {#each subjects as subject, index}
      <input
        id="subject-{index}"
        type="radio"
        bind:group={formData.selectedSubject}
        value={subject}
      />
      <label for="subject-{index}">{subject}</label>
    {/each}
  </div>

  <div>
    <label for="message">Your message*</label>
    <textarea
      id="message"
      bind:value={formData.message}
      cols="30"
      rows="10"
      required
    />
  </div>

  <div>
    <input
      id="consent"
      bind:value={formData.consent}
      type="checkbox"
      required
    />
    <label for="consent"
      >I consent to having this website store my submitted information so that a
      support staff can respond to my inquiry.</label
    >
  </div>

  <button>Send message</button>
</form>
