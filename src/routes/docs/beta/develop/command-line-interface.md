---
section: develop
title: Command Line Interface
---

<script context="module">
  export const prerender = true;
</script>

# Command Line Interface

Gitpod supports a command line interface that is available in each workspace terminal called `gp`:

```text
Command line interface for Gitpod

Usage:
  gp [command]

Available Commands:
  await-port          Waits for a process to listen on a port
  env                 Controls user-defined, persistent environment variables.
  forward-port        Makes a port available on 0.0.0.0 so that it can be exposed to the internet
  help                Help about any command
  init                Create a Gitpod configuration for this project.
  open                Opens a file in Gitpod
  preview             Opens a URL in the IDE's preview
  sync-await          Awaits an event triggered using gp sync-done
  sync-done           Notifies the corresponding gp sync-await calls that this event has happened
  url                 Prints the URL of this workspace

Flags:
  -h, --help   help for gp

Use "gp [command] --help" for more information about a command.
```

## Init

Gitpod workspaces can be configured - see [Configuring Workspaces](/docs/configuration) for more details. `gp init` generates a default `.gitpod.yml` file. You can customize it to match your requirements.

Alternatively, `gp init -i` is an interactive guide which helps create the `.gitpod.yml` configuration file based on a few questions you answer.

## Open

Modern editors/IDE's support command line tooling to open a file (e.g. VS Code `code foo.txt`). In Gitpod, this can be done using `gp open <filename>`.
We also added common aliases for `gp open`: `code` and `open`.

## Preview

`gp preview` is similar to `gp open`, except that it does not open a file in the editor but a URL in a preview pane on the right.

Make sure you provide a valid URL, i.e. including the protocol. For example, http://localhost:8080.

## URL

Gitpod workspaces can expose services to the internet. `gp url` provides the URL which points to a service served from a Gitpod workspace. For example `gp url 8080` prints the URL which points to the service listening on port 8080 in this current workspace.

You can combine the `preview` and the `url` command to open a certain path instead of the default URL.

For instance:

```sh
gp preview $(gp url 3000)/my/path/index.html
```

If you put this into the `.gitpod.yml` to open the a certain page on startup, make sure you [ignore the default action](/docs/config-ports) when the port opens.

## Env

With `gp env API_ENDPOINT=https://api.example.com` you can set an `API_ENDPOINT` environment variable that is accessible for this project, even if you stop the workspace and start a new one.

To delete or unset an environment variable, you use `gp env -u API_ENDPOINT`.

Please refer to the help output provided by `gp env --help` for more use cases of the `gp env` command.

## Forward Port

In Gitpod, services/servers running on a port need to be _exposed_ before they become accessible from the internet. This process only works with services listening on `0.0.0.0` and not just `localhost`.
Sometimes it is not possible to make a server listen on `0.0.0.0`, e.g. because it is not your code and there are simply no means of configuration.

In that case, `gp forward-port <port>` can be used to forward all traffic form a socket listing on all network interfaces to your process listening on localhost only.

## Await Port

When writing tasks to be executed on workspace start, one sometimes wants to wait for an http service to be available. `gp await-port` does that.

Here's an example that will open a certain path once a service is a available:

```sh
gp await-port 3000 && gp preview $(gp url 3000)/my/path/index.html
```

## sync-await

In situations where you work with multiple terminals and one depends on a task in another terminal to complete, `gp sync-await <name>` waits until you call `gp sync-done <name>` in another terminal.

## sync-done

To notify a `gp sync-await <name>` call (see previous chapter), you can call `gp sync-done <name>`.

A common use case is the followig where we have three terminals:

- Terminal 1: A build process takes several minutes to complete. At the end, you call `gp sync-done build`.
- Terminal 2: You use `gp sync-await build && npm run start-database` to wait for the build to complete before you start a database
- Terminal 3: You use `gp sync-await build && npm run dev` to wait for the build to complete before you start the dev server.
