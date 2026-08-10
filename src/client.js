import { createClient } from "@sanity/client";

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2023-01-01",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_API_TOKEN,
});

export default client;
