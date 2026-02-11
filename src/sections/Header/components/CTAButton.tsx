import Link from "next/link";

export const CTAButton = () => {
  return (
    <div className="hidden lg:block">
      <Link
        href="/estimer"
        className="text-white text-[13px] items-center bg-navy inline-flex justify-center text-center px-6 py-2.5 rounded-full hover:bg-navy/90 transition-all duration-300 tracking-wide font-normal"
      >
        Faire estimer mon bien
      </Link>
    </div>
  );
};
