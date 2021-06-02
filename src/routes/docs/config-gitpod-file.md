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

Please refer to the [`.gitpod.yml` refernce](/docs/references/gitpod-yml) for a list of all available configuration options and their meaning.

## How to provide the .gitpod.yml config file

There are two ways to provide the `.gitpod.yml` configuration file:

### 1. Checked-in Gitpod Config File

The simplest and recommended option is to check in a `.gitpod.yml` file into the root of your repository. This way you can
version your workspace configuration together with your code. If, for example, you need to go back to
an old branch that required a different configuration, Gitpod will start with the correct configuration, since that
bit of configuration is part of your codebase.

### 2. [definitely-gp](https://github.com/gitpod-io/definitely-gp) Repository

Sometimes you can't check in a `.gitpod.yml` file, for instance because you do not have sufficient
access rights. However, you can still provide a `.gitpod.yml` file through the central <a href="https://github.com/gitpod-io/definitely-gp" target="_blank">definitely-gp</a> repository. Note that it contains
`.gitpod.yml` files for public GitHub repositories only. To add your `.gitpod.yml` file to `definitely-gp`,
simply raise a PR.

## Generate Your Gitpod Config File

The quickest way to create a `.gitpod.yml` file is with the `gp` CLI. In the terminal of a Gitpod workspace, type:

```sh
gp init
```

This generates example content you can adjust to meet your needs.

Alternatively, you can use the interactive mode with `gp init -i`. It will ask you about the different configuration options, generate the `.gitpod.yml` file and open it in an editor tab so you can review and extend as neccesary.

Gitpod provides auto-complete, hover info and validation for the `.gitpod.yml` file so you get instant feedback and can rest assure your configuration is valid.
