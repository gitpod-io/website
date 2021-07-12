<script>
  import { cardContents } from "../../../contents/get-started";
  import Cards from "./cards.svelte";
</script>

<h2>Select your learning style</h2>
<h5 class="text-dark-grey mb-10">
  Get started with Gitpod the way that best matches your learning style.
</h5>
<div class="card-container flex flex-wrap align-middle">
  <Cards {cardContents} />
</div>
