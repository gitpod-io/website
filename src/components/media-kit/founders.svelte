<script lang="ts">
  import Section from "../section.svelte";
  import type { Founder as FounderProps } from "../../types/founder.type";
  import Founder from "./founder.svelte";

  const founders: FounderProps[] = [
    {
      name: "Sven Efftinge",
      role: "Co-Founder & CEO",
      src: "sven.png",
    },
    {
      name: "Moritz Eysholdt",
      role: "Co-Founder",
      src: "moritz.png",
    },
    {
      name: "Dr. Jan Köhnlein",
      role: "Co-Founder",
      src: "jan.png",
    },
    {
      name: "Johannes Landgraf",
      role: "Co-Founder & CCO",
      src: "johannes.png",
    },
  ];
</script>

<Section className="text-center">
  <h2>The founders</h2>
  <div class="flex flex-wrap justify-around py-x-large">
    {#each founders as founder}
      <Founder {founder} />
    {/each}
  </div>
  <p class="text-large">
    Please <a href="/contact">contact us</a> for any intended use not covered by
    these guidelines.
  </p>
</Section>
