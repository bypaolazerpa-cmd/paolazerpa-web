import type { NavigateFunction, To } from "react-router";

export function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function navigateWithScroll(navigate: NavigateFunction, to: To) {
  navigate(to, { flushSync: true });
  scrollToPageTop();
}
