document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("navbar");
  const logo = document.querySelector(".logo");
  const logoX = document.createElement("img");

  // Configurar a nova imagem (logo-x)
  logoX.src = "./img/img_logo2.png";
  logoX.alt = "Logo";
  logoX.classList.add("logo-x");
  navbar.insertBefore(logoX, navbar.children[0]);

  // Evento de scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      logo.classList.add("hidden");
      logoX.classList.add("visible");
    } else {
      logo.classList.remove("hidden");
      logoX.classList.remove("visible");
    }
  });
});

function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  const menuIcon = document.getElementById("menu-icon");

  // Verifica se o dropdown está visível
  if (dropdown.style.display === "flex") {
    dropdown.style.display = "none"; // Esconde o dropdown
    menuIcon.src = "./img/img_menu.png"; // Troca para o ícone do menu
    menuIcon.classList.remove("hidden"); // Garante que o ícone do menu apareça
  } else {
    dropdown.style.display = "flex"; // Exibe o dropdown
    menuIcon.classList.add("hidden"); // Esconde o ícone do menu
  }
}
