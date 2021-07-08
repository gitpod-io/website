---
author: meysholdt
date: Thu Dec 19 2019 11:49:24 GMT+0000 (UTC)
excerpt: Eighteen months ago we launched the public beta of Gitpod. That date marked the beginning of an amazing journey with plenty of feedback
image: globe.png
slug: self-host-your-gitpod
subtitle: Gitpod on Your Infrastructure
teaserImage: globe.png
title: Self-Host Your Gitpod
---

<script context="module">
  export const prerender = true;
</script>

Eighteen months ago we launched the public beta of Gitpod.
That date marked the beginning of an amazing journey with plenty of feedback, fixes and improvements.
It is exciting to see how far we have come and where that simple idea of instant, ready-to-code workspaces has taken us.

None of this would have been possible if it weren't for the troves of developers, hackers, coders and other purveyors of Open-Source who provide ample feedback and use Gitpod as their IDE of choice.
If the technical side of Gitpod is fun, the user side of Gitpod is truly amazing.

We are blown away every day because of the quantity and quality of what you guys do with Gitpod.

## A Public Service is Not Enough

However, until now Gitpod has not truly been available for everyone.
There are many situations, especially in the enterprise, where working on your source code on a third-party cloud service is out of question.
Maybe the codebase you work on lives on a GitLab or GitHub Enterprise instance in your company's network, guarded by a firewall.
Maybe working on the code requires access to services that are available only inside your company network, such as databases, npm/Docker/Maven registires or a Kubernetes cluster.

Well, why not have Gitpod where you need it?

## Introducing: Gitpod Self-Hosted

Today we announce the availability of Gitpod Self-Hosted.
Much like eighteen months ago, this marks the starting point of a new section of our journey.

To create Gitpod Self-Hosted, we took our codebase from gitpod.io and made it dramatially easier to configure, install and run.
As a result, you'll find all the features you know from gitpod.io in Gitpod Self-Hosted.

Gitpod Self-Hosted runs on Kubernetes and integrates via OAuth with GitHub Enterprise, GitLab CE and GitLab EE.
This way no additional user management is required and users get easy access to Git repositories based on the permissions already present in GitLab/GitHub.

We operate gitpod.io on GCP, hence running Gitpod Self-Hosted on Google Cloud Platform (GCP) is a battle-tested solution.
We consider running Gitpod Self-Hosted on vanilla Kubernetes in beta.

## Easy Installation

Installing Gitpod Self-Hosted on your own infrastructure works much like any other piece of kit running on Kubernetes.

1. Clone the example configuration repo: `git clone https://github.com/gitpod-io/self-hosted`

2. Adjust the configuration from the repository to your needs (with [ample documentation available](/docs/self-hosted/latest/self-hosted) to guide you).

3. Install using [helm](https://helm.sh/): `helm install ... gitpod`

The [vanilla Kubernetes setup](/docs/self-hosted/latest/install/install-on-kubernetes) will work most Kubernetes clusters.
For Google Cloud Platform we provide an [automated installation script](/docs/self-hosted/latest/install/install-on-gcp-script).

## Pricing

Gitpod Self-Hosted is free for up to three users. If you're a small shop that will get you up and running.
If you need more, there is a [free one-month unlimited license](https://gitpod.io/selfhosted-trial) available.
In case you need support running your PoC in-house please [email us](mailto:contact@gitpod.io) and we'll be happy to help.
Our remodeled [community](https://community.gitpod.io/) will also fill with helpful tips and tricks regarding Gitpod Self-Hosted.

We are absolutely thrilled to see Gitpod and its community growing.
Self-Hosted will enable even more developers to focus more on coding and less on setting up their machine or waiting for builds to finish.
