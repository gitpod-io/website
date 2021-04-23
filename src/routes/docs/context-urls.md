---
section: workspaces
title: Context URLs
---

<script context="module">
  export const prerender = true;
</script>

# Context URLs

- [Repository Context](#repository-context)
- [Branch Context](#branch-context)
- [Pull/Merge Request Context](#pull-merge-request-context)
- [Issue Context](#issue-context)
- [File Context](#file-context)

Gitpod derives the workspace context from the URL of the repository page from which it was
started. Different issues, pull/merge requests, or branches will result in different workspaces, allowing
developers to easily perform different tasks in different isolated environments.

![prefix github URL](../../../static/images/docs/prefix-screenshot.png)

Each workspace includes a full Linux container. From the IDE's terminal, the user can directly
access all development tools of the Linux system and even install missing ones.

In the following we describe the supported contexts and what they do:

## Repository Context

When you create a Gitpod workspace from the project's base URL (i.e. the repository URL),
Gitpod will clone this repository, check out the default branch, and open the `README.md` if it exists.

An example URL for the repository context is:

```
gitpod.io/#https://gitlab.com/gitpod/spring-petclinic
```

## Branch Context

You can also create a Gitpod workspace for a specific branch in a repository. This is similar to the repository context, except that Gitpod will automatically check out the requested branch instead of the repository's default branch.

An example URL for the branch context is:

```
gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/-/tree/my-branch
```

Note that this also works with specific commit SHAs:

```
gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/-/commit/426b99d57ce511022eb71a60bff8e0764806ddf5
```

## Pull/Merge Request Context

Starting workspaces from a Pull Request or Merge Request will clone the respective branch, and show the file
changes of the PR/MR in a view on the left. The first change is opened in the diff editor.
Also the `Pull Request` view on the right is configured to reflect the PR/MR information.

```
gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/-/merge_requests/1
```

This context is meant for code reviews, or to take action on feedback you got from a reviewer.

## Issue Context

When starting a workspace from an issue, a local branch suffixed with `-{issue-number}` will be
created, based on the repository's default branch. (In most cases that will be `origin/master`.)

In addition, the commit message is preconfigured with:

```
fixes #{organization}/{repo}#{issue-number}
```

This will automatically close the issue once such a commit is merged into the default branch.

As soon as changes have been committed locally, the `Pull Request` view on the right can be used to
push changes to a remote repository and create a pull request.

## File Context

The file context is an extension to the repository context, in that Gitpod will check out the
corresponding branch and open the respective file in an editor.

An example for this context is:

```
gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/-/blob/master/src/main/java/org/springframework/samples/petclinic/owner/Pet.java
```

When pointing to a directory, e.g.

```
gitpod.io/#https://gitlab.com/gitpod/spring-petclinic/-/blob/master/src/main/java/org/springframework/samples/petclinic
```

`README.md` will be opened if it exists there.

## See Also

- [Passing environment variables via the context URL](/docs/environment-variables#passing-in-environment-variables)
- [Triggering a prebuild using a special context URL](/docs/prebuilds#manual-execution-of-prebuild)
