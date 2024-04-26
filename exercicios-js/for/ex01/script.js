
let soma = 0

for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Digite um número: '))
    if (num > 7) {
        soma += num
    }
}

alert(`soma dos valores digitados: ${soma}`)