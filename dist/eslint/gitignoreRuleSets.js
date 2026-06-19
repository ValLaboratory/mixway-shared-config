import { defineConfig, globalIgnores } from "eslint/config";
import gitignore from "eslint-config-flat-gitignore";
//#region src/eslint/gitignoreRuleSets.ts
/**
* gitignoreを参照してファイルの除外設定を行うルール
* @param options オプション
* @returns ESLintのルールセット
*/
function gitignoreRuleSets(options = {}) {
	const ignorePatterns = options.ignorePatterns ?? [];
	return defineConfig([...ignorePatterns.length ? [globalIgnores(ignorePatterns)] : [], gitignore()]);
}
//#endregion
export { gitignoreRuleSets };

//# sourceMappingURL=gitignoreRuleSets.js.map