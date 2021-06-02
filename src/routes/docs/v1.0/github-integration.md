---
section: integrations
title: GitHub Integration
---

<script context="module">
  export const prerender = true;
</script>

# GitHub Integration

Gitpod comes with a [GitHub](https://github.com/) integration that allows you to start Gitpod workspaces from any GitHub project.

## Starting Workspaces

To start a workspace from a GitHub project, prefix the GitHub URL with `gitpod.io/#` as described in [Getting Started](/docs/getting-started).

## Enabling Prebuilds

To enable [prebuilt workspaces](/docs/prebuilds) for your GitHub project you need to install the [Gitpod GitHub app](https://github.com/apps/gitpod-io) and configure it for the GitHub user or organization that the project belongs to. Install the app as described in the [prebuilds page](/docs/prebuilds#on-github).

## OAuth Application

In Gitpod Self-Hosted you can register your own GitHub OAuth application. This allows to use Gitpod with any GitHub instance.

Here's how to do that:

1. When first starting your Gitpod installation, you'll get redirected to /first-steps where you get prompted to add a Git Provider. Click the button.

<img width="1134" alt="Screenshot 2020-08-25 at 08 30 39" src="https://user-images.githubusercontent.com/372735/91142132-96642700-e6b0-11ea-9263-5b2d90906163.png">

2. In the pop-up you choose GitHub as the type and type the host URL of the GitHub installation you want to use. If you want to hook up with the github.com you can use that host as well, of course.

<img width="1138" alt="Screenshot 2020-08-25 at 10 07 54" src="https://user-images.githubusercontent.com/372735/91149551-7dad3e80-e6bb-11ea-8896-27ac5c8289e4.png">

3. The form for your GitHub integration now shows three values. The first one is the redirect URL, that you need to register on the GitHub side. Copy the redirect Url to your clipboard.

<img width="1121" alt="Screenshot 2020-08-25 at 10 08 08" src="https://user-images.githubusercontent.com/372735/91149550-7dad3e80-e6bb-11ea-98cf-2fe34e0736d5.png">

4. Go to `/settings/developers` on your GitHub installation to create an OAuth App. Type in a name (e.g. Gitpod) and paste the Redirect URL in the corresponding text area.

<img width="1029" alt="Screenshot 2020-08-25 at 10 09 19" src="https://user-images.githubusercontent.com/372735/91149549-7d14a800-e6bb-11ea-8721-6ef109297622.png">

<img width="794" alt="Screenshot 2020-08-25 at 10 09 53" src="https://user-images.githubusercontent.com/372735/91149546-7c7c1180-e6bb-11ea-956f-2f7190db4ca4.png">

5. Copy the `Application ID` and the `Secret` in the corresponding form fields (`Client ID` resp. `Client Secret`) of your Gitpod installation.

<img width="774" alt="Screenshot 2020-08-25 at 10 10 15" src="https://user-images.githubusercontent.com/372735/91149544-7be37b00-e6bb-11ea-8ad6-5fb2d5eba7d4.png">

6. Press `Connect` and go through the Auth flow the first time.

<img width="1125" alt="Screenshot 2020-08-25 at 10 10 41" src="https://user-images.githubusercontent.com/372735/91149536-79812100-e6bb-11ea-8fb4-1802e09f9a5b.png">

Congrats you have setup the GitHub OAuth applicaton. 🎉

Next up you should install the browser extension and [configure it with your Gitpod installation URL](/docs/browser-extension#use-with-gitpod-self-hosted).
