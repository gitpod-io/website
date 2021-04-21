---
section: self-hosted/0.3.0/self-hosted
---

<script context="module">
  export const prerender = true;
</script>

# HTTPS certificates

Gitpod needs HTTPS certificates, your own Docker registry, or both to function properly. If you don't have certificates, but a Docker registry available, jump to the [next step](./docker-registry).

> Important: The HTTPS certificates for your domain must include `your-domain.com`, `*.your-domain.com` and `*.ws.your-domain.com`. Beware that wildcard certificates are valid for one level only (i.e. `*.a.com` is not valid for `c.b.a.com`).

To use the HTTPS certificates for your domain

- `echo values/https.yaml >> configuration.txt`
- place your certificates in `secrets/https-certificates/` like so:

```
 secrets/https-certificates:
  |- cert.pem
  |- chain.pem
  |- fullchain.pem
  |- privkey.pem
```

Generate the [dhparams.pem](https://security.stackexchange.com/questions/94390/whats-the-purpose-of-dh-parameters) file using

```
openssl dhparam -out secrets/https-certificates/dhparams.pem 2048
```

## Using Let's Encrypt

If you do not have HTTPS certificates for your domain already, you can generate some using [Let's Encrypt](https://medium.com/@saurabh6790/generate-wildcard-ssl-certificate-using-lets-encrypt-certbot-273e432794d7).
Asuming you have `certbot` installed, the following script will generate and configure the required certificates (notice the placeholders):

```bash
export DOMAIN=your-domain.cm
export EMAIL=your@email.here
export WORKDIR=/workspace/letsencrypt

certbot certonly \
    --config-dir $WORKDIR/config \
    --work-dir $WORKDIR/work \
    --logs-dir $WORKDIR/logs \
    --manual \
    --preferred-challenges=dns \
    --email $EMAIL \
    --server https://acme-v02.api.letsencrypt.org/directory \
    --agree-tos \
    -d *.ws.$DOMAIN \
    -d *.$DOMAIN \
    -d $DOMAIN

# move them into place
mkdir secrets/https-certificates
find $WORKDIR/config/live -name "*.pem" -exec cp {} secrets/https-certificates \;

# Generate dhparams
openssl dhparam -out secrets/https-certificates/dhparams.pem 2048

# Enable HTTPS
echo values/https.yaml >> configuration.txt
```
