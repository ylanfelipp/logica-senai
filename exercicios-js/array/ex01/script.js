const arrayRandomNums = []

for (let i = 0; i < 25; i++) {
    const randomNums = Math.ceil(Math.random() * 25) 
    arrayRandomNums.push(randomNums)
}

console.log(arrayRandomNums)

const inp1 = document.getElementById('n1')
const inp2 = document.getElementById('n2')

const insertResp = document.querySelector('.insert-resp')
const divArray = document.querySelector('.div-array')

const button = document.querySelector('button')
button.addEventListener('click', e => {
    let n1 = inp1.value
    let n2 = inp2.value
    if (!(n1 >= 0 && n1 <= 24 && n2 >= 0 && n2 <= 24)) {
        inp1.classList.add('border')
        inp2.classList.add('border')
        inp1.value = ""
        inp2.value = ""
    } else {
        inp1.classList.remove('border')
        inp2.classList.remove('border')
    }
    


    if (n1 !== undefined && n2 !== undefined) {
        insertResp.innerHTML = `${arrayRandomNums[n1]} + ${arrayRandomNums[n2]} = ${arrayRandomNums[n1] + arrayRandomNums[n2]}`
    }
})
