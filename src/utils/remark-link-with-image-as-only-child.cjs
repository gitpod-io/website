const visit = require("unist-util-visit");

const visitor = (node) => {
  node.data = node.data || {};
  node.data.hProperties = node.data.hProperties || {};
  if (node.type === "link") {
    if (node.children && node.children.length && node.children.length === 1) {
      if (node.children[0].type === "image") {
        node.data.hProperties.class = "link-with-image-as-only-child";
      }
    }
  }
};

module.exports = () => async (tree, vFile) => {
  if (
    vFile.filename.indexOf("src/routes/docs/") > 0 ||
    vFile.filename.indexOf("src/routes/blog/") > 0
  ) {
    visit(tree, visitor);
  }
  return tree;
};
