

    const apiKey = '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';
    const endpoint = 'https://api.openai.com/v1/chat/completions';
    
    // Função para enviar uma solicitação para a API do GPT
    async function sendMessageToGPT(message) {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                prompt: message,
                max_tokens: 20
            })
        });
        const data = await response.json();
        return data.choices[0].text.trim();
    }
    
    // Função para processar a mensagem do usuário e exibir a resposta
    async function sendMessageFromUser(message) {
        const userMessageElement = document.createElement('div');
        userMessageElement.textContent = `Você: ${message}`;
        userMessageElement.style = `background-color:black;
        color:white;
        width:fit-content;
        padding:20px;
        border-radius:1rem;`
        chatArea.appendChild(userMessageElement);
    
        const responseMessage = await sendMessageToGPT(message);
    
        const botMessageElement = document.createElement('div');
        botMessageElement.textContent = `Bot: ${responseMessage}`;
        botMessageElement.style=`background-color:green;
        width:fit-content;
        padding:20px;
        border-radius:1rem;`
        chatArea.appendChild(botMessageElement);
    }
    

    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const chatArea = document.getElementById('chat-area');
    
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault()
        const message = messageInput.value.trim();
        if (message !== '') {
            sendMessageFromUser(message);
            messageInput.value = '';
        }
    });
      
