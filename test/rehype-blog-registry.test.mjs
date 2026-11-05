import assert from "node:assert/strict";
import test from "node:test";
import rehypeBlogRegistry from "../src/lib/rehype-blog-registry.mjs";

const transform = rehypeBlogRegistry();

function run(tree) {
  const file = {
    fail(message, _position, origin) {
      throw new Error(`${origin}: ${message}`);
    },
  };

  transform(tree, file);
}

function heading() {
  return {
    type: "element",
    tagName: "h1",
    properties: {},
    children: [{ type: "text", value: "Article title" }],
  };
}

function image(src, title) {
  return {
    type: "element",
    tagName: "img",
    properties: { src, alt: "Prototype screenshot", title },
    children: [],
  };
}

test("requires exactly one H1 in the article body", () => {
  assert.throws(() => run({ type: "root", children: [] }), /found 0/);
  assert.throws(
    () => run({ type: "root", children: [heading(), heading()] }),
    /found 2/,
  );
});

test("maps adjacent titled images to a responsive figure row", () => {
  const tree = {
    type: "root",
    children: [
      heading(),
      {
        type: "element",
        tagName: "p",
        properties: {},
        children: [
          image("low.png", "Low fidelity: Workflow overview."),
          image("high.png", "High fidelity: Detailed interface."),
        ],
      },
    ],
  };

  run(tree);

  const row = tree.children[1];
  assert.deepEqual(row.properties.className, ["blog-image-row"]);
  assert.equal(row.children.length, 2);
  assert.equal(row.children[0].tagName, "figure");
  assert.equal(row.children[0].children[0].children[0].properties.loading, "eager");
  assert.equal(row.children[1].children[0].children[0].properties.loading, "lazy");
  assert.equal(
    row.children[1].children[1].children[0].children[0].value,
    "Detailed interface.",
  );
  assert.equal(
    row.children[1].children[1].children[1].children[0].value,
    "High fidelity",
  );
});
