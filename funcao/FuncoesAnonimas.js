const soma = function (x, y) {

 return x + y
}

const ImprimirResultado = function( a, b , operacao = soma) {

console.log (operacao(a, b))

}
ImprimirResultado ( 3, 4)
ImprimirResultado (5, 5 , soma)
ImprimirResultado ( 3, 4 , function (x , y) {

    return  x - y 
 })

 ImprimirResultado( 3,4 ,( x, y) => x * y)


 const pessoa = {

    falar: function () {
console.log ('Opa')
    }
 }

pessoa.falar   () 

 

const divisao = function ( c , d ){

    return c / d


}
 console.log (divisao ( 10 , 2)) // revisão , assim vc consegue ler a function caso esteja com problemas.






 
