<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import type {
    EducationFeature,
    EducationPricing,
  } from "../types/education.type";
  import Feature from "../components/education/feature.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import Explore from "../components/explore.svelte";
  import Section from "../components/section.svelte";

  const features: EducationFeature[] = [
    {
      title: "Exams & Exercises",
      description: `<strong>Teachers</strong> can prepare fully working and readily compiled projects, put them into a certain state and take a snapshot. <strong>Students</strong> starting a workspace from that snapshot get their own clone to solve the excercise. When finished, a student takes another immutable <strong>snapshot and sends it back</strong> to the teacher.`,
    },
    {
      title: "Live Tutoring",
      description: `Gitpod <strong>helps teachers collaborate with students</strong>. Teachers can easily join a student's development session. There teachers can observe and help the student.`,
    },
    {
      title: "Any device",
      description: `Gitpod simplifies the onboarding process, <strong>makes coding accessible from any device</strong>, and provides a productive learning environment. With Gitpod <strong>your students don't need expensive hardware</strong>: Chromebooks or Raspberry Pis are enough`,
    },
    {
      title: "Easy Install",
      description: `All Gitpod needs is a <strong>Kubernetes cluster</strong>. It can integrate and authenticate users with your <strong>GitHub Enterprise, GitLab, or Bitbucket</strong> instance. Gitpod provides your institution a development environment <strong>where your exercises just work</strong>. No need to waste time providing technical support for your students.`,
    },
  ];

  const pricingFeatureLabels = {
    pricing: "Pricing",
    domain: "Domain",
    managedBy: "Managed By",
    infrastructure: "Infrastructure",
    sla: "SLA",
    support: "Support",
    githubcom: "Github.com", // TODO: Figure out how to display the icon
    githubenterprise: "GitHub Enterprise",
    gitlabcom: "Gitlab.com",
    gitlabselfmanaged: "Gitlab Self-Managed",
    bitbucket: "Bitbucket",
    customauth: "Custom Authentication",
    custombranding: "Custom Branding",
  };

  const pricing: EducationPricing[] = [
    {
      title: "Gitpod.io",
      features: [
        {
          pricing: "",
          domain: "gitpod.io",
          managedBy: "Gitpod",
          infrastructure: "Globally distributed",
          sla: "Optional",
          support: true,
          githubcom: true,
          githubenterprise: "Public only",
          gitlabcom: true,
          gitlabselfmanaged: "Public only",
          bitbucket: true,
          customauth: false,
          custombranding: false,
        },
      ],
      btnText: "Try now",
      btnHref: "",
      btnNote: "Free 14 days trial included",
    },
    {
      title: "Managed",
      features: [
        {
          pricing: "Please enquire",
          domain: "Custom",
          managedBy: "Gitpod",
          infrastructure: "> 1 geographical regions",
          sla: "Optional",
          support: true,
          githubcom: true,
          githubenterprise: true,
          gitlabcom: true,
          gitlabselfmanaged: true,
          bitbucket: true,
          customauth: "OAuth2",
          custombranding: true,
        },
      ],
      btnText: "Contact sales",
      btnHref: "",
    },
    {
      title: "Self-Hosted",
      features: [
        {
          pricing: "",
          domain: "Custom",
          managedBy: "You",
          infrastructure: "On-prem or private cloud",
          sla: false,
          support: true,
          githubcom: true,
          githubenterprise: true,
          gitlabcom: true,
          gitlabselfmanaged: true,
          bitbucket: true,
          customauth: "OAuth2",
          custombranding: true,
        },
      ],
      btnText: "Host yourself",
      btnHref: "",
    },
  ];
</script>

<style type="text/postcss">
  h2 {
    @apply text-center;
  }

  @media (max-width: 960px) {
    .featureTable {
      @apply block;
    }
    .featureTable .toc {
      @apply hidden;
    }
    .featureTable .card {
      @apply m-auto my-x-small max-w-sm;
    }
    .featureTable dt {
      font-size: smaller;
      @apply font-bold;
    }
    .featureTable dd {
      @apply mb-x-small text-light-grey;
      font-size: larger;
    }

    @media (min-width: 961px) {
      .featureTable {
        @apply grid-cols-4;
      }

      .featureTable .card {
        @apply p-micro;
      }
    }
  }

  .col-header {
    @apply pt-micro flex-col justify-start h-48 !important;
  }

  .col-header a {
    @apply my-macro;
  }
</style>

<OpenGraph
  data={{
    description:
      "Gitpod simplifies the onboarding process, makes coding accessible from anywhere, and provides a productive learning environment.",
    title: "Education",
  }}
/>
<header>
  <h1>Focus on teaching code, not tedious setups!</h1>
  <p>
    Gitpod simplifies the onboarding process, makes coding accessible from any
    device, and provides a productive learning environment.
  </p>
  <!--<p>
    <a href="#edPricingTable" class="btn-conversion">Choose an option</a
    >
  </p>-->
</header>

<section class="features">
  <h2>For Schools, Universities, and Coding Bootcamps</h2>

  {#each features as feature}
    <Feature {feature} />
  {/each}
</section>

<Section>
  <h2>Education pricing</h2>
  <p class="text-large text-center">
    You have the choice to either host Gitpod yourself or to use our cloud
    infrastructure.
  </p>
  <div id="edPricingTable" class="featureTable">
    <section class="card toc">
      <ul class="tableOfContents" role="presentation">
        <li>Pricing</li>
        <li>Domain</li>
        <li>Managed by</li>
        <li>Infrastructure</li>
        <li>SLA</li>
        <li>Support</li>
        <li class="hasIcon">
          <img src="/svg/github.svg" alt="GitHub" width="24" /> github.com
        </li>

        <li class="hasIcon">
          <img src="/svg/github.svg" alt="GitHub" width="24" /> GitHub Enterprise
        </li>

        <li class="hasIcon">
          <img src="/svg/gitlab.svg" alt="GitLab" width="24" /> gitlab.com
        </li>

        <li class="hasIcon">
          <img src="/svg/gitlab.svg" alt="GitLab" width="24" /> GitLab Self-Managed
        </li>

        <li class="hasIcon">
          <img src="/svg/bitbucket.svg" alt="Bitbucket" width="24" /> Bitbucket
        </li>

        <li>Custom Authentication</li>
        <li>Custom Branding</li>
      </ul>
    </section>

    <section class="card text-center">
      <div class="card-heading col-header">
        <h3>Gitpod.io</h3>
        <a class="btn-conversion" href="/#get-started">Try Now</a>
        <p class="text-small">Free 14 days trial included</p>
      </div>
      <dl id="gitpodPricing" class="tableColumn">
        <dt>Pricing</dt>
        <dd>€8 / user / month</dd>
        <dt>Domain</dt>
        <dd>gitpod.io</dd>
        <dt>Managed by</dt>
        <dd>Gitpod</dd>
        <dt>Infrastructure</dt>
        <dd>Globally distributed</dd>
        <dt>SLA</dt>
        <dd>Optional</dd>
        <dt>Support</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>github.com</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>GitHub Enterprise</dt>
        <dd>Public only</dd>
        <dt>gitlab.com</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>GitLab Self-Managed</dt>
        <dd>Public only</dd>
        <dt>Bitbucket</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Custom Authentication</dt>
        <dd>—</dd>
        <dt>Custom Branding</dt>
        <dd>—</dd>
      </dl>
    </section>

    <section class="card text-center">
      <div class="card-heading col-header">
        <h3>Managed</h3>
        <a class="btn-conversion" href="/contact">Contact sales</a>
      </div>
      <dl id="gitpodPricing" class="tableColumn">
        <dt>Pricing</dt>
        <dd>Please enquire</dd>
        <dt>Domain</dt>
        <dd>Custom</dd>
        <dt>Managed by</dt>
        <dd>Gitpod</dd>
        <dt>Infrastructure</dt>
        <dd>> 1 geographical regions</dd>
        <dt>SLA</dt>
        <dd>Optional</dd>
        <dt>Support</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>github.com</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>GitHub Enterprise</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>gitlab.com</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>GitLab Self-Managed</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Bitbucket</dt>
        <dd>Soon</dd>
        <dt>Custom Authentication</dt>
        <dd>OAuth2</dd>
        <dt>Custom Branding</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
      </dl>
    </section>

    <section class="card text-center">
      <div class="card-heading col-header">
        <h3>Self-Hosted</h3>
        <a class="btn-conversion" href="/self-hosted">Host yourself</a>
      </div>
      <dl id="gitpodPricing" class="tableColumn">
        <dt>Pricing</dt>
        <dd>€0,9 / user / month</dd>
        <dt>Domain</dt>
        <dd>Custom</dd>
        <dt>Managed by</dt>
        <dd>You</dd>
        <dt>Infrastructure</dt>
        <dd>On-prem or private cloud</dd>
        <dt>SLA</dt>
        <dd>—</dd>
        <dt>Support</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>github.com</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>GitHub Enterprise</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>gitlab.com</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>GitLab Self-Managed</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
        <dt>Bitbucket</dt>
        <dd>Soon</dd>
        <dt>Custom Authentication</dt>
        <dd>OAuth2</dd>
        <dt>Custom Branding</dt>
        <dd>
          <img
            alt="Yes"
            class="mx-auto"
            height="24"
            width="24"
            src="/tick.svg"
          />
        </dd>
      </dl>
    </section>
  </div>
</Section>

<Explore />
