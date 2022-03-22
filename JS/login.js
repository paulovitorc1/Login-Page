/* Variaveis */
const btnEye = document.querySelector('.fa-eye');


/* Função entrar */
function entrar() {

    let usuario = document.querySelector('#usuario');
    let labelUser = document.querySelector('#labelUser');

    let senha = document.querySelector('#senha');
    let labelSenha = document.querySelector('#labelSenha');

    let msgError = document.querySelector('#msgError');

    let listaUser = [];

    let userValid = {
        nome: '',
        idade: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {
        if(usuario.value === item.userCad && senha.value === item.senhaCad) {
            
            userValid = {
                nome: item.nomeCad,
                idade: item.idadeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if(usuario.value === userValid.user && senha.value === userValid.senha && usuario.value !== '' && senha.value !== '') {
        window.location.href='http://127.0.0.1:5500/home1.0.html';

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);

        localStorage.setItem('userLogado', JSON.stringify(userValid));

    } else {
        labelUser.setAttribute('style', 'color: red');
        usuario.setAttribute('style', 'border-color: red');
        labelSenha.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Usuario e/ou senha incorretos';
        usuario.focus();
    }

}


/* Função para vizualizar senha */
btnEye.addEventListener('click', () => {
    const inputSenha = document.querySelector('#senha');

    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
});