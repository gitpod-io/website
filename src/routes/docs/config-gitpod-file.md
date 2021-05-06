---
section: configuration
title: .gitpod.yml
---

<script context="module">
  export const prerender = true;
</script>

# .gitpod.yml

- [Checked-in Gitpod Config File](#checked-in-gitpod-config-file)
- [definitely-gp Repository](#definitely-gp-repository)
- [Inferred Gitpod Config File](#inferred-gitpod-config-file)

A workspace gets configured through a `.gitpod.yml` file written in YAML syntax. Here's an example:

```yaml
# The Docker image to run your workspace in. Defaults to gitpod/workspace-full
image: <your-workspace-image>
# Command to start on workspace startup (optional)
tasks:
  - init: yarn install
    command: yarn build
# Ports to expose on workspace startup (optional)
ports:
  - port: 8000
    onOpen: open-preview
```

There are three ways you can provide this file:

## Checked-in Gitpod Config File

The simplest and preferred option is to check in a `.gitpod.yml` file into the root of your repository. This way you can
version your workspace configuration together with your code. If, for example, you need to go back to
an old branch that required a different Docker image, it will start with the correct image, since that
bit of configuration is part of your codebase.

## [definitely-gp](https://github.com/gitpod-io/definitely-gp) Repository

Sometimes you can't check in a `.gitpod.yml` file, for instance because you do not have sufficient
access rights. However, you can still provide a `.gitpod.yml` file through the central
<a href="https://github.com/gitpod-io/definitely-gp" target="_blank">definitely-gp</a> repository. Note that it contains
`.gitpod.yml` files for public GitHub repositories only. To add your `.gitpod.yml` file to `definitely-gp`,
simply raise a PR.

## Inferred Gitpod Config File

If the first two locations do not have a `.gitpod.yml` file for your project, Gitpod will compute one by
analyzing your project and using good common defaults.
<br><br/>

<h2 class="h1">Generating Your Gitpod Config File</h2>

Gitpod comes with a CLI that walks you through the initial creation of a `.gitpod.yml` file.
Open a terminal and type

```sh
gp init
```

It will ask you about the different configuration options and generate and open an initial `.gitpod.yml` file for you.
You can now edit directly in the file supported by validation, completion and hovers providing information about the various options.
