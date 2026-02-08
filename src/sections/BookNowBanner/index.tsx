export const BookNowBanner = () => {
  return (
    <section className="relative bg-navy bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-center bg-cover box-border caret-transparent flex flex-col justify-center max-w-[900px] text-center mx-auto py-16 px-2.5 md:py-20 md:px-0">
        <h2 className="text-white text-3xl md:text-4xl font-cormorant font-light mb-8 max-w-2xl leading-[1.3] tracking-tight">
          Une estimation fiable pour prendre les bonnes décisions
        </h2>
        <a
          href="#estimer"
          className="text-navy text-base items-center bg-white box-border caret-transparent inline-flex justify-center leading-4 text-center align-middle border overflow-hidden px-10 py-5 rounded-full border-solid border-transparent hover:bg-navy-100 transition-all hover:scale-105 font-medium"
        >
          Commencer
        </a>
      </div>
    </section>
  );
};
