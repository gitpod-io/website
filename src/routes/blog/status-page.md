---
author: csweichel
date: Tue Jan 29 2019 10:32:22 GMT+0000 (UTC)
excerpt: "A core value at Gitpod is transparency: a lot of what we do is out in the open, because we believe that that’s the best way to earn the"
image: teaser-status-page.png
slug: status-page
subtitle: Status Update
title: Gitpod ❤️ Statusfy
url: https://medium.com/gitpod/status-update-gitpod-%EF%B8%8F-statusfy-ed8266d63a20
---

<script context="module">
  export const prerender = true;
</script>

A core value at Gitpod is transparency: a lot of what we do is out in the open, because we believe that that’s the best way to earn the trust of our users. Until recently there was one point where we had some catching up to do in that regard: having a status page.

We had three main requirements for our status page:

- It had to be **rock solid** because if your status page is not available, how am I going to trust your product?

- It should **present the status of our service, nothing else**. We already have an extensive monitoring setup (based on Prometheus/Grafana/InfluxDB) that watches over our infrastructure. No need to introduce yet another monitoring solution. A surprising amount of status page projects also do monitoring/health checks on the side.

- It had to **integrate into our existing infrastructure**. If we could use Git, our existing cloud infrastructure and Gitpod to update/manage our incident reports, all the better. We already have this infrastructure in place, so if we could avoid setting up a brand new website deployment, that is a plus.

Our [documentation](https://github.com/gitpod-io/gitpod-docs) and website are statically generated from Markdown which we edit using Gitpod, push to GitHub and build/deploy using Jenkins. This pattern works well for us, it would be nice if we could use the same process for our status page.

## Hello Statusfy

Enter [Statusfy](https://statusfy.co/), an Open Source status page system that can render the status page statically or dynamically from Markdown files. It supports a wide range of deployment options, including pushing the statically generated files to a [GCP bucket](https://cloud.google.com/storage/docs/key-terms#buckets).

![gitpod-status repository in Gitpod](https://cdn-images-1.medium.com/max/7088/1*8yRrsPnasOhAbZ9CbsTTIg.png)

Turns out that Gitpod and Statusfy are perfectly complementary. Say we just found an issue and want to update the status page, the steps are as simple as:

1. Open the [gitpod-status](https://github.com/gitpod-io/gitpod-status) repository in Gitpod

1. Create a new incident using yarn new-incident

1. Preview the incident to make sure everything looks alright

1. git commit && git push which has Jenkins pick up the changes, re-generate the status page and push it to the Google Bucket.

This setup ticks all boxes: it’s rather solid (GCP buckets have a decent track record), deals with incidents and incidents only, and fits well in our existing infrastructure.

## Getting started

It took us only a couple of hours to build our status page using Statusfy. In part that’s because we had a few things in place already, but mainly because Gitpod and Statusfy make for a great team.

If you want to replicate this setup at home, create a repo on GitHub, open Gitpod on that repo and run npx statusfy init. The next steps and deployment options are described in Statusfy’s excellent [Getting Started guide](https://docs.statusfy.co/guide/getting-started.html#installation).
