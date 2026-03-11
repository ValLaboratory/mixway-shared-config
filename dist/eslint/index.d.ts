import type { GitignoreRuleSetOptions } from "./gitignoreRuleSets.ts";
import type { ImportRuleSetOptions } from "./importRuleSets.ts";
import type { TypeScriptRuleSetOptions } from "./typescriptRuleSets.ts";
/**
 * デフォルトのESLintルールセット。以下のルールが含まれています。
 * - `.gitignore`ベースのファイル除外設定
 * - ESLintのlinterOptionsに関するルール
 * - TypeScriptプロジェクト向けのルール
 * - import文に関するルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
export declare function defaultRuleSets(options?: GitignoreRuleSetOptions & TypeScriptRuleSetOptions & ImportRuleSetOptions): import("eslint/config").Config[];
export * from "./cdkRuleSets.ts";
export * from "./gitignoreRuleSets.ts";
export * from "./importRuleSets.ts";
export * from "./jsdocRuleSets.ts";
export * from "./linterOptionsRuleSets.ts";
export * from "./typescriptRuleSets.ts";
