/*closure é 1 escopo criado quando uma função é declarada
Esse escopo permite a função acessar e manipular diversas variáveis externas a função


*/
 
const x = 'global'

function fora () {

 const x = 'local' 

 function dentro () {

    return x
 }
return dentro
}
const minhafuncao = fora ()
console.log (minhafuncao())