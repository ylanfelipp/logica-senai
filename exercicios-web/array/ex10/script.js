/*
    11) Faça um programa que crie um vetor vazio. 
    Esse programa deve perguntar qual opção o usuário 
    deseja (1, 2, 3, 0) e as opções devem executar as 
    tarefas abaixo. Criar as mensagens e a forma de pesquisa 
    / lista, da forma que achar melhor.
    ======== MENU ========
    1- Cadastrar nome
    2- Excluir um nome
    3- Editar um nome
    4- Pesquisar se um nome está cadastrado
    5- Listar todos os nomes cadastrados
    0- Sair do programa
*/

const bancoDeDados = []

let opcao

do {
    opcao = parseInt(prompt(`
        ======== MENU ========
        1 - Cadastrar nome
        2 - Excluir um nome
        3 - Editar um nome
        4 - Pesquisar se um nome está cadastrado
        5 - Listar os nomes cadastrados
        0 - Sair do programa
    `))
    switch(opcao) {
        case 1:
            const nomeCadastrar = prompt("Informe o nome para cadastro:")
            if (nomeCadastrar !== '') {
                bancoDeDados.push(nomeCadastrar)
            } else {
                alert("Nome inválido!")
            }
            break
        case 2:
            const nomeExcluir = prompt("Informe o nome a ser deletado:")
            if (bancoDeDados.includes(nomeExcluir)) {
                let index = bancoDeDados.indexOf(nomeExcluir)
                bancoDeDados.splice(index, 1)
            } else {
                alert("Nome não encontrado!")
            }
            break
        case 3:
            let nomeEditar = prompt("Informe o nome a ser editado:")
            if (bancoDeDados.includes(nomeEditar)) {
                let index = bancoDeDados.indexOf(nomeEditar)
                nomeEditar = prompt("Digite um nome atualizado:")
                bancoDeDados.splice(index, 1, nomeEditar)
            } else {
                alert("Nome não encontrado!")
            }
            break
        case 4:
            
    }


} while(opcao !== 0)