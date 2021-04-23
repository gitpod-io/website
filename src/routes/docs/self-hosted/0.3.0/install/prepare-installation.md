---
section: self-hosted/0.3.0/self-hosted
title: Prerequisites
---

<script context="module">
  export const prerender = true;
</script>

# Prerequisites

This document describes the prerequisites for a Gitpod installation. Upon completing the steps described herein,
you will have everything in place to successfully finish the installation.

## Kubernetes

Gitpod runs on Kubernetes where Gitpod workspaces are Kubernetes pods. Gitpod is installed on Kubernetes using Helm.
Gitpod requires **Kubernetes 1.13** or newer.

## Domain

Gitpod requires a domain resolvable by some nameserver (typically a public domain name, e.g. `your-domain.com`).
As Gitpod launches services and workspaces on additional subdomains it also needs two wildcard domains.
For example:

    your-domain.com
    *.your-domain.com
    *.ws.your-domain.com

Installing Gitpod on a subdomain works as well. For example:

    gitpod.your-domain.com
    *.gitpod.your-domain.com
    *.gitpod.ws.your-domain.com`

## User Authorization and Git Integration

Gitpod does not implement user authentication itself, but integrates with other auth provider using [OAuth2](https://oauth.net/2/).
Usually your Git hosting solution (e.g. GitHub or GitLab) acts as OAuth auth provider. This way we control access to Gitpod while at
the same time making sure every user has proper access to their Git repository.

Gitpod supports the following authentication providers:

- github.com
- GitHub Enterprise in version 2.16.x and higher
- gitlab.com
- GitLab Community Edition in version 11.7.x and higher
- GitLab Enterprise Edition in version 11.7.x and higher
- Bitbucket — coming soon
- Custom Auth Provider – Inquiry TypeFox for a quote

## HTTPS certificates (Optional)

While we highly recommend operating Gitpod using HTTPS, Gitpod is able to run on insecure HTTP.
The caveat of using HTTP is that the builtin Docker registry will not function as Docker/containerd do not pull from insecure registries by default.
You can either resort to using an [external registry](#docker-registry-optional) or use HTTPS. For running Gitpod on insecure HTTP, no HTTPS certificates are needed and you can skip this section.

The most accessible means of obtaining HTTPS certificates is using [Let's Encrypt](https://letsencrypt.org/) which provides free certificats to anybody who can prove ownership of a domain.
Gitpod requires [wildcard certificates](https://en.wikipedia.org/wiki/Wildcard_certificate) (e.g. `*.ws.your-domain.com`) which [can be obtained via Let's Encrypt](https://community.letsencrypt.org/t/acme-v2-production-environment-wildcards/55578) but require [proof of ownership via DNS](https://letsencrypt.org/docs/challenge-types/#dns-01-challenge).
There is a [plethora of tutorials](https://www.google.com/search?q=letsencrypt+wildcard) how to [generate wildcard certificates](https://medium.com/@saurabh6790/generate-wildcard-ssl-certificate-using-lets-encrypt-certbot-273e432794d7) using Let's Encrypt.
Things get considerably easier when your domain is registered with a service for which a [Certbot DNS plugin exists](https://certbot.eff.org/docs/using.html#dns-plugins).

See [here](./https-certs) for more details on how the certificates are used during installation.

## MySQL Database (Optional)

Gitpod uses a MySQL database to store user data. By default Gitpod ships with a MySQL database built-in. If you operate your own MySQL database (which we'd recommend in a production setting) you can use that one. You have the following options:

- Integrated database: If not disabled, this MySQL database is installed in a Kubernetes pod as a part of Gitpod’s Helm chart.
  The database uses a Kubernetes PersistentVolume. We do not recommend using this option fo a production setting.

- Own MySQL database: Gitpod requires MySQL in version 5.7 or newer.

## Docker Registry (Optional)

Gitpod builds Docker images during workspace startup. This enables custom Dockerfiles as part of your workspace config, but is also required for Gitpod itself to function.
To this end, Gitpod requires a container registry where it can push the images it builds.

By default Gitpod ships with a built-in Docker registry. If you operate your own Docker registry (which we'd recommend in a production setting) you can use that one. You have the following options:

- Integrated docker registry: If not disabled, this docker registry is installed in a Kubernetes Pod as a dependency of Gitpod’s Helm chart.
  The docker registry requires a Kubernetes PersistentVolume. This registry is not recommended to be used for production.
- Own docker registry: Gitpod can connect to your own docker registry. Compared to its built-in counterpart this enables performance gains and access to otherwise private images.

## Bucket Storage (Optional)

Gitpod uses bucket storage to persist the contents of workspaces. Each workspace tarballed into a single archive file which is then uploaded to the bucket.

By default Gitpod ships with [MinIO](https://min.io/) as built-in bucket storage. If you operate your own MinIO instance, or have access to Google Cloud Bucket storage you can use that one. You have the following options:

- Integrated MinIO: If not disabled, Gitpod installs MinIO in Kubernetes as a dependency of Gitpod’s helm charts.
  MinIO itself can serve as [gateway](https://github.com/minio/minio/tree/master/docs/gateway) to other storage providers.
  When storing the data itself, MinIO relies on a [persistent volume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) which in turn supports a [wide range of storage backends](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes).
- Own storage buckets: Gitpod can be configured to connect to your own installation of MinIO or Google Cloud Storage compatible storage solution.
