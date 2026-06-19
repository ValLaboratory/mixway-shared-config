import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import { configs } from "typescript-eslint";
//#region src/eslint/typescriptRuleSets.ts
/**
* TypeScriptプロジェクト向けのESLintルール
* @param options オプション
* @returns ESLintのルールセット
*/
function typescriptRuleSets(options = {}) {
	return defineConfig([
		{ languageOptions: {
			...options.languageOptions,
			parserOptions: {
				projectService: true,
				ecmaVersion: "latest",
				lib: ["ESNext"],
				...options.languageOptions?.parserOptions
			}
		} },
		js.configs.recommended,
		configs.strictTypeChecked,
		{ rules: {
			"@typescript-eslint/no-unused-vars": ["error", {
				varsIgnorePattern: "^_",
				argsIgnorePattern: "^_",
				caughtErrorsIgnorePattern: "^_",
				destructuredArrayIgnorePattern: "^_"
			}],
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/no-restricted-types": ["error", { types: { object: "オブジェクトを表現する場合はobject型の代わりにRecord<string, unknown>を使用してください。" } }],
			"@typescript-eslint/no-non-null-assertion": "off",
			"max-params": "error",
			"@typescript-eslint/restrict-template-expressions": ["error", {
				allowNumber: true,
				allowBoolean: true,
				allowNever: true,
				allowNullish: true,
				allowRegExp: true
			}],
			"object-shorthand": ["error"],
			"no-restricted-syntax": ["error", {
				selector: ":matches(PropertyDefinition, MethodDefinition)[accessibility=\"private\"]",
				message: "Use #private instead"
			}]
		} }
	]);
}
//#endregion
export { typescriptRuleSets };

//# sourceMappingURL=typescriptRuleSets.js.map