---
section: configure
title: VS Code Extensions
---

<script context="module">
  export const prerender = true;
</script>

# VS Code Extensions

Gitpod already comes well equipped for most development tasks, and provides language support for the most popular programming languages such as Python, JavaScript, Go, Rust, C/C++, Java, Ruby, and many more out of the box.

Still, you may wish to customize Gitpod, or to extend it with new features. You can do this by installing VS Code extensions.

## Installing an Extension

To install a VS Code extension in Gitpod, simply go to the left vertical menu, and open the Extensions view. There you can search for an extension and install it with one click.

Please note that this uses the [Open VSX](https://open-vsx.org/) registry. If you can't find an extension you use in your local VS Code, please read the "[Where do I find extensions?](#where-do-i-find-extensions)" section below.

If the extension is helpful to anyone who works on the project, you can add it to the `.gitpod.yml` configuration file so that it gets installed for anyone who works on the project. To do that:

1. Visit the extension page (where you installed it from)
1. Click the settings icon
1. Select "Add to .gitpod.yml" from the menu

Your project's `.gitpod.yml` is updated automatically and lists the given extension. You can also directly edit this file to install or remove extensions manually.

Here is an example of what a `.gitpod.yml` with installed extensions may look like:

```yml
vscode:
  extensions:
    - scala-lang.scala
    - scalameta.metals
```

You can share the installed extensions with your team by committing the `.gitpod.yml` change and pushing it to your Git repository.

## User Extensions (TODO wait for https://github.com/gitpod-io/gitpod/issues/4339)

You can also install extensions at the user level. This can be useful for extensions that you want to have in all your projects (for example a custom theme), and this doesn't require changing every project's `.gitpod.yml` configuration.

To do this, simply select `Install for (user)` when prompted by the IDE while installing an extension:

![Install for (user) prompt in VS Code](../../../static/images/docs/install-extension-for-user.png)

## Built-in Extensions (TODO)

Gitpod already comes with a number of commonly used VS Code extensions pre-installed by default.

You can view all pre-installed extensions by expanding the "Built-in" section at the bottom of the IDE's Extensions view.

## Where do I find extensions? (TODO)

If you cannot find an extension by searching in Gitpod, it probably means that the extension hasn't been added to the [Open VSX](https://open-vsx.org/) registry yet.

In that case, you can also install it by drag-and-dropping a `*.vsix` file into the IDE's Extensions view. Gitpod will automatically install and activate the new extension, and add an entry to your `.gitpod.yml` file.

- `.vsix` extension files can be found in the [Open VSX](https://open-vsx.org/) registry and [on GitHub](https://github.com/prettier/prettier-vscode/releases) as well.

- Please note that `.vsix` files downloaded from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/vscode) should not be installed in Gitpod, because Microsoft prohibits the direct use of their marketplace by any non-Microsoft software, even though most extensions are actually open source and not developed or maintained by Microsoft.

- You can of course also develop and install your own extensions. Note that installing a `.vsix` file in Gitpod will not list that extension anywhere publicly except in your own `.gitpod.yml`, so you can also install private extensions that way.
