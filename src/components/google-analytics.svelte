<script>
  // This component is taken from https://angelblanco.dev/articles/add-gtag-analytics-to-sapper/ and adjusted to meet Gitpod requirements.
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";

  // Pass or harcode your google analytics tracking id
  export let trackingId = "UA-71727855-2";
  export let scriptId = "google-analytics-script";
  export let domain = "https://www.googletagmanager.com";

  let mounted = false;
  const { page } = stores();
  const gtagOptions = {
    anonymizeIp: true,
  };

  const isDoNotTrack = () =>
    typeof navigator !== "undefined" &&
    (parseInt(navigator.doNotTrack) === 1 ||
      parseInt(window.doNotTrack) === 1 ||
      parseInt(navigator.msDoNotTrack) === 1 ||
      navigator.doNotTrack === "yes");
  const isProd = () =>
    typeof window !== "undefined" &&
    window.location.hostname === "www.gitpod.io";

  // Adding google tag manager will fail for example if the user is running
  // and ad blocker. This Promise can handle that case.
  async function addGoogleAnalyticsScript(dataLayerName = "dataLayer") {
    return new Promise((resolve, reject) => {
      const head = document.head || document.getElementsByTagName("head")[0];

      const link = document.createElement("link");
      link.href = domain;
      link.rel = "preconnect";
      head.appendChild(link);

      const script = document.createElement("script");
      script.async = true;
      script.src = `${domain}/gtag/js?id=${trackingId}&l=${dataLayerName}`;
      script.setAttribute("id", scriptId);

      head.appendChild(script);

      script.onload = resolve;
      script.onerror = reject;
    });
  }

  onMount(async () => {
    if (!isProd()) {
      return;
    }

    if (isDoNotTrack()) {
      return;
    }

    // We add the script only once even when the component rendered twice.
    if (window.document.getElementById(scriptId)) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", trackingId, gtagOptions);

    try {
      await addGoogleAnalyticsScript();
    } catch (err) {
      const s = window.document.getElementById(scriptId);

      if (s) {
        s.remove();
      }

      return;
    }

    mounted = true;
  });

  // Single page application handling
  $: {
    const page_path = $page.path;

    if (isProd() && !isDoNotTrack() && mounted && window.gtag) {
      gtag("config", trackingId, { ...gtagOptions, page_path });
    }
  }
</script>
