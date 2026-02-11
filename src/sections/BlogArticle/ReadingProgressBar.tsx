'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";

export const ReadingProgressBar = () => {
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const articleBody = document.querySelector(".prose-estimanou");
    if (!articleBody || !barRef.current) return;

    const rect = articleBody.getBoundingClientRect();
    const articleTop = rect.top + window.scrollY;
    const articleHeight = rect.height;
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    setVisible(scrollPos > 400);

    const start = articleTop - windowHeight * 0.2;
    const end = articleTop + articleHeight - windowHeight * 0.5;
    const pct = Math.min(Math.max((scrollPos - start) / (end - start), 0), 1) * 100;

    // Direct DOM mutation — no re-render, butter smooth
    barRef.current.style.width = `${pct}%`;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* CTA bar — navy background, full width */}
      <div className="bg-navy w-full">
        <div className="flex items-center justify-center gap-5 md:gap-8 max-w-[1080px] mx-auto px-5 py-3.5 md:px-8 md:py-3">
          <span className="text-white text-base md:text-lg font-cormorant font-semibold tracking-tight">
            Vous vendez ? Encore faut-il connaître le bon prix.
          </span>
          <a
            href="/estimer"
            className="group flex-shrink-0 text-navy text-[12px] md:text-[13px] items-center bg-gold inline-flex justify-center text-center px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 font-semibold uppercase tracking-[0.1em]"
          >
            Estimer gratuitement
            <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* Reading progress line — direct DOM ref, no React re-render */}
      <div className="h-[3px] w-full" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
        <div
          ref={barRef}
          className="h-full"
          style={{
            width: "0%",
            backgroundColor: "#B8975A",
            transition: "width 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)",
            willChange: "width",
          }}
        />
      </div>
    </div>
  );
};
