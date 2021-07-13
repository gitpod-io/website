export const getContext: import("@sveltejs/kit").GetContext = async () => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/blog/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  const changelogEntries = await Promise.all(
    Object.entries(import.meta.glob("/src/contents/changelog/*.md")).map(
      async ([, mod]) => {
        const { default: content, metadata } = await mod();
        return {
          ...metadata,
          content: content.render().html,
        };
      }
    )
  );
  changelogEntries.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return {
    changelogEntries,
    posts,
  };
};

export const getSession: import("@sveltejs/kit").GetSession = async ({
  context,
}) => {
  return {
    changelogEntries: context.changelogEntries,
    posts: context.posts,
  };
};

export const handle: import("@sveltejs/kit").Handle = async ({
  request,
  render,
}) => {
  if (request.path !== "/" && request.path.endsWith("/")) {
    // Fix for https://github.com/gitpod-io/website/issues/552 until we
    // upgrade SvelteKit to at least 1.0.0-next.105
    request.path = request.path.substring(0, request.path.length - 1);
  }
  const response = await render(request);

  return {
    ...response,
    headers: {
      ...response.headers,
      "Set-Cookie": "gitpod-user=loggedIn; Domain=.gitpod.io; Path=/",
    },
  };
};
