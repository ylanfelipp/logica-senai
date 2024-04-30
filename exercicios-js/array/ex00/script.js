const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

console.log('Adicionando um elemento na última posição...')
diasDaSemana.push('Feriado')
console.log(diasDaSemana)

console.log('Removendo o elemento da última posição...')
diasDaSemana.pop()
console.log(diasDaSemana)

console.log('criando um novo array de números...')
const numerosDe2A20 = []
for (let i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        numerosDe2A20.push(i)
    }
}
console.log(numerosDe2A20)

console.log('substituindo o terceiro elemento por 12')
numerosDe2A20.splice(2, 1, 12)

console.log(numerosDe2A20)

console.log('adicionando elemento na última posição do array')
const frutas = ['banana', 'maçã', 'uva']
frutas.push('morango')
console.log(frutas)

console.log('removendo da último elemento do array')
frutas.pop()

console.log(frutas)

console.log('Array de Amigos')
const amigos = ['Alice', 'Bob', 'Charlie']

const convidados = amigos.concat(['Dave', 'Eva', 'Frank'])

console.log(convidados)

const idadeAmigos = [25, 30, 28, 22, 26, 24]
console.log(idadeAmigos[0] + idadeAmigos[1])

let soma = 0
for (let i = 0; i < idadeAmigos.length; i++) {
    soma += idadeAmigos[i]
}

let media = soma / idadeAmigos.length

console.log(`A média da idade dos meus amigos é ${media.toFixed(2)}`)

console.log('Criando um Array de três elementos...')
const compras = ['Maçãs', 'Pão', 'Leite']

console.log('Adicionando mais dois elementos no array...')
compras.push('Ovos', 'Arroz')
console.log(compras)

console.log('Removendo o terceiro elemento do array...')
compras.splice(2, 1)
console.log(compras)

console.log('verificando se Pão está dentro do array...')

console.log(compras.includes('Pão'))

console.log('Criando um array vazios e adicionando cincos números...')
const numbers = []
numbers.push(1, 3, 5, 7, 9)
console.log(numbers)
console.log('Multiplicando todos os elementos do array por 2...')

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2
}

console.log(numbers)

console.log('Criando um array com nome de algumas cidade e motando frase com duas delas...')
const cidades = ['Florianópolis', 'São Paulo', 'Natal', 'Curitiba', 'Porto Alegre']
console.log(cidades)
console.log(`Adoraria morar em ${cidades[0]} e de vez em quando tirar férias em ${cidades[2]}`)