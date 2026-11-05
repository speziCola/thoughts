function visit(node, callback) {
  callback(node);

  for (const child of node.children ?? []) {
    visit(child, callback);
  }
}

function isElement(node, tagName) {
  return node?.type === "element" && node.tagName === tagName;
}

function toFigure(image, imageIndex) {
  const properties = image.properties ?? {};
  const title = typeof properties.title === "string" ? properties.title : "";
  const separator = title.indexOf(": ");
  const label = separator > 0 ? title.slice(0, separator) : "";
  const caption = separator > 0 ? title.slice(separator + 2) : title;

  delete properties.title;
  properties.loading = imageIndex === 0 ? "eager" : "lazy";
  properties.decoding = "async";

  const captionChildren = [];
  if (caption) {
    captionChildren.push({
      type: "element",
      tagName: "span",
      properties: { className: ["blog-figure__caption-text"] },
      children: [{ type: "text", value: caption }],
    });
  }
  if (label) {
    captionChildren.push({
      type: "element",
      tagName: "span",
      properties: { className: ["blog-figure__label"] },
      children: [{ type: "text", value: label }],
    });
  }

  const children = [
    {
      type: "element",
      tagName: "div",
      properties: { className: ["blog-figure__media"] },
      children: [image],
    },
  ];

  if (captionChildren.length) {
    children.push({
      type: "element",
      tagName: "figcaption",
      properties: { className: ["blog-figure__caption"] },
      children: captionChildren,
    });
  }

  return {
    type: "element",
    tagName: "figure",
    properties: { className: ["blog-figure"] },
    children,
  };
}

function transformImages(parent, imageState) {
  if (!Array.isArray(parent.children)) {
    return;
  }

  const children = [];
  for (const child of parent.children) {
    if (isElement(child, "p")) {
      const visibleChildren = child.children.filter(
        (node) => node.type !== "text" || node.value.trim() !== "",
      );
      const images = visibleChildren.filter((node) => isElement(node, "img"));

      if (images.length > 0 && images.length === visibleChildren.length) {
        const figures = images.map((image) =>
          toFigure(image, imageState.count++),
        );

        children.push(
          figures.length === 1
            ? figures[0]
            : {
                type: "element",
                tagName: "div",
                properties: { className: ["blog-image-row"] },
                children: figures,
              },
        );
        continue;
      }
    }

    transformImages(child, imageState);
    children.push(child);
  }

  parent.children = children;
}

export default function rehypeBlogRegistry() {
  return (tree, file) => {
    let titleCount = 0;
    visit(tree, (node) => {
      if (isElement(node, "h1")) {
        titleCount += 1;
      }
    });

    if (titleCount !== 1) {
      file.fail(
        `Article body must contain exactly one H1 heading (#); found ${titleCount}.`,
        tree.position?.start,
        "blog:title",
      );
    }

    transformImages(tree, { count: 0 });
  };
}
