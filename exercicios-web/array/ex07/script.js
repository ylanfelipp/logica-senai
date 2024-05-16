/*
    5) Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, 
    no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, 
    bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, 
    doenças transmitidas por bactérias, doenças transmitidas por ambos, lista com todas doenças.
*/

const virus = []
const bacteria = []
const ambos = []

const nDoencas = parseInt(prompt("Quantas doenças deseja cadastrar?"))

for (let i = 0; i < nDoencas; i++) {
    const nomeDoenca = prompt("Informe o nome da doença:")
    const comoTransmite = parseInt(prompt(
        "Como ela é transmitida?" +
        "\n1- Vírus" +
        "\n2- Bactéria" +
        "\n3- Ambos"
    ))

    switch(comoTransmite) {
        case 1:
            virus.push(nomeDoenca)
            break
        case 2:
            bacteria.push(nomeDoenca)
            break
        case 3:
            ambos.push(nomeDoenca)
            break
        default:
            alert("Opção inválida")
            i--
    }
}

alert(`
    Doenças que são transmitidas por:
    Vírus: [${virus}];
    Bactéria: [${bacteria}];
    Ambos: [${ambos}]
`
)