---
author: svenefftinge
date: Wed Dec 04 2019 13:49:24 GMT+0000 (UTC)
excerpt: We are happy to announce that you can finally enjoy Gitpod's frictionless ready-to-code dev environments on GitLab as well.
image: teaser-gitlab-cover.png
slug: gitlab-support
subtitle: Your devops toolchain is finally complete!
title: GitLab Support for Gitpod is Here 🎉
---

<script context="module">
  export const prerender = true;
</script>

We are happy to announce that you can finally enjoy Gitpod's frictionless ready-to-code dev environments on GitLab as well.

![gitpod loves gitlab](../../../static/images/blog/gitlab-support/teaser-gitlab-gitpod.jpg)

<h2 class="h1">Getting Started with GitLab and Gitpod</h2>

Starting a dev environment for a GitLab project works just as with GitHub, i.e. you prefix any GitLab project URL with `gitpod.io/#`.

You can try it out with the Spring PetClinic example:
https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic

Besides the standard project URL, Gitpod supports

- opening file URLs

  <p>Example: <a href="https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/blob/master/src/main/java/org/springframework/samples/petclinic/PetClinicApplication.java" target="blank"><b style="font-weight:700;">https://gitpod.io/#</b>https://gitlab.com/gitpod/spring-petclinic/.../petclinic/PetClinicApplication.java</a></p>

- opening branches

  <p>Example: <a href="https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/tree/my-branch" target="blank"><b style="font-weight:700;">https://gitpod.io/#</b>https://gitlab.com/gitpod/spring-petclinic/tree/my-branch</a></p>

- opening issues

  <p>Example: <a href="https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/issues/1" target="blank"><b style="font-weight:700;">https://gitpod.io/#</b>https://gitlab.com/gitpod/spring-petclinic/issues/1</a></p>

- opening merge requests

  <p>Example: <a href="https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/merge_requests/1" target="blank"><b style="font-weight:700;">https://gitpod.io/#</b>https://gitlab.com/gitpod/spring-petclinic/merge_requests/1</a></p>

Depending on the context, your dev environment will be initialized differently.

For instance, if you start a workspace from the issue context above, you’ll get a fresh workspace with a new local branch based on `master`.

The new local branch will be named like `<username>/<issue-title>-<issue-nr>`, in my case it is:
`svenefftinge/allow-skip-first-name-1` (if the issue title is too long, only the first few words will be included in the branch name).

![GitLab Issue Context](../../../static/images/blog/gitlab-support/gitlab-issue-context-status.png)

## Configure your project

To get the most out of Gitpod, you need to tell it how a perfect dev environment for your project looks like. Dev environments run as containers which you can configure through custom Docker files.

Furthermore you can specify which tasks should run after a fresh checkout. Usually this includes build steps, downloading dependencies and running some unit tests. Read below's section on prebuilds, to make Gitpod automatically run these steps as a CI pipeline whenever someone pushes changes to your project.

There is much more you can do to make sure every team member gets a ready-to-code dev environment when they need one. Please refer to the [docs](/docs/configure) for details.

## Prebuilds

Gitpod’s [prebuilt workspaces](/docs/prebuilds) are key to providing ephemeral, ready-to-code dev environments for your branches and projects. You can configure Gitpod to run your project's build asynchronously every time someone pushes new commits or branches to your repository. So when a developer wants to start coding, she can, because everything is already prepared.

Enabling prebuilds on your GitLab project is done by configuring a Webhook. But don't fear, you don't have to do that manually, just run a prebuild on your project and it will be configured automatically. To do that, use the prefix `https://gitpod.io/#prebuild/`, as in

> **https://gitpod.io/#prebuild/**`https://gitlab.com/<myuser>/<myrepo>`

## We Need Your Feedback

All important features in Gitpod go through a beta phase, so you get the chance to try it early and participate in further development of the feature. So, please [let us know](https://github.com/gitpod-io/gitpod/issues) with anything that bugs you or any ideas you have that could make your daily life with GitLab and Gitpod more seamless. <span aria-hidden="true">❤️</span>

## I run GitLab Self-Managed!

If you want to use Gitpod with your self-managed instance of GitLab, you'll need to wait a bit longer for Gitpod Enterprise (or [apply for our private beta](https://www.gitpod.io/contact)).

Gitpod Enterprise will be released soon and allows to run Gitpod either self-managed or managed by us. Gitpod Enterprise runs on Google Cloud or any vanilla Kubernetes installation and can be configured to connect with any GitLab or GitHub installation.
