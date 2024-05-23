function verificaPrimo(number) {

    if (number === 0 || number === 1) return false

    if (number === 2) return true

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}

console.log(verificaPrimo(2))
console.log(verificaPrimo(10))
console.log(verificaPrimo(11))
console.log(verificaPrimo(19))