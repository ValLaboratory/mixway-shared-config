import { defineConfig, globalIgnores } from "eslint/config";
import { defaultRuleSets, jsdocRuleSets } from "./src/eslint/index.ts";

export default defineConfig([
    globalIgnores([
        "dist/**",
    ]),
    defaultRuleSets(),
    jsdocRuleSets(),
]);
