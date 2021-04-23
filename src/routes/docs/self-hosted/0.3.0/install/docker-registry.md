---
section: self-hosted/0.3.0/self-hosted
title: Docker Registry
---

<script context="module">
  export const prerender = true;
</script>

# Docker Registry

Gitpod uses a Docker registry to push the workspace images it builds.
This helm chart can either deploy its own registry (default but requires [HTTPS certs](./https-certs)) or use an existing one.
To connect to an existing Docker registry, do the following steps:

```
echo values/registry.yaml >> configuration.txt
```

In `values/registry.yaml` replace `your.registry.com` with the name of your registry.

Login to the registry and safe the authentication

```
docker --config secrets/ login your.registry.com && mv secrets/config.json secrets/registry-auth.json
```

Make sure the resulting JSON file contains the credentials (there should be an `auth` section containing them as base64 encoded string).

If that's not the case you might have a credential store/helper set up (e.g. on macOS the _Securely store Docker logins in macOS keychain_ setting).
