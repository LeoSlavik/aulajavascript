/*function  MostrarNumeroAleatorio (min, max) {

const valor =  Math.random () * (max - min) + min
  return Math.floor (valor)
    
}
let opcao = 0

while (opcao != -1) {

     opcao = MostrarNumeroAleatorio (-1 , 10)
  console.log (`o numero sorteado foi ${opcao}.`)

}

console.log ('Até a proxima')

*/
function  GanhadorDaRifa (min, max){

const valor2 = Math.random () * (max - min) + min

 return Math.floor(valor2)
}

let NumeroVencedor = 0

while (NumeroVencedor != 1) {

    NumeroVencedor = GanhadorDaRifa (1 , 10) // num vo po cem se não o Pc trava 
    console.log (`o ganhador da rifa foi ${NumeroVencedor}`)
}
console.log (' venha até avenida Brasil Para Receber Teu Premio')