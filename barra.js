// Seleciona os elementos
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

// Abre a barra lateral ao clicar no ícone de hambúrguer
sidebarToggle.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede que o clique propague
    sidebar.style.left = "0"; // Move a barra lateral para dentro da tela
});

// Fecha a barra lateral ao clicar nela mesma
sidebar.addEventListener("click", () => {
    sidebar.style.left = "-300px"; // Move a barra lateral para fora da tela
});

// Fecha a barra lateral ao clicar no botão de fechar
closeSidebar.addEventListener("click", () => {
    sidebar.style.left = "-300px"; 
});


sidebar.querySelector('.sidebar-content').addEventListener("click", () => {
    sidebar.style.left = "-300px"; // Fecha a barra lateral
});
