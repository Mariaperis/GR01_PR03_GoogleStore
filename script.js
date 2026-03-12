// Selecciona el botón del menú
const menuBtn = document.getElementById("menuBtn");

// Selecciona el menú
const menu = document.getElementById("menu");

// Cuando se hace click en el botón
menuBtn.addEventListener("click", () => {
  // Añade o quita la clase "show"
  menu.classList.toggle("show");
});