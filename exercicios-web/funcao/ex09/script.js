const numbers = new Array(10)

for (let i = 0; i < numbers.length; i++) {
    const valor = parseInt(Math.random() * 100) + 1

    numbers[i] = valor
}


console.log(numbers)

const todosOsNumerosAoQuadrado = numbers.map(number => Math.pow(number, 2))


console.log(todosOsNumerosAoQuadrado)