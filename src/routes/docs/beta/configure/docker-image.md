---
section: configure
title: Custom Docker Image
---

<script context="module">
  export const prerender = true;
</script>

# Custom Docker Image

By default, Gitpod uses a [standard Docker image](https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile) as the foundation for workspaces.

If this image does not include the tools you need for your project, you can provide a public Docker image or your own [Dockerfile](#using-a-dockerfile). This provides you with the flexibility to install the tools & libraries required for your project.

## Configure a public Docker image

You can define a public Docker image in your `.gitpod.yml` file with the following configuration:

```yaml
image: node:alpine
```

The official Gitpod Docker images are hosted on <a href="https://hub.docker.com/u/gitpod/" target="_blank">Docker Hub</a>.

## Configure a custom Dockerfile

This option provides you with the most flexibility. Start by adding the following configuration in your `.gitpod.yml` file:

```yaml
image:
  file: .gitpod.Dockerfile
```

Next, create a `.gitpod.Dockerfile` file at the root of your project. The syntax is the regular `Dockerfile` syntax as <a href="https://docs.docker.com/engine/reference/builder/" target="_blank">documented on docs.docker.com</a>.

> Note: Currently, Gitpod only supports Debian/Ubuntu or Alpine based images.

A good starting point for creating a custom `.gitpod.Dockerfile` is the
<a href="https://hub.docker.com/r/gitpod/workspace-full/" target="_blank">gitpod/workspace-full</a> image. It already contains all the tools necessary to work with all languages Gitpod supports.
You can find the source code in <a href="https://github.com/gitpod-io/workspace-images/" target="_blank">this GitHub repository</a>.

```Dockerfile
FROM gitpod/workspace-full

# Install custom tools, runtime, etc.
RUN brew install fzf
```

When you launch a Gitpod workspace, the local console will use the `gitpod` user, so all local settings, config file, etc. should apply to `/home/gitpod` or be run using `USER gitpod` (we no longer recommend using `USER root`).

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

Once committed and pushed, Gitpod will automatically build this Dockerfile when (or [before](/docs/beta/configure/prebuilds)) new workspaces are created.

See also [Gero's blog post](/blog/docker-in-gitpod) running through an example.

## Trying out changes to your Dockerfile

### In the existing workspace

Since the `.gitpod.Dockerfile` is a regular Dockerfile, you can build the image in your Gitpod workspace. This helps you catch syntax or build errors before you commit your changes.

To test your custom `.gitpod.Dockerfile`, run the following commands from the project root:

1. `docker build -f .gitpod.Dockerfile -t gitpod-dockerfile-test .`
1. `docker run -it gitpod-dockerfile-test bash`

This builds a `gitpod-dockerfile-test` image and starts a new container based on that image. At this point, you are connected to the Docker container that will be available as the foundation for your Gitpod workspace. You can inspect the container and make sure the necessary tools & libraries are installed.

To exit the container and return back to your Gitpod workspace, type `exit`.

### As a new workspace

Once you validated the `.gitpod.Dockerfile` with the approach described in the previous chapter, it is time to start a new Gitpod workspace based on that custom image.

The easiest way to try out your changes is to push them to a branch and then start another workspace on that branch, keeping the first workspace open as your main editing workspace.

**Caution**: The above is important in case your Dockerfile has bugs and prevents Gitpod from starting a workspace.

On start of the second workspace, the docker build will start and show the output. If your Dockerfile has issues and the build fails or the resulting workspace does not look like you expected, you can force push changes to your config using your first, still running workspace and simply start a fresh workspace again to try them out.

We are working on allowing docker builds directly from within workspaces, but until then this approach has been proven to be the most productive.
