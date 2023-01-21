const wsUri = 'wss://echo-ws-service.herokuapp.com';

const input = document.querySelector('.input');
const btn = document.querySelector('.j-btn-request');
let output = document.querySelector('.output');
let inputMessage = document.querySelector('.input-message');
const status = document.querySelector('.status');
const mapLink = document.querySelector('#map-link');
const geoBtn = document.querySelector('.j-btn-test');

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

const error = () => {
    status.textContent = 'Невозможно получить ваше местоположение';
};

const success = (position) => {
    console.log('position', position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = 'Ссылка на карту';
};

geoBtn.addEventListener('click', () => {
    mapLink.href = '';
    mapLink.textContent = '';

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        status.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
});

