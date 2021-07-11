function  MostrarNumeroAleatorio (min, max) {

const valor =  Math.random () * (max - min) + min
  return Math.floor (valor)
    
}
let opcao =0

while (opcao != -1) {

     opcao = MostrarNumeroAleatorio (-1 , 10)
  console.log (`o numero sorteado foi ${opcao}.`)

}

console.log ('Até a proxima')