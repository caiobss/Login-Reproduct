const login = document.querySelector('.link-login')
login.addEventListener('click', clicar)
function clicar(){
    const entrar_conta = document.querySelector('.container')
    entrar_conta.classList.toggle('entrar-conta')
}