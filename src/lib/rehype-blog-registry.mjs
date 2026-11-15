function visit(node, callback) {
  callback(node);

  for (const child of node.children ?? []) {
    visit(child, callback);
  }
}

function isElement(node, tagName) {
  return node?.type === "element" && node.tagName === tagName;
}

function isNoteParagraph(node) {
  if (!isElement(node, "p")) {
    return false;
  }

  const content = (node.children ?? []).filter(
    (child) => child.type !== "text" || child.value.trim() !== "",
  );
  return content.length === 1 && isElement(content[0], "em");
}

function getLinkedImage(node) {
  if (isElement(node, "img")) {
    return { image: node };
  }

  if (!isElement(node, "a")) {
    return undefined;
  }

  const content = (node.children ?? []).filter(
    (child) => child.type !== "text" || child.value.trim() !== "",
  );
  if (content.length !== 1 || !isElement(content[0], "img")) {
    return undefined;
  }

  return { image: content[0], linkProperties: node.properties ?? {} };
}

function toFigure(image, imageIndex, linkProperties) {
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

  const imageContent = linkProperties
    ? {
        type: "element",
        tagName: "a",
        properties: linkProperties,
        children: [image],
      }
    : image;
  const children = [
    {
      type: "element",
      tagName: "div",
      properties: { className: ["blog-figure__media"] },
      children: [imageContent],
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
      const images = visibleChildren.map(getLinkedImage);

      if (images.length > 0 && images.every(Boolean)) {
        const figures = images.map((image) =>
          toFigure(image.image, imageState.count++, image.linkProperties),
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

      if (isNoteParagraph(node)) {
        const classNames = node.properties?.className;
        node.properties ??= {};
        node.properties.className = [
          ...(Array.isArray(classNames)
            ? classNames
            : classNames
              ? [classNames]
              : []),
          "blog-note",
        ];
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
