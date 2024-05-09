let birthYear = parseInt(prompt("Informe o ano de nascimento:"))

switch(true) {
    case birthYear >= 1945 && birthYear <= 1964:
        alert("Geração Baby Boomer")
        break
    case birthYear >= 1965 && birthYear <= 1980:
        alert("Geração X")
        break
    case birthYear >= 1981 && birthYear <= 1996:
        alert("Geração Y")
        break
    case birthYear >= 1997 && birthYear <= 2010:
        alert("Geração Z")
        break
    case birthYear >= 2011:
        alert("Geração Alfa")
        break
    default:
        alert("Sem Geração!")
}