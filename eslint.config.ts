import { defineConfig } from "eslint/config";
import { defaultRuleSets, jsdocRuleSets } from "./src/eslint/index.ts";

export default defineConfig([
    defaultRuleSets(),
    jsdocRuleSets(),
]);
