const sortedNumbers = new Array(10)

const sorteandoNumeros = () => {
    for (let i = 0; i < sortedNumbers.length; i++) {
        const valor = parseInt(Math.random() * 100) + 1
        sortedNumbers[i] = valor
    }
}

const distribuindoJogadores = () => {

    const timeDosImpares = sortedNumbers.filter(n => n % 2 !== 0)
    const timeDosPares =  sortedNumbers.filter(n => n % 2 === 0)

    if (timeDosImpares.length === timeDosPares.length) {
        return "Os dois times possuem o mesmo números de jogadores."
    } else {
        return "Não possuem o mesmo número de jogadores."
    }
}


console.log(distribuindoJogadores(sorteandoNumeros()))