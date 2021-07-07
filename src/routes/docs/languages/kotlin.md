---
section: references
title: Kotlin in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Kotlin in Gitpod

To work with Kotlin in Gitpod, you will need to properly configure your repository. Here is how to do it.

## Installing Kotlin

To install Kotlin in Gitpod add the following to your [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker):

```dockerfile
RUN brew install kotlin
```

A full example could look like this:

```dockerfile
FROM gitpod/workspace-full

USER gitpod
RUN brew install kotlin
```

## VS Code Extensions

### Kotlin Language

This extension provides Kotlin language support for Gitpod and other IDEs, with:

- Syntax highlighting
- Code snippets
- Region code folding

To get it, open Gitpod's **Extensions** panel (left vertical menu), then search for "Kotlin" and install the extension by Mathias Fröhlich for your project. Next, commit the [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file) file that was automatically created (or updated) by Gitpod.

### Code Runner

While this extension isn't Kotlin-specific, but allows to run code snippets in many different languages, including Kotlin.

To get it, open Gitpod's Extensions panel, then search for "Code Runner" and install it for your project.

## Try it

Please use the button below to see a gitpodified [Kotlin example project](https://github.com/gitpod-io/Gitpod-Kotlin) in Gitpod:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/Gitpod-Kotlin)
