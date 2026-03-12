//#region src/dprint/dprint.json.d.ts
declare let indentWidth: number;
declare namespace typescript {
  let quoteProps: string;
  let quoteStyle: string;
}
declare let json: {};
declare let markdown: {};
declare let toml: {};
declare let malva: {};
declare let markup: {};
declare let yaml: {};
declare let plugins: string[];
declare namespace __json_default_export {
  export { indentWidth, typescript, json, markdown, toml, malva, markup, yaml, plugins };
}
//#endregion
export { __json_default_export as default, indentWidth, json, malva, markdown, markup, plugins, toml, typescript, yaml };
//# sourceMappingURL=dprint.d.ts.map