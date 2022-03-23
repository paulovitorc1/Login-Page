
/* Variaveis */
const btnEye1 = document.querySelector('#verSenha');
const btnEye2 = document.querySelector('#verConfirmaSenha');

const nome = document.querySelector('#nome');
const labelNome = document.querySelector('#labelNome');
let validNome = false;

const idade = document.querySelector('#idade');
const labelIdade = document.querySelector('#labelIdade');
let validIdade = false;

const usuario = document.querySelector('#usuario');
const labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

const senha = document.querySelector('#senha');
const labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

const confirmaSenha = document.querySelector('#confirmaSenha');
const labelConfirmaSenha = document.querySelector('#labelConfirmaSenha');
let validConfirmaSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');


/* Validação */
//nome//
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 4) {
        labelNome.setAttribute('style', 'color: red');
        nome.setAttribute('style', 'border-color: red')
        labelNome.innerHTML = '<b>Nome Completo *Insira no mínimo 5 caracteres.';
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        nome.setAttribute('style', 'border-color: green')
        labelNome.innerHTML = '<b>Nome Completo</b>';
        validNome = true;
    }
});

//idade
idade.addEventListener('keyup', () => {
    if (idade.value <= 17) {
        labelIdade.setAttribute('style', 'color: red');
        idade.setAttribute('style', 'border-color: red')
        labelIdade.innerHTML = '<b>Idade *Disponivel apenas para maiores de 18';
        validIdade = false;
    } else {
        labelIdade.setAttribute('style', 'color: green');
        idade.setAttribute('style', 'border-color: green')
        labelIdade.innerHTML = '<b>Idade</b>';
        validIdade = true;
    }
});

//usuario//
usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 7) {
        labelUsuario.setAttribute('style', 'color: red');
        usuario.setAttribute('style', 'border-color: red')
        labelUsuario.innerHTML = '<b>Usuario *Insira no mínimo 8 caracteres.';
        validUsuario = false;

    } else {
        labelUsuario.setAttribute('style', 'color: green');
        usuario.setAttribute('style', 'border-color: green')
        labelUsuario.innerHTML = '<b>Usuario</b>';
        validUsuario = true;
    }
});

//senha//
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red')
        labelSenha.innerHTML = '<b>Senha *Insira no mínimo 6 caracteres.';
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green');
        senha.setAttribute('style', 'border-color: green')
        labelSenha.innerHTML = '<b>Senha</b>';
        validSenha = true;
    }
});

//confirmar senha
confirmaSenha.addEventListener('keyup', () => {
    if (senha.value === confirmaSenha.value && confirmaSenha.value !== '') {
        labelConfirmaSenha.setAttribute('style', 'color: green');
        confirmaSenha.setAttribute('style', 'border-color: green')
        labelConfirmaSenha.innerHTML = '<b>Confirmar Senha</b>';
        validConfirmaSenha = true;
    } else {
        labelConfirmaSenha.setAttribute('style', 'color: red');
        confirmaSenha.setAttribute('style', 'border-color: red')
        labelConfirmaSenha.innerHTML = '<b>Confirmar Senha *As senhas não são iguais.';
        validConfirmaSenha = false;
    }
});

/* função para botão cadastrar */
function cadastrar() {
    if (validNome && validIdade && validUsuario && validSenha && validConfirmaSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
            {
                nomeCad: nome.value,
                idadeCad: idade.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = 'Cadastrando novo usuario...';
        msgError.innerHTML = '';
        msgError.setAttribute('style', 'display: none');

        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5500/login.html'
        }, 3000);


    } else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Preencha todos os campos corretamente antes de cadastrar ou cadastre novo nome de usuario.';
        msgSuccess.innerHTML = '';
        msgSuccess.setAttribute('style', 'display: none');
    }
};

/* Função para vizualizar senha e confirmaSenha */
btnEye1.addEventListener('click', () => {
    const inputSenha = document.querySelector('#senha');

    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
});
btnEye2.addEventListener('click', () => {
    const inputConfirmaSenha = document.querySelector('#confirmaSenha');

    if (inputConfirmaSenha.getAttribute('type') === 'password') {
        inputConfirmaSenha.setAttribute('type', 'text')
    } else {
        inputConfirmaSenha.setAttribute('type', 'password')
    }
});

