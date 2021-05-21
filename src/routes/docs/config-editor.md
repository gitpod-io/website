---
section: configuration
title: Editor Configuration
---

<script context="module">
  export const prerender = true;
</script>

# Editor Configuration

Gitpod uses [Theia](https://github.com/eclipse-theia/theia) as its IDE which can be configured using VS Code setting files.

Workspace settings are stored in a file within your project. They can reside either in:

- `$GITPOD_REPO_ROOT/.theia/settings.json` or
- `$GITPOD_REPO_ROOT/.vscode/settings.json`

User settings override workspace settings and can be configured through the preferences editor, which you can open through the menu (`File -> Preferences`).

The available properties and their possible values are proposed in the editor and are the same as in VS Code.

<h2>Example Configuration</h2>

File `settings.json` follows JSON syntax as follows:

```json
{
  // Comment
  "component.configuration": "value",
  "[language]": {
    "component.configuration": "value"
  }
}
```

Example of this configuration:

```json
{
  // To show invisibles
  "editor.renderWhitespace": "all",
  // Enable wordWrap for markdown files
  "[markdown]": {
    "editor.wordWrap": "on"
  }
}
```
