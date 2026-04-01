import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const ssrEntryPath = path.join(projectRoot, ".prerender", "entry-prerender.js");
const { prerenderRoutes, renderRoute } = await import(pathToFileURL(ssrEntryPath).href);

const templatePath = path.join(distDir, "index.html");
const template = await fs.readFile(templatePath, "utf8");

for (const route of prerenderRoutes) {
  const appHtml = renderRoute(route);
  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const outputPath =
    route === "/" ? templatePath : path.join(distDir, route.replace(/^\//, ""), "index.html");

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html, "utf8");
}

await fs.rm(path.join(projectRoot, ".prerender"), { recursive: true, force: true });
