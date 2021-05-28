---
section: configure
title: Prebuilds
---

<script context="module">
  export const prerender = true;
</script>

# Prebuilds

Download & install dependencies, run build scripts, you name it - tasks Gitpod takes care of **before** you start a new development environment so you don't have to wait for any of that.

With prebuilds enabled for your project, Gitpod runs the `before`, `init` and `prebuild` commands in your [`.gitpod.yml`](/docs/beta/references/gitpod-yml) file every time code is pushed to your repository. The resulting snapshot of the development environment is called a prebuilt workspace.

When anyone starts a new workspace, all Gitpod needs to do is load the prebuilt workspace. Since the heavy-lifting happened during the prebuild phase, the workspace starts up quickly, allowing you to start your work right away.

`youtube: KR8ESjGYsXI`

## Enable Prebuilt Workspaces

### On GitHub

To enable prebuilt workspaces for a GitHub repository, follow these steps:

1. Go to the <a href="https://github.com/apps/gitpod-io" target="_blank">Gitpod GitHub app</a> and click `Configure`
2. Choose the organization or account you wish to install the Gitpod app for, then click `Install`
3. You will be forwarded to Gitpod where you can confirm the installation

### On GitLab

To enable prebuilt workspaces for a GitLab repository, follow these steps:

1. Allow Gitpod to install repository webhooks, by granting `api` permissions in [Git Provider Integrations](https://gitpod.io/integrations)
2. Trigger a first prebuild manually, by prefixing the repository URL with `gitpod.io/#prebuild/` e.g. like so:

```
gitpod.io/#prebuild/https://gitlab.com/gitpod-io/gitpod
```

This will [start a prebuild](#manual-execution-of-prebuild), and also install a webhook that will trigger new Gitpod prebuilds for every new push to any of your branches to your repository.

If you want to trigger new Gitpod prebuilds for specific branches only, you can configure this in your Gitlab [project settings](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#branch-filtering).

### On Bitbucket

To enable prebuilt workspaces for a Bitbucket repository, follow these steps:

1. Allow Gitpod to install repository webhooks, by granting `webhook` permissions in [Git Provider Integrations](https://gitpod.io/integrations)
2. Trigger a first prebuild manually, by prefixing the repository URL with `gitpod.io/#prebuild/` e.g. like so:

```
gitpod.io/#prebuild/https://bitbucket.org/gitpod-io/gitpod
```

This will [start a prebuild](#manual-execution-of-prebuild), and also install a webhook that will trigger new Gitpod prebuilds for every new push to any of your branches to your repository.

## Manual execution of prebuild

Alternatively, it is also possible to manually trigger a new prebuild for any repository & commit by using the `gitpod.io/#prebuild/` URL prefix:

```
https://gitpod.io/#prebuild/https://github.com/ORG/REPO
```

## Configure prebuilds

By default, Gitpod prepares prebuilt workspaces for all changes on the default branch and for pull/merge requests coming from the same repository.

> **Note**: Prebuilds are executed as the user who enabled them. This means that if you want to use
> prebuilds on a private repository, you must give Gitpod access to private repositories.

Prebuilds are configured in your repository's [`.gitpod.yml`](/docs/beta/references/gitpod-yml) file with the following start tasks:

- `before`
- `init`
- `prebuild`

Note the absence of the `command` task. Since this task may potentially run indefinitely, e.g. if you start a dev server, Gitpod does not execute the `command` task during prebuilds. To perform long-running tasks such as executing unit tests, you can use the `prebuild` task.

## Configure the GitHub app

Once you have installed the [Gitpod GitHub app](https://github.com/apps/gitpod-io), you can configure its behavior in the `github` section of your repository's [`.gitpod.yml`](/docs/beta/references/gitpod-yml).

> **Note:** The Gitpod GitHub app has no equivalent for GitLab or Bitbucket yet, so this entire section is GitHub-specific for now.

See below for an example:

```yaml
github:
  prebuilds:
    # enable for the default branch (defaults to true)
    master: true
    # enable for all branches in this repo (defaults to false)
    branches: true
    # enable for pull requests coming from this repo (defaults to true)
    pullRequests: true
    # enable for pull requests coming from forks (defaults to false)
    pullRequestsFromForks: true
    # add a check to pull requests (defaults to true)
    addCheck: true
    # add a "Review in Gitpod" button as a comment to pull requests (defaults to false)
    addComment: true
    # add a "Review in Gitpod" button to the pull request's description (defaults to false)
    addBadge: false
    # add a label once the prebuild is ready to pull requests (defaults to false)
    addLabel: false
```

### When a prebuild is run

The `prebuilds` section in the `.gitpod.yml` file configures when prebuilds are run.
By default, prebuilds are run on push to the default branch and for each pull request coming from the same repository.
Additionally, you can enable prebuilds for all branches (`branches`) and for pull requests from forks (`pullRequestsFromForks`).

### GitHub integration

Once the GitHub app is installed, Gitpod can add helpful annotations to your pull requests.

#### Checks

By default, Gitpod registers itself as a check to pull requests - much like a continuous integration system would do.
You can disable this behaviour in the `.gitpod.yml` file in your default branch:

```yaml
github:
  prebuilds:
    addCheck: false
```

#### Comment (TODO this no longer seems to happen)

Gitpod can add a comment with a "Review in Gitpod" button to your pull requests. The color of the button
shows the state of the prebuild:

<div class="table-container">

| <div style="width:140px">Button color</div>                                               | Prebuild state                                                                                                                                            |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Review in Gitpod (prebuild building)](../../../static/images/docs/prebuild-ongoing.svg) | the prebuild is currently running. Opening a workspace now will show the log output of the prebuild. Once the prebuild is done, your workspace will open. |
| ![Review in Gitpod (prebuild done)](../../../static/images/docs/prebuild-done.svg)        | the prebuild is done. A new workspace on this branch/PR will make use of this prebuild.                                                                   |
| ![Review in Gitpos (prebuild failed)](../../../static/images/docs/prebuild-failed.svg)    | the prebuild failed or timed out. A new workspace on this branch/PR will open the prebuild and show you the log output.                                   |

</div>

You can enable this behaviour in the `.gitpod.yml` file in your default branch:

```YAML
github:
  prebuilds:
    addComment: true
```

#### Badge

Instead of adding a comment, Gitpod can also modify the description of a pull request to add the "Open in Gitpod" button.
This approach produces fewer GitHub notifications, but can also create a concurrent editing conflict when the bot and a user try to edit the description of a pull request at the same time.

You can enable this behaviour in the `.gitpod.yml` file in your default branch:

```yaml
github:
  prebuilds:
    addBadge: true
```

The `addComment` and `addBadge` behaviours are not mutually exclusive (i.e. enabling one does not disable the other).
If you don't want the comments to be added, disable them using `addComment: false`.

#### Label (TODO verify this works)

Gitpod can also add a label to your pull requests once the prebuild is done. If someone pushes to the source branch of the PR, Gitpod will remove the label until the new prebuild is ready.
This is handy if you only want to review PRs for which a prebuild exists, saving you the time waiting for stuff to build.

You can enable this behaviour in the `.gitpod.yml` file in your default branch:

```yaml
github:
  prebuilds:
    addLabel: prebuilt-in-gitpod-or-any-other-label
```

**Note**: This is very much a beta-feature and not necessarily reliable. If a label has been added to a PR, a prebuild exists.
But sometimes a label may not be added even though the workspace was prebuilt.
