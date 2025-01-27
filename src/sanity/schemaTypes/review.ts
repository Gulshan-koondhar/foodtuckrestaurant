export default {
  name: "review",
  type: "document",
  title: "Review",
  fields: [
    { name: "foodName", type: "string", title: "Food Name" },
    { name: "name", type: "string", title: "Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "review", type: "text", title: "Review" },
    {
      name: "rating",
      type: "number",
      title: "Rating - 0 to 5",
    },
  ],
};
