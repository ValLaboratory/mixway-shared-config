import { defineConfig } from "eslint/config";

/**
 * ESLintのlinterOptionsに関するルール
 * @returns ESLintのルールセット
 */
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
