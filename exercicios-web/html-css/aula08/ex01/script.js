

function contador() {
    let count = parseInt(localStorage.getItem('contador'))

    if (count) {
        count++
        localStorage.setItem('contador', count)
    } else {
        localStorage.setItem('contador', 1)
    }

    const span = document.querySelector('span')

    span.textContent = localStorage.getItem('contador')
    
}
contador()
setInterval(() => {
    location.reload()
}, 5000)