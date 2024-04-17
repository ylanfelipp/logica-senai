let valorDaCompra = parseFloat(prompt("Qual foi o valor da compra?"))
let assinante = prompt("Qual é seu nível de assinante? \n(1) Premium\n(2) Gold\n(3) Silver\n(4) Não assinante")

let frete = 12.50

switch(assinante) {
    case '1':
        valorDaCompra = valorDaCompra - (valorDaCompra * 0.2)
        alert(`*Assinante Premium* \nValor da compra: R$ ${valorDaCompra.toFixed(2)}`)
        break
    case '2':
        valorDaCompra = (valorDaCompra - (valorDaCompra * 0.2)) + frete
        alert(`*Assinante Gold* \nValor da compra: R$ ${valorDaCompra.toFixed(2)}`)
        break
    case '3':
        valorDaCompra = (valorDaCompra - (valorDaCompra * 0.1)) + frete
        alert(`*Assinante Silver* \nValor da compra: R$ ${valorDaCompra.toFixed(2)}`)
        break
    case '4':
        valorDaCompra = valorDaCompra + frete
        alert(`*Comumn*\nValor da compra: R$ ${valorDaCompra.toFixed(2)}`)
        break
    default:
        alert("Opção inválida!")
}