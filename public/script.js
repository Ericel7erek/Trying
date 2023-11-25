// Connect to the server
const socket = io();

// Listen for incoming messages from the server
socket.on('message', (message) => {
  const chatWindow = document.getElementById('chat-window');
  const newMessage = document.createElement('p');
  newMessage.textContent = message;
  chatWindow.appendChild(newMessage);

  // Scroll to the bottom to show the latest message
  chatWindow.scrollTop = chatWindow.scrollHeight;
});

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
