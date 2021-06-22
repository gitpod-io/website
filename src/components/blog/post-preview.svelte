<script lang="ts">
  import type { BlogPost } from "../../types/blog-post.type";
  import type { SocialMediaLinks } from "../../types/avatars.type";

  import { authors } from "../../contents/blog";
  import Avatars from "../avatars.svelte";

  export let post: BlogPost;
  export let isMostRecent: boolean = false;

  const authorSocialMediaLinks: SocialMediaLinks = Object.entries(
    authors
  ).reduce((displayNames, [username, profile]) => {
    displayNames[
      username
    ] = `https://twitter.com/${profile.socialProfiles.twitter}`;
    return displayNames;
  }, {});
  export let headlineOrder: "h3";
</script>

<div class:previous={!isMostRecent} class="blogPreview">
  {#if isMostRecent}
    <a href="/blog/{post.slug}" sveltekit:prefetch>
      <img
        src="/images/blog/{post.slug}/{post.image}"
        alt={`Blog post: ${post.title}`}
        height="248"
        width="400"
      />
    </a>
  {/if}
  <div class="blurb">
    {#if headlineOrder === "h3"}
      <h3 class="h2">
        <a href="/blog/{post.slug}" sveltekit:prefetch>
          {post.title}
        </a>
      </h3>
    {:else}
      <h2>
        <a href="/blog/{post.slug}" sveltekit:prefetch>
          {post.title}
        </a>
      </h2>
    {/if}
    <p class="excerpt">{post.excerpt}</p>
    <p>
      <span>
        <Avatars
          usernames={post.author}
          socialMediaLinks={authorSocialMediaLinks}
          socialMediaLinkClasses="filter hover:drop-shadow"
        />
        <a href="/blog/{post.slug}" class="date" sveltekit:prefetch>
          {new Date(Date.parse(post.date)).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </a>
      </span>
    </p>
  </div>
</div>
