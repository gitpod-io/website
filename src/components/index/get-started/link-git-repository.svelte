<style lang="scss">
  .buttons {
    display: inline-flex;
    flex-direction: column;
    margin: var(--large) 0;

    .btn {
      display: flex;
      padding: var(--macro) var(--x-small);
      border-radius: 0.75rem;
      color: var(--white);
      border: 1px solid transparent;
      place-items: center;
      transition: all 0.2s;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.9;
      }

      &:not(:last-child) {
        margin-bottom: var(--micro);
      }

      &--github {
        background: #000000;

        &:hover,
        &:focus,
        &:active {
          opacity: 1;
          background: var(--black-hover);
        }
      }

      &--bitbucket {
        background: #2684ff;
      }

      &--gitlab {
        background: #fc6d26;
      }
    }

    svg {
      height: 1.75rem;
      width: 1.75rem;
      margin-right: var(--micro);
    }
  }

  /* .link--light-grey {
    display: inline-block;
    margin-top: var(--micro);
    font-size: var(--h6);
  } */

  .prefix {
    display: inline-block;
    padding: 0 var(--micro);
    margin-top: var(--macro);
    background: var(--brand-light);
    border-radius: 0.75rem;
  }
</style>

<h3>Connect Git repository</h3>
<p class="text-large">
  Select a Git provider to start with an existing project from any Git context.
</p>
<div class="buttons">
  <a
    href="https://gitpod.io/login"
    on:click={() =>
      window.analytics.track("dashboard_clicked", {
        context: "continue_gitlab",
      })}
    class="btn btn--gitlab"
  >
    <svg viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Bitbucket</title>
      <path
        d="M14.583 27.214L9.21 10.954h10.738l-5.365 16.26z"
        fill="#fff"
      /><path
        d="M27.476 10.954l1.637 4.94c.148.449-.012.944-.403 1.223L14.584 27.214l12.892-16.26z"
        fill="#fff"
        fill-opacity=".65"
      /><path
        d="M27.476 10.954h-7.527l3.24-9.793c.165-.5.888-.5 1.06 0l3.227 9.793z"
        fill="#fff"
      /><path
        d="M1.685 10.954l-1.63 4.94c-.148.449.012.944.403 1.223l14.127 10.097-12.9-16.26z"
        fill="#fff"
        fill-opacity=".65"
      /><path
        d="M1.685 10.954H9.21L5.978 1.161c-.166-.5-.888-.5-1.06 0l-3.233 9.793z"
        fill="#fff"
      /><path
        d="M14.585 27.214l-5.373-16.26H1.685l12.9 16.26z"
        fill="#fff"
        fill-opacity=".85"
      /><path
        d="M14.584 27.214l12.892-16.26h-7.527l-5.365 16.26z"
        fill="#fff"
        fill-opacity=".85"
      /></svg
    >
    Continue with GitLab
  </a>
  <a
    href="https://gitpod.io/login"
    on:click={() =>
      window.analytics.track("dashboard_clicked", {
        context: "continue_github",
      })}
    class="btn btn--github"
  >
    <svg viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>GitHub Octocat</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.57.5a14.374 14.374 0 00-9.442 3.54 14.947 14.947 0 00-4.94 8.946A15.133 15.133 0 002.106 23.07a14.615 14.615 0 007.862 6.406c.733.137.992-.329.992-.721v-2.528c-4.065.903-4.923-1.999-4.923-1.999a3.97 3.97 0 00-1.617-2.181c-1.314-.913.107-.913.107-.913.46.067.9.24 1.285.505.386.265.707.617.94 1.029.197.366.464.688.784.949a3.047 3.047 0 003.45.292c.057-.751.374-1.457.894-1.99-3.234-.374-6.63-1.652-6.63-7.3a5.82 5.82 0 011.493-3.989 5.529 5.529 0 01.143-3.933s1.224-.402 4.002 1.524a13.49 13.49 0 017.291 0c2.779-1.926 3.994-1.524 3.994-1.524.536 1.233.6 2.627.179 3.906a5.82 5.82 0 011.492 3.988c0 5.713-3.404 6.963-6.648 7.3.348.358.617.787.788 1.26.17.472.24.976.204 1.479v4.079c0 .484.26.858 1 .712a14.623 14.623 0 007.752-6.43 15.134 15.134 0 001.87-10.019 14.949 14.949 0 00-4.89-8.892A14.377 14.377 0 0014.57.5z"
        fill="#F9F9F9"
      />
    </svg>
    Continue with GitHub
  </a>
  <a
    href="https://gitpod.io/login"
    on:click={() =>
      window.analytics.track("dashboard_clicked", {
        context: "continue_bitbucket",
      })}
    class="btn btn--bitbucket"
  >
    <svg viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Bitbucket</title>
      <path
        d="M.848.25h-.01a.841.841 0 00-.827.971L3.565 22.8c.091.543.563.945 1.114.95h17.053a.84.84 0 00.837-.703l3.554-21.822a.841.841 0 00-.826-.971h-.011L.848.25zm14.968 15.595h-5.443L8.899 8.146h8.236l-1.32 7.7z"
        fill="#fff"
      />
    </svg>
    Continue with Bitbucket
  </a>
  <!-- <a href="#" class="link--light-grey">Third-party providers ↗</a> -->
</div>
<p class="text-large">
  Or prefix any GitLab, GitHub or Bitbucket URL with
  <br />
  <span class="prefix"> gitpod.io/# </span>
</p>
