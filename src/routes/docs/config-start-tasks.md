---
section: configure
title: Start Tasks
---

<script context="module">
  export const prerender = true;
</script>

# Start Tasks

<!--
  Source for diagrams: https://excalidraw.com/#json=5144082254921728,Kl_Vys0jGocSg6BQ9musNw

  ! If you update the diagrams, make sure you replace the above, immutable URL !
-->

To get the most out of ephemeral development environments, it is important to let Gitpod know how to build your project. We can achieve this by defining `tasks` in the [`.gitpod.yml`](/docs/references/gitpod-yml) configuration file.

> **Note**: In your local development environment, you likely set up your project only once. If you work in a team, you probably have written instructions on how to get started. With Gitpod, you automate these manual steps so that a new environment can be set up repeatedly by Gitpod.

Tasks are shell scripts that run on top of the docker image you configure (learn more about [custom docker images](/docs/config-docker)).

## Execution order

With Gitpod, you have the following three types of tasks:

- `before`
- `init`
- `command`

The order in which these tasks execute depends on whether you have [Prebuilds](/docs/prebuilds) configured for your project and which startup scenario applies. Let's look at the details.

### Prebuild and New Workspaces

In this startup scenario, you can see how Prebuilds impact the execution order of tasks:

![Start tasks for Prebuilds & New Workspace](../../../static/images/docs/beta/configure/start-tasks/prebuilds-new-workspace.png)

The `init` task is where you want to do the heavy lifting, things like:

- Download & install dependencies
- Compile your source code
- Run your test suite
- Any other long-running, terminating processes necessary to prepare your project

As displayed in the diagram above, we highly recommend you enable Prebuilds for your project. In that case, Gitpod executes the `before` and most importantly, `init` tasks automatically for each new commit to your project.

By the time you start a new workspace, all that's left to do is execute the `begin` (optional) and `command` tasks. The latter most often starts a database and/or development server.

> Let Gitpod run the time-consuming `init` tasks continously behind the scene so you and anyone who opens your project on Gitpod doesn't have to wait.

### Restart a Workspace

When you restart a workspace, Gitpod already executed the `init` task ([see above](#prebuild-and-new-workspaces)) either as part of a Prebuild or when you started the workspace for the first time.

As part of a workspace restart, Gitpod executes the `before` and `command` tasks:

![Restart a workspace](../../../static/images/docs/beta/configure/start-tasks/restart-workspace.png)

### Start a Snapshot

When you start a snapshot, Gitpod already executed the `init` task ([see above](#prebuild-and-new-workspaces)) either as part of a Prebuild or when you or a team member started the snapshot's initial workspace for the first time.

As part of starting a snapshot, Gitpod executes the `before` and `command` tasks:

![Start a snapshot](../../../static/images/docs/beta/configure/start-tasks/start-snapshot.png)

## Configure the terminal

You can configure where terminals open using the `openMode` properties below.
Please note that this information is used if no previous terminals in the layout exist.
Snapshots will first try to reuse existing terminals in the layout, before opening new ones.

```yaml
tasks:
  - name: Static Server
    command: python3 -m http.server 8080
  - name: DB Server
    command: sh ./scripts/start-db.sh
    openMode: split-right
```

### openMode

You can configure how the terminal should be opened relative to the previous task.

| openMode                 | Description                                                |
| ------------------------ | ---------------------------------------------------------- |
| `openMode: tab-after`    | Opens in the same tab group right after the previous tab   |
| `openMode: tab-before`   | Opens in the same tab group left before the previous tab   |
| `openMode: split-right`  | Splits and adds the terminal to the right                  |
| `openMode: split-left`   | Splits and adds the terminal to the left                   |
| `openMode: split-top`    | **Deprecated**. Splits and adds the terminal to the top    |
| `openMode: split-bottom` | **Deprecated**. Splits and adds the terminal to the bottom |

## Example Tasks

The examples below are common use cases you can get inspired by and adjust for your project's needs.

> **Note**: `begin` and `init` tasks need to terminate while `command` can run indefinitely (i.e. until cancelled with Ctrl + C). This is because `begin` and `init` may run as part of a prebuild and if these tasks do not terminate, the prebuild will eventually fail with a timeout.

### One-line tasks

Each task contains a single `npm` command. The `init` task terminates once the dependencies are installed while the `command` task starts a development server and does not terminate.

```yaml
tasks:
  - name: Dev Server
    init: npm install
    command: npm run dev
```

### Multi-line tasks in two terminals

To run multiple commands for a given task, you can use the `|` notation where each line below (make sure you indent correctly) runs in sequence once the previous command terminates.

In this example, Gitpod opens two terminals (as noted by the two `-`):

1. In the first terminal, the `init` task installs dependencies and configures a database. Then, the `command` task starts the database.
1. The second terminal only has a `command` task which starts the dev server. The application code connects to the database that is started in the first terminal (e.g. via localhost:3306).

> **Note**: In case of multiple terminals, there is no guarantee on the order in which tasks execute. The only guarantee you have is that `before`, `init` and `command` execute in that sequence **per terminal**.

```yaml
tasks:
  - name: Dependencies & Database
    init: |
      npm install
      npm run configure-database
    command: npm run start-database
  - name: Dev Server
    command: npm run dev
```

### Wait for commands to complete

When working with multiple terminals, you may have a situation where terminal 1 runs build scripts and terminal 2 and 3 require that these scripts complete first. This can be achieved with [`gp sync-await`](/docs/command-line-interface#sync-await) and [`gp sync-done`](/docs/command-line-interface#sync-done).

```yaml
tasks:
  - name: Rails
    init: >
      bundle install &&
      yarn install --check-files &&
      rails db:setup &&
      gp sync-done bundle # 'bundle' is an arbitrary name I picked
    command: rails server

  - name: Webpack
    init: gp sync-await bundle # wait for the above 'init' to finish
    command: bin/webpack-dev-server

  - name: Redis
    init: gp sync-await bundle
    command: redis-server

  - name: Sidekiq
    init: gp sync-await bundle
    command: sidekiq
```

### Missing examples?

We'd love to hear from you if you have specific questions or ideas for additional examples. Please click the following link to open a pre-configured GitHub issue: [Ask for a new Start Task example](https://github.com/gitpod-io/website/issues/new?title=[Start+Task+Example]&labels=documentation).
