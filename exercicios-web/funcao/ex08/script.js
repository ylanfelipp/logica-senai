const numbers = new Array(10)

const todosImpares = (numbers) => {

    for (let i = 0; i < numbers.length; i++) {
        const valor = Math.floor(Math.random() * 100) + 1
        numbers[i] = valor
    }

    console.log(numbers)

    return numbers.every(number => number % 2 !== 0)
}

console.log(todosImpares(numbers))
console.log(todosImpares(numbers))