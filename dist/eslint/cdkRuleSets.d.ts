export interface CdkRuleSetOptions {
    /** CDKコンストラクトのファイルパターンの配列。デフォルトは`[]`。 */
    cdkFiles?: string[];
}
/**
 * CDK用のESLintルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
export declare function cdkRuleSets(options?: CdkRuleSetOptions): import("eslint/config").Config[];
