import { useEffect } from "react";

// Fades elements marked with `data-reveal` up into place as they scroll into view.
// Starts only after the intro loader has finished (<html class="app-ready">),
// and picks up elements from lazily loaded pages via a MutationObserver.
const useScrollReveal = () => {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("reveal-on")) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    const scan = () =>
      document
        .querySelectorAll("[data-reveal]:not(.is-visible)")
        .forEach((el) => io.observe(el));
    const content = new MutationObserver(scan);

    const start = () => {
      scan();
      content.observe(document.body, { childList: true, subtree: true });
    };

    let waitForIntro;
    if (root.classList.contains("app-ready")) {
      start();
    } else {
      waitForIntro = new MutationObserver(() => {
        if (root.classList.contains("app-ready")) {
          waitForIntro.disconnect();
          start();
        }
      });
      waitForIntro.observe(root, { attributes: true, attributeFilter: ["class"] });
    }

    return () => {
      io.disconnect();
      content.disconnect();
      waitForIntro?.disconnect();
    };
  }, []);
};

export default useScrollReveal;
