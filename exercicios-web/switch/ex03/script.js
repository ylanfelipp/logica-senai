let mounth = parseInt(prompt("Escolha um mês:\n(1)Janeiro\n(2)Fevereiro(3)Março\n(4)Abril\n(5)Maio(6)Junho\n(7)Julho\n(8)Agosto\n(9)Setembro\n(10)Outubro\n(11)Novembro\n(12)Dezembro"))



switch (mounth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("O mês possui 31 dias")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        alert("O mês possui 30 dias")
        break
    case 2:
        alert("O mês possui 28 dias")
        break
    default:
        alert("mês inválido!")
}