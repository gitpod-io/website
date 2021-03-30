<script>
  import GoogleAnalytics from "../components/google-analytics.svelte";
  import LayoutMain from "../components/layout-main.svelte";
  import LayoutRoot from "../components/layout-root.svelte";
  import Nav from "../components/main-nav/index.svelte";
  import Footer from "../components/footer.svelte";
</script>

<LayoutRoot>
  <Nav />
  <LayoutMain>
    <slot />
  </LayoutMain>
  <Footer />
</LayoutRoot>
<GoogleAnalytics />
