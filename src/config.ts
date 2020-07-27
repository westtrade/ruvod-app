import dotenv from "dotenv-extended";

export const MONGOOSE_DATABSE_URI =
  (process.env.MONGOOSE_DATABSE_URI as string) ||
  "mongodb://172.28.3.1:27017/ruvod";
