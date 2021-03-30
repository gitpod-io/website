<script lang="ts">
  import { stores } from "@sapper/app";
  import type { OpenGraph } from "../types/open-graph.type";

  export let data: OpenGraph;

  const { description, image = "images/media-image.jpg", title, type } =
    data || {};

  const { page } = stores();
  const url = `https://${$page.host}${$page.path}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta
    name="keywords"
    content="dev environment, development environment, devops, cloud ide, github ide, gitlab ide, javascript, online ide, web ide, code review"
  />
  <meta name="description" content={description} />

  <!-- https://ogp.me -->
  <meta property="og:image" content="https://www.gitpod.io/{image}" />
  <meta property="og:description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />

  <!-- https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@gitpod" />
  <meta name="twitter:creator" content="@gitpod" />
</svelte:head>
