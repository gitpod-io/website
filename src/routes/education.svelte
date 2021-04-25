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

<style type="scss">
  h2 {
    text-align: center;
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
<!--
<section>
  <h2>Education pricing</h2>
  <p>
    You have the choice to either host Gitpod yourself or to use our cloud
    infrastructure.
  </p>
  <div id="edPricingTable">
    < !-- TODO: Pricing table. What's the best approach to support the hover effect per row and style individual colums as cards? -- >
  </div>
</section>
-->
<Explore />
