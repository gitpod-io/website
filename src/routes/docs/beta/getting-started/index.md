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

   A pop-up menu appears
   ![Quite light theme menu](../../../../static/images/docs/beta/getting-started/quite-light-theme.png)

3. Select the **Set Color Theme** option.

   A **Select Color Theme** search bar that lists **Quite Light** appears in the workspace.

   ![Select Color Theme](../../../../static/images/docs/beta/getting-started/select-color-theme.png)

4. Select the **Quite Light** option.

**Note:** _Quite Light Theme_ is a built-in theme and by default it is enabled globally across all your workspaces. If you would like to have this theme for your current workspace only then, clear the selection of **Sync This Extension** option in the pop-up menu that appears when you click the **Manage** icon.

#### Creating a Pull Request

In the following steps you can submit a pull request for an [issue](https://gitlab.com/gitlab-org/gitlab/-/issues/13861) in the example Java with Spring Boot project hosted on GitLab

**Before you Begin**

- Login to GitLab and [Enable Gitpod in your user settings](https://docs.gitlab.com/ee/integration/gitpod.html#enable-gitpod-in-your-user-settings).

  **Note:** You need to enable Gitpod on GitLab only the first time you use Gitpod on a project hosted in GitLab.

- Ensure that you have access to submit a pull request to the project.

1. Open an issue in the project for which you want to submit a pull request by using the following URL in the browser:
   `https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/-/issues/1`

   Gitpod opens a workspace with a new branch for the related issue in Visual Studio Code. You can find the details of the branch at the bottom of the workspace.

2. Update the changes that you want to make in the files of the project repository.

3. Commit the changes and [create a pull request](https://code.visualstudio.com/docs/editor/github#_creating-pull-requests).

### Working on Open Source Projects

Setting up a local dev environment to contribute to your favourite OSS project can be daunting. Luckily, already numerous projects have gitpodified their repositories to enable everyone to contribute with a single click. You can find the list of all Open Source Projects that are integrated with Gitpod on [contribute.dev](https://contribute.dev/).

Here's a list of some of the popular OSS projects. Just click the links and contribute to the projects using Gitpod:

- [freeCodeCamp](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
- [Prometheus](https://gitpod.io/#https://github.com/prometheus/prometheus)
- [GitLab](https://gitpod.io/#https://gitlab.com/gitlab-org/gitlab)
- [Forem](https://gitpod.io/#https://github.com/forem/forem) powering [dev.to](https://dev.to/)
- [Nushell](https://gitpod.io/#https://github.com/nushell/nushell)

## Using a Prefixed URL

You can quickly open a new workspace for any GitLab, GitHub, or Bitbucket project, by just prefixing **gitpod.io/#** to the URL of the project in the address bar of the browser.

Gitpod presents you with useful productivity boosts not just when you prefix **gitpod.io/#** to the main URL of the repository, but also for issues, or pull requests.

For example:

- To open the Java with Spring Boot project repository prefix **gitpod.io/#** to the URL of the repository *https://gitlab.com/gitpod/spring-petclinic*.

  The revised URL is: `https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic`

- To open a specific merge request in the Java with Spring Boot project prefix **gitpod.io/#** to the URL of the merge request *https://gitlab.com/gitpod/spring-petclinic/-/merge_requests/2*.

  The revised URL is: `https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/-/merge_requests/2`

- To open a specific issue in the Java with Spring Boot project prefix **gitpod.io/#** to the URL of the merge request *https://gitlab.com/gitpod/spring-petclinic/-/issues/1*.

  The revised URL is: `https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/-/issues/1`

[Learn more &rarr;](/docs/context-urls)

## Installing a Browser Extension

For convenience, there is Gitpod browser extension that works with Chromium-based browsers such as Microsoft Edge, Brave, Chrome, and others, and Firefox browser. The extension adds a Gitpod button on every project and branch across GitLab, GitHub, and Bitbucket so that you can easily open a new workspace for any existing project.
![Browser Extension](../../../static/images/docs/browser-extension-lense.png)

Gitpod provides the extensions for the following browsers:

- [Chrome](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki)
- [Firefox](https://addons.mozilla.org/firefox/addon/gitpod/)

## Next Steps

With Gitpod you start treating your dev environments as something ephemeral: you start them, you code, you push your code, and you forget about them. For your next task, you'll use a fresh dev environment.

🛠 [Gitpodify your first project!](https://www.gitpod.io/docs/configuration)
