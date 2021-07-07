---
section: references
title: PHP in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# PHP in Gitpod

Gitpod supports PHP right out of the box, but more advanced features such as debugging can be configured, so here is how to do it!

## Example Repositories

<div class="table-container">

| Repository                                                         | Description                                                                    | Try it                                                                                                                                |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| [symfony-demo](https://github.com/gitpod-io/symfony-demo)          | A PHP/Symfony reference application following best practices                   | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/symfony-demo)        |
| [magento2gitpod](https://github.com/nemke82/magento2gitpod)        | Magento 2 optimized setup for Gitpod: Nginx, MySQL, PHP 7.2, PHP-FPM and more  | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/nemke82/magento2gitpod)        |
| [koel](https://github.com/phanan/koel)                             | A personal music streaming server that works                                   | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/phanan/koel)                   |
| [drupal](https://github.com/bserem/gitpod-drupal-mysql-starterkit) | Drupal 9 with MySQL, suitable for site building and contrib module development | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/bserem/gitpod-drupal-mysql-starterkit) |

</div>

## Debugging PHP in Gitpod

![PHP debugging example](.../../../static/images/docs/phpDebug.gif)

The PHP Debug extension allows debugging PHP applications from within Gitpod.

To get this extension for your project, you must do two things:

First, you must create a [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker) for your repository:

```dockerfile
FROM gitpod/workspace-full

RUN sudo apt-get update -q \
    && sudo apt-get install -y php-dev

RUN wget http://xdebug.org/files/xdebug-2.9.1.tgz \
    && tar -xvzf xdebug-2.9.1.tgz \
    && cd xdebug-2.9.1 \
    && phpize \
    && ./configure \
    && make \
    && sudo mkdir -p /usr/lib/php/20190902 \
    && sudo cp modules/xdebug.so /usr/lib/php/20190902 \
    && sudo bash -c "echo -e '\nzend_extension = /usr/lib/php/20190902/xdebug.so\n[XDebug]\nxdebug.remote_enable = 1\nxdebug.remote_autostart = 1\n' >> /etc/php/7.4/cli/php.ini"
```

Second, reference the above Dockerfile in a [.gitpod.yml](/docs/config-gitpod-file) file, and then also install the extension, like so:

```yaml
image:
  file: .gitpod.Dockerfile
# This is to get rid of the annoying popup feel free to leave this out
ports:
  - port: 9000
    onOpen: ignore
vscode:
  extensions:
    - felixfbecker.php-debug@1.13.0:WX8Y3EpQk3zgahy41yJtNQ==
```

Next create a new directory called `.theia` and in that directory add a file called `launch.json` and add the following content.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "php",
      "name": "Launch",
      "request": "launch",
      "stopOnEntry": true,
      "program": "${file}",
      "cwd": "${workspaceRoot}",
      "externalConsole": false
    }
  ]
}
```

Then have fun debugging PHP

Finally, here is a full [example repository](https://github.com/JesterOrNot/Gitpod-PHP-Debug) containing the complete Gitpod PHP debug configuration described above. You can try it by clicking here:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Gitpod-PHP-Debug)

## PECL Package Manager

Gitpod's default workspace image also comes with the [PECL](https://pecl.php.net/) package manager pre-installed. To install packages with it, you must use `sudo pecl install <EXTENSION>` in your repository's [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker), e.g. like so:

```dockerfile
FROM gitpod/workspace-full

RUN sudo pecl channel-update pecl.php.net && \
    sudo pecl install <EXTENSION>
```

where `<EXTENSION>` is the PHP extension you want to install, e.g. `xdebug`.

## Further Reading

- <a class="no-nowrap" href="https://notes.etin.space/posts/gitpodifying-a-new-laravel-application">Gitpodifying a new Laravel Application</a> by Etin Obaseki
