import { AuthorSection } from "@/sections/BlogPost/components/AuthorSection";
import { CommentForm } from "@/sections/BlogPost/components/CommentForm";

export const BlogContent = () => {
  return (
    <div className="relative items-start bg-cover box-border caret-transparent flex flex-col justify-start w-full md:w-[calc(65%_-_16px)]">
      <div className="box-border caret-transparent max-w-full">
        <p className="box-border caret-transparent mb-3.5">
          Ac habitant malesuada tellus aliquam at. Egestas ac faucibus pretium
          neque. Ut non odio risus nullam enim in aliquet fusce massa.
        </p>
        <h2 className="text-neutral-900 text-[35px] box-border caret-transparent leading-[42px] my-[29.05px] md:text-[45px] md:leading-[54px] md:my-[37.35px]">
          Vel blandit aenean duis arcu at. Ut neque sed in pulvinar amet amet.
        </h2>
        <p className="box-border caret-transparent my-3.5">
          Auctor ridiculus aliquam felis purus risus tellus pharetra nec sed.
          Quisque faucibus cursus viverra venenatis fermentum ipsum ut vitae et.
          Commodo dignissim a aliquet habitant phasellus. Nunc morbi mi congue
          risus. Nisl nulla praesent enim maecenas mollis. In suspendisse eget a
          donec. Ligula viverra lorem tristique ac vitae nec. Risus et bibendum
          sem quis.
          <br className="box-border caret-transparent" />
          <br className="box-border caret-transparent" />
          Neque sagittis felis ut eget in molestie a mi. Maecenas ultrices
          cursus bibendum quisque vitae sagittis. Suscipit hendrerit sed nunc
          sit. Viverra eget eget sit ut senectus nullam gravida quam. Turpis
          pellentesque vulputate neque at. Mauris vel ut nunc metus amet mattis
          lectus at lectus.
          <br className="box-border caret-transparent" />
          <br className="box-border caret-transparent" />
          Mauris dui turpis nunc sem. Tristique sapien venenatis quis blandit ac
          arcu. Luctus in arcu ultrices nibh. Odio fermentum turpis purus
          laoreet nunc lacus diam. A volutpat eu pharetra massa ultrices sed
          lacinia. Venenatis vel quis euismod mattis nibh nisi vitae nulla urna.
          Tristique ac praesent tellus risus faucibus pellentesque quis nisl ut.
          Ac eget faucibus tortor egestas blandit sed. Arcu suscipit condimentum
          pellentesque turpis. Et nisl magna turpis pretium donec enim fusce.
          Pellentesque diam lacus fringilla sit cras. Phasellus libero eleifend
          nascetur rhoncus est cras viverra.
        </p>
        <p className="box-border caret-transparent my-3.5">
          Neque sagittis felis ut eget in molestie a mi. Maecenas ultrices
          cursus bibendum quisque vitae sagittis. Suscipit hendrerit sed nunc
          sit. Viverra eget eget sit ut senectus nullam gravida quam. Turpis
          pellentesque vulputate neque at.
        </p>
        <h2 className="text-neutral-900 text-[35px] box-border caret-transparent leading-[42px] my-[29.05px] md:text-[45px] md:leading-[54px] md:my-[37.35px]">
          Mauris vel ut nunc metus amet mattis lectus at lectus.
        </h2>
        <p className="box-border caret-transparent my-3.5">
          Mauris dui turpis nunc sem. Tristique sapien venenatis quis blandit ac
          arcu. Luctus in arcu ultrices nibh. Odio fermentum turpis purus
          laoreet nunc lacus diam. A volutpat eu pharetra massa ultrices sed
          lacinia. Venenatis vel quis euismod mattis nibh nisi vitae nulla urna.
          Tristique ac praesent tellus risus faucibus pellentesque quis nisl ut.
          Ac eget faucibus tortor egestas blandit sed. Arcu suscipit condimentum
          pellentesque turpis. Et nisl magna turpis pretium donec enim fusce.
          Pellentesque diam lacus fringilla sit cras. Phasellus libero eleifend
          nascetur rhoncus est cras viverra.
        </p>
        <p className="box-border caret-transparent mt-3.5">
          Mauris dui turpis nunc sem. Tristique sapien venenatis quis blandit ac
          arcu. Luctus in arcu ultrices nibh. Odio fermentum turpis purus
          laoreet nunc lacus diam. A volutpat eu pharetra massa ultrices sed
          lacinia. Venenatis vel quis euismod mattis nibh nisi vitae nulla urna.
          <br className="box-border caret-transparent" />
          <br className="box-border caret-transparent" />
          Tristique ac praesent tellus risus faucibus pellentesque quis nisl ut.
          Ac eget faucibus tortor egestas blandit sed. Arcu suscipit condimentum
          pellentesque turpis. Et nisl magna turpis pretium donec enim fusce.
          Pellentesque diam lacus fringilla sit cras. Phasellus libero eleifend
          nascetur rhoncus.
        </p>
      </div>
      <div className="box-border caret-transparent flex max-w-full w-full my-10">
        <div className="box-border caret-transparent flex w-full">
          <div className="border-b-neutral-400 border-l-neutral-400 border-r-neutral-400 border-t-stone-100 box-border caret-transparent w-full border-t-2"></div>
        </div>
      </div>
      <div className="relative items-center bg-cover box-border caret-transparent flex flex-wrap justify-between max-w-full w-full">
        <ul className="box-border caret-transparent gap-x-2.5 flex flex-wrap list-none max-w-full gap-y-2.5 pl-0 md:gap-x-[25px] md:gap-y-[25px]">
          <li className="relative items-center box-border caret-transparent flex">
            <span className="box-border caret-transparent block">
              <span className="text-neutral-900 text-base box-border caret-transparent leading-[22.4px]">
                Posted on:{" "}
              </span>
              April 8th, 2023
            </span>
          </li>
        </ul>
        <div className="relative items-center bg-cover box-border caret-transparent gap-x-[5px] flex flex-wrap justify-end max-w-full gap-y-[5px]">
          <div className="text-neutral-900 text-base box-border caret-transparent leading-[22.4px] max-w-full">
            Share Post:
          </div>
          <div className="box-border caret-transparent gap-x-[15px] flex flex-wrap justify-start gap-y-[15px] md:gap-x-5 md:gap-y-5">
            <div className="text-[12.25px] items-center bg-orange-100 box-border caret-transparent flex justify-center leading-[12.25px] min-h-[auto] min-w-[auto] rounded-md md:hidden md:min-h-0 md:min-w-0">
              <span className="text-neutral-900 box-border caret-transparent flex h-[25px] justify-center min-h-[auto] min-w-[auto] w-[25px] p-1.5 rounded-[21px] md:min-h-0 md:min-w-0">
                <img
                  src="https://c.animaapp.com/mldj4dxq5wWcrm/assets/icon-1.svg"
                  alt="Icon"
                  className="box-border caret-transparent"
                />
              </span>
            </div>
            <div className="text-[12.25px] items-center bg-orange-100 box-border caret-transparent hidden justify-center leading-[12.25px] min-h-0 min-w-0 rounded-md md:flex md:min-h-[auto] md:min-w-[auto]">
              <span className="text-neutral-900 box-border caret-transparent flex h-[25px] justify-center min-h-0 min-w-0 w-[25px] p-1.5 rounded-[21px] md:min-h-[auto] md:min-w-[auto]">
                <img
                  src="https://c.animaapp.com/mldj4dxq5wWcrm/assets/icon-2.svg"
                  alt="Icon"
                  className="box-border caret-transparent"
                />
              </span>
            </div>
            <div className="text-[12.25px] items-center bg-orange-100 box-border caret-transparent hidden justify-center leading-[12.25px] min-h-0 min-w-0 rounded-md md:flex md:min-h-[auto] md:min-w-[auto]">
              <span className="text-neutral-900 box-border caret-transparent flex h-[25px] justify-center min-h-0 min-w-0 w-[25px] p-1.5 rounded-[21px] md:min-h-[auto] md:min-w-[auto]">
                <img
                  src="https://c.animaapp.com/mldj4dxq5wWcrm/assets/icon-3.svg"
                  alt="Icon"
                  className="box-border caret-transparent"
                />
              </span>
            </div>
            <div className="text-[12.25px] items-center bg-orange-100 box-border caret-transparent hidden justify-center leading-[12.25px] min-h-0 min-w-0 rounded-md md:flex md:min-h-[auto] md:min-w-[auto]">
              <span className="text-neutral-900 box-border caret-transparent flex h-[25px] justify-center min-h-0 min-w-0 w-[25px] p-1.5 rounded-[21px] md:min-h-[auto] md:min-w-[auto]">
                <img
                  src="https://c.animaapp.com/mldj4dxq5wWcrm/assets/icon-4.svg"
                  alt="Icon"
                  className="box-border caret-transparent"
                />
              </span>
            </div>
            <div className="text-[12.25px] items-center bg-orange-100 box-border caret-transparent hidden justify-center leading-[12.25px] min-h-0 min-w-0 rounded-md md:flex md:min-h-[auto] md:min-w-[auto]">
              <span className="text-neutral-900 box-border caret-transparent flex h-[25px] justify-center min-h-0 min-w-0 w-[25px] p-1.5 rounded-[21px] md:min-h-[auto] md:min-w-[auto]">
                <img
                  src="https://c.animaapp.com/mldj4dxq5wWcrm/assets/icon-5.svg"
                  alt="Icon"
                  className="box-border caret-transparent"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex max-w-full w-full my-10">
        <div className="box-border caret-transparent flex w-full">
          <div className="border-b-neutral-400 border-l-neutral-400 border-r-neutral-400 border-t-stone-100 box-border caret-transparent w-full border-t-2"></div>
        </div>
      </div>
      <h2 className="text-neutral-900 text-[35px] box-border caret-transparent leading-[42px] max-w-full mb-10 md:text-[45px] md:leading-[54px]">
        About the author
      </h2>
      <AuthorSection />
      <div className="box-border caret-transparent flex max-w-full w-full my-10">
        <div className="box-border caret-transparent flex w-full">
          <div className="border-b-neutral-400 border-l-neutral-400 border-r-neutral-400 border-t-stone-100 box-border caret-transparent w-full border-t-2"></div>
        </div>
      </div>
      <div className="box-border caret-transparent max-w-full w-full">
        <ol className="box-border caret-transparent gap-x-5 flex flex-col list-none gap-y-5 w-full pl-0"></ol>
      </div>
      <div className="box-border caret-transparent flex max-w-full w-full my-10">
        <div className="box-border caret-transparent flex w-full">
          <div className="border-b-neutral-400 border-l-neutral-400 border-r-neutral-400 border-t-stone-100 box-border caret-transparent w-full border-t-2"></div>
        </div>
      </div>
      <CommentForm />
    </div>
  );
};
