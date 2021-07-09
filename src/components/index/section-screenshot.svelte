<script>
  import Section from "../section.svelte";

  const buttons = [
    {
      name: "chrome-extension",
      icon: "svg/browsers/chrome.svg",
      text: "Chrome Extension",
      href:
        "https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki",
    },
    {
      name: "firefox-extension",
      icon: "svg/browsers/firefox.svg",
      text: "Firefox Extension",
      href: "https://addons.mozilla.org/firefox/addon/gitpod/",
    },
  ];
</script>

<style lang="scss">
  .screenshot {
    display: block;
    margin: 0 auto;
    margin-bottom: -48px;
    margin: 2rem auto;
    border-radius: 0.875rem;

    @media (max-width: 768px) {
      margin-bottom: -20px;
      border-radius: 0.25rem;
    }
  }

  .content {
    text-align: center;
    max-width: 900px;
    margin: auto;

    p {
      margin: var(--small) 0;
    }
  }

  .btn-otherbrand {
    @media (max-width: 429px) {
      width: 12rem;
    }
  }
</style>

<Section>
  <div class="row">
    <h2 class="mb-small text-center text-h2">
      Remote-first. Secure by design.
    </h2>
    <img
      class="screenshot shadow-brand"
      src="/images/gitpod-editor.jpg"
      alt="Gitpod"
      height="819"
      width="1269"
    />
    <div class="content">
      <p class="text-large">
        You no longer need an over-powered laptop to code, Gitpod works just as
        smoothly on a Chromebook or iPad. All you need is a browser. Gitpod
        centralizes all source code and never stores it on insecure machines and
        networks.
      </p>
      <div class="buttons-wrapper">
        {#each buttons as { name, href, icon, text }}
          <a
            {href}
            target="_blank"
            on:click={() =>
              window.analytics.track("feature_clicked", {
                type: name,
                url: href,
              })}
            rel="noopener"
            class="btn-otherbrand text-medium"
          >
            <img src={`/${icon}`} alt={text} width="24" height="24" />
            {text}
          </a>
        {/each}
      </div>
    </div>
  </div>
</Section>
