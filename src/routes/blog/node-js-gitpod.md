---
author: akosyakov
date: Tue Nov 13 2018 12:41:55 GMT+0000 (UTC)
excerpt: Gitpod is based on the open-source Theia IDE Framework, which is highly inspired by VS Code, reuses its major components like the Monaco
image: node-js-gitpod.png
slug: node-js-gitpod
title: Debugging Node.js applications in Theia
url: https://medium.com/gitpod/debugging-node-js-applications-in-theia-76c94c76f0a1
---

<script context="module">
  export const prerender = true;
</script>

Gitpod is based on the open-source Theia IDE Framework, which is highly inspired by VS Code, reuses its major components like the Monaco editor and intelligent-language support and is designed to run as a web application.

At TypeFox, we use Gitpod to develop Theia and all its satellite projects, like Theia extensions and language servers. We’ve discovered that for most use cases we don’t need to go to local development anymore. Development, testing, and the review processes are streamlined, leading from source code to a proper development environment accessible from a browser with a single click.

Up to now, there was one important use case that forced us back to local tools, because it was not supported by Gitpod: Debugging.

Now, it is available, and I would like to give you a run through the basics of Node.js debugging in Gitpod based on an example.

## Step 0: Open Node.js Shopping Cart example in Gitpod

Start a new workspace for the example GitHub repository: [https://gitpod.io/#https://github.com/gitpod-io/nodejs-shopping-cart](https://gitpod.io/#https://github.com/gitpod-io/nodejs-shopping-cart)

![Start a new Gitpod workspace for the shopping cart example via prefixing the URL with gitpod.io#](https://cdn-images-1.medium.com/max/2992/0*WySkgfqLHyOkQq_c)

A new Gitpod workspace will be opened. Required dependencies are installed automatically since the repository is configured with [a .gitpod.yml file](https://www.gitpod.io/docs/configure). You can see it in the terminal, opened in the bottom area.

## Step 1: Start debugging

![Gitpod workspace](https://cdn-images-1.medium.com/max/2000/0*cm6tolHouEztvvuC)

In order to start debugging, you should open the debug view first. You can do it via Viewmain menu or with Ctrl/Cmd+Shift+D.

The debug view allows you to configure launch configurations, start and manage debug sessions. Configurations are persisted debugging setups. They are stored in a [VS Code compatible format](https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes) in a launch.json JSON-file located in your workspace’s .theia folder. If your project already has the VS Code launch file, then Gitpod will recognize and use it instead.

Node.js Shopping Cart is an Express.js web-application. The repository already has a pre-configured Launch Program configuration, which starts the web server Node.js process in the debug mode. Let’s run it with F5 or by pressing the run button left to the configuration drop-down.

![Gitpod Debug Tab](https://cdn-images-1.medium.com/max/3644/1*SUD-Cfy3YC86JJmgo1bLpA.png)

## Step 2: Preview the application

A notification should pop-up suggesting you open an application side-by-side with an editor or externally, in a new browser tab. Let’s open it side-by-side to be able to debug and use our app at the same time.

![Gitpod Preview Notification](https://cdn-images-1.medium.com/max/4512/1*65SBIeZyvn_31V9biYKNAQ.png)

Take your time and play with the app. You can review items to buy and in your cart, move them into or out of your cart.

![Gitpod workspace shopping cart application preview](https://cdn-images-1.medium.com/max/7676/1*M6KN6axYYOW8iqlnqsXpVw.png)

## Step 3: Pause on a breakpoint

In this step we debug what happens when a user navigates to the homepage.

First, we need to add a breakpoint to the routing logic. It is defined in routes/index.js. You can open that file from the navigator or using the quick file palette (Ctrl/Cmd+P) .

![Gitpod quick file pallete](https://cdn-images-1.medium.com/max/2500/1*6ni4GKFo9FFJoh_r8lvLVg.png)

Next, add a breakpoint in the editor margin against a line which you want to debug. A route callback handling / path looks promising.

![Debugging: Breakpoints](https://cdn-images-1.medium.com/max/2988/1*AaqYqH5LILFw4g0-jNu5Bg.png)_Breakpoints are displayed in the debug view and applied to currently running sessions._

Now, in the app, try navigating to the homepage. The debug session will pause on the breakpoint. You can traverse the current stack trace, inspect variables and control the execution flow with the debug actions toolbar:

![Gitpod Debug Menu](https://cdn-images-1.medium.com/max/2000/1*Ru0MXHEcU_RzQEAKX30seA.png)

## Step 4: Inspect and modify data

There are several ways to see variables’ values:

- you can traverse current scopes and variables in the debug view;

- you can hover over expressions in the editor to evaluate them with a current session;

- or you can use the debug console (REPL) to evaluate custom expressions.

You can always double-click on any variable to modify its value.

![Debug: Inspect and Modify data](https://cdn-images-1.medium.com/max/7676/1*_zf4PL_AWfzeBZlp2mRjZQ.png)

## Next steps

Debugging is an important feature to provide the complete development experience. The Node.js debugging support is the first step for Gitpod in this direction. We are working to bring more debug features and add support for more runtimes. We would also love to hear what features and runtimes you want to see supported. [Tell us](https://github.com/gitpod-io/gitpod/issues/new/choose).
