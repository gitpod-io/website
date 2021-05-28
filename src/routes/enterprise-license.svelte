<script lang="ts">
  import type { Form } from "../types/form.type";

  import SubmissionSuccess from "../components/submission-success.svelte";
  import { countryList } from "../contents/license-key";
  import { isEurope } from "../utils/helper";
  import type { Email } from "../functions/submit-form";

  let orderTotal = 0;

  const yearlyPricesPerSeat = {
    eur: 216,
    usd: 240,
  };

  const formData: Form = {
    seats: {
      el: null,
      valid: false,
      value: "0",
    },
    domain: {
      el: null,
      valid: false,
      value: "",
    },
    firstName: {
      el: null,
      valid: false,
      value: "",
    },
    lastName: {
      el: null,
      valid: false,
      value: "",
    },
    email: {
      el: null,
      valid: false,
      value: "",
    },
    company: {
      el: null,
      valid: false,
      value: "",
    },
    address: {
      el: null,
      valid: false,
      value: "",
    },
    postalCode: {
      el: null,
      valid: false,
      value: "",
    },
    city: {
      el: null,
      valid: false,
      value: "",
    },
    country: {
      el: null,
      valid: false,
      value: "",
    },
    noOfEmployees: {
      el: null,
      valid: true,
      value: "",
    },
    message: {
      el: null,
      valid: true,
      value: "",
    },
  };

  let isRequested: boolean = false;
  let isFormDirty: boolean = false;

  $: isFormValid = Object.values(formData).every((field) => field.valid);

  const handleSeatsInput = (e) => {
    const input = e.target.value;
    if (input == "") {
      orderTotal = 0;
    } else {
      const number = parseInt(input);
      orderTotal = isEurope()
        ? yearlyPricesPerSeat.eur * number
        : yearlyPricesPerSeat.usd * number;
    }
  };

  const handleSubmit = async () => {
    isFormDirty = true;
    if (!isFormValid) {
      return;
    }

    const email: Email = {
      from: {
        email: formData.email.value,
        name: `${formData.firstName.value} ${formData.lastName.value}`,
      },
      subject:
        "Requesting a professional self-hosted license" +
        "  (from " +
        formData.email.value +
        ")",
      message: `
        ${formData.company.value}
        ${formData.firstName.value} ${formData.lastName.value}
        ${formData.address.value}
        ${formData.postalCode.value} ${formData.city.value}
        ${formData.country.value}

        domain: ${formData.domain.value}
        seats: ${formData.seats.value}
        employees: ${formData.noOfEmployees.value}

        Message:
        ${formData.message.value}
      `,
    };

    try {
      const response = await fetch("/.netlify/functions/submit-form", {
        method: "POST",
        body: JSON.stringify(email),
      });
      if (response.ok) {
        isRequested = true;
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<style lang="scss">
  header {
    @apply mb-small;
  }

  .title:not(:first-child) {
    margin-top: var(--medium);
  }

  .half :last-child {
    @apply mt-macro;
  }

  .option {
    @apply text-gray-800;
  }
</style>

<header>
  <h1>Request License Key</h1>
  <p>
    Please fill out your order to receive a license key for Gitpod Self-Hosted.
  </p>
</header>

<section class="card shadow-xl mb-32 sm:mx-8">
  {#if isRequested}
    <SubmissionSuccess title="Thanks" text="We'll get back to you soon." />
  {:else}
    <form on:submit|preventDefault={handleSubmit} novalidate>
      <label class="title" for="seats">
        <h2 class="h4">How many seats would you like to purchase?*</h2>
      </label>

      <div class="flex flex-wrap items-center justify-between">
        <div class="flex flex-wrap items-center">
          <input
            id="seats"
            type="number"
            placeholder="Seats"
            name="seats"
            bind:value={formData.seats.value}
            bind:this={formData.seats.el}
            on:input={(e) => {
              handleSeatsInput(e);
              formData.seats.valid =
                formData.seats.value && formData.seats.el.checkValidity();
            }}
            min="0"
            class:error={isFormDirty && !formData.seats.valid}
            class="mb-micro"
          />
          <div class="sm:ml-xx-small mb-micro">
            &nbsp;x {isEurope()
              ? `${yearlyPricesPerSeat.eur}€`
              : `${yearlyPricesPerSeat.usd}$`} per user yearly &nbsp;
          </div>
        </div>
        <div class="mb-micro">
          Order Total: <strong
            >{new Intl.NumberFormat().format(orderTotal)}</strong
          >
          {isEurope() ? "€" : "$"}
        </div>
      </div>

      <label class="title" for="domain">
        <h2 class="h4">
          What is the domain name of your Gitpod Self-Hosted installation?*
        </h2>
      </label>
      <input
        type="text"
        id="domain"
        placeholder="e.g. gitpod.mycompany.com"
        bind:value={formData.domain.value}
        bind:this={formData.domain.el}
        on:change={() => {
          formData.domain.valid =
            formData.domain.value && formData.domain.el.checkValidity();
        }}
        class:error={isFormDirty && !formData.domain.valid}
        autocomplete="url"
      />

      <p>The license key will be bound to this domain.</p>

      <h2 class="h4 title">Customer Information</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-small">
        <label
          class="half"
          class:error={isFormDirty && !formData.firstName.valid}
        >
          First Name*
          <input
            name="firstName"
            type="text"
            bind:value={formData.firstName.value}
            bind:this={formData.firstName.el}
            on:change={() => {
              formData.firstName.valid =
                formData.firstName.value &&
                formData.firstName.el.checkValidity();
            }}
            autocomplete="given-name"
          />
        </label>
        <label
          class="half"
          class:error={isFormDirty && !formData.lastName.valid}
        >
          Last Name*
          <input
            name="lastName"
            type="text"
            bind:value={formData.lastName.value}
            bind:this={formData.lastName.el}
            on:change={() => {
              formData.lastName.valid =
                formData.lastName.value && formData.lastName.el.checkValidity();
            }}
            autocomplete="family-name"
          />
        </label>
        <label class="half" class:error={isFormDirty && !formData.email.valid}>
          Work Email*
          <input
            type="email"
            name="email"
            bind:value={formData.email.value}
            bind:this={formData.email.el}
            on:change={() => {
              formData.email.valid =
                formData.email.value && formData.email.el.checkValidity();
            }}
            autocomplete="email"
          />
        </label>
        <label
          class="half"
          class:error={isFormDirty && !formData.company.valid}
        >
          Company*
          <input
            name="company"
            bind:value={formData.company.value}
            bind:this={formData.company.el}
            on:change={() => {
              formData.company.valid =
                formData.company.value && formData.company.el.checkValidity();
            }}
            type="text"
            autocomplete="organization"
          />
        </label>
        <label
          class="half"
          class:error={isFormDirty && !formData.address.valid}
        >
          Street Address*
          <input
            name="address"
            bind:value={formData.address.value}
            bind:this={formData.address.el}
            on:change={() => {
              formData.address.valid =
                formData.address.value && formData.address.el.checkValidity();
            }}
            type="text"
            autocomplete="street-address"
          />
        </label>
        <label
          class="half"
          class:error={isFormDirty && !formData.postalCode.valid}
        >
          Postal Code*
          <input
            name="postalCode"
            bind:value={formData.postalCode.value}
            bind:this={formData.postalCode.el}
            on:change={() => {
              formData.postalCode.valid =
                formData.postalCode.value &&
                formData.postalCode.el.checkValidity();
            }}
            type="text"
            autocomplete="postal-code"
          />
        </label>
        <label class="half" class:error={isFormDirty && !formData.city.valid}>
          City*
          <input
            name="city"
            bind:value={formData.city.value}
            bind:this={formData.city.el}
            on:change={() => {
              formData.city.valid =
                formData.city.value && formData.city.el.checkValidity();
            }}
            type="text"
            autocomplete="address-level2"
          />
        </label>
        <label
          class="half"
          class:error={isFormDirty && !formData.country.valid}
        >
          Country*
          <select
            name="country"
            bind:value={formData.country.value}
            bind:this={formData.country.el}
            on:blur={() => {
              formData.country.valid =
                formData.country.value && formData.country.el.checkValidity();
            }}
            class="option"
            autocomplete="country"
          >
            <option class="option">Select</option>
            {#each countryList as c}
              <option class="option" value={c}>
                {c}
              </option>
            {/each}
          </select>
        </label>
        <label
          class="half"
          class:error={isFormDirty && !formData.noOfEmployees.valid}
        >
          Total Number of Employees <span>(optional)</span>
          <select
            name="noOfEmployees"
            bind:value={formData.noOfEmployees.value}
            bind:this={formData.noOfEmployees.el}
          >
            <option class="option">Select</option>
            {#each ["2-5", "6-20", "21-50", "51-250", "+250"] as n, i}
              <option class="option" value={n}>
                {n}
              </option>
            {/each}
          </select>
        </label>
      </div>

      <h2 class="h4 title">Other</h2>
      <label class="half">
        <p>
          Add personal message <span>(optional)</span>
        </p>
        <textarea
          cols="30"
          rows="8"
          bind:value={formData.message.value}
          bind:this={formData.message.el}
          name="message"
        />
      </label>

      <button
        type="submit"
        class="btn-conversion title"
        disabled={isFormDirty && !isFormValid}>Request Now</button
      >
    </form>
  {/if}
</section>
