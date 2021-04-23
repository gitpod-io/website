<script>
  import Section from "../../section.svelte";
  import LaunchExampleWorkspace from "./launch-example-workspace.svelte";
  import LinkGitRepository from "./link-git-repository.svelte";
</script>

<style lang="scss">
  .cards-container {
    display: flex;
    justify-content: space-between;

    @media (max-width: 944px) {
      flex-direction: column;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .card {
    flex: 0 0 49%;
    text-align: center;
    background: var(--white);

    @media (max-width: 1140px) {
      padding: var(--small) var(--x-small);
    }

    &:not(:last-child) {
      @media (max-width: 944px) {
        margin-bottom: var(--small);
      }
    }
  }
</style>

<Section id="get-started">
  <h2 class="mb-small text-center text-h2">Get started now</h2>
  <div class="cards-container">
    <div class="card">
      <LinkGitRepository />
    </div>
    <div class="card">
      <LaunchExampleWorkspace />
    </div>
  </div>
</Section>
