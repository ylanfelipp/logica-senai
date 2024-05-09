let paisA = 80000
let paisB = 200000

let temp = 0
while(paisA <= paisB) {
    paisA = paisA + parseInt((paisA * (3/100)))
    paisB = paisB + parseInt((paisB * (1.5/100)))

    console.log(`País A: ${paisA} - País B ${paisB}`)

    temp++    
}

console.log(`Levou ${temp} anos`)