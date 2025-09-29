// O código todo fica dentro desta função anônima
// que só será executada quando a página estiver totalmente carregada.
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Pega os elementos pelo ID
    // O JS agora tem certeza que o HTML existe
    const mensagem = document.getElementById('mensagem');
    const botao = document.getElementById('botaoMudar'); 

    // 2. A função de mudança de cor
    function mudarCor() {
        if (mensagem) { 
            // Cria uma cor aleatória
            const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
            
            // Altera as propriedades
            mensagem.style.color = corAleatoria;
            mensagem.textContent = 'Minha nova cor é: ' + corAleatoria + '!';
        }
    }

    // 3. Adiciona o Event Listener (o 'ouvinte' de clique)
    if (botao) {
        botao.addEventListener('click', mudarCor);
    }
});
