export const Stats = () => {
  const stats = [
    { number: "500+", label: "Estimations" },
    { number: "10+", label: "Années" },
    { number: "15", label: "Communes" },
    { number: "48h", label: "Délai" }
  ];

  return (
    <section className="relative bg-white bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-[1080px] text-center mx-auto px-2.5 py-20 md:px-0 md:py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-navy text-5xl md:text-6xl font-cormorant font-light mb-3 tracking-tight">
                {stat.number}
              </div>
              <div className="text-neutral-400 text-xs uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
