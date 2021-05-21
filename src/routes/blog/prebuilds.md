---
author: csweichel
date: Mon Mar 18 2019 16:16:17 GMT+0000 (UTC)
excerpt: Once your development environment is freed from manual setup procedures it can do work even while you are not. We call this continuous
image: compiling-xkcd.png
slug: prebuilds
subtitle: Prebuild your workspaces
title: Waiting for code to build is like watching paint dry
url: https://medium.com/@csweichel/a1c6b25fd601
---

<script context="module">
  export const prerender = true;
</script>

Once your development environment is freed from manual setup procedures it can do work even while you are not. We call this continuous development.

A while ago Sven described the idea of [development environment as code](/blog/dev-env-as-code). His main point: instead of using outdated README files that describe how to set up our development environment we should have executable, replicable and version-controlled descriptions thereof. In such a dev-environment as code world, on-boarding new team members/contributors is dead easy, going back to an old branch becomes a breeze (that old setup you had a year ago is now easy to restore) and playing with a new project becomes a joy. All those situations are very much _direct use_ scenarios; you set up a dev-environment using code which you as a developer use straight away.

However, a machine-reproducible version of your development setup enables another powerful capability: your dev-environment can already checkout the latest code, download dependencies and build everything. Once you actually open your IDE, everything’s ready for you. No more siting there and watching ~~paint dry~~ yarn download the internet.

![The number 1 programmer excuse for legitimately slacking off: 'My Code is compiling.' - https://xkcd.com/303/](../../../static/images/blog/prebuilds/compiling-xkcd.png)

## Paint dries even when you’re not watching

Turns out we don’t actually have to be present for those things to happen. What if we had a system that would use our dev-environment description, check out the repo, build everything and then make it available to us?

Sounds an awful lot like continuous integration (CI). Except there’s a subtle difference: CI checks if everything still fits together, i.e. does the code still build and do the tests still pass? The result of continuous integration is a test report and a bunch of built binaries/Docker images/update sites/APK files/you get the point. A CI build does not give you a ready-to-code workspace. But it tells you that the next time you want to build your software things will likely be fine.

> Continuous Development means that your code is built before you even open it. Once you open an IDE on your project, everything is ready to go.

The result of _continuous development_ is a ready-to-code workspace. The second you open your IDE you can start working because all dependencies have been downloaded, indices updated, code generated and compiled, ~~and coffee has been brewed~~. Your dev environment has done all the things you’d otherwise do manually, except you didn’t have to trigger them or watch them finish.

## How could we build this?

![Hands with paint on them.](../../../static/images/blog/prebuilds/colored-hands.jpg)_Photo by [Amaury Salas](https://unsplash.com/photos/IhXrWDckZOQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

To build a continuous development system we need three things:

1. A dev-environment-as-code, e.g. based on Docker — there are [various ways](/blog/dev-env-as-code#dev-environment-as-code/) of how this can be achieved.

1. Means to trigger an action when our code changes. The obvious candidates are [webhooks](https://developer.github.com/webhooks/), [GitHub actions](https://github.com/features/actions), or something tied in to your CI system.

1. The integration bit that upon changes to your code builds the dev-environment, checks out your code, builds it and then serves the resulting ready-to-code environment.

Let’s sketch out a possible implementation of a such a system. Our dev-environment-as-code is basically a Docker image that contains the tools we need + [Eclipse Theia](https://www.theia-ide.org/) as IDE). Suppose we’d have this dev-env built as ourprj/dev-env:latest .

```
FROM theiaide/theia:next

USER root
RUN apk add go && \
    npm install --global yarn
USER theia
```

Using for example Jenkins or GitHub Actions we can then build a ready-to-code environment using a Dockerfile such as:

```
FROM ourprj/dev-env:latest

WORKDIR /home/project
COPY /workspace/ourprj .

RUN yarn install && \
    yarn build
```

Once we’re ready to start working on a new feature, or want to review a PR, we just find the previously built Docker image and have everything ready to go. No faffing with git clone, waiting for the code to build or anything of the sorts. We have reduced many minutes of our time to a simple docker run.

A similar way of implementing this is the way [gitpod.io](https://gitpod.io) does it (full disclosure: I am one of the folks working on this project). Gitpod comes with a GitHub app that triggers _workspace prebuilds_ which in essence take your dev-environment as code (Dockerfile), execute a set of commands in there and associate the results with the particular commit that triggered it all. When you open a workspace on that commit, you’ll get the results of the prebuild instead of waiting for everything to complete.

## Is this new?

Probably not. The idea has been around in one form or the other. But now, with the advent of machine reproducible dev-environments, Docker & Theia we can finally build this for the real world. I did not find statistics how much time people spend waiting for their stuff to build on any given day. But I know waiting for something that you didn’t have to wait for is not a good way to spend your time. If anything continuous development helps us developers create more and wait less.
