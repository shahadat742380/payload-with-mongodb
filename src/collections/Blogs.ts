import { CollectionConfig } from "payload/types";

const Blogs: CollectionConfig = {
  slug: "blogs",
  upload: {
    staticURL: "/images/blogs",
    staticDir: "/images/blogs",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "authorTitle",
      type: "text",
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
  ],
};

export default Blogs;
