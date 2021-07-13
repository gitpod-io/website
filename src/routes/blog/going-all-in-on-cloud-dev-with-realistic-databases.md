---
title: Going all-in on cloud-based development with realistic databases
author: cjheppell
date: Wed, 07 Jul 2021 4:00:00 UTC
excerpt: Ephemeral dev environments in the cloud offer a best-in-class experience. But how do we bring those on-prem databases with us?
image: teaser.jpg
slug: going-all-in-on-cloud-dev-with-realistic-databases
subtitle:
teaserImage: teaser.jpg
---

<script context="module">
  export const prerender = true;
</script>

Throughout 2020 and 2021 much of the world moved to remote-first working through unfortunate necessity. We got used to remote standups, meetings, reviews and collaboration. Working patterns and practices changed, but have development environments kept up?

## VPN-Based development

Speaking as an office-based developer before 2020, it was common (at least in organisations I've worked at) to have a relatively powerful desktop to handle your day-to-day activities. Maybe even something as “beefy” [as Nick Craver describes for the typical Stack Exchange development machine](https://nickcraver.com/desktop-build/)!

But when we all moved to remote-first development, the privilege of taking those desktops home wasn't necessarily possible.

This isn't uncommon and can lead to a rise of “VPN-Based development”.

![Ethernet](../../../static/images/blog/going-all-in-on-cloud-dev-with-realistic-databases/ethernet.jpeg)
-- Photo by [Markus Spiske](https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/lan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

On paper it makes sense. Re-use the powerful compute you’ve got on-premises.

In practice - it’s incredibly painful. Anyone who is used to the snappy environment you’d have from being sat physically in front of that desktop will loathe the lack of responsiveness you get from remote desktop sessions. It’s slow, it’s laggy, but it works. Just.

## Laptop-based remote development

Alternatively, you might be fortunate to have a machine that’s suited for remote work. Most likely a laptop. This can be great as it’s truly portable but it’s unlikely to be as powerful as a traditional desktop.

Even with a laptop you're looking at various different dongles, docks and gadgets to replicate a traditional desktop environment. Unless of course you're comfortable with a single screen and embedded keyboard/trackpad.

Laptops _can_ be a good solution but they have their drawbacks. And some devs I've spoken to just simply dislike the experience of working on a laptop altogether.

## Cloud-based development

On the other hand, we could look at cloud-based development. [Gitpod](https://www.gitpod.io/) is an **excellent** way to define the environment you want to develop in as code. You can then instantly provision a VS Code like environment running entirely in your browser with the click of a single button.

This has a few benefits:

- Deterministic dev environments via containerised installation of dependencies
  - Gitpod can even prebuild your dependencies in the background, so no more waiting for `npm install` to complete!
- No lag/unresponsiveness from remote desktop
  - Since VS Code is all web-based technology, the experience in a Gitpod tab is incredibly similar to what you get natively and feels right at home in a browser. Miles ahead of a remote desktop session.

This is **really exciting**. You can develop software **entirely remotely in the cloud** with a **native-like experience**.

With perhaps one exception...

## Infrastructure dependencies

What about that **database server running in your corporate LAN**? Unless you somehow make that publicly accessible, or set up a tunnel between a cloud dev environment, you’re out of luck.

It’s even worse if that shared environment is a very large database (100s of GB) since you’re not going to want to bake that into a Docker image to pull in the remote environment. If you did, it will take a long time to pull that image for each dev that wants a copy.

So how do you get useful data-rich instances into cloud development environments?

## Going all-in with production-like databases

[Spawn](https://spawn.cc/?utm_source=gitpod&utm_medium=blog&utm_campaign=all_in_cloud_dev_with_dbs) is the perfect companion for tools like Gitpod. It lets you provision copies of databases in the cloud instantly regardless of size. Those instances are reachable from _anywhere with an internet connection_. You don’t have to worry about any of the details of running those instances.

![Spawn](../../../static/images/blog/going-all-in-on-cloud-dev-with-realistic-databases/spawn.jpeg)

That means you can provision a Gitpod environment with all of your code and development environment configured, and then **instantly provision a production-like database in seconds** to support that Gitpod environment. This can happen for _every developer_ so they each get an _entirely isolated copy of the dataset just for them_.

Even better is that if you restart your Gitpod environment, your database will be left unaffected. Since the databases are running outside of the Gitpod environment, you can throw away your dev environment, start up a new one and continue exactly with the same data you had before.

We’ve got an example of this in action in the [spawn-demo repository on GitHub](https://github.com/red-gate/spawn-demo). Give it a try for yourself by clicking the [Gitpod badge in the readme](https://github.com/red-gate/spawn-demo#running-in-gitpod)! You’ll first need to sign up to Spawn, so [visit the Spawn Homepage to get started](https://spawn.cc/?utm_source=gitpod&utm_medium=blog&utm_campaign=all_in_cloud_dev_with_dbs).

We’re really excited about the potential of **entirely remote** development environments coupled with the superpowers offered by Spawn. Spin up 200GB+ databases **instantly**. Make arbitrary save points as you go, and quickly reset to known-good states after mistakes. Get instant copies for each feature branch you’re working on. Don’t worry about installing and running database servers on your machine. Oh, and **all of this is free to try out right now**.

The future of development is in the cloud. Find out what you're missing out on by trying the Spawn + Gitpod demo today!

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/red-gate/spawn-demo)
