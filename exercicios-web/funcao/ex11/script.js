const idades = []

for (let i = 0; i < 5; i++) {
    const idade = parseInt(prompt("Informe sua idade:"))

    if (!isNaN(idade)) {
        idades.push(idade)
    } else {
        i--
    }
}

const todosMaioresDeIdade = idades.every(n => n >= 18)

if (todosMaioresDeIdade) {
    alert("Todos são maiores de idade!")
} else {
    alert("Alguém é menor de idade!")
}