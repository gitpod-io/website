<script lang="ts">
  import { countryList } from "../contents/license-key";
  import { isEurope } from "../utils/helper";

  let orderTotal = 0;

  const yearlyPricesPerSeat = {
    eur: 216,
    usd: 240,
  };

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
</script>

<style lang="scss">
  .title:not(:first-child) {
    margin-top: var(--medium);
  }

  .half :last-child {
    @apply mt-macro;
  }
</style>

<header>
  <h1>Request License Key</h1>
  <p>
    Please fill out your order to receive a license key for Gitpod Self-Hosted.
  </p>
</header>

<section class="card shadow-xl mb-32 mx-8">
  <form>
    <label class="title" for="seats">
      <h2 class="h4">How many seats would you like to purchase?</h2>
    </label>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          id="seats"
          type="number"
          placeholder="Seats"
          name="seats"
          on:input={handleSeatsInput}
          min="0"
        />
        <div class="ml-xx-small">
          x {isEurope()
            ? `${yearlyPricesPerSeat.eur}€`
            : `${yearlyPricesPerSeat.usd}$`} per user yearly
        </div>
      </div>
      <div>
        Order Total: <strong>{orderTotal}</strong>
        {isEurope() ? "€" : "$"}
      </div>
    </div>

    <label class="title" for="domain">
      <h2 class="h4">
        What is the domain name of your Gitpod Self-Hosted installation?
      </h2>
    </label>
    <input type="text" id="domain" placeholder="e.g. gitpod.mycompany.com" />

    <p>The license key will be bound to this domain.</p>

    <h2 class="h4 title">Customer Information</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-small">
      <label class="half">
        First Name
        <input name="firstName" type="text" />
      </label>
      <label class="half">
        Last Name
        <input name="lastName" type="text" />
      </label>
      <label class="half">
        Work Email
        <input type="email" name="email" />
      </label>
      <label class="half">
        Company
        <input name="company" type="text" />
      </label>
      <label class="half">
        Street Address
        <input name="address" type="text" />
      </label>
      <label class="half">
        Postal Code
        <input name="postalCode" type="text" />
      </label>
      <label class="half">
        City
        <input name="city" type="text" />
      </label>
      <label>
        Country
        <select name="country">
          <option>Select</option>
          {#each countryList as c}
            <option value={c}>
              {c}
            </option>
          {/each}
        </select>
      </label>
      <label>
        Total Number of Employees <span>(optional)</span>
        <select name="noOfEmployees">
          <option>Select</option>
          {#each ["2-5", "6-20", "21-50", "51-250", "+250"] as n, i}
            <option value={n}>
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
      <textarea cols="30" rows="8" name="message" />
    </label>

    <button class="btn-conversion title">Request Now</button>
  </form>
</section>
