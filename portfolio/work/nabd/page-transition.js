(() => {
  const STORAGE_KEY = "digital-zn:page-transition";
  const TRANSITION_MS = 800;
  const REVEAL_MS = 760;
  const overlay = document.querySelector("[data-page-transition]");
  const count = document.querySelector("[data-transition-count]");
  const title = document.querySelector(".transition-title");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let navigating = false;

  if (!overlay || !count || !title) return;

  const pageKey = (value) => {
    const url = new URL(value, window.location.href);
    return `${url.origin}${url.pathname}${url.search}`;
  };

  let pending = null;
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      pending = JSON.parse(stored);
      sessionStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    try { sessionStorage.removeItem(STORAGE_KEY); } catch {}
  }

  let isExpectedDestination = false;
  try {
    isExpectedDestination = Boolean(
      pending?.destination &&
      pageKey(pending.destination) === pageKey(window.location.href)
    );
  } catch {}

  if (isExpectedDestination && !reduceMotion) {
    count.textContent = pending.count || "01 / 05";
    title.textContent = pending.title || "Loading";
    document.documentElement.classList.add("is-transitioning");
    overlay.classList.add("is-revealing");

    window.setTimeout(() => {
      overlay.classList.remove("is-revealing");
      document.documentElement.classList.remove(
        "is-transitioning",
        "has-pending-page-transition"
      );
    }, REVEAL_MS);
  } else {
    document.documentElement.classList.remove("has-pending-page-transition");
  }

  document.addEventListener("click", (event) => {
    if (
      reduceMotion ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;

    const link = event.target.closest?.("a[href]");
    if (
      !link ||
      link.hasAttribute("download") ||
      (link.target && link.target !== "_self")
    ) return;

    const destination = new URL(link.href, window.location.href);
    const current = new URL(window.location.href);
    const isSamePage = destination.origin === current.origin &&
      destination.pathname === current.pathname &&
      destination.search === current.search;

    if (
      destination.origin !== current.origin ||
      isSamePage ||
      !["http:", "https:", "file:"].includes(destination.protocol)
    ) return;

    event.preventDefault();
    if (navigating) return;
    navigating = true;

    const transition = {
      destination: destination.href,
      title:
        link.dataset.transitionTitle ||
        link.getAttribute("aria-label") ||
        link.textContent.trim() ||
        "Loading",
      count: link.dataset.transitionCount || "01 / 05",
    };

    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(transition));
    } catch {}

    count.textContent = transition.count;
    title.textContent = transition.title;
    document.documentElement.classList.add("is-transitioning");
    overlay.classList.add("is-covering");

    window.setTimeout(() => {
      window.location.assign(destination.href);
    }, TRANSITION_MS);
  });

  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    navigating = false;
    overlay.classList.remove("is-covering", "is-revealing");
    document.documentElement.classList.remove(
      "is-transitioning",
      "has-pending-page-transition"
    );
    try { sessionStorage.removeItem(STORAGE_KEY); } catch {}
  });
})();
