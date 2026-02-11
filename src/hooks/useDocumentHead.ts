// Ce hook est maintenu pour rétro-compatibilité.
// Il délègue au composant <Helmet> via react-helmet-async.
// Les meta tags sont ainsi injectés côté serveur lors du prerendering.

import { useEffect } from "react";

interface DocumentHeadOptions {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

/**
 * Met à jour le <head> du document.
 * Pendant le prerendering, react-helmet-async gère les meta tags.
 * Ce hook fait la même chose côté client pour les navigations SPA.
 */
export const useDocumentHead = (options: DocumentHeadOptions) => {
  useEffect(() => {
    document.title = options.title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta("description", options.description);
    setMeta("og:title", options.title, true);
    setMeta("og:description", options.description, true);
    setMeta("og:type", options.ogType || "article", true);
    if (options.ogImage) {
      setMeta("og:image", options.ogImage, true);
      setMeta("twitter:card", "summary_large_image");
      setMeta("twitter:image", options.ogImage);
    }
    setMeta("twitter:title", options.title);
    setMeta("twitter:description", options.description);

    if (options.canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = options.canonicalUrl;
    }

    return () => {
      document.title = "Estimanou — Estimation immobilière gratuite à La Réunion";
    };
  }, [options.title, options.description, options.canonicalUrl, options.ogImage, options.ogType]);
};
