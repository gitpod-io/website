---
section: references
title: Java in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Java in Gitpod

Gitpod comes with great support for Java builtin. Still, depending on your particular project you might want to further optimize the experience.

A great example of a ready-to-code Java dev environment is our [Spring Petclinic Example](https://github.com/gitpod-io/spring-petclinic).

## Ready-to-code Dev Environments for Java

To set up your project, you should run `gp init` in the terminal first. This will create the two configuration files needed to explain Gitpod what your project needs.
A dev environment is based on a Docker image. But don't fear you don't need to understand Docker to get started. In most cases, the default docker image is enough.

### SDKMAN

For Java, it comes readily equipped with [SDKMAN!](https://sdkman.io/), which is a version manager that takes care of managing and installing not only different Java versions but also a different version of other JVM languages such as Scala or Kotlin (both supported in Gitpod, too).

It also installs Maven and Gradle in case you don't use the [wrapper version](https://docs.gradle.org/current/userguide/gradle_wrapper.html) that is often recommended.

Check out the [documentation of SDKMAN!](https://sdkman.io/usage) to see how to use it or simply type `sdk help` in the terminal.

#### SDKMAN in Docker

Although you can use sdk in your terminal, you should put the tools and versions into your Dockerfile, so you and your team get the very same configuration every time.
To do that you need to alter the generated `.gitpod.Dockerfile`. Here's an example that will install Java 12 with the J9 VM from "Adopt a JDK".

```dockerfile
FROM gitpod/workspace-full

RUN bash -c ". /home/gitpod/.sdkman/bin/sdkman-init.sh \
             && sdk install java 12.0.1.j9-adpt"
```

> Note that you always need to run the `sdkman-init.sh` in bash before you can use SDK.

You can add additional tools and versions like this:

```dockerfile
FROM gitpod/workspace-full

RUN bash -c ". /home/gitpod/.sdkman/bin/sdkman-init.sh \
             && sdk install java 12.0.1.j9-adpt \
             && sdk ..."
```

### Prebuilds

Gitpod provides disposable dev environments, which means you are getting fresh development environments for every task. So configuring them to be ready-to-code is crucial to get the most out of Gitpod.

In the generated `.gitpod.yml` you will find the following section:

```yml
# List the startup tasks. You can start them in parallel in multiple terminals. See https://www.gitpod.io/docs/config-start-tasks/
tasks:
  - init: echo 'init script' # runs during prebuild
    command: echo 'start script'
```

You can have as many tasks as you which, each will result in an opened terminal when you start a dev environment.

Each task supports multiple phases, most importantly `before`, `init`, `command`. To be ready to code a dev environment should not only be in sync with the git repo but also needs to have the currently checked out state built.
For instance, in the [Spring Petclinic demo](https://github.com/gitpod-io/spring-petclinic) the command section looks like this:

```yml
# startup tasks
tasks:
  - init: ./mvnw package -DskipTests
    command: java -jar target/*.jar
```

Since we have installed the [Gitpod app](https://github.com/apps/gitpod-io) on that GitHub repository, Gitpod will prebuild any branch as soon as it starts. During a prebuild it will

1.  start a container based on the docker image,
2.  clone the repository and check out the respective branch,
3.  run the `before` and `init` parts of every task,
4.  capture the result and store it

Once you or your teammates start a dev environment, you will get the prebuild state. The log output from `init` is still presented in the terminal but it will have two additional lines, e.g.:

```sh
🍌 This task ran as part of a workspace prebuild.
🎉 You just saved 4 minutes of watching your code build.
```

## IDE features

### Debugging

Here is a quick clip on how to automatically configure debugging for Java!

![Java debugging example](.../../../static/images/docs/JavaDebug.gif)

So, basically in this video we:

1. First, open the Java file that we want to debug
2. Then, go to the debug menu and select "Add Configuration..."
3. Next, in the dropdown choose "Java: Launch Program in Current File"
4. Finally, start debugging your Java program!

You can also create the Java debug configuration file manually

To start debugging your Java application in Gitpod, please create a new directory called `.theia/`, and inside add a file called `launch.json`, finally add the following to it:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  "version": "0.2.0",
  "configurations": [
    {
      "type": "java",
      "name": "Debug (Launch) - Current File",
      "request": "launch",
      "mainClass": "${file}"
    }
  ]
}
```

Then, simply open the Java file you want to debug, open the Debug panel (in the left vertical toolbar, click the icon with the crossed-out-spider), and click the green "Run" button.

<br>

To see a basic repository with Java debugging enabled, please check out [gitpod-io/Gitpod-Java-Debugging](https://github.com/gitpod-io/Gitpod-Java-Debugging):

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#tps://github.com/gitpod-io/Gitpod-Java-Debugging)

For more please see [VSCode's docs](https://code.visualstudio.com/docs/java/java-debugging)

### VSCode extensions

Gitpod comes equipped with the following VS Code extensions:

- [Language Support for Java(TM)](https://marketplace.visualstudio.com/items?itemName=redhat.java)
- [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)
- [Java Dependency Viewer](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency)

You can [install additional extensions](/docs/vscode-extensions) for your project if you want.

Most of the information you find in the [Java for VS Code](https://code.visualstudio.com/docs/languages/java) documentation applies to Gitpod as well.

## Vaadin in Gitpod

To work with Vaadin in Gitpod, you will need to properly configure your repository. Here is how to do it.

### Example Repositories

Here are a few Vaadin example projects that are already automated with Gitpod:

<div class="table-container">

| Repository                                                               | Description                               | Try it                                                                                                                                      |
| ------------------------------------------------------------------------ | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [Vaadin CRM](https://github.com/vaadin-learning-center/crm-tutorial)     | Full-stack Vaadin and Spring Boot         | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/vaadin-learning-center/crm-tutorial) |
| [Vaadin starter](https://github.com/vaadin/skeleton-starter-flow-spring) | An empty starter for a new Vaadin project | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/vaadin/skeleton-starter-flow-spring) |

</div>

### Configuring Gitpod for a Vaadin project

Start by downloading a [**Vaadin and Spring Boot** project starter](https://vaadin.com/start) if you don't have a Vaadin project from before.

Next, add a [`.gitpod.yml`](https://www.gitpod.io/docs/config-gitpod-file) file with the follwing content to the root of the project:

```YAML
tasks:
  - command: mvn spring-boot:run
ports:
  - port: 8080
    onOpen: open-preview
```

This will start the development server and open up the application in the preview browser window.

You are now ready to push your code to GitHub.

### Enable prebuilds for a faster startup

The first time you start a Vaadin application, it downloads both Maven and npm dependencies, which can take some time. You can speed up the GitPod startup by enabling [prebuild](https://www.gitpod.io/docs/prebuilds) for the repository.

Update your [`.gitpod.yml`](https://www.gitpod.io/docs/config-gitpod-file) file with the following content:

```YAML
tasks:
  - prebuild: mvn install spring-boot:start spring-boot:stop -DskipTests
    command: mvn spring-boot:run
ports:
  - port: 8080
    onOpen: open-preview
github:
  prebuilds:
    master: true
```

Finally, enable prebuilds on GitHub [as instructed in the prebuild documentation](https://www.gitpod.io/docs/prebuilds#enable-prebuilt-workspaces).

Next time you push code to your repository, the `prebuild` command will download all the dependencies and make the project startup faster.
