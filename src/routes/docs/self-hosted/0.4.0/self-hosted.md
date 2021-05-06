---
section: self-hosted/0.4.0/self-hosted
title: Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

# Gitpod Self-Hosted

Gitpod, just as you know it from [gitpod.io](https://gitpod.io), can be deployed and operated on your own infrastructure. It supports different cloud providers, self-managed Kubernetes clusters, corporate firewalls, and even off-grid / air-gapped networks.

## Installation

You can find all configuration templates and installation scripts in this repository:

> https://github.com/gitpod-io/self-hosted/

### Install on Google Cloud Platform

The easiest way to install Gitpod Self-Hosted is currently on Google Cloud Platform (that's also where [gitpod.io](https://gitpod.io) is deployed). GCP is the recommended platform for most users:

- [Install Gitpod on Google Cloud Platform](/docs/self-hosted/0.4.0/install/install-on-gcp-script)

### Install on any Kubernetes cluster

If you manage your own Kubernetes cluster, please follow this guide:

- [Install Gitpod on self-managed Kubernetes](/docs/self-hosted/0.4.0/install/install-on-kubernetes)

Note: Dedicated installation steps for AWS, Azure, and OpenShift are coming soon.
