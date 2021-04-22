<script lang="ts">
  import Menu from "../../components/docs/menu.svelte";
  import MobileMenu from "../../components/docs/mobile-menu/index.svelte";
  import OpenGraph from "../../components/open-graph.svelte";
  import Search from "../../components/docs/search.svelte";
  import "../../assets/docs.scss";

  // This file is used to define entries in the side menu
  interface MenuEntry {
    title: string;
    path: string;
    subMenu?: MenuEntry[];
  }

  function M(title: string, path: string, subMenu?: MenuEntry[]): MenuEntry {
    return {
      title,
      path: "/docs" + (path ? "/" + path : ""),
      subMenu,
    };
  }

  const MENU: MenuEntry[] = [
    M("Introduction", ""),
    M("Getting Started", "getting-started", [
      M("Example Projects", "examples"),
    ]),
    M("Workspaces", "workspaces", [
      M("Context URLs", "context-urls"),
      M("Life of a Workspace", "life-of-workspace"),
      M("Collaboration & Sharing", "sharing-and-collaboration"),
      M("Command Line Interface", "command-line-interface"),
    ]),
    M("Configure Your Project", "configuration", [
      M(".gitpod.yml", "config-gitpod-file"),
      M("Docker Configuration", "config-docker"),
      M("Start Tasks", "config-start-tasks"),
      M("VS Code Extensions", "vscode-extensions"),
      M("Exposing Ports", "config-ports"),
      M("Prebuilt Workspaces", "prebuilds"),
      M("Environment Variables", "environment-variables"),
      M("Workspace Location", "checkout-location"),
      M("Editor Configuration", "config-editor"),
    ]),
    M("Integrations", "integrations", [
      M("GitLab Integration", "gitlab-integration"),
      M("GitHub Integration", "github-integration"),
      M("Bitbucket Integration", "bitbucket-integration"),
      M("Browser Extension", "browser-extension"),
    ]),
    M("Languages & Frameworks", "languages-and-frameworks", [
      M("JavaScript", "languages/javascript"),
      M("Python", "languages/python"),
      M("HTML/CSS", "languages/html"),
      M("Java", "languages/java"),
      M("C++", "languages/cpp"),
      M("Go", "languages/go"),
      M("Bash", "languages/bash"),
      M("Ruby", "languages/ruby"),
      M("PHP", "languages/php"),
      M("Vue", "languages/vue"),
      M("Svelte", "languages/svelte"),
      M("Scala", "languages/scala"),
      M("Rust", "languages/rust"),
      M(".NET", "languages/dotnet"),
      M("Dart", "languages/dart"),
      M("Julia", "languages/julia"),
      M("LaTeX", "languages/latex"),
      M("R", "languages/r"),
      M("Kotlin", "languages/kotlin"),
      M("Pandas", "languages/python#pandas"),
      M("Deno", "languages/deno"),
    ]),
    // M("Feature Preview", "feature-preview"),
    M("Gitpod Self-Hosted", "self-hosted/latest/self-hosted", [
      M(
        "Install on Google Cloud Platform",
        "self-hosted/latest/install/install-on-gcp-script"
      ),
      M(
        "Install on Amazon Web Services",
        "self-hosted/latest/install/install-on-aws-script"
      ),
      M(
        "Install on self-managed Kubernetes",
        "self-hosted/latest/install/install-on-kubernetes"
      ),
      M("Configure Ingress", "self-hosted/latest/install/configure-ingress"),
      M("Configure OAuth", "self-hosted/latest/install/oauth"),
      M("Configure a Database", "self-hosted/latest/install/database"),
      M(
        "Configure a Docker Registry",
        "self-hosted/latest/install/docker-registry"
      ),
      M("Configure Storage", "self-hosted/latest/install/storage"),
      M("Configure Nodes", "self-hosted/latest/install/nodes"),
      M("Configure Workspaces", "self-hosted/latest/install/workspaces"),
    ]),
    M("Subscriptions", "subscriptions", [
      M("Professional Open Source", "professional-open-source"),
      M("Create a Team", "teams"),
    ]),
    M("Changelog", "changelog"),
  ];
</script>

<style>
  .docs-layout {
    @apply pb-10;

    @media (min-width: 769px) {
      @apply flex;
      @apply pt-10;
    }
  }

  .menu {
    @apply w-2/5 pt-24 pr-8;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .doc-contents {
    @media (min-width: 769px) {
      @apply w-3/5;
    }
  }
</style>

<OpenGraph
  data={{
    description:
      "Explore the documentation to learn more about Gitpod.io and Gitpod Self-Hosted.",
    title: "Gitpod Documentation",
    type: "website",
  }}
/>
<div class="docs-layout row">
  <div class="menu">
    <Menu {MENU} />
  </div>
  <div class="doc-contents">
    <Search />
    <MobileMenu {MENU} />
    <slot />
  </div>
</div>
