export const CTABanner = () => {
  return (
    <section className="relative bg-navy bg-cover box-border caret-transparent w-full bg-center overflow-hidden">
      <div className="relative items-center bg-cover box-border caret-transparent flex flex-col justify-center max-w-[900px] text-center mx-auto py-24 px-2.5 md:py-32 md:px-0">
        <h2 className="text-white text-[42px] md:text-[56px] leading-[1.2] font-cormorant font-light mb-12 max-w-3xl tracking-tight">
          Votre bien a une valeur
        </h2>

        <a
          href="#estimer"
          className="text-white text-base items-center bg-gold box-border caret-transparent inline-flex justify-center leading-4 text-center align-middle border overflow-hidden px-12 py-6 rounded-full border-solid border-transparent hover:bg-gold/90 transition-all hover:scale-105"
        >
          <span className="box-border caret-transparent block">
            Estimer gratuitement
          </span>
        </a>
      </div>
    </section>
  );
};
