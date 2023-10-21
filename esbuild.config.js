import * as esbuild from "esbuild";

const ctx = await esbuild.context({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    packages: "external",
    outfile: "dist/bundle.js",
});

await ctx.watch();
