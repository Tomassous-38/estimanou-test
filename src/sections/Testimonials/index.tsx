export const Testimonials = () => {
  const testimonials = [
    {
      quote: "On pensait connaître la valeur de notre maison. L'estimation de Valentin nous a ouvert les yeux, et nous a fait gagner 25 000 € sur la vente.",
      name: "Jean L.",
      location: "Saline-les-Bains",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      quote: "Valentin a pris le temps de nous expliquer chaque détail de l'estimation. Ce n'est pas juste un chiffre, c'est un vrai argumentaire de prix.",
      name: "Marie D.",
      location: "Saint-Leu",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section className="relative bg-[#F5F0E8] w-full">
      <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-[1080px] mx-auto px-5 py-20 md:px-8 md:py-28">
        {/* Image side */}
        <div className="animate-fade-in-up md:w-5/12 flex-shrink-0">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=600&fit=crop"
              alt="Maison estimée à La Réunion"
              className="rounded-2xl object-cover w-full h-[280px] md:h-[420px]"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                <span className="text-gold text-lg">★</span>
              </div>
              <div className="text-left">
                <div className="text-navy text-sm font-cormorant font-semibold">4.9/5</div>
                <div className="text-neutral-500 text-[11px] font-light">satisfaction client</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial side */}
        <div className="animate-fade-in-up animate-delay-100 md:w-7/12 text-center md:text-left">
          <span className="pill-label !border-navy/10">témoignages</span>
          <h2 className="section-title mb-10">
            Ce qu'ils disent de leur{" "}
            <em className="font-cormorant italic font-normal text-navy/70">expérience</em>
          </h2>

          {/* First testimonial */}
          <div className="mb-8 pb-8 border-b border-navy/8">
            <div className="flex justify-center md:justify-start gap-0.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold/70" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-navy text-lg md:text-xl font-cormorant italic leading-[1.7] mb-5 font-light">
              « {testimonials[0].quote} »
            </blockquote>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src={testimonials[0].avatar} alt={testimonials[0].name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
              <div className="text-left">
                <div className="text-navy text-sm font-cormorant font-semibold italic">{testimonials[0].name}</div>
                <div className="text-neutral-500 text-[13px] font-light">{testimonials[0].location}</div>
              </div>
            </div>
          </div>

          {/* Second testimonial */}
          <div>
            <blockquote className="text-navy/80 text-base font-cormorant italic leading-[1.7] mb-5 font-light">
              « {testimonials[1].quote} »
            </blockquote>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src={testimonials[1].avatar} alt={testimonials[1].name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
              <div className="text-left">
                <div className="text-navy text-sm font-cormorant font-semibold italic">{testimonials[1].name}</div>
                <div className="text-neutral-500 text-[13px] font-light">{testimonials[1].location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
