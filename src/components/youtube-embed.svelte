<script context="module" lang="ts">
  declare global {
    interface Window {
      onYouTubeIframeAPIReady: any;
    }
    var YT: any;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";

  export let embedId: string;
  export let title: string;

  const randomId = "yt-player-" + Math.random().toString(36).slice(2, 5);
  let videoStarted = false;

  const setUpVideo = () => {
    const onStateChange = (e) => {
      if (e.data == 1) {
        if (!videoStarted) {
          window.analytics.track("screencast_started", {
            id: embedId,
            name: title,
          });
        }
        videoStarted = true;
      }
    };

    new YT.Player(randomId, {
      events: { onStateChange },
    });
  };

  onMount(() => {
    if (typeof YT === "undefined") {
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Youtube script will automatically call the following function
      window.onYouTubeIframeAPIReady = () =>
        window.dispatchEvent(new Event("YouTubeIframeApiReady"));

      window.addEventListener("YouTubeIframeApiReady", () => {
        setUpVideo();
      });
    } else {
      setUpVideo();
    }
  });
</script>

<style>
  .youtube {
    position: relative;
    overflow: hidden;
    max-width: 100%;
    max-height: 500px;
    width: 880px;
    margin: auto;
  }

  .youtube::after {
    display: block;
    content: "";
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
</style>

<div class="youtube">
  <iframe
    id={randomId}
    src={`https://www.youtube.com/embed/${embedId}?enablejsapi=1`}
    {title}
    width="560"
    height="315"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</div>
