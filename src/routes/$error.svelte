<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { dev } from "$app/env";
  import Section from "../components/section.svelte";

  export let status: number;
  export let error: Error;
</script>

<div class="error-page row">
  <Section>
    <img
      src="/images/illustration-large.jpg"
      alt="The Gitpod cube set up as a remote workspace"
    />
    <h1>{status}</h1>
    <p>Oh, no! Something went wrong on our side.</p>

    {#if dev}
      <p>{error.message}</p>
    {/if}

    <p>
      <a href="/contact">Contact Us</a>
      —
      <a href="https://status.gitpod.io/">Gitpod Status</a>
      —
      <a href="https://twitter.com/gitpod">@gitpod</a>
    </p>
    <p>
      <a class="btn" href="https://www.gitpod.io">Go Home</a>
    </p>
  </Section>
</div>

{#if dev && error.stack}
  <article class="card">
    <pre>{error.stack}</pre>
  </article>
{/if}
