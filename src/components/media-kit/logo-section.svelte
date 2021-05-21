<script lang="ts">
  import type { Logo } from "../../types/logo.type";
  import LogoBox from "./logo-box.svelte";
  const logos: Logo[] = [
    {
      src: "logo-light-theme.svg",
      alt: "Gitpod light theme logo",
      text: "logo",
      srcPNG: "logo-light-theme.png",
    },
    {
      src: "logo-dark-theme.svg",
      alt: "Gitpod dark theme logo",
      text: "dark theme logo",
      srcPNG: "logo-dark-theme.png",
      isDark: true,
    },
    {
      src: "logo-mark.svg",
      alt: "Gitpod Logo Mark",
      text: "mark",
      srcPNG: "logo-mark.png",
    },
  ];
</script>

<section class="text-center">
  <div class="max-w-3xl m-auto mb-small">
    <h2>About</h2>
    <p>
      Please don’t modify the logos or use them in any altered way.
      <br />
      For more details
      <a href="/assets/style-guide.pdf" target="_blank">see style guide</a>.
    </p>
  </div>
  <div class="flex justify-around flex-wrap max-w-container-normal m-auto">
    {#each logos as logo}
      <LogoBox {logo} />
    {/each}
  </div>
</section>
