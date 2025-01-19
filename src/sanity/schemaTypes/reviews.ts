export default {
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }], // Ensure you have a 'product' schema
    },
  ],
};
