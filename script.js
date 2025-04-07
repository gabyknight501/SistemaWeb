function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return; // No enviar si está vacío

    // Mostrar mensaje del usuario
    displayMessage(userInput, 'user');

    // Responder al usuario con una función básica de respuestas
    let botResponse = getBotResponse(userInput);
    setTimeout(() => {
        displayMessage(botResponse, 'bot');
    }, 500);

    // Limpiar el campo de entrada
    document.getElementById('user-input').value = '';
}

function displayMessage(message, sender) {
    let messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.innerHTML = `<p>${message}</p>`;
    document.getElementById('chat-box').appendChild(messageElement);
    scrollToBottom();
}

function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    // Respuestas básicas del bot
    if (userInput.includes('índice')) {
        return 'El índice del libro incluye temas como: Introducción a la Ingeniería de Software, HTML, CSS, JS, Diseño de Software, Sistemas web, etc.';
    } else if (userInput.includes('capítulo')) {
        return '¿Qué capítulo te interesa? El libro está organizado en 12 capítulos con un enfoque práctico.';
    } else if (userInput.includes('tema')) {
        return 'El tema más popular es el de HTML, CSS, JS, Sistemas web.';
    } else if (userInput.includes('precio')) {
        return 'El precio del libro digital es de $5,000 MXN.';
    } else {
        return 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?';
        //return "come un rico pollito y aprende a preguntar bien";
    }

    
}

function scrollToBottom() {
    const chatBox = document.getElementById('chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;
}
