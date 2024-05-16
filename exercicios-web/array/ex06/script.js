/*
    4) Em cidades menores, o alistamento para o exército acontece 
    esporadicamente ao longo dos anos. Criar um programa que pergunte 
    ao usuário se houve alistamento dos anos 2010 a 2019, uma pergunta 
    para cada ano. Se houve alistamento deve ser digitado “S” e se não houve 
    alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve 
    alistamento. Caso não tenha ocorrido alistamento, 
    mostrar “Não houve alistamento nos últimos 10 anos”
*/
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