const number1 = parseFloat(prompt("Digite o 1° Número:"))
const number2 = parseFloat(prompt("Digite o 2° número:"))

const operacoes = prompt(`
    Escolha entre as 4 operações:
    1 - Soma
    2 - Subtração
    3 - Multiplicação
    4 - Divisão
`)

switch(operacoes) {
    case '1':
        soma(number1, number2)
        break
    case '2':
        subtracao(number1, number2)
        break
    case '3':
        multiplicacao(number1, number2)
        break
    case '4':
        divisao(number1, number2)
        break
    default:
        alert("Operação inválida")
}

function soma(number1, number2) {
    alert(`${number1} + ${number2} = ${number1 + number2}`)
}

function subtracao(number1, number2) {
    alert(`${number1} - ${number2} = ${number1 - number2}`)
}

function multiplicacao(number1, number2) {
    alert(`${number1} x ${number2} = ${number1 * number2}`)
}

function divisao(number1, number2) {
    if (number2 === 0) return
    alert(`${number1} / ${number2} = ${number1 / number2}`)
}