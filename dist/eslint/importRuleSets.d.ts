import type { TypeScriptResolverOptions } from "eslint-import-resolver-typescript";
export interface ImportRuleSetOptions {
    /**
     * eslint-import-resolver-typescriptのオプション。デフォルトでは、`tsconfig.json`をプロジェクトルートから読み込む設定になっています。
     * ref: https://www.npmjs.com/package/eslint-import-resolver-typescript
     */
    typescriptResolverOptions?: TypeScriptResolverOptions;
    /**
     * default exportの使用を許可するファイル。デフォルトでは、`*.config.{ts,cts,mts,js,cjs,mjs,tsx,jsx}`以外の全てのファイルでdefault exportが禁止されています。
     */
    allowDefaultExportFiles?: string[];
}
/**
 * import文に関するESLintルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
export declare function importRuleSets(options?: ImportRuleSetOptions): import("eslint/config").Config[];
