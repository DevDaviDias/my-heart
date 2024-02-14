// Este é apenas um exemplo simples para mostrar como você pode interagir com elementos HTML usando JavaScript
// Você pode substituir ou adicionar mais funcionalidades conforme necessário
document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById("heart");
    heart.addEventListener("click", function() {
        alert("Você clicou no coração!");
    });
});
