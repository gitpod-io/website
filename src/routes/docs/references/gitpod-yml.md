---
section: references
title: .gitpod.yml Reference
---

<script context="module">
  export const prerender = true;
</script>

# .gitpod.yml Reference

The `.gitpod.yml` file at the root of your project is where you tell Gitpod how to prepare & build your project, start development servers and configure continuous [prebuilds](/docs/prebuilds) for GitHub.

Below is a full reference of all available properties. To see the underlying schema, please refer to [`components/gitpod-protocol/data/gitpod-schema.json`](https://github.com/gitpod-io/gitpod/blob/main/components/gitpod-protocol/data/gitpod-schema.json) in the [gitpod-io/gitpod](https://github.com/gitpod-io/gitpod) repository.

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
  - [`ports[n].onOpen`](#portsn-onopen-)
  - [`ports[n].port`](#portsn-port-)
  - [`ports[n].visibility`](#portsn-visibility-)
- [`tasks`](#tasks)
  - [`tasks[n].before`](#tasksn-before-)
  - [`tasks[n].command`](#tasksn-command-)
  - [`tasks[n].env`](#tasksn-env-)
  - [`tasks[n].init`](#tasksn-init-)
  - [`tasks[n].name`](#tasksn-name-)
  - [`tasks[n].openIn`](#tasksn-openin-)
  - [`tasks[n].openMode`](#tasksn-openmode-)
  - [`tasks[n].prebuild`](#tasksn-prebuild-)
- [`vscode`](#vscode)
  - [`vscode.extensions`](#vscodeextensions)
- [`workspaceLocation`](#workspacelocation)

## `checkoutLocation`

Define where Gitpod checks out the project's code, relative to `/workspace`.

In most cases, this is not needed. If you work on an older Go project, please see [Checkout and Workspace Location](/docs/checkout-location) for more details.

| Type     | Default      |
| -------- | ------------ |
| `string` | `/workspace` |

## `gitConfig`

Define a workspace's git configuration as key-value pairs, such as:

```yaml
gitConfig:
  alias.st: status
  core.autocrlf: input
```

Please refer to https://git-scm.com/docs/git-config#_values for a list of accepted values.

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

## `github`

Configure the [GitHub Gitpod](https://github.com/apps/gitpod-io) app. At this time, the following configuration is used to configure [continuous prebuilds](/docs/prebuilds) for GitHub repositories.

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

### `prebuilds.addBadge`

Gitpod can modify the description of a pull request to add an “Open in Gitpod” button. This approach produces fewer GitHub notifications than [adding a comment](#prebuildsaddcomment), but can also create a concurrent editing conflict when the bot and a user try to edit the description of a pull request at the same time.

| Type     | Default |
| -------- | ------- |
| `string` | `false` |

### `prebuilds.addCheck`

Configure whether Gitpod registers itself as a check to pull requests - much like a continuous integration system would do.

| Type     | Default |
| -------- | ------- |
| `string` | `true`  |

### `prebuilds.addComment`

Gitpod can add a comment with an “Open in Gitpod” button to your pull requests. Alternatively, you could [add a badge](#prebuildsaddbadge) to the pull request's description.

| Type     | Default |
| -------- | ------- |
| `string` | `false` |

### `prebuilds.addLabel`

| Type     | Default |
| -------- | ------- |
| `string` | `false` |

### `prebuilds.branches`

| Type     | Default |
| -------- | ------- |
| `string` | `false` |

### `prebuilds.master`

| Type     | Default |
| -------- | ------- |
| `string` | `true`  |

### `prebuilds.pullRequests`

| Type     | Default |
| -------- | ------- |
| `string` | `true`  |

### `prebuilds.pullRequestsFromForks`

| Type     | Default |
| -------- | ------- |
| `string` | `false` |

## `image`

Define a custom Docker image to be used for workspaces. To learn more, please review [Custom Docker Image](/docs/config-docker).

Public images are hosted on [Docker Hub](https://hub.docker.com/u/gitpod/) and can be referenced by their name, e.g. `ubuntu:latest`.

| Type                 | Default                 |
| -------------------- | ----------------------- |
| `object` or `string` | `gitpod/workspace-full` |

### `image.file`

To define a custom Docker image, you can use the following configuration:

```yaml
image:
  file: .gitpod.Dockerfile
```

For a list of example, please see https://github.com/gitpod-io/workspace-images.

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

### `ports[n].onOpen`

| Type   | Default   | Values                                             |
| ------ | --------- | -------------------------------------------------- |
| `enum` | `<empty>` | `open-browser`, `open-preview`, `notify`, `ignore` |

### `ports[n].port`

| Type     | Default   |
| -------- | --------- |
| `number` | `<empty>` |

### `ports[n].visibility`

| Type   | Default   | Values             |
| ------ | --------- | ------------------ |
| `enum` | `<empty>` | `private`,`public` |

## `tasks`

Define how Gitpod prepares & builds your project and how it can start the project's development server(s). To learn more, please visit [Start Tasks](/docs/config-start-tasks). Each array element opens in its own terminal.

| Type    | Default   |
| ------- | --------- |
| `array` | `<empty>` |

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

A shell command to run between `before` and the main `command`. This command is executed only on after initializing a workspace with a fresh clone, but not on restarts and snapshots. This command is expected to terminate. If it fails, the `command` property will not be executed.

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

TODO

### `tasks[n].prebuild`

A shell command to run after `before`. This command is executed only on during workspace prebuilds. This command is expected to terminate. If it fails, the workspace build fails.

Learn more about [Start Tasks](/docs/config-start-tasks) in the docs.

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

## `vscode`

Configure the VS Code editor.

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

### `vscode.extensions`

Define a list of extensions which should be installed for users of this workspace. The identifier of an extension is always `${publisher}.${name}`. For example: 'vscode.csharp'.

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

## `workspaceLocation`

Define which path Gitpod considers the project's workspace directory, relative to `/workspace`.

In most cases, this is not needed. If you work on an older Go project, please see [Checkout and Workspace Location](/docs/checkout-location) for more details.

| Type     | Default      |
| -------- | ------------ |
| `string` | `/workspace` |
