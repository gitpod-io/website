---
section: workspaces
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
  help              Help about any command
  init              Create a new .gitpod.yml file
  open              Opens a file in Gitpod
  preview           Opens a URL in Theia's preview view
  url               Prints the URL of this workspace
  forward-port      Makes a port available on 0.0.0.0 so that it can be exposed to the internet

Flags:
  -h, --help   help for gp

Use "gp [command] --help" for more information about a command.
```

## Init

Gitpod workspaces can be configured - see [Configuring Workspaces](/docs/configuration) for more details. `gp init` helps creating this configuration by guiding through this process and producing a `gitpod.yml` in the end (think `npm init`).

## Open

Modern editors/IDE's support command line tooling to open a file (e.g. VS Code `code foo.txt`). In Gitpod this can be done using `gp open <filename>`.
We have also added common aliases for `gp open`: `code` and `open`.

## Preview

`gp preview` is similar to `gp open`, except that it does not open a file in the editor but a URL in a preview pane on the right.

## URL

Gitpod workspaces can expose services to the internet. `gp url` provides the URL which points to a service served from a Gitpod workspace. For example `gp url 8080` prints the URL which points to the service listening on port 8080 in this current workspace.

You can combine the `preview` and the `url` command to open a certain path instead of the default URL.

For instance:

```sh
gp preview $(gp url 3000)my/path/index.html
```

If you put this into the `.gitpod.yml` to open the a certain page on startup, don't forget to [ignore the default action](/docs/config-ports) when the port opens.

## Forward Port

In Gitpod services/servers running on a port need to be _exposed_ before they become accessible from the internet. This process only works with services listening on `0.0.0.0` and not just `localhost`.
Sometimes it is not possible to make a server listen on `0.0.0.0`, e.g. because it is not your code and there are simply no means of configuration.

In that case, `gp forward-port <port>` can be used to forward all traffic form a socket listing on all network interfaces to your process listening on localhost only.

## Await Port

When writing tasks to be executed on workspace start, one sometimes wants to wait for an http service to be available. `gp await-port` does that.

Here's an example that will open a certain path once a service is a available:

```sh
gp await-port 3000 && gp preview $(gp url 3000)my/path/index.html
```
