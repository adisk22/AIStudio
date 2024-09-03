/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AIDB_owner:Yhitm1l7IZpK@ep-empty-block-a5ytbwdb.us-east-2.aws.neon.tech/AIDB?sslmode=require',
    }
  };