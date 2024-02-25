document.getElementById('command-input').addEventListener('keyup', function(event) {

    if (event.key === 'Enter') {
        const comando = this.value.trim().toLowerCase();
        const fase = document.getElementById('fase');

        if (comando.startsWith('justify-content')) {
            const valor = comando.split(' ')[1];
            if (['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'].includes(valor)) {
                fase.style.justifyContent = valor;
            } else {
                alert('Valor inválido para justify-content. Use flex-start, flex-end, center, space-between, space-around ou space-evenly.');
            }
        } else if (comando.startsWith('align-items')) {
            const valor = comando.split(' ')[1];
            if (['flex-start', 'flex-end', 'center', 'baseline', 'stretch'].includes(valor)) {
                fase.style.alignItems = valor;
            } else {
                alert('Valor inválido para align-items. Use flex-start, flex-end, center, baseline ou stretch.');
            }
        } else if (comando.startsWith('align-content')) {
            const valor = comando.split(' ')[1];
            if (['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'].includes(valor)) {
                fase.style.alignContent = valor;
            } else {
                alert('Valor inválido para align-content. Use flex-start, flex-end, center, space-between, space-around ou stretch.');
            }
        } else {
            alert('Comando inválido. Use "justify-content", "align-items" ou "align-content" seguido de um dos valores permitidos.');
        }

        this.value = '';
    }
    });