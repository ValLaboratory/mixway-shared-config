//#region src/eslint/vitestRuleSets.d.ts
interface VitestRuleSetOptions {
  /** テストファイルのパターンの配列。デフォルトはVitestが標準でテストとして扱うファイルのパターン。 */
  testFiles?: string[];
}
/**
 * Vitest用のESLintルール
 *
 * このルールセットは型情報を必要とします。`defaultRuleSets`か`typescriptRuleSets`と併用して利用してください。
 * @param options オプション
 * @returns ESLintのルールセット
 */
declare function vitestRuleSets(options?: VitestRuleSetOptions): import("eslint/config").Config[];
//#endregion
export { VitestRuleSetOptions, vitestRuleSets };
//# sourceMappingURL=vitestRuleSets.d.ts.map