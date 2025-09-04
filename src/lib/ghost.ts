import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_BLOG_URL as string,
  key: process.env.NEXT_PUBLIC_CONTENT_API_KEY as string,
  version: "v5.0",
});

export default api;
