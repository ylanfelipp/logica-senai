/*
    7) Uma sorveteria possui um sistema de self-service de sorvetes no qual
    o cliente pode montar seu sorvete com até 4 bolas (sabores). Criar um programa 
    que simule esse sistema. A montagem do sorvete segue o modelo de estrutura PILHA, 
    onde os sabores são "empilhados" um após o outro e quando algum tiver que ser removido, 
    será sempre o último da pilha.
    1- Adicionar sabor
    2- Remover sabor
    3- Visualizar sorvete
    4- Finalizar pedido
    ======== MENSAGENS e VALIDAÇÕES ========
    Opção 1-> “Sabor adicionado!”   OU   “Limite de sabores atingido, remova um sabor!”
    Opção 2-> “Sabor removido!”   OU   “Não existem sabores adicionados!”
    Opção 3-> “"Camada 1 - Sabor X, Camada 2 - Sabor Y, etc.”   OU   “Seu sorvete não possui sabores!”
    Opção 4-> “Pedido realizado!”   OU   “Adicione pelo menos um sabor!”

    - Criar mensagem de boas vindas e menu funcional.
    - Criar uma lista para a pilha dos sabores.
    - Programar a opção de "Adicionar sabor" corretamente.
    - Programar a opção de "Remover sabor" corretamente.
    - Programar a opção de "Visualizar sorvete" corretamente.
    - Fazer as validações secundárias (lógica).
    - Mostrar mensagens para o usuário (prints).
*/

const sabores = []

// let opcao
let menu
do {
    menu = Number(prompt(`
        Bem-vindo a sorveteria do SENAI!
        Menu:
        1 - Adicionar novo sabor de sorvete;
        2 - Remover sabor de sorvete;
        3 - Visualizar sorvete;
        4 - Finalizar pedido;
    `))

    switch(menu) {
        case 1:
            const saborSorvete = prompt("Qual sabor de sorvete você deseja adicionar?")
            if (sabores.length < 4) {
                sabores.unshift(saborSorvete)
                alert("Sabor adicionado!")
            } else {
                alert("Limite de sabores atingido, remova um sabor!")
            }
            break
        case 2:
            if (sabores.length > 0) {
                sabores.shift()
                alert("Sabor removido!")
            } else {
                alert("Nenhum sabor foi adicionado!")
            }
            break
        case 3:
            if (sabores.length > 0) {
                let camadas = ''
                for (let i = 0; i < sabores.length; i++) {
                    camadas += `\nCamada ${i + 1} - Sabor ${sabores[i]}`
                }

                alert(camadas)
            } else {
                alert("Nenhum sabor foi adicionado!")
            }
            break
        case 4: 
            if (sabores.length === 0) {
                alert("Adicione pelo menos um sabor!")
            } else {
                alert("Pedido realizado!")
                // opcao = menu
            }
            break
        default:
            alert("Opção inválida!")
    }
} while (menu !== 4)