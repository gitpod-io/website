---
section: develop
title: Life of a workspace
---

<script context="module">
  export const prerender = true;
</script>

# Life of a Workspace

- [Timeouts](#timeouts)
- [Garbage Collection](#garbage-collection)
- [Changes Are Saved](#changes-are-saved)

Gitpod makes creating fresh workspaces as easy as [clicking a button on a repository page](/docs/browser-extension).
Gitpod's continuous dev environments encourages you to create fresh workspaces rather than restarting older ones.
This ensures that you are starting from a clean slate with proper configuration.

## Timeouts

Any running workspace will automatically stop after some time of inactivity. Normally, this timeout is 30 minutes but is extended to **60 minutes if you have the _Unleashed_ plan**.
Furthermore, _Unleashed_ users can manually boost the timeout of a workspace to 180 minutes. This comes in handy, e.g. in case you want to go out for a longer lunch or meeting and don't like restarting your workspace when coming back.

The timeout will always be reset to the full 30 minutes (or other applicable timeout depending on your subscription) by any activity&thinsp;—&thinsp;mouse move or keystroke&thinsp;—&thinsp;in the editor.
If the editor is still open but the corresponding workspace has stopped, a dialog will pop up that lets you start the workspace
again. Alternatively, you can just reload the browser or go to your [workspaces](https://gitpod.io/workspaces) and restart the workspace.

For convenience, closing the browser window/tab containing the workspace reduces the timeout to 3 minutes.

## Garbage Collection

Old, unused workspaces are automatically deleted. To prevent a workspace from being deleted, you can pin it in your [list of workspaces](https://gitpod.io/workspaces/). Pinned workspaces are kept forever. A message at the top of the workspaces list indicates after how many days unused and unpinned workspaces will get collected (the exact number of days may change in the future). Restarting a workspace resets the day counter for this particular workspace.

## Changes are Saved

Gitpod backs up the state of the `/workspace/` folder between workspace starts, so that
you can revisit them later. _Attention: Files in other locations will not be saved!_
