import { defineConfig } from "eslint/config";
import type { GitignoreRuleSetOptions } from "./gitignoreRuleSets.ts";
import { gitignoreRuleSets } from "./gitignoreRuleSets.ts";
import type { ImportRuleSetOptions } from "./importRuleSets.ts";
import { importRuleSets } from "./importRuleSets.ts";
import { linterOptionsRuleSets } from "./linterOptionsRuleSets.ts";
import type { TypeScriptRuleSetOptions } from "./typescriptRuleSets.ts";
import { typescriptRuleSets } from "./typescriptRuleSets.ts";

/**
 * デフォルトのESLintルールセット。以下のルールが含まれています。
 * - `.gitignore`ベースのファイル除外設定
 * - ESLintのlinterOptionsに関するルール
 * - TypeScriptプロジェクト向けのルール
 * - import文に関するルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
export function defaultRuleSets(
    options: GitignoreRuleSetOptions & TypeScriptRuleSetOptions & ImportRuleSetOptions = {},
) {
    return defineConfig([
        gitignoreRuleSets(options),
        linterOptionsRuleSets(),
        typescriptRuleSets(options),
        importRuleSets(options),
    ]);
}

export * from "./cdkRuleSets.ts";
export * from "./gitignoreRuleSets.ts";
export * from "./importRuleSets.ts";
export * from "./jsdocRuleSets.ts";
export * from "./linterOptionsRuleSets.ts";
export * from "./typescriptRuleSets.ts";
