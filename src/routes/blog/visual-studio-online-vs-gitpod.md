---
author: svenefftinge
date: Tue Nov 05 2019 16:16:17 GMT+0000 (UTC)
excerpt: With Visual Studio Online (VSO) Microsoft is entering the space of cloud-based development environments. So, what are the differences? Glad
image: gitpod-vs-code-online.png
slug: visual-studio-online-vs-gitpod
subtitle: What are the differences?
title: Visual Studio Online vs Gitpod
---

<script context="module">
  export const prerender = true;
</script>

With [Visual Studio Online](https://visualstudio.microsoft.com/services/visual-studio-online/) (VSO) Microsoft is entering the space of cloud-based development environments. So, what are the differences? Glad you asked:

<h2 class="h1">Next Generation Cloud IDE</h2>

Cloud IDEs are not exactly a new thing. Platforms like Cloud9 or Eclipse Che have been around for quite some time. However, these days we see the advent of a new generation of cloud IDEs, which are either based on VS Code, like VSO, or on the vendor-neutral alternative [Eclipse Theia](https://theia-ide.org), such as Gitpod.

Make no mistake, the “Eclipse” in Eclipse Theia doesn’t mean it is based on the classic Eclipse IDE, but that it is governed by the [Eclipse Foundation](https://www.eclipse.org/org/) rather than controlled by a single company. The Eclipse Foundation is a not-for-profit Open-Source Foundation.

> This is open-source at its best, as it means others can innovate on top of a stable platform without risking the project is making unexpected turns.

Theia has not even seen a 1.0 release, yet, but is already adopted by many companies, such as Google, ARM, Arduino, RedHat, IBM, SAP, Ericsson and yes, Gitpod. We actually started the project together with Ericsson and are still among the most active contributors.

With regards to features neither VS Code nor Theia has a significant competitive advantage over the other as both support VS Code extensions and the UI is almost identical. Theia is more flexible when it comes to extending the core IDE, though, as you can build all kinds of modern cloud and desktop IDEs based on it. But as an end user of Gitpod this doesn't really make a difference as we are embracing the look and feel of VS Code.

Long story short, from the user’s perspective the IDE itself is a common good and therefore not a real differentiator, so we need to dig a little deeper to discover the real differences.

<h2 class="h1">Continuous Dev Environments</h2>

[Continuous Dev Environments](/blog/continuous-dev-environment-in-devops) are at the core of Gitpod.

> We believe that the way to go are short-lived dev environments that are easy and fast to create from any Git branch.

For that we eliminated any ‘create environment’-wizards and dashboards standing between you and your dev environment. With Gitpod you just go to your Git project and start coding. GitHub or GitLab is your dashboard.

In the launch post for VSO disposable dev environments are mentioned, which is an important part of our vision, but unfortunately VSO doesn’t embrace it in the actual product. After getting through the account creation of VSO, you land on a dashboard and create a dev environment through a form based configuration dialog. Due to the lack of prebuilds, creating fresh dev environments all the time is tedious, as you need to wait for the build, downloading dependencies and running tests. This dashboard-centric approach encourages people to reuse their workspaces instead of relying on a well-working, automated setup continuously.

Gitpod, on the other hand, builds your branches similar to a CI build _before_ you open a dev environment. This way you are really ready-to-code whenever you open a workspace. Disposable dev environments really need such a feature as you’d otherwise waste your time on [watching your build](/blog/prebuilds).

<h2 class="h1">Self Hosting</h2>

Gitpod can be installed on any Kubernetes cluster and deeply integrates with your existing tool chain. Whether you use GitHub, GitLab or Bitbucket a deep integration is possible, providing a frictionless dev experience. We also support custom OAuth and styling/re-branding so you could even use our technology in the context of your branded service or product.

On VSO there is something called ‘self-hosted’ but that doesn’t mean you can self host VSO itself. Instead, you can only point it to hardware running elsewhere and start dev environments there. You are still stuck in Microsoft / Azure land.

<h2 class="h1">DX</h2>

A list of checkboxes doesn’t make a good product, although in terms of features Gitpod definitely is ahead of VSO, as it supports capabilities like snapshots, prebuilds, the deep integration with GitHub and GitLab or all the advanced automation possibilities the configuration allows.

That said, VSO is still in beta and they have features on their agenda that are also not yet supported on Gitpod, such as starting Windows VMs.

Anyhow, the Gitpod team is not striving for an ever growing feature list. Instead,

> we are focussing on a coherent developer experience (DX) that doesn’t get into your way, but lets you focus on coding.

<h2 class="h1">Microsoft Monopoly?</h2>

Not really related to product functionality, but I’m honestly a little concerned about the massive control MS has gained over the developer world in the last few years. They have hired awesome talent and allow them to create crazy good developer products such as TypeScript and VS Code. Acquiring GitHub was another huge cornerstone and I wonder if the other big tech companies don’t realize this or whether they already have given up on this.

For GitHub, GitLab seems to be the only real competitor and Azure DevOps is trying to take over the CI tools space. [VS Code has surpassed 50% market share](https://insights.stackoverflow.com/survey/2019/#development-environments-and-tools) which I believe is the highest number for an IDE/Editor in history. The stuff MS has created is amazing and the people behind them are great and friendly engineers, but for the rest of the industry is definitely not healthy to have everything under control of a single vendor as it hinders competition and with that diversity and inventions.

<h2 class="h1">Conclusion</h2>

In this post I covered the most important differences between Gitpod and Visual Studio Online. In a nutshell:
on the IDE feature level there are not many differences, **but**

- regarding how dev environments are provisioned, Gitpod’s approach is clearly leading the pack.
- Self-hosting is not really supported by VSO and
- Microsoft is growing a little too dominant in the developer world these days.

Please let us know if you have further questions.
