function executeCommand(command) {
    const unama = document.querySelector('.unama');

    switch (command) {
        // Comandos de Justify-content
        case 'flex-start':
            unama.style.justifyContent = 'flex-start';
            break;
        case 'flex-end':
            unama.style.justifyContent = 'flex-end';
            break;
        case 'center':
            unama.style.justifyContent = 'center';
            break;
        case 'space-between':
            unama.style.justifyContent = 'space-between';
            break;
        case 'space-around':
            unama.style.justifyContent = 'space-around';
            break;
        case 'space-evenly':
            unama.style.justifyContent = 'space-evenly';
            break;
        // Comandos de Align-items
        case 'flex-start-align-start':
            unama.style.alignItems = 'flex-start';
            break;
        case 'flex-end-align-end':
            unama.style.alignItems = 'flex-end';
            break;
        case 'center-align-center':
            unama.style.alignItems = 'center';
            break;
        case 'baseline':
            unama.style.alignItems = 'baseline';
            break;
        case 'stretch':
            unama.style.alignItems = 'stretch';
            break;
        default:
            break;
    }
}
