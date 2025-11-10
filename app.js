// Espera todo o conteúdo da página carregar
window.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona a nossa barra de navegação
    const navbar = document.querySelector('.navbar');

    // 2. Adiciona um "ouvinte" que vigia a rolagem (scroll) da página
    window.addEventListener('scroll', () => {
        
        // 3. Verifica se o utilizador rolou mais de 100 pixels para baixo
        if (window.scrollY > 100) {
            // Se rolou, adiciona a classe 'navbar-scrolled'
            navbar.classList.add('navbar-scrolled');
        } else {
            // Se voltou ao topo, remove a classe
            navbar.classList.remove('navbar-scrolled');
        }
    });

});