---
author: svenefftinge
date: Thu Dec 20 2018 21:51:05 GMT+0000 (UTC)
excerpt: Learn how to streamline your code review experience. Code reviews are one of the best things you can do to keep your codebase clean. They
image: when-code-reviews-lgtm.jpeg
slug: when-code-reviews-lgtm
subtitle: Say goodbye to shallow reviews!
teaserImage: when-code-reviews-lgtm.jpeg
title: When code reviews LGTM
url: https://hackernoon.com/when-code-reviews-lgtm-say-goodbye-to-shallow-reviews-a4e01b84ddef
---

<script context="module">
  export const prerender = true;
</script>

Learn how to streamline your code review experience.

Code reviews are one of the best things you can do to keep your codebase clean. They improve code quality, reduce code ownership and let you learn a lot from your teammates.

Much has been said about the [advantages](https://blog.codinghorror.com/code-reviews-just-do-it/) [of code reviews](https://www.quora.com/Why-is-code-review-so-important-in-the-software-industry) for individuals, teams and codebases. Research has found that projects that do proper code reviews identify <a class="no-nowrap" href="https://web.archive.org/web/20151009203148/http://ieeexplore.ieee.org/xpl/login.jsp?reload=true&amp;tp=&amp;arnumber=4815279">“… more than half of the defects in code reviews”</a>.

Assuming you understood the importance of it, I want to discuss the tools, the process and how you can improve your code review experience using [Gitpod](https://www.gitpod.io) and new app for GitHub that lets you do deep code reviews.

## Context Switches & Shallow Reviews

Code reviews are super valuable but they add friction to our daily tasks. Without reviews you would probably write code all day, maybe have a discussion here and there. But you would would mostly working on a single task or at least one after the other.

Therefore, changing our local dev environment between different branches is something we want to avoid. Especially if setup times (rebuilding, etc.) are long. So instead of doing our colleague a favor and providing a proper code review, we too often take the shortcut and just glimpse over the code online in a code review tool. Be it GitHub, Gitlab, Bitbucket, or Gerrit they all just present syntax coloured diffs. These tools allow us to glimpse over the changes, but we cannot run the code, navigate around (and use the smart editing features for that) or even add code (e.g. tests).

As a result, many bugs are not spotted and potentially wrong assumptions are not identified during such shallow code reviews.

## Deep Code Reviews

Instead of glimpsing over the changes on GitHub, we should check out the branch in a real development environment. So we can read, run, and test them.

Yes, it messes up our local development context and might even take a bit of time to set up. And, yes, we have to go back to the online code review tool to add our comments. It’s all a bit cumbersome so … **maybe for this little change I could just go with a quick LGTM?**

I feel your pain, but you should not take that shortcut. It will fire back eventually. Instead, let’s improve our workflows, streamline the context switches and get rid of unnecessary overhead.

## Enter Gitpod

[Gitpod](https://www.gitpod.io) gives you a full development environment with a single click for any pull request on GitHub. You don’t have to manually setup or even change anything on your local development environment. Just click a button and you have the best of both worlds:

- a full development environment (similar to VS Code)

- a great code review experience (similar to GitHub)

## Code Review in Gitpod

When you start a Gitpod workspace from a pull request, it will automatically open with the list of changes on the left. You can now use either the cursor keys or the mouse to go through the changes one by one.

![Gitpod Diff Editor](https://cdn-images-1.medium.com/max/2880/1*JXfHOvLeHj-RyczGleIpZg.gif)

The opened diff editors are full-fledged code editors, so you can navigate to inspect references and easily check out alternative code. You can even comment right within those editors.

![Diff Editor an example review comment](https://cdn-images-1.medium.com/max/6200/1*qGnEh6LFqkiChDY9-UXk8w.png)

The build starts automatically, so you can already spot any issues coming up from there, while you are reviewing.

Launching the tests or even running and trying the application is something that is part of a good code review as well.

The last thing you do is to submit your review and close the browser tab.

![Gitpod submit review tab](https://cdn-images-1.medium.com/max/6200/1*eu_d_3DJvBOhC9rMDwjb1w.png)

## TL;DR

While we cannot get rid of context switches completely when doing code reviews, we can streamline and automate those switches so that they are less time consuming and distracting.

Gitpod integrates the review features of GitHub in an online IDE and provides an automated experience with a single click. All you need is a browser, and once you are done with the review, you just close the window and don’t need to look back.

Gitpod is free and you can use it now. Just go to any pull request on GitHub and prefix the URL with. `gitpod.io/#`, e.g.
[https://gitpod.io/#https://github.com/theia-ide/theia/pull/1204](https://gitpod.io/#https://github.com/theia-ide/theia/pull/1204)
