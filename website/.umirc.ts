import { defineConfig } from "umi";

import routes from "./config/routes";
import proxy from "./config/proxy";

const { NODE_ENV } = process.env;

export default defineConfig({
  routes,
  npmClient: "pnpm",
  proxy: proxy[NODE_ENV as string],
});
