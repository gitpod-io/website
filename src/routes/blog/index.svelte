<script lang="ts" context="module">
  export const prerender = true;

  export async function load({ session }) {
    const posts = session.posts;
    return { props: { posts } };
  }
</script>

<script lang="ts">
  import type { BlogPost } from "../../types/blog-post.type";
  import OpenGraph from "../../components/open-graph.svelte";
  import PostPreview from "../../components/blog/post-preview.svelte";
  import NewsletterSignup from "../../components/blog/newsletter-signup.svelte";

  export let posts: BlogPost[];
</script>

<style>
  section {
    margin-top: var(--xx-large);
    text-align: center;
  }

  h2 {
    margin-bottom: var(--small);
  }

  .blog-layout {
    @apply pb-10;
  }
</style>

<div class="blog-layout">
  <OpenGraph
    data={{
      description:
        "Visit the Gitpod blog to learn about releases, tutorials, news and more.",
      title: "Blog",
    }}
  />
  <section>
    <h1>Blog</h1>
  </section>
  <div class="posts-grid">
    {#each posts.slice(0, 6) as post}
      <div class="posts-grid__item">
        <PostPreview {post} isMostRecent />
      </div>
    {/each}
  </div>

  <section>
    <h2>Previous posts</h2>
  </section>
  <div class="posts-grid previous">
    {#each posts.slice(6) as post}
      <div class="posts-grid__item">
        <PostPreview {post} />
      </div>
    {/each}
  </div>
</div>
<NewsletterSignup class="mx-auto mt-large mb-huge" />
