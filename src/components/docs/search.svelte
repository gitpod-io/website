<script>
  import { onMount } from "svelte";

  const docSearchJSVersion = "2.6.3";
  const docSearchInputSelector = "search-doc-input";

  let docSearchInput;
  let docSearchScript;
  let docSearchScriptLoaded = false;

  $: if (docSearchInput && (docSearchScript || docSearchScriptLoaded)) {
    window.docsearch &&
      window.docsearch({
        apiKey: "1a880f3060e9ff81ff84087fc90878fc",
        indexName: "gitpod",
        inputSelector: `#${docSearchInputSelector}`,
        // Set debug to true to inspect the dropdown
        debug: false,
      });
  }

  const processDocSearchScriptLoadEvent = () => {
    docSearchScriptLoaded = true;
  };
</script>

<style lang="scss">
  input {
    background: url("/svg/mag-glass.svg") 10px center / 24px 24px no-repeat
      var(--white);
    box-shadow: var(--shadow);
    height: var(--small);
    font-size: var(--p-medium);
  }

  :global(.algolia-autocomplete) {
    display: block !important; /* DocSearch adds inline styles, !important helps us take control */
  }

  :global(div
      .algolia-autocomplete.algolia-autocomplete-right
      .ds-dropdown-menu) {
    left: 0 !important; /* DocSearch adds inline styles, !important helps us take control */
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.css"
  />
  <script
    on:load={processDocSearchScriptLoadEvent}
    bind:this={docSearchScript}
    src="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.js"></script>
</svelte:head>

<div class="w-full mb-12">
  <label for={docSearchInputSelector} class="sr-only">Search</label>
  <div class="relative">
    <input
      bind:this={docSearchInput}
      type="search"
      placeholder="Search"
      id={docSearchInputSelector}
      class="block w-full pl-11 pr-3 py-2 border border-transparent rounded-3xl leading-5 bg-white text-gray-600 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900"
    />
  </div>
</div>
