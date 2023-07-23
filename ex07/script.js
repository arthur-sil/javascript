let num = window.document.querySelector('input#nume')
let select = window.document.querySelector('div#analise')
let valores =[ ]
let res = window.document.querySelector('#res')
function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}
function inlista(n, l) {
    if (l.indexof(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}
function adicionar() {
    if (isnumero(num.value) && !inlista(num.value, select)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text =`valor ${num.value} cadastrado`
        select.appendChild(item)
    }else {
        window.alert('valor invalido ou ja encontrado')
    }
    
}