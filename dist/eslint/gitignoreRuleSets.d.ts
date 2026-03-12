export interface GitignoreRuleSetOptions {
    /** 追加で除外するファイルパターンの配列。デフォルトは`[]`。 */
    ignorePatterns?: string[];
}
/**
 * gitignoreを参照してファイルの除外設定を行うルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
export declare function gitignoreRuleSets(options?: GitignoreRuleSetOptions): import("eslint/config").Config[];
