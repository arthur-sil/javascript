let num = [2, 4, 8]
num.push(1)
num.sort()
console.log('o vetor tem '+ num.length +' posições')
console.log(num)
for (let pos= 0; pos<num.length; pos++) {
    console.log('na posicao '+ pos + ' o valor é ' + num[pos])
}
for(let pos in num) {
    console.log(num[pos])
}
let val = num.indexOf(4)
if (val == -1) {
    console.log('valor nao encontrado')
} else {
    console.log('valor encotrado na posicao '+ val)
}