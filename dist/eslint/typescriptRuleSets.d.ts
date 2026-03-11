import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
export interface TypeScriptRuleSetOptions {
    /**
     * ESLintの`languageOptions`。デフォルト値は以下の通り。
     * ```ts
     * {
     *     parserOptions: {
     *         projectService: true,
     *         ecmaVersion: "latest",
     *         lib: ["ESNext"],
     *     },
     * }
     * ```
     */
    languageOptions?: FlatConfig.LanguageOptions;
}
/**
 * TypeScriptプロジェクト向けのESLintルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
export declare function typescriptRuleSets(options?: TypeScriptRuleSetOptions): import("eslint/config").Config[];
