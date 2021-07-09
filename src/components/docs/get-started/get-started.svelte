<script>
  import { cardContents } from "../../../contents/get-started";
  import Cards from "./cards.svelte";
</script>

<h2>Choose your learning style</h2>
<div class="card-container flex flex-wrap align-middle">
  <Cards {cardContents} />
</div>
