// script17.js
function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const tempoAtual = `${horas}:${minutos}:${segundos}`;

    document.getElementById('relogio').innerText = tempoAtual;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();
