---
section: self-hosted/0.3.0/self-hosted
title: How To integrate Gitpod with OAuth providers
---

<script context="module">
  export const prerender = true;
</script>

# How To integrate Gitpod with OAuth providers

Currently Gitpod supports GitHub, GitHub Enterprise and GitLab.

## GitHub

To authenticate your users with GitHub you need to create a [GitHub OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/).
Follow the guide linked above and:

- set "Authentication callback URL" to:

  https://<your-domain.com>/auth/github/callback

- copy the following values and configure them in `values.yaml`:
  - `clientId`
  - `clientSecret`

## GitLab

To authenticate your users with GitLab you need to create an [GitLab OAuth application](https://docs.gitlab.com/ee/integration/oauth_provider.html).
Follow the guide linked above and:

- set "Authentication callback URL" to:

  https://<your-domain.com>/auth/<gitlab.com-OR-your-gitlab.com>/callback

- set "Scopes" to `api`, `read_user` and `read_repository`.
- copy the following values and configure them in `values.yaml`:
  - `clientId` is the "Application ID" from the GitLab OAuth application
  - `clientSecret` is the "Secret" from the GitLab OAuth application
