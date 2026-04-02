import type { NavigateFunction, To } from "react-router";

export function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function scrollToHashTarget(hash: string) {
  const id = hash.replace(/^#/, "");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }

      scrollToPageTop();
    });
  });
}

export function navigateWithScroll(navigate: NavigateFunction, to: To) {
  navigate(to, { flushSync: true });

  if (typeof to === "string") {
    const hashIndex = to.indexOf("#");

    if (hashIndex >= 0 && hashIndex < to.length - 1) {
      scrollToHashTarget(to.slice(hashIndex));
      return;
    }
  }

  scrollToPageTop();
}
