import { defineConfig } from "eslint/config";

/** ESLintのlinterOptionsに関するルール */
export function linterOptionsRuleSets() {
    return defineConfig([
        {
            linterOptions: {
                reportUnusedDisableDirectives: "error",
                reportUnusedInlineConfigs: "error",
            },
        },
    ]);
}
