/**
 * Script de déploiement SSG complet pour Estimanou
 *
 * Usage: node scripts/deploy-ssg.mjs
 *
 * 1. Build Vite → dist/
 * 2. Prerender avec Puppeteer → pages HTML statiques dans dist/
 * 3. Prépare .vercel/output/ (Build Output API)
 * 4. Deploy --prebuilt vers Vercel
 *
 * Résultat : 32 pages pré-rendues avec meta tags, JSON-LD, contenu complet.
 * Les crawlers Google reçoivent du HTML prêt à indexer.
 */

import { execSync } from "child_process";
import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = resolve(ROOT, "dist");
const OUTPUT = resolve(ROOT, ".vercel/output");
const STATIC = resolve(OUTPUT, "static");

function run(cmd, label) {
  console.log(`\n${"─".repeat(50)}`);
  console.log(`📦 ${label}`);
  console.log(`${"─".repeat(50)}\n`);
  execSync(cmd, { cwd: ROOT, stdio: "inherit" });
}

async function main() {
  console.log("\n🚀 Déploiement SSG Estimanou\n");

  // 1. Build Vite
  run("npx vite build", "Build Vite");

  // 2. Prerender toutes les pages
  run("node scripts/prerender.mjs", "Prerendering des 32 pages");

  // 3. Préparer .vercel/output/
  console.log("\n📁 Préparation de .vercel/output/...");

  if (existsSync(OUTPUT)) {
    rmSync(OUTPUT, { recursive: true });
  }
  mkdirSync(STATIC, { recursive: true });

  // Copier dist/ → .vercel/output/static/
  cpSync(DIST, STATIC, { recursive: true });

  // Créer config.json (Build Output API v3)
  const config = {
    version: 3,
    routes: [
      {
        src: "^/(?:(.+)/)?index(?:\\.html)?/?$",
        headers: { Location: "/$1" },
        status: 308,
      },
      {
        src: "^/(.*)\\.html/?$",
        headers: { Location: "/$1" },
        status: 308,
      },
      {
        handle: "filesystem",
      },
      {
        src: "/((?!assets/|sitemap\\.xml|robots\\.txt).*)",
        dest: "/index.html",
        check: true,
      },
    ],
  };

  writeFileSync(resolve(OUTPUT, "config.json"), JSON.stringify(config, null, 2));
  console.log("✓ .vercel/output/ prêt\n");

  // 4. Deploy vers Vercel
  run(
    "npx vercel deploy --prebuilt --prod --token 4gqZtAPfeA2tOvkWzOrERZxv --yes",
    "Déploiement Vercel (prebuilt)"
  );

  console.log("\n✅ Déploiement SSG terminé ! → https://estimanou-test.vercel.app\n");
}

main().catch((err) => {
  console.error("❌ Erreur:", err.message);
  process.exit(1);
});
