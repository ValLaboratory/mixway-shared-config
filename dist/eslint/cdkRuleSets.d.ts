//#region src/eslint/cdkRuleSets.d.ts
interface CdkRuleSetOptions {
  /** CDKコンストラクトのファイルパターンの配列。少なくとも1件以上のファイルパターンを指定する。 */
  cdkFiles: [string, ...string[]];
}
/**
 * CDK用のESLintルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
declare function cdkRuleSets(options: CdkRuleSetOptions): import("eslint/config").Config[];
//#endregion
export { CdkRuleSetOptions, cdkRuleSets };
//# sourceMappingURL=cdkRuleSets.d.ts.map