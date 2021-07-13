<script lang="ts">
  import { isEurope } from "../../utils/helper";
  import Section from "../section.svelte";
  import Faqs from "../faqs/faqs.svelte";
  import Faq from "../faqs/faq.svelte";

  export let trackingContext: String;
</script>

<style lang="scss">
  h2 {
    text-align: center;
  }

  .images {
    display: flex;
    margin-top: var(--xx-small);

    & > *:not(:last-child) {
      margin-right: var(--xx-small);
    }
  }
</style>

<Section>
  <Faqs>
    <h2 class="h1">FAQs</h2>
    <Faq title="Can I always use Gitpod for free?" {trackingContext}>
      <p>
        Yes! Gitpod is always for free for public repositories for up to 50h per
        month. If you need more hours or would like to unlock more features, you
        can upgrade your subscription at any time. If you’re a professional
        open-source developer and need more hours, you can apply to our free <a
          href="/docs/professional-open-source">Professional Open Source plan</a
        >.
      </p>
    </Faq>
    <Faq
      title="Do you offer discounts for students and educational institutions?"
      {trackingContext}
    >
      <p>
        Yes, qualified educational institutions may receive a special discount.
        Please
        <a href="/contact">Contact us</a>. If you are a student, you may use the
        Student Unlimited Plan for {isEurope() ? "€8" : "$9"} per month (usually{" "}
        {isEurope() ? "€35" : "$39"}). See
        <a href="#plans">Gitpod for Students</a> for more information.
      </p>
    </Faq>
    <Faq title="How can I pay?" {trackingContext}>
      <p>All our plans can only be paid via credit card.</p>
      <div class="images">
        <img
          src="/svg/brands/mastercard.svg"
          alt="Mastercard"
          width="52"
          height="40"
        />
        <img src="/svg/brands/visa.svg" alt="Visa" width="72" height="40" />
      </div>
    </Faq>
    <Faq title="Can I create a team account?" {trackingContext}>
      <p>
        Sure, if you would like to mange subscriptions for a whole team on a
        single invoice, you can create a{" "}
        <a href="https://gitpod.io/teams/">team subscription.</a>
      </p>
      <p>
        In case you need more information on how to setup a team subscription,
        visit{" "}
        <a href="/docs/teams">gitpod.io/docs/teams.</a>
      </p>
    </Faq>
    <Faq title="Can I change my subscription at any time?" {trackingContext}>
      <p>
        Yes, you can upgrade or downgrade whenever you want on <a
          href="https://gitpod.io/subscription/">gitpod.io/subscription</a
        >. Your billing cycle starts with the creation date of your
        subscription. After 30 days it will automatically renew itself.
      </p>
      <p>
        If you choose to upgrade, the pricing difference will be added to your
        next month’s invoice. If you choose to downgrade, you’ll be credited on
        your next month’s invoice.
      </p>
    </Faq>
    <Faq title="What if I decide to cancel?" {trackingContext}>
      <p>
        If you wish to stop using Gitpod, you may cancel your subscription at
        any time. Your cancellation will take into effect after that month’s
        billing cycle.
      </p>
    </Faq>
    <Faq title="Still have more questions?" {trackingContext}>
      <p>
        We are happy to answer them, please <a href="/contact">Get in Touch</a>.
      </p>
    </Faq>
  </Faqs>
</Section>
