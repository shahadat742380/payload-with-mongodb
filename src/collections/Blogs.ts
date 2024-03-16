import { CollectionConfig } from "payload/types";

const Blogs: CollectionConfig = {
  slug: "blogs",

  fields: [
    {
      name: "authorInfo",
      relationTo: "authors",
      type: "relationship",
      required: true,
    },
    {
      name: "authorImg",
      type: "upload",
      relationTo: "images",
      required: true,
    },
    {
      name: "blogTitle",
      type: "text",
      required: true,
    },
    {
      name: "blogDes",
      type: "text",
      required: true,
    },
    // {
    //   name: 'authorName',
    //   type: 'relationship',
    //   relationTo: ['author'],
    // },
  ],
};

export default Blogs;
