---
author: svenefftinge, JohannesLandgraf
date: Tue, 25 Aug 2020 13:00:00 UTC
excerpt: As of today Gitpod is open source under the AGPL license at github.com/gitpod-io/gitpod. This allows the community to participate in the
image: teaser.jpg
slug: opensource
subtitle:
teaserImage: teaser.jpg
title: Gitpod is now Open Source 🎉
---

<script context="module">
  export const prerender = true;
</script>

<style>
    [class*="btn"] {
        @apply mt-xx-small;
    }
</style>

As of today Gitpod is open source under the AGPL license at [github.com/gitpod-io/gitpod](https://github.com/gitpod-io/gitpod). This allows the community to participate in the development of Gitpod, provides more transparency and makes it even easier for developers to use and integrate Gitpod in their workflows.

For those of you who know us, this probably does not come as a big surprise. Working in open source is in our DNA and everything we’ve created over the past 10 years, including [Theia](https://github.com/eclipse-theia/theia), [Xtext](https://github.com/eclipse/xtext), [Open VSX](https://github.com/eclipse/openvsx) and many other projects have been open source. In fact, Gitpod was our only closed-source project and it is a relief to change that going forward.

<h2 class="h1">Open-Source Contributions</h2>

Contributing to Gitpod should be easy and accessible for everyone. All contributions are welcome, including pull requests, issues, documentation as well as updates and tweaks, blog posts, tutoials, and more. Please head over to [Github](https://github.com/gitpod-io/gitpod) to find out about the various ways you can contribute and join our [Gitpod Community](https://community.gitpod.io/).

Over the past year, Gitpod has simplified contributions to many open source projects (see [contribute.dev](https://contribute.dev/) for examples). Today, everyone in our team is excited to share our own streamlined development pipeline including Kubernetes preview deployments, an aggressively cached build system, our own slim and fast CI system and of course Gitpod, which continuously beams us into ready-to-code (and debug) dev environments. [Chris](https://github.com/csweichel) gave a great talk about this setup earlier this year 👇

`youtube: dFMpXUsJcGM`

Naturally, we develop Gitpod in Gitpod. This allows the whole team to spin up fully initialized, remote dev environments on any branch at any time.

In line with the [pets vs. cattle](http://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/?utm_source=thenewstack&utm_medium=website&utm_campaign=platform) analogy of the cloud-native world, we treat dev environments as automated (yet customizable) resources you can spin up when you need them and close down (and forget about) when you are done with your task. Once you experience the peace of mind of automated, ephemeral dev environments you never want to go back.

Sven will run a webinar next week on Thursday, where we will showcase how we use Gitpod internally at Gitpod and how much it improves our workflow. Hope to see you there!

<a class="btn-conversion" href="https://us02web.zoom.us/webinar/register/5415977565541/WN_amoa6lnEQniLykXUYCDyBQ" target="_blank">
    How Gitpod uses Gitpod
</a>

<h2 class="h1">Gitpod Self-Hosted is Now Free</h2>

The [SaaS offering of gitpod.io](https://www.gitpod.io/pricing) remains the easiest way to streamline your development workflows with continuously prebuilt dev environments.

In case you want to host Gitpod on your own infrastructure or private cloud, starting today, Gitpod Self-Hosted is free for unlimited users. Organizations using Gitpod Self-Hosted can purchase an enterprise license in order to get additional features like:

- [Snapshots](https://www.gitpod.io/features/#snapshot) (share a reproducible workspace with your team)
- [Live Share](https://www.gitpod.io/features/#share) (invite others into your running workspace)
- [Unlimited Prebuilds](https://www.gitpod.io/features/#prebuilt) (making ephemeral dev environments possible)
- Admin Dashboard

Offering a paid plan for enterprises makes it possible for us to keep working towards building a new category in developer tooling, which completes modern DevOps pipelines. In the future we will add additional functionality to both the open source code as well our paid offering.

<a class="btn-conversion" href="https://www.gitpod.io/self-hosted">
    Start for free
</a>
