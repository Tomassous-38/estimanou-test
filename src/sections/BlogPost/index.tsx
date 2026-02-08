import { BlogContent } from "@/sections/BlogPost/components/BlogContent";
import { Sidebar } from "@/sections/BlogPost/components/Sidebar";

export const BlogPost = () => {
  return (
    <section className="relative bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-[1080px] text-left mx-auto px-2.5 py-10 md:px-0 md:py-[100px]">
        <div className="box-border caret-transparent gap-x-8 flex flex-col max-w-full gap-y-8 w-full md:flex-row">
          <BlogContent />
          <Sidebar />
        </div>
      </div>
    </section>
  );
};
