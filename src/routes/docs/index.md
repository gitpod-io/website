---
section:
title: Documentation
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
import { cardContents } from "../../contents/get-started";
import Cards from "../../components/docs/get-started/cards.svelte";
</script>

# Getting started with Gitpod

<main class="w-full p-0">
<section class="mt-medium">
  <h2>Select your learning style</h2>
  <p class="mb-10 text-large">
  Get started with Gitpod the way that best matches your learning style.
  </p>
  <Cards {cardContents} />
</section>
<section class="mt-medium">
  <h2>Gitpod in your browser</h2>
  <p class="mb-10 text-large">
  Easily open a new workspace for any project
  </p>
  <div class="flex flex-col lg:flex-row justify-between items-center rounded-2xl bg-orange-800 w-full px:2 lg:px-5 py-3 lg:py-6">
  <p class="text-sand-dark text-large">Install Gitpod browser extension</p>
  <div class="mt-5 lg:mt-0"> 
  <a href="https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki" class="btn-cta mr-3">Chrome</a>
  <a href="https://addons.mozilla.org/tr/firefox/addon/gitpod/" class="btn-cta">Firefox</a>
  </div>
  </div>
</section>
</main>

## Next Steps

- [Introduction to Gitpod](/docs/introduction) - lorem ipsum
