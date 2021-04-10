<script>
  import Banner from "./base.svelte";

  /**
   * Each announcement must have a unique `storageKey` to ensure people who
   * dismiss announcement A will see a new banner for announcement B.
   * For simplicity, the announcement `storageKey` is the date the announcement
   * was made, in the `yyyy-mm-dd` format.
   */
  const announcementDate = "2021-04-08";
</script>

<Banner storageKey="announcement-{announcementDate}" let:closeBanner>
  <p class="relative flex-1 text-center">
    🎁 Gitpod March 2021 Release + $13M Funding Round | <a
      href="/blog/next-chapter-for-gitpod">Explore</a
    >
  </p>
  <button on:click={closeBanner} class="absolute right-0 px-4 py-1 md:px-6"
    ><svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ><title>Close</title>
      <path
        d="M3.00107 3L13 13M12.9989 3L3 13"
        stroke="#12100C"
        stroke-opacity="0.75"
        stroke-linecap="round"
      />
    </svg>
  </button>
</Banner>
