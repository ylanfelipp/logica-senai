let orcamento = 2000

let nomeJogoMaisBarato = ''
let nomeJogoMaisCaro = ''
let maisCaro
let maisBarato
let qtdeJogos = 0
let totalGastos = 0
while(orcamento >= 0) {
    let nomeJogo = prompt('Qual é o nome do jogo?')
    let precoJogo = parseFloat(prompt('Qual é o preço do jogo?'))

    
    if ((orcamento - precoJogo) < 0) {
        alert(`O jogo ${nomeJogo} ultrapassou o orçamento e não foi incluido na compra`)
        break
    }
    
    if (qtdeJogos == 0) {
        nomeJogoMaisBarato = nomeJogo
        nomeJogoMaisCaro = nomeJogo
        maisCaro = precoJogo
        maisBarato = maisCaro
    } else if (maisBarato > precoJogo) {
        nomeJogoMaisBarato = nomeJogo
        maisBarato = precoJogo
    }else if (maisCaro < precoJogo) {
        nomeJogoMaisCaro = nomeJogo
        maisCaro = precoJogo
    }


    totalGastos += precoJogo
    orcamento -= precoJogo
    qtdeJogos++
}

alert(`
Quantidade de Jogos Comprado: ${qtdeJogos}
    Jogo mais caro:
        nome: ${nomeJogoMaisCaro}
        preço: R$ ${maisCaro}
    Jogo mais Barato:
        nome: ${nomeJogoMaisBarato}
        preço: R$ ${maisBarato}
    Total de gastos:
        R$ ${totalGastos}
`)