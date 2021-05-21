<script>
  import MobileMenu from "./mobile-menu/index.svelte";
  import MobileMenuButton from "./mobile-menu/button.svelte";
  import NavItem from "./nav-item.svelte";
  import menuState from "./mobile-menu/state";
  import LoginButton from "./login-button.svelte";
  import Logo from "../svgs/logo.svelte";

  const navItems = [
    {
      href: "/features",
      label: "Features",
    },
    {
      href: "/pricing",
      label: "Pricing",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/docs",
      label: "Docs",
    },
    {
      href: "/changelog",
      label: "Changelog",
    },
    {
      href: "/careers",
      label: "We're hiring <sup>*</sup>",
    },
  ];
</script>

<nav
  id="choose-project-observer-target-top"
  class={`nav text-small ${$menuState ? "bg-off-white" : ""}`}
>
  <div class="wrapper">
    <a href="/" aria-label="Gitpod" on:click={() => ($menuState = !menuState)}>
      <Logo />
    </a>
    <div class="items w">
      {#each navItems as { href, label }}
        <NavItem {href}>{@html label}</NavItem>
      {/each}
    </div>
    <div class="login">
      <LoginButton />
    </div>
    <MobileMenuButton />
  </div>
  <MobileMenu {navItems} />
</nav>
