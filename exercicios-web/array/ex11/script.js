/* 
    1) Uma lista com números de 1 a 15 foi criada por engano, 
    quando na verdade deveria ser apenas de 1 a 5. Desenvolver 
    um programa que remova os números a mais para corrigi-la. 
    Mostrar a lista corrigida na tela.
*/

const listaOriginal = []

const randomNum = () => {
    const valor = (Math.random() * 15) + 1
    return parseInt(valor)
}

for (let i = 1; i <= 10; i++) {
    listaOriginal.push(randomNum())
}

const listaCorrigida = listaOriginal.filter((n) => n <= 5)

console.log(`
    Lista Original: [${listaOriginal.join(', ')}]
    Lista Corrigida: [${listaCorrigida.join(', ')}]
`)