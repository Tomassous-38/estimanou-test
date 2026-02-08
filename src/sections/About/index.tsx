export const About = () => {
  return (
    <section id="apropos" className="relative bg-sage bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-[900px] text-center mx-auto px-2.5 py-20 md:px-0 md:py-32">
        <h2 className="text-navy text-[42px] md:text-[56px] leading-[1.2] font-cormorant font-light mb-10 tracking-tight">
          L'estimation, un métier
        </h2>
        <div className="space-y-6 text-neutral-500 leading-relaxed text-lg max-w-3xl mx-auto font-light">
          <p>
            Depuis plus de 10 ans, j'accompagne les propriétaires réunionnais dans l'évaluation de leur patrimoine.
          </p>
          <p>
            Estimer un bien, ce n'est pas entrer des chiffres dans un algorithme. C'est comprendre un quartier, une rue, une orientation, un potentiel.
          </p>
        </div>
      </div>
    </section>
  );
};
