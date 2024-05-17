/*
    3) Escreva um programa que leia dois vetores com 3 elementos cada
     e gere um terceiro vetor de 6 elementos, cujos valores deverão ser 
     compostos pelos elementos intercalados dos dois outros vetores. Ao final 
     o programa deverá mostrar os dois vetores originais e o terceiro vetor com 
     os valores intercalados.
*/

const lista1 = []
const lista2 = []

for (let i = 0; i < 6; i++) {
    const leiaNumero = parseInt(prompt("digite o número a ser adicionado:"))

    if (!isNaN(leiaNumero)) {
        if (lista1.length <= lista2.length) {
            lista1.push(leiaNumero)
        } else if (lista1 >= lista2) {
            lista2.push(leiaNumero)
        }
    }
}

const listaUniao = []

for (let i = 0; i < 3; i++) {
    listaUniao.push(lista1[i])
    listaUniao.push(lista2[i])
}

alert(`
    Lista 1: [${lista1.join(', ')}]
    Lista 2: [${lista2.join(', ')}]
    Lista 3: [${listaUniao.join(', ')}]
`)