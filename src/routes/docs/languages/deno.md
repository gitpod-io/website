---
section: references
title: Deno in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Deno in Gitpod

It's easy to set up Deno in Gitpod.

## Setting up the Dockerfile

Add a Dockerfile to your project as [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker):

```dockerfile
FROM gitpod/workspace-full

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN /home/gitpod/.deno/bin/deno completions bash > /home/gitpod/.bashrc.d/90-deno && \
    echo 'export DENO_INSTALL="/home/gitpod/.deno"' >> /home/gitpod/.bashrc.d/90-deno && \
    echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> /home/gitpod/.bashrc.d/90-deno
```

And configure this Dockerfile in your [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file):

```YAML
image:
  file: .gitpod.Dockerfile
```

It'll run the latest Deno version and install the Bash completions.

## Example Repositories

Here are a few Deno example projects that are already automated with Gitpod:

<div class="table-container">

| Repository                                                         | Description                                     | Try it                                                                                                                            |
| ------------------------------------------------------------------ | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [fake-log-generator](https://github.com/fknipp/fake-log-generator) | Generator for fake log files as CLI application | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/fknipp/fake-log-generator) |

</div>

[Edit this page](https://gitpod.io/#https://github.com/gitpod-io/website/blob/main/src/routes/docs/languages/deno.md) to add another examples.

## VSCode Extensions

Here is a useful extensions that you'll likely want to install in your Deno project.

### [Deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

To add this extension to your repository, simply open Gitpod's Extensions panel (see left vertical menu in the IDE), then search for "Deno" and install it "for this project".

Next, simply commit the [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file) configuration file that was automatically created (or updated) by Gitpod.
