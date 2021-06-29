<script lang="ts">
  import MobileMenu from "./mobile-menu/index.svelte";
  import MobileMenuToggle from "./mobile-menu/toggle.svelte";
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
      label: "We're hiring",
      isHighlighted: true,
    },
  ];
</script>

<nav
  id="choose-project-observer-target-top"
  class={`${
    $menuState ? "bg-off-white " : ""
  }mx-auto w-full max-w-7xl sm:bg-sand-light`}
>
  <div class="flex items-center justify-between h-20 px-4 sm:px-8">
    <a href="/" aria-label="Gitpod" on:click={() => ($menuState = !menuState)}>
      <Logo />
    </a>
    <div class="hidden px-2 space-x-6 items-center sm:flex md:space-x-12">
      {#each navItems as navItem}
        <NavItem {navItem} on:click={() => ($menuState = !$menuState)} />
      {/each}
    </div>
    <div class="hidden sm:flex">
      <LoginButton />
    </div>
    <MobileMenuToggle />
  </div>
  <MobileMenu {navItems} />
</nav>
