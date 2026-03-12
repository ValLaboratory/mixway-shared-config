import { CdkRuleSetOptions, cdkRuleSets } from "./cdkRuleSets.js";
import { GitignoreRuleSetOptions, gitignoreRuleSets } from "./gitignoreRuleSets.js";
import { ImportRuleSetOptions, importRuleSets } from "./importRuleSets.js";
import { TypeScriptRuleSetOptions, typescriptRuleSets } from "./typescriptRuleSets.js";
import { jsdocRuleSets } from "./jsdocRuleSets.js";
import { linterOptionsRuleSets } from "./linterOptionsRuleSets.js";
import * as eslint_config0 from "eslint/config";

//#region src/eslint/index.d.ts
/**
 * デフォルトのESLintルールセット。以下のルールが含まれています。
 * - `.gitignore`ベースのファイル除外設定
 * - ESLintのlinterOptionsに関するルール
 * - TypeScriptプロジェクト向けのルール
 * - import文に関するルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
declare function defaultRuleSets(options?: GitignoreRuleSetOptions & TypeScriptRuleSetOptions & ImportRuleSetOptions): eslint_config0.Config[];
//#endregion
export { CdkRuleSetOptions, GitignoreRuleSetOptions, ImportRuleSetOptions, TypeScriptRuleSetOptions, cdkRuleSets, defaultRuleSets, gitignoreRuleSets, importRuleSets, jsdocRuleSets, linterOptionsRuleSets, typescriptRuleSets };
//# sourceMappingURL=index.d.ts.map