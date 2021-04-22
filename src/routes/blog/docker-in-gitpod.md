---
author: geropl
date: Wed Sep 12 2018 08:25:15 GMT+0000 (UTC)
excerpt: Since we released Gitpod into Public Beta it has been incredibly exciting to see people from all over the world use our service.
image: docker-in-gitpod.jpeg
slug: docker-in-gitpod
title: Bring your own (Docker) image to Gitpod
url: https://medium.com/gitpod/bring-your-own-docker-image-to-gitpod-52db1aa861de
---

<script context="module">
  export const prerender = true;
</script>

Since we released Gitpod into Public Beta it has been incredibly exciting to see people from all over the world use our service. Even more so with feedback like this:

[![George Kalpakas Tweet about Gitpod](../../../static/images/blog/docker-in-gitpod/tweet.png)](https://twitter.com/gkalpakas/status/1037800090977619973)

Of course, there is always room for improvement, especially with a service as new as Gitpod. Luckily, people have started to share their questions and ideas with us on [https://github.com/gitpod-io/gitpod](https://github.com/gitpod-io/gitpod). One of the most often asked questions was:

<h2>“How do I add tool XYZ to my workspace?”</h2>

And indeed that hasn’t been straight forward. You had to:

- create a Dockerfile on your machine

- build that Dockerfile on your machine

- push it to hub.docker.com (no account? Create one first!)

- create a branch in your project with a customized .gitpod.yml file which references that specific image

- visit _gitpod.io/#<your-repos-branch-url>_

- get no feedback except ‘Build has status FAILURE’…

- rinse and repeat from step 2

That was way too tedious for everyone to start playing around.

<h2>Let Gitpod do the heavy lifting</h2>

To improve this experience we introduced[ Dockerfile support (#62)](https://github.com/gitpod-io/gitpod/issues/62), which lets you reference your Dockerfile directly from inside your .gitpod.yml file:

```
image:
  file: docker/Dockerfile
```

Now, Gitpod knows about the Dockerfile and builds that image for you. Whenever you access the repository on Gitpod it checks whether the Dockerfile has been updated and rebuilds the image if needed. When this happens you’ll be shown the log output of the build for easier debugging, too.

<h2>An example, please!</h2>

Let’s get concrete. As an exercise we’ll use [a minimal REST service](https://github.com/lankydan/rust-web-with-rocket) written in[ Rust](https://www.rust-lang.org/) using Rocket and Diesel that talks to a PostgreSQL DB. It also has a nice[ blog post](https://lankydanblog.com/2018/05/20/creating-a-rusty-rocket-fuelled-with-diesel/) to get started.

The example relies on a very specific nightly build of the Rust compiler from May 2018. Thus, a simple git clone … && cargo build && cargo run won’t get you up-and-running. Of course, you could switch Rust toolchains but then other projects on your machine might stop working. Furthermore, there is more setup and tools to install: A database, a CLI tool…
Gitpod to the rescue!

I went to [gitpod-io/definitely-gp](https://github.com/gitpod-io/definitely-gp/) and added a [*.*gitpod.yml](https://github.com/gitpod-io/definitely-gp/blob/master/rust-web-with-rocket/.gitpod.yml) and [Dockerfile](https://github.com/gitpod-io/definitely-gp/blob/master/rust-web-with-rocket/Dockerfile) there. The *.*gitpod.yml file looks like this:

```yaml
image:
  file: Dockerfile
tasks:
  - command: |
      echo DATABASE_URL=$DATABASE_URL >> .env
      echo ROCKET_ADDRESS=$ROCKET_ADDRESS >> .env
      echo ROCKET_PORT=$ROCKET_PORT >> .env
      pg_start.sh
      diesel setup
      cargo build
      cargo run
ports:
  - port: 8000
```

It references the Dockerfile next to it, says that the resulting app should be accessible on port 8000 and contains the command executed on workspace startup: set config, start postgres, build and run app (I basically copied those from the repo’s .md file).

The Dockerfile itself inherits from our default image [gitpod/workspace-full](https://hub.docker.com/r/gitpod/workspace-full/)¹ and contains:

- PostgreSQL (+ some configuration for the gitpod user)

- specific Rust toolchain

- some project specific setup

Here it is:

```bash
FROM gitpod/workspace-full:latest

# Install postgres
USER root
RUN apt-get update && apt-get install -y \
        postgresql \
        postgresql-contrib \
    && apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/* && rm -rf /tmp/*

# Setup postgres server for user gitpod
USER gitpod
ENV PATH="/usr/lib/postgresql/10/bin:$PATH"
RUN mkdir -p ~/pg/data; mkdir -p ~/pg/scripts; mkdir -p ~/pg/logs; mkdir -p ~/pg/sockets; initdb -D pg/data/
RUN echo '#!/bin/bash\n\
pg_ctl -D ~/pg/data/ -l ~/pg/logs/log -o "-k ~/pg/sockets" start' > ~/pg/scripts/pg_start.sh
RUN echo '#!/bin/bash\n\
pg_ctl -D ~/pg/data/ -l ~/pg/logs/log -o "-k ~/pg/sockets" stop' > ~/pg/scripts/pg_stop.sh
RUN chmod +x ~/pg/scripts/*
ENV PATH="$HOME/pg/scripts:$PATH"

# Project specifics
# Setup diesel_cli
ENV PATH="$HOME/.cargo/bin:$PATH"
RUN cargo install diesel_cli --no-default-features --features postgres

# Some transitive dependencies are very picky: We need the nightly build build on the 2018-04-14, meant for the 2018-04-15
RUN rustup default nightly-2018-04-15
# Set some environment variables
ENV DATABASE_URL=postgres://gitpod@127.0.0.1/rust-web-with-rocket
ENV ROCKET_ADDRESS=0.0.0.0
ENV ROCKET_PORT=8000

# Give back control
USER root
```

Remember, this is done once per project. Most projects already have those setup descriptions, they are just buried inside their README.

Now whenever anyone accesses the repository through Gitpod, be it a branch, a particular commit, an issue or a[ PR,](/blog/when-code-reviews-lgtm) they will get a custom workspace with all the tools set up and running, out of the box. [Give it a spin](http://gitpod.io/#https://github.com/lankydan/rust-web-with-rocket)!

Once the service has build and is running, we just follow the tutorial:

- Open /people: Click Open on the appearing messagebox² and change the path in the integrated browser to http://8000-<your-workspace-url>/people , click Reload : The query results in an empty []

- Hit F1 -> "Open new Terminal" and paste:

```
curl -XPOST [http://localhost:8000/people](http://localhost:8000/people) -H "Content-Type: application/json" --data '{"id": 123, "first_name": "Jon", "last_name": "Doe", "age": 64, "profession": "Engineer", "salary": 1024}'
```

- Hit Reload again to see Jon Doe’s people entry

## Try it yourself

You can either create a PR on[ gitpod-io/definitely-gp](https://github.com/gitpod-io/definitely-gp) — or dive right in and create the [.gitpod.yml in your repositories](/docs/config-gitpod-file#checked-in-gitpod-config-file)! For details on how this works and what is possible please head over to [the docs](/docs/config-gitpod-file).

¹ It is not required to inherit from that image at all. You can even start with a plain alpine or debian based image. I used it here for convenience.

² Alternatively, go to View -> Ports and click Open
