export const AnnouncementBanner = () => {
  return (
    <div className="relative bg-navy w-full">
      <div className="relative flex items-center justify-center max-w-[1080px] text-center mx-auto py-2.5 px-5">
        <div className="text-xs md:text-sm text-white/80 font-light tracking-wide">
          Estimation gratuite
          <span className="mx-2 text-gold">•</span>
          Sans engagement
          <span className="mx-2 text-gold">•</span>
          Résultat en 48h
        </div>
      </div>
    </div>
  );
};
