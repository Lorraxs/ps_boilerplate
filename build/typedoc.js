const TypeDoc = require("typedoc");

async function main() {
  const app = new TypeDoc.Application();

  // If you want TypeDoc to load tsconfig.json / typedoc.json files
  app.options.addReader(new TypeDoc.TypeDocReader());

  app.bootstrap({
    // typedoc options here
    entryPoints: ["src/server/server.ts"],
    tsconfig: "src/server/tsconfig.json",
  });

  const project = app.convert();

  if (project) {
    // Project may not have converted correctly
    const outputDir = "docs";

    // Rendered docs
    await app.generateDocs(project, outputDir);
    // Alternatively generate JSON output
    await app.generateJson(project, outputDir + "/documentation.json");
  }
}

main().catch(console.error);
