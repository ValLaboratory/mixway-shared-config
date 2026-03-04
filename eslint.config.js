// @ts-check

import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import { configs as typescriptConfigs } from "typescript-eslint";

export default defineConfig([
    globalIgnores([
        "node_modules",
    ]),
    js.configs.recommended,
    typescriptConfigs.strictTypeChecked,
    // Note: 以下のimportルールは、ESLintのimportプラグイン(eslint-plugin-import)を使用する場合に有効になりますが、ライブラリの依存関係がコンフリクトしているため無効化しています。
    // See: https://github.com/import-js/eslint-plugin-import/pull/3230
    // importPlugin.flatConfigs.recommended,
    // importPlugin.flatConfigs.typescript,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                ecmaVersion: "latest",
                lib: ["ESNext"],
            },
        },
    },
    {
        linterOptions: {
            reportUnusedDisableDirectives: "error",
            reportUnusedInlineConfigs: "error",
        },
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

            // Note: 以下のimportルールは、ESLintのimportプラグイン(eslint-plugin-import)を使用する場合に有効になりますが、ライブラリの依存関係がコンフリクトしているため無効化しています。
            // See: https://github.com/import-js/eslint-plugin-import/pull/3230

            // // import文でNode.jsの組み込みモジュールを使用する場合、常に'node:'プロトコルを使用することを強制する
            // "import/enforce-node-protocol-usage": ["error", "always"],
            // // 絶対パスでのimportを禁止する
            // "import/no-absolute-path": "error",
            // // 不要なパスセグメントを含むimportを禁止する
            // "import/no-useless-path-segments": "error",
            // // import文はファイルの先頭にまとめることを強制する
            // "import/first": "error",
            // // import文で拡張子を付与することを強制する
            // "import/extensions": ["error", "ignorePackages", {
            //     checkTypeImports: true,
            // }],
            // // import文で変数の存在チェックをするかどうか
            // // axiosでfalse positiveが発生するため無効化
            // "import/namespace": ["off"],
            // // デフォルトエクスポートを禁止する
            // "import/no-default-export": "error",

            // privateなクラスフィールドやメソッドには#を使用することを強制する
            "no-restricted-syntax": ["error", {
                selector: ':matches(PropertyDefinition, MethodDefinition)[accessibility="private"]',
                message: "Use #private instead",
            }],
        },
    },
]);
