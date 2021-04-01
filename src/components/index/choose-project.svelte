<script>
  import { onMount } from "svelte";
  import Section from "../section.svelte";

  const addStrikethroughs = (targets) => {
    let t = 0;
    targets.map((target) => {
      setTimeout(() => {
        target.classList.add("strikethrough");
      }, t);
      t = t + 400;
    });
  };

  onMount(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    let observer = new IntersectionObserver(beTouching, options);

    const target = document.querySelector("#observer-target");

    observer.observe(target);

    function beTouching(entries, ob) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;

          const desktopTargets = Array.from(target.children[1].children);
          const mobileTargets = Array.from(target.children[2].children);

          addStrikethroughs(desktopTargets);
          addStrikethroughs(mobileTargets);
          observer.unobserve(target);
        }
      });
    }
  });
</script>

<style lang="scss">
  .row {
    width: 100%;
  }

  h2 {
    text-align: center;
    max-width: 67.7rem;
    margin: 0 auto;

    @media (max-width: 1140px) {
      max-width: 50rem;
    }

    @media (max-width: 850px) {
      font-size: var(--h3);
    }

    @media (max-width: 682px) {
      max-width: 23.75rem;
    }

    @media (max-width: 365px) {
      font-size: 1.7rem;
    }
  }

  del {
    text-decoration: none;
  }

  .desktop {
    display: none;
  }

  @media (min-width: 683px) {
    .desktop {
      display: initial;
    }

    .mobile {
      display: none;
    }
  }

  :global(.strikethrough) {
    display: inline-block;
    position: relative;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    color: var(--light-grey);
  }

  :global(.strikethrough::after) {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    margin-top: -0.6em;
    transform-origin: center left;
    animation: strikethrough 1s 0.5s cubic-bezier(0.55, 0, 0.1, 1) 1 forwards;
    transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  @keyframes strikethrough {
    from {
      transform: scaleX(0);
      background: var(--light-grey);
    }
    to {
      transform: scaleX(1);
      background: var(--light-grey);
    }
  }
</style>

<div class="row">
  <Section>
    <h2 class="h1" id="observer-target">
      Choose project,
      <br />
      <del class="desktop">
        <span>check dependencies, checkout branch, view</span>
        <span>readme.txt, install tools, run build, run test,</span>
      </del>
      <del class="mobile">
        <span>check dependencies,</span>
        <span>checkout branch, view</span>
        <span>readme.txt, install tools</span>
        <span>run build, run test,</span>
      </del>
      <br />
      start coding.
    </h2>
  </Section>
</div>
