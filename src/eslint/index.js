import { defineConfig } from "eslint/config";
import { gitignoreRuleSets } from "./gitignoreRuleSets.js";
import { importRuleSets } from "./importRuleSets.js";
import { linterOptionsRuleSets } from "./linterOptionsRuleSets.js";
import { typescriptRuleSets } from "./typescriptRuleSets.js";
/** @import { TypeScriptRuleSetOptions } from "./typescriptRuleSets.js" */
/** @import { ImportRuleSetOptions } from "./importRuleSets.js" */
/** @import { GitignoreRuleSetOptions } from "./gitignoreRuleSets.js" */

/**
 * デフォルトのESLintルールセット。以下のルールが含まれています。
 * - `.gitignore`ベースのファイル除外設定
 * - ESLintのlinterOptionsに関するルール
 * - TypeScriptプロジェクト向けのルール
 * - import文に関するルール
 * @param {GitignoreRuleSetOptions & TypeScriptRuleSetOptions & ImportRuleSetOptions} [options]
 */
export function defaultRuleSets(options = {}) {
    return defineConfig([
        gitignoreRuleSets(options),
        linterOptionsRuleSets(),
        typescriptRuleSets(options),
        importRuleSets(options),
    ]);
}

export * from "./cdkRuleSets.js";
export * from "./gitignoreRuleSets.js";
export * from "./importRuleSets.js";
export * from "./jsdocRuleSets.js";
export * from "./linterOptionsRuleSets.js";
export * from "./typescriptRuleSets.js";
