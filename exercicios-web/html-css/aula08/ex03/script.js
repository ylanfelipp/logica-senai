let listaDeNomes = []

const inputNome = document.querySelector('#id_nome') 
inputNome.focus()

function adicionarNomeNaLista(event) {
    event.preventDefault()

    if (inputNome.value !== "" && inputNome.value !== " ") {
        listaDeNomes.push(inputNome.value.trim())
    }

    localStorage.setItem('lista', JSON.stringify(listaDeNomes))
    location.reload() 
}

const lista = document.querySelector('tbody')

const listaNomeLocalStorage = localStorage.getItem('lista')
if (listaNomeLocalStorage) {
    listaDeNomes = JSON.parse(
        listaNomeLocalStorage
    )
}

listaDeNomes.forEach(function(nome, index) {
    lista.innerHTML += `
            <tr>
                <td class="index">${index + 1}</td>
                <td>${nome}</td>
                <td class="delete" onclick="deletarNome(${index})"><i class=" fa-regular fa-trash-can"></i></td>
            </tr>
        `
})

function deletarNome(indexNome) {
    listaDeNomes = listaDeNomes.filter((nome, index) => {
        return index !== indexNome
    })
    localStorage.setItem('lista', JSON.stringify(listaDeNomes))
    location.reload()
}