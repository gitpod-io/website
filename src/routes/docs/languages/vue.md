---
section: references
title: Vue.js in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Vue.js in Gitpod

To work with Vue.js in Gitpod, you will need to properly configure your repository. Here is how to do it.

## Example Repositories

Here are a few Vue.js example projects that are already automated with Gitpod:

<div class="table-container">

| Repository                                            | Description                                                                     | Try it                                                                                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [vuepress](https://github.com/vuejs/vuepress)         | Minimalistic Vue-powered static site generator                                  | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/vuejs/vuepress)        |
| [postwoman](https://github.com/liyasthomas/postwoman) | A free, fast and beautiful API request builder (web alternative to Postman)     | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/liyasthomas/postwoman) |
| [nuxtjs.org](https://github.com/nuxt/nuxtjs.org)      | Nuxt.js Documentation Website (Universal Vue.js Application built with Nuxt.js) | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/nuxt/nuxtjs.org)       |

</div>

## Vue-CLI

To install the Vue.js command-line interface in your current workspace run the following

```bash
npm i -g vue-cli
```

To install globally across all workspaces add the following to your [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker)

```dockerfile
RUN npm i -g vue-cli
```

> Please note: If you don't already have one please run [`gp init`](https://www.gitpod.io/docs/command-line-interface/#init) which should generate two files [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file) and [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker)

## VSCode Extensions

### Vetur

![Vetur extension](.../../../static/images/docs/Vetur.png)

Vetur provides syntax highlighting, snippets, Emmet support, linting/error checking, auto-formatting, and auto-complete for Vue files.

To add this extension to your repository add the following to your [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file)

```yaml
vscode:
  extensions:
    - octref.vetur@0.23.0:TEzauMObB6f3i2JqlvrOpA==
```

For projects that already have a [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file), you can skip the first part and just add the provided snippet.
