const form = document.querySelector('form')
const nome = document.querySelector('#id_nome')
const idade = document.querySelector('#id_idade')
const mensagem = document.querySelector('.resultado span')
const body = document.querySelector('body')

form.addEventListener('submit', e => {
    e.preventDefault()

    const verde = "#157A6E"
    const vermelho = "#e63946"

    if (idade.value >= 18) {
        mensagem.textContent = 'Parabéns, sua carteira de motorista está pronta!'
        mensagem.style.color = verde
        body.style.backgroundColor = verde
        mensagem
    } else {
        mensagem.textContent = 'Nada de carro para você agora...'
        mensagem.style.color = vermelho
        body.style.backgroundColor = vermelho
    }
})