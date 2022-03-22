let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let logado = document.querySelector('#logado');
logado.innerHTML = `Seja bem vindo a nossa pagina ${userLogado.nome}`;

if(localStorage.getItem('token') === null) {
    alert('Voce precisa estar logado para ter acesso a essa pagina');
    window.location.href = 'http://127.0.0.1:5500/login.html'
}

function sair () {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = 'http://127.0.0.1:5500/login.html'
}