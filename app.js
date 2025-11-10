// Espera todo o conteúdo da página carregar
window.addEventListener('DOMContentLoaded', () => {

    // --- CÓDIGO DA NAVBAR ---
    
    // 1. Seleciona a nossa barra de navegação
    const navbar = document.querySelector('.navbar');

    // 2. Adiciona um "ouvinte" que vigia a rolagem (scroll) da página
    if (navbar) { // (Verificar se o elemento existe)
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

}); // FIM DO 'DOMContentLoaded'