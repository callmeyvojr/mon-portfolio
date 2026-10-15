const navToggle = document.getElementById("navToggle");
const navToggleIcon = document.getElementById("navToggleIcon");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  if (!navToggle || !navToggleIcon || !navLinks) return;
  navLinks.classList.remove("is-open");
  navToggleIcon.textContent = "☰";
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Ouvrir le menu");
}

if (navToggle && navToggleIcon && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggleIcon.textContent = isOpen ? "✕" : "☰";
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
}