<script lang="ts">
  import Author from "./author.svelte";
  import RecentArticlesPreview from "./recent-articles-preview.svelte";
  import OpenGraph from "../../components/open-graph.svelte";
  import { authors } from "../../contents/blog";
  import "../../assets/markdown-commons.scss";

  export let date;
  export let author;
  export let slug;
  // export let subtitle;
  export let title;
  export let image;
  export let teaserImage;
  export let excerpt;
  // export let slug;

  const blogBaseUrl = "https://www.gitpod.io/blog/";

  let dateDisplay = new Date(Date.parse(date)).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const socialLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${title} by ${author
          .split(", ")
          .map((username) => "@" + authors[username].socialProfiles.twitter)
          .join(", ")} ${blogBaseUrl}${slug}`
      )}`,
      alt: "Twitter",
      icon: "/svg/brands/twitter.svg",
    },
    {
      href: `http://www.reddit.com/submit?url=${encodeURIComponent(
        `${blogBaseUrl}${slug}&title=${title}`
      )}`,
      alt: "Reddit",
      icon: "/svg/brands/reddit.svg",
    },
  ];
</script>

<OpenGraph
  data={{
    description: excerpt,
    title,
    type: "article",
    image: `images/blog/${slug}/${image}`,
    imageTwitter: `images/blog/${slug}/${image}`,
  }}
/>
<div class="post text-blob content-blog">
  <img
    src="/images/blog/{slug}/{teaserImage || image}"
    alt={`${title}`}
    class="headerImage"
  />
  <p class="date">{dateDisplay}</p>
  <h1>{title}</h1>
  <p>
    <span><Author {author} /></span>
  </p>
  <div>
    <slot />
  </div>
  <section class="share">
    <h2 class="h4">Share this post:</h2>
    <ul>
      {#each socialLinks as link}
        <li>
          <a href={link.href}>
            <img src={link.icon} alt={link.alt} height="24" width="24" />
          </a>
        </li>
      {/each}
    </ul>
  </section>
</div>

<RecentArticlesPreview />
