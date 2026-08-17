import { defineConfig } from "eslint/config";
import vitest from "@vitest/eslint-plugin";
//#region src/eslint/vitestRuleSets.ts
/**
* Vitest用のESLintルール
*
* このルールセットは型情報を必要とします。`defaultRuleSets`か`typescriptRuleSets`と併用して利用してください。
* @param options オプション
* @returns ESLintのルールセット
*/
function vitestRuleSets(options = {}) {
	return defineConfig([{
		files: options.testFiles ?? ["**/*.{test,spec}.?(c|m)[jt]s?(x)", "**/*.{test,spec}-d.?(c|m)[jt]s?(x)"],
		extends: [vitest.configs.recommended],
		settings: { vitest: { typecheck: true } },
		rules: {
			"vitest/consistent-vitest-vi": "error",
			"vitest/no-test-return-statement": "error",
			"vitest/prefer-comparison-matcher": "error",
			"vitest/prefer-each": "error",
			"vitest/prefer-equality-matcher": "error",
			"vitest/prefer-importing-vitest-globals": "error",
			"vitest/prefer-strict-equal": "error",
			"vitest/prefer-to-be": "error",
			"vitest/prefer-to-be-object": "error",
			"vitest/prefer-to-contain": "error",
			"vitest/prefer-to-have-been-called-times": "error",
			"vitest/prefer-to-have-length": "error",
			"vitest/prefer-vi-mocked": "error",
			"vitest/require-awaited-expect-poll": "error",
			"vitest/require-to-throw-message": "error"
		}
	}]);
}
//#endregion
export { vitestRuleSets };

//# sourceMappingURL=vitestRuleSets.js.map