export const Testimonials = () => {
  return (
    <section className="relative bg-white bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-[900px] text-center mx-auto px-2.5 py-20 md:px-0 md:py-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-navy text-2xl md:text-3xl font-cormorant italic leading-[1.5] mb-10 font-light tracking-tight">
            "L'estimation était très détaillée et nous a permis de fixer un prix juste. Nous n'hésiterons pas à recommander Estimanou."
          </p>

          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Jean L."
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-navy font-medium">Jean L.</div>
              <div className="text-neutral-400 text-sm font-light">Saline-les-Bains</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
