---
section: configure
title: .gitpod.yml
---

<script context="module">
  export const prerender = true;
</script>

# .gitpod.yml

A workspace gets configured through a `.gitpod.yml` file, located at the root of your project, written in YAML syntax. Here's an example:

```yaml
# Commands to start on workspace startup
tasks:
  - init: yarn install
    command: yarn build
# Ports to expose on workspace startup
ports:
  - port: 8000
    onOpen: open-preview
```

To see a full reference of all available properties, please refer to the [`.gitpod.yml reference`](/docs/references/gitpod-yml) page.

## How to provide the .gitpod.yml config file

In order to tell Gitpod how to prepare a dev environment for your project, you check in a `.gitpod.yml` file into the root of your repository. This way you can
version your workspace configuration together with your code. If, for example, you need to go back to
an old branch that required a different configuration, Gitpod will start with the correct configuration, since that
bit of configuration is part of your codebase.

## Generate Your Gitpod Config File

The quickest way to create a `.gitpod.yml` file is with the `gp` CLI. In the terminal of a Gitpod workspace, type:

```sh
gp init
```

This generates example content you can adjust to meet your needs.

Alternatively, you can use the interactive mode with `gp init -i`. It will ask you about the different configuration options, generate the `.gitpod.yml` file and open it in an editor tab so you can review and extend as neccesary.

Gitpod provides auto-complete, hover info and validation for the `.gitpod.yml` file so you get instant feedback and can rest assure your configuration is valid.
