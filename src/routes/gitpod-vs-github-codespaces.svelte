<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "../components/open-graph.svelte";
</script>

<style>
  .featureTable + p {
    margin: auto;
    max-width: 60%;
  }
  .featureTable > * > * {
    grid-auto-rows: 3rem;
  }
  .featureTable .toc li {
    font-weight: 700;
    margin-bottom: 1rem;
    padding-left: 2.175rem;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .featureTable .card {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  .featureTable .card-heading {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .featureTable .toc img {
    width: 24px;
  }
  .featureTable [aria-label] {
    min-height: 1.5rem;
    min-width: 1.5rem;
  }
  .ticklist > li {
    display: flex;
    align-items: flex-start;
  }
  .ticklist > li > img {
    width: 24px;
    margin-right: 1rem;
  }
  .max-w-30rem {
    max-width: 30rem;
  }
  .mt-1rem {
    margin-top: 1rem;
  }
  .mt-2rem {
    margin-top: 2rem;
  }
  .mb-7rem {
    margin-bottom: 7rem;
  }
  .mr-1rem {
    margin-right: 1rem;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .p-4rem {
    padding: 4rem;
  }
  .card-image-legend {
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 12px;
    align-self: stretch;
  }
  .halfimages .card,
  .cards {
    justify-content: space-between;
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
    border-radius: 2rem;
  }
  .halfimages article > div {
    min-width: 300px;
  }
  @media (max-width: 768px) {
    .halfimages .card,
    .cards {
      max-width: 98vw;
    }
    .halfimages article > div:last-child,
    .cards > div:last-child {
      margin-top: 3rem;
    }
    .cards.double > div {
      min-width: 100%;
    }
  }
  .halfimages article > div,
  .cards > * {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .inline-block {
    display: inline-block;
  }
  .text-center {
    text-align: center;
  }
  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  .leading-3 {
    line-height: 0.75rem;
  }
</style>

<OpenGraph
  data={{
    description:
      "Gitpod is the faster, more powerful, open-source platform that integrates with your individual stack.",
    title: "Gitpod vs GitHub Codespaces",
  }}
/>
<header>
  <h1>Gitpod vs GitHub Codespaces</h1>
  <p>
    Gitpod is the faster, more powerful, open-source platform that integrates
    with your individual stack.
  </p>
</header>

<div class="halfimages">
  <article class="card">
    <div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src="/images/codespace/spaces-1.svg" role="presentation" />
      <p class="card-image-legend">
        Compared start-up time until ready-to-code for<br /><a
          href="https://github.com/gitpod-io/vscode"
          on:click={() =>
            window.analytics.track("external_resource_clicked", {
              name: "vscode-repo",
              url: "https://github.com/gitpod-io/vscode",
              context: "body",
            })}><strong>https://github.com/gitpod-io/vscode</strong></a
        >. Last verified 25 Sep 2020.
      </p>
    </div>
    <div>
      <h2 class="max-w-30rem">Ready in a flash</h2>
      <p class="text-large max-w-30rem flex-grow">
        Gitpod removes long init and build times by continuously pre-building
        workspaces for your project. Thereby it allows you to start coding or
        debugging immediately, from any context, at any time.
      </p>
      <a href="/blog/continuous-dev-environment-in-devops" class="btn-secondary"
        >More about Continuous Dev Environments.</a
      >
    </div>
  </article>

  <article class="card">
    <div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="/images/codespace/spaces-2.svg"
        role="presentation"
        width="550"
        height="414"
      />
      <p class="card-image-legend">
        Compared resources for 100 active hours at $9/month. Last verified 25
        Sep 2020.<br />Sources: <a href="/pricing"><strong>Gitpod</strong></a>,
        <a
          href="https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/about-billing-for-codespaces"
          on:click={() =>
            window.analytics.track("external_resource_clicked", {
              name: "codespaces-resources",
              url:
                "https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/about-billing-for-codespaces",
              context: "body",
            })}><strong>GitHub Codespaces</strong></a
        >.
      </p>
    </div>
    <div>
      <h2 class="max-w-30rem">3x more power</h2>
      <p class="text-large max-w-30rem">
        By leveraging cloud technologies like containers and Kubernetes, Gitpod
        achieves best-in-class resource-efficiency with scalable workspaces
        running on shared high-powered cloud servers.
      </p>
    </div>
  </article>
</div>

<div class="featureTable">
  <section class="card toc">
    <ul class="tableOfContents" role="presentation">
      <li>Pricing (Hosted)</li>
      <li>License</li>
      <li class="hasIcon">
        <img src="/svg/github.svg" alt="GitHub" width="24" /> GitHub Integration
      </li>

      <li class="hasIcon">
        <img src="/svg/gitlab.svg" alt="GitLab" width="24" />GitLab Integration
      </li>

      <li class="hasIcon">
        <img src="/svg/bitbucket.svg" alt="Bitbucket" width="24" /> Bitbucket Integration
      </li>

      <li class="hasIcon">
        <img src="/svg/brands/gcp.svg" alt="Google Cloud Platform" width="24" />
        Self-Host on GCP
      </li>

      <li class="hasIcon">
        <img
          src="/svg/brands/aws.svg"
          alt="Amazon Web Services"
          width="24"
        />Self-Host on AWS
      </li>
      <li class="hasIcon">
        <img
          src="/svg/brands/kubernetes.svg"
          alt="Kubernetes"
          width="24"
        />Self-Host on Kubernetes
      </li>
      <li>Prebuilds</li>
      <li>Snapshots</li>
      <li>VS Code Extensions</li>
      <li>iPad Support</li>
      <li>Virtual Desktop (VNC)</li>
      <li>Multi-IDE Support</li>
    </ul>
  </section>
  <section class="card alive text-center">
    <h2 class="card-heading">
      <img alt="Gitpod" src="/images/gitpod-logo.svg" width="40" height="36" />
    </h2>
    <dl id="gitpodPricing" class="tableColumn">
      <dt>Pricing (Hosted)</dt>
      <dd>Free for Open-Source</dd>
      <dt>License</dt>
      <dd>Open Source</dd>
      <dt>GitHub Integration</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>GitLab Integration</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Bitbucket Integration</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Self-Host on GCP</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Self-Host on AWS</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Self-Host on Kubernetes</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Prebuilds</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Snapshots</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>VS Code Extensions</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>iPad Support</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Virtual Desktop (VNC)</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Multi-IDE Support</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
    </dl>
  </section>
  <section class="card text-center">
    <h2 class="text-xl card-heading h4">GitHub<br />Codespaces</h2>
    <dl>
      <dt>Pricing (Hosted)</dt>
      <dd>
        <span aria-label="unknown" class="icon">$$$</span>
      </dd>
      <dt>License</dt>
      <dd>Proprietary</dd>
      <dt>GitHub Integration</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>GitLab Integration</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Bitbucket Integration</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Self-Host on GCP</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Self-Host on AWS</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Self-Host on Kubernetes</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Prebuilds</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Snapshots</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>VS Code Extensions</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>iPad Support</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Virtual Desktop (VNC)</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Multi-IDE Support</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
    </dl>
  </section>
</div>
<p>
  <small
    >Disclaimer: All information, prices, and data were last verified on Sept.
    25, 2020. To report any incorrect or outdated information, please <a
      href="/contact">contact us.</a
    ></small
  >
</p>

<div class="brief">
  <h2>Ready to feel the difference?</h2>
  <p class="text-large">
    Spin up an example workspace now, just link your git provider
  </p>
  <p>
    <a href="/#get-started" class="btn-conversion mt-2rem">Try Now</a>
  </p>
</div>

<div class="halfimages">
  <article class="card">
    <div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="/images/codespace/spaces-3.svg"
        role="presentation"
        width="550"
      />
    </div>
    <div>
      <h2>Open-Source</h2>
      <p class="text-large">
        Gitpod puts developers' interest first and thereby guarantees full
        transparency and flexibility. Integrate, don't dictate.
      </p>
      <ul class="text-large ticklist">
        <li>
          <img alt="✓" src="/tick.svg" />
          <span
            >Host Gitpod yourself on GCP, AWS, Azure or self-managed Kubernetes</span
          >
        </li>
        <li>
          <img alt="✓" src="/tick.svg" />
          <span>Contribute to Gitpod and build customizations yourself</span>
        </li>
        <li>
          <img alt="✓" src="/tick.svg" />
          <span>Works just as smoothly with GitHub, GitLab and Bitbucket</span>
        </li>
      </ul>
    </div>
  </article>
</div>

<div class="cards double mt-1rem mb-7rem">
  <div class="card p-4rem">
    <h2 class="h3">Automation-first</h2>
    <p class="flex-grow">
      Simply add your build command into a .gitpod.yml file and let Gitpod do
      the heavy-lifting. Once you’ve experienced the freedom of ephemeral
      workspaces, you’ll never want to go back to long-lived,
      manually-maintained environments.
    </p>
    <p>
      <a href="/#get-started" class="btn-primary">Try Now</a>
    </p>
  </div>
  <div class="card p-4rem">
    <h2 class="h3">Code in a carbon-neutral workspace</h2>
    <p class="flex-grow">
      Not only is Gitpod more resource-efficient but it also runs on 100%
      carbon-neutral cloud servers (GCP). All the power, with a lower cost to
      our planet.
    </p>
    <p>
      <a
        href="https://cloud.google.com/sustainability"
        on:click={() =>
          window.analytics.track("external_resource_clicked", {
            name: "gcp-sustainability",
            url: "https://cloud.google.com/sustainability",
            context: "body",
          })}
        class="btn-green"
        target="_blank"
        rel="noopener">More on GCP carbon neutral</a
      >
    </p>
  </div>
</div>
