---
section: feature-preview
title: Feature Preview
---

<script context="module">
  export const prerender = true;
</script>

# Feature Preview

You can enable Feature Preview from the [Settings](https://gitpod.io/settings/). This will enable a beta preview of some of the latest functionalities and features that are being actively developed. Some of them are user-facing features while others take place in the backstage.

You can disable Feature Preview at any time.

If you have suggestions on how we can improve a feature, please provide feedback by [opening an issue](https://github.com/gitpod-io/gitpod/issues/new/choose).

> Once you enable this, existing and new workspaces will automatically start with all beta features. Disabling this could make existing workspaces unstable.

## Root Access

Root Access allows you to attain privileged control within a workspace and be able to run commands as root.

This feature also enables Docker in your workspace. Run `sudo docker-up` to start a Docker daemon.

**Learn More**

- [KubeCon 2020 Live Session: Rootless Workspaces in Gitpod](https://www.youtube.com/watch?v=l4I2TVAnBuw) (YouTube)
- [How to get `sudo` and `root` in your Gitpod workspace](https://github.com/gitpod-io/gitpod/issues/39#issuecomment-738636446) (GitHub issue)
- [How to use `docker` and `docker-compose` in your Gitpod workspace](https://github.com/gitpod-io/gitpod/issues/52#issuecomment-738629624) (GitHub issue)

## Default IDE

Gitpod uses Theia as its default IDE. This setting allows you to choose between [Theia](https://github.com/eclipse-theia/theia) and [Code](https://github.com/microsoft/vscode) editors.

You can choose between 2 options:

- Theia
- Code

> There is also a private beta for allowing a custom IDE image for the default IDE. If you are interested, feel free to reach out through the [contact form](https://www.gitpod.io/contact).
