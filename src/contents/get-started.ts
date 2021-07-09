import type { ContentType } from "../types/get-started-card-content.type";

export const cardContents: ContentType[] = [
  {
    imgSrc: "../../static/images/docs/get-started-cards/quickstart.svg",
    imgAlt: "quick start",
    title: "Quickstart with example project",
    description: "understand the benefits in a learning environment",
    btnHref: "/docs/quickstart",
    btnText: "Start learning",
  },

  {
    imgSrc: "../../static/images/docs/get-started-cards/get-started.svg",
    imgAlt: "get started",
    title: "Get started with your project",
    description: "configure one of your own existing projects",
    btnHref: "/docs/getting-started",
    btnText: "Start building",
  },

  {
    imgSrc: "../../static/images/docs/get-started-cards/screencasts.svg",
    imgAlt: "screencasts",
    title: "Get started with screencasts",
    description: "see all screencasts",
    btnHref: "/screencasts",
    btnText: "Start watching",
  },

  {
    imgSrc: "../../static/images/docs/get-started-cards/configure.svg",
    imgAlt: "configure",
    title: "Configure",
    description: "configure gitpod",
    btnHref: "/docs/configure",
    btnText: "Start configuring",
  },

  {
    imgSrc: "../../static/images/docs/get-started-cards/develop.svg",
    imgAlt: "develop",
    title: "Develop",
    description: "start developing right now",
    btnHref: "/docs/develop",
    btnText: "Start developing",
  },

  {
    imgSrc: "../../static/images/docs/get-started-cards/learn-more.svg",
    imgAlt: "learn more",
    title: "Learn more about Gitpod",
    description: "lorem ipsum",
    btnHref: "/docs/introduction",
    btnText: "Start exploring",
  },
];
