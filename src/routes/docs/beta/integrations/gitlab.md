---
section: integrations
title: GitLab Integration
---

<script context="module">
  export const prerender = true;
</script>

# GitLab Integration

GitLab comes with a [native Gitpod integration](https://docs.gitlab.com/ce/integration/gitpod.html). This feature is enabled on GitLab.com by default, but needs to be enabled by the administrator of a GitLab self-managed instance as described in the [GitLab docs](https://docs.gitlab.com/ce/integration/gitpod.html).

## Starting Workspaces

When the Gitpod integration is enabled in GitLab, users can choose to start a Gitpod workspace as an alternative to the GitLab Web IDE directly from GitLab. Simply click on the dropdown arrow next to the **Web IDE** split button on the project or merge request page, and choose “Gitpod”. The Gitpod workspace will open in a new browser tab. Then, the next time you visit a GitLab page, the last used action will be pre-selected.

![GitLab Integration](../../../static/images/docs/gitlab-integration/gitpod_button_project_page.png)

To launch new Gitpod workspaces for issues, branches, specific commits, etc. you can also prefix any GitLab URL with `gitpod.io/#` as described in the [Getting Started](/docs/beta/getting-started) page, or use the [browser extension](/docs/beta/integrations/browser-extension) to add a convenient Gitpod button to every GitLab page.

## Enabling Prebuilds

To enable [prebuilt workspaces](/docs/beta/concepts/prebuilds) for your GitLab project, you need to grant the `api` permission in Gitpod's [Integration Settings](https://gitpod.io/integrations) page. This allows Gitpod to install a webhook which creates a new prebuild for every push event.

The webhook will be automatically installed when you trigger the first prebuild manually. For this, prefix your GitLab project URL with `gitpod.io/#prebuild/` as described in the [prebuilds page](/docs/beta/concepts/prebuilds#on-gitlab-and-bitbucket).

## Gitpod for self-hosted GitLab instances

In Gitpod, you can register your own GitLab OAuth application. This allows you to use Gitpod with any GitLab instance.

Here's how to do that:

1. Head over to [the integration settings](https://gitpod.io/integrations) and scroll down to the **Git Integrations** section.
   ![Gitpod's git integration settings](../../../../static/images/docs/gitpod-settings-integrations-git-integrations.png)
1. Click **New Integration**
1. In the pop-up, select **GitLab** as the _Provider Type_ and type the host URL of your self-hosted GitLab installation.
1. Copy the _Redirect URL_ - you will need that in the next step.
1. On your self-hosted GitLab instance, navigate to `/profile/applications` to create an OAuth App. Type in a name (e.g. Gitpod) and paste the _Redirect URL_ in the corresponding text area. Check the scopes `api` and `read_user`. Click the button **Save Application** below.
   ![Gitlab's form to configure a new application](https://user-images.githubusercontent.com/372735/91146315-04abe800-e6b7-11ea-87ff-e61f5a87861f.png)
1. Once the application is created, copy the following values from the GitLab UI to the Gitpod _New Git Integration_ pop-up:
   - Copy the _Application ID_ to the **Client ID** field
   - Copy the _Secret_ to the **Client Secret** field
     ![GitLab OAuth app details](https://user-images.githubusercontent.com/372735/91142160-9f54f880-e6b0-11ea-8436-6a9c8bc67d9f.png)
1. Click **Activate Integration** and go through the Auth flow the first time.

Congratulations, you have setup the GitLab integration 🎉.

Next up, you should install the browser extension and [configure it with your Gitpod installation URL](/docs/browser-extension#use-with-gitpod-self-hosted).
