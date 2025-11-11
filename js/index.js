// --- CONFIGURAÇÃO ---
// Esta é a data de aniversário da Dani.
// Formato: Ano, Mês (0=Jan, 1=Fev, ... 11=Dez), Dia
const dataAlvo = new Date(2025, 11, 22, 0, 0, 0).getTime();

// --- ELEMENTOS DO HTML ---
const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');
const mensagemFinalEl = document.getElementById('mensagem-final');

// --- FUNÇÃO DO COUNTDOWN ---
// Atualiza o contador a cada 1 segundo
const intervalo = setInterval(() => {

    // Pega a data e hora de AGORA
    const agora = new Date().getTime();
    
    // Calcula a distância entre agora e a data alvo
    const distancia = dataAlvo - agora;

    // Se o tempo acabou...
    if (distancia < 0) {
        clearInterval(intervalo); // Para o contador
        
        // !!! A PARTE MAIS IMPORTANTE !!!
        // Redireciona para o "Nossa Flix"
        window.location.href = "perfis.html"; 
        
        return; // Sai da função
    }

    // Cálculos de tempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Formata os números (para ter "09" em vez de "9")
    function formatar(num) {
        return num < 10 ? '0' + num : num;
    }

    // Coloca os valores no HTML
    diasEl.innerText = formatar(dias);
    horasEl.innerText = formatar(horas);
    minutosEl.innerText = formatar(minutos);
    segundosEl.innerText = formatar(segundos);
    
    // (Opcional) Pisca a mensagem final no último dia
    if (dias === 0) {
        mensagemFinalEl.innerText = "É HOJE!";
    }

}, 1000); // 1000ms = 1 segundo