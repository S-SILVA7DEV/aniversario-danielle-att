// ==========================================
//  NOSSA BASE DE DADOS DE CONTEÚDO
// ==========================================
const conteudoDatabase = {
    // --- Linha "Em Breve" (Sonhos) ---
    'card-sonho-1': {
        titulo: "Sonho 1: [Ex: Nossa Casa]",
        descricao: "Escreva aqui o texto completo que a Dani deve ler sobre este sonho. Pode ser um parágrafo longo!"
    },
    'card-sonho-2': {
        titulo: "Sonho 2: [Ex: Viagem ao Japão]",
        descricao: "O texto sobre a vossa viagem de sonho..."
    },
    'card-sonho-3': {
        titulo: "Sonho 3: [Ex: O Casamento]",
        descricao: "O texto sobre o grande dia..."
    },
    'card-sonho-4': {
        titulo: "Sonho 4: [Seu Título]",
        descricao: "Sua descrição..."
    },
    'card-sonho-5': {
        titulo: "Sonho 5: [Seu Título]",
        descricao: "Sua descrição..."
    },
    // --- Linha "Nossas Coleções" (Galerias) ---
    'card-colecao-1': {
        titulo: "Coleção 1: [Ex: Viagens]",
        descricao: "Um olhar sobre todas as aventuras que já vivemos. Cada foto é uma história."
    },
    'card-colecao-2': {
        titulo: "Coleção 2: [Ex: Selfies & Bobices]",
        descricao: "Os momentos parvos que só nós entendemos."
    },
    'card-colecao-3': {
        titulo: "Coleção 3: [Ex: O Noivado]",
        descricao: "O dia em que tudo mudou. Reveja o momento."
    },
    'card-colecao-4': {
        titulo: "Coleção 4: [Seu Título]",
        descricao: "Sua descrição..."
    },
    'card-colecao-5': {
        titulo: "Coleção 5: [Seu Título]",
        descricao: "Sua descrição..."
    }
};
// --- Fim da Base de Dados ---


// Espera todo o conteúdo da página carregar
window.addEventListener('DOMContentLoaded', () => {

    // --- CÓDIGO DA NAVBAR ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
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
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalClose = document.getElementById('modal-close');
    const cards = document.querySelectorAll('.card');

    // 2. Função para fechar o modal
    function fecharModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    }

    // 3. Adiciona "ouvintes" de clique para CADA card
    // (Verifica se os cards E o overlay existem)
    if (cards.length > 0 && modalOverlay) {
        cards.forEach(card => {
            card.addEventListener('click', () => {
                
                // === A GRANDE MUDANÇA ESTÁ AQUI ===
                
                // 1. Pega o ID do card que foi clicado (ex: "card-sonho-1")
                const cardId = card.id;
                
                // 2. Procura esse ID na nossa Base de Dados
                const dados = conteudoDatabase[cardId];

                // 3. Verifica se encontrou os dados
                if (dados) {
                    // 4. INJETA os dados no modal
                    modalTitle.textContent = dados.titulo;
                    modalDescription.textContent = dados.descricao;
                } else {
                    // Se, por acaso, esquecemos de adicionar o ID
                    modalTitle.textContent = "Erro";
                    modalDescription.textContent = "Conteúdo não encontrado. (Verifique o app.js)";
                }
                
                // 5. MOSTRA o modal
                modalOverlay.classList.add('active'); 
            });
        });
    }

    // 4. Adiciona "ouvintes" para fechar
    if (modalClose) {
        modalClose.addEventListener('click', fecharModal);
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                fecharModal();
            }
        });
    }

}); // FIM DO 'DOMContentLoaded'