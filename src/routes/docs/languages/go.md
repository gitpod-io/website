---
section: references
title: Go in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Go in Gitpod

Gitpod supports Go right out of the box, but there are still ways to optimize your Go experience within Gitpod.

## Example Repositories

Here are a few Go example projects that are already automated with Gitpod:

<div class="table-container">

| Repository                                             | Description                                               |                                                                                                                        Try It |
| ------------------------------------------------------ | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------: |
| [prometheus](https://github.com/prometheus/prometheus) | The Prometheus monitoring system and time series database | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/prometheus/prometheus) |
| [inlets](https://github.com/inlets/inlets)             | Cloud Native Tunnel for APIs                              |         [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/inlets/inlets) |
| [go-swagger](https://github.com/go-swagger/go-swagger) | A simple yet powerful representation of your RESTful API  | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/go-swagger/go-swagger) |
| [go-gin-app](https://github.com/gitpod-io/go-gin-app)  | Gin example running in Gitpod                             |  [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/go-gin-app) |
| [gosh-terminal](https://github.com/gosh-terminal/gosh) | A terminal implemented in Go where you can do anything    |    [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gosh-terminal/gosh) |

</div>

## Workspace Configuration

### VSCode Extensions

<div class="table-container">

| Name                                                                                               | Description                                                                                |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [Go Test Explorer](https://marketplace.visualstudio.com/items?itemName=premparihar.gotestexplorer) | Provides Test Explorer for Go which allows you to run your tests at the click of a button! |

</div>

To install Go Test Explorer for your repository, add the following to your [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file)

```YAML
vscode:
  extensions:
    - premparihar.gotestexplorer@0.1.10:jvUM8akrQ67vQxfjaxCgCg==
```

### **[Start-up tasks](https://www.gitpod.io/docs/config-start-tasks)**

Here is how to have your dependencies automatically fetched before you open your Gitpod workspace!

```yaml
tasks:
  - init: go get -v -t -d ./...
```

A full example of a [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file) file might look like this

```yaml
image: gitpod/workspace-full

tasks:
  - init: go get -v -t -d ./...

vscode:
  extensions:
    - premparihar.gotestexplorer@0.1.10:jvUM8akrQ67vQxfjaxCgCg==
```

### Using the `dep` dependency manager in Gitpod

If your project uses the [`dep`](https://golang.github.io/dep/) dependency manager then you need to add a [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker) to your project. A basic example that extends the default workspace image might be something like:

```dockerfile
FROM gitpod/workspace-full

USER gitpod

RUN brew install dep
```

Also, don't forget to reference the above Dockerfile in your `.gitpod.yml` configuration file, like so:

```YAML
image:
  file: .gitpod.Dockerfile

tasks:
  - init: dep ensure

vscode:
  extensions:
    - premparihar.gotestexplorer@0.1.10:jvUM8akrQ67vQxfjaxCgCg==
```

## Debugging

Here is a quick clip on how to automatically configure debugging for Go!

![Go debugging example](.../../../static/images/docs/GoDebug.gif)

So, basically in this video we:

1. First, open the Go file that we want to debug
2. Then, go to the debug menu and select "Add Configuration..."
3. Next, in the dropdown choose "Go launch file"
4. Finally, start debugging your Go program!

You can also create the Go debug configuration file manually

To start debugging your Go application in Gitpod, please create a new directory called `.theia/`, and inside add a file called `launch.json`, finally, add the following to it:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch file",
      "type": "go",
      "request": "launch",
      "mode": "debug",
      "program": "${file}"
    }
  ]
}
```

Then, simply open the Go file you want to debug, open the Debug panel (in the left vertical toolbar, click the icon with the crossed-out-spider), and click the green "Run" button.

<br>

To see a basic repository with Go debugging enabled, please check out [gitpod-io/Gitpod-Go-Debug](https://github.com/gitpod-io/Gitpod-Go-Debug):

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/Gitpod-Go-Debug)

## Further Reading

- [VSCode/Go Documentation](https://code.visualstudio.com/docs/languages/go) The stuff here also applies to Gitpod!
- [VSCode/Go debugging](https://github.com/Microsoft/vscode-go/wiki/Debugging-Go-code-using-VS-Code) VSCode's Documentation on Go debugging
