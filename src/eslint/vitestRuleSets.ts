import vitest from "@vitest/eslint-plugin";
import { defineConfig } from "eslint/config";

export interface VitestRuleSetOptions {
    /** テストファイルのパターンの配列。デフォルトはVitestが標準でテストとして扱うファイルのパターン。 */
    testFiles?: string[];
}

/**
 * Vitest用のESLintルール
 * @param options オプション
 * @returns ESLintのルールセット
 */
export function vitestRuleSets(options: VitestRuleSetOptions = {}) {
    return defineConfig([
        // vitest用の設定
        {
            files: options.testFiles ?? [
                "**/*.{test,spec}.?(c|m)[jt]s?(x)",
                "**/*.{test,spec}-d.?(c|m)[jt]s?(x)",
            ],
            extends: [vitest.configs.recommended],
            settings: {
                vitest: {
                    // `expectTypeOf`等の型テストのアサーションをルールが認識できるようにする
                    typecheck: true,
                },
            },
            languageOptions: {
                globals: vitest.environments.env.globals,
            },
            // recommendedルールに加えて以下のルールも適用する
            rules: {
                // `vitest.xxx`ではなく`vi.xxx`に統一する
                "vitest/consistent-vitest-vi": "error",
                // テスト関数からのreturnを禁止する（非同期処理は`await`で待つ）
                "vitest/no-test-return-statement": "error",
                // `expect(a > b).toBe(true)`ではなく`expect(a).toBeGreaterThan(b)`を使う
                "vitest/prefer-comparison-matcher": "error",
                // 手動のループでテストを生成せず`each`を使う
                "vitest/prefer-each": "error",
                // `expect(a === b).toBe(true)`ではなく`expect(a).toBe(b)`を使う
                "vitest/prefer-equality-matcher": "error",
                // `toEqual()`ではなく、より厳密に比較する`toStrictEqual()`を使う
                "vitest/prefer-strict-equal": "error",
                // プリミティブの比較には`toEqual()`ではなく`toBe()`を使う
                "vitest/prefer-to-be": "error",
                // 型テストで`expectTypeOf(x).toBeInstanceOf(Object)`ではなく`toBeObject()`を使う
                "vitest/prefer-to-be-object": "error",
                // `expect(arr.includes(x)).toBe(true)`ではなく`expect(arr).toContain(x)`を使う
                "vitest/prefer-to-contain": "error",
                // `expect(fn.mock.calls).toHaveLength(n)`ではなく`expect(fn).toHaveBeenCalledTimes(n)`を使う
                "vitest/prefer-to-have-been-called-times": "error",
                // `expect(arr.length).toBe(n)`ではなく`expect(arr).toHaveLength(n)`を使う
                "vitest/prefer-to-have-length": "error",
                // `fn as Mock`ではなく`vi.mocked(fn)`を使う
                "vitest/prefer-vi-mocked": "error",
                // `expect.poll`の呼び出しに`await`を必須にする
                "vitest/require-awaited-expect-poll": "error",
                // `toThrow()`にエラーメッセージの指定を必須にする
                "vitest/require-to-throw-message": "error",
            },
        },
    ]);
}
