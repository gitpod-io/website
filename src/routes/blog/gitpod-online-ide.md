---
author: svenefftinge
date: Tue Jul 31 2018 06:02:26 GMT+0000 (UTC)
excerpt: After over one year of intensive work, we are proud to announce the public Beta of Gitpod. Gitpod is an online IDE which can be launched
image: gitpod-online-ide.png
slug: gitpod-online-ide
subtitle: One Click to Coding!
title: Gitpod — Online IDE For GitHub
url: https://medium.com/gitpod/gitpod-gitpod-online-ide-for-github-6296b907a886
---

<script context="module">
  export const prerender = true;
</script>

After over one year of intensive work, we are proud to announce the public Beta of Gitpod.

Gitpod is an online IDE which can be launched from any GitHub page. Simply **prefix any GitHub-URL with “*https://gitpod.io/#*”** or use our [browser extension](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki?hl=en) that adds a button to GitHub pages.

Within seconds, Gitpod provides you with a fully working development environment, including a VS Code-powered IDE and a cloud-based Linux container configured specifically for the project at hand.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/D41zSHJthZI" title="Gitpod introduction" frameborder="0" allowfullscreen></iframe></center>

## **Yet Another Cloud IDE?**

Gitpod is not another cloud IDE, aiming at replacing desktop development. Instead, Gitpod is a natural extension to GitHub. The limited editing capabilities of GitHub are far too often forcing context switches to our local machines. **Gitpod extends our life on GitHub**.

Also, Gitpod is super simple: You don’t maintain your projects or workspaces using overwhelming and complicated dashboards. Instead, any configuration is safely stored and versioned on GitHub.

## **Stay In The GitHub Flow**

Gitpod is highly contextual, such that it opens the IDE in the correct mode depending on the context:

If you are looking at a particular file of a certain commit on GitHub, starting a Gitpod workspace will check out the right version and open the file you’ve been looking at in the IDE.

Starting a Gitpod workspace from an issue will automatically create a branch and preconfigure the commit message.

**Starting Gitpod from a pull request beams your right into code review mode.**

## **GitHub Integration**

Once you are in the IDE, you can interact with GitHub in various ways. Besides the obvious Git integration, you can do things like **commenting inline in editors, approving and even merging PRs**.

![Inline Comments For Pull Requests](https://cdn-images-1.medium.com/max/6908/1*HNDYawJpDgX6gP_e0w17mg.png)_Inline Comments For Pull Requests_

## **Automated Setup**

Gitpod is built on Kubernetes and you can use any Docker image for your development environments. This allows to fully automate the setup and frees everybody from manually going through long and outdated setup documentation. No more “works on my machine” scenarios.

Gitpod provides your collaborators a **single-click-to-contribute** **experience**.

More information on how to configure Gitpod can be found [here](https://www.gitpod.io/docs/configuration).

## **Fire and Forget**

Gitpod workspaces are disposable. You simply create a fresh one whenever you need. Once you are done with your task, the IDE brings you back to GitHub, so you can continue on the next task.

You usually never need to go back to any workspace, but of course you can in case you need to.

## **Full Terminal Access**

Gitpod gives developers full featured terminals to run any processes such as compiling, linting or simply running tests or your application. Any docker image works and you can even configure Gitpod to automatically launch certain tasks on start.

![Terminal](https://cdn-images-1.medium.com/max/6796/1*K8oKjiVfaptpeI27UXPbcA.png)

## **Open Source**

The IDE in Gitpod is based on [Theia](http://theia-ide.org), an open-source project that we ([TypeFox](https://www.typefox.io/)) have started together with our friends from Ericsson in early 2017. You can think of it as **the online version of VS Code**. We love VS Code, but needed some additional properties, like a more extensible architecture and the ability to run in browsers connected to a remote backend. Theia is a true open-source project, hosted at the Eclipse Foundation and developed by a diverse crowd of engineers backed by TypeFox, Ericsson, Red Hat, Arm and others.

![Language Tooling In Action](https://cdn-images-1.medium.com/max/6796/1*5DnbR6-FbyVQ8ILgFHJXOw.png)_Language Tooling In Action_

## **Supports Many Languages**

Being based on VS Code and its Language Server Protocol, Theia supports most major programming languages. The table below provides a good overview of the current state.

![Current State of Supported Programming Languages](https://cdn-images-1.medium.com/max/4712/1*BshL6_wwY2XYRDKSMYiSDg.png)_Current State of Supported Programming Languages_

Additional languages like **C#, Swift, Clojure, Groovy, Objective-C, Markdown, Less, XML and many others** are supported with syntax coloring, as well. Because it is so easy to create an extension for Theia, support will improve both in breadth (more languages) and depth, shortly.

## **Use It For Free!**

You can use Gitpod with any GitHub repository. The login is done through GitHub OAuth. At first, Gitpod will ask for accessing public repos, only. If you want to use it with a private repository, Gitpod will ask again for more permissions.

Why not try it now? If you don’t have a particular repository in mind, you can pick one of the below:

- **JavaScript**:
  [https://gitpod.io/#**https://github.com/ooade/NextSimpleStarter**](https://gitpod.io/#https://github.com/ooade/NextSimpleStarter)

- **Go**:
  [https://gitpod.io/#**https://github.com/demo-apps/go-gin-app**](https://gitpod.io/#https://github.com/demo-apps/go-gin-app)

- **Java**:
  [https://gitpod.io/#**https://github.com/gitpod-io/spring-petclinic**](https://gitpod.io/#https://github.com/gitpod-io/spring-petclinic)

- **Ruby**:
  [https://gitpod.io/#**https://github.com/gitpod-io/rails_sample_app**](https://gitpod.io/#https://github.com/gitpod-io/rails_sample_app)

- **Python**:
  [https://gitpod.io/#**https://github.com/sibtc/django-beginners-guide**](https://gitpod.io/#https://github.com/sibtc/django-beginners-guide)

- **PHP**:
  [https://gitpod.io/#**https://github.com/symfony/demo**](https://gitpod.io/#https://github.com/symfony/demo)

## **Where Are We Going From Here?**

Many other features are ready to use, such as Git integration or the search functionality. But also exciting new features are in development, such as **debugging, collaboration **and **support for GitLab and Bitbucket**. Even **support for VS Code extensions** is on its way.

Besides more features, we are focussing on improving the overall experience by streamlining rough edges, fixing bugs and improving performance. New releases will come out continuously.

If you have feedback or find bugs, please [file them here](https://github.com/gitpod-io/gitpod/issues).

**Happy coding!**
