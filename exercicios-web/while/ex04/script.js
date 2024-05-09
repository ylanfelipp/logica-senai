let contador = 0

while(contador < 5) {
    const primo = parseInt(prompt('Digite um número:'))
    let count = 1
    let divisores = 0
    while(count <= primo) {
        if (primo % count === 0) {
            divisores++
        }
        count++
    }

    if (divisores == 2) {
        console.log(`${primo} é primo!`)
    } else {
        console.log(`${primo} não é primo!`)  
    }
    contador++
}