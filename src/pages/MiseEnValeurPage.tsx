import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MiseEnValeurSEO } from "@/sections/MiseEnValeur/MiseEnValeurSEO";
import { MiseEnValeurHero } from "@/sections/MiseEnValeur/MiseEnValeurHero";
import { MiseEnValeurIntro } from "@/sections/MiseEnValeur/MiseEnValeurIntro";
import { MiseEnValeurVideo } from "@/sections/MiseEnValeur/MiseEnValeurVideo";
import { MiseEnValeurGallery } from "@/sections/MiseEnValeur/MiseEnValeurGallery";
import { MiseEnValeurCTA } from "@/sections/MiseEnValeur/MiseEnValeurCTA";

export const MiseEnValeurPage = () => {
  useScrollAnimations();

  return (
    <>
      <Header />
      <MiseEnValeurSEO />
      <MiseEnValeurHero />
      <MiseEnValeurIntro />
      <MiseEnValeurVideo />
      <MiseEnValeurGallery />
      <MiseEnValeurCTA />
      <Footer />
    </>
  );
};
