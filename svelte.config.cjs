const adapterNetlify = require("@sveltejs/adapter-netlify");
const { mdsvex } = require("mdsvex");
const headings = require("remark-autolink-headings");
const slug = require("remark-slug");
const sveltePreprocess = require("svelte-preprocess");
const pkg = require("./package.json");
const remarkSetImagePath = require("./src/utils/remark-set-image-path.cjs");
const remarkEmbedVideo = require("./src/utils/remark-embed-video.cjs");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapterNetlify(),
    amp: false,
    appDir: "_app",
    files: {
      assets: "static",
      hooks: "src/hooks",
      lib: "src/components",
      routes: "src/routes",
      template: "src/app.html",
    },
    hydrate: true,
    prerender: {
      crawl: true,
      enabled: true,
      force: false,
      pages: ["*"],
    },
    router: true,
    ssr: true,
    target: "#svelte",
  },

  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: [
    sveltePreprocess({ postcss: true, scss: true }),
    mdsvex({
      extensions: [".md"],
      layout: {
        blog: "./src/components/blog/blog-content-layout.svelte",
        docs: "./src/components/docs/docs-content-layout.svelte",
      },
      remarkPlugins: [
        slug,
        headings,
        remarkSetImagePath,
        [
          remarkEmbedVideo,
          {
            width: 800,
            height: 400,
            noIframeBorder: true,
          },
        ],
      ],
    }),
  ],
};
