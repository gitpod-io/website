<script>
  import { page, session } from "$app/stores";
  import PostPreview from "./post-preview.svelte";

  const moreRecentPosts = $session.posts.slice(0, 4);
  $: moreRecentPostsWithoutCurrent = moreRecentPosts
    .filter((post) => $page.path.indexOf(post.slug) === -1)
    .slice(0, 3);
</script>

<div>
  <section class="mb-40">
    <h2 class=" mt-6 mb-16 text-center text-h2">More articles</h2>
    <div class="posts-grid">
      {#each moreRecentPostsWithoutCurrent as post}
        <div class="posts-grid__item">
          <PostPreview {post} isMostRecent headlineOrder="h3" />
        </div>
      {/each}
    </div>
  </section>
</div>
