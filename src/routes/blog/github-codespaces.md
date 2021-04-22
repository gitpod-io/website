---
author: svenefftinge
date: Wed May 06 2020 16:00:00 GMT+0000 (UTC)
excerpt: Today, GitHub announced the private beta of GitHub Codespaces, which provide container-based dev environments for GitHub projects.
image: gh-cs-bg.jpg
slug: github-codespaces
subtitle: A Milestone for Automated Development Environments
title: GitHub Codespaces, Welcome to the Party!
---

<script context="module">
  export const prerender = true;
</script>

Today, GitHub announced the private beta of [GitHub Codespaces](https://github.com/features/codespaces), which provide container-based dev environments for GitHub projects. At Gitpod, we are building a similar solution, and while GitHub’s Codespaces don’t fully implement everything we do, they truly embrace the notion of dev environments as code.

This is great news, because it really helps to explain why this is going to change professional software development entirely.

<h2>Dev Environment As Code</h2>

Describing development environments in code has many benefits:

- It eliminates onboarding friction: no matter if you are new to a project, need to go back to an old branch or just picking up development after a few weeks. Just go to your project and start coding immediately.

- Remote work becomes a breeze: now everyone can access source code more securely (no local copies) from any device, including Chromebooks and tablets.

- Everybody gets the same setup: this means that “works on my machine” situations are a problem of the past.

- With Gitpod, you can even take snapshots of any state of your dev environment and share exact clones of it.

It is our vision that **everybody can immediately start working in a fully set-up dev environment on any project, any branch, with any device, and at any time.**

<h2>A Lifesaver for Professional Teams</h2>

As software systems become more complex so do dev environments. Have you ever tried to develop a Kubernetes application locally, set up all the required infrastructure, and launch all microservices on your local machine? Halfway through you’ll find that your expensive MacBook Pro is not a suitable replacement for a datacenter. Even if you eventually manage to get things working it won’t be smooth or remotely close to what you run in production.

When we started working on Gitpod, we had everything running locally in minikube, too. Very quickly we realized that this would not scale. Our SaaS offering is deployed in Kubernetes clusters across the globe—that’s nothing you’d want to replicate locally.

For the past year the whole team has developed Gitpod in Gitpod. Everyone in the team can start coding on any branch immediately. That includes their own preview deployment which is already connected to and fully debuggable from their browser-based development environment. For a more in-depth look at our development pipeline—and what’s in it for you—check out [Chris’ talk](https://www.youtube.com/watch?v=dFMpXUsJcGM) (inlined below) and our [previous post](https://www.freecodecamp.org/news/developing-kubernetes-applications-with-joy/) on the matter.

`youtube: dFMpXUsJcGM`

<h2>Pre-build Everything!</h2>

When reviewing a PR or starting work on that new cool feature, no developer wants to accidentally work with an old state. Imagine wasting hours hunting a bug that’s already fixed on master. Fresh working copies—and ideally dev environments—for each task would be great.

Once dev environments have become code you can pre-build those dev environments ahead of time. **Think CI for your development setup**: on each change in the repository, Gitpod prepares a new dev environment for that change. Rather than having to manually adjust the tool versions, wait for all dependencies to download and for the code to compile, things are ready when you are. We call this [continuous dev environments](/blog/continuous-dev-environment-in-devops).

<h2>At Last a Good Browser IDE</h2>

Given all these benefits, you might wonder why no one did this earlier. After all, developers automate the world on a daily basis. Thinking about it, it’s strange that most developers still set things up manually before they can get down to business.

There have been attempts to automate dev environments in the past (e.g. Docker, Vagrant, Cloud9). These early approaches always came with too many compromises, and their benefits did not quite outweigh the drawbacks. The biggest blocker was that developers could no longer use the powerful tools they normally would, most importantly an awesome Editor/IDE.

This has changed since, with VS Code, a web-technology based IDE has become so popular among developers. However, Microsoft has not open-sourced the browser version of VS Code. For GitHub, a Microsoft-owned company, this is obviously not an issue. For everyone else we have developed Eclipse [Theia](https://dev.to/svenefftinge/theia-1-0-finally-a-good-browser-ide-3ok0).

Theia provides the same functionality as VS Code, even supports VS Code extensions, and comes with an architecture that allows everyone to customize the IDE easily. It is developed as a true open-source, vendor-neutral project at the Eclipse Foundation \*) and is adopted by Google, IBM, RedHat, SAP, arm, Arduino and many more. Mike Milinkovich wrote about the [differences between Theia and VS Code](https://blogs.eclipse.org/post/mike-milinkovich/eclipse-theia-and-vs-code-differences-explained) recently.

This new generation of Theia-based Web-IDEs go way beyond online-playgrounds which are barely sufficient for web development or quick prototypes. Today, we can finally run a professional IDE in a browser tab.

<sub>\*) To avoid misunderstandings: Theia has technically nothing in common with the classic Eclipse IDE, but is an independent project under the umbrella of the Eclipse Foundation.</sub>

<h2>What About GitLab, Atlassian’s Bitbucket, and Other Git Hosting?</h2>

We are thrilled to see GitHub/Microsoft investing in automated development environments as it will help convince developers around the world and get this new way of developing software adopted faster.

But most professional development happens on other platforms such as GitLab, Atlassian’s stack and of course good old GitWeb. Oftentimes companies even employ a mixture of these.

To also serve users beyond just GitHub, we have been focussing on integrating Gitpod with other platforms as well. In December we released support for GitLab, and integration with Atlassian’s Bitbucket (and Jira) will be available soon.

<h2>Closer to Home: Gitpod Self-Hosted</h2>

Chances are that you host your Git repositories or other dev infrastructure in a private cloud, or on a local network where they can't be accessed from the outside. Thus, a hosted IDE service must be on the same private cloud or network. This is possible with [Gitpod Self-Hosted](/self-hosted) which can be installed on Kubernetes and does not require a connection to the public internet.

Today we are releasing a new version which brings Gitpod Self-Hosted on par with Gitpod.io. The new release includes better GitLab integration and a new admin UI. With Gitpod Self-Hosted you can now enjoy this liberating way of developing software with your own GitLab installation.

**Gitpod Self-Hosted is free for up to five users, and a free trial month for unlimited users is available, too.**

<h2>Summary</h2>

We are quickly headed into a wonderful future, where developers are no longer intimidated by tedious and outdated setup procedures. Professional software projects will provide automated, prebuilt development environments that enable teams to start contributing, doing code reviews, reproducing bugs or just exploring new ideas immediately from any device securely.

CI/CD has taught us how versioned, reproducible infrastructure as code is key to scale modern software development. Now it is time to apply these lessons to our development environments and furthermore improve our lead times getting from ideas to production.

Experience the future of software development now!

<div style="text-align: center; margin: 2rem;">
    <a href="https://www.gitpod.io/">
        <button style="cursor: pointer; border: none; padding: 1.5rem 3rem; border-radius: 100px; background-color: #0087BE; color: white; font-weight: 600">Try Gitpod.io</button>
    </a>
</div>
