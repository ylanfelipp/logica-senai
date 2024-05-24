const fiveNumbers = new Array(25)

for (let i = 0; i < fiveNumbers.length; i++) {
    const valor = parseInt(Math.random() * 1275) + 1
    fiveNumbers[i] = valor
}

const maiorValor = fiveNumbers.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr
    }

    return acc
})

console.log(fiveNumbers)

console.log(`Maior número é ${maiorValor}`)