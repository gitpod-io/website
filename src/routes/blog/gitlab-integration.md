---
author: corneliusludmann, svenefftinge
date: Thu, 06 Oct 2020 14:00:00 UTC
excerpt: Today, we are super excited to share that we’ve partnered with GitLab and built a native Gitpod integration in GitLab’s UI.
image: teaser.jpg
slug: gitlab-integration
subtitle: Launch Gitpod workspace from GitLab
title: Native GitLab Integration
---

<script context="module">
  export const prerender = true;
</script>

At Gitpod we want to make developers’ lives easier. Starting automated dev environments for your daily coding tasks is already very easy: Just prefix your repository URL with `gitpod.io/#` and you are ready to go. To make this even better, you can install a browser extension which adds a convenient button to any GitLab, GitHub, or Bitbucket repository that lets you launch a Gitpod workspace with one click.

Recently we asked ourselves how we could streamline the integration with your daily routine even more. Today, we are super excited to share that we’ve partnered with GitLab and built a [native Gitpod integration in GitLab’s UI](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/37985).

<h2 class="h1">The last missing piece in your GitLab DevOps pipeline</h2>

GitLab is one of the most popular DevOps tools/platforms out there, used by more than 100,000 organizations across the globe. Through its Web IDE, simple edits can already be made today from within the application. However, for more advanced programming tasks, developers require a full development environment.

Such dev environments not only include a professional IDE/editor with all the convenient plugins for the project at hand, but also things like compilers, build tools, code generators, databases, and application servers.

Until now GitLab users would set up and maintain a single dev environment on their local machines. It’s time to free engineers from wasting their time with such tedious tasks and apply the lessons learned from CI/CD and infrastructure as code to dev environments.

Why not automate the provisioning of dev environments? Teams should be able to spin up fresh environments for each new task without waiting or any manual steps involved.

GitLab and Gitpod started a partnership to bring Gitpod's ready-to-code dev environments to GitLab. As a first result of this collaboration you can now launch cloud-based dev environments with one click directly from gitlab.com (even without the Gitpod browser extension).

![Gitpod button on GitLab project page](../../../static/images/blog/gitlab-integration/gitpod-button-on-gitlab.png)

<h2 class="h1">“Everyone can contribute”</h2>

GitLab’s credo “Everyone can contribute” is a perfect fit for Gitpod because contributing becomes much simpler when you allow anyone to spin up a ready-to-code development environment in a few seconds.

GitLab’s engineers have worked on lowering the barrier to contributions on GitLab itself through a comprehensive [contribution guide](https://about.gitlab.com/community/contribute/) and even a [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit) that sets up your dev environment on your machine. But still, running the GDK installer takes at least 30 minutes to download and install dependencies, clone the GitLab repository, and start all services you need like the database, a webserver, etc.

We are currently helping the GitLab team <a class="no-nowrap" href="https://gitlab.com/gitlab-org/gitlab/-/merge_requests/43103">to build a fully-automated Gitpod configuration for the GitLab source code</a>. This makes contributing to the GitLab source code itself as easy as clicking a button. Instead of waiting half an hour for a bunch of libs and tools to get installed, with Gitpod you are productive within just a few minutes. Once this configuration is merged, you will be able to just click on the Gitpod button of the [GitLab repository](https://gitlab.com/gitlab-org/gitlab), and everything will be set up for your first GitLab contribution.

[![GitLab integration quote](../../../static/images/blog/gitlab-integration/gitlab-integration-quote.png)](https://gitlab.com/gitlab-org/gitlab-development-kit/-/issues/1076#note_419638250)

<h2 class="h1">Hook up your GitLab Self-Managed with Gitpod.io</h2>

The Gitpod integration is already live on gitlab.com today and is going to be part of [GitLab&nbsp;13.5](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/61933) which is released on October 22nd. At that point, you’ll be able to connect your GitLab self-managed installation to gitpod.io, through a new feature that lets you register additional Git providers.

Furthermore, you can [self-host Gitpod](https://www.gitpod.io/self-hosted/) (which is [open source](https://github.com/gitpod-io/gitpod)) on your own Kubernetes cluster and configure it with your GitLab instance. We have convenient installation scripts for GCP and AWS.

<h2 class="h1">What’s next?</h2>

We are continuously working on improving the GitLab integration and implementing new features for GitLab users (e.g. managing merge requests within Gitpod, [adding a Gitpod button on Merge Requests](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/43352), etc.). You can also install the [GitLab VS Code Extension](https://open-vsx.org/extension/GitLab/gitlab-workflow) in Gitpod to interact with GitLab. Just go to the Extensions view (in the left vertical menu), search for “GitLab” and choose “Install”.

![Gitpod button on GitLab project page](../../../static/images/blog/gitlab-integration/gitlab-vscode-extension.png)

<h2 class="h1">Try the Gitpod integration now!</h2>

The GitLab integration is available at GitLab.com and in your [self-managed GitLab](https://gitlab.com/help/integration/gitpod.md) soon. Don’t have a project at hand? Try the demo project [Spring PetClinic](https://gitlab.com/gitpod/spring-petclinic) which has a proper Gitpod configuration committed.

You are a passionate GitLab user? Please share your experiences with the Gitpod integration with us! Visit our community forum at [community.gitpod.io](https://community.gitpod.io/), report bugs in the [Gitpod repository](https://github.com/gitpod-io/gitpod/), or send us an e-mail at support@gitpod.io!
