// main.js

// Inicializar o mapa do Google Maps
function initMap() {
  const shannon206 = { lat: -33.927, lng: 18.424 }; // Coordenadas aproximadas
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: shannon206,
  });
  const marker = new google.maps.Marker({
    position: shannon206,
    map: map,
    title: "Shannon 206",
  });
}

// Validação simples do formulário de contato
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos do formulário.");
      }
    });
  }
