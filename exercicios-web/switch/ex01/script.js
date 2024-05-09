let number1 = Number(prompt("Digite número A:"))
let number2 = Number(prompt("Digite número B:"))

let operacoes = parseInt(prompt("Operações: \n(1) Adição\n(2)Subtração\n(3)Multiplicação\n(4)Divisão"))

switch(operacoes) {
    case 1:
        alert(`${number1} + ${number2} = ${number1 + number2}`)
        break
    case 2:
        alert(`${number1} - ${number2} = ${number1 - number2}`)
        break
    case 3:
        alert(`${number1} x ${number2} = ${number1 * number2}`)
        break
    case 4:
        alert(`${number1} ÷ ${number2} = ${number1 / number2}`)
        break
    default:
        alert("Operação inválida")
}