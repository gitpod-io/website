---
author: svenefftinge
date: Thu Jul 05 2018 11:49:24 GMT+0000 (UTC)
excerpt: As software developers, we already spend a lot of our time in browsers.
image: a-better-github-flow.png
slug: github-flow
subtitle: Stop setting up, start coding!
title: A Better GitHub Flow
url: https://medium.com/gitpod/github-flows-better-with-gitpod-e455d17990f9
---

<script context="module">
  export const prerender = true;
</script>

As software developers, we already spend a lot of our time in browsers. Be it for searching Google/StackOverflow, checking our latest Continuous Integration builds on Jenkins resp. Travis, or doing code reviews on GitHub, Bitbucket, or Gerrit. Also, communication with the team happens in web applications, such as Gmail, Google Hangout or Slack. The convenience of web applications and OAuth-based authentication allows us to use any computer to do most of our work immediately.

However, when it comes to the actual coding and debugging, we have to prepare our local development environments manually. We do this based on often outdated, incomplete or just plain wrong documentation. The transition from an online repository to the actual coding is a barrier that hinders thousands of possible contributions every day. Coding needs to get more accessible.

![(Programming Environment - Dilbert by Scott Adams. Source: [http://dilbert.com/strip/2017-01-02)](http://dilbert.com/strip/2017-01-02))](https://cdn-images-1.medium.com/max/2048/0*f260tcqJvgvCguFu)_(Source: [http://dilbert.com/strip/2017-01-02)](http://dilbert.com/strip/2017-01-02))_

But that only needs to be done once, right? Unfortunately, no. Coding is a team sport. We are not just adding code, but also do code reviews or fix bugs on maintenance branches which often require a different setup. Moreover, today’s applications are loosely coupled compositions of independent microservices and sub-projects, written in different languages requiring different development setups. Consequently, we have to maintain setups for multiple projects and branches, trying to keep documentation in sync including all the cases for the different platforms. As a result, we are wasting precious time every day. We should spend this time and effort on more fun and productive things.

Once we have the setup, we run builds and test suites. Those processes are usually an excellent reason to grab a coffee because it is blocking our machine. Wouldn’t it be nice to push such workload to the cloud, where it not only runs faster but can easily be parallelized? Your computer stays calm and cool, and you still can have your coffee if you want.

In this article, I will walk you through an automated, cloud-based development workflow. [Gitpod](https://gitpod.io) is based on Kubernetes, GitHub, and the new Eclipse Theia project — a VS Code-like IDE that runs in modern browsers. You can think of it as an online IDE with deep GitHub integration (and soon other platforms), providing fully-featured development environments with a single click for any GitHub project, issue, branch or pull request.

**Automation**

Starting a workspace with Gitpod is much easier than with other cloud IDEs. Gitpod doesn’t require you to configure workspaces with container images, Git information and so on. Instead, you directly go to a GitHub repository and click the Gitpod-Button [see below]. Gitpod provides you with a ready to use workspace, so that you can immediately start coding without any configuration steps.

![Button provided by Gitpod’s browser extension](https://cdn-images-1.medium.com/max/3200/0*MjUIJ1zspz3CF8oo)_Button provided by Gitpod’s browser extension_

> To see the Gitpod button on the GitHub page, you would have to [install a browser extension](https://gitpod.io). Alternatively, you can manually prefix any GitHub URL with `https://gitpod.io/#`. For instance, clicking the following link will instantly provide you a development workspace for the Eclipse Theia project: [https://gitpod.io/#https://github.com/theia-ide/theia](https://gitpod.io/#https://github.com/theia-ide/theia)

Of course, different projects need different setups. Gitpod has a three-stage process to determine the workspace configuration, e.g. what docker image to use for development, what startup script to run, and which ports to expose:

1. It first looks for a _.gitpod_ configuration file in the repository. Note, that it will check the state of the currently viewed commit. This allows you to keep working configuration for old states as well as trying a new configuration in a pull request.

1. Second, if there is no configuration in the cloned repository, a central repository called ‘[definitely-gp](https://github.com/gitpod-io/definitely-gp)’ is checked for configuration. It is a public repository which contains configurations for arbitrary GitHub projects. That is useful if you want to provide configuration for a repository you don’t have write access to. Everybody is invited to contribute to this.

1. As a last resort, Gitpod analyzes the repository and derives a suitable configuration from there. For instance, if the repository contains a `yarn.lock` file it will automatically run `yarn install` in the beginning.

The key takeaway here is that you can handcraft a Docker file that includes all the development tools you need for your project as well as any ports to be exposed or scripts you want to run when a workspace starts. You can put that configuration under version control, replacing the onboarding documentation with a formal, executable description. But there is more information in a GitHub URL that can be leveraged to keep us in the flow.

**It’s All About The Context**

When creating a workspace, Gitpod will analyze the provided GitHub URL. If you are looking at a particular branch it will check out that branch; if you are looking at a specific file, it will automatically open that file in Gitpod’s IDE.

Some great features, which are heavily used on GitHub, are issues and pull requests. If you want to start working on a GitHub issue, you simply spawn a fresh workspace from the issue page on GitHub. Gitpod puts you into the right context, by automatically creating a local branch using the issue number and even pre-configures the commit message accordingly. All is set up for you to start coding and testing. Once you are happy with the changes you made, use the Git integration to create a commit and push it to a remote branch. Finally, you can even create the actual pull request right from within Gitpod.

Lastly, of course, when clicking the Gitpod button on a pull request, Gitpod beams you right into code review mode. A panel on the left will list the changed files, allowing you to go through them one by one. Changes are opened in the diff editor where you can also read and add review comments. And because it is a full IDE, we can navigate through the entire code base, run code or add commits at will. Approving the pull request is supported, too.

![Inline code review comments](https://cdn-images-1.medium.com/max/3200/0*8N39dT5P6Q1zQdIR)_Inline code review comments_

**Theia IDE**

All the smart automation doesn’t help if you end up with a bad development experience. So let’s talk about the IDE that powers Gitpod.

Theia is an open-source project that has been in development for over a year now. In addition to the TypeFox team, other companies like Ericsson and RedHat are actively contributing to it. The Eclipse Che team is replacing their existing IDE with Theia, and companies like IBM already have [public offers](https://microclimate-dev2ops.github.io/) based on it. Theia just recently became an Eclipse project, to make sure it is developed in a truly open and democratic manner and that no single company is controlling its future.

Even with all that momentum, it seems to be an unrealistic effort to develop a new IDE from scratch. Just consider how many years of development were put into projects like the classic Eclipse IDE or Visual Studio. Gladly, this is not what the Theia team is doing.

The most important building blocks for Theia are probably the Monaco editor and the use of protocols. Monaco is the code editor that supports VS Code and is very flexible, high-quality code editor written in TypeScript (JavaScript). Unlike VS Code, the Monaco editor widget can run in browsers.

The second ingredient is the use of protocols. The most popular one being the language server protocol [4].

**The [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/)**

The LSP is an effort started by VS Code to allow using language services in a technology- and UI-independent manner. One of the first popular reusable language services came from the TypeScript team. Such a service is a simple headless process that provides language smartness to an editor / IDE through messaging.

For instance, a text editor, supporting the LSP, can ask a language server for completion proposals given a document and a cursor position. All the heavy lifting such as parsing, type resolution, and linting is done in the language server. The IDE only needs to know how to represent the returned information for the user, e.g. propose the completion proposals in a pop-up.

As of May 2018, there are 64 language servers listed on the [official site](https://microsoft.github.io/language-server-protocol/implementors/servers/) covering all of the mainstream programming languages, such as JavaScript, Python, Java, C++ or Go. If something is missing, it is a good idea to search the web as the list is incomplete and new language servers are released every other week. If you want to build your own language server, there are SDKs for various languages ranging from TypeScript, Java and C# to Haskell. Finally, [Xtext](https://github.com/theia-ide/theia-xtext) provides a full framework for implementing a language server for domain-specific languages.

The LSP allows moving mature code bases for language smartness to the future. The very popular Java language server which is not only used in Theia but also in Atom and VS Code is really a headless version of Eclipse’s Java Development tools.

Theia uses and supports other protocols as well. For instance, debugging support is in the works and will support the Debug Adapter Protocol which connects Theia to 50+ existing debuggers.

**Extensibility**

Besides the ability to run Theia in browsers there is another important difference to VS Code: VS Code extensions are limited to what is exposed in the VS Code’s extension API. For instance, it is not possible to create a new view in a VS code extension. This is a serious blocker for more advanced extensions. Contrarily in Theia where extensions are first class building blocks an extension can deep integration and make use of everything. Even fully white-labeled products are possible due to its flexible architecture. That said, the Theia team is working on supporting VS Code extensions, additionally.

**Outlook**

Providing automated and disposable workspaces that tightly integrate with GitHub projects and the different contexts eliminates time-consuming transitions and streamlines the developer experience. No more ‘it works on my machine’ conversations can happen, because everybody uses the very same setup, which matches the production environment. The smooth onboarding experience will not only help professional developers but lower the barrier for contributions on open-source projects and start coding in general.

Gitpod is currently going through a public beta phase, where it can be used on public repositories. We are working on improved security, better performance and more cool features. Also, Gitpod is getting support for integration with additional applications, such as Bitbucket, Gitlab, and Gerrit.

Open-source projects like Kubernetes, Theia, TypeScript, VS Code and thousands of other libraries are the giant’s shoulders Gitpod is based on. We hope by offering free usage of Gitpod for public GitHub projects we can further support the flourishing landscape of open-source projects, making it easier for everyone to contribute and for maintainers to review those contributions.
