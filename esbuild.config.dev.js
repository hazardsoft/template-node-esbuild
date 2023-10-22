import * as esbuild from "esbuild";

const ctx = await esbuild.context({
    entryPoints: ["src/index.ts"],
    format: "esm",
    bundle: true,
    platform: "node",
    packages: "external",
    outfile: "dist/bundle.js",
    sourcemap: true,
    minify: false,
});

await ctx.watch();
