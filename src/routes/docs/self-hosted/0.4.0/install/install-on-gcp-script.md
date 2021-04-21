---
section: self-hosted/0.4.0/self-hosted
---

<script context="module">
  export const prerender = true;
</script>

# Install Gitpod on Google Cloud Platform

Gitpod runs best on GCP. That's also where [gitpod.io](https://gitpod.io) is deployed and operated at scale.

The easiest way to install Gitpod on GCP is by using our automated installation script. You can find it in this repository:

> https://github.com/gitpod-io/self-hosted/

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/self-hosted)

This script will configure your GCP project, and produce the required Helm configuration to install Gitpod in that project.
Once the setup is complete, you will simply need to set up [OAuth](./oauth) and [HTTPS](./https-certs).

Alternatively, you can set up the GCP resources manually yourself. See the [manual GCP setup](./install-on-gcp-manual) section for more details.

## Prerequisites

- A [Google Cloud](https://cloud.google.com) project
- A [Domain](./domain)
- Optional: [HTTPS Certificates](./https-certs)

Note that Google Cloud offers a [free trial](https://console.cloud.google.com/freetrial) with $300 worth of resources, which allows deploying and evaluating Gitpod Self-Hosted for free.

## Configuration

The [Gitpod Self-Hosted repository](https://github.com/gitpod-io/self-hosted) contains all the configuration files.

In particular, you will want to configure your `values.yaml`, by setting up your domain and the [OAuth](./oauth) section.

## Installation

To start the automated setup, simply run [`./utils/create-gcp-resources.go`](https://github.com/gitpod-io/self-hosted/blob/master/utils/create-gcp-resources.go) from the root of the `self-hosted` repository.

The script will guide you through the process, and modify the relevant configuration files when needed. It will also ask for your confirmation before performing any changes or starting any service in GCP.
