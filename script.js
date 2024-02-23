document.addEventListener('DOMContentLoaded', function () {
    
    var inputElement = document.getElementById('comand-input');


    inputElement.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            
            var inputValue = inputElement.value.toLowerCase();

            
            if (inputValue === 'justify-content' || inputValue === 'align-items') {
                
                updateBalaoFala('Bom trabalho! Álvaro está usando ' + inputValue + '.');
                movePersonagem(); 
            } else {
                updateBalaoFala('Ops! Parece que você errou. Tente novamente com os comandos "justify-content" ou "align-items".');
            }
            inputElement.value = '';
        }
    });
});

function updateBalaoFala(message) {
    var balaoFalaElement = document.querySelector('.balao-fala p');

    balaoFalaElement.textContent = message;
}


function movePersonagem() {
    var personagemElement = document.getElementById('personagem');
    personagemElement.classList.add('move-animation');

    setTimeout(function() {
        personagemElement.classList.remove('move-animation');
    }, 1000);
}

function proximaFase() {
    alert('Próxima fase!'); 

    var mensagemParabens = document.getElementById('mensagem-parabens');
    mensagemParabens.style.display = 'none';
    function proximaFase() {

        alert('Próxima fase!');
    

        var mensagemParabens = document.getElementById('mensagem-parabens');
        mensagemParabens.style.display = 'none';
    

        var personagemElement = document.getElementById('personagem');
        personagemElement.removeAttribute('class');
    }
    
}

function movePersonagem() {
    var personagemElement = document.getElementById('personagem');
    personagemElement.classList.add('move-animation');
    var mensagemParabens = document.getElementById('mensagem-parabens');
    mensagemParabens.style.display = 'block';

    setTimeout(function() {
        personagemElement.classList.remove('move-animation');
    }, 1000);
}

function movePersonagem(command) {
    var personagemElement = document.getElementById('personagem');
    personagemElement.classList.add('move-' + command);

    var mensagemParabens = document.getElementById('mensagem-parabens');
    mensagemParabens.style.display = 'block';

    setTimeout(function() {
        personagemElement.classList.remove('move-' + command);
    }, 1000);
}
