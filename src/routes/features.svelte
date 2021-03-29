<style lang="scss">
.halfimages article,
.cards {
  display: flex;
  grid-gap: 2rem;
  flex-flow: row wrap;
  margin-bottom: 2rem;
  justify-content: center;
}
.halfimages article > div {
  flex: 0 1 calc( 50% - 2rem );
  min-width: 400px;
  align-self: center;
}
.halfimages article p {
  margin-bottom: 2rem;
}
.cards.double > div {
  flex: 0 1 calc( 50% - 2rem );
  min-width: 400px;
  align-self: stretch;
}
.cards.triple > div {
  flex: 0 1 calc( 33% - 2rem );
  min-width: 300px;
  align-self: stretch;
  text-align: center;
}
.triple h3 {
  min-height: 3rem;
}
.triple .card {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 33% 3rem 1fr 1.5rem;
}
.triple a {
  color: var(--brand-ripe);
}
section h3:first-child,
section h3:first-child + p {
  text-align: center;
}
</style>

<header>
  <h1 class="h3">Features</h1>
<p>
  Gitpod will always have a free-to-use option. For those looking for a little
  more we have a few powerful solutions.
</p>
</header>

<section class="halfimages">
<article>
  <div>
    <h2 class="h4">Save Time with Prebuilt Workspaces</h2>
    <p class="text-large">
      Gitpod continuously builds your git branches like a CI server. This means
      no more waiting for dependencies to be downloaded and builds to finish.
    </p>
    <p>
      <a href="/docs/prebuilds/" class="btn-secondary">More about Prebuilt Workspaces</a>
    </p>
  </div>
  <div>
    <!-- TODO: Insert the terminal output animation from the homepage -->
    <img src="http://placekitten.com/400/400" alt="" role="presentation">
  </div>
</article>

<article>
  <div>
    <img src="http://placekitten.com/400/400" alt="" role="presentation">
    <!-- TODO: Insert "Preparing workspace" images -->
  </div>
  <div>
    <h2 class="h4">Start Fresh with Ephemeral Dev Environments</h2>
    <p class="text-large">
      Dev environment as code assures you are always starting from a clean state
      and never gets dragged into long-living stateful environments. The end of
      all works-on-my-machine situations.
    </p>
  </div>
  </article>
</section>

<section class="cards double">
  <div class="card">
    <img src="http://placekitten.com/350/150" alt="" role="presentation">
    <!-- TODO: Insert emojis -->
    <h2 class="h5">Collaboration with Workspace Sharing</h2>
    <p>
      Collaborate with your friends, colleagues, and clients and run software or
      hunt down bugs together.
    </p>
  </div>
  <div class="card">
    <!-- TODO: Insert terminal image -->

    <img src="http://placekitten.com/350/150" alt="" role="presentation">
    <h2 class="h5">Full linux machine <span>(incl sudo/docker)</span></h2>
    <p>
      Instantly start a container in the cloud based on your Docker image.
      Install and confugire tools easily.
    </p>
  </div>
</section>

<section class="cards triple">
  <div class="card">
    <!-- TODO: Insert icon -->
    <img src="http://placekitten.com/250/100" role="presentation"  alt="">
    <h3 class="h6">Customize your workspace</h3>
    <p>
      Tweak your environment to suit your needs. From themes to extensions you
      have full control over it all.
    </p>
    <a href="/docs/config-docker">More about customization</a>
  </div>
  <div class="card">
    <!-- TODO: Insert icon -->
    <img src="http://placekitten.com/250/100" alt="" role="presentation">
    <h3 class="h6">GitLab, GitHub, and Bitbucket Integration</h3>
    <p>
      Start your workflow from your Git hosting platform and let Gitpod beam you
      in a ready-to-code dev environment.
    </p>
    <!-- TODO: Figure out where to link to: --> <a href="">More about Integrations</a>
  </div>
  <div class="card">
    <!-- TODO: Insert icon -->
    <img src="http://placekitten.com/250/100" role="presentation" alt="">
    <h3 class="h6">Code Reviews Within the IDE</h3>
    <p>
      Open pull requests in Gitpod to run, navigate, and review the code. Reply
      to comments and publish code reviews right within Gitpod.
    </p>
    <a href="/blog/when-code-reviews-lgtm">More about Code Reviews</a>
  </div>
</section>

<section>
  <h2 class="h3">VS Code and extensions in your browser</h2>
  <p>
    Install any VS Code extension with one click via the integrated
    vendor-neutral marketplace Open VSX.
  </p>
  <!-- TODO: Insert the VS Code Gitpod theme screenshot -->
</section>

<section>
  <h2 class="h3">Get started with screencasts</h2>
  <!-- TODO: Insert the 3 most recent screencast previews -->
  <a href="/screencasts" class="btn-conversion">See all screencasts</a>
</section>
