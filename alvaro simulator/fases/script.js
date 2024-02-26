function proximaFase(faseAtual) {
    var proximaFase;
    if (faseAtual === 'fase1') {
        proximaFase = 'fase2';
    } else if (faseAtual === 'fase2') {
        proximaFase = 'fase3';
    }
    window.location.href = proximaFase + '.html';
}


document.getElementById('command-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const comando = this.value.trim().toLowerCase();
        const fase = document.getElementById('fase');
        const chave = document.getElementById('chave'); 
        const falas = document.querySelector('.falas');
        const mensagemParabens = document.getElementById('mensagem-parabens');

        if (comando.startsWith('justify-content:') || comando.startsWith('align-items:')) {
            const propriedade = comando.split(':')[0];
            const valor = comando.split(':')[1].trim();

            if (propriedade === 'justify-content') {
                if (['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'].includes(valor)) {
                    fase.style.justifyContent = valor;
                    checkElement(chave); 
                   
                    
                } else {
                    alert('Valor inválido para justify-content. Use flex-start, flex-end, center, space-between, space-around ou space-evenly.');
                }
            } 
            else if (propriedade === 'align-items') {
                if (['flex-start', 'flex-end', 'center', 'baseline', 'stretch'].includes(valor)) {
                    fase.style.alignItems = valor;
                    checkElement(chave); 
                    
                  
                } else {
                    alert('Valor inválido para align-items. Use flex-start, flex-end, center, baseline ou stretch.');
                }
            }
        } else {
            alert('Comando inválido. Use "justify-content:" ou "align-items:" seguido de um dos valores permitidos.');
        }

        this.value = '';
    }
});

function checkElement(element) {
    const mensagemParabens = document.getElementById('mensagem-parabens');
    if (isNearElement(element)) {
        if (element.id === 'chave') {
            updateFalas('Bom trabalho! Você conseguiu.');
       
        }
       
        mensagemParabens.style.display = 'block';
    } else {
        mensagemParabens.style.display = 'none';
    }
}


function updateFalas(message) {
    const falas = document.querySelector('.falas');
    falas.innerHTML = `
        <h5>${message}</h5>
        <input type="text" id="command-input" placeholder="Digite o próximo comando...">
    `;

    const novoInput = document.getElementById('command-input');
    novoInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const novoComando = this.value.trim().toLowerCase();
            if (novoComando.startsWith('justify-content:') || novoComando.startsWith('align-items:')) {
                const propriedade = novoComando.split(':')[0];
                const valor = novoComando.split(':')[1].trim();
                const fase = document.getElementById('fase');

                if (propriedade === 'justify-content') {
                    if (['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'].includes(valor)) {
                        fase.style.justifyContent = valor;
                        checkElement(chave); 
                       
                        
                    } else {
                        alert('Valor inválido para justify-content. Use flex-start, flex-end, center, space-between, space-around ou space-evenly.');
                    }
                } else if (propriedade === 'align-items') {
                    if (['flex-start', 'flex-end', 'center', 'baseline', 'stretch'].includes(valor)) {
                        fase.style.alignItems = valor;
                        checkElement(chave); 
                 
                        
                    } else {
                        alert('Valor inválido para align-items. Use flex-start, flex-end, center, baseline ou stretch.');
                    }
                }
            } else {
                alert('Comando inválido. Use "justify-content:" ou "align-items:" seguido de um dos valores permitidos.');
            }
            this.value = ''; 
        }
    });

    novoInput.focus(); 
}

function isNearElement(element) {
    const personagemRect = document.getElementById('personagem').getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    return (
        personagemRect.left < elementRect.right &&
        personagemRect.right > elementRect.left &&
        personagemRect.top < elementRect.bottom &&
        personagemRect.bottom > elementRect.top
    );
}