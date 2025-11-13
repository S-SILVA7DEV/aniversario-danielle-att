
const dataAlvo = new Date(2025, 11, 22, 0, 0, 0).getTime();

// --- ELEMENTOS DO HTML ---
const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');
const mensagemFinalEl = document.getElementById('mensagem-final');

// --- FUNÇÃO DO CONTADOR
const intervalo = setInterval(() => {

    
    const agora = new Date().getTime();
    

    const distancia = dataAlvo - agora;


    if (distancia < 0) {
        clearInterval(intervalo); 
        

        window.location.href = "perfis.html"; 
        
        return; 
    }


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
    
    
    if (dias === 0) {
        mensagemFinalEl.innerText = "É HOJE!";
    }

}, 1000); 