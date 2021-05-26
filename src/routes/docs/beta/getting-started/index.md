---
section: getting-started
title: Getting Started
---

<script context="module">
  export const prerender = true;
</script>

# Getting Started

Get familar with Gitpod, understand the features and advantages of Gitpod in a learning environment or on the projects that you work on:

- [Quickstart with example projects](beta/getting-started/#quickstart-with-example-projects)
- [Getting started with your projects](beta/getting-started/#gettingf-started-with-your-projects)

## Quickstart with example projects

Learn how to start using Gitpod on an example projects that are hosted on Github. However, the steps outlined works for a project hosted on any Git provider. This section helps you understand the features and advantages of Gitpod in a learning environment.

### Java example project

The example project that is used in the following section is a [Java with Boot Spring](https://github.com/gitpod-io/spring-petclinic) application. In this task you learn how the Gitpod GitHub App prebuilds a workspace and you can view the prebuild events.

1. Create a project by clicking the [Java template](https://github.com/gitpod-io/spring-petclinic/generate).

2. Install [Gitpod GitHub App](https://github.com/marketplace/gitpod-io). For instructions to install, see [GitHub documentation](https://docs.github.com/en/github/customizing-your-github-workflow/purchasing-and-installing-apps-in-github-marketplace/installing-an-app-in-your-organization#installing-a-github-app-in-your-organization).

   Gitpod GitHub app generates Gitpod links for pull requests and adds them to the description, it also prebuilds workspaces for branches and pull requests.

3. Start your work space with a prebuild by prefixing **https://gitpod.io#prebuild/** to the URL of the repository.

   The revised URL is: `https://gitpod.io/#prebuild/https://github.com/<github_username>/spring-petclinic/`

   Gitpod displays the prebuild progress status with by running the `init`commands in the _.gitpod.yml_ file before you even start a workspace. Later, when you create a new workspace on a branch, or pull/merge request, for which a prebuild exists, the workspace loads much faster, because all dependencies are already downloaded and the code is compiled. For more information, see [prebuilds](/docs/prebuilds).

4. Gitpod starts an automated, and fully configured development environment for the project in a workspace that is now ready for you to code.

![Workspace of Java with Spring Boot Project](../../../../static/images/docs/beta/getting-started/java-with-spring-boot-workspace.png)

At any given time you can open three workspaces simultaneous across projects, repositories, pull requests, and issues with Gitpod. For more information, see [workspaces](/docs/workspaces).

## Creating a pull request in an open source project

To submit a pull request for any [issue](https://gitlab.com/gitlab-org/gitlab/-/issues/) listed in the GitLab open source project.

1. Open an issue in the project for which you want to submit a pull request by using the following URL format in the browser:
   `https://gitpod.io/#https://gitlab.com/gitlab-org/gitlab/-/issues/<issue-number>`

   _Where_: `<issue-number>` is the number assigned to the issue in the GitLab project.

   Gitpod opens a workspace with a new branch for the related issue in Visual Studio Code. You can find the details of the branch at the bottom of the workspace.

2. Update the changes that you want to make in the files of the project repository.

3. Commit the changes that you made by adding a commit message and click the _Commit_ icon in Visual Studio Code.

4. Create a pull request by clicking the _Create Pull Request_ icon in Visual Studio Code.

   For detailed instructions about creating a pull request in Visual Studio Code, see [create a pull request](https://code.visualstudio.com/docs/editor/github#_creating-pull-requests).

## Installing a browser extension

You can install Gitpod browser extension on any [Chromium-based](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki) browsers such as Microsoft Edge, Brave, Chrome, and others, or on a [Firefox](https://addons.mozilla.org/firefox/addon/gitpod/) browser.

The Gitpod extension adds a Gitpod button on every project and branch across GitLab, GitHub, and Bitbucket so that you can easily open a new workspace for any existing project.

![Browser Extension](../../../static/images/docs/browser-extension-lense.png)

## Next Steps

With Gitpod you start treating your dev environments as something ephemeral: you start them, you code, you push your code, and you forget about them. For your next task, you'll use a fresh dev environment.

🛠 [Gitpodify your first project!](https://www.gitpod.io/docs/configuration)
