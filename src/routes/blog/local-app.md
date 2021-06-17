---
author: akosyakov, csweichel, rl-gitpod
date: Wed, 9 Jun 2021 18:00:00 UTC
excerpt: While Gitpod can seamlessly integrate into your workflow in the vast majority of cases, there are times where you may want to access a workspace from localhost
image: header-desktop.png
slug: local-app
subtitle:
teaserImage: header-desktop.png
title: Gitpod Local Companion - localhost is going remote
---

<script context="module">
  export const prerender = true;
</script>

While Gitpod can seamlessly integrate into your workflow in the vast majority of cases, there are times where you may want to access a workspace from localhost and were required to workaround some limitations, particularly with respect to [framework](lhttps://www.gitpod.io/docs/languages/svelte/) features such as [live reload](https://github.com/gitpod-io/gitpod/issues/3282).

Gitpod is pleased to announce a preview release of the _Gitpod Local Companion_ app that is designed to allow localhost access to any TCP port in a remote workspace regardless of protocol.

The app runs locally and enables automatically tunneled connections to your workspace, either privately or, if required, publicly (on your laptops IP for example).

In particular, this opens up any environment or framework that assumes localhost access i.e. web frameworks such as Svelte and enables bundlers such as Parcel or Webpack hot reloading without requiring any changes. It also enables the use of non-HTTP protocols, most notably MQTT based brokers or the AMQP based services.

As a preview release, not all of the features are implemented, most notably the tunneling is 1-way only: local -> workspace.

## See it in action

As a simple example, with the _Gitpod Local Companion_ app installed and running, open the standard Svelte template in Gitpod, using this [link](https://gitpod.io/#https://github.com/sveltejs/template) or the Gitpod button [directly](https://github.com/sveltejs/template). This will create an ephemeral environment for you without requiring any local setup or installation. As per the template instructions, run the following:

```shell
npm install && npm run dev


```

VS Code will detect the service on port 5000 and offer 3 options. Click on the 'Open Browser' icon or navigate to directly to [localhost](http://localhost:5000/) to see 'Hello world!'. Edit app.svelte and the page will live reload with your changes!

We love feedback here at Gitpod, so please give it a try and let us know what you think!

<div style="position: relative; padding-bottom: 77.92207792207792%; height: 0;"><iframe src="https://www.loom.com/embed/5f229a408b6744dcbc6d592a9d82ff28" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Installation

To get started, download the preview release of the _Gitpod Local Companion_ app for your platform (right click, 'Save (Link) As')

- [Mac](https://gitpod.io/static/bin/gitpod-local-companion-darwin) - you will need to grant permission as it is not yet notarised. See ["open an app that hasn’t been notarised or is from an unidentified developer"](https://support.apple.com/en-au/HT202491) or click on the app in Finder while holding the Control key down and select 'Open' from the menu and then 'Open' in the prompt.
- [Linux](https://gitpod.io/static/bin/gitpod-local-companion-linux)
- [Windows](https://gitpod.io/static/bin/gitpod-local-companion-windows)

Alternatively, in a terminal run the following:

```shell
  # mac
  curl -OL https://gitpod.io/static/bin/gitpod-local-companion-darwin
  # linux
  curl -OL https://gitpod.io/static/bin/gitpod-local-companion-linux
  # windows
  curl -OL https://gitpod.io/static/bin/gitpod-local-companion-windows

  chmod +x ./gitpod-local-companion-*
```

## Running

To run it using your local keyring for long term storage of the access token:

```shell
  ./gitpod-local-companion-[darwin|linux|windows]


```

To run it without storing the access token (it will generate a new token every time);

```shell
  ./gitpod-local-companion-[darwin|linux|windows] --mock-keyring


```

If you are not logged in to Gitpod, it will take you through that flow. If you haven't run the local app previously it will also ask you to approve access to the control data of all your workspaces, returning a token that grants the access. This token will be stored in your local keyring for future use (unless you specify otherwise).

Once approval has been granted it will connect to your currently active workspaces and allow VSCode to control the tunnelling between the remote workspace and your local environment using the _Remote Explorer Ports View_.

Note that it currently requires a reload of the workspace VS Code page if the companion app is started after the workspace is open to synchronize the ports view - this is temporary.

## Remote Explorer Ports View

Gitpod has extended the Remote Explorer Ports view to allow more control of how ports are exposed. As shown below there is an additional toggle on each port to switch between _Tunnel on localhost_ exposure i.e. nothing outside of your laptop

![tunnel on localhost](../../../static/images/blog/local-app/tunnel-on-all.png)

and _Tunnel on all interfaces_ to make that port available on 0.0.0.0. and, depending on your firewall settings, to anyone that can access your laptop externally.

![tunnel on all](../../../static/images/blog/local-app/tunnel-on-all.png)

By default it will attempt to tunnel on the same port, but it will pick a random port if the local port is unavailable. This is reflected in the Remote Explorer Ports view below where local port 3000 is tunneled via port 49605:

![tunnel on random](../../../static/images/blog/local-app/tunnel-on-random.png)

## SSH Access

Additionally, the _Gitpod Local Companion_ preview release also has basic support for SSH access into your workspace. It currently requires that you have a default SSH key setup in the ~/.ssh directory i.e. id_rsa.pub & id_rsa. The public key will be copied to the workspace to permit access.

This opens up all the usual SSH-based features, such as secure copying, tunneling and remote execution.

Once you have installed the _Gitpod Local Companion_ app and connected it to your workspaces, it dynamically creates entries for each workspace in the /tmp/gitpod_ssh_config file. You can use this to SSH into your workspace as follows:

```shell
ssh -F /tmp/gitpod_ssh_config <your-workspace-id e.g.apricot-harrier-####>


```

You will be prompted to add the address to your known hosts file and you will be connected to your workspace!

## What is next?

We have big plans for the _Gitpod Local Companion_ App! Future features **may** include:

- 2-way tunnelling
- Listing what workspaces are running
- Listing what ports are currently tunneled and in which direction (workspace to/from local)
- Starting/stopping port forwarding from the command line
- Connecting a local VS Code instance to a workspace
- SSH into a workspace from the command line in a simple, straight forward way
