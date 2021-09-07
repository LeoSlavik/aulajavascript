const notas = [3.5 , 6.6 , 9.0 , 5.1 , 0.0 , 6.9 , 2.6]

//sem callback

let NotasBaixas = []
for (let i in notas) {

    if (notas[i] < 7) {
        NotasBaixas.push(notas[i])
    }
}
console.log(NotasBaixas)

// com callback]

const NotasBaixas2 = notas.filter(function(nota){

    return nota < 7
})
console.log(NotasBaixas2)

const NotasBaixas3 = notas.filter(nota => nota < 7)
console.log (NotasBaixas3)