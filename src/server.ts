import express from "express";
// import payload, { Payload  } from "payload";
import payload from "payload";
import { CollectionAfterChangeHook } from "payload/types";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Get all blogs
  app.get("/blogs", async (req, res) => {
    const blogs = await payload.find({
      collection: "blogs",
    });

    res.json(blogs);
  });

  // Add your own express routes here

  app.listen(3000);
};

start();
