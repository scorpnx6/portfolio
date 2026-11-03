(() => {
  document.documentElement.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const title = document.querySelector("[data-split-text]");

  if (title) {
    const words = title.textContent.trim().split(/\s+/);
    let letterIndex = 0;
    title.replaceChildren();

    words.forEach((word, wordIndex) => {
      const wordElement = document.createElement("span");
      wordElement.className = "title-word";

      for (const letter of word) {
        const letterElement = document.createElement("span");
        letterElement.className = "title-letter";
        letterElement.setAttribute("aria-hidden", "true");
        letterElement.textContent = letter;
        letterElement.style.setProperty("--letter-index", letterIndex++);
        wordElement.append(letterElement);
      }

      title.append(wordElement);

      if (wordIndex < words.length - 1) {
        const space = document.createElement("span");
        space.className = "title-space";
        space.setAttribute("aria-hidden", "true");
        title.append(space);
      }
    });
  }

  const revealItems = document.querySelectorAll("[data-scroll-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealItems.forEach((item) => observer.observe(item));
  }

  const cvLink = document.querySelector("[data-download-cv]");
  if (cvLink) {
    cvLink.addEventListener("click", (event) => {
      event.preventDefault();
      const cv = [
        "Max Von",
        "Digital Designer",
        "",
        "Design Lead — Microsoft — 2023–Now",
        "Sr Product Designer — Spotify — 2021–2022",
        "Product Designer — Apple — 2019–2021",
        "Design Intern — Apple — 2018–2019",
        "Graphic Designer — Sony — 2017–2018",
      ].join("\n");
      const file = new Blob([cv], { type: "text/plain;charset=utf-8" });
      const downloadUrl = URL.createObjectURL(file);
      const download = document.createElement("a");
      download.href = downloadUrl;
      download.download = "Max-Von-CV.txt";
      download.click();
      URL.revokeObjectURL(downloadUrl);
    });
  }

})();

/* ============================================
   NAVIGATION
============================================ */
function initNav() {
  const nav = document.querySelector(".nav");
  const burger = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");

  if (!nav || !burger || !menu) return;

  const setMenuOpen = (open) => {
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", String(!open));
    menu.inert = !open;
    nav.classList.toggle("menu-open", open);
  };

  burger.addEventListener("click", () => {
    setMenuOpen(burger.getAttribute("aria-expanded") !== "true");
  });

  menu.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      burger.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      burger.getAttribute("aria-expanded") === "true" &&
      !nav.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  const desktopLayout = window.matchMedia("(min-width: 900px)");
  const closeOnDesktop = (event) => {
    if (event.matches) setMenuOpen(false);
  };
  if (desktopLayout.addEventListener) {
    desktopLayout.addEventListener("change", closeOnDesktop);
  } else {
    desktopLayout.addListener(closeOnDesktop);
  }

  const updateNavOnScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    updateActiveLink();
  };
  window.addEventListener("scroll", updateNavOnScroll, { passive: true });
  updateNavOnScroll();
}

function updateActiveLink() {
  const sections = ["top", "testimonials"];
  const scrollPosition = window.scrollY + 120;
  let current = "top";

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
      current = id;
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    const isActive = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {

  initNav();

});