import { configs } from "eslint-plugin-awscdk";
import { defineConfig } from "eslint/config";
//#region src/eslint/cdkRuleSets.ts
/**
* CDK用のESLintルール
* @param options オプション
* @returns ESLintのルールセット
*/
function cdkRuleSets(options = {}) {
	return defineConfig([{
		files: options.cdkFiles ?? [],
		extends: [configs.recommended],
		rules: { "awscdk/props-name-convention": "error" }
	}]);
}
//#endregion
export { cdkRuleSets };

//# sourceMappingURL=cdkRuleSets.js.map