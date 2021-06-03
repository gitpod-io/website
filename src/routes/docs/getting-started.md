---
section: getting-started
title: Getting Started
---

<script context="module">
  export const prerender = true;
</script>

# Getting Started

Gitpod can provide fully initialized, perfectly set-up development environmments for any kind of software project. This page helps you understand how to provide such a configuration for _your project_.

## Start your first workspace

The best way to configure Gitpod is by using Gitpod - you could perform the following steps in your local environment as well, but we may as well experience ephemeral development environments right from the beginning.

1. In a browser, navigate to your project's GitHub, GitLab or Bitbucket page.
1. In the browser's address bar, prefix the entire URL with `gitpod.io/#` and press Enter.
   - For example, `gitpod.io/#https://github.com/gitpod-io/website`
   - We recommend you [install the Gitpod browser extension](/docs/browser-extension) to make this a one-click operation.
1. Sign in with one of the listed providers and let the workspace start up.

**Congratulations**, you have started your first of many ephemeral development environments 🎉!

Next, let's help Gitpod understand your repository to automate the development environment and turn on prebuilds to supercharge your development workflow.

## Help Gitpod understand your repository

When you started your first workspace above, Gitpod didn't do much. In fact, all it did was starting the workspace and `git clone` your source code.
To develop, you still would have to install dependencies, run build scripts and start the development server every time you start a workspace... We can do better, so let's automate that!

1. In the workspace terminal, make sure you are in your project's root directory (`pwd` should be `/workspace/<repo>`).
1. Run `gp init` to generate a scaffold `.gitpod.yml` configuration file (see the [.gitpod.yml reference](/docs/references/gitpod-yml) for all configuration options).
1. Open the newly created `.gitpod.yml` file.

### Init script

Most projects require some sort of initialization script to download and install dependencies, compile the source code, etc. For example, a Node.js project requires `npm install`. The `init` task by default reads `echo 'init script'`, let's replace that with your project-specific init command, for example:

```yaml
tasks:
  - init: npm install
    command: echo 'start script'
```

Excellent! To learn more about the difference between `init` and `command`, please have a look at [Start Tasks](/docs/config-start-tasks).

### Command script

Next, let's adjust the `command` script. This is the script Gitpod executes when the workspace successfully started up. In most cases, this is where you start your application's development server, e.g. `npm run dev`.

```yaml
tasks:
  - init: npm install
    command: npm run dev
```

### Configure your app's ports

If your application starts a development server that listens on a certain port, we can let Gitpod know how to deal with that. To get started, update the `port` according to what your application listens on, e.g. `3000`.

```yaml
tasks:
  - init: npm install
    command: npm run dev
ports:
  - port: 3000
    onOpen: open-preview
```

When Gitpod notices port 3000 is available, it automatically opens your application in a preview to the right of your editor - ready for you to develop and see your changes.

### Commit `.gitpod.yml`

Lastly, make sure to commit the `.gitpod.yml` configuration file to git and push it to your repository.

## Start your second workspace

Once you committed and pushed `.gitpod.yml`, **open a new browser tab** and navigate to your project's page on GitHub, GitLab or Bitbucket.

> If you pushed to a branch, please make sure you switch to that branch before you continue.

1. Open a new workspace (see [Start your first workspace](#start-your-first-workspace) above).
1. Observe how Gitpod automatically runs the tasks you configured.
1. Wait until the development server started and your application's preview is displayed on the right side of the editor.

If for some reason the second workspace does not start, simply close the tab and navigate back to the first workspace. Fix the errors that caused the workspace to fail based on the error output you see, commit and push your changes and start yet another workspace to test the latest changes.

Congratulations, again 😊! You now have a basic Gitpod configuration and for each new workspace you start, Gitpod automatically runs the scripts you manually have to run locally.

## Shut down your workspaces

This is easy - close the workspace browser tabs.

Within three minutes, the workspaces will be stopped. You can always find them at https://gitpod.io/workspaces - to be honest though, you can forget about them and start a new workspace the next time you work on your project.

## Supercharge your experience with prebuilds

The automation you have experienced so far is nice, but there's more! Remember that `init` task we [configured earlier](#init-script)?

You may have wondered why there are separate `init` and `command` tasks. This is because we can tell Gitpod to **run the `init` script every time new code is pushed to your project**. By the time you or one of your team members starts a new workspace, the `init` task already finished and you don't have to wait for that - saving you precious time. We call this **prebuilds**.

### An intro to prebuilds

Let's first look at an example and then configure your project to take advantage of prebuilds.

Imagine this common workflow where Nina and Paul work on the same project:

1. Nina opens a pull request where she developed a feature that requires a new dependency.
1. _Gitpod notices the new code and kicks off a prebuild by cloning the source code and executing the `init` task. The result is saved as a prebuilt workspace._
1. Some time later, Paul opens the pull request to start his code review.
1. He opens a Gitpod workspace for that given pull request (learn more about [contexts](/docs/context-urls)).
1. _Gitpod recognizes it already ran the `init` task and loads the prebuilt workspace_
1. By the time the workspace starts, Paul sees the development server starting up and the application's preview is ready for review.

For each new commit to your project, Gitpod continuously creates prebuilt workspaces so that the project is always ready-to-code. If your project is open source, anyone gets to enjoy the efficiency of prebuilds regardless of whether they are part of your team or not.

### Configure prebuilds for your projects

Depending on your git provider, the steps to configure prebuilds vary slightly. Please refer to the dedicated [Prebuilds](/docs/prebuilds) page for detailed instructions on how to configure prebuilds for your project.

## Next steps

At this point, you have a `.gitpod.yml` configuration file to automate repetitive tasks and prebuilds configured to let Gitpod execute many of these tasks continuously whenever new code is pushed to your project - freeing you from waiting to download, install & build your project and its dependencies.

To explore more of what Gitpod has to offer, we recommend the following next topics:

- [Configure](/docs/configure) to learn more about start tasks, environment variables and how to provide your own custom Docker image as the foundation for workspaces.
- [Develop](/docs/develop) to learn more about the productivity gains you get with ephemeral workspaces, how contexts assist you and how to collaborate with team members.
