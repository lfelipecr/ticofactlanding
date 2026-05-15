import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string;
}

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [attrName, attrValue] = selector
      .replace("meta[", "")
      .replace("]", "")
      .split("=")
      .map((s) => s.replace(/"/g, ""));
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://factico.net/logo.png",
  keywords,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    setMeta('meta[name="description"]', "content", description);

    // Keywords
    if (keywords) {
      setMeta('meta[name="keywords"]', "content", keywords);
    }

    // Canonical
    setLink("canonical", canonical);

    // Open Graph
    setMeta('meta[property="og:title"]', "content", ogTitle ?? title);
    setMeta('meta[property="og:description"]', "content", ogDescription ?? description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", ogImage);

    // Twitter Card
    setMeta('meta[name="twitter:title"]', "content", ogTitle ?? title);
    setMeta('meta[name="twitter:description"]', "content", ogDescription ?? description);
    setMeta('meta[name="twitter:url"]', "content", canonical);
    setMeta('meta[name="twitter:image"]', "content", ogImage);
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, keywords]);
}
