<script>
  import { onMount } from "svelte";

  import Section from "../section.svelte";

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
          const strikethroughContainer = target.children[1];

          setTimeout(() => {
            strikethroughContainer.children[0].classList.add("strikethrough");

            setTimeout(() => {
              strikethroughContainer.children[1].classList.add("strikethrough");
            }, 700);
          }, 200);
        }
      });
    }
  });
</script>

<style lang="scss">
  .row {
    width: 95%;
  }

  h2 {
    text-align: center;

    @media (max-width: 1140px) {
      max-width: 800px;
      margin: 0 auto;
    }

    @media (max-width: 850px) {
      max-width: 500px;
      font-size: var(--h3);
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

<Section>
  <div class="row">
    <h2 class="h2" id="observer-target">
      Choose project,
      <br />
      <span>
        <span>check dependencies, checkout branch, view</span>
        <span>readme.txt, install tools, run build, run test,</span>
      </span>
      <br />
      start coding.
    </h2>
  </div>
</Section>
