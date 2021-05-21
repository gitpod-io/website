---
section: configuration
title: Docker Configuration
---

<script context="module">
  export const prerender = true;
</script>

# Docker Configuration

If the [standard Docker image](https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile) provided by Gitpod does not include the tools you need for your project, you can provide a custom Docker image or [Dockerfile](#using-a-dockerfile).

## Configure a Custom Docker Image

There are two ways to configure a custom Docker image in your `.gitpod.yml` file:

- Reference a publicly available image:

  ```yaml
  image: node:alpine
  ```

  The official Gitpod Docker images are hosted on <a href="https://hub.docker.com/u/gitpod/" target="_blank">Docker Hub</a>.

- Reference a Dockerfile next to your `.gitpod.yml` file:

  ```yaml
  image:
    file: .gitpod.Dockerfile
  ```

  Once committed and pushed, Gitpod will automatically build this Dockerfile when (or <a href="/docs/prebuilds" target="_blank">before</a>) new workspaces are created.

## Using a Dockerfile

> Note: Currently, Gitpod only supports Debian/Ubuntu or Alpine based images.

A good starting point for creating a custom `.gitpod.Dockerfile` is the
<a href="https://hub.docker.com/r/gitpod/workspace-full/" target="_blank">gitpod/workspace-full</a> image. It already contains all the tools necessary to work with all languages Gitpod supports.
You can find the source code in <a href="https://github.com/gitpod-io/workspace-images/" target="_blank">this GitHub repository</a>.

```Dockerfile
FROM gitpod/workspace-full

# Install custom tools, runtime, etc.
RUN brew install fzf
```

When you are launching the Gitpod IDE, the local console will use the `gitpod` user, so all local settings, config file, etc. should apply to `/home/gitpod` or be run using `USER gitpod` (we no longer recommend using `USER root`).

You can however use `sudo` in your Dockerfile. The following example shows a typical `.gitpod.Dockerfile` inheriting from `gitpod/workspace-full`:

```Dockerfile
FROM gitpod/workspace-full

# Install custom tools, runtime, etc.
RUN sudo apt-get update \
    && sudo apt-get install -y \
        ... \
    && sudo rm -rf /var/lib/apt/lists/*

# Apply user-specific settings
ENV ...
```

See also [Gero's blog post](/blog/docker-in-gitpod) running through an example.

## Trying out changes to your Dockerfile

The easiest way to try out your changes is to push them to a branch and then start another workspace on that branch, keeping the first workspace open as your main editing workspace.

On start of the second workspace the docker build will start and show the output. If your Dockerfile has issues and the build fails or the resulting workspace does not look like you expected,
you can force push changes to your config using your first, still running workspace and simply start a fresh workspace again to try them out.

We are working on allowing dockerbuilds directly from within workspaces, but until then this approach has been proven to be the most productive.
