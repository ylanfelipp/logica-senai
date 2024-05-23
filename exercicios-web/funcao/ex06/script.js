const numbers = []

for (let i = 0; i < 5; i++) {
    const number = parseInt(prompt(`Digite o ${i + 1}° número:`))

    if (!isNaN(number)) {
        numbers.push(number)
    }
}

function procurandoMaiorNumero(numbers) {
    return numbers.sort((a, b) => b - a)[0]
}

function procurandoMenorNumero(numbers) {
    return numbers.sort((a, b) => a - b)[0]
}

alert(`
    Lista completa: [${numbers.join(', ')}]
    Maior Número: ${procurandoMaiorNumero(numbers)}
    Menor número: ${procurandoMenorNumero(numbers)}
`)