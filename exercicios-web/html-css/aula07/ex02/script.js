function comprarProduto() {
    const containerCompra = document.querySelector('.container')
    const popup = document.querySelector('.wrapper')

    containerCompra.classList.toggle('destivar')
    popup.classList.toggle('ativar-popup')
}