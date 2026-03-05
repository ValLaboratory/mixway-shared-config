import { fixupConfigRules } from "@eslint/compat";
import type { TypeScriptResolverOptions } from "eslint-import-resolver-typescript";
import importPlugin from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

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
export function importRuleSets(options: ImportRuleSetOptions = {}) {
    return defineConfig([
        // リゾルバ設定
        {
            settings: {
                "import/resolver": {
                    typescript: {
                        alwaysTryTypes: true,
                        project: ["./tsconfig.json"],
                        ...options.typescriptResolverOptions,
                    },
                },
            },
        },

        // デフォルト設定
        // waiting for ESLint v10 support...
        // See: https://github.com/import-js/eslint-plugin-import/pull/3230
        // TODO: eslint-plugin-importがESLint v10に対応したら、fixupConfigRulesを外す
        fixupConfigRules(importPlugin.flatConfigs.recommended),
        fixupConfigRules(importPlugin.flatConfigs.typescript),

        // オーバーライド設定
        {
            rules: {
                // import文でNode.jsの組み込みモジュールを使用する場合、常に'node:'プロトコルを使用することを強制する
                "import/enforce-node-protocol-usage": ["error", "always"],
                // 絶対パスでのimportを禁止する
                "import/no-absolute-path": "error",
                // 不要なパスセグメントを含むimportを禁止する
                "import/no-useless-path-segments": "error",
                // import文はファイルの先頭にまとめることを強制する
                "import/first": "error",
                // import文で拡張子を付与することを強制する
                "import/extensions": ["error", "ignorePackages", {
                    checkTypeImports: true,
                }],
                // import文で変数の存在チェックをするかどうか
                // axiosでfalse positiveが発生するため無効化
                "import/namespace": ["off"],
            },
        },
        {
            ignores: [
                "**/*.config.{ts,cts,mts,js,cjs,mjs,tsx,jsx}",
                ...(options.allowDefaultExportFiles ?? []),
            ],
            rules: {
                // デフォルトエクスポートを禁止する
                "import/no-default-export": "error",
            },
        },
    ]);
}
