const form = document.querySelector('form')

const div = document.querySelector('.ficha')

const nome = document.querySelector('.nome')
const profissao = document.querySelector('.profissao')
const peso = document.querySelector('.peso')
const altura = document.querySelector('.altura')
const img = document.querySelector('img')

const imc = document.querySelector('.imc')

const popup = document.querySelector('.wrapper')

const inputs = document.querySelectorAll('input')
const labels = document.querySelectorAll('label')
const botao = document.querySelector('button')


function avaliarUsuario(event) {
    event.preventDefault()
    const formData = new FormData(form)

    const inputNome = formData.get('nome')
    const inputProfissao = formData.get('profissao')
    const inputPeso = formData.get('peso')
    const inputAltura = formData.get('altura')
    const urlImagem = formData.get('imagem')

    img.setAttribute('src', urlImagem)
    nome.textContent = `Nome: ${inputNome}`
    profissao.textContent = `Profissão: ${inputProfissao}`
    peso.textContent = `Peso: ${inputPeso} Kg`
    altura.textContent = `Altura: ${inputAltura}m`

    let calculoIMC = inputPeso / (inputAltura * inputAltura)


    let classificacao
    if (calculoIMC < 18.5) {
        classificacao = "Status IMC: Abaixo do Peso Ideal"
    } else if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
        classificacao = "Status IMC: Peso Ideal"
    } else if (calculoIMC >= 25 && calculoIMC <= 29.9) {
        classificacao = "Sobrepeso"
    } else if (calculoIMC >= 30 && calculoIMC <= 39.9) {
        classificacao = "Status IMC: Obesidade"
    } else if (calculoIMC >= 40) {
        classificacao = "Status IMC: Obesidade Grave"
    }

    imc.textContent = classificacao

    popup.style.display = "flex"

    inputs.forEach((el) => {
        el.style.display = "none"
    })

    labels.forEach(el => {
        el.style.display = "none"
    })

    botao.style.display = "none"
}


popup.addEventListener('click', e => {
    if (e.target !== popup) {
        return
    }

    popup.style.display = "none"

    inputs.forEach((el) => {
        el.style.display = "inline"
    })

    labels.forEach(el => {
        el.style.display = "inline"

    })

    botao.style.display = "inline"
})