---
section: integrations
title: Bitbucket Integration
---

<script context="module">
  export const prerender = true;
</script>

# Bitbucket Integration

Gitpod comes with a [Bitbucket](https://bitbucket.org/) integration that allows you to start Gitpod workspaces from any Bitbucket project.

## Starting Workspaces

To start a workspace from a Bitbucket project, prefix the Bitbucket URL with `gitpod.io/#` as described in [Getting Started](/docs/getting-started).

## Enabling Prebuilds

To enable [prebuilt workspaces](/docs/prebuilds) for your Bitbucket project you need to grant `install webhooks` in Gitpod's [Access Control](https://gitpod.io/access-control/) page. This allows Gitpod to install a webhook. The webhook creates a new prebuild for every push event.

The webhook will be automatically installed when you trigger the first prebuild manually. For this, prefix your Bitbucket project URL with `gitpod.io/#prebuild/` as described in the [prebuilds page](/docs/prebuilds#on-gitlab-and-bitbucket).
