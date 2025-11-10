// Espera todo o conteúdo da página carregar ANTES de fazer qualquer coisa.
// Esta é a mudança mais importante:
// Todo o nosso código agora está dentro disto.
window.addEventListener('DOMContentLoaded', () => {

    // --- CÓDIGO DA NAVBAR ---
    
    // 1. Seleciona a nossa barra de navegação
    const navbar = document.querySelector('.navbar');

    // 2. Adiciona um "ouvinte" que vigia a rolagem (scroll) da página
    if (navbar) { // (Boa prática: verificar se o elemento existe)
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // --- CÓDIGO DO MODAL (POP-UP) ---
    
    // 1. Seleciona os elementos do Modal
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const cards = document.querySelectorAll('.card');

    // 2. Função para fechar o modal
    function fecharModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    }

    // 3. Adiciona "ouvintes" de clique para CADA card
    // (Verifica se os cards E o overlay existem antes de continuar)
    if (cards.length > 0 && modalOverlay) {
        cards.forEach(card => {
            card.addEventListener('click', () => {
                // Adiciona a classe "active" para mostrar o modal
                modalOverlay.classList.add('active'); 
            });
        });
    }

    // 4. Adiciona "ouvintes" para fechar
    if (modalClose) {
        modalClose.addEventListener('click', fecharModal); // Fecha ao clicar no 'X'
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (event) => {
            // Fecha SÓ se clicar no FUNDO (overlay) e não no conteúdo
            if (event.target === modalOverlay) {
                fecharModal();
            }
        });
    }

}); // FIM DO 'DOMContentLoaded'