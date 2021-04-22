---
author: svenefftinge
date: Wed Sep 26 2018 09:35:09 GMT+0000 (UTC)
excerpt: It has been a month already since we went public with Gitpod.io. We want to take a moment and send out a big thank you for all the great
image: october-2018-release.jpeg
slug: october-2018-release
subtitle: What's new this month?
title: Gitpod — October 2018 Release
url: https://medium.com/gitpod/gitpod-october-2018-release-672c91294b40
---

<script context="module">
  export const prerender = true;
</script>

It has been a month already since we went public with Gitpod.io. We want to take a moment and send out a big thank you for all the great feedback and kind words! <span aria-hidden="true">❤️</span>

We are working to incorporate all your feedback continuously, adding new features, fixing bugs and improving the overall usability and performance.
Please keep sending all that useful feedback!

Today, we are pleased to announce a new version of [Gitpod](https://www.gitpod.io).

![A Cake with Sparkles by [Audrey Fretz](https://unsplash.com/@parkstreet?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/10944/0*TrpIB26qJjpdoAmh)_Photo by [Audrey Fretz](https://unsplash.com/@parkstreet?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)_

Here are the most important new features and improvements:

## Unlimited Gitpod Hours! 🎁

To allow you using Gitpod as much as you want, during the beta you can now
**add extra Gitpod Hours whenever you run low on them**!

![Gitpod Dashboard add extra hours](https://cdn-images-1.medium.com/max/5364/1*JUfY6XPR9o74dYU1kNWvcA.png)

## Docker File Support ⚙️

Most projects need special tools, which can be provided by naming a custom Docker image in your _.gitpod_ file.

Starting today, you can point to a _Dockerfile_ that sits next to the _.gitpod_ file. Gitpod will take care of building and caching it for you. Instead of managing your own docker builds and versions, simply put the _Dockerfile_ into the repository and you will always have a working setup for the branch at hand.

Please read [Gero’s post](/blog/docker-in-gitpod) explaining this feature in more detail.

![Gitpod Workspace startup phase building workspace](https://cdn-images-1.medium.com/max/3988/1*IBKSgvfSNzbcyz8YUIc4cg.png)

## Introduced CLI ⌨️

We have introduced a CLI which allows controlling the IDE from the command line, for instance you can open files. Try:

```
gpopen path/to/file
```

or just

```
open path/to/file
```

or in case your muscle memory is taking over :)

```
code path/to/file
```

We will add more features to the CLI. If you have ideas or demands please file tickets [over here](https://github.com/gitpod-io/gitpod/issues).

## GitHub Bot 🤖

The [Gitpod Bot for Github](https://github.com/apps/gitpod-io) can automatically add Gitpod-links to issues and pull-requests. For instance, if you want to improve onboarding for new contributors you should configure the bot so it adds links to **good_first_issue** or **help_wanted **tagged issues.

![Gitpod Bot for Github](../../../static/images/blog/october-2018-release/gitpod-bot-for-gh.png)

We will shortly write a post dedicated to streamlining the contributor’s experience.

## User Preferences 🤓

Preferences and user preferences now allow for customizing your experience individually or per workspace. The workspace preferences are stored in the git repository, while the user preferences are stored in your account and will be used across all your workspaces.

![User Preferences](https://cdn-images-1.medium.com/max/6280/1*0SbAwb4vDj28OVvvQmdflQ.png)

## Change Language Mode 💬

Sometimes you want to manually change syntax coloring because e.g. no file extension is present. Clicking on the language name in the status bar now allows to quick pick what language to use for an opened editor.

![Change Language Mode](https://cdn-images-1.medium.com/max/4836/1*HVSkKl7A0oxt3S0UDshHGw.png)

## Enhanced Dashboard 💄

In case you want to work a bit longer on a workspace you can now change its description. Also the workspace id is shown in the dashboard so you can tell apart multiple workspaces for the same context.

![Enhanced Gitpod Dashboard](https://cdn-images-1.medium.com/max/4532/1*7xvMmtyT_afIYtj0nX-7Pw.png)

## Other Improvements 🚀

There are plenty of other improvements and fixes that didn’t make it to the list. For instance, Go-projects are now automatically set up correctly even without any configuration. Also there are plenty of enhancements that have been added to the [TypeScript language server](https://github.com/theia-ide/typescript-language-server). TSLint now works great and we laid out the foundation to add specific editing support for more frameworks and linters such as Vue.js, Angular and ESLint.

In addition to the explicitly mentioned features you can find a full list of fixes and changes in the [Theia repository](https://github.com/theia-ide/theia).

## **Next Release 🔆**

We are targeting a regular release cycle of one month with smaller continuous updates in-between. For the next release we will focus heavily on improving the startup time as well as the lagging dashboards in the US and the Asian region. Besides that we have some exciting new features up our sleeves as well.

Stay tuned and have fun! <span aria-hidden="true">🎉</span>

(emoji-mode off)
