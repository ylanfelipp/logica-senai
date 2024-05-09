let soma = 0
let impares = 0

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt('Digite um número:'))

    if (num % 2 != 0) {
        impares++
    }

    soma += num
}

if (impares) {
    alert(`Um dos números digitados é ímpar`)
} else {
    alert(`A média da soma é ${soma / 5}`)
}