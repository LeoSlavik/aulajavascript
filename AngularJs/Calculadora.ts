
let Divisao = (Num1:number , Num2:number)  => {
if (Num2 === 0 ) { 

  return 'Segundo parâmetro n pode ser zero'

}
return Num1 / Num2 & Num1 % Num2  



}
let Multiplicacao = (Num1:number , Num2:number) => {
    return Num1 * Num2
} 
let Soma = (Num1:number , Num2:number) => {
    return Num1 + Num2
}
let Subtracao = (Num1:number , Num2:number) =>  {


return Num1 - Num2 

}

let Exponenciacao = (Num1:number , Num2:number) => { 
return Num1 ** Num2
}



console.log(Exponenciacao(10,2))
console.log(Divisao(39, 2 ))
console.log(Multiplicacao( 9 , 2 ))
console.log(Soma (10 , 7))
console.log(Subtracao (20 , 4 ))
// Aula extra
