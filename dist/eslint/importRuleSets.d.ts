import * as eslint_config0 from "eslint/config";
import { TypeScriptResolverOptions } from "eslint-import-resolver-typescript";

//#region src/eslint/importRuleSets.d.ts
interface ImportRuleSetOptions {
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
declare function importRuleSets(options?: ImportRuleSetOptions): eslint_config0.Config[];
//#endregion
export { ImportRuleSetOptions, importRuleSets };
//# sourceMappingURL=importRuleSets.d.ts.map