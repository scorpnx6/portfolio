(function () {
  var elements = document.querySelectorAll('.reveal');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach(function (element) { element.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  elements.forEach(function (element) { observer.observe(element); });
})();
/* =========================
   slider
========================= */
const overlay = document.querySelector("[data-page-transition]");
const count = document.querySelector("[data-transition-count]");
const title = document.querySelector("[data-transition-title]");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
const sections = {
  work: ["01 / 05", "Work"],
  about: ["02 / 05", "About"],
  experience: ["03 / 05", "Experience"],
  testimonials: ["04 / 05", "Thoughts"],
  contact: ["05 / 05", "Contact"],
};
let transitioning = false;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function goToSection(target, updateHash = true) {
  if (!target || transitioning) return;
  if (reduceMotion || !overlay) {
    if (updateHash) window.location.hash = target.id;
    target.scrollIntoView({ behavior: "auto" });
    return;
  }
  transitioning = true;
  document.documentElement.classList.add("is-transitioning");
  const [sectionCount, sectionTitle] =
    sections[target.id] || ["— / 05", "Explore"];
  count.textContent = sectionCount;
  title.textContent = sectionTitle;
  overlay.classList.remove("is-revealing");
  overlay.classList.add("is-covering");
  await wait(800);
  if (updateHash && location.hash !== `#${target.id}`) {
    location.hash = target.id;
  }
  const top = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "auto" });
  overlay.classList.remove("is-covering");
  overlay.classList.add("is-revealing");
  await wait(740);
  overlay.classList.remove("is-revealing");
  document.documentElement.classList.remove("is-transitioning");
  transitioning = false;
}
document.addEventListener("click", (event) => {
  const link = event.target.closest?.('a[href^="#"]');
  if (!link) return;
  const target = document.getElementById(
    decodeURIComponent(link.hash.slice(1))
  );
  if (!target) return;
  event.preventDefault();
  goToSection(target);
});
window.addEventListener("popstate", () => {
  const id = location.hash.slice(1) || "top";
  const target = document.getElementById(id);
  if (target) goToSection(target, false);
});
(() => {
  const gallery = document.querySelector('.gallery-slider');
  if (!gallery) return;

  const track = gallery.querySelector('.slider-track');
  const slides = Array.from(track.children);
  const previous = gallery.querySelector('.gallery-prev');
  const next = gallery.querySelector('.gallery-next');
  const counter = gallery.querySelector('.gallery-counter');
  const progress = gallery.querySelector('.gallery-progress span');
  const dots = Array.from(gallery.querySelectorAll('.gallery-dot'));
  let activeIndex = 0;
  let pointerStartX = null;

  function showSlide(index) {
    activeIndex = Math.max(0, Math.min(index, slides.length - 1));
    track.style.transform = `translate3d(-${activeIndex * 100}%, 0, 0)`;
    counter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    progress.style.width = `${((activeIndex + 1) / slides.length) * 100}%`;
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === slides.length - 1;
    dots.forEach((dot, dotIndex) => {
      if (dotIndex === activeIndex) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  }

  previous.addEventListener('click', () => showSlide(activeIndex - 1));
  next.addEventListener('click', () => showSlide(activeIndex + 1));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide)));
  });

  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showSlide(activeIndex - 1);
    if (event.key === 'ArrowRight') showSlide(activeIndex + 1);
  });

  gallery.addEventListener('touchstart', (event) => {
    pointerStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  gallery.addEventListener('touchend', (event) => {
    if (pointerStartX === null) return;
    const distance = event.changedTouches[0].clientX - pointerStartX;
    if (Math.abs(distance) > 45) showSlide(activeIndex + (distance < 0 ? 1 : -1));
    pointerStartX = null;
  }, { passive: true });

  showSlide(0);
})();