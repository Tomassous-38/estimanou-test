export const CommentForm = () => {
  return (
    <div className="bg-blue-100 box-border caret-transparent max-w-full w-full p-[25px] rounded-[40px] md:p-10">
      <div className="box-border caret-transparent">
        <h5 className="text-neutral-900 text-2xl box-border caret-transparent leading-[28.8px]">
          Leave a Reply{" "}
          <small className="text-[19.2px] box-border caret-transparent leading-[23.04px] ml-[5px]">
            <a
              href="/traveltrip/risus-egestas-elementum-urna-eleifend-consectetur-4/#respond"
              className="box-border caret-transparent hidden underline"
            >
              Cancel reply
            </a>
          </small>
        </h5>
        <form className="text-gray-700 text-base box-border caret-transparent gap-x-4 grid grid-cols-[repeat(12,1fr)] leading-[22.4px] gap-y-4 w-full">
          <p className="box-border caret-transparent col-start-[span_12] my-4">
            <span className="box-border caret-transparent">
              Your email address will not be published.
            </span>
            <span className="box-border caret-transparent block mt-3">
              Required fields are marked{" "}
              <span className="box-border caret-transparent">*</span>
            </span>
          </p>
          <div className="relative items-start box-border caret-transparent flex flex-col col-start-[span_12] w-full">
            <label className="text-neutral-900 box-border caret-transparent block leading-4 align-middle mb-2">
              Comment
              <span className="text-amber-500 box-border caret-transparent inline-block pl-1">
                *
              </span>
            </label>
            <textarea
              name="comment"
              className="text-black text-sm bg-transparent box-border caret-transparent block leading-[19.6px] min-h-[100px] resize-y text-start align-top w-full border-neutral-400 p-4 rounded-[10px]"
            ></textarea>
          </div>
          <div className="relative items-start box-border caret-transparent flex flex-col col-start-[span_12] w-full">
            <label className="text-neutral-900 box-border caret-transparent block leading-4 align-middle mb-2">
              Name
              <span className="text-amber-500 box-border caret-transparent inline-block pl-1">
                *
              </span>
            </label>
            <input
              name="author"
              type="text"
              value=""
              className="text-black text-sm bg-transparent box-border caret-transparent block leading-[14px] text-start align-middle w-full border border-neutral-400 p-4 rounded-[10px] border-solid"
            />
          </div>
          <div className="relative items-start box-border caret-transparent flex flex-col col-start-[span_12] w-full">
            <label className="text-neutral-900 box-border caret-transparent block leading-4 align-middle mb-2">
              Email
              <span className="text-amber-500 box-border caret-transparent inline-block pl-1">
                *
              </span>
            </label>
            <input
              name="email"
              type="text"
              value=""
              className="text-black text-sm bg-transparent box-border caret-transparent block leading-[14px] text-start align-middle w-full border border-neutral-400 p-4 rounded-[10px] border-solid"
            />
          </div>
          <div className="relative items-start box-border caret-transparent flex flex-col col-start-[span_12] w-full">
            <label className="text-neutral-900 box-border caret-transparent block leading-4 align-middle mb-2">
              Website
            </label>
            <input
              name="url"
              type="text"
              value=""
              className="text-black text-sm bg-transparent box-border caret-transparent block leading-[14px] text-start align-middle w-full border border-neutral-400 p-4 rounded-[10px] border-solid"
            />
          </div>
          <div className="relative items-start box-border caret-transparent flex flex-col col-start-[span_12] w-full">
            <div className="items-center box-border caret-transparent flex w-full">
              <input
                name="wp-comment-cookies-consent"
                type="checkbox"
                value="yes"
                className="text-blue-500 font-normal bg-transparent bg-origin-border box-border caret-transparent block shrink-0 h-4 leading-4 text-start align-middle w-4 border border-neutral-400 p-0 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
              />
              <label className="box-border caret-transparent block align-middle pl-[5px]">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
          </div>
          <div className="relative items-end box-border caret-transparent flex col-start-[span_12] justify-center w-full">
            <input
              name="submit"
              type="submit"
              value="Post Comment"
              className="text-neutral-900 items-center box-border caret-transparent flex justify-center leading-4 max-w-full text-center lowercase align-middle border px-7 py-6 rounded-[20px] border-solid border-transparent hover:text-white"
            />
            <input
              type="hidden"
              name="comment_post_ID"
              value="55"
              className="text-black font-normal bg-transparent box-border caret-transparent hidden leading-4 text-start align-middle p-0"
            />
            <input
              type="hidden"
              name="comment_parent"
              value="0"
              className="text-black font-normal bg-transparent box-border caret-transparent hidden leading-4 text-start align-middle p-0"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
