<script lang="ts">
  import type { Founder } from "../../types/founder.type";

  export let founder: Founder;
  const { name, role, src } = founder;
  const path = `/images/founders/${src}`;
</script>

<div class="shadow-normal rounded-4xl bg-white p-small sm:p-x-large mb-x-large">
  <img src={path} alt={name} class="rounded-4xl sm:h-72" />
  <p class="py-xx-small">
    {name}
    <br />
    {role}
  </p>
  <a href={path} download class="btn-cta">PNG</a>
</div>
