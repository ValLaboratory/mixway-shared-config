import gitignore from "eslint-config-flat-gitignore";
import { defineConfig, globalIgnores } from "eslint/config";

export interface GitignoreRuleSetOptions {
    /** 追加で除外するファイルパターンの配列。デフォルトは`[]`。 */
    ignorePatterns?: string[];
}

/**
 * gitignoreを参照してファイルの除外設定を行うルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
export function gitignoreRuleSets(options: GitignoreRuleSetOptions = {}) {
    const ignorePatterns = options.ignorePatterns ?? [];

    return defineConfig([
        ...(ignorePatterns.length
            ? [globalIgnores(ignorePatterns)]
            : []),
        gitignore(),
    ]);
}
