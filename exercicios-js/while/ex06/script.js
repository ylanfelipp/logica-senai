const numeroSorteado = Math.floor((Math.random() * 100) + 1) 

let count = 0
let chute

while(count <= 10) {
    chute = parseInt(prompt('Chute um número:'))

    if (chute === numeroSorteado) {
        alert(`você acertou ápos ${count} tentativas`)
        break
    }else if (chute > numeroSorteado) {
        alert("chutou alto!")
    } else {
        alert("chutou baixo!")
    }

    count++
}

if (count == 10 && chute !== numeroSorteado) {
    alert('você utilizou todas as tentivas disponíveis :(')
}