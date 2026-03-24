import { cdkRuleSets } from "./cdkRuleSets.js";
import { gitignoreRuleSets } from "./gitignoreRuleSets.js";
import { importRuleSets } from "./importRuleSets.js";
import { linterOptionsRuleSets } from "./linterOptionsRuleSets.js";
import { typescriptRuleSets } from "./typescriptRuleSets.js";
import { jsdocRuleSets } from "./jsdocRuleSets.js";
import { defineConfig } from "eslint/config";
//#region src/eslint/index.ts
/**
* デフォルトのESLintルールセット。以下のルールが含まれています。
* - `.gitignore`ベースのファイル除外設定
* - ESLintのlinterOptionsに関するルール
* - TypeScriptプロジェクト向けのルール
* - import文に関するルール
* @param options オプション
* @returns ESLintのルールセット
*/
function defaultRuleSets(options = {}) {
	return defineConfig([
		gitignoreRuleSets(options),
		linterOptionsRuleSets(),
		typescriptRuleSets(options),
		importRuleSets(options)
	]);
}
//#endregion
export { cdkRuleSets, defaultRuleSets, gitignoreRuleSets, importRuleSets, jsdocRuleSets, linterOptionsRuleSets, typescriptRuleSets };

//# sourceMappingURL=index.js.map