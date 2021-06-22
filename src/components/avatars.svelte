<script lang="ts">
  import type { DisplayNames, SocialMediaLinks } from "../types/avatars.type";

  /**
   * One or more comma-separated GitHub username.
   */
  export let usernames: string;

  /**
   * A map of usernames to display names.
   * If not provided, the `usernames` prop value(s) is/are used.
   *
   * @example
   * ```
   * {
   *   mikenikles: "Mike Nikles",
   *   svenefftinge: "Sven Efftinge"
   * }
   * ```
   */
  export let displayNames: DisplayNames = null;

  /**
   * A map of usernames to social media URLs.
   * If not provided, it is assumed the `usernames` prop contains GitHub usernames.
   *
   * @example
   * ```
   * {
   *   mikenikles: "https://twitter.com/mikenikles",
   *   svenefftinge: "https://twitter.com/svenefftinge"
   * }
   * ```
   */
  export let socialMediaLinks: SocialMediaLinks = null;

  /**
   * Tailwind CSS classes to overwrite the social media <a> tag.
   */
  export let socialMediaLinkClasses = "";

  /**
   * Tailwind CSS classes to overwrite the social media <img> tag.
   */
  export let socialMediaImgClasses = "";

  /**
   * Set this to `false` to hide the avatar and instead show the display name only.
   */
  export let showAvatar = true;

  const trimmedUsernames = usernames
    .split(",")
    .map((username) => username.trim());

  const getSocialMediaLink = (username: string) =>
    socialMediaLinks
      ? socialMediaLinks[username]
      : `https://github.com/${username}`;
</script>

<span class="avatars">
  {#each trimmedUsernames as username}
    <a
      href={getSocialMediaLink(username)}
      class:showAvatar
      class="no-underline transition-none {socialMediaLinkClasses}"
    >
      {#if showAvatar}
        <!-- We use the GitHub profile image because the Twitter profile image needs an authenticated API call -->
        <img
          src="https://github.com/{username}.png"
          alt="Avatar of {username}"
          height="24"
          width="24"
          class="inline rounded-full border border-solid border-off-white {socialMediaImgClasses}"
        />
      {/if}
      {#if displayNames}
        {displayNames[username]}
      {/if}
    </a>
  {/each}
</span>
