const p = document.querySelector('p')

const serieLocalStorage = localStorage.getItem('serie')

if (serieLocalStorage) {
    p.textContent = `Qual outra série você gosta além de ${serieLocalStorage}?`
}

function adicionarSerieFavorita(event) {
    event.preventDefault()
    
    const inputSerie = document.querySelector('#serie_id').value
    
    localStorage.setItem('serie', inputSerie)
    p.textContent = `Qual outra série você gosta além de ${inputSerie}?`
}