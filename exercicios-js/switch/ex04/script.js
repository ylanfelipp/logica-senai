let numConta = prompt("Informe o número da conta bancária")
let systemBank = parseInt(prompt("Opções:\n(1) Saldo \n(2) Depósito \n(3) Saque"))
let saldo = 100
numConta = `N° conta bancária: ${numConta}`
switch(systemBank) {
    case 1:
        alert(`Saldo: ${saldo.toFixed(2)}`)
        break
    case 2:
        let deposito = parseFloat(prompt(`${numConta}\nQuando deseja depositar:`))
        saldo += deposito
        alert(`${numConta}\Saldo: R$ ${saldo}\n`)
        break
    case 3:
        let saque = parseFloat(prompt("Qual valor deseja sacar?"))
        if (saque <= saldo) {
            saldo -= saque
        } else {
            alert(`Saldo insuficiente!\nSaldo: R$ ${saldo}`)
            let novoSaque = prompt(`Deseja sacar 100% do seu saldo? \n(1) SIM \n(2) NÂO`)
            if (novoSaque == 1) {
                saque = saldo
                saldo -= saque
            }
        }
        alert(`saque: R$ ${saque}`)
        alert(`saldo: R$ ${saldo}`)
        break
    default:
        alert("Operação inválida!")
}