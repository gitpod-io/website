<script lang="ts" context="module">
  declare global {
    interface Window {
      analytics: any;
    }
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  const writeKey =
    typeof window !== "undefined" &&
    window.location.hostname === "www.gitpod.io"
      ? "5aJzy2ASNbqx8I0kwppRflDZpL7pS1GO" // Website Production
      : "Xe5zR3MbnyxHsveZr4HvrY35PL9iT0EH"; // Website Staging

  onMount(async () => {
    // Create a queue, but don't obliterate an existing one!
    var analytics = (window.analytics = window.analytics || []);
    // If the real analytics.js is already on the page return.
    if (analytics.initialize) return;
    // If the snippet was invoked already show an error.
    if (analytics.invoked) {
      if (window.console && console.error) {
        console.error("Segment snippet included twice.");
      }
      return;
    }
    // Invoked flag, to make sure the snippet
    // is never invoked twice.
    analytics.invoked = true;
    // A list of the methods in Analytics.js to stub.
    analytics.methods = [
      "trackSubmit",
      "trackClick",
      "trackLink",
      "trackForm",
      "pageview",
      "identify",
      "reset",
      "group",
      "track",
      "ready",
      "alias",
      "debug",
      "page",
      "once",
      "off",
      "on",
      "addSourceMiddleware",
      "addIntegrationMiddleware",
      "setAnonymousId",
      "addDestinationMiddleware",
    ];
    // Define a factory to create stubs. These are placeholders
    // for methods in Analytics.js so that you never have to wait
    // for it to load to actually record data. The `method` is
    // stored as the first argument, so we can replay the data.
    analytics.factory = function (method) {
      return function () {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(method);
        analytics.push(args);
        return analytics;
      };
    };
    // For each of our methods, generate a queueing stub.
    for (var i = 0; i < analytics.methods.length; i++) {
      var key = analytics.methods[i];
      analytics[key] = analytics.factory(key);
    }
    // Define a method to load Analytics.js from our CDN,
    // and that will be sure to only ever load it once.
    analytics.load = function (key, options) {
      // Create an async script element based on your key.
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";
      // Insert our script next to the first script element.
      var first = document.getElementsByTagName("script")[0];
      first.parentNode.insertBefore(script, first);
      analytics._loadOptions = options;
    };
    analytics._writeKey = writeKey;
    // Add a version to keep track of what's in the wild.
    analytics.SNIPPET_VERSION = "4.13.2";
    // Load Analytics.js with your key, which will automatically
    // load the tools you've enabled for your account. Boosh!
    analytics.load(writeKey);

    // Track first page
    analytics.page();
  });

  $: {
    // We need to depend on $page.path to trigger
    // a recompute on each new page.
    const page_path = $page.path;

    if (typeof window !== "undefined") {
      // Track subsequent pages
      window.analytics?.page();
    }
  }
</script>
