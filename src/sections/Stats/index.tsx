export const Stats = () => {
  const stats = [
    { number: "500+", label: "Estimations réalisées", sublabel: "depuis 2014" },
    { number: "10", label: "Années d'expertise", sublabel: "sur le terrain" },
    { number: "15", label: "Communes couvertes", sublabel: "dans l'Ouest et au-delà" },
    { number: "48h", label: "Délai de réponse", sublabel: "garanti" }
  ];

  return (
    <section className="relative bg-white w-full">
      <div className="relative max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-24">
        <div className="animate-fade-in-up flex flex-col items-center mb-12">
          <span className="pill-label">en chiffres</span>
          <h2 className="section-title text-center mb-4">
            Des résultats construits sur le{" "}
            <em className="font-cormorant italic font-normal text-navy/70">terrain</em>
            , pas sur un écran
          </h2>
          <p className="text-neutral-500 text-[15px] font-light max-w-md text-center">
          </p>
        </div>

        <div className="animate-fade-in-up w-full h-[1px] bg-navy/6 mb-12"></div>

        <div className="animate-fade-in-up grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 w-full">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative group">
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-neutral-200"></div>
              )}
              <div className="text-navy text-3xl md:text-5xl font-cormorant font-light mb-1.5 tracking-tight group-hover:text-gold transition-colors duration-500">
                {stat.number}
              </div>
              <div className="text-neutral-600 text-[11px] uppercase tracking-[0.2em] font-medium mb-0.5">
                {stat.label}
              </div>
              <div className="text-neutral-400 text-[11px] font-light">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
