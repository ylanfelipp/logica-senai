const p = document.querySelector('.contador')
const body = document.querySelector('body')
const aumentar = document.querySelector('.aumentar')
const diminuir = document.querySelector('.diminuir')

let contador = 0

const cores = [
    "#a2d2ff", 
    "#ef476f", 
    "#ffd166", 
    "#25a18e", 
    "#0496ff", 
    "#ada7ff",
    "#4e148c",
    "#ff499e"
]

let ultimaCor
function coresAleatorio() {
    const valor = parseInt(Math.random() * cores.length)
    if (ultimaCor === valor) {
        return coresAleatorio()
    } else {
        ultimaCor = valor
        return valor
    }
}

aumentar.addEventListener('click', e => {
    if (contador < 1000000) {
        contador++
    }
    p.textContent = contador
    body.style.backgroundColor = cores[coresAleatorio()]
})

diminuir.addEventListener('click', e => {
    if (contador > 0) {
        contador--
    }
    p.textContent = contador
    body.style.backgroundColor = cores[coresAleatorio()]
})
