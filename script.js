const chatContainer = document.getElementById("chat-container");
const chatWindow = document.createElement("div");
chatWindow.id = "chat-window";

const chatHistory = document.createElement("div");
chatHistory.id = "chat-history";
chatWindow.appendChild(chatHistory);

const messageInput = document.createElement("input");
messageInput.id = "message-input";
messageInput.placeholder = "Type a message...";
chatWindow.appendChild(messageInput);

const sendButton = document.createElement("button");
sendButton.id = "send-button";
sendButton.textContent = "Send";
chatWindow.appendChild(sendButton);
chatContainer.appendChild(chatWindow);


sendButton.addEventListener("click", () => {
    const message = messageInput.value;
    if (message) {
        const userMessage = document.createElement("div");
        userMessage.textContent = `You: ${message}`;
        chatHistory.appendChild(userMessage);
        messageInput.value = "";
        setTimeout(() => {
            const response = document.createElement("div");
            response.textContent = "Alexa: Thank you for your message!";
            chatHistory.appendChild(response);
        }, 1000);
    }
});
