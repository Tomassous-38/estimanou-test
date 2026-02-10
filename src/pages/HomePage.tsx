import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Process } from "@/sections/Process";
import { Benefits } from "@/sections/Benefits";
import { Secteurs } from "@/sections/Secteurs";
import { CTABanner } from "@/sections/CTABanner";
import { About } from "@/sections/About";
import { Testimonials } from "@/sections/Testimonials";
import { Stats } from "@/sections/Stats";
import { Examples } from "@/sections/Examples";
import { PropertiesCarousel } from "@/sections/PropertiesCarousel";
import { Services } from "@/sections/Services";
import { CTAFinal } from "@/sections/CTAFinal";
import { Blog } from "@/sections/Blog";
import { HomeSEOText } from "@/sections/HomeSEOText";
import { Footer } from "@/sections/Footer";

export const HomePage = () => {
  useScrollAnimations();

  return (
    <>
      <Header />
      {/* ① Hero — navy overlay video */}
      <Hero />
      {/* ② Processus — sage/30 */}
      <Process />
      {/* ③ Pourquoi nous — white */}
      <Benefits />
      {/* ④ Secteurs (onglets + carrousel) — white */}
      <Secteurs />
      {/* ⑤ CTA intermédiaire — navy photo */}
      <CTABanner />
      {/* ⑥ À propos — sage/40 */}
      <About />
      {/* ⑦ Témoignages — cream */}
      <Testimonials />
      {/* ⑧ Chiffres — white */}
      <Stats />
      {/* ⑨ Estimations récentes — sage/30 */}
      <Examples />
      {/* ⑩ Biens à vendre — sage/30 → ajuster */}
      <PropertiesCarousel />
      {/* ⑪ Cas d'usage — white */}
      <Services />
      {/* ⑫ CTA final — navy */}
      <CTAFinal />
      {/* ⑬ Blog — white */}
      <Blog />
      {/* ⑭ SEO Text */}
      <HomeSEOText />
      <Footer />
    </>
  );
};
