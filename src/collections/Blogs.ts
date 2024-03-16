import { CollectionConfig } from "payload/types";

const Blogs: CollectionConfig = {
  slug: "blogs",
  fields: [
    {
      name: "authorInfo",
      relationTo: "authors",
      type: "relationship",
      hasMany: false,
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
    {
      name: "blogType", // required
      type: "select", // required
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: "Coder",
          value: "coder",
        },
        {
          label: "Package",
          value: "package",
        },
      ],
    },
  ],
};

export default Blogs;
