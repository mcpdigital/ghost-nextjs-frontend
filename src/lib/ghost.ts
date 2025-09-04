import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.BLOG_URL || "http://ghost:2368",
  key: process.env.CONTENT_API_KEY || "",
  version: "v5.0",
});

export default api;
