---
section: develop
title: Collaboration & Sharing
---

<script context="module">
  export const prerender = true;
</script>

# Collaboration & Sharing of Workspaces

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

<h2 class="h1">Theia editor (legacy)</h2>

If you use Theia as your editor (you can check [your default IDE preferences](https://gitpod.io/preferences)), please refer to the following instructions.

Note: VS Code has been the default editor since early April. If you started to use Gitpod after that and have not changed the default editor, please refer to the content at the top of this page.

There are two ways to share your workspaces:

- [Sharing Running Workspaces](#sharing-running-workspaces)
- [Sharing Snapshots](#sharing-snapshots)

`youtube: 9RftoWFzJ2s`

## Sharing Running Workspaces

Sharing running workspaces makes it possible to quickly look at a workspace together with a (remote) colleague.
It is similar to collaborating on Google Docs, in that you can see who is online and look at the same code and processes.

All users in one workspace share the Theia backend and the filesystem. Opened editors, terminals,
and other UI state are currently not shared.

### How To Share and Unshare a Running Workspace

Running workspaces can be shared from within the IDE.
Click on the user's avatar and choose

`Share Running Workspace`.

Provide the URL shown in the dialog to
anyone you want to share your workspace with.

![Share Running Workspace Prompt](../../../static/images/docs/share-running-ws.gif)

> **Security note:**
>
> Beware, anybody with this URL and a Gitpod account will be able to access the workspace as long as
> it is shared and running.
>
> Every action involving git in a shared workspace happens on behalf of the workspace owner's account without further authorization.
> It is highly recommended to give workspace URLs only to trusted users and unshare workspaces as soon as sharing them is no longer necessary.
>
> **A running Gitpod workspace really is your personal machine.**

By unsharing the workspace, the link becomes useless to anybody but the
workspace owner. All users that are currently looking at your workspace will be shown as avatars in
the top right corner of the IDE.

## Sharing Snapshots

You can take snapshot URLs of your workspaces at any time and share them with others.
Anyone clicking on such a snapshot link will get a complete clone of your workspace, including the

- state of the workspace
- the IDE layout

Workspaces created from snapshots are treated as restarts, so you can configure them to launch
differently than if you had created a fresh workspace from git. Also, this is useful if you want to create
easy-to-consume reproducible workspace states, for issues, stackoverflow answers, trainings, etc.

Unlike sharing running workspaces, snapshotted workspaces are full copies. This means users can do whatever
they like with the content. And of course, no access to any of your credentials is shared.

Read more about this feature [here](/blog/workspace-snapshots).

### How To Take a Snapshot URL

Creating a snapshot is simple. You can either use the **command palette** (<kbd>F1</kbd>) or find the action item in
the avatar menu on the top right.

![Share Workspace Snapshot Prompt](../../../static/images/docs/share-snapshot.png)

Once you execute it, the snapshot is taken and the URL is shown in a dialog.
