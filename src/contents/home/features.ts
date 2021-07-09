import type { Feature } from "../../types/feature.type";
import { terminalSource } from "../terminal";

export const features: Feature[] = [
  {
    title: "Think CI/CD for dev environments",
    paragraph:
      "We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.",
    moreButton: {
      text: "More on prebuilds",
      href: "/docs/prebuilds",
    },
    documentationLink: "/docs",
    terminal: {
      source: terminalSource,
    },
  },
];
