function calculoDeArea(largura, profundidade) {
    return largura * profundidade
}

alert(`
Terreno Padrão: largura: 50m / profundidade: 40m / área: ${calculoDeArea(50, 40)}m²
Terreno Sobrado: largura: 30m / profundidade: 40m / área: ${calculoDeArea(30, 40)}m²
Terreno Mansão: largura: 100m / profundidade: 100m / área: ${calculoDeArea(1000, 1000)}m²
Terreno Comercial: largura: 40m / profundidade: 40m / área: ${calculoDeArea(50, 40)}m²`
)

