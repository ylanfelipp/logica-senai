const filaPessoas = []

while(filaPessoas.length < 5) {
    const opcao = parseInt(prompt(
        '1 - Entrar pessoa (forme seu nome)' +
        '\n2 - Sair Pessoa'
    ))
    switch(opcao) {
        case 1:
            const nome = prompt("Informe seu nome:")
            filaPessoas.push(nome)
            break
        case 2:
            filaPessoas.shift()
            break
        default:
            alert("Opção inválida")
    }
}

alert(`Orderm da fila: ${filaPessoas}`)