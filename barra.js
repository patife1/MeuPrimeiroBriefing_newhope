// Seleciona o botão para abrir e fechar a barra lateral
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

// Abre a barra lateral
sidebarToggle.addEventListener("click", () => {
    sidebar.style.left = "0"; // Move a barra lateral para dentro da tela
});

// Fecha a barra lateral ao clicar nela mesma
sidebar.addEventListener("click", () => {
    sidebar.style.left = "-300px"; // Move a barra lateral para fora da tela (left: -300px)
});

// Impede que o clique no ícone de hambúrguer feche a barra lateral (evitar conflito)
sidebarToggle.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede o clique de propagar para o evento da barra lateral
});