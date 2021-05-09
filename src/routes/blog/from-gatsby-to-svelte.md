---
author: mikenikles
date: Sat, 08 May 2021 18:00:00 UTC
excerpt: A very tight deadline, a small team and a complete redesign - insights into why we use Svelte.
image: teaser.png
slug: from-gatsby-to-svelte
subtitle:
teaserImage: teaser.png
title: From Gatsby to Svelte in 3 weeks
---

**tl;dr:**

- [Gitpod](https://www.gitpod.io) recently announced new funding and a completely new brand ([read more](https://www.gitpod.io/blog/next-chapter-for-gitpod)) 🍊.
- As part of that, we rebuilt the website from scratch, replacing React & Gatsby with [Svelte](https://svelte.dev) & [SvelteKit](https://kit.svelte.dev).
- Look at the [source code on GitHub](https://github.com/gitpod-io/website) or start the website in a Gitpod development environment by visiting https://gitpod.io#https://github.com/gitpod-io/website.
- Listen to the Svelte Radio episode "[Migrating from Sapper to SvelteKit](https://share.transistor.fm/s/507ad528)" where I shared more details.

## What we had previously...

Prior to April 8, 2021 the Gitpod website was built with React & Gatsby and the source code is [available on GitHub](https://github.com/gitpod-io/retired-gatsby-website). A static site was deployed to Netlify and a Netlify function took care of processing HTML form submissions by sending the form content via email to the Gitpod team (e.g. contact us, enterprise license requests, etc.)
We leveraged the Gatsby ecosystem by adding plugins to the [`gatsby-config.js`](https://github.com/gitpod-io/retired-gatsby-website/blob/master/gatsby-config.js) file which took care of things like Markdown parsing and embedding Youtube videos, among other things.

### ... and why we started from scratch

What was wrong with the previous stack? Why did we decide to rewrite the website with different technologies?
Overall, Gatsby & React is a great choice and gets the job done just fine. Many people are already familiar with React and are ready to contribute with minimal effort.

**However**, at Gitpod we care deeply about developer experience & productivity - this is what our product is all about afterall. This is where we believe [Svelte](https://svelte.dev) and [SvelteKit](https://kit.svelte.dev) lead the pack in today’s web application development. By leveraging [Vite](https://vitejs.dev), developing a SvelteKit web app is as instant as it gets, it even persists local state when hot reloading the web application!

In addition, we had an extremely tight timeframe from the start of the project to the [announcement of our funding and the new brand](https://www.gitpod.io/blog/next-chapter-for-gitpod). While I have had two years of experience with Svelte & Sapper, the other three developers had not worked together previously and were not familiar with Svelte. Nevertheless, I was confident the rest of the team would pick up Svelte and be productive right away. To learn Svelte, all you really need is work your way through the [tutorial](https://svelte.dev/tutorial).

**To me, building a SvelteKit app from scratch felt less risky than modifying an existing Gatsby codebase!**

This is especially true in our case where we had to apply a completely new brand across all pages and would have had to learn Gatsby too.

## The implementation

SvelteKit’s public beta [was announced](https://svelte.dev/blog/sveltekit-beta) at around the same time as we started our project. Knowing there would be bugs - the maintainers explicitly warned about that - we decided to start with a [Sapper](https://sapper.svelte.dev) app. Sapper is the predecessor of SvelteKit and was well established. There was also a promise from the maintainers to provide a [frictionless migration path](https://kit.svelte.dev/migrating).

With one week to go, we migrated from Sapper to SvelteKit ([pull request](https://github.com/gitpod-io/website/pull/120)). The team’s feedback was clear:

![Vote on the SvelteKit developer experience](../../../static/images/blog/from-gatsby-to-svelte/sveltekit-devx-vote.png)

Remember that frictionless migration we were promised? It was indeed smooth as butter! At this point, a huge thank you to the Svelte maintainers & contributors for their incredible work ❤️ !

We also configured [Tailwind CSS](https://tailwindcss.com), [mdsvex](https://mdsvex.com) and the [`adapter-netlify`](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify).

### Gatsby plugins

The Svelte ecosystem is not (yet) as established as the Gatsby ecosystem. However, thanks to the flexibility of mdsvex, we were able to use some Markdown related [remark](https://github.com/remarkjs/remark) plugins. For some use cases, we wrote [our own plugins](https://github.com/gitpod-io/website/tree/main/src/utils) to cover specific needs.

Dana Woodman recently shared an interesting [thought on the Svelte ecosystem](https://twitter.com/DanaWoodman/status/1390030682789859329) that is worth paraphrasing: Many existing, vanilla JS libraries work effortlessly with Svelte which opens up an even wider ecosystem than what you get with React.

## Lessons learned

### Svelte & SvelteKit

SvelteKit is in public beta and you may run into a rough edge or two - nothing though that makes it a showstopper. For example, we weren’t able to use prerendering to deploy static pages and launched the website with server-side rendering through a Netlify function instead. This has since been fixed, we upgraded to the latest version and the majority of pages are now static HTML files - taking full advantage of SvelteKit’s flexibility to mix & match SSR, SPA and static pages.

### Tailwind CSS

We configured Tailwind because the product team uses it and we want to align as much as possible. On the website team, only one out of four team members was familiar with it and we decided not to enforce the use of Tailwind. In hindsight, this was probably a mistake as there is now a mix of custom CSS and Tailwind that needs to be cleaned up over time. However, it was a risk mitigation worth applying given the tight deadline.

Going forward, we are likely going to develop a lightweight pattern library either by abstracting Tailwind classes in Svelte components or [extracting components](https://tailwindcss.com/docs/extracting-components) as per the Tailwind CSS docs.

### Netlify adapter

A [bug](https://github.com/sveltejs/kit/issues/930) in the Netlify adapter caused a short-term headache because it completely ignored any redirects configured in the `netlify.toml` file. This is being worked on at the moment and we were able to apply [a temporary workaround](https://github.com/sveltejs/kit/issues/930#issuecomment-817216700).

### Differences between development & production environments

Due to the use of SvelteKit adapters, you may run into different behavior when you run in development vs production. I recommend you set up automated preview deployments for each pull request and also test locally with the generated production web app. In our case, we can start a production-like environment with `npm run deploy && npm start` to verify code changes before we push the code.

### No CSS on the error page

We noticed the `routes/$error.svelte` page lost all CSS when we deployed the web app ([GitHub issue](https://github.com/sveltejs/kit/issues/715)). We had to extract the header, footer and error page CSS into a separate CSS file and include it on the error page. Three days before our go-live date, that bug was fixed in SvelteKit.

## Conclusion

**Would we do it again?**
Absolutely!

**Was it risky?**
A bit, due to the unknowns of SvelteKit’s beta label when we started the project, but given we had Sapper as a fallback option it was calculated risk. With today’s state of SvelteKit and the very recent bug fixes, the Sapper fallback is no longer needed and I recommend starting with SvelteKit.

**Should you use SvelteKit in production?**
I can now say with confidence, go for it. As you work on your web app, deploy it to a production-like environment frequently to avoid any deployment surprises.

All in all, I am excited about the future of web development not least because Svelte is redefining what modern web development looks like - both from a developer and end user experience!

### What’s next?

Head over to https://github.com/gitpod-io/website to look at the source code or experience how we work by opening an ephemeral development environment with the following button:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/website)

To explore your own project in an online development environment, prefix your GitHub, GitLab or Bitbucket repository URL with `gitpod.io#`. [Learn more about that in the documentation](/docs/context-urls).

We welcome community contributions 🙏 . Please let us know what you think of the website and its implementation.
