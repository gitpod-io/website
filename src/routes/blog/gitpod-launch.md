---
author: svenefftinge
date: Mon Apr 5 2019 15:00:00 GMT+0000 (UTC)
excerpt: Every day developers waste millions of hours switching contexts between projects and branches, setting up development environments, or
image: teaser-launch-min.jpg
slug: gitpod-launch
subtitle: No Setup, Less Waiting, More Flow
teaserImage: teaser-launch-min.jpg
title: Introducing Gitpod — Frictionless Coding on GitHub
---

Every day developers waste millions of hours switching contexts between projects and branches, setting up development environments, or simply waiting for builds to complete.

This friction is not only time consuming but is a serious barrier for contributors. Reading through a long list of setup instructions and messing up your own laptop is just too much effort.

Today, we are happy to announce the launch of [Gitpod.io](https://gitpod.io), an online service that provides disposable, ready-to-code development environments for GitHub projects.

## One-Click Dev Environments for GitHub

Here's how Gitpod works: You are on GitHub and want to start working on a project. Instead of going through the manual setups, etc. you simply click a button to start a ready-to-code dev environment in your browser. You can now code, review, or just try out the project. Once you are done you simply close the tab.

![Gitpod button added by Gitpod browser extension](../../../static/images/blog/gitpod-launch/browser-ext.png)

Don’t see the button on GitHub yet? You need to [install a small browser extension](/docs/browser-extension/) to get it. Alternatively, you can just prefix any GitHub URL with “[gitpod.io/#](https://gitpod.io/#)”.

You can try Gitpod right now. It's free for public repositories.

## No Setup

Not all projects are equal. We maintain a [developer friendly docker image](https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile) that includes all the commonly used tools and version managers. But you can point to your own docker image in a **.gitpod.yml** file. Gitpod will pick it up and even build the image if needed. Read [Gero's post](/blog/docker-in-gitpod/) for more details.

With Gitpod, contributors don’t need to go through a list of usually outdated setup instructions. Instead, they get exactly what they need for the project at hand with no additional effort. As a side-effect, any "works-on-my-machine" scenarios are eliminated, because every team member uses the same working setup on the same kind of machine in the cloud. Since the **.gitpod.yml** is versioned with the code, going back to old releases and branches becomes super easy, too. We call this [dev environment as code](/blog/dev-env-as-code).

To optimize the experience, the **.gitpod.yml** accepts [further configuration](/docs/configuration/), where you can automatically start builds, watchers and dev servers in multiple terminals. You can configure how they appear in the IDE layout and hook up all your web ports and previews.

As a project owner you should do everything you can to streamline the experience for contributors, so everybody including yourself can focus on being creative and writing code. Gitpod lets you automate the setup and make sure developers can access a dev environment that really is ready to code.

A great example is [ssloy's tinyraytracer project](https://github.com/ssloy/tinyraytracer/wiki). It's a tutorial for raytracing in C++ and is configured so it runs the build and automatically opens the rendered graphics. The author has even added Gitpod buttons to individual steps in the tutorial to make following along easier.

![Tinyraytracer Gitpod workspace](../../../static/images/blog/gitpod-launch/tinyrt.png)

## Less Waiting

There is an additional bit of friction that every developer has to go through regularly:

Running the build and downloading dependencies.

Starting today, [the new Gitpod app is available on the GitHub marketplace](https://github.com/apps/gitpod-io). It is the first of its kind and the only one in the new IDE category.

Once you've installed the app for your GitHub repository, it will pre-build dev environments on every commit. So when anybody opens a Gitpod environment on your project, the dev environment is opened as described above. But now also the build ran through and all dependencies are already there.

We call this feature prebuilt workspaces and you can read more about it in [Chris' post](/blog/prebuilds/).

![Prebuilt Workspaces](../../../static/images/blog/gitpod-launch/prebuilt-workspaces.png)

## More Flow

Your dev environment opens differently depending on the GitHub page you are coming from. You can, for instance, open branches or files by simply going to the respective GitHub page and pressing the button (or prefixing the URL) there.

When coming from an issue, Gitpod understands you want to fix it, so you’ll get a fresh local branch and the commit message is prepared with a reference to the issue.

Starting a workspace from a pull request will open in code-review mode. The list of changes is opened on the left so you can easily go through them and view the details in diff editors on the right. Of course, you can comment within the IDE and even submit your code review.

Even if you prefer your local machine for development, being able to do [deep code reviews](/blog/when-code-reviews-lgtm/) in a browser is a great way to improve your workflow.

![Inlined Code Review](../../../static/images/blog/gitpod-launch/inline-comments.png)

## A Complete IDE Running in the Cloud

While Gitpod keeps the convenience and accessibility of online coding playgrounds and sandboxes, it is not a toy but a complete dev environment running in the cloud.

We teamed-up with Google, Ericsson, Arm and Red Hat to develop the open-source project [Eclipse Theia](https://theia-ide.org). The project puts [VS Code](https://code.visualstudio.com/)’s state-of-the-art technology and UX into the browser based on an extensible architecture that is optimized for the cloud.

Gitpod already comes with several VS Code extensions pre-installed (such as Go support from Microsoft’s own extension). We will be adding more popular VS Code extensions shortly, and later allow users to define any extensions they want.

In addition to one of the best code editors, Gitpod environments provide full featured terminals backed by Linux containers running in the cloud. As a result, you get the same command line tools you would use locally together with the hottest IDE tech available today. And all of that in a browser tab.

## Collaboration

Gitpod comes with two major features supporting collaboration.

- [Sharing running dev environments](/docs/sharing-and-collaboration) with other users comes in handy if you want to look at code with a colleague to hunt down a bug together or do some pair programming. Collaborators will see the same code you see and even the terminals are synced and shared.

- [Snapshots](/blog/workspace-snapshots/) are useful in many ways. In a nutshell, they allow taking an immutable copy of your dev environment at any point in time. You can share the provided link wherever you want. Users opening such a snapshot link will get an exact clone of the environment including all state and even UI layout. This feature is great for sharing reproducibles in issues, but also good for blog posts or solutions on Stack Overflow.

![Collaboration: Share Running Workspace or Snapshot](../../../static/images/blog/gitpod-launch/collaboration.png)

## Pricing

An important part of leaving the beta was to find a good pricing model that addresses the needs for the various user groups.

We think we have found a good balance by providing the following individual subscription options:

- a **free 100-hour per month plan** for open-source development
- a **paid 100-hour per month plan** for individuals working privately
- a **paid unlimited plan** for professional use

_(I know some of you are lucky enough to do professional open-source. Decide what works best for you in that case ;-))_

We also offer **team subscriptions**, which allow managers to buy a batch of seats and assign them to the team.

And, of course, a special **students discount** is in store, eligible if your primary GitHub URL belongs to an educational institution.

## Thank You ❤️

I want to take the opportunity to thank all the people who have helped to make Gitpod a reality: all the [enthusiastic](https://twitter.com/JeremyJaydan/status/1096742668137246721) [early](https://twitter.com/RalfDMueller/status/1054079167841660928) [adopters](https://twitter.com/doppelganger9/status/1088926330857680896) who provided [great feedback](https://github.com/gitpod-io/gitpod/issues) during the beta phase; contributors who have helped by identifying bugs and by sharing their use cases; and of course the [Eclipse Theia community](https://github.com/theia-ide/theia/graphs/contributors) working with passion on an open-source IDE platform for the future.

Furthermore, I want to thank Michael Bernstein from [Reify](https://www.reifyworks.com/) for clarifying our messaging with us and Kelly Fitzpatrick and the rest of the [Redmonk](https://redmonk.com/) team for their guidance and helpful feedback.

Finally, of course, I want to send a big shout out to my friends at [TypeFox](https://www.typefox.io/about/). You are absolutely awesome and being able to work with you on such a great product is everything I want.
