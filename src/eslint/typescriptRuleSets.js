// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import { configs as typescriptConfigs } from "typescript-eslint";
/** @import { FlatConfig } from "@typescript-eslint/utils/ts-eslint" */

/**
 * @typedef {Object} TypeScriptRuleSetOptions
 * @property {FlatConfig.LanguageOptions} [languageOptions]
 * ESLintの`languageOptions`。デフォルト値は以下の通り。
 * ```js
 * {
 *     parserOptions: {
 *         projectService: true,
 *         ecmaVersion: "latest",
 *         lib: ["ESNext"],
 *     },
 * }
 * ```
 */

/**
 * TypeScriptプロジェクト向けのESLintルール
 * @param {TypeScriptRuleSetOptions} options
 */
export function typescriptRuleSets(options = {}) {
    return defineConfig([
        // パーサー設定
        {
            languageOptions: {
                ...options.languageOptions,
                parserOptions: {
                    projectService: true,
                    ecmaVersion: "latest",
                    lib: ["ESNext"],
                    ...options.languageOptions?.parserOptions,
                },
            },
        },

        // デフォルト設定
        js.configs.recommended,
        typescriptConfigs.strictTypeChecked,

        // オーバーライド設定
        {
            rules: {
                // 未使用変数のエラー設定
                // アンダースコア始まりの変数はlintエラーを報告しない
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        varsIgnorePattern: "^_",
                        argsIgnorePattern: "^_",
                        caughtErrorsIgnorePattern: "^_",
                        destructuredArrayIgnorePattern: "^_",
                    },
                ],
                // 型をimportする時は`import type`の使用を強制する
                "@typescript-eslint/consistent-type-imports": "error",
                // 特定の型を使用禁止にする
                "@typescript-eslint/no-restricted-types": [
                    "error",
                    {
                        types: {
                            object:
                                "オブジェクトを表現する場合はobject型の代わりにRecord<string, unknown>を使用してください。",
                        },
                    },
                ],
                // non-null-assertion演算子を使用してもエラーにしない
                "@typescript-eslint/no-non-null-assertion": "off",
                // 引数は最大3個まで
                "max-params": "error",
                // テンプレートリテラルに変数を埋め込む際に文字列以外の型を許可するかどうか
                // 文字列に加えて、number, boolean, never, nullish, regexpを許可する
                "@typescript-eslint/restrict-template-expressions": ["error", {
                    allowNumber: true,
                    allowBoolean: true,
                    allowNever: true,
                    allowNullish: true,
                    allowRegExp: true,
                }],
                // オブジェクトリテラルのプロパティでショートハンドを強制する
                "object-shorthand": ["error"],

                // privateなクラスフィールドやメソッドには#を使用することを強制する
                "no-restricted-syntax": ["error", {
                    selector: ':matches(PropertyDefinition, MethodDefinition)[accessibility="private"]',
                    message: "Use #private instead",
                }],
            },
        },
    ]);
}
