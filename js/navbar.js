/*const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  navToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
});*/


const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  // 1. Alternar la clase visual
  const isOpen = navMenu.classList.toggle("open");

  // 2. Actualizar el atributo ARIA (Accesibilidad)
  // Si tiene la clase 'open', aria-expanded es true, si no, false.
  navToggle.setAttribute("aria-expanded", isOpen);

  // 3. Cambiar el icono visual
  navToggle.textContent = isOpen ? '✕' : '☰';
  
  // 4. Opcional: Cambiar el aria-label para que el lector de voz sea preciso
  navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});