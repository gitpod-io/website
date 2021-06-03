const visit = require("unist-util-visit");

const youtubeEmbedRegex = new RegExp(`\(youtube\):\(\.\*\)`, "i");

const embedVideoHtml = (videoId, options) => `
<span class="video-container"><iframe
  title="${options.title ? options.title : "Youtube Video"}"
  width="${options.width}"
  height="${options.height}"
  src="https://www.youtube.com/embed/${videoId}?rel=0"
  class="embedVideo-iframe"
  ${options.noIframeBorder ? 'style="border:0"' : ""}
  allowfullscreen
  sandbox="allow-same-origin allow-scripts allow-popups">
</iframe></span>`;

const visitor = (options) => (node) => {
  if (node.type === "inlineCode") {
    const regexResult = node.value.match(youtubeEmbedRegex);
    if (regexResult) {
      node.type = "html";
      node.value = embedVideoHtml(regexResult[2].trim(), options);
    }
  }
};

module.exports = (options) => (tree) => {
  visit(tree, visitor(options));
  return tree;
};
