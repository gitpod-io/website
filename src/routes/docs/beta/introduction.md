<script context="module">
  export const prerender = true;
</script>

# Introduction to Gitpod

[Gitpod](https://www.gitpod.io) is an open source platform for automated and **ready-to-code development environments** that blends into your existing workflow.

It enables developers to describe their dev environment as code and **start configurable and fresh development environments for each new task** entirely in the cloud.

<h2>Not another online IDE</h2>

Today developers are emotionally attached (for better or worse) to their dev environments, give them names & massage them over time. They are like pets.

With Gitpod you treat dev environments as automated yet configurable resources you spin up when you need them and close down (and forget about) when you are done with your task. Dev environments become fully ephemeral. Only then you are **always ready-to-code** - immediately creative, immediately productive with the click of a button and without any friction.

This is what is at the heart of Gitpod: **an open platform that removes all friction of manually setting up and maintaining dev environments** allowing yourself and your team to build applications quicker and more collaboratively.

<h2>Your computer in the cloud</h2>

A Gitpod workspace includes everything developers need to be productive: source code, a Linux shell with root/sudo, a file system, the full VS Code editing experience including extensions, language support and all other tools and binaries that run on Linux.

Workspaces are highly customizable and can be pre-configured and optimized on both a team/project as well as an individual/developer level. From themes to extensions developers have full control. Workspaces work with all major git hosting platforms including GitHub, GitLab and Bitbucket.

Leveraging the power of the cloud Gitpod allows for numerous benefits such as blazingly fast, ephemeral and secure development environments.

<h3>⚡ Fast</h3>

Gitpod **launches workspaces in seconds** and removes long init and build times by continuously pre-compiling workspaces for your project. This enables you and everybody collaborating on your project to **start coding or debugging immediately**, from any git context, at any time, from any device.

Spinning up dev environments is easily repeatable and reproducible, because Gitpod creates a single configuration file in your repository allowing you to **automate, version-control and share consistent dev environments across your team**. We call this [dev-environments-as-code](https://www.gitpod.io/blog/dev-env-as-code).

<h3>⚙️ Ephemeral</h3>

Gitpod continuously builds _all_ your git branches like a CI server. Whenever your code changes (e.g. when new commits are pushed to your repository), Gitpod can prebuild workspaces, i.e. run the `init` commands in your `.gitpod.yml` configuration file before you even start a workspace.

Then, when you do create a new workspace on a branch, or Pull/Merge Request this workspace will load almost instantly, because all dependencies will have been already downloaded ahead of time and your code will be already compiled.

As a result you start treating your dev environments as something ephemeral: you start them, you code, you push your code, and you forget about them. For your next task, you’ll use a fresh dev environment.

More on [prebuilds](https://www.gitpod.io/docs/prebuilds).

<h3>🔒 Secure</h3>

We are living in a remote world, where having source code stored locally on countless unsecure machines and networks is considered bad practice. With Gitpod you no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. Gitpod natively integrates with your git hoster and creates one source of truth for your intellectual property. Gitpod is built with security in mind and currently in the process of becoming SOC 2 and ISO 27001 compliant.

<h2>Next Steps</h2>

With Gitpod you start treating your dev environments as something ephemeral: you start them, you code, you push your code, and you forget about them. For your next task, you'll use a fresh dev environment.

- [Quickstart with example project](/docs/getting-started) - understand the benefits in a learning environment
- [Getting Started with your project](https://www.gitpod.io/docs/configuration) - configure one of your own existing projects
