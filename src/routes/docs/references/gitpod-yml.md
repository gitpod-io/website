---
section: references
title: .gitpod.yml Reference
---

<script context="module">
  export const prerender = true;
</script>

# .gitpod.yml Reference

The `.gitpod.yml` file at the root of your project is where you tell Gitpod how to prepare & build your project, start development servers and configure continuous [prebuilds](/docs/prebuilds) for GitHub.

Below is a full reference of all available properties. To see the underlying schema, please refer to [`gitpod-io/gitpod`](https://github.com/gitpod-io/gitpod/blob/main/components/gitpod-protocol/data/gitpod-schema.json) in the [gitpod-io/gitpod](https://github.com/gitpod-io/gitpod) repository.

- [`checkoutLocation`](#checkoutlocation)
- [`gitConfig`](#gitconfig)
- [`github`](#github)
  - [`prebuilds.addBadge`](#prebuildsaddbadge)
  - [`prebuilds.addCheck`](#prebuildsaddcheck)
  - [`prebuilds.addComment`](#prebuildsaddcomment)
  - [`prebuilds.addLabel`](#prebuildsaddlabel)
  - [`prebuilds.branches`](#prebuildsbranches)
  - [`prebuilds.master`](#prebuildsmaster)
  - [`prebuilds.pullRequests`](#prebuildspullrequests)
  - [`prebuilds.pullRequestsFromForks`](#prebuildspullrequestsfromforks)
- [`image`](#image)
  - [`image.file`](#imagefile)
  - [`image.context`](#imagecontext)
- [`ports`](#ports)
  - [`ports[n].onOpen`](#portsnonopen)
  - [`ports[n].port`](#portsnport)
  - [`ports[n].visibility`](#portsnvisibility)
- [`tasks`](#tasks)
  - [`tasks[n].before`](#tasksnbefore)
  - [`tasks[n].command`](#tasksncommand)
  - [`tasks[n].env`](#tasksnenv)
  - [`tasks[n].init`](#tasksninit)
  - [`tasks[n].name`](#tasksnname)
  - [`tasks[n].openIn`](#tasksnopenin)
  - [`tasks[n].openMode`](#tasksnopenmode)
  - [`tasks[n].prebuild`](#tasksnprebuild)
- [`vscode`](#vscode)
  - [`vscode.extensions`](#vscodeextensions)
- [`workspaceLocation`](#workspacelocation)

## `checkoutLocation`

Define where Gitpod checks out the project's code, relative to `/workspace`.

In most cases, this is not needed. If you work on an older Go project, please see [Checkout and Workspace Location](/docs/checkout-location) for more details.

| Type     | Default      |
| -------- | ------------ |
| `string` | `/workspace` |

**Example**

```yaml
checkoutLocation: "go/src/github.com/demo-apps/go-gin-app"
```

## `gitConfig`

Define a workspace's git configuration as key-value pairs.

Please refer to https://git-scm.com/docs/git-config#_values for a list of accepted values.

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

**Example**

```yaml
gitConfig:
  alias.st: status
  core.autocrlf: input
```

## `github`

Configure the [GitHub Gitpod](https://github.com/apps/gitpod-io) app. At this time, the following configuration is used to configure [continuous prebuilds](/docs/prebuilds) for GitHub repositories.

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

**Example**

```yaml
github:
  prebuilds:
    master: true
    branches: true
    pullRequests: true
    pullRequestsFromForks: true
    addCheck: false
    addComment: false
    addBadge: true
```

### `prebuilds.addBadge`

Gitpod can modify the description of a pull request to add an “Open in Gitpod” button. This approach produces fewer GitHub notifications than [adding a comment](#prebuildsaddcomment), but can also create a concurrent editing conflict when the bot and a user try to edit the description of a pull request at the same time.

![An Open in Gitpod badge in a PR description](../../../images/docs/beta/references/gitpod-yml/references-gitpod-yml-github-badge.png)

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

### `prebuilds.addCheck`

Configure whether Gitpod registers itself as a status check to pull requests - much like a continuous integration system would do. To learn more about status checks, please see the GitHub documentation [about status checks](https://docs.github.com/en/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

| Type      | Default |
| --------- | ------- |
| `boolean` | `true`  |

### `prebuilds.addComment`

Gitpod can add a comment with an “Open in Gitpod” button to your pull requests. Alternatively, you could [add a badge](#prebuildsaddbadge) to the pull request's description.

![An Open in Gitpod badge in a PR description](../../../images/docs/beta/references/gitpod-yml/references-gitpod-yml-github-comment.png)

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

### `prebuilds.addLabel`

Deprecated.

### `prebuilds.branches`

Define whether Gitpod creates prebuilds for all branches.

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

### `prebuilds.master`

Define whether Gitpod creates prebuilds for the default branch.

| Type      | Default |
| --------- | ------- |
| `boolean` | `true`  |

### `prebuilds.pullRequests`

Define whether Gitpod creates prebuilds for pull requests from the original repository.

| Type      | Default |
| --------- | ------- |
| `boolean` | `true`  |

### `prebuilds.pullRequestsFromForks`

Define whether Gitpod creates prebuilds for pull requests from forks.

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

## `image`

Define a custom Docker image to be used for workspaces. To learn more, please review [Custom Docker Image](/docs/config-docker).

Public images are hosted on [Docker Hub](https://hub.docker.com/u/gitpod/) and can be referenced by their name, e.g. `ubuntu:latest`.

To see a list of Gitpod-provided images, please see [gitpod-io/workspace-images](https://github.com/gitpod-io/workspace-images).

| Type                 | Default                 |
| -------------------- | ----------------------- |
| `object` or `string` | `gitpod/workspace-full` |

**Examples**

_With a public image_

```yaml
image: ubuntu:latest
```

_With a custom image_

```yaml
image:
  file: .gitpod.Dockerfile
```

_With an optional context_

```yaml
image:
  file: .gitpod.Dockerfile
  context: ./docker-content
```

### `image.file`

To define a custom Docker image, you can use the following configuration:

For a list of examples, please see https://github.com/gitpod-io/workspace-images.

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

### `image.context`

Optionally, you can set the `image.context`. This is useful when you want to copy files into the Docker image. The [Docker docs](https://docs.docker.com/engine/reference/builder/#usage) describe this in more detail.

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

## `ports`

Configure how Gitpod treats various ports your application may listen on. You can learn more about this in the [Exposing Ports](/docs/config-ports) documentation.

| Type    | Default   |
| ------- | --------- |
| `array` | `<empty>` |

**Example**

```yaml
ports:
  - port: 3000
    onOpen: open-preview
  - port: 10000
    onOpen: ignore
```

### `ports[n].onOpen`

Define what to do when Gitpod detects a given port is being listened on.

| Type     | Default   | Values                                                                  |
| -------- | --------- | ----------------------------------------------------------------------- |
| `string` | `<empty>` | `open-browser`,<br><br>`open-preview`,<br><br>`notify`,<br><br>`ignore` |

### `ports[n].port`

Define a single port or a range of ports, e.g. `3000-3100`.

| Type                 | Default   |
| -------------------- | --------- |
| `number` or `string` | `<empty>` |

### `ports[n].visibility`

Define whether to expose the port publicly or keep it private.

A public port allows you to share a URL for a given port with team members, for example if you want to get their feedback on a new feature you develop.

| Type     | Default   | Values                     |
| -------- | --------- | -------------------------- |
| `string` | `private` | `private`,<br><br>`public` |

## `tasks`

Define how Gitpod prepares & builds your project and how it can start the project's development server(s). To learn more, please visit [Start Tasks](/docs/config-start-tasks). Each array element opens in its own terminal.

| Type    | Default   |
| ------- | --------- |
| `array` | `<empty>` |

**Example**

```yaml
tasks:
  - before: sh ./scripts/setup.sh
    init: npm install
    command: npm run dev
  - name: Database
    init: sh ./scripts/seed-database.sh
    command: npm start-db
    env:
      DB_HOST: localhost:3306
      DB_USER: readOnlyUser
```

### `tasks[n].before`

A shell command to run before `init` and the main `command`. This command is executed on every start and is expected to terminate. If it fails, the following commands will not be executed.

Learn more about [Start Tasks](/docs/config-start-tasks) in the docs.

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

### `tasks[n].command`

The main shell command to run after `before` and `init`. This command is executed last on every start and doesn't have to terminate.

Learn more about [Start Tasks](/docs/config-start-tasks) in the docs.

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

### `tasks[n].env`

Define environment variables that will be available in the workspace.

Learn more about [Environment Variables](/docs/environment-variables) in the docs.

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

### `tasks[n].init`

A shell command to run between `before` and the main `command`.

This task is executed only once. When you start a workspace that does not have a [prebuild](/docs/prebuilds), `init` is executed at workspace start. When you start a workspace that has a prebuild, `init` executes as part of the prebuild, but does NOT execute again at workspace start.

This task is expected to terminate. If it fails, the `command` property will not be executed.

Learn more about [Start Tasks](/docs/config-start-tasks) in the docs.

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

### `tasks[n].name`

A name for the task, also shown on the terminal tab.

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

### `tasks[n].openIn`

Deprecated. This does not have an impact in VS Code.

### `tasks[n].openMode`

Configure how the terminal should be opened relative to the previous task.

| Type     | Default   | Values                                                                      |
| -------- | --------- | --------------------------------------------------------------------------- |
| `string` | `<empty>` | `tab-after`,<br><br>`tab-before`,<br><br>`split-right`,<br><br>`split-left` |

Note: `split-top` and `split-bottom` are deprecated values.

### `tasks[n].prebuild`

Deprecated. Please use the [`init`](#tasksninit) task instead.

## `vscode`

Configure the VS Code editor.

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

### `vscode.extensions`

Define a list of extensions which should be installed for users of this workspace. The identifier of an extension is always `${publisher}.${name}`. For example: 'vscode.vim'.

Please note, Gitpod uses the [Open VSX registry](https://open-vsx.org/) to find extensions. If you cannot find an extension you know exists in your local VS Code, please get in touch with us or open a new PR in the [open-vsx/publish-extensions](https://github.com/open-vsx/publish-extensions) repository to add the extension to Open VSX 🙏.

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

**Example**

```yaml
vscode:
  extensions:
    - svelte.svelte-vscode
    - bradlc.vscode-tailwindcss
```

## `workspaceLocation`

Define which path Gitpod considers the project's workspace directory, relative to `/workspace`.

In most cases, this is not needed. If you work on an older Go project, please see [Checkout and Workspace Location](/docs/checkout-location) for more details.

| Type     | Default      |
| -------- | ------------ |
| `string` | `/workspace` |

**Example**

```yaml
workspaceLocation: "."
```
