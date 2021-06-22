---
section: configure
title: Checkout and Workspace Location
---

<script context="module">
  export const prerender = true;
</script>

# Checkout and Workspace Location

Older Go projects without module support need a <a href="https://golang.org/doc/code.html#Organization" target="_blank">specific workspace layout</a>:
the source code of your repository and its dependencies must be in the directories

```sh
src/[repository-provider]/[repository-owner]/[repository-name]
```

in the `$GOPATH`. Using the `.gitpod.yml` file, you can bring about such a workspace layout. Here is
how we do that for the example <a href="https://github.com/gitpod-io/definitely-gp/blob/master/go-gin-app/.gitpod.yml" target="_blank">go-gin-app</a> repository:

```yaml
---
checkoutLocation: "go/src/github.com/demo-apps/go-gin-app"
workspaceLocation: "."
tasks:
  - command: |
      cd /workspace/go/src/github.com/demo-apps/go-gin-app
      go get -v ./...
      go build -o app
      ./app
```

In more detail:

- By default, Gitpod clones the repository into the directory `/workspace`, which becomes the
  root directory for the workspace. With `checkoutLocation` and `workspaceLocation` you can
  change this behavior (the paths are taken relative to `/workspace`).
- Gitpod preconfigures the `$GOPATH` environment variable to include the directory `/workspace/go`.
- With `go get -v ./...` we retrieve the sources of the dependencies from GitHub.
- To build the app, we run `go build -o app`.
- Lastly, we start the application.
