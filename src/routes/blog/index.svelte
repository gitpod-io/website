<script lang="ts" context="module">
  export async function preload() {
    const response = await this.fetch(`blog.json`);
    const posts = await response.json();
    return { posts };
  }
</script>

<script lang="ts">
  import type { BlogPost } from "../../types/blog-post.type";
  import OpenGraph from "../../components/open-graph.svelte";
  import PostPreview from "../../components/blog/post-preview.svelte";

  export let posts: BlogPost[];
</script>

<OpenGraph
  data={{
    description:
      "Visit the Gitpod blog to learn about releases, tutorials, news and more.",
    title: "Blog",
    type: "website",
  }}
/>
<div class="mx-auto max-w-row">
  <h3 class="py-20 text-center">From the team at Gitpod</h3>

  <div class="flex flex-wrap justify-between">
    {#each posts as post}
      <PostPreview {post} />
    {/each}
  </div>
</div>
