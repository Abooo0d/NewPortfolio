import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

// Define your client configuration
const config: ClientConfig = {
  projectId: "8ohbq6md", // find it in sanity.config.ts or manage.sanity.io
  dataset: "production", // usually 'production' unless changed
  apiVersion: "2023-10-01", // use a fixed date for stability
  useCdn: true, // `true` = faster, cached reads
};

// Create the Sanity client
export const client = createClient(config);

// Image URL builder
const builder: ImageUrlBuilder = imageUrlBuilder(client);

// Type-safe helper for image URLs
export const urlFor = (source: any | null) => {
  return source ? builder.image(source) : null;
};
