let contador = 0
let pontos = 0
while(contador < 3) {
    let petecaPontos = parseInt(prompt(`Qual a pontuação do ${contador + 1}° arremesso: `))
    switch(petecaPontos) {
        case 0:
            break
        case 1:
            pontos += 1
            break
        case 2:
            pontos += 2
            break
        case 3:
            pontos += 3
            break
        case 4:
            pontos += 4
            break
        case 5:
            pontos += 5
            break
        default:
            pontos += 0
    }

    contador++
}

switch(true) {
    case pontos == 15:
        alert("deus da peteca")
        break
    case pontos >= 10 && pontos <= 14:
        alert("petequeiro profissional")
        break
    case pontos >= 5 && pontos <= 9:
        alert("petequeiro de final de semana")
        break
    case pontos >= 1 && pontos <= 4:
        alert("pseudo-petequeiro")
        break
    default:
        alert("Avaí das petecas")
}