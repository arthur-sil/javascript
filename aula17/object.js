let amigo = {nome:'jose', sexo:'m', peso: 85 , engordar(p=0){
    this.peso += p
    console.log('voce precisa emagrecer')
}
}
amigo.engordar(2)
console.log('seu peso é ' + amigo.peso +'kg')