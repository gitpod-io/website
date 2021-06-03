---
section: develop
title: Collaboration & Sharing
---

<script context="module">
  export const prerender = true;
</script>

# Collaboration & Sharing of Workspaces

There are two ways to share your workspaces:

- [Sharing Snapshots](#sharing-snapshots)
- [Sharing Running Workspaces](#sharing-running-workspaces)

## Sharing Snapshots

You can take snapshot URLs of your workspaces at any time and share them with others. Anyone clicking on such a snapshot link will get a complete clone of your workspace, including the

- state of the workspace
- the VS Code layout

Workspaces created from snapshots are treated as restarts, so you can configure them to launch differently than if you had created a fresh workspace from git. Also, this is useful if you want to create
easy-to-consume reproducible workspace states, for issues, stackoverflow answers, trainings, presentations, etc.

Unlike sharing running workspaces, snapshotted workspaces are full copies. This means developers can do whatever they like with the content. And of course, no access to any of your credentials is shared.

Read more about this feature [in this blog post](/blog/workspace-snapshots).

### How To Take a Snapshot URL

Creating a snapshot is simple. You can find the action behind the hamburger menu on the top left.

Once you execute it, the snapshot is taken and the URL is shown in a dialog.

## Sharing Running Workspaces

Sharing running workspaces makes it possible to quickly look at a workspace together with a (remote) colleague. It is similar to collaborating on Google Docs, in that you can see who is online and look at the same code and processes.

To share your workspace, navigate to the workspaces page at https://gitpod.io/workspaces. From there:

1. Move your mouse over the workspace you want to share (change the filter to All if you don't see your workspace).
1. Click the three dots menu to the right of the highlighted workspace.
1. Click **Share**

This marks your workspace as shared. When you open it, you can copy & share its URL.

> **Security note:**
>
> Beware, anybody with this URL and a Gitpod account will be able to access the workspace as long as
> it is shared and running.
>
> Every action involving git in a shared workspace happens on behalf of the workspace owner's account without further authorization.
> It is highly recommended to give workspace URLs only to trusted users and unshare workspaces as soon as sharing them is no longer necessary.
>
> **A running Gitpod workspace really is your personal machine.**
