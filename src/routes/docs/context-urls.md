---
section: develop
title: Gitpod Contexts
---

<script context="module">
  export const prerender = true;
</script>

# Contexts

Gitpod understands a variety of common situations you experience as part of your development workflow and automates repetitive tasks, giving you time to focus on more impactful work.

The context is determined by a Gitpod URL's [_anchor_](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL), i.e. the link provided at the end of the `#` character in the `gitpod.io/#` URL.

Regardless of the context, Gitpod performs the tasks configured in `.gitpod.yml` if this configuration file is available for a given repository.

Gitpod is aware of the following contexts:

- [Repository Context](#repository-context)
- [Branch and Commit Contexts](#branch-and-commit-contexts)
- [Issue Context](#issue-context)
- [Pull/Merge Request Context](#pullmerge-request-context)

## Repository Context

To start a new workspace, you prefix your repository URL with `gitpod.io/#`. E.g. [gitpod.io/#https://github.com/gitpod-io/website](https://gitpod.io/#https://github.com/gitpod-io/website).

This is the most basic context and Gitpod simply checks out the default branch and opens the Welcome screen once the workspace is ready.

An example URL for the repository context is:

```
gitpod.io/#https://github.com/gitpod-io/website
```

## Branch and Commit Contexts

The branch and commit contexts are very similar to the repository context described above. When you open a new workspace for a given branch or commit, Gitpod automatically checks out that branch or commit, allowing you to browse the repository on that branch or at the time of the given commit.

An example URL for the branch context is:

```
gitpod.io/#https://github.com/gitpod-io/website/tree/my-branch
```

An example URL for the commit SHA context is:

```
gitpod.io/#https://github.com/gitpod-io/website/commit/f5d4eb4cd3859a760ac613598e840b94e8094649
```

## Issue Context

The fastest way to work on an issue is to start a Gitpod workspace with an issue context. Gitpod automatically creates a local branch based on the following pattern:

```
<your-username>/<issue-title>-<issue-number>
```

This branch is based on the most recent commit in your project's default branch.

You can commit your changes with the `git` command line interface or use the _Source Control_ panel on the left side of the editor. From there, you can also create a new pull/merge request without leaving Gitpod.

An example URL for the issue context is:

```
gitpod.io/#https://github.com/gitpod-io/website/issues/470
```

## Pull/Merge Request Context

When Gitpod recognizes a pull or merge request context, it knows you most likely have one of two intentions:

- As a reviewer, provide PR/MR feedback
- As an author, process feedback and update the code

In either case, Gitpod automatically performs the following tasks for you:

1. Starts a workspace with the correct branch checked out
1. Opens the PR/MR review panel where you can see and contribute to existing conversations
1. Displays a list of files changed as part of that PR/MR
1. Enables you to leave comments right within individual files (yep, no need to switch between the code and the PR/MR in your browser)

In addition, Gitpod lets you merge a PR/MR. Once merged, you close the browser tab and move on to your next task - in a new, ephemeral development environment 🎉.

An example URL for the pull/merge request context is:

```
gitpod.io/#https://github.com/gitpod-io/website/pull/494
```
