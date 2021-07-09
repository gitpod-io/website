<script>
  import Segment from "../components/segment.svelte";
  import GoogleAnalytics from "../components/google-analytics.svelte";
  import LayoutMain from "../components/layout-main.svelte";
  import LayoutRoot from "../components/layout-root.svelte";
  import Nav from "../components/main-nav/index.svelte";
  import Footer from "../components/footer.svelte";
  // import AnnouncementBanner from "../components/banners/announcement.svelte";
  import CookieConsent from "../components/banners/cookie-consent.svelte";
</script>

<style>
  :global(#svelte-announcer) {
    @apply sr-only;
  }
</style>

<!-- <AnnouncementBanner /> -->
<LayoutRoot>
  <Nav />
  <LayoutMain>
    <slot />
  </LayoutMain>
  <Footer />
</LayoutRoot>
<CookieConsent />
<GoogleAnalytics />
<Segment />
