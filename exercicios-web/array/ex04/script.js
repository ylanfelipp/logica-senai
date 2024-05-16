let nums = []

/*
    2) Crie um programa onde o usuário digite 5 números inteiros. Ao terminar 
    de digitar os números, mostrar um Array somente com números ímpares digitados 
    e a soma desses números.
*/

for (let i = 0; i < 5; i++) {
    const num = parseInt(prompt(`Informe o ${i + 1}° número:`))

    if (!isNaN(num)) {
        if (num % 2 !== 0) {
            nums.push(num)
        }
    } else {
        i--
    }
}

let soma = 0

for (let i = 0; i < nums.length; i++) {
    soma += nums[i]
}

alert(`Array: [${nums}]\nSoma de todos os número ímpares: ${soma}`)