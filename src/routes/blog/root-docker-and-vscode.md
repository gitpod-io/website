---
author: svenefftinge
date: Thu Dec 07 2020 11:49:24 GMT+0000 (UTC)
excerpt: The team has been focussing on shipping some major new features, which mark important milestones on our goal to eliminate all friction.
image: teaser.jpg
slug: root-docker-and-vscode
subtitle: New Release
teaserImage: teaser.jpg
title: Root, Docker and VS Code
---

<script context="module">
  export const prerender = true;
</script>

The team has been focussing on shipping some major new features, which mark important milestones on our goal to **eliminate all friction around maintaining dev environments**.

- [Root Access 💪](#root-access-)
- [Docker 🐳](#docker-)
- [VS Code and Other IDEs 🥂](#vs-code-and-other-ides-)
- [Connect to Self-managed GitLab ❤️](#connect-to-self-managed-gitlab-️)
- [Next Steps ⏩](#next-steps-)

## Root Access 💪

Gitpod workspaces run as containers which make them incredibly fast and efficient. Compared to VMs, isolating workspace containers from each other is not easy. Due to this difficult isolation, Gitpod operated a fairly restricted set of privileges within its workspaces. This meant you couldn’t install additional tools using your favourite package manager (think `sudo apt-get install ...`) or run `docker` resp. `docker-compose`. Clearly, this has made some things more difficult than they should be.

After investigating different options such as [gVisor](https://github.com/google/gvisor) or [virtual machines](https://katacontainers.io/), we’ve settled on a solution that isolates through user namespaces. Chris, our Chief Architect and author of the isolation mechanics, has explained how it works in detail in [this webinar](https://youtu.be/l4I2TVAnBuw?t=176). Long story short, you can now run commands using `sudo`. So for instance, you can test-install additional packages using `apt-get`, before adding those commands to your workspace’s Dockerfile (where setup commands should still go eventually).

`youtube: 5JUfzet1NNg`

## Docker 🐳

With the new privileges you can now also run and build Docker images to start containers within your workspace. Gitpod’s default image ([workspace-full](https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile)) comes equipped with Docker now, so all you need to do is run `sudo docker-up` and wait until the service is listening. Now start another terminal and use the Docker CLI as usual. Here is a short screencast showing how to start a simple hello world example.

`youtube: tW9zBHH37Cc`

> Warning: This is in feature preview for a reason, and there are a few things we still have to sort out. For instance, within Docker containers process ids are not properly mapped which might cause some weird errors. Please provide feedback in the [community](https://community.gitpod.io) or the [issue tracker](https://www.github.com/gitpod-io/gitpod/issues).

## VS Code and Other IDEs 🥂

At Gitpod we want to help automate your dev environments, so that you are always ready-to-code. We believe you should not have to compromise in terms of what tools you use. Instead we make sure you get all your favourite tools readily configured and initialised for any project and task. Until today you had no choice but to use Theia, which is a great vendor-neutral IDE that leverages a lot of VS Code’s tech and provides a very similar UX. Still there are some differences in behaviour and compatibility so many users asked for supporting VS Code (and other IDEs as well).

Since today you can switch between VS Code and Theia in your settings. You can even bring your own web IDE though a docker image. This enables Gitpod to run other IDEs such as all the Jetbrains IDEs (using [projector](https://github.com/JetBrains/projector-server/blob/master/docs/Projector.md)), Jupyter Notebook, or Jupyter Lab. This feature is however currently still in a private beta, so you need to contact us in order to get access to that.

`youtube: 5hArIRPZuBI`

> Warning: This is an early preview of the functionality and we haven't fully implemented all necessary features, yet. For instance, user settings are not persisted among sessions. Also while you can install extensions, they are also not persisted and extension settings from `.gitpod.yml` are currently ignored. We'll follow up with these capabilities ASAP.

> Please provide feedback in the [community](https://community.gitpod.io) or the [issue tracker](https://www.github.com/gitpod-io/gitpod/issues)

We are also shipping an SSH mode in Q1/21, that will let you connect to Gitpod using your favorite desktop IDE’s remote mode.

## Connect to Self-managed GitLab ❤️

You can now [connect your self-hosted GitLab application with gitpod.io](/docs/gitlab-integration#oauth-application). This way you don't have to host and operate your own Gitpod installation, just to make it work with your GitLab installation. To make this connection, go to the settings and scroll down to the “Git Provider Integrations” section. Add your instance and follow the instructions.

After completing this process, your entire team can open dev environments by prefixing the projects and merge requests URLs on the self-managed instance with `gitpod.io#` or simply use the Gitpod button provided by GitLab (make sure it is enabled).

![Gitpod loves GitLab](../../../static/images/blog/root-docker-and-vscode/teaser-gitlab-gitpod.jpg)

## Next Steps ⏩

There will be a Gitpod Self-Hosted release before Christmas that includes the features listed here as well as many additional enhancements and bugfixes for installing and running Gitpod on different infrastructures.

In the near future, we will complete the features in preview, work on some important updates around prebuilds, support SSH access to workspaces, and are kicking off a redesign of the dashboard. The future is bright 🌅.
