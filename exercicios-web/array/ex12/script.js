/*
    2) Desenvolva um programa que o usuário digite 10 números positivos
     e inteiros, ao final mostre o valor do resultado do somatório da 
     primeira metade dos números menos o somatório da segunda metade. 
     (Somatório da primeira metade - Somatório da segunda metade)
*/

const nums = []

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Digite um número inteiro positivo:"))

    if (!(isNaN(num)) && num >= 0) {
        nums.push(num)
    } else {
        i--
    }
}

let somaPt1 = 0

let somaPt2 = 0

const primeiraParte = nums.slice(0, 5)

const segundaParte = nums.slice(5)

for (let i = 0;  i < primeiraParte.length; i++) {
    somaPt1 += primeiraParte[i]
}

for (let i = 0; i < segundaParte.length; i++) {
    somaPt2 += segundaParte[i]
}

const subtracao = somaPt1 - somaPt2

alert(`
    Lista Original: [${nums.join(', ')}]
    Primeira Parte da Lista: [${primeiraParte.join(', ')}]
    Segunda Parte da Lista: [${segundaParte.join(', ')}]

    Somatório Primeira Parte da Lista: ${somaPt1}
    Somatório Segunda Parte da Lista: ${somaPt2}

    Subtração entre as parte: ${somaPt1} - ${somaPt2} = ${somaPt1 - somaPt2}
`)