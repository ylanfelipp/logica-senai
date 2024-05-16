/*
    6) Faça um programa em que o usuário digite o nome de 5 produtos
     e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene 
     esses nomes e preços em dois vetores separados. O programa deve calcular 
    e mostrar:

    a) A quantidade de produtos com preço inferior a R$50;
    b) O nome dos produtos com preço de R$50 a R$100;
    c) A média dos preços dos produtos com preço superior a R$100.
*/

const produtos = []

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do produto:")
    let preco = Number(prompt("Digite o preço do produto:"))

    if (nome !== '' && !(isNaN(preco))) {
        produtos.push([nome, preco])
    } else {
        alert("Nome ou preço do produto são inválidos!")
        i--
    }
}

const precoInferiorA50 = []
const precoEntre50E100 = []
const produtosMaiores100 = []

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i][1] < 50) {
        precoInferiorA50.push(produtos[i])
    }

    if (produtos[i][1] >= 50 && produtos[i][1] <= 100) {
        precoEntre50E100.push(produtos[i][0])
    }

    if (produtos[i][1] > 100) {
        produtosMaiores100.push("\n" + produtos[i][1])
    }
}

let soma = 0

for (let i = 0; i < produtosMaiores100.length; i++) {
    soma += produtosMaiores100[i]
}

const media = soma / produtosMaiores100.length

alert(`
    preço inferiores a 50: ${precoInferiorA50.length},
    preço entre R$ 50 e R$ 100: 
    ${precoEntre50E100.length === 0 ? 0 : precoEntre50E100}

    Média de preço dos produtos supeior R$ 100: R$ ${media.toFixed(2).replace('.', ',')}
`)