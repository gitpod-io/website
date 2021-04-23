---
section: self-hosted/0.3.0/self-hosted
title: Install Gitpod on Google Cloud Platform
---

<script context="module">
  export const prerender = true;
</script>

# Install Gitpod on Google Cloud Platform

At its core setting up Gitpod on GCP does not differ much from installing it on any other Kubernetes platform.
However, Gitpod supports a range of integrations with the Google Cloud Platform that increase performance and reliability.
This section describes the neccesary steps to prepare a new GCP project for a Gitpod installation.

> We have automated this process. If you want to get up and running as quickly as possible, that's the way to go.

You can perform the set up of the GCP resources yourself. See the [manual GCP setup](./install-on-gcp-manual) section for more details.

This installation script configures your GCP project and produces the required Helm configuration for installing Gitpod in that project.
Once all GCP setup is complete, you will only have to manually set up [OAuth](./oauth) and optionally [HTTPS](./https-certs).

You can install Gitpod self-hosted in your GCP project from within Gitpod. This way you don't have to install the Google Cloud SDK or other required tools.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/self-hosted)

## Prerequisites

- Ensure you have the [general installation prerequisites](./prepare-installation) available.
- [Google Cloud SDK](https://cloud.google.com/sdk/install)
- [Go (at least 1.12)](https://golang.org/doc/install)
- mysql client

## Configuration

The [Gitpod self-hosted repository](https://github.com/gitpod-io/self-hosted) contains the configuration files this guide is refering to.
The installation script will modify the configuration files found in that repository.
We recommend you to fork this repository so that you can easily rebase your changes on the latest version.

```
git clone https://github.com/gitpod-io/self-hosted
cd self-hosted
git remote rename origin upstream
```

Configure at least your `values.yaml`. Set your domain and the [OAuth](./oauth) section.

## Installation

To start the automated setup, run [`./utils/create-gcp-resources.go`](https://github.com/gitpod-io/self-hosted/blob/master/utils/create-gcp-resources.go) from the root of the self-hosted repo.
The script will guide you through the process. We will ask for confirmation before doing any modifications or enabling anything that costs money.
