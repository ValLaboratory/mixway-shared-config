//#region src/dprint/dprint.json
var indentWidth = 4;
var typescript = {
	"quoteProps": "asNeeded",
	"quoteStyle": "preferDouble"
};
var json = {};
var markdown = {};
var toml = {};
var malva = {};
var markup = {};
var yaml = {};
var plugins = [
	"https://plugins.dprint.dev/typescript-0.95.15.wasm",
	"https://plugins.dprint.dev/json-0.21.1.wasm",
	"https://plugins.dprint.dev/markdown-0.21.1.wasm",
	"https://plugins.dprint.dev/toml-0.7.0.wasm",
	"https://plugins.dprint.dev/g-plane/malva-v0.15.2.wasm",
	"https://plugins.dprint.dev/g-plane/markup_fmt-v0.26.0.wasm",
	"https://plugins.dprint.dev/g-plane/pretty_yaml-v0.6.0.wasm"
];
var dprint_default = {
	indentWidth,
	typescript,
	json,
	markdown,
	toml,
	malva,
	markup,
	yaml,
	plugins
};
//#endregion
export { dprint_default as default, indentWidth, json, malva, markdown, markup, plugins, toml, typescript, yaml };

//# sourceMappingURL=dprint.js.map