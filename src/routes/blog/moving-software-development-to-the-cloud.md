---
author: svenefftinge, JohannesLandgraf, csweichel
date: Tue Dec 09 2020 8:00:00 GMT+0000 (UTC)
excerpt: Fully automated development environments will be the standard for professional developers in 5-10 years.
image: teaser.jpg
slug: moving-software-development-to-the-cloud
subtitle: Gitpod & GitHub Codespaces
teaserImage: teaser.jpg
title: Moving software development to the cloud ☁️
---

<script context="module">
  export const prerender = true;
</script>

As [described earlier this year](/blog/github-codespaces), Microsoft's investment into GitHub Codespaces is helping to move more into the mainstream what Gitpod has been pioneering on during the past years. This week is GitHub Universe which is why we thought it's time to share some additional context and information around the rapidly spreading idea of automated, cloud-based dev environments within the developer community. Furthermore we'd like to congratulate GitHub for joining us in moving software development to the cloud 🙌

Since [we've started building Gitpod in July-2017](/blog/gitpod-online-ide), we firmly believe that fully-automated development environments will be the standard for professional developers in 5-10 years. With a big player like Microsoft entering the market this whole space will gain additional velocity 🚀

We certainly welcome the additional push Codespaces will bring, but it is important to communicate how [Gitpod compares to Codespaces](/gitpod-vs-github-codespaces).

<h2>Gitpod is Open-Source, Multi-Cloud, and Works With GitLab, GitHub, and Bitbucket</h2>

Gitpod is an **open-source platform** which means you get full transparency over how Gitpod works and can even contribute to it. The [vibrant open-source community](https://community.gitpod.io/) of Gitpod welcomes everyone, and empowers them to develop additional features without restrictions.

Furthermore, you can run Gitpod on your own infrastructure and any cloud provider. **Gitpod seamlessly works with GitHub, GitLab and Bitbucket** and can be deployed to public, private or hybrid clouds, neatly integrating into your infrastructure, **giving you full control of your system and your source code**.

<h2>Gitpod is Powerful</h2>

As a highly-optimized Kubernetes application **Gitpod is built on next-gen container technology** instead of VMs. This allows Gitpod to be extremely resource efficient giving you the best 💥 for the 💵

Compared to virtual machines, isolating workspace containers from each other is harder. At Gitpod we’ve integrated the latest container isolation mechanisms that securely allow users to benefit from the resource efficiency of containers while still having root privileges. For the user this means full access to `sudo` and `docker` 🐳 Here’s a [great technical presentation](https://youtu.be/l4I2TVAnBuw?t=174) explaining how we make this happen.

The result is that Gitpod offers more powerful dev environments with a small ecological footprint. Furthermore, we run Gitpod.io on a 100% carbon-neutral cloud service ❤️🌍

<h2>Gitpod is Fast</h2>

Gitpod is not only extremely fast because of the higher efficiency, but also because of what we call [prebuilds](https://www.gitpod.io/docs/prebuilds). Let’s take a closer look.

The metric that matters here is the time it takes until a dev environment is **ready-to-code**. Ready-to-code means that developers can actually start writing code and don’t have to wait for builds, dependencies to download or code generators to run.

With GitHub Codespaces and other solutions whenever you start a new dev environment, you are left with a raw copy of the code. So before you start writing code, you’ll need to run a bunch of processes and wait until they are finished.

Instead Gitpod prebuilds dev environments when a new commit is pushed to the remote repository. The following diagram illustrates the idea:

![Prebuilds Diagram](https://user-images.githubusercontent.com/372735/101493570-870aa000-3966-11eb-9fe1-e32eb80449f0.png)

The advantages of having your dev environments prebuilt can not be overstated. For the [vscode repository](https://github.com/gitpod-io/vscode) we measured a 15x difference.

We believe prebuilding dev environments the way Gitpod does it, is key towards [“dev environments as code”](https://www.gitpod.io/blog/dev-env-as-code). Without prebuilds, developers have to manually maintain and reuse their dev environments, because of the manual labour put into them. Those stateful environments drift apart over time and teams are once again working in very different setups, wasting time and energy with the resulting problems and surprises. With Gitpod "it works (or doesn't work) on my machine is a thing of the past.

<h2>The Road Ahead</h2>

The real competition is the habit of maintaining stateful environments on overpowered local machines. We welcome GitHub and Microsoft to join forces in convincing developers around the world about the workflow and productivity benefits of automated, cloud-based dev environments 🥰

We are excited about the things we announced yesterday around [Root, Docker and VS Code](https://www.gitpod.io/blog/root-docker-and-vscode/) and are already working on big plans we have for next year 🤓

Ephemeral dev environments are going to democratize software development. Allowing anyone to get into a productive coding state on any of their projects and branches with the click of a button is a massive productivity boost. In addition we keep the entire devops pipeline in a centralized, managed system, which provides more security and observability to today’s developer teams.

We will continue to focus on automating the provisioning of dev environments that blend in with your existing workflow, integrate into your existing infrastructure and run on any cloud or your own clusters. [We do all of this in the open](https://github.com/gitpod-io/gitpod) and invite everyone to join us in building an open platform for secure, collaborative and always-ready-to-code development environments for all developers.

If you want to learn more you can start with our [Introduction to Gitpod](http://www.gitpod.io/docs).
