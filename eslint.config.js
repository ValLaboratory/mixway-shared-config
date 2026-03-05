// @ts-check
import { defineConfig } from "eslint/config";
import { defaultRuleSets, jsdocRuleSets } from "./src/eslint/index.js";

export default defineConfig([
    defaultRuleSets(),
    jsdocRuleSets(),
]);
