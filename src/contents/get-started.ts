import type { ContentType } from "../types/get-started-card-content.type";

export const cardContents: ContentType[] = [
  {
    imgSrc: "../../static/images/docs/get-started-cards/quickstart.svg",
    imgAlt: "quick start",
    title: "Quickstart with example project",
    description: "Understand the benefits in a learning environment",
    btnHref: "/docs/quickstart",
    btnText: "Start learning",
  },

  {
    imgSrc: "../../static/images/docs/get-started-cards/get-started.svg",
    imgAlt: "get started",
    title: "Get started with your project",
    description: "Configure one of your own existing projects",
    btnHref: "/docs/getting-started",
    btnText: "Start building",
  },

  {
    imgSrc: "../../static/images/docs/get-started-cards/screencasts.svg",
    imgAlt: "screencasts",
    title: "Get started with screencasts",
    description: "Learn more about Gitpod with screencasts",
    btnHref: "/screencasts",
    btnText: "Start watching",
  },

  {
    imgSrc: "../../static/images/docs/get-started-cards/configure.svg",
    imgAlt: "configure",
    title: "Configure your workspace",
    description: "Create configuration file for your project",
    btnHref: "/docs/configure",
    btnText: "Start configuring",
  },

  {
    imgSrc: "../../static/images/docs/get-started-cards/develop.svg",
    imgAlt: "develop",
    title: "Start developing in your environment",
    description: "Learn how to work on your development environment",
    btnHref: "/docs/develop",
    btnText: "Start developing",
  },

  {
    imgSrc: "../../static/images/docs/get-started-cards/learn-more.svg",
    imgAlt: "learn more",
    title: "Discover more about Gitpod",
    description: "Automated and ephemeral dev environments in the cloud.",
    btnHref: "/docs/introduction",
    btnText: "Start exploring",
  },
];
