import jsdoc from "eslint-plugin-jsdoc";
import { defineConfig } from "eslint/config";

/** JSDocに関するESLintルール */
export function jsdocRuleSets() {
    return defineConfig([
        // plugin読み込み
        {
            plugins: {
                jsdoc,
            },
        },

        // TypeScriptファイル向け設定
        {
            files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
            extends: [
                jsdoc.configs["flat/recommended-typescript-error"],
            ],
        },

        // JavaScriptファイル向け設定
        {
            files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx"],
            extends: [
                jsdoc.configs["flat/recommended-error"],
            ],
            rules: {
                "jsdoc/require-returns-type": "off", // 戻り値の型指定を必須にしない
            },
        },
    ]);
}
