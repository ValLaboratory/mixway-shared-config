import { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

//#region src/eslint/typescriptRuleSets.d.ts
interface TypeScriptRuleSetOptions {
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
declare function typescriptRuleSets(options?: TypeScriptRuleSetOptions): import("eslint/config").Config[];
//#endregion
export { TypeScriptRuleSetOptions, typescriptRuleSets };
//# sourceMappingURL=typescriptRuleSets.d.ts.map