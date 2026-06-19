//#region src/eslint/gitignoreRuleSets.d.ts
interface GitignoreRuleSetOptions {
  /** 追加で除外するファイルパターンの配列。デフォルトは`[]`。 */
  ignorePatterns?: string[];
}
/**
 * gitignoreを参照してファイルの除外設定を行うルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
declare function gitignoreRuleSets(options?: GitignoreRuleSetOptions): import("eslint/config").Config[];
//#endregion
export { GitignoreRuleSetOptions, gitignoreRuleSets };
//# sourceMappingURL=gitignoreRuleSets.d.ts.map