import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { BlogArticlePage } from "@/pages/BlogArticlePage";
import { CityLandingPage } from "@/pages/CityLandingPage";
import { PropertyListPage } from "@/pages/PropertyListPage";
import { PropertyDetailPage } from "@/pages/PropertyDetailPage";
import { MiseEnValeurPage } from "@/pages/MiseEnValeurPage";
import { BlogListPage } from "@/pages/BlogListPage";
import { EstimationPage } from "@/pages/EstimationPage";
import { ScrollToTop } from "@/components/ScrollToTop";

export const App = () => {
  return (
    <div className="text-neutral-700 text-base font-normal bg-white leading-relaxed font-outfit">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/estimation-immobiliere/:citySlug" element={<CityLandingPage />} />
        <Route path="/biens-a-vendre" element={<PropertyListPage />} />
        <Route path="/biens-a-vendre/:citySlug" element={<PropertyListPage />} />
        <Route path="/biens-a-vendre/:citySlug/:propertySlug" element={<PropertyDetailPage />} />
        <Route path="/mise-en-valeur" element={<MiseEnValeurPage />} />
        <Route path="/estimer" element={<EstimationPage />} />
      </Routes>
    </div>
  );
};
