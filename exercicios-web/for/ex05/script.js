let numeroMultas = parseInt(prompt('Quantas multas deseja digitar?'))

let pontosCarteira = 0
let multasSomadas = 0

for (let i = 0; i <= numeroMultas; i++) {
    let multas = parseFloat(prompt(`Qual é o valor ${i}° da multa?`))
    let pontosNaCaretira = parseInt(prompt('Quantos ponto na carteira?'))

    if (multas > 0 && pontosNaCaretira > 0) {
        multasSomadas += multas
        pontosCarteira += pontosNaCaretira
    }
}

console.log(`Pontos na Carteira: ${pontosCarteira}, Multas: R$ ${multasSomadas}`)

if (pontosCarteira >= 20) {
    console.log('Carteira Irregular')
} else {
    console.log('Carteira conforme o regular')
}

if (multasSomadas >= 5000) {
    console.log('É possível comprar um Gol 1980')
} else {
    console.log('Não é possível comprar um Gol 1980')
}