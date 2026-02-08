export const HeroContent = () => {
  return (
    <div className="relative items-start bg-cover box-border caret-transparent flex flex-col justify-center max-w-full w-full">
      {/* Centered Content */}
      <div className="relative items-center box-border caret-transparent flex flex-col justify-center w-full text-center max-w-4xl mx-auto">
        <h1 className="text-navy text-[48px] box-border caret-transparent leading-[1.15] max-w-full mb-8 md:text-[72px] font-cormorant font-light tracking-tight">
          Connaissez la valeur de votre bien{" "}
          <span className="italic font-cormorant font-normal">à La Réunion</span>
        </h1>
        
        <p className="text-neutral-500 text-xl mb-12 max-w-2xl font-light leading-relaxed">
          Estimation gratuite et personnalisée en moins de 48h
        </p>

        <a
          href="#estimer"
          className="text-white text-base items-center bg-navy box-border caret-transparent inline-flex justify-center leading-4 max-w-full text-center lowercase align-middle border overflow-hidden px-12 py-6 rounded-full border-solid border-transparent hover:bg-navy/90 transition-all hover:scale-105"
        >
          <span className="box-border caret-transparent block">
            Estimer mon bien
          </span>
        </a>
      </div>
    </div>
  );
};
