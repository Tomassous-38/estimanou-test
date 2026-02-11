/**
 * Script de prerendering SSG (Static Site Generation)
 *
 * Après le build Vite, ce script :
 * 1. Lance un serveur local sur les fichiers dist/
 * 2. Ouvre chaque route avec Puppeteer (Chrome headless)
 * 3. Attend le rendu complet (meta tags, JSON-LD, contenu)
 * 4. Sauvegarde le HTML final dans dist/ (fichiers statiques)
 *
 * Résultat : chaque page a son propre fichier HTML avec tout le contenu
 * pré-rendu, prêt pour les crawlers Google.
 */

import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = resolve(__dirname, "../dist");
const PORT = 4173;

// ─── Toutes les routes à pré-rendre ─────────────────────────────────────────

const ROUTES = [
  // Pages statiques
  "/",
  "/estimer",
  "/blog",
  "/biens-a-vendre",
  "/mise-en-valeur",

  // Blog articles
  "/blog/bilan-2024-marche-immobilier-reunion",
  "/blog/pourquoi-faire-estimer-avant-de-vendre",
  "/blog/erreurs-qui-font-baisser-la-valeur",

  // City landing pages
  "/estimation-immobiliere/saint-denis",
  "/estimation-immobiliere/saint-pierre",
  "/estimation-immobiliere/saint-paul",
  "/estimation-immobiliere/le-tampon",
  "/estimation-immobiliere/saint-leu",
  "/estimation-immobiliere/saint-gilles",

  // Biens par ville
  "/biens-a-vendre/saint-denis",
  "/biens-a-vendre/saint-pierre",
  "/biens-a-vendre/saint-paul",
  "/biens-a-vendre/le-tampon",
  "/biens-a-vendre/saint-leu",
  "/biens-a-vendre/saint-gilles",

  // Biens individuels
  "/biens-a-vendre/saint-denis/appartement-t3-moufia",
  "/biens-a-vendre/saint-denis/maison-t5-la-montagne",
  "/biens-a-vendre/saint-pierre/maison-t4-ligne-paradis",
  "/biens-a-vendre/saint-pierre/terrain-ravine-des-cabris",
  "/biens-a-vendre/saint-paul/villa-t5-vue-belle",
  "/biens-a-vendre/saint-paul/appartement-t2-centre-ville-saint-paul",
  "/biens-a-vendre/le-tampon/maison-t4-trois-mares",
  "/biens-a-vendre/le-tampon/maison-t3-14eme-km",
  "/biens-a-vendre/saint-gilles/villa-t6-stella",
  "/biens-a-vendre/saint-leu/local-commercial-centre-saint-leu",
  "/biens-a-vendre/saint-gilles/appartement-t4-boucan-canot",
  "/biens-a-vendre/saint-gilles/villa-t5-lhermitage",
];

// ─── Serveur statique minimal ────────────────────────────────────────────────

function startServer() {
  return new Promise((resolvePromise) => {
    const server = createServer((req, res) => {
      let url = req.url || "/";

      // Chercher le fichier exact
      let filePath = join(DIST_DIR, url);

      // Si c'est un dossier ou une route SPA, servir index.html
      if (!url.includes(".")) {
        filePath = join(DIST_DIR, "index.html");
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split(".").pop();
        const mimeTypes = {
          html: "text/html",
          js: "application/javascript",
          css: "text/css",
          svg: "image/svg+xml",
          png: "image/png",
          jpg: "image/jpeg",
          woff2: "font/woff2",
          json: "application/json",
        };
        res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
        res.end(content);
      } catch {
        // Fallback vers index.html pour les routes SPA
        try {
          const fallback = readFileSync(join(DIST_DIR, "index.html"));
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(fallback);
        } catch {
          res.writeHead(404);
          res.end("Not found");
        }
      }
    });

    server.listen(PORT, () => {
      console.log(`\n  Serveur de prerendering sur http://localhost:${PORT}\n`);
      resolvePromise(server);
    });
  });
}

// ─── Prerender une route ─────────────────────────────────────────────────────

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();

  // Bloquer les requêtes inutiles (images, fonts, etc.) pour accélérer
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const type = req.resourceType();
    if (["image", "font", "media"].includes(type)) {
      req.abort();
    } else {
      req.continue();
    }
  });

  const url = `http://localhost:${PORT}${route}`;

  try {
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // Attendre que le contenu React soit rendu
    await page.waitForSelector("#app > div", { timeout: 10000 });

    // Petit délai pour les useEffect (meta tags, JSON-LD)
    await new Promise((r) => setTimeout(r, 500));

    // Récupérer le HTML complet
    let html = await page.content();

    // Nettoyer les scripts de dev Vite si présents
    html = html.replace(/<script[^>]*>\/\*\*\s*Vite HMR.*?<\/script>/gs, "");

    // Déterminer le chemin de sortie
    let outPath;
    if (route === "/") {
      outPath = join(DIST_DIR, "index.html");
    } else {
      // /blog/slug → dist/blog/slug/index.html
      const dir = join(DIST_DIR, route);
      outPath = join(dir, "index.html");
    }

    // Créer le dossier si nécessaire
    const outDir = dirname(outPath);
    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }

    writeFileSync(outPath, html, "utf-8");
    console.log(`  ✓ ${route}`);
  } catch (err) {
    console.error(`  ✗ ${route} — ${err.message}`);
  } finally {
    await page.close();
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🚀 Prerendering de", ROUTES.length, "pages...\n");

  const server = await startServer();

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  // Prerender 3 pages en parallèle pour gagner du temps
  const CONCURRENCY = 3;
  for (let i = 0; i < ROUTES.length; i += CONCURRENCY) {
    const batch = ROUTES.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map((route) => prerenderRoute(browser, route)));
  }

  await browser.close();
  server.close();

  console.log(`\n✅ ${ROUTES.length} pages pré-rendues dans dist/\n`);
}

main().catch((err) => {
  console.error("Erreur de prerendering:", err);
  process.exit(1);
});
