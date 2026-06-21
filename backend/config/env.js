import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const env = {
  PORT: process.env.PORT,
  RAPID_API_KEY: process.env.RAPID_API_KEY,
  RAPID_API_HOST: process.env.RAPID_API_HOST,
};