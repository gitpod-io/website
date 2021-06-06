export const get: import("@sveltejs/kit").RequestHandler = ({ context }) => {
  const ttlInMin = 60;
  const rssDocument = `<?xml version="1.0"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
   <title>Gitpod Changelog</title>
   <description>New features and improvements to Gitpod.</description>
   <link>https://www.gitpod.io/changelog</link>
   <copyright>${new Date().getFullYear()} Gitpod GmbH. All rights reserved</copyright>
   <lastBuildDate>${new Date(
     context.changelogEntries[0].date
   ).toUTCString()}</lastBuildDate>
   <pubDate>${new Date(
     context.changelogEntries[0].date
   ).toUTCString()}</pubDate>
   <ttl>${ttlInMin}</ttl>
   <atom:link href="https://www.gitpod.io/changelog/rss.xml" rel="self" type="application/rss+xml" />
   ${context.changelogEntries.map(
     (entry) => `<item>
      <title>${new Date(Date.parse(entry.date)).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}</title>
      <link>https://www.gitpod.io/changelog</link>
      <pubDate>${new Date(Date.parse(entry.date)).toUTCString()}</pubDate>
      <description><![CDATA['${entry.content.replace(
        /src="\//g,
        'src="https://www.gitpod.io/'
      )}']]></description>
    </item>`
   )}
  </channel>
</rss>`;
  return {
    body: rssDocument,
    headers: {
      "Cache-Control": `max-age=0, s-max-age=${ttlInMin * 60}`,
      "Content-Type": "application/rss+xml",
    },
  };
};
