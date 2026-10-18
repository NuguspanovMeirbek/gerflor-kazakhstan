import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const roots = [path.join(dir, "out"), path.join(dir, "public")];
const port = Number(process.env.PORT || 3000);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function send(res, status, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(status, { "Content-Type": types[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}

function resolveUrl(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const relative = decoded.replace(/^[/\\]+/, "");
  const safe = path.normalize(relative).replace(/^(\.\.[/\\])+/, "");

  for (const root of roots) {
    const absolute = path.resolve(root, safe);
    if (!absolute.startsWith(path.resolve(root))) continue;
    if (fs.existsSync(absolute) && fs.statSync(absolute).isFile()) return { file: absolute, status: 200 };
    const asIndex = path.join(absolute, "index.html");
    if (fs.existsSync(asIndex)) return { file: asIndex, status: 200 };
  }

  const notFound = path.join(roots[0], "404", "index.html");
  if (fs.existsSync(notFound)) return { file: notFound, status: 404 };
  return { file: path.join(roots[0], "index.html"), status: 200 };
}

const server = http.createServer((req, res) => {
  const resolved = resolveUrl(req.url || "/");
  if (!resolved?.file) {
    res.writeHead(400);
    res.end("Bad request");
    return;
  }
  send(res, resolved.status, resolved.file);
});

if (!fs.existsSync(path.join(roots[0], "index.html"))) {
  console.error("Папка out/ не найдена. Сначала соберите сайт: npm install && npm run build");
  process.exit(1);
}

server.listen(port, () => {
  console.log(`Gerflor Kazakhstan: http://localhost:${port}`);
});
