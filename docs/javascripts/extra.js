document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".md-content__inner > *").forEach(el => {
    if (!el.classList.contains("md-typeset")) {
      el.classList.add("fade-in");
      observer.observe(el);
    }
  });

  console.log("%cDevOps Horizon — Chargé avec succès", "color:#6366f1; font-weight:bold");
});