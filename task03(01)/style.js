const wsUri = 'wss://echo-ws-service.herokuapp.com';

const input = document.querySelector('.input');
const btn = document.querySelector('.j-btn-request');
let output = document.querySelector('.output');
let inputMessage = document.querySelector('.input-message');

let websocket;

websocket = new WebSocket(wsUri);
websocket.onopen = function (evt){
    console.log('connect');
};

websocket.onerror = function (evt){
    console.log('error');
};

btn.addEventListener('click', () => {

    let message = input.value;
    websocket.send(message);
    inputMessage.innerHTML = input.value;

    websocket.onmessage = function (evt) {
        output.innerHTML = evt.data;
    };
    input.value = '';
    output.innerHTML = '';
});
