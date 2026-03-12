import { defineConfig } from "eslint/config";
import jsdoc from "eslint-plugin-jsdoc";
//#region src/eslint/jsdocRuleSets.ts
/**
* JSDocに関するESLintルール
* @returns ESLintのルールセット
*/
function jsdocRuleSets() {
	return defineConfig([
		{ plugins: { jsdoc } },
		{
			files: [
				"**/*.ts",
				"**/*.tsx",
				"**/*.mts",
				"**/*.cts"
			],
			extends: [jsdoc.configs["flat/recommended-typescript-error"]]
		},
		{
			files: [
				"**/*.js",
				"**/*.mjs",
				"**/*.cjs",
				"**/*.jsx"
			],
			extends: [jsdoc.configs["flat/recommended-error"]],
			rules: { "jsdoc/require-returns-type": "off" }
		}
	]);
}
//#endregion
export { jsdocRuleSets };

//# sourceMappingURL=jsdocRuleSets.js.map