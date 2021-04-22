---
author: anudeepreddy
date: Wed Jun 26 2019 11:57:00 GMT+0000 (UTC)
excerpt: Build your webhook for your Google Assistant action and host it temporarily on Gitpod and test your code.
image: Build-and-test-your-webhook.png
slug: build-a-webhook-for-google-assistant
subtitle: Build and test your webhook using Gitpod
title: Build a Webhook for Google Assistant Action
url: https://blog.anudeepreddy.ml/build-a-webhook-for-google-assistant/
---

<script context="module">
  export const prerender = true;
</script>

This post is all about how to build your webhook for your Google Assistant action and host it temporarily on Gitpod and test your code.

## Prerequisites

- Node JS
- Express JS
- Basics on how to use Github

If you have these in place, Let's get started.

## What is Gitpod?

First of all I would like to start this section by saying, I ❤ Gitpod. Gitpod is an online IDE for Github. Gitpod provides you with a fully working development environment, including a VS Code-powered IDE and a cloud-based Linux container configured specifically for the project at hand. Just prefix your Github repo URL with "https://gitpod.io/#", So that the final link looks something like this "https://gitpod.io/#https://github.com/<username>/<repo-name>" or you can also use the Gitpod [browser extension](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki?hl=en) to add the Gitpod button to Github page.

<iframe width="560" height="315" src="https://www.youtube.com/embed/bFZMKpDV3GQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="Gitpod Always Ready-to-Code video" allowfullscreen></iframe>

## Let's start building

I have created a Github repo which will help you get started without any hassle. The repo is basically a boilerplate to get started with building your webhook. The code is written in Node JS, So it would be easier for you to build on top of it if you are already familiar with Node JS. We will be using the [action-on-google](https://www.npmjs.com/package/actions-on-google) Node JS library (This client library makes it easy to create Actions for the Google Assistant and supports Dialogflow, Actions SDK, and Smart Home fulfillment.).

### Create your Action

- Head over to https://console.actions.google.com/ and click on New Project.

![Google Actions Console](https://res-2.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/Annotation-2019-06-28-141627.png)

- Enter your project name and click on create project.

![Google Actions Create New Project Prompt](https://res-1.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/gitpod-action.png)

- Now select a category for your Action.
- Now under the Develop menu, give your action a name.
- Now head over to actions menu in Develop tab and click on **Add your first action**.

!['Add your first action' button](https://res-1.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/temp2.png)

- In the next section choose **custom intent** and click on **build**. Doing this will redirect you to the **Dialogflow console** and it should look something like this.

![Dialogflow console](https://res-3.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/temp3.png)

- Click on create to **create** your agent on Dialogflow.
- Once your agent is ready, you will already have two default Intents (Default Fallback Intent and Default Welcome Intent) in place and these two do pretty good at their job.
- Now it's time to create a new intent and enable fulfillments for that intent so that we can serve responses from the webhook that we will be building in the next section.
- Click on create a new intent, give it a name and training phrase (training phrase will be used to invoke the intent). Now that your intent is almost ready scroll down and under fulfillments **enable webhook call** for the new Default welcome intent and the new intent you just created.

### Understanding .gitpod.yml

The .gitpod.yml file is used to automate setting up the environment required to run your app.

![.gitpod.yml environment setup for running your app](https://res-5.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/carbon--4-.png)

If you want to access services running in your workspace, e.g. a development HTTP server on port 8080, you need to expose that port first. Gitpod has two means of doing that:

1. On-the-fly: when you start a process which listens on a port in your workspace, Gitpod will ask you if you want to expose that port to the internet.
2. In your configuration: if you already know that you want a particular port exposed, you can configure it in the .gitpod.yml file and skip the extra click later on. For example:

```
ports:
  - port: 3000
```

When starting or restarting a workspace you typically want to run certain tasks. Most probably that includes the build and maybe also running tests and automatically start the application in e.g. a dev server.

Gitpod allows you to configure start tasks in the .gitpod.yml file.

For instance, the start script for this repository is defined as:

```
tasks:
- init: npm install
  command: npm start
```

You can have multiple tasks, which are opened on separated terminals.

```
tasks:
- init: npm install
  command: npm start
- command: echo -e "\n\nwebhook url - $(gp url 3000)/webhook \n\nCopy and paste this url in the Dialogflow console"
```

#### `init` command

The init property can be used to specify shell commands that should only be executed after a workspace was freshly cloned and needs to be initialized somehow. Such tasks are usually builds or downloading dependencies. Anything you only want to do once but not when you restart a workspace or start a snapshot.

In our case the `init` command is

```
tasks:
- init: npm install
```

### Get the Gitpod setup running

- Fork my [repo (dialogflow-webhook-boilerplate-nodejs)](https://github.com/anudeepreddy/dialogflow-webhook-boilerplate-nodejs) **or** just click on the run in gitpod button in my repo. (If you do this you have to fork it from the workspace so that you can commit your own changes to your repo).
- Now you can just prefix your repo url with "https://gitpod.io/#". This should take you to Gitpod and start your workspace. The workspace take a little while to start.
- Once the workspace is running you should see something like this.

![Gitpod Workspace](https://res-2.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/Annotation-2019-06-25-171555.png)

- If you notice the Node app is already running in the first terminal. This is automated by a Gitpod configuration file. And the webhook URL is printed on to the second terminal. All the dependencies that are required are also installed while creating the workspace.

![Gitpod integrated Linux Terminals](https://res-5.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/Annotation-2019-06-25-171555-crop.png)

- Now that the webhook is running and i presume that you already have your agent on Dialogflow (If not create an agent), Next thing you need to do is to copy the webhook URL from the terminal and paste it in the Fulfillments section in the Dialogflow Console.

![Dialogflow console Fullfillments section](https://res-5.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/Annotation-2019-06-25-172359.png)

- Open the index.js file which contains the code for the webhook.

![File index.js which contains the source code for the webhook](https://res-1.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/carbon--1-.png)

The file initially contains this code. Now lets add some more code to it to display a card when we invoke the new intent we created in the previous section.
actions-on-google library provides many functionalities to can simplify your task to render rich responses in your action.

We will be adding the following code to display a card when the new intent is invoked.

![Code to display a card when the new intent is invoked](https://res-1.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/carbon--3-.png)

Replace the URL's and other contents in the code and stop the previous instance of the app from running and start it again after you have made changes to the code by running `npm start` in the terminal.

- To test your action you can click on **See how it works in Google Assistant** in the Dialogflow console.

![See how it works in Google Assistant](https://res-3.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/Annotation-2019-06-28-175558.png)

- Invoking the intent would give you response similar to this.

![Response on invoking the intent](https://res-5.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/Screenshot_20190628-181019.png)

Refer to the links below to add your own functionalities.

## Links to Refer

- If you would like to learn more about the actions-on-google library, you can find it here - https://www.npmjs.com/package/actions-on-google
- Go through these examples - https://developers.google.com/assistant/conversational/df-asdk/samples/github
- Rich responses example - https://github.com/actions-on-google/dialogflow-conversation-components-nodejs

## Conclusion

Gitpod can make your life much simpler by automating your development setup just by adding a simple configuration file to your repo. You can refer to the Gitpod [Docs](https://www.gitpod.io/docs) to learn more about the platform. Gitpod lets you work with unlimited workspace but with 100hrs/month runtime. It also provides Personal and unlimited plans as well. If you are a student then you can claim Gitpod Unlimited plan for just $9.

![Animated character waving hand with a smile](https://res-3.cloudinary.com/anudeepc/image/upload/q_auto/v1/blog-images/character.gif)

<h1>Happy coding with Gitpod ✨</h1>
