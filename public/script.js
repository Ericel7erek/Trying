function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
  
    if (message.trim() !== '') {
      const chatWindow = document.getElementById('chat-window');
      const newMessage = document.createElement('p');
      newMessage.textContent = message;
      chatWindow.appendChild(newMessage);
  
      // Clear the input field after sending a message
      messageInput.value = '';
  
      // Scroll to the bottom to show the latest message
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }
  
  