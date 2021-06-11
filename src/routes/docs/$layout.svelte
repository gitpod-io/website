<script lang="ts">
  import Menu from "../../components/docs/menu.svelte";
  import MobileMenu from "../../components/docs/mobile-menu/index.svelte";
  import Search from "../../components/docs/search.svelte";
  import "../../assets/docs.scss";
  import "../../assets/markdown-commons.scss";

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
    M("Quickstart", "quickstart", [
      M("Go", "quickstart/go"),
      M("Java Spring", "quickstart/java"),
      M("Node/TypeScript/Express", "quickstart/typescript"),
      M("PHP Drupal", "quickstart/drupal"),
      M("PHP Laravel", "quickstart/laravel"),
      M("Python Django", "quickstart/python"),
      M("Python Flask", "quickstart/flask"),
      M("React", "quickstart/react"),
      M("Ruby on Rails", "quickstart/ruby-on-rails"),
      M("Rust", "quickstart/rust"),
      M("Svelte", "quickstart/svelte"),
    ]),
    M("Getting Started", "getting-started"),
    M("Configure", "configure", [
      M(".gitpod.yml", "config-gitpod-file"),
      M("Custom Docker Image", "config-docker"),
      M("Start Tasks", "config-start-tasks"),
      M("VS Code Extensions", "vscode-extensions"),
      M("Exposing Ports", "config-ports"),
      M("Prebuilds", "prebuilds"),
      M("Environment Variables", "environment-variables"),
      M("Checkout and Workspace Location", "checkout-location"),
    ]),
    M("Develop", "develop", [
      M("One workspace per task", "workspaces"),
      M("Life of a workspace", "life-of-workspace"),
      M("Contexts", "context-urls"),
      M("Collaboration & Sharing", "sharing-and-collaboration"),
      M("Command Line Interface", "command-line-interface"),
    ]),
    M("Integrations", "integrations", [
      M("GitLab", "gitlab-integration"),
      M("GitHub", "github-integration"),
      M("Bitbucket", "bitbucket-integration"),
      M("Browser Extension", "browser-extension"),
    ]),
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
      M("Configure a Database", "self-hosted/latest/install/database"),
      M(
        "Configure a Docker Registry",
        "self-hosted/latest/install/docker-registry"
      ),
      M("Configure Storage", "self-hosted/latest/install/storage"),
      M("Configure Nodes", "self-hosted/latest/install/nodes"),
      M("Configure Workspaces", "self-hosted/latest/install/workspaces"),
    ]),
    M("References", "references", [
      M(".gitpod.yml", "references/gitpod-yml"),
      // M("Custom Docker image", "references/gitpod-dockerfile"),
      // M("Architecture", "references/architecture"),
      // M("Troubleshooting", "references/troubleshooting"),
      M("Changelog", "references/changelog"),
      M("Roadmap", "references/roadmap"),
    ]),
  ];
  const MENU_v1 = [
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
