---
section: quickstart
title: Datasette template
---

<script context="module">
  export const prerender = true;
</script>

# Datasette Quickstart

Learn how to set-up and understand the benefits of Gitpod **in less than 5 min** with our [Datasette](https://github.com/gitpod-io/template-datasette) template.

The following guide will:

- Walk you through a real world example with an existing Gitpod config
- Introduce you to prebuilds
- Demonstrate the benefits of ephemeral development environments

For simplicity we use a GitHub template, but Gitpod works similarly with GitLab and Bitbucket.

### Step 1: Clone Git repository

- Create a new repository based on the [Datasette template](https://github.com/gitpod-io/template-datasette/generate).
- Name it e.g. `my-datasette-template`.

### Step 2: Install the Gitpod app

- Install the [Gitpod App](https://github.com/apps/gitpod-io/installations/new).

  Gitpod's GitHub app is similar to a CI server and will continuously prepare prebuilds for all your branches and pull requests - so you don't have to wait for Maven or NPM downloading the internet when you want to start coding.

### Step 3: First prebuild

- Start your first workspace with a prebuild by prefixing **https://gitpod.io#prebuild/** to the URL of the repository.

The revised URL is: `https://gitpod.io/#prebuild/https://github.com/<github_username>/<my-datasette-template>`

Gitpod displays the prebuild progress status by running the `init` commands in the _.gitpod.yml_ file before you even start a workspace. Later, when you create a new workspace on a branch, or pull/merge request the workspace loads much faster, because all dependencies are already downloaded and the code is compiled. For more information see [prebuilds](/docs/prebuilds).

### Step 4: Enjoy being ready-to-code 🤙

Once the first prebuild ran, Gitpod starts an automated and fully configured development environment in a workspace that is now ready for you to develop.

Other developers made their setup even more productive and supercharged their workflows with the following quick steps:

1. **Installing the browser extension**

You can install the Gitpod browser extension on any [Chromium-based](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki) browsers such as Microsoft Edge, Brave, Chrome, and others, or on a [Firefox](https://addons.mozilla.org/firefox/addon/gitpod/) browser.

The extension simply adds a Gitpod button on every project and branch across GitHub, and Bitbucket that prefixes the URL with `gitpod.io/#` so that you can easily open a new workspace from any git context.

![Browser Extension](../../../static/images/docs/browser-extension-lense.png)

For our partner GitLab we have a native integration into their UI that you can enable here.

2. **Add your favorite VS Code themes and extensions**

You have access to all Visual Studio Code extensions published under the vendor neutral [Open VSX registry](https://open-vsx.org/). Install one by clicking the Extensions icon in the left sidebar and enter your favorite theme or VS Code extension.

Changes you make in your workspace such as themes and extensions are synced automatically to other workspaces.

3. **Start throwing away workspaces like paper towels**

You can now start to treat dev environments as automated resources you spin up when you need them and close down (and forget about) when you are done with your task. Dev environments become fully ephemeral.

You even can start switching between workspaces or open several workspaces on the same context - two for your feature, one for reviewing a PR/MR, one for a bug, one for another MR/PR.

Try it out and open 3 workspaces on the same context (e.g. on main or on an issue). 🤓

## Next Steps

You've successfully ran your first workspace and experienced first hand what we mean with ephemeral dev environments. This is just the first step on your journey towards being always ready to code. Helpful resources from here are:

- [Getting started with your own project](https://www.gitpod.io/docs/configure)
- [Git Integrations](/docs/integrations)
