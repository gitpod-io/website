<script lang="ts">
  import Avatars from "../avatars.svelte";
  import RecentArticlesPreview from "./recent-articles-preview.svelte";
  import OpenGraph from "../../components/open-graph.svelte";
  import { authors } from "../../contents/blog";
  import "../../assets/markdown-commons.scss";
  import NewsletterSignup from "./newsletter-signup.svelte";

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

  const authorDisplayNames = Object.entries(authors).reduce(
    (displayNames, [username, profile]) => {
      displayNames[username] = profile.name;
      return displayNames;
    },
    {}
  );

  const authorSocialMediaLinks = Object.entries(authors).reduce(
    (displayNames, [username, profile]) => {
      displayNames[
        username
      ] = `https://twitter.com/${profile.socialProfiles.twitter}`;
      return displayNames;
    },
    {}
  );

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

<svelte:head>
  <link rel="stylesheet" href="/prism-solarized-light.min.css" />
</svelte:head>

<OpenGraph
  data={{
    description: excerpt,
    title,
    type: "article",
    image: `images/blog/${slug}/${image}`,
    imageTwitter: `images/blog/${slug}/${image}`,
  }}
/>
<div class="post content-blog">
  <img
    src="/images/blog/{slug}/{teaserImage || image}"
    alt={`${title}`}
    class="headerImage"
  />
  <p class="date">{dateDisplay}</p>
  <h1>{title}</h1>
  <p>
    <span
      ><Avatars
        usernames={author}
        displayNames={authorDisplayNames}
        socialMediaLinks={authorSocialMediaLinks}
        socialMediaLinkClasses="inline-flex mr-4 px-2 bg-white rounded-xl text-light-grey focus:bg-off-white focus:text-dark-grey hover:bg-off-white hover:text-dark-grey"
        socialMediaImgClasses="mr-2 h-6 w-6 place-self-center"
      /></span
    >
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

<NewsletterSignup class="mx-auto mt-large mb-huge" />
<RecentArticlesPreview />
