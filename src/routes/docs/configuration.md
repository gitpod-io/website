---
section: configuration
title: Configure Your Project
---

<script context="module">
  export const prerender = true;
</script>

# Configure Your Project

Gitpod dev environments are started with a single click. In order to make sure they come fully initialized and with the tools you need, you should provide a configuration file.

`youtube: ZgY6a78mAnQ`

## Setup Assistant

The setup assistant can help you get started with this. Once you open a project without a `.gitpod.yml` you should see a notification in the bottom right that lets you start the assistant.

> If you don't see the notification or you have already dismissed it, you can open the wizard by pressing `F1` and searching for `Toggle Project Setup View`.

The assistant guides you through the following steps:

### Step 1: Create _.gitpod.yml_

Gitpod configuration is versioned in the root of your git repository. Versioning this configuration together with the rest of your project allows you to get working dev environments even for older revisions or maintenance branches.

The `.gitpod.yml` contains everything that describes your dev environment as code. Most importantly it contains a list of commands that should be executed when a dev environment is [prebuilt](/docs/prebuilds) and when it is started.

You can find more information about [startup tasks here](/docs/config-start-tasks).

### Step 2: Change Base Image

The `.gitpod.yml` optionally references a Docker image or a Docker file, which is used as the container for your dev environment. This is where you install all the tools (such as runtimes, compilers, databases, etc.) that you need during development. The assistant can propose a couple of default Docker images which are based on the Dockerfiles maintained [here](https://github.com/gitpod-io/workspace-images). You can, of course, bring your own image.

You can find more information about [Docker configuration here](/docs/config-docker).

### Step 3: Update Readme

In case you want to tell your team or community about the automated dev environments you can add a badge to your README.md.

```
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/<your-org>/<your-project>)
```

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](/docs/configuration)

Alternatively you can use a button and put it into your documentation:

```
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/<your-org>/<your-project>)
```

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](/docs/configuration)

### Step 4: Test Drive Setup

In order to try your setup, you need to push it to a remote branch and start a fresh workspace from that branch. The Setup Assistant can help you but you can also do this manually.

We usually force-push to the same branch and start workspaces from it until we are happy with the setup. Then the final step is to propose the automated dev setup to the project's team or community.

### Step 5: Create a Pull-Request

This will allow others in your team to review your changes and try out the new automated dev environment. When you are proposing a setup for a project, it is helpful to explain why this is useful to the maintainers as well as the entire community.

### Step 6: Prebuilds

Once the new configuration is merged into the project, you should install (or request to install) the GitHub app so that Gitpod can prebuild dev environments on every change. This can save you and everyone else in your team many hours on a daily basis.

Read more on [Prebuilt Workspaces here](/docs/prebuilds).

<h2>Additional Information</h2>

- [Exposing Ports](/docs/config-ports)
- [VS Code Extensions](/docs/vscode-extensions)
- [Environment Variables](/docs/environment-variables)
- [Workspace Location](/docs/checkout-location)
