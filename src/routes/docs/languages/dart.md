---
section: references
title: Dart in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Dart in Gitpod

## Example Repositories

Here are a few Dart example projects that are already automated with Gitpod:

<div class="table-container">

| Repository                                                                  | Description                                     | Try it                                                                                                                                  |
| --------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [flutter_stock_example](https://github.com/gitpod-io/flutter_stock_example) | The Flutter stock example configured for Gitpod | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/flutter_stock_example) |

</div>

## Installing Dart

To install the Dart SDK in Gitpod one must add the following to your [.gitpod.Dockerfile](/docs/config-docker)

```dockerfile
RUN brew tap dart-lang/dart && brew install dart
```

## VSCode Extensions

### Dart

This Extension adds cool syntax highlighting

![Syntax highlighting example](.../../../static/images/docs/AfterSyntaxHighlighting.png)

It adds [Intellisense](https://code.visualstudio.com/docs/editor/intellisense) support for autocompletion

![Dart intellisense example](.../../../static/images/docs/DartIntellisenseExample.png)

## Try it

Here is a hello world example of a [Gitpodified](https://www.gitpod.io/blog/gitpodify/) project running in the browser, try it!

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/Gitpod-Dart)
