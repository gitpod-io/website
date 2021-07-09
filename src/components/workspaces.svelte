<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { cubicIn, cubicOut, linear } from "svelte/easing";
  import Workspace_1 from "./svgs/workspace-1.svelte";
  import Workspace_2 from "./svgs/workspace-2.svelte";
  import Workspace_3 from "./svgs/workspace-3.svelte";
  import Workspace_4 from "./svgs/workspace-4.svelte";

  export let alt = "";
  export let iterations = 3;

  let wrapper;
  let wrapper_width = 632;
  let wrapper_height = 500;

  let available = [
    { id: "1", left: 34, top: 92, width: 337, Component: Workspace_1 },
    { id: "2", left: 110, top: 52, width: 286, Component: Workspace_2 },
    { id: "3", left: 166, top: 196, width: 337, Component: Workspace_3 },
    { id: "4", left: 260, top: 24, width: 372, Component: Workspace_4 },
  ];

  let max = 2;
  let items = available.slice(0, max);
  let next = max;
  let remaining = iterations;

  function zoom(node, params) {
    const existingTransform = getComputedStyle(node).transform.replace(
      "none",
      ""
    );

    return {
      delay: params.delay || 0,
      duration: params.duration || 400,
      easing: params.easing || linear,
      css: (t, u) =>
        `opacity: ${t}; transform: ${existingTransform} scale(${
          1 + ((params.factor || 1.5) - 1) * u
        })`,
    };
  }

  function shuffle() {
    if (remaining === 0) {
      items = [available[next], ...items];
      return;
    }
    items = [available[next], ...items.slice(0, max - 1)];
    next = (next + 1) % available.length;
    remaining--;
  }

  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.unobserve(wrapper);
        shuffle();
      }
    });
    observer.observe(wrapper);
    return () => {
      observer.disconnect();
    };
  });
</script>

<style>
  .aspect {
    position: relative;
  }
  .aspect::before {
    content: "";
    display: block;
    padding-bottom: calc(100% * (var(--height) / var(--width)));
  }
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .item {
    position: absolute;
    transform-origin: center center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08),
      0px 5px 20px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    overflow: hidden;
  }
  .item > :global(*) {
    display: block;
    width: 100%;
    height: auto;
  }
  figcaption {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>

<figure
  class="aspect"
  style="--width: {wrapper_width}; --height: {wrapper_height};"
  bind:this={wrapper}
>
  <div class="container">
    {#each items as { Component, top, left, width, id } (id)}
      <div
        class="item"
        style="top: {100 * (top / wrapper_height)}%; left: {100 *
          (left / wrapper_width)}%; width: {100 * (width / wrapper_width)}%;"
        in:fade={{ duration: 1500, easing: cubicIn }}
        out:zoom|local={{
          duration: 1500,
          delay: 1500,
          factor: 1.015,
          easing: cubicIn,
        }}
        on:outroend={shuffle}
      >
        <svelte:component this={Component} />
      </div>
    {/each}
  </div>
  {#if alt}
    <figcaption>{alt}</figcaption>
  {/if}
</figure>
