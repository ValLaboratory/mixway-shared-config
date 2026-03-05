// @ts-check

import { defineConfig, globalIgnores } from "eslint/config";

export function gitignoreRuleSets() {
    return defineConfig([
        globalIgnores([
            "node_modules",
        ]),
    ]);
}
