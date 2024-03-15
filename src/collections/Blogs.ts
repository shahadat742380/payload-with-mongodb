import { CollectionConfig } from "payload/types";

const Blogs: CollectionConfig = {
  slug: "blogs",
  // auth: true,
  // admin: {
  //   useAsTitle: 'email',
  // },
  fields: [
    {
      name: "author",
      type: "text",
      required: true
    },
    {
      name: "author-title",
      type: "text",
      required: true
    },
    {
      name: "blog-title",
      type: "text",
      required: true
    },
    {
      name: "blog-des",
      type: "text",
      required: true,
    },
  ],
};

export default Blogs;
