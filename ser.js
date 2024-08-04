const userCountElement = document.getElementById('user-count');
const socket = new WebSocket('ws://' + window.location.host);

socket.onmessage = function(event) {
    userCountElement.textContent = event.data;
};
