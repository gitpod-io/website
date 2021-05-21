/** @type {import('@sveltejs/kit').GetSession} */
export const getSession: import("@sveltejs/kit").GetSession = async () => {
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

  return {
    posts,
  };
};

/** @type {import('@sveltejs/kit').Handle} */
export const handle: import("@sveltejs/kit").Handle = async ({
  request,
  render,
}) => {
  const response = await render(request);

  return {
    ...response,
    headers: {
      ...response.headers,
      "Set-Cookie": "gitpod-user=loggedIn; Domain=.gitpod.io; Path=/",
    },
  };
};
