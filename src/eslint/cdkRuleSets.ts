import { configs as cdkConfigs } from "eslint-plugin-awscdk";
import { defineConfig } from "eslint/config";

export interface CdkRuleSetOptions {
    /** CDKコンストラクトのファイルパターンの配列。デフォルトは`[]`。 */
    cdkFiles?: string[];
}

/**
 * CDK用のESLintルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
export function cdkRuleSets(options: CdkRuleSetOptions = {}) {
    return defineConfig([
        // cdk用の設定
        {
            files: options.cdkFiles ?? [],
            extends: [cdkConfigs.recommended],
            rules: {
                // Props名が ${ConstructName}Props の形式に従うことを強制する
                "awscdk/props-name-convention": "error",
            },
        },
    ]);
}
