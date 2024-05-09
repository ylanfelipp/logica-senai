let duracaoFestival = 0
let horas = 0
let minutos = 0
while(true) {
    let musica = prompt("informe o nome da música:")
    
    if (musica === '0') break

    let duracaoMusica = parseInt(prompt("Informe a duração da música (em minutos):"))

    if (duracaoMusica > 0) {
        duracaoFestival += duracaoMusica
    }
}

console.log(duracaoFestival)

horas = parseInt(duracaoFestival / 60)
minutos = duracaoFestival % 60
if (duracaoFestival >= 60) {
    alert(alert(`Tempo total de reprodução das músicas: ${horas} ${horas > 1 ? "hrs" : "hr"} ${minutos} ${minutos > 1 ? "minutos" : "minuto"}`))
} else {
    alert(`Tempo total de reprodução das músicas: ${minutos} ${minutos > 1 ? "minutos" : "minuto"}`)
}