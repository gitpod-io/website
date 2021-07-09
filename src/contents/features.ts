import type { Feature } from "../types/feature.type";
// @ts-ignore
import Workspaces from "../components/workspaces.svelte";
import { terminalSource } from "../contents/terminal";
export const features: Feature[] = [
  {
    title: "Save time with Prebuilds",
    paragraph:
      "Gitpod continuously builds your Git branches like a CI server. This means no more waiting for dependencies to be downloaded and builds to finish.",
    moreButton: {
      text: "More about prebuilds",
      href: "/docs/prebuilds",
    },
    terminal: {
      source: terminalSource,
      skipToEnd: true,
    },
  },
  {
    title: "Start fresh with ephemeral dev environments",
    paragraph:
      "Dev-environments-as-code assure you are always starting from a clean state and never get dragged into long-living stateful environments. The end of all works-on-my-machine situations.",
    moreButton: {
      text: "More about Dev-Environments-as-Code",
      href: "/blog/dev-env-as-code",
      type: "secondary",
    },
    previewComponent: Workspaces,
  },
];
