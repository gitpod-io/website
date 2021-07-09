<script lang="ts">
  import { onMount } from "svelte";

  let githubStarsEl: HTMLAnchorElement;

  onMount(async () => {
    const githubButtons = await import("github-buttons");
    githubButtons.render(githubStarsEl, (el) => {
      githubStarsEl.parentNode.replaceChild(el, githubStarsEl);
    });
  });
</script>

<style lang="scss">
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--x-small);

    @media (max-width: 647px) {
      flex-direction: column;
      max-width: 450px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 375px) {
      margin-top: var(--x-small);
    }

    &__text {
      max-width: 560px;
      flex: 0 0 45%;

      @media (max-width: 972px) {
        flex: 0 0 50%;
      }

      @media (max-width: 698px) {
        flex: 0 0 54%;
      }
    }

    &__intro-text {
      margin-top: -16px;

      @media (max-width: 972px) {
        font-size: var(--p-medium);
      }
    }

    &__action {
      margin-top: var(--small);
      align-items: end;
      @media (max-width: 972px) {
        margin-top: var(--xx-small);
      }

      & > * {
        display: grid;
        grid-template-columns: 160px 100%;
        gap: var(--xx-small);

        @media (max-width: 1140px) {
          display: flex;
          gap: initial;

          & > * {
            &:not(:last-child) {
              margin-right: var(--micro);
            }
          }
        }
      }
    }

    &__try-now {
      margin-bottom: var(--micro);

      @media (max-width: 972px) {
        p {
          font-size: var(--btn-small);
        }
      }

      @media (max-width: 360px) {
        br {
          display: none;
        }
      }
    }

    &__icons {
      display: flex;
      justify-content: space-between;
      width: 120px;
      padding: 0 var(--macro);

      @media (min-width: 1141px) {
        width: 160px;
      }

      @media (max-width: 768px) {
        width: 145px;
      }

      img {
        height: 29px;
        width: 29px;

        @media (max-width: 1140px) {
          height: 27px;
          width: 27px;
        }
      }
    }

    &__stars {
      height: 2rem;
    }

    &__illustration {
      max-width: 700px;
      padding-left: 70px;
      padding-top: 20px;
      flex: 1;

      @media (max-width: 972px) {
        margin-top: var(--micro);
        padding: 0;
      }
    }
  }
</style>

<div class="hero">
  <div class="hero__text">
    <h1 class="homeh1">
      Always<br /> Ready to Code.
    </h1>
    <p id="choose-project-observer-target" class="hero__intro-text text-large">
      Spin up fresh, automated dev environments<br />
      for each task, in the cloud, in seconds.
    </p>
    <div class="hero__action">
      <div class="hero__try-now text-small">
        <div>
          <a
            href="#get-started"
            on:click={() =>
              window.analytics.track("product_cta_clicked", {
                context: "hero",
                destination: "#get-started",
              })}
            class="btn-conversion">Try Now</a
          >
        </div>
        <p>
          Open a workspace.
          <br />
          Start from any Git context.
        </p>
      </div>
      <div>
        <div class="hero__icons">
          <img src="/svg/gitlab.svg" alt="GitLab logo" width="30" height="30" />
          <img src="/svg/github.svg" alt="GitHub logo" width="30" height="30" />
          <img
            src="/svg/bitbucket.svg"
            alt="Bitbucket logo"
            width="30"
            height="30"
          />
        </div>
        <div class="hero__stars">
          <a
            bind:this={githubStarsEl}
            class="github-button"
            href="https://github.com/gitpod-io/gitpod"
            on:click={() =>
              window.analytics.track("social_opened", {
                platform: "github",
                context: "hero",
              })}
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star the Gitpod Repo on GitHub">Star</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="hero__illustration">
    <img
      src="/images/illustration-large.jpg"
      alt="Gitpod in a Nutshell"
      width="700"
      height="724"
    />
  </div>
</div>
