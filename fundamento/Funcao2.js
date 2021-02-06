//redução de paramentros no Function e atribuindo uma function em uma variável

const Somador = function ( a , b) {

    console.log ( a + b)
}
Somador ( 2 , 3) 
 
// Usando Arrow  

const soma = ( a, b) => {
    return a + b 
}

console.log (soma( 10, 5))

// simplificando ainda mais  
const subtracao = (a , b) => a - b 
console.log (subtracao ( 10 , 5))


//               revisão de Arrow

const divisao = (x , y) => x / y
console.log (divisao( 30 , 15))

//               Multiplicação De Arrow

const Multiplicacao = (F , J) => F * J 
console.log (Multiplicacao(10 , 30))

// Revisão 1  problema da batata palha

function Mercado () {

 var Pnome = "Batata Palha 300g"
 var ppreco = 7.50
 var total = 10.00
 var  troco = total - ppreco
 console.log ("comprei um saco de batata palha por ", ppreco ," , dei ao moço uma nota de " ,total," reais ,ou seja, recebi",troco,"reais de troco" )

}
Mercado ()

