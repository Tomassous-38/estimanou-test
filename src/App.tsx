import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HomePage } from "@/pages/HomePage";
import { EstimerPage } from "@/pages/EstimerPage";
import { AProposPage } from "@/pages/AProposPage";
import { ContactPage } from "@/pages/ContactPage";
import { BlogPage } from "@/pages/BlogPage";
import { ResultatPage } from "@/pages/ResultatPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App = () => {
  return (
    <div className="font-outfit text-[#2C2C2C]">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/estimer" element={<EstimerPage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/actualites" element={<BlogPage />} />
        <Route path="/resultat" element={<ResultatPage />} />
      </Routes>
    </div>
  );
};
