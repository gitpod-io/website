---
section: references
title: LaTeX in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# LaTeX in Gitpod

This tutorial will demonstrate how to configure Gitpod to work with [LaTeX](https://www.latex-project.org/) files. You can find a complete [example repository](https://github.com/ptrottier/latex) at the end.

## Installing LaTeX

First, you will probably want to install LaTeX in Gitpod. To do this, add a new file to your repository called [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker), and add the following content to it:

```dockerfile
FROM gitpod/workspace-full

# Install LaTeX
RUN sudo apt-get -q update && \
    sudo apt-get install -yq texlive && \
    sudo rm -rf /var/lib/apt/lists/*
```

Next, create a file called [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file) and add the following to it:

```YAML
image:
  file: .gitpod.Dockerfile
```

Now commit both files into source control, and push them to your GitHub or GitLab repository.

This will be your base configuration for LaTeX in Gitpod — from now on, every time you create a new Gitpod workspace for your repository, it will be configured as specified in your `.gitpod.yml` and `.gitpod.Dockerfile`.

## Automatically compiling LaTeX files on save

One way to achieve this is to install `inotify-tools` by modifying your earlier `.gitpod.Dockerfile` like so:

```dockerfile
FROM gitpod/workspace-full

# Install LaTeX
RUN sudo apt-get -q update && \
    sudo apt-get install -yq texlive-full inotify-tools && \
    sudo rm -rf /var/lib/apt/lists/*
```

Next, modify your `.gitpod.yml` like so:

```YAML
image:
  file: .gitpod.Dockerfile

tasks:
  - name: LaTeX auto-rebuild
    command: >
      while find . -name '*.tex' | xargs inotifywait -qqre modify .; do \
        latexmk -pdf ; \
      done
  - name: Terminal
```

This will start a watcher process that automatically recompiles your `*.tex` files when they are changed. Note: The watcher process will start in a separate Terminal on every workspace start.

## VSCode Extensions

### TexLab

This extension provides rich editing support for the LaTeX typesetting system powered by the [TexLab](https://github.com/latex-lsp/texlab-vscode) language server.

To install it in Gitpod, simply download the corresponding `*.vsix` file [Open VSX](https://open-vsx.org/), and then drag-and-drop it into Gitpod's Extensions view (which can be found in the left vertical menu bar).

This will automatically append something like this to your `.gitpod.yml` file:

```yml
vscode:
  extensions:
    - efoerster.texlab@1.10.0:/Vq+k9Ug/81LYWajjTgMpA==
```

(Note: You can also append these lines yourself if you don't want to download & re-upload the `*.vsix` file.)

### LaTeX Workshop

Another great LaTeX extension is [LaTeX Workshop](https://github.com/James-Yu/LaTeX-Workshop):

> Boost LaTeX typesetting efficiency with preview, compile, autocomplete, colorize, and more.

It is also available [on Open VSX](https://open-vsx.org/extension/James-Yu/latex-workshop).

### LaTeX Snippets

There is also [LaTeX Snippets](https://github.com/JeffersonQin/VSCode-LaTeX-Snippets):

> This extension includes a variety of snippets for LaTeX including making environments and plotting images for functions, etc.

## Try it!

To see a complete minimal example repository with a Gitpod configuration for LaTeX, including most of the tools we've covered, see [ptrottier/latex](https://github.com/ptrottier/latex). You can try it in your browser:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ptrottier/latex)
