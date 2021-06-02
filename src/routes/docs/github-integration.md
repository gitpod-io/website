---
section: integrations
title: GitHub Integration
---

<script context="module">
  export const prerender = true;
</script>

# GitHub Integration

Gitpod works with any public or private repository on [GitHub](https://github.com/).

To start a workspace from a GitHub project, prefix the GitHub project URL with `gitpod.io/#` as described in [Getting Started](/docs/getting-started).

## Enable Prebuilds

To enable [prebuilt workspaces](/docs/prebuilds) for your GitHub project, you need to install the [Gitpod GitHub app](https://github.com/apps/gitpod-io) and configure it for the GitHub user or organization that the project belongs to. Install the app as described in the [prebuilt page](/docs/prebuilds).

## GitHub Enterprise Server

In Gitpod, you can register your own GitHub OAuth application. This allows to use Gitpod with any GitHub instance.

Here's how to do that:

1. When first starting your Gitpod installation, you'll get redirected to /first-steps where you get prompted to add a Git Provider. Click the button.

2. In the pop-up you choose GitHub as the type and type the host URL of the GitHub installation you want to use. If you want to hook up with the github.com you can use that host as well, of course.

3. The form for your GitHub integration now shows three values. The first one is the redirect URL, that you need to register on the GitHub side. Copy the redirect Url to your clipboard.

4. Go to `/settings/developers` on your GitHub installation to create an OAuth App. Type in a name (e.g. Gitpod) and paste the Redirect URL in the corresponding text area.

<img width="1029" alt="Screenshot 2020-08-25 at 10 09 19" src="https://user-images.githubusercontent.com/372735/91149549-7d14a800-e6bb-11ea-8721-6ef109297622.png">

<img width="794" alt="Screenshot 2020-08-25 at 10 09 53" src="https://user-images.githubusercontent.com/372735/91149546-7c7c1180-e6bb-11ea-956f-2f7190db4ca4.png">

5. Copy the `Application ID` and the `Secret` in the corresponding form fields (`Client ID` resp. `Client Secret`) of your Gitpod installation.

<img width="774" alt="Screenshot 2020-08-25 at 10 10 15" src="https://user-images.githubusercontent.com/372735/91149544-7be37b00-e6bb-11ea-8ad6-5fb2d5eba7d4.png">

6. Press `Connect` and go through the Auth flow the first time.

Congratulations, you have setup the GitHub OAuth applicaton. 🎉

Next up you should install the browser extension and [configure it with your Gitpod installation URL](/docs/browser-extension#use-with-gitpod-self-hosted).
