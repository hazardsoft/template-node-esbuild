import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    packages: "external",
    outfile: "dist/bundle.js",
    sourcemap: false,
    minify: true,
});
