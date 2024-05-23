function verificaPrimo(number) {

    if (number === 0 || number === 1) return false

    if (number === 2) return true

    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}

function numerosPrimosEntreIntervalos(inicio, fim) {
    const listaDeNumerosPrimos = []
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio]
    }

    for (let i = inicio; i < fim; i++) {
        if (verificaPrimo(i)) {
            listaDeNumerosPrimos.push(i)
        }
    }

    return `Entre ${inicio} - ${fim}, existem ${listaDeNumerosPrimos.length} números primos.`
}

console.log(numerosPrimosEntreIntervalos(45, 33))
console.log(numerosPrimosEntreIntervalos(0, 100))
console.log(numerosPrimosEntreIntervalos(0, 200))