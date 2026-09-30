import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { headTags, metaForPath } from "../seo/meta";

// Keeps <head> in sync with the current route. Pre-rendered pages already ship
// these tags (marked data-seo); on navigation they are swapped for the new page's.
const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const tags = headTags(metaForPath(pathname));
    document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
    tags.forEach(({ tag, attrs = {}, text }) => {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
      if (text) el.textContent = text;
      el.setAttribute("data-seo", "");
      document.head.appendChild(el);
    });
  }, [pathname]);

  return null;
};

export default Seo;
