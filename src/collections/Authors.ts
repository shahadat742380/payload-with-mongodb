import { CollectionConfig } from "payload/types";

const Authors: CollectionConfig = {
  slug: "authors",
  fields: [
    {
      name: "authorName",
      type: "text",
      required: true,
    },
    {
      name: "authorTitle",
      type: "text",
      required: true,
    },

    
  ],
};

export default Authors;
