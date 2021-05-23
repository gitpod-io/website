---
section: getting-started
title: Getting Started
---

<script context="module">
  export const prerender = true;
</script>

# Getting Started

[Gitpod](https://www.gitpod.io) is an open source platform for automated and ready-to-code development environments that blends into your existing workflow.

[Gitpod](https://www.gitpod.io) offers an automated, ephemeral cloud-powered development environment that enables you to experiment with complex software development stacks using a web browser without the need to install software or configure anything on your local environment. You also don't have to upgrade the hardware of the developer environment to increase the productivity.

`youtube: ZZ0_TQ6UApY`

Learn how to start using Gitpod on an example project or an open source project using one of the following methods:

- Working an [Example Project](#working-on-an-example-project) or [OSS Projects](#working-on-open-source-projects)
- Using a [Prefixed URL](#prefixed-url)
- Installing a [Browser Extension](#browser-extension)

### Working on an Example Project

The projects listed in the [example projects](/docs/examples) already have a working Gitpod configuration, you can inspect the configurations and try them out in Gitpod.

In the following example, you can open the [Java with Spring Boot](https://gitpod.io/#https://github.com/gitpod-io/spring-petclinic) application project, personalize the [workspace](/docs/workspaces) theme, and create a pull request.

#### Open the Application

1. To open the example Java with Spring Boot project in a browser, click the [Java with Spring Boot](https://gitpod.io/#https://github.com/gitpod-io/spring-petclinic) project link.

   Gitpod opens an automated, and fully configured development environment of the example Java with Spring Boot project in a workspace:

![Workspace of Java with Spring Boot Project](../../../../static/images/docs/beta/getting-started/java-with-spring-boot-workspace.png)

2. After the project starts, a _BUILD SUCCESS_ message appears in the **Terminal** tab at the bottom of the screen.

![Buils Success message in the terminal](../../../../static/images/docs/beta/getting-started/terminal-message.png)

3. To view the application running in a new browser click **Open in browser** icon that appears in the **Simple Browser** pane of the Gitpod development environment.

![Preview of the application in simple browser](../../../../static/images/docs/beta/getting-started/simple-browser.png)

#### Personalize the Workspace Theme

You can access the Visual Studio Code in your workspace. In the following example, you install an extension that sets the theme of your workspace

1. In the left sidebarn of Visual Studio Code, click the Extensions icon.
2. In the search bar, type _Quiet Light Theme_ and click the **Manage** icon.

   A pop-up menu appears:
   ![Quite light theme menu](../../../../static/images/docs/beta/getting-started/quite-light-theme.png)

3. Select the **Set Color Theme** option.

   A **Select Color Theme** search bar that lists **Quite Light** appears in the workspace.

   ![Select Color Theme](../../../../static/images/docs/beta/getting-started/select-color-theme.png)

4. Select the **Quite Light** option.

**Note:** _Quite Light Theme_ is a built-in theme and by default it is enabled globally across all your workspaces. If you would like to have this theme for your current workspace only then, clear the selection of **Sync This Extension** option in the pop-up menu that appears when you click the **Manage** icon.

### Working on Open Source Projects

Setting up a local dev environment to contribute to your favourite OSS project can be daunting. Luckily, already numerous projects have gitpodified their repositories to enable everyone to contribute with a single click. You can find the list of all Open Source Projects that are integrated with Gitpod on [contribute.dev](https://contribute.dev/).

Here's a list of some of the popular OSS projects. Just click the links and contribute to the projects using Gitpod:

- [freeCodeCamp](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
- [Prometheus](https://gitpod.io/#https://github.com/prometheus/prometheus)
- [GitLab](https://gitpod.io/#https://gitlab.com/gitlab-org/gitlab)
- [Forem](https://gitpod.io/#https://github.com/forem/forem) powering [dev.to](https://dev.to/)
- [Nushell](https://gitpod.io/#https://github.com/nushell/nushell)

#### Creating a Pull Request

The following steps are specific for GitLab open source project. However, the steps outlined are applicable to all projects hosted on various Git providers.

**Before you Begin**

- Login to GitLab and [Enable Gitpod in your user settings](https://docs.gitlab.com/ee/integration/gitpod.html#enable-gitpod-in-your-user-settings).

  **Note:** You need to enable Gitpod on GitLab only the first time you use Gitpod on any project hosted in GitLab.

To submit a pull request for any [issue](https://gitlab.com/gitlab-org/gitlab/-/issues/) listed in the GitLab open source project.

1. Open an issue in the project for which you want to submit a pull request by using the following URL format in the browser:
   `https://gitpod.io/#https://gitlab.com/gitlab-org/gitlab/-/issues/<issue-number>`

   _Where_: `<issue-number>` is the number assigned to the issue in the GitLab project.

   Gitpod opens a workspace with a new branch for the related issue in Visual Studio Code. You can find the details of the branch at the bottom of the workspace.

2. Update the changes that you want to make in the files of the project repository.

3. Commit the changes that you made by adding a commit message and click the _Commit_ icon in Visual Studio Code.

4. Create a pull request by clicking the _Create Pull Request_ icon in Visual Studio Code.

   For detailed instructions about creating a pull request in Visual Studio Code, see [create a pull request](https://code.visualstudio.com/docs/editor/github#_creating-pull-requests).

## Using a Prefixed URL

You can quickly open a new workspace for any GitLab, GitHub, or Bitbucket project, by just prefixing **gitpod.io/#** to the URL of the project in the address bar of the browser.

Gitpod presents you with useful productivity boosts not just when you prefix **gitpod.io/#** to the main URL of the repository, but also for issues, or pull requests.

For example, to open the repository, pull request, or an issue in the Java with Spring Boot project:

- **Repository:** prefix **gitpod.io/#** to the URL of the repository *https://gitlab.com/gitpod/spring-petclinic*.

  The revised URL is: `https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic`

- **Pull Request:** prefix **gitpod.io/#** to the URL of the merge request *https://gitlab.com/gitpod/spring-petclinic/-/merge_requests/2*.

  The revised URL is: `https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/-/merge_requests/2`

- **Issue:** prefix **gitpod.io/#** to the URL of the issue *https://gitlab.com/gitpod/spring-petclinic/-/issues/1*.

  The revised URL is: `https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/-/issues/1`

[Learn more &rarr;](/docs/context-urls)

## Installing Browser Extension

Gitpod browser extension works with Chromium-based browsers such as Microsoft Edge, Brave, Chrome, and others, and Firefox browser. The Gitpod extension adds a Gitpod button on every project and branch across GitLab, GitHub, and Bitbucket so that you can easily open a new workspace for any existing project.
![Browser Extension](../../../static/images/docs/browser-extension-lense.png)

Install the Gitpod browser extension that are available here:

- [Chrome Gitpod extension](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki)
- [Firefox Gitpod extension](https://addons.mozilla.org/firefox/addon/gitpod/)

## Next Steps

With Gitpod you start treating your dev environments as something ephemeral: you start them, you code, you push your code, and you forget about them. For your next task, you'll use a fresh dev environment.

🛠 [Gitpodify your first project!](https://www.gitpod.io/docs/configuration)
