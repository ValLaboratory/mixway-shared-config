import gitignore from "eslint-config-flat-gitignore";
import { defineConfig, globalIgnores } from "eslint/config";
/**
 * gitignoreを参照してファイルの除外設定を行うルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
export function gitignoreRuleSets(options = {}) {
    const ignorePatterns = options.ignorePatterns ?? [];
    return defineConfig([
        ...(ignorePatterns.length
            ? [globalIgnores(ignorePatterns)]
            : []),
        gitignore(),
    ]);
}
