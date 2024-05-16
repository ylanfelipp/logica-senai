/*
    1) Solicite para o usuário a informação de 6 notas, 
    adicione cada uma delas ao final de um Array, ao final 
    realize a média das notas descartando a maior e a menor. 
    Mostra na tela a média.
*/

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
