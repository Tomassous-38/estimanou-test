export const Blog = () => {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      title: "Bilan 2024 du marché réunionnais",
      date: "15 Jan 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      title: "Pourquoi faire estimer avant de vendre",
      date: "08 Jan 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      title: "Les erreurs qui font baisser la valeur",
      date: "22 Déc 2024"
    }
  ];

  return (
    <section id="actualites" className="relative bg-white bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-[1080px] text-center mx-auto px-2.5 py-20 md:px-0 md:py-32">
        <h2 className="text-navy text-[42px] md:text-[56px] leading-[1.2] font-cormorant font-light mb-16 tracking-tight">
          Actualités
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {articles.map((article, index) => (
            <article key={index} className="group cursor-pointer text-left">
              <div className="relative overflow-hidden rounded-2xl mb-4 h-[240px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-2">
                <div className="text-neutral-400 text-xs uppercase tracking-[0.15em] font-medium">{article.date}</div>
                <h3 className="text-navy text-lg font-cormorant font-medium leading-tight tracking-tight">
                  {article.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
