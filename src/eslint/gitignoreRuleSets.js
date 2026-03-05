import gitignore from "eslint-config-flat-gitignore";
import { defineConfig, globalIgnores } from "eslint/config";

/**
 * @typedef GitignoreRuleSetOptions
 * @property {string[]} [ignorePatterns] 追加で除外するファイルパターンの配列。デフォルトは`[]`。
 */

/**
 * gitignoreを参照してファイルの除外設定を行うルール
 * @param {GitignoreRuleSetOptions} [options] オプション
 */
export function gitignoreRuleSets(options = {}) {
    return defineConfig([
        globalIgnores([
            ...(options.ignorePatterns ?? []),
        ]),
        gitignore(),
    ]);
}
