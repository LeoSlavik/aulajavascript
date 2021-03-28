function rand ({min = 0  , max = 1000}) {

    const valor = Math.random () * (max - min) + min 
    return Math.floor (valor)   
}
const obj = { max :50 , min: 40}
console.log (rand (obj))
console.log (rand({min :955}))

// jogo de bingo 

function rand ({min = 0 , max = 100}) {

    const Rbingo =  Math.random () * (max - min)  + min
    return Math.floor (Rbingo)
 }
 const numerobingo = {max : 100 , min : 1}
 console.log ('o numero do bingo foi' ,rand (numerobingo))
