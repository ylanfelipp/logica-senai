const listaDePrecos = new Array(80)

const criandoPrecos = () => {
    for (let i = 0; i < listaDePrecos.length; i++) {
        const valor = (Math.random() * 100) + 1
        listaDePrecos[i] = valor
    }
}

criandoPrecos()

const formatacao = (number) => {
    return `R$ ${number.toFixed(2).replace('.', ',')}`
}

const precosMenoresQue50 = listaDePrecos.filter(n => n < 50)
const precosFormatados = precosMenoresQue50.map(n => `R$ ${formatacao(n)}`)


console.log(precosFormatados)