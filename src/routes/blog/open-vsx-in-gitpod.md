---
author: JesterOrNot, svenefftinge
date: Thu June 18 2020
excerpt: Until now, you installed VS Code extensions in Gitpod by drag-and-dropping `.vsix` files into your workspace. Today, we're excited to introduce a
image: teaser.jpg
slug: open-vsx-in-gitpod
subtitle: Open VSX is now integrated in Gitpod
teaserImage: teaser.jpg
title: Search & Install Extensions in Your Gitpod Workspace
---

<script context="module">
  export const prerender = true;
</script>

Until now, you installed VS Code extensions in Gitpod by drag-and-dropping `.vsix` files into your workspace. Today, we're excited to introduce a new, simpler way to install extensions: Just search the new open-source, vendor-neutral marketplace [Open VSX](https://open-vsx.org) directly from your workspace, and install extensions in one click.

## Open VSX Adoption

Since [we've announced](/blog/open-vsx) the Open VSX marketplace a few weeks ago, adoption has been extremely quick.

To seed the registry, we've initially added the most popular open-source extensions ourselves, so that early adopters could immediately find important extensions. We could double down on adding more extensions this way, but it doesn’t seem to be necessary, because today, there are already more than 200 developers publishing their own extensions to Open VSX. 🎉

Adoption from the tool-side is going well, too. We started by supporting Open VSX from within [Theia](https://theia-ide.org). Just a couple of days ago, [VSCodium](https://github.com/VSCodium/vscodium#extensions-and-the-marketplace), the true open-source version of VS Code, shipped a new release that connects directly to Open VSX instead of Microsoft's proprietary marketplace. Today, we're excited to bring you Open VSX support in [Gitpod](https://gitpod.io) as well.

## Installing Extensions in Gitpod

As you may already know, Gitpod lets you describe your dev environment as code. This means that you write configuration and code that makes Gitpod automatically generate ready-to-code dev environments for your project.

An important part of such a configuration is the set of IDE extensions you need. In Gitpod you have two choices, you can either

**[1] Install an extension for your project's dev environment, or**

**[2] Install an extension for your personal user profile**

Option [1] installs the extension for everyone starting a workspace on the same project. Programming language-specific extensions or those that support certain frameworks, databases, and so on usually go here.

Some extensions however are a matter of personal taste, such as themes and keybindings. You neither want to install and manage those extensions for every project nor do you want to enforce them on your entire team. That’s when you choose option [2].

`youtube: eD_GQ2lQug8`

## What If I Can’t Find the Extension I’m Looking For?

While more and more extensions land in Open VSX on a daily basis, there still might be cases where you are missing a certain extension that exists in the MS marketplace. There are three things you can do:

- Ideally, you go to the extension's repository itself and kindly ask the developer to publish it to Open VSX. Publishing is a one-liner (`npx ovsx publish`), so it's really low effort.
- Download the extension's `.vsix` file (e.g. from the extension's GitHub Releases) and drag and drop it into the IDE's Extensions view. That will install and activate it automatically.
- Create a PR over at https://github.com/open-vsx/publish-extensions — that's where we seed the Open VSX registry by automatically publishing popular open-source extensions.

You can find more information in our [docs](/docs/vscode-extensions).
