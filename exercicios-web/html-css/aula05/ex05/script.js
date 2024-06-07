const form = document.querySelector('form')

const div = document.querySelector('.ficha')

const nome = document.querySelector('.nome')
const profissao = document.querySelector('.profissao')
const peso = document.querySelector('.peso')
const altura = document.querySelector('.altura')
const img = document.querySelector('img')

const imc = document.querySelector('.imc')


function avaliarUsuario(event) {
    event.preventDefault()

    div.style.display = "block"
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
    altura.textContent = `Altura: ${inputAltura}`

    let pesoFormatado = parseFloat(inputPeso.replace(',', '.'))
    let alturaFormatada = parseFloat(inputAltura.replace(',', '.'))
    let calculoIMC = pesoFormatado / (alturaFormatada * alturaFormatada)

    console.log(pesoFormatado, alturaFormatada)

    if (calculoIMC < 18.5) {
        imc.textContent = "Abaixo do Peso Ideal"
    } else if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
        imc.textContent = "Peso Ideal"
    } else if (calculoIMC >=  25 && calculoIMC <= 29.9) {
        imc.textContent = "Sobrepeso"
    } else if (calculoIMC >= 30 && calculoIMC <= 39.9) {
        imc.textContent = "Obesidade"
    } else if (calculoIMC >= 40) {
        imc.textContent = "Obesidade Grave"
    }
}