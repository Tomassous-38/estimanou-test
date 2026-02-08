export const Benefits = () => {
  const benefits = [
    {
      title: "Expertise locale",
      description: "10 ans de connaissance du marché réunionnais"
    },
    {
      title: "Gratuit & sans engagement",
      description: "Un service, pas un piège commercial"
    },
    {
      title: "Interlocuteur unique",
      description: "Valentin analyse personnellement chaque bien"
    }
  ];

  return (
    <section className="relative bg-white bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-[1080px] text-center mx-auto px-2.5 py-20 md:px-0 md:py-32">
        <h2 className="text-navy text-[42px] md:text-[56px] leading-[1.2] font-cormorant font-light mb-20 max-w-3xl mx-auto tracking-tight">
          Pourquoi Estimanou
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <h3 className="text-navy text-2xl font-cormorant font-medium mb-4 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
