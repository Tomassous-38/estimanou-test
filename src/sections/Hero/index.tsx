import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1280&h=720&fit=crop&q=60&fm=webp"
          className="w-full h-full object-cover"
        >
          <source
            src="/hero-reunion.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy/80" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(27,58,75,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center max-w-[1080px] mx-auto pt-[140px] pb-20 px-5 md:pt-[180px] md:pb-28 md:px-8 w-full">
        <HeroContent />
      </div>

    </section>
  );
};
