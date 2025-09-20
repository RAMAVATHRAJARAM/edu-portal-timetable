const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

function initMenu(){
  menuToggle.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
}

