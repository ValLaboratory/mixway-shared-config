import { defineConfig } from "eslint/config";
//#region src/eslint/linterOptionsRuleSets.ts
/**
* ESLintのlinterOptionsに関するルール
* @returns ESLintのルールセット
*/
function linterOptionsRuleSets() {
	return defineConfig([{ linterOptions: {
		reportUnusedDisableDirectives: "error",
		reportUnusedInlineConfigs: "error"
	} }]);
}
//#endregion
export { linterOptionsRuleSets };

//# sourceMappingURL=linterOptionsRuleSets.js.map