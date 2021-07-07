---
author: mikenikles
date: Wed, 30 Jun 2021 3:00:00 UTC
excerpt: Stop maintaining your local development environment. Instead, automate the setup once and use a new environment for each task you work on - available in seconds and always ready-to-code.
image: teaser.jpg
slug: i-said-goodbye-to-local-development-and-so-can-you
subtitle:
teaserImage: teaser.jpg
title: I said goodbye to local development and so can you
---

<script context="module">
  export const prerender = true;
</script>

**Key Takeaways**

- Individual developer efficiency is hard to measure, but directly impacts a company’s bottom line and team morale.
- Remote work requires developers to onboard in isolation, a process that was already challenging when teams were co-located.
- Onboarding instructions are often outdated, as are automated onboarding scripts because only new hires run them.
- www.gitpod.io provides automated, one-off development environments you spin up in the cloud for each task. In seconds, repeatedly, and securely.

## Table of contents

- [What it’s like today](#what-its-like-today)
  - [Open source project onboarding](#open-source-project-onboarding)
- [Meet Alice and Bob](#meet-alice-and-bob)
  - [Set up a new project](#set-up-a-new-project)
  - [Develop a new feature](#develop-a-new-feature)
  - [Switch context](#switch-context)
  - [Set up a new computer](#set-up-a-new-computer)
  - [Contribute to open source projects](#contribute-to-open-source-projects)
- [What’s the catch?](#whats-the-catch)
- [Conclusion](#conclusion)

## What it’s like today

Whether you recently joined a new team or contributed to an open source project for the first time, I’m quite sure you spent anywhere from an hour to a few days onboarding. If you were lucky, other contributors provided detailed, up-to-date instructions you could follow. Possibly even commands you could copy & paste and watch your development environment set itself up one step at a time. If this is your experience, congratulations on finding such a great and diligent team - tell them what an awesome job they did 🤩!

> More often than not though, this is not what an onboarding experience is like.

It is more likely that there are no automated scripts while instructions, if there are any, are slightly outdated or incomplete - leaving you struggling to figure things out on your own. The techlead to the rescue, who then asks you to update the documentation so the next team member who joins does not run into the same issues. Except, the project evolves, and instructions fall behind again. This is no fault of anyone in particular, but simply a fact of life because once a developer sets up their local development environment, there is no need to set it up again when the code changes. Every team member applies incremental changes to their development environment without starting from scratch, leave alone following the onboarding documentation.

**This process is costly**, both in terms of time and team morale. The larger your team, the more time is lost on setting up development environments and keeping them maintained. At the same time, I don’t know anyone who enjoys reading outdated documentation. Feeling helpless on the first day working on a new project is certainly not a great way to get started 😕.

### Open source project onboarding

In addition, there is a cost that applies to open source projects that is almost impossible to measure: **the % of people who would like to contribute to a project, but give up because getting started is too complex or interferes with their other projects in their local environment!**

To illustrate this with an example, imagine you usually work with Java 8 and want to contribute to two open source projects. Project A requires Java 7, while project B only runs with Java 11. In order for you to contribute to these projects, you need to install a Java version manager and remember to switch Java version every time you change the project you work on.
The exact same applies to databases (no need to install MySQL, MongoDB, Postgres, etc. locally), operating system libraries, anything you currently install locally.

Let’s look at a day in the life of two developers and see how cloud-based development environments simplify workflows significantly.

## Meet Alice and Bob

Bob is like most of us, he works on a desktop or laptop where he installs development tools, clones git repositories and installs dependencies for the projects he works on. He may or may not have had a great onboarding experience 😉. Once every so often, Bob is required to upgrade his tools and dependencies, a task he dreads because upgrading the version of an installed programming language may impact projects that are not compatible with that newer version. With every new version he installs, his cognitive load increases as he needs to remember to switch to the correct version based on the project he works on. Bob is very, very careful in the way he treats his computer because he really doesn’t want it to break… Just imagine setting everything up again from scratch 😱.

**Alice is not like Bob**, not anymore! Alice too lived a life like Bob where she carefully set up and maintained her local development environment over the lifetime of her laptop (we will talk about her experience when she gets a new laptop later). However, she has since realized there is a better way not only for herself, but for her entire team and anyone who contributes to their projects.

> Alice no longer has any code on her computer, none whatsoever. She does that thanks to cloud-based, ephemeral development environments provided by www.gitpod.io.

Let’s dive in and learn more about Bob and Alice and how you can turn yourself from being a traditional Bob to being a modern, efficient version of Alice 🥰.

### Set up a new project

**Bob**

Bob starts by cloning the source code, then ensures he has the correct runtime versions installed (e.g. Java, Node, .NET) and also makes sure the project supports his operating system.
Once that’s all good, he looks for onboarding instructions and works his way through that, potentially spending up to a few days on this task.

**Alice**

Alice creates a `.gitpod.yml` configuration file at the root of her project, then adds [start tasks](https://www.gitpod.io/docs/config-start-tasks) such as the following:

```yaml
tasks:
  - init: npm install
    command: npm run dev
```

She also enables Gitpod [Prebuilds](https://www.gitpod.io/docs/prebuilds) - telling Gitpod to continuously create new development environments as soon as her project’s source code changes! This significantly reduces the startup time when she or anyone who works on her project needs a development environment.

![Set up a new project](../../../static/images/blog/i-said-goodbye-to-local-development-and-so-can-you/set-up-a-new-project.png)

### Develop a new feature

**Bob**

Bob is very familiar with this workflow, it’s something he does many times a week, possibly even a few times per day.

He starts by making sure his new feature branch is based on the latest code. He does that by first pulling the latest default branch and then creating a feature branch.

Since one of his colleagues may have added a new dependency or changed a required runtime version, Bob needs to ensure he has the latest versions. You know, otherwise he starts the dev server only to be presented with an error message telling him a dependency is missing. You know what I’m talking about 😉.

Then, Bob is ready to shift into feature development mode. Well... after he started the database and dev servers.

**Alice**

She’s keen to get started right away. Once she looks at the issue on GitHub, GitLab or Bitbucket, she simply clicks the “Gitpod” button\*. This opens a new workspace with a feature branch already created, all dependencies installed and the database and dev servers started!

\* She gets that by installing the [Gitpod browser extension](https://www.gitpod.io/docs/browser-extension). Alternatively, she could prefix the issue URL with `gitpod.io/#<issue-url>` to open a new development environment.

![Set up a new project](../../../static/images/blog/i-said-goodbye-to-local-development-and-so-can-you/develop-a-new-feature.png)

### Switch context

Imagine this: You’re working on a feature when your team member contacts you, letting you know she needs your review for a production hotfix pull request. Here’s how Bob and Alice handle this situation:

**Bob**

Hm... 🤔 Bob is a bit hesitant. He has a bunch of code changes that are not ready to be committed, he also removed a dependency that is no longer needed thanks to his feature - yay! The timing to review a pull request is less than ideal.

He stashes his changes, pulls the PR branch and switches to it. Since he removed a dependency in his feature branch, he needs to install that again because the production hotfix PR still requires it.

Time to start the dev server and review the hotfix. Looks good, LGTM 👍.

To get back to his feature branch and continue development, he first switches back to his branch. Next, Bob needs his stashed files back, then drops that dependency his feature no longer requires and eventually starts the servers.

**Alice**

Alice’s workflow is no different than when she develops a new feature. She opens a new browser tab, navigates to the pull request and opens a new development environment based on that PR. Within seconds, the environment starts and the database and dev servers already run - ready for Alice’s review.

She can even leave review comments right within VS Code and have them synced with GitHub.

When she’s done with the review, Alice closes the browser tab. This brings her back to her previous development environment where she continues to work on her feature.

![Set up a new project](../../../static/images/blog/i-said-goodbye-to-local-development-and-so-can-you/switch-context.png)

### Set up a new computer

**Bob**

Oh boy... where to start?! Ah right, from scratch 😰!

**Alice**

Alice, well Alice is excited to get a new computer and is up and running as soon as she installs her favourite browser 🚀. Way to go, Alice!

![Set up a new project](../../../static/images/blog/i-said-goodbye-to-local-development-and-so-can-you/set-up-a-new-dev-env.png)

### Contribute to open source projects

Remember the example with the three open source projects earlier that use different versions of Java? In Alice’s case, she does not have Java installed locally at all. She starts any open source project in an ephemeral development environment and uses whatever version of Java is configured for that project. She can even contribute to two projects in parallel - if she really wanted to 😛.

## What’s the catch?

Well, for the time being you need an internet connection to work like Alice. The good news, it doesn’t have to be high bandwidth since the data exchange between Gitpod and your browser is minimal. A decent latency is all you need for a smooth experience.

If you read this and think “Well, what about X?” please get in touch, I’d love to work with you and set up Gitpod for your project.

## Conclusion

Alice & Bob, two not-so-fictional characters living their life as software developers. I used to be a Bob for close to two decades before I found www.gitpod.io which gives me everything Alice has! Want to get a sneak peek? Click the following button to start your first development environment in the cloud (it will open the source file of this blog post):

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/website/blob/main/src/routes/blog/i-said-goodbye-to-local-development-and-so-can-you.md)

I’d love to hear your thoughts and feedback, please get in touch 🙏.
