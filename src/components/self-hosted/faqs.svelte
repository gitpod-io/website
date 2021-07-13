<script lang="ts">
  import Section from "../section.svelte";
  import Faqs from "../faqs/faqs.svelte";
  import Faq from "../faqs/faq.svelte";

  export let trackingContext: String;
</script>

<style lang="scss">
  h2 {
    text-align: center;
  }
</style>

<Section>
  <Faqs>
    <h2 class="h1">FAQs</h2>
    <Faq title="Can I create a team account?" {trackingContext}>
      <p>
        Of course! You can use Gitpod Self-Hosted on your own infrastructure for
        free for unlimited users. If you'd like to access additional features
        like unlimited prebuilds, shared workspaces, snapshots and an admin
        dashboard, you can upgrade to the Professional Plan at any time. Simply
        update your existing instance with a purchased license key. Self-hosted
        Gitpod licenses can currently only be purchased by request. Please
        request a license key <a href="/enterprise-license">here</a> or
        <a href="/contact">Get in touch</a> if you have any questions.
      </p>
    </Faq>
    <Faq title="Can I add more users to my plan at any time?" {trackingContext}>
      <p>
        Yes, you can add as many users as you like to your plan at any time.
      </p>
    </Faq>
    <Faq
      title="What is the difference between SaaS and Self-Hosted?"
      {trackingContext}
    >
      <p>
        If you choose <strong>Gitpod SaaS</strong>, we will manage and host
        Gitpod in the cloud for you. This means minimal setup efforts for you
        and secure data storage in the cloud. Gitpod SaaS is be the best
        solution for teams who want to get started immediately and don’t want to
        spend time on setup and operations.
      </p>
      <p>
        If you choose <strong>Gitpod Self-Hosted</strong>, you will manage and
        host Gitpod on your own instances. This means all data remains your
        infrastructure, as Gitpod can run behind corporate firewalls and on
        air-gapped networks. <strong>Gitpod Self-Hosted</strong> is the best solution
        for teams who want to keep full data control or use Gitpod in private networks.
      </p>
    </Faq>
    <Faq title="How can I install Self-Hosted?" {trackingContext}>
      <p>
        You can either install <strong>Gitpod Self-Hosted</strong> on
        <strong>Google Cloud Platform</strong> or on
        <strong>K3s</strong>. See
        <a href="/docs/self-hosted/latest/self-hosted"
          >Self-Hosted Installation</a
        > for more information.
      </p>
    </Faq>
    <Faq title="How can I pay?" {trackingContext}>
      <p>
        Currently, <strong>Gitpod Self-Hosted</strong> can only be purchased on
        request. Please request a license key
        <a href="/enterprise-license">here</a>
        and we'll contact you. If you have any questions, please
        <a href="/contact">Get in touch</a>. All our plans can be paid via
        invoice.
      </p>
    </Faq>
    <Faq
      title="Do you offer discounts for educational institutions?"
      {trackingContext}
    >
      <p>
        Yes, qualified educational institutions may receive a special discount.
        Please <a href="/contact">Contact sales</a>.
      </p>
    </Faq>
    <Faq title="Still have more questions?" {trackingContext}>
      <p>
        We are happy to answer them, please <a href="/contact">Get in Touch</a>.
      </p>
    </Faq>
  </Faqs>
</Section>
