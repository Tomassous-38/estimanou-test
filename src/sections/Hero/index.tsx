import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative bg-white bg-cover box-border caret-transparent w-full bg-center overflow-hidden">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col justify-center max-w-[1080px] text-left mx-auto pt-[140px] pb-20 px-2.5 md:pt-[200px] md:pb-32 md:px-0">
        <HeroContent />
      </div>
    </section>
  );
};
