export const MiseEnValeurVideo = () => {
  return (
    <section className="relative bg-white w-full">
      <div className="max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-24">
        <div className="text-center mb-10">
          <span className="pill-label">en vidéo</span>
          <h2 className="section-title">
            Découvrez la villa en{" "}
            <em className="font-cormorant italic font-normal text-navy/70">mouvement</em>
          </h2>
        </div>

        <div className="animate-fade-in-up relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-navy/5">
          <video
            controls
            playsInline
            preload="metadata"
            poster="https://static.wixstatic.com/media/cda1c0_b60467e4f60c4ed5a3a7c5bbc4278b83~mv2.jpg/v1/fill/w_1200,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_b60467e4f60c4ed5a3a7c5bbc4278b83~mv2.jpg"
            className="w-full h-full object-cover"
          >
            <source
              src="https://video.wixstatic.com/video/cda1c0_4fed7cf984d44f41a76d07f7d3f117a8/1080p/mp4/file.mp4"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </div>
    </section>
  );
};
