// Ends the first-load intro defined in index.html.
// Waits for the whole intro animation to finish (MIN_MS: the last "micrux"
// letter lands at ~2.13s, plus a short hold on the complete logo) and for
// fonts + page images (capped at MAX_WAIT_MS), then wipes the curtains away.
const MIN_MS = 2450;
const MAX_WAIT_MS = 4000;
const WIPE_MS = 1100;
const READY_AT_MS = 200; // hero entrance starts under the lifting curtains

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const pageLoaded = () =>
  new Promise((resolve) => {
    if (document.readyState === "complete") resolve();
    else window.addEventListener("load", resolve, { once: true });
  });

export default function finishIntro() {
  const root = document.documentElement;
  const intro = document.getElementById("intro");

  if (!root.classList.contains("intro") || !intro) {
    intro?.remove();
    return;
  }

  const minDuration = wait(Math.max(0, MIN_MS - performance.now()));
  const assetsReady = Promise.race([
    Promise.all([document.fonts?.ready, pageLoaded()]),
    wait(MAX_WAIT_MS),
  ]);

  Promise.all([minDuration, assetsReady]).then(() => {
    intro.classList.add("intro-exit");
    setTimeout(() => root.classList.add("app-ready"), READY_AT_MS);
    setTimeout(() => {
      root.classList.remove("intro");
      intro.remove();
    }, WIPE_MS);
  });
}
