function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;

  if (message.trim() !== '') {
    // Emit the message to the server
    socket.emit('message', message);

    // Clear the input field after sending a message
    messageInput.value = '';
  }
}

  
      // Scroll to the bottom to show the latest message
      chatWindow.scrollTop = chatWindow.scrollHeight;
    
  