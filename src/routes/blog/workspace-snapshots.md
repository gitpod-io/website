---
author: svenefftinge
date: Wed Nov 21 2018 13:34:27 GMT+0000 (UTC)
excerpt: Whenever you want to share a reproducible example on StackOverflow or an issue report, providing real code that can be quickly tried
image: workspace-snapshots.jpeg
slug: workspace-snapshots
subtitle: Code never lies
title: Creating reproducibles for any programming language
url: https://medium.com/gitpod/code-never-lies-creating-reproducibles-for-any-programming-language-7946021a68f2
---

<script context="module">
  export const prerender = true;
</script>

Whenever you want to share a reproducible example on StackOverflow or an issue report, providing real code that can be quickly tried, executed and explored is the best you can do. Online code playgrounds, such as CodePen or JSFiddle, are an excellent way to do that, as they are very accessible for both the creator and the readers. Unfortunately, they are not available for every programming platform, language and often don’t work for larger projects or examples.

In this post I’d like to introduce you to a new feature in [Gitpod](https://gitpod.io), that lets you create reproducible examples for any programming environment and any size of project.

## New in Gitpod: Snapshots

No matter what state your Gitpod workspace is in, taking a Snapshot captures everything and provides you a link to share anywhere: on issues, forums (StackOverflow), emails and blogs. Anybody who clicks on a snapshot link instantly gets an exact copy of that workspace, including any uncommitted file changes and the UI layout.

Let’s go through an example.

### Spring Boot Example

I went over to **spring-boot** and picked the first issue in the list:
[**Bean overriding in spring boot 2.1 · Issue #15326 · spring-projects/spring-boot**
*I have an issue with bean overriding with spring boot 2.1.0 I have a main application class that we use in…*github.com](https://github.com/spring-projects/spring-boot/issues/15326)

The issue has a detailed description on how to reproduce the problem. It even has a link to a GitHub repository containing the code! So the author did a lot to make it easy for the maintainers to reproduce the issue and figure out what’s wrong.

However, instead of laying out the steps in prose, an automated solution would be much better. A snapshot would have reduced this to a single click for the maintainers, and the author wouldn’t have to write a lengthy explanation.

### Take a Snapshot

Before we are taking the snapshot, we want to make sure everything is in the state we want it to be. So the maintainers get pointed to the culprit immediately. For this example I made sure

- the build ran through,

- the right editors are opened
  (I choose to open the two files mentioned in the issue in split mode),

- the sample application is started automatically

Taking care of the first two items is easy. For the third, you need to add a **_.gitpod.yml_** to the root of the project containing the tasks you want to start.

In the case of this project I added a task to start the failing Java process:

```
tasks:
    - command: >
    mvn -q exec:exec \
        -Dexec.executable=java \
        -Dexec.args=”-cp %classpath com.example.beanoverriding.EmbeddedApplication” \
        -Dexec.classpathScope=”test”
```

> Btw. to figure out how to start that damn thing using Maven, I had to ask the community on StackOverflow. Of course, by providing a Gitpod Snapshot :-)
> [**Run main from test scope in Maven: "The parameters 'mainClass' for goal…** > *Thanks for contributing an answer to Stack Overflow! Some of your past answers have not been well-received, and you're…*stackoverflow.com](https://stackoverflow.com/questions/53536751/run-main-from-test-scope-in-maven-the-parameters-mainclass-for-goal-org-code)

With the **.gitpod.yml **configured and the editors and views laid out as needed, we are ready to take a snapshot. Simply click on the avatar on the top right:

![Gitpod menu share workspace snapshot](https://cdn-images-1.medium.com/max/2212/1*nOXkwor5kPsdJb-o2oHy4w.png)

Pick “Share Workspace Snapshot” and copy and share the link or one of the snippets in the opened dialog:

![Gitpod workspace snapshot prompt](https://cdn-images-1.medium.com/max/4348/1*2aDOY4sHSyefz2uepzGskw.png)

Here’s the snapshot link for you to try:
[https://gitpod.io/#snapshot/f7f5954a-250b-4113-909c-aae88b64321c](https://gitpod.io/#snapshot/f7f5954a-250b-4113-909c-aae88b64321c)

## Summary

Gitpod Snapshots are a very convenient way to create and consume large and small examples for any programming language and platform. Make sure to check out the [documentation](https://docs.gitpod.io), which goes into more detail on the options available.

We think snapshots are not only great for reproducing issues or showing solutions and examples, but very useful in other situations. Preparing workshops and tutorials should be super convenient with snapshots, as it will free your audience from any tedious setup procedures. We are looking forward to learning about all the creative ways you will put this feature to use. Please [let us know](https://github.com/gitpod-io/gitpod) and have fun!
