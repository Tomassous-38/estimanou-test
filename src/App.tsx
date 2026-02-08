import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { BookNowBanner } from "@/sections/BookNowBanner";
import { Secteurs } from "@/sections/Secteurs";
import { About } from "@/sections/About";
import { Benefits } from "@/sections/Benefits";
import { Process } from "@/sections/Process";
import { Services } from "@/sections/Services";
import { CTABanner } from "@/sections/CTABanner";
import { Stats } from "@/sections/Stats";
import { Examples } from "@/sections/Examples";
import { Testimonials } from "@/sections/Testimonials";
import { Blog } from "@/sections/Blog";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-neutral-600 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-relaxed list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-outfit">
      <AnnouncementBanner />
      <Header />
      <Hero />
      <BookNowBanner />
      <Secteurs />
      <About />
      <Benefits />
      <Process />
      <Services />
      <CTABanner />
      <Stats />
      <Examples />
      <Testimonials />
      <Blog />
      <Footer />
    </body>
  );
};
