import type { MenuEntry } from "../../types/menu-entry.type";

function M(title: string, path: string, subMenu?: MenuEntry[]): MenuEntry {
  return {
    title,
    path: "/docs" + (path ? "/" + path : ""),
    subMenu,
  };
}

export const MENU: MenuEntry[] = [
  M("Introduction", ""),
  M("Quickstart", "quickstart", [
    M("Deno", "quickstart/deno"),
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
    M("Create a team", "teams"),
    M("Local Companion", "develop/local-companion"),
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
    M("Command Line Interface", "command-line-interface"),
    // M("Custom Docker image", "references/gitpod-dockerfile"),
    // M("Architecture", "references/architecture"),
    // M("Troubleshooting", "references/troubleshooting"),
    M("Languages & Framework", "languages-and-frameworks"),
    M("Changelog", "references/changelog"),
    M("Roadmap", "references/roadmap"),
  ]),
];

export interface MenuContext {
  prev?: MenuEntry;
  thisEntry?: MenuEntry;
  next?: MenuEntry;
}

export function getMenuContext(
  slug: string,
  menu: MenuEntry[] = MENU,
  context: MenuContext = {}
): MenuContext {
  for (const e of menu) {
    if (context.next) {
      return context;
    }
    if (context.thisEntry) {
      context.next = e;
      return context;
    } else if (e.path === slug) {
      context.thisEntry = e;
    } else {
      context.prev = e;
    }
    if (e.subMenu) {
      getMenuContext(slug, e.subMenu, context);
    }
  }
  return context;
}
