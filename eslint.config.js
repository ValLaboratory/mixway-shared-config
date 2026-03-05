// @ts-check
import { defineConfig } from "eslint/config";
import { defaultRuleSets } from "./src/eslint/index.js";

export default defineConfig([
    defaultRuleSets(),
]);
