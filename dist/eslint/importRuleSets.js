import { defineConfig } from "eslint/config";
import { fixupConfigRules } from "@eslint/compat";
import importPlugin from "eslint-plugin-import";
//#region src/eslint/importRuleSets.ts
/**
* import文に関するESLintルール
* @param options オプション
* @returns ESLintのルールセット
*/
function importRuleSets(options = {}) {
	return defineConfig([
		{ settings: { "import/resolver": { typescript: {
			alwaysTryTypes: true,
			project: ["./tsconfig.json"],
			...options.typescriptResolverOptions
		} } } },
		fixupConfigRules(importPlugin.flatConfigs.recommended),
		fixupConfigRules(importPlugin.flatConfigs.typescript),
		{ rules: {
			"import/enforce-node-protocol-usage": ["error", "always"],
			"import/no-absolute-path": "error",
			"import/no-useless-path-segments": "error",
			"import/first": "error",
			"import/extensions": [
				"error",
				"ignorePackages",
				{ checkTypeImports: true }
			],
			"import/namespace": ["off"]
		} },
		{
			ignores: ["**/*.config.{ts,cts,mts,js,cjs,mjs,tsx,jsx}", ...options.allowDefaultExportFiles ?? []],
			rules: { "import/no-default-export": "error" }
		}
	]);
}
//#endregion
export { importRuleSets };

//# sourceMappingURL=importRuleSets.js.map