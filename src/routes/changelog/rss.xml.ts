import Turndown from "turndown";

export const get: import("@sveltejs/kit").RequestHandler = ({ context }) => {
  const turndownService = new Turndown();
  const ttlInMin = 60;
  const rssDocument = `<?xml version="1.0"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
   <title>RSS Title</title>
   <description>This is an example of an RSS feed</description>
   <link>http://www.example.com/main.html</link>
   <copyright>2020 Example.com All rights reserved</copyright>
   <lastBuildDate>Mon, 06 Sep 2010 00:01:00 +0000 </lastBuildDate>
   <pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>
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
      <guid isPermaLink="false">7bd204c6-1655-4c27-aeee-53f933c5395f</guid>
      <description>${turndownService.turndown(entry.content)}</description>
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
