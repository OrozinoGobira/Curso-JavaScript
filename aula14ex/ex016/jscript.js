function contar (){
    var inicio = window.document.getElementById ('txti')
    var fim = window.document.getElementById ('txtf')
    var passo = window.document.getElementById ('txtp')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML=`Impossivel contar`
        alert  (`ERROR, verifique se os numeros são validos`)

    }
    else {
        res.innerHTML = `Contando: <br> `
        var i = Number (inicio.value)
        var f = Number (fim.value)
        var p = Number (passo.value)
        if (p <= 0){
            alert (`Impossivel contar`)
            p = 1
        }
        
        if (i < f){
            //contagem crescente
        for (var c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    } else {
        //contagem regressiva
        for (var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }   
    res.innerHTML +=`\u{1F3C1}`
    }
}
