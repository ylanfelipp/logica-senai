let listaDeNomes = []

function adicionarNomeNaLista(event) {
    debugger
    event.preventDefault()

    const inputNome = document.querySelector('#id_nome').value

    
    if (inputNome !== "" && inputNome  !== " ") {
        listaDeNomes.push(inputNome)
    }

    localStorage.setItem('lista', JSON.stringify(listaDeNomes))
    location.reload()
}


const lista = document.querySelector('.lista-de-nomes')

const listaNomeLocalStorge = localStorage.getItem('lista')

if (listaNomeLocalStorge) {
    listaDeNomes = JSON.parse(localStorage.getItem('lista'))
}

listaDeNomes?.forEach(nome => {
    lista.innerHTML += `<li>${nome}</li>`
})