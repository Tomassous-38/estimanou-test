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

export default function HomePage() {
  return (
    <>
      {/* Preload hero poster — LCP candidate on homepage (eager) */}
      <link
        rel="preload"
        as="image"
        href="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1280&h=720&fit=crop&q=60&fm=webp"
        // @ts-ignore – fetchPriority not yet typed in React 18
        fetchPriority="high"
      />
      <Hero />
      <Process />
      <Benefits />
      <Secteurs />
      <CTABanner />
      <About />
      <Testimonials />
      <Stats />
      <Examples />
      <PropertiesCarousel />
      <Services />
      <CTAFinal />
      <Blog />
      <HomeSEOText />
    </>
  );
}
