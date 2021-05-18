<script>
</script>

<style>
  .title:not(:first-child) {
    margin-top: var(--medium);
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

    <div>
      <input id="seats" type="number" placeholder="Seats" name="seats" />
      Order Total: 0
    </div>
    <!-- <div>x {isEurope ? `${yearlyPricesPerSeat.eur}€` : `${yearlyPricesPerSeat.usd}`} per user yearly</div> -->

    <label class="title" for="domain">
      <h2 class="h4">
        What is the domain name of your Gitpod Self-Hosted installation?
      </h2>
    </label>
    <input type="text" id="domain" placeholder="e.g. gitpod.mycompany.com" />

    <p>The license key will be bound to this domain.</p>

    <h2 class="h4 title">Customer Information</h2>

    <label>
      First Name
      <input name="firstName" type="text" />
    </label>
    <label>
      Last Name
      <input name="lastName" type="text" />
    </label>
    <label>
      Work Email
      <input type="email" name="email" />
    </label>
    <label>
      Company
      <input name="company" type="text" />
    </label>
    <label>
      Street Address
      <input name="address" type="text" />
    </label>
    <label>
      Postal Code
      <input name="postalCode" type="text" />
    </label>
    <label>
      City
      <input name="city" type="text" />
    </label>

    <h2 class="h4 title">Other</h2>
    <label>
      <p>
        Add personal message <span>(optional)</span>
      </p>
      <textarea name="message" />
    </label>

    <button class="btn-conversion title">Request Now</button>
  </form>
</section>
