//novo recurso ES2015

const pessoa = {
    nome : 'ana',
    idade: 5 , 
    endereco : { 
        logradouro :'Rua ABC' ,
        numero : 1000
    }
}
// alistar a pessoa em um curso ou algo do genero 
const {nome , idade} = pessoa
console.log (nome , idade)
const { nome : n , idade : i} = pessoa
console.log (n , i)  


/*console.log ("olá qual seu nome ?")

console.log ('meu nome é',nome)

console.log ('qual sua idade ? ')
 
console.log (idade ,'anos')
*/


const {sobrenome , bemHumorada = true} = pessoa
console.log (sobrenome , bemHumorada)

const {endereco : {logradouro, numero, cep} } = pessoa
console.log (logradouro,  numero, cep)

//const {conta : {ag ,num }} = pessoa 
//console .log (ag , num)

