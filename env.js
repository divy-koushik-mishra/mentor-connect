import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server-side environment variables schema
   */
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    APPWRITE_ENDPOINT: z.string().url(),
    APPWRITE_PROJECT_ID: z.string(),
    APPWRITE_DATABASE_ID: z.string(),
    APPWRITE_CONTACT_COLLECTION_ID: z.string(),
    // Add any other server-side environment variables here
  },

  /**
   * Client-side environment variables schema
   */
  client: {
    NEXT_PUBLIC_APPWRITE_ENDPOINT: z.string().url(),
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string(),
    // Add any other client-side environment variables here
  },

  /**
   * Destructure process.env
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
    APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
    APPWRITE_DATABASE_ID: process.env.APPWRITE_DATABASE_ID,
    APPWRITE_CONTACT_COLLECTION_ID: process.env.APPWRITE_CONTACT_COLLECTION_ID,
    NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  },

  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Makes it so that empty strings are treated as undefined.
   */
  emptyStringAsUndefined: true,
});