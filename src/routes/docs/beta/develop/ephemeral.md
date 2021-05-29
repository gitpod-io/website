---
section: develop
title: One workspace per task
---

<script context="module">
  export const prerender = true;
</script>

# One workspace per task

On any given day, you may be involved in tasks such as the following:

- Implement a new feature
- Fix a bug
- Review a pull/merge request
- Pair-program with a team member
- Browse an open source project's source code

For each of these tasks, you start a clean, ephemeral Gitpod workspace. You can even start **multiple workspaces in parallel**. For example, while you're working on a feature, you can start a second workspace to review a production hotfix. When the review is complete, you close the browser tab of that workspace and continue to work on your feature. This works for any GitLab, GitHub or Bitbucket project.

You can learn more about the [Life of a workspace](/docs/beta/develop/life-of-a-workspace).

## Gitpod vs. local development

A Gitpod workspace is similar to your local development environment, except for two key differentiators:

1. It is configured as code
1. It is ephemeral and only lives for as long as you work on a task

### Configuration vs. manual setup

Your project's `.gitpod.yml` and optional `.gitpod.Dockerfile` files control what tools will be available in your Gitpod workspace. Both files are version-controlled and let you monitor changes to the development environment over time. There is no longer a need to `@channel` in your team's communication software to tell everyone to upgrade their version of Node.js, only to find out that some people were on vacation and didn't see the message.

### Ephemeral vs. long-lived

Thanks to the fact that Gitpod workspaces are configured as code, you can start and stop them as frequently as you want. You know that each workspace has the tools it needs and even more importantly, has the latest code from your default branch checked out! You no longer have to pull the latest default branch a few times per day because each time you start a new workspace, it has the latest code already available.
