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
