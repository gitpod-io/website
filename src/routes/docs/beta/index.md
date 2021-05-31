---
section:
title: Introduction
---

<script context="module">
  export const prerender = true;
</script>

# Introduction to Gitpod

[Gitpod](https://www.gitpod.io) is a container-based development platform that puts developer experience first. Gitpod provisions **ready-to-code development environments** in the cloud accessible through your browser and your local IDE ([LINK TO Roberts Blog Post]).

Gitpod enables development teams to describe their dev environment as code and **start configurable and fresh development environments for each new task** entirely in the cloud. Think CI/CD for dev environments.

<h2>Always ready-to-code</h2>

Too much time is lost to a poor development experience. Setting up local dev environments that are brittle. Waiting for compilation. Downloading dependancies. Massaging them over time to make sure they work with all projects. "Works on my machine" situations, configuration drift and broken tool chains are slowing down professional software teams.

With Gitpod this stops. Instead you treat dev environments as automated resources you spin up when you need them and close down (and forget about) when you are done with your task. Dev environments become fully ephemeral.

You even start switching between workspaces - one for your feature, one for reviewing a PR/MR, one for a bug, one for another MR/PR.

Only then you are **always ready-to-code** - immediately creative, immediately productive with the click of a button and without any friction. allowing yourself and your team to build applications quicker and more collaboratively.

<h2>Your computer in the cloud</h2>

A Gitpod workspace includes everything developers need to be productive: source code, a Linux shell with root/sudo, a file system, the full VS Code editing experience including extensions, language support and all other tools and binaries that run on Linux.

Workspaces are highly customizable and can be pre-configured and optimized on both a team/project as well as an individual/developer level. From themes to extensions developers have full control. Workspaces work with all major git hosting platforms including GitHub, GitLab and Bitbucket.

Leveraging the power of the cloud Gitpod provisions **blazingly fast, ephemeral and secure development environments**.

<h3>⚡ Fast</h3>

Gitpod **launches workspaces in seconds** and removes long init and build times by continuously pre-building workspaces for your project. This enables you and everybody collaborating on your project to **start coding or debugging immediately**, from any git context, at any time, from any device. No more waiting for NPM or Maven to download the Internet.

Spinning up dev environments is easily repeatable and reproducible, because Gitpod creates a single configuration file in your repository allowing you to **automate, version-control and share consistent dev environments across your team**. We call this [dev-environments-as-code](https://www.gitpod.io/blog/dev-env-as-code).

<h3>⚙️ Ephemeral</h3>

Gitpod continuously builds _all_ your git branches like a CI server. Whenever your code changes (e.g. when new commits are pushed to your repository), Gitpod can prebuild workspaces, i.e. run the `init` commands in your `.gitpod.yml` configuration file before you even start a workspace.

Then, when someone from your team does create a new workspace on a branch or Pull/Merge Request a workspace will load almost instantly, because all dependencies will have been already downloaded ahead of time and your code will be already compiled.

As a result you can treat your dev environments as something ephemeral: you start them, you code, you push your code, and you forget about them. For your next task, you’ll use a fresh one.

More on [prebuilds](https://www.gitpod.io/docs/prebuilds).

<h3>🔒 Secure</h3>

We are living in a remote world, where copies of your source code stored locally on countless unsecure machines and networks is considered bad practice. With Gitpod your code stays in the cloud only accessible from a secure browser connection. Gitpod works on any machine such as your Chromebook or iPad. All you need is a browser. Gitpod natively integrates with GitHub, GitLab and Bitbucket and creates one source of truth for your intellectual property. Gitpod is built with security in mind and currently in the process of becoming SOC 2 and ISO 27001 compliant.

<h2>Next Steps</h2>

- [Quickstart with example project](/docs/beta/quickstart) - understand the benefits in a learning environment
- [Getting started with your project](/docs/beta/configure) - configure one of your own existing projects
