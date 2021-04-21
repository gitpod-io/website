---
section: changelog
---

<script context="module">
  export const prerender = true;
</script>

# Changelog

A curated, chronologically ordered list of notable changes in [gitpod.io](https://www.gitpod.io/).

## 2020-06-03

- [theia] Allow adding Gitpod to homescreen on iOS/iPad to get a fullscreen app experience [eclipse-theia/theia#7607](https://github.com/eclipse-theia/theia/issues/7607)
- [theia] Upgrade Theia IDE to [v1.2.0](https://github.com/eclipse-theia/theia/blob/master/CHANGELOG.md#v120)
- [theia] Upgrade built-in VS Code extensions for JS, TypeScript, Python, Rust, C++, Go, Java, Ruby, PHP, C#, F#, Swift, Objective-C, Clojure, Lua, PowerShell, SQL, Yaml, XML, EditorConfig, and refresh themes
- [theia] New Preferences UI [eclipse-theia/theia#7105](https://github.com/eclipse-theia/theia/pull/7105)
- [theia] Improve Git view, add Tree View mode [eclipse-theia/theia#7505](https://github.com/eclipse-theia/theia/pull/7505)
- [theia] Improve and expand VS Code extension support
- [theia] Add dedicated 'Workspace' menu in IDE top menu bar
- [theia] Fix various keybindings and focus handling issues
- [backend] Harden workspace initialization and backup in out-of-the-ordinary situations
- [backend] Also garbage-collect expired workspaces in error state
- [backend] Increase maximum workspace size from 20 GiB → 30 GiB
- Improve Team Subscriptions: Add dedicated [My Teams](https://gitpod.io/teams/) menu item, fix dialogs and invite links, clarify descriptions
- Improve IDE Setup Assistant and auto-detect [more tools](https://github.com/gitpod-io/gitpod-yml-inferrer/compare/5710153c...2212efac)
- Bump Node.js version following a [security alert](https://twitter.com/liran_tal/status/1267519052731289600): [gitpod-io/workspace-images#243](https://github.com/gitpod-io/workspace-images/pull/243)

## 2020-06-02

- Upgrade all Go tools to get the latest `gopls`, remove broken `golangci-lint` [gitpod-io/workspace-images#237](https://github.com/gitpod-io/workspace-images/pull/237)
- Make Python 3 the default `python` version (use `pyenv local 2.7.17` to go back to Python 2) [gitpod-io/workspace-images#214](https://github.com/gitpod-io/workspace-images/pull/214)

## 2020-05-14

- Support Amazon Linux based workspace images (thanks @Kreyren!), fixes [gitpod-io/gitpod#1490](https://github.com/gitpod-io/gitpod/issues/1490)
- [theia] Measure first time connection for IDE websocket
- [theia] Improve & optimize IDE diff view, remove a `O(n^2)` diff computation
- [theia] Load IDE faster by defering & batching VSCode extensions initialization: [eclipse-theia/theia#7676](https://github.com/eclipse-theia/theia/pull/7676)
- [theia] Switch PHP language support from `felixfbecker.php-intellisense` → `bmewburn.vscode-intelephense-client`: Faster & cached indexing, better support for Symfony projects
- [gitlab] Fix GitLab permission check, fixes [gitpod-io/gitpod#1464](https://github.com/gitpod-io/gitpod/issues/1464)
- [workspaces-list] UX: Only show search/filter when relevant, make GC message dismissable, start workspaces in a new tab
- [backend] Monitor Go service metrics with a new dashboard
- [backend] Optimize Gitpod database with multiple indexes
- [backend] Increase maximum allowed workspace startup time from 30min → 60 min (for big projects), fixes [community/cannot-open-a-new-workspace-for-libreoffice](https://community.gitpod.io/t/cannot-open-a-new-workspace-for-libreoffice/1237)

## 2020-05-12

- Downgrade Ruby `2.7.1` → `2.6.6` (because Solargraph doesn't support latest Bundler `2.1.4` yet) [gitpod-io/workspace-images/e9281a20](https://github.com/gitpod-io/workspace-images/commit/e9281a207c4c6b4c7df2e91e9ec81f36ed0652ae)

## 2020-05-08

- Upgrade to Rust `1.43.1` [gitpod-io/workspace-images#230](https://github.com/gitpod-io/workspace-images/pull/230)
- Fix the persistence of Ruby gems in `/workspace/.rvm` with a custom `.rvmrc` [gitpod-io/workspace-images#223](https://github.com/gitpod-io/workspace-images/pull/223)
- Upgrade RVM's Ruby from `2.5` → `2.5.8` and `2.6` → `2.7.1` [gitpod-io/workspace-images#213](https://github.com/gitpod-io/workspace-images/pull/213)

## 2020-05-02

- Fix Ubuntu 20.04 based `gitpod/workspace-dotnet` and `gitpod/workspace-dotnet-vnc` images by installing .NET Core SDK 3.1 binaries [gitpod-io/workspace-images#218](https://github.com/gitpod-io/workspace-images/pull/218)

## 2020-04-29

- Best practice: Don't stay as `USER root` in `gitpod/workspace-full-vnc` [gitpod-io/workspace-images#215](https://github.com/gitpod-io/workspace-images/pull/215)
- Add bash auto-completion for `cargo` [gitpod-io/workspace-images#216](https://github.com/gitpod-io/workspace-images/pull/216)

## 2020-04-22

- [theia] Upgrade Theia v0.17.0 → [v1.1.0](https://github.com/eclipse-theia/theia/blob/master/CHANGELOG.md#v110)
- [theia] Upgrade monaco-languageclient and monaco-editor-core
- [theia] Get all built-in VS Code extensions from [Open VSX](https://open-vsx.org)
- [backend] Better handle excessive resource usage in workspaces (CPU, network, disk) and implement a fair use policy
- [backend] Implement garbage collection for prebuilt workspace snapshots that are unused for more than 7 days
- Overhaul and improve GitHub/GitLab login code

## 2020-04-21

- Upgrade Pyenv's Python from 3.7.7 → 3.8.2 [gitpod-io/workspace-images#212](https://github.com/gitpod-io/workspace-images/pull/212)
- Drop support of .NET 2.2 in `gitpod/workspace-dotnet*`, because it reached [End-Of-Life](https://dotnet.microsoft.com/platform/support/policy/dotnet-core) on 2019-12-23

## 2020-04-17

- Fix `gitpod/workspace-postgres` image and pin to PostgreSQL version 12 [gitpod-io/workspace-images#209](https://github.com/gitpod-io/workspace-images/pull/209)
- Upgrade Rust 1.41.1 → 1.42.0 [gitpod-io/workspace-images#207](https://github.com/gitpod-io/workspace-images/pull/207)
- Fix `gitpod/workspace-mysql` image by updating `mysql.cnf` for MySQL 8, fixes [gitpod-io/gitpod#1399](https://github.com/gitpod-io/gitpod/issues/1399)

## 2020-04-15

- Upgrade from Ubuntu 19.04 → Ubuntu 20.04 LTS, because 19.04 reached end-of-life and all its apt packages got deleted [gitpod-io/gitpod#1398](https://github.com/gitpod-io/gitpod/issues/1398)
- Upgrade Java 11.0.5.fx-zulu → 11.0.6.fx-zulu

## 2020-04-09

- [backend] Merge the 'asia-east1' cluster with the 'us-west1' cluster
- [backend] Increase workspace garbage collection courtesy retention from 7 days → 21 days

## 2020-04-08

- [backend] Rebuild workspace base image when it's missing, fixes [gitpod-io/gitpod#1329](https://github.com/gitpod-io/gitpod/issues/1329)
- [backend] Make multiple services more resilient in case of degraded network conditions
- [backend] Improve workspace start-up time monitoring
- [theia] Fix 'Open Workspaces' and 'Open Access Control' avatar menu links getting blocked as pop-ups
- Fix extended & boostable timeouts for Student Unlimited plans, fixes [community/boosting-timeouts-in-gitpod](https://community.gitpod.io/t/boosting-timeouts-in-gitpod/1114)

## 2020-04-06

- Make noVNC (virtual desktop) automatically reconnect if the connection is dropped, and enable noVNC toolbar [gitpod-io/workspace-images#170](https://github.com/gitpod-io/workspace-images/pull/170)

## 2020-03-31

- [theia] Fix opening GitHub/GitLab file URLs in Gitpod
- Don't use no-reply@ and show proper sender name in transactional emails

## 2020-03-30

- [backend] Move Gitpod prebuilds to a dedicated headless nodepool, fixes [gitpod-io/gitpod#1328](https://github.com/gitpod-io/gitpod/issues/1328)
- [backend] Harmonise and pin Kubernetes version to 1.15
- [backend] Make workspaces more resilient to DiskPressure/MemoryPressure
- [backend] Make workspace scheduling more efficient and robust
- [backend] Better report errors when workspaces fail or get unknown phase
- [workspaces-list] Add hover tooltips to buttons in the workspaces list
- [theia] Upgrade Theia to run Node.js Debug Adapter with Theia's built-in node
- [theia] Upgrade Java extensions
- [theia] Share workspace immediately when opening share workspace dialog, fixes [gitpod-io/gitpod#665](https://github.com/gitpod-io/gitpod/issues/665)
- [theia] Redeploy plugins on disconnection to backend, fixes [gitpod-io/gitpod#1291](https://github.com/gitpod-io/gitpod/issues/1291)
- [gitlab] Fix link in private repository access view for GitLab
- [gitlab] Allow to open empty GitLab repos, fixes [gitpod-io/gitpod#1014](https://github.com/gitpod-io/gitpod/issues/1014)
- [gitlab] Add retry for user profile fetching, fixes [gitpod-io/gitpod#1275 (comment)](https://github.com/gitpod-io/gitpod/issues/1275#issuecomment-599157231)
- [gp-cli] Handle `gp preview 127.0.0.1`
- [gp-cli] Fix `gp url` without arguments, fixes [gitpod-io/gitpod#1333](https://github.com/gitpod-io/gitpod/issues/1333)
- Implement SendGrid to allow sending transactional emails (e.g. when your subscription is about to expire)
- Handle duplicate ports in `.gitpod.yml` more gracefully
- Upgrade Node.js from v10 → v12 LTS (to pin a specific version, see [this workaround](https://github.com/gitpod-io/workspace-images/pull/178#issuecomment-602465333))

<br><br>

---

Inspired by [keepachangelog.com](https://keepachangelog.com/).
