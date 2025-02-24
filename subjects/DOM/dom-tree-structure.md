# DOM Tree Structure

The DOM (Document Object Model) is a tree-like representation of an HTML document. It provides a structured way to interact with the content and elements of a webpage using JavaScript. Each element, attribute, and even text in the HTML is represented as a **node** in the DOM tree.

## Key Concepts

### **Nodes**
- Everything in the DOM is a node. This includes:
  - **Elements**: Represent HTML tags (e.g., `<p>`, `<div>`).
  - **Text**: The text content inside an element.
  - **Comments**: HTML comments (`<!-- comment -->`).
  - **Attributes**: Attributes of HTML elements (e.g., `class`, `id`).

### **Elements**
- Elements are a type of node that represent HTML tags. For example:
  - `<p>` is an element node.
  - `<div>` is an element node.
- Elements can contain other elements, text, or both.

### **Document**
- The **document** is the root node of the DOM tree. It represents the entire HTML document and serves as the entry point for accessing all other nodes.

### **Child and Parent Nodes**
- **Parent Nodes**: An element that contains other elements is called a parent node. For example, in `<div><p>Hello</p></div>`, the `<div>` is the parent of the `<p>`.
- **Child Nodes**: Elements or text inside another element are called child nodes. In the example above, the `<p>` is the child of the `<div>`.
- **Sibling Nodes**: Elements that share the same parent are called siblings. For example, in `<div><p>Hello</p><p>World</p></div>`, the two `<p>` elements are siblings.