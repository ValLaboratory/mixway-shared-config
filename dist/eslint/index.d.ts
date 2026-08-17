import { CdkRuleSetOptions, cdkRuleSets } from "./cdkRuleSets.js";
import { GitignoreRuleSetOptions, gitignoreRuleSets } from "./gitignoreRuleSets.js";
import { ImportRuleSetOptions, importRuleSets } from "./importRuleSets.js";
import { TypeScriptRuleSetOptions, typescriptRuleSets } from "./typescriptRuleSets.js";
import { jsdocRuleSets } from "./jsdocRuleSets.js";
import { linterOptionsRuleSets } from "./linterOptionsRuleSets.js";
import { VitestRuleSetOptions, vitestRuleSets } from "./vitestRuleSets.js";

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
declare function defaultRuleSets(options?: GitignoreRuleSetOptions & TypeScriptRuleSetOptions & ImportRuleSetOptions): import("eslint/config").Config[];
//#endregion
export { CdkRuleSetOptions, GitignoreRuleSetOptions, ImportRuleSetOptions, TypeScriptRuleSetOptions, VitestRuleSetOptions, cdkRuleSets, defaultRuleSets, gitignoreRuleSets, importRuleSets, jsdocRuleSets, linterOptionsRuleSets, typescriptRuleSets, vitestRuleSets };
//# sourceMappingURL=index.d.ts.map