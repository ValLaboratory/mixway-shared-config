# @vallaboratory/mixway-shared-config

株式会社ヴァル研究所 mixway Teamが提供する、ESLint・TypeScript・dprintの共有設定ライブラリです。

mixwayプロジェクトで利用する標準的なコーディング規約・フォーマット設定を一括で導入できます。

## 特徴

- **ESLint設定** — TypeScript向けの厳格なルールセット（[Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files)形式）
- **TypeScript設定** — `strict`モードをベースにした共通tsconfig
- **dprint設定** — TypeScript, JSON, Markdown, TOML, YAML, HTML/CSS等のフォーマッタ設定

## 前提条件

| ツール     | バージョン       |
| ---------- | ---------------- |
| Node.js    | ≥ 18             |
| TypeScript | ≥ 5.9.0          |
| ESLint     | ≥ 10.0.0         |
| dprint     | 任意のバージョン |

## インストール

### 1. `.npmrc`の設定

プロジェクトルートに`.npmrc`ファイルを作成し、GitHub Packagesのレジストリを設定します。

```
@vallaboratory:registry=https://npm.pkg.github.com
```

### 2. パッケージのインストール

```bash
npm install --save-dev @vallaboratory/mixway-shared-config
```

## 使用方法

### TypeScript（tsconfig.json）

プロジェクトルートの`tsconfig.json`で本パッケージの設定を継承します。

```json
{
    "extends": "@vallaboratory/mixway-shared-config/tsconfig",
    "compilerOptions": {
        "tsBuildInfoFile": "./node_modules/.cache/tsconfig.tsbuildinfo"
    }
}
```

`compilerOptions`にプロジェクト固有の設定を追加できます。共有設定には以下の主要なオプションが含まれています。

- `strict: true`
- `target: "ESNext"` / `module: "NodeNext"`
- `allowJs: true` / `checkJs: true`
- `noEmit: true` / `incremental: true`
- `noUnusedLocals: true` / `noUnusedParameters: true`
- `noUncheckedIndexedAccess: true`

### ESLint（eslint.config.ts）

[Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files)形式でESLint設定を作成します。

```typescript
import { defaultRuleSets } from "@vallaboratory/mixway-shared-config/eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    defaultRuleSets(),
    {
        rules: {
            // プロジェクト固有のルールをここに追加
        },
    },
]);
```

#### 利用可能なルールセット

##### `defaultRuleSets(options?)`

デフォルトのルールセットです。以下のルールがすべて含まれています。

- `.gitignore`ベースのファイル除外設定
- ESLintのlinterOptionsに関するルール（未使用のdisableディレクティブ報告など）
- TypeScriptプロジェクト向けのルール（`typescript-eslint`の`strictTypeChecked`ベース）
- import文に関するルール（`eslint-plugin-import`ベース）

**オプション：**

| プロパティ                  | 型                           | 説明                                               |
| --------------------------- | ---------------------------- | -------------------------------------------------- |
| `ignorePatterns`            | `string[]`                   | `.gitignore`に加えて追加で除外するファイルパターン |
| `languageOptions`           | `FlatConfig.LanguageOptions` | ESLintの`languageOptions`を上書き                  |
| `typescriptResolverOptions` | `TypeScriptResolverOptions`  | `eslint-import-resolver-typescript`のオプション    |
| `allowDefaultExportFiles`   | `string[]`                   | default exportの使用を許可するファイルパターン     |

##### `jsdocRuleSets()`

JSDocに関するルールセットです。TypeScriptファイル（`.ts`, `.tsx`等）には`jsdoc/recommended-typescript-error`、JavaScriptファイル（`.js`, `.mjs`等）には`jsdoc/recommended-error`が適用されます。

```typescript
import {
    defaultRuleSets,
    jsdocRuleSets,
} from "@vallaboratory/mixway-shared-config/eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    defaultRuleSets(),
    jsdocRuleSets(),
]);
```

##### `cdkRuleSets(options?)`

AWS CDKプロジェクト向けのルールセットです。`eslint-plugin-awscdk`のrecommended設定を含みます。

**オプション：**

| プロパティ | 型         | 説明                                                        |
| ---------- | ---------- | ----------------------------------------------------------- |
| `cdkFiles` | `string[]` | CDKコンストラクトのファイルパターンの配列。デフォルトは`[]` |

```typescript
import {
    cdkRuleSets,
    defaultRuleSets,
} from "@vallaboratory/mixway-shared-config/eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    defaultRuleSets(),
    cdkRuleSets({ cdkFiles: ["src/stacks/**/*.ts"] }),
]);
```

##### 個別のルールセット

より細かく制御したい場合は、個別のルールセットを直接利用できます。

| 関数                           | 説明                                 |
| ------------------------------ | ------------------------------------ |
| `gitignoreRuleSets(options?)`  | `.gitignore`ベースのファイル除外設定 |
| `linterOptionsRuleSets()`      | linterOptionsに関するルール          |
| `typescriptRuleSets(options?)` | TypeScriptプロジェクト向けのルール   |
| `importRuleSets(options?)`     | import文に関するルール               |

### dprint（dprint.json）

プロジェクトルートの`dprint.json`で本パッケージの設定を継承します。

```json
{
    "extends": "./node_modules/@vallaboratory/mixway-shared-config/dist/dprint/dprint.json"
}
```

共有設定には以下の言語向けプラグインが含まれています。

- TypeScript
- JSON
- Markdown
- TOML
- CSS（[Malva](https://github.com/nicolo-ribaudo/malva)）
- HTML（[markup_fmt](https://github.com/nicolo-ribaudo/markup_fmt)）
- YAML

## 開発

```shell
# フォーマット
npm run fmt
# フォーマットチェック
npm run fmt:check
# 型チェック
npm run check
# リント
npm run lint
# ビルド
npm run build
```

### 依存関係について

| 種別               | 用途                                                                                                                                    |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `dependencies`     | 通常の依存関係                                                                                                                          |
| `peerDependencies` | 利用者側とバージョンを合わせる必要がある依存関係（eslint, typescript, dprint等）。開発時にも利用するため`devDependencies`にも追加が必要 |
| `devDependencies`  | 開発に必要な依存関係                                                                                                                    |
