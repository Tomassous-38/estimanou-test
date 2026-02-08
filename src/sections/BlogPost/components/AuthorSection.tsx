export const AuthorSection = () => {
  return (
    <div className="items-center bg-white box-border caret-transparent gap-x-5 flex flex-col gap-y-5 w-full md:flex-row">
      <div className="box-border caret-transparent shrink-0">
        <img
          alt=""
          src="https://c.animaapp.com/mldj4dxq5wWcrm/assets/1.png"
          className="aspect-[auto_300_/_300] box-border caret-transparent inline-block h-[75px] max-w-full align-top w-[75px] rounded-[50%]"
        />
      </div>
      <div className="items-start box-border caret-transparent flex flex-col grow">
        <h3 className="text-neutral-900 text-3xl italic font-normal box-border caret-transparent leading-9 capitalize mb-2.5 font-eb_garamond">
          elias
        </h3>
        <div className="box-border caret-transparent leading-[22.4px] mb-5"></div>
      </div>
    </div>
  );
};
