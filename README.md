# mixway-shared-config

株式会社ヴァル研究所 mixway Teamが用いる共通設定ライブラリです。

## 使用方法

### 1. `.npmrc`の設定

```
@vallaboratory:registry=https://npm.pkg.github.com
```

### 2. インストール

```bash
npm install @vallaboratory/mixway-shared-config
```

### 3. 設定ファイルの作成

tsconfig.json

```json
{
    "extends": "@vallaboratory/mixway-shared-config/tsconfig",
    "compilerOptions": {
        // プロジェクト固有の設定をここに追加
    }
}
```

eslint.config.mjs

```javascript
import { defaultRuleSets } from "@vallaboratory/mixway-shared-config/eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    defaultRuleSets(),
    // デフォルトに含まれていないルールセットは適宜追加
    // cdkRuleSets(),
    // jsdocRuleSets(),
    {
        rules: {
            // プロジェクト固有のルールをここに追加
        },
    },
]);
```

dprint.json

```json
{
    "extends": "./node_modules/@vallaboratory/mixway-shared-config/dist/dprint/dprint.json"
}
```

## 開発

```shell
# フォーマット
npm run fmt
# リント
npm run lint
# ビルド
npm run build
```

### 依存関係について

dependenciesとdevDependenciesとpeerDependenciesは以下のように使い分けます。

- dependencies: 通常の依存関係。
- peerDependencies: このライブラリを使用するプロジェクト側とバージョンを合わせる必要がある依存関係。例: eslint、typescript、dprintなど。
  - peerDependenciesはこのライブラリの開発時にも利用されるため、同時にdevDependenciesにも追加する必要があります。
- devDependencies: 開発に必要な依存関係。
