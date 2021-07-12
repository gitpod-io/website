<script>
  import { cardContents } from "../../../contents/get-started";
  import Cards from "./cards.svelte";
</script>

<h2 class="mt-medium">Select your learning style</h2>
<p class="mb-10 text-large">
  Get started with Gitpod the way that best matches your learning style.
</p>
<div class="card-container flex flex-wrap align-middle">
  <Cards {cardContents} />
</div>
