import { defineConfig } from "tsdown";

export default defineConfig({
    root: "./src",
    entry: [
        "./src/eslint/*",
    ],
    // tsconfig.jsonはJSONC形式で、entryに指定するとパースに失敗するため、distにコピーする
    copy: [{
        from: "src/tsconfig/tsconfig.json",
        to: "dist/tsconfig/",
    }, {
        from: "src/dprint/dprint.json",
        to: "dist/dprint/",
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
