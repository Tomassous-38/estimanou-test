import type { Metadata } from "next";
import { MiseEnValeurSEO } from "@/sections/MiseEnValeur/MiseEnValeurSEO";
import { MiseEnValeurHero } from "@/sections/MiseEnValeur/MiseEnValeurHero";
import { MiseEnValeurIntro } from "@/sections/MiseEnValeur/MiseEnValeurIntro";
import { MiseEnValeurVideo } from "@/sections/MiseEnValeur/MiseEnValeurVideo";
import { MiseEnValeurGallery } from "@/sections/MiseEnValeur/MiseEnValeurGallery";
import { MiseEnValeurCTA } from "@/sections/MiseEnValeur/MiseEnValeurCTA";

export const metadata: Metadata = {
  title: "Mise en valeur immobilière",
  description:
    "Valorisez votre bien immobilier à La Réunion grâce à nos services de mise en valeur : photos professionnelles, home staging virtuel et vidéos drone.",
  alternates: { canonical: "https://estimanou.re/mise-en-valeur" },
};

export default function MiseEnValeurPage() {
  return (
    <>
      <MiseEnValeurSEO />
      <MiseEnValeurHero />
      <MiseEnValeurIntro />
      <MiseEnValeurVideo />
      <MiseEnValeurGallery />
      <MiseEnValeurCTA />
    </>
  );
}
