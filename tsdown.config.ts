import { defineConfig } from "tsdown";

export default defineConfig({
    root: "./src",
    entry: [
        "./src/eslint/*",
        "./src/dprint/*",
    ],
    // tsconfig.jsonはJSONC形式で、entryに指定するとパースに失敗するため、distにコピーする
    copy: [{
        from: "src/tsconfig/tsconfig.json",
        to: "dist/tsconfig/",
    }],
    // 3rd party moduleはバンドルしない
    deps: {
        skipNodeModulesBundle: true,
    },
    // .d.tsファイルを出力する
    dts: {
        sourcemap: true,
    },
    // 出力ファイルの拡張子を指定
    outExtensions: () => ({
        js: ".js",
        dts: ".ts",
    }),
});
