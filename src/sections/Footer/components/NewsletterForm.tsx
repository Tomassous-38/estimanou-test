export const NewsletterForm = () => {
  return (
    <div className="relative items-start bg-cover box-border caret-transparent flex flex-col justify-start gap-y-6 w-full max-w-xl mx-auto">
      <h3 className="text-navy text-xl font-cormorant font-light tracking-tight">
        Recevez nos analyses du marché immobilier
      </h3>
      <div className="box-border caret-transparent max-w-full w-full">
        <form className="text-gray-700 text-base box-border caret-transparent flex flex-col md:flex-row gap-3 leading-[22.4px]">
          <div className="relative items-start box-border caret-transparent flex flex-col flex-1">
            <input
              type="email"
              name="fields[email]"
              placeholder="Votre email"
              value=""
              className="text-black text-sm bg-white box-border caret-transparent block leading-[14px] text-start align-middle w-full border border-sage px-6 py-4 rounded-full border-solid focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div className="relative items-end box-border caret-transparent flex justify-start w-full md:w-auto">
            <button
              type="submit"
              className="text-white items-center bg-navy caret-transparent flex justify-center leading-4 max-w-full text-center align-middle border overflow-hidden px-8 py-4 rounded-full border-solid border-transparent hover:bg-navy/90 transition-all w-full md:w-auto"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
