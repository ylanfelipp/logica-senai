const notas = []

let maior
let menor

for (let i = 0; i < 6; i++) {
    const nota = Number(prompt(`Informe a ${i + 1}° nota:`))

    if (!isNaN(nota) && nota <= 10 && nota >= 0) {
        if(i == 0) {
            maior = nota
            menor = nota
        } else if (maior < nota) {
            maior = nota
        } else if (menor > nota) {
            menor = nota
        }

        notas.push(nota)
    } else {
        i--
    }
}

let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}

const novaNota = soma - maior - menor

const media = novaNota / (notas.length - 2)

console.log(`Média: ${media.toFixed(2).replace('.', ',')}`)
