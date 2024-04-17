let generoFilme = prompt("Escolha um gênero de filme: \n(1) Comédia\n(2) Drama \n(3) Ação")

switch(generoFilme) {
    case '1':
       alert("The Office") 
       break
    case '2':
        alert("Breaking Bad")
        break
    case '3':
        alert("The Walking Dead")
        break
    default:
        alert("Opção inválida!")
}