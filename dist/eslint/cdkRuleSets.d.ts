//#region src/eslint/cdkRuleSets.d.ts
interface CdkRuleSetOptions {
  /** CDKコンストラクトのファイルパターンの配列。デフォルトは`[]`。 */
  cdkFiles?: string[];
}
/**
 * CDK用のESLintルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
declare function cdkRuleSets(options?: CdkRuleSetOptions): import("eslint/config").Config[];
//#endregion
export { CdkRuleSetOptions, cdkRuleSets };
//# sourceMappingURL=cdkRuleSets.d.ts.map