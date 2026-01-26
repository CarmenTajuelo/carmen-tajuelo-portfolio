const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.textContent = isOpen ? '✕' : '☰';
  navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});