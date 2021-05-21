---
section: self-hosted/0.3.0/self-hosted
title: Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

# Gitpod Self-Hosted

Gitpod, just as you know it from [gitpod.io](https://gitpod.io), can be installed and operated on your own infrastructure.
This infrastructure may be a cloud provider or self-managed Kubernetes. It may be on the public internet, behind a corporate firewall, or on a network without internet access.

> Gitpod self-hosted is free for up to three users.
> For more users, please obtain a [free trial license](https://gitpod.io/selfhosted-trial).

## Installation

Regardless of your target environment, you will need to ensure that the [installation prerequisites](./install/prepare-installation) are available.
Gitpod can be installed in the following environments:

- [Vanilla Kubernetes](/docs/self-hosted/0.3.0/install/install-on-kubernetes): All you need is a domain and a Kubernetes cluster.
- [Google Cloud Platform](/docs/self-hosted/0.3.0/install/install-on-gcp-script): Install Gitpod optimised for Google Cloud Platform.
