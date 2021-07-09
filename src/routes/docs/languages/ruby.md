---
section: references
title: Ruby in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Ruby in Gitpod

It's relatively easy to set up your Ruby project in Gitpod.

## Ruby Versions

As of this writing, Gitpod comes with Ruby 2.6.6 pre-installed.

To use a different Ruby version (for example, 2.5.1) you can create a [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker) for your project, and then add something like the second paragraph to it:

```dockerfile
FROM gitpod/workspace-full
USER gitpod

# Install Ruby version 2.5.1 and set it as default
RUN echo "rvm_gems_path=/home/gitpod/.rvm" > ~/.rvmrc
RUN bash -lc "rvm install ruby-2.5.1 && \
              rvm use ruby-ruby-2.5.1 --default"
RUN echo "rvm_gems_path=/workspace/.rvm" > ~/.rvmrc
```

> 💡 Explanation: Gitpod initially [sets up RVM](https://github.com/gitpod-io/workspace-images/blob/b4b8a2b796ce570efa3aef2fc9d12d5c9803d0d2/full/Dockerfile#L228-L243) in `/home/gitpod/.rvm`, but then later switches the RVM configuration directory to `/workspace/.rvm`, so that any user-made changes (like installing new gems) are persisted within a Gitpod workspace. However, during the Dockerfile build, the `/workspace` directory doesn't exist yet, so we temporarily reset RVM's configuration directory to `/home/gitpod/.rvm`.

## Example Repositories

Here are a few Ruby example projects that are already automated with Gitpod:

<div class="table-container">

| Repository                                                           | Description                                              | Try it                                                                                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [Ruby on Rails template](https://github.com/gitpod-io/ruby-on-rails) | Ruby on Rails template with a PostgreSQL database        | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/ruby-on-rails) |
| [Forem](https://github.com/forem/forem)                              | The platform that powers [dev.to](https://dev.to)        | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/forem/forem)             |
| [GitLab](https://gitlab.com/gitlab-org/gitlab)                       | The open source end-to-end software development platform | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://gitlab.com/gitlab-org/gitlab)       |

 </div>

## VSCode Extensions

Here are a few useful extensions that you'll likely want to install in your Ruby project.

### [Ruby Test Explorer](https://marketplace.visualstudio.com/items?itemName=connorshea.vscode-ruby-test-adapter)

With the Ruby test explorer, you can run unit tests from within the Gitpod UI.
![Ruby test explorer example](.../../../static/images/docs/ruby_test_ui.png)
To add this extension to your repository, simply add these lines to your [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file) configuration file:

```YAML
vscode:
  extensions:
    - connorshea.vscode-ruby-test-adapter@0.6.1:HO9rpcRv7bmRIuo7Mty/zg==
    - hbenl.vscode-test-explorer@2.15.0:koqDUMWDPJzELp/hdS/lWw==
```

## Ruby On Rails

So, you want to write your cool new Ruby On Rails application in Gitpod? Well, here is an idea of how to do it. Please take a look at our [minimal Rails example](https://github.com/gitpod-io/Gitpod-Ruby-On-Rails) running in Gitpod:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/Gitpod-Ruby-On-Rails)
