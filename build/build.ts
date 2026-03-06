import { execSync } from "node:child_process";
import { copyFile, mkdir } from "node:fs/promises";

execSync("tsc --project tsconfig.build.json", { stdio: "inherit" });

await mkdir("dist/dprint", { recursive: true });
await mkdir("dist/tsconfig", { recursive: true });
await copyFile("src/dprint/dprint.json", "dist/dprint/dprint.json");
await copyFile("src/tsconfig/tsconfig.json", "dist/tsconfig/tsconfig.json");

console.log("Build complete!");
