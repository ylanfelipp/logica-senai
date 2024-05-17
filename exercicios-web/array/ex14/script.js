/*
    4) Fazer um programa no qual o usuário deve montar uma salada
    de frutas com uma cereja no final. Deve ser perguntado em 
    sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar 
    com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas. 
    (DESAFIO: Mostrar também a quantidade de cada fruta)
*/

const saladaDeFrutas = []

let addFruta = ''

while(addFruta.toLowerCase() !== 'cereja') {
    addFruta = prompt('Qual fruta deseja adicionar?')
    let qtdeFrunta = Number(prompt('Quantidade a ser adicionada:'))

    if (addFruta !== '' && !isNaN(qtdeFrunta)) {
        saladaDeFrutas.push([addFruta, qtdeFrunta])
    }
}

let saladaDeFrutaPronta = ''

for (let i = 0; i < saladaDeFrutas.length; i++) {
    saladaDeFrutaPronta += `\n${i + 1}) ${saladaDeFrutas[i][1]}g de ${saladaDeFrutas[i][0]}`
}

alert(saladaDeFrutaPronta)