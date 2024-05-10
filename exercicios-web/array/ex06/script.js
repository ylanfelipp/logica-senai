const anosAlistamento = []
const anosDeAlistamento = []

for (let i = 2010; i <= 2019; i++) {
    const teveAlistamento = prompt("Esse ano teve alistamento?")

    if (teveAlistamento == "s" || teveAlistamento == "S") {
        anosAlistamento.push(teveAlistamento)
        anosDeAlistamento.push(i)
    } else if (teveAlistamento == "n" || teveAlistamento == "N") {
        anosAlistamento.push(teveAlistamento)
        anosDeAlistamento.push(i)
    } else {
        alert('Resposta inválida!')
        i--
    }
}

if (anosAlistamento.includes("s" || "S")) {
    alert(`Último ano que teve alistamento: ${anosDeAlistamento[anosAlistamento.indexOf("s" || "S")]}`)
} else {
    alert("Não teve alistamento nos últimos 10 anos!")
}