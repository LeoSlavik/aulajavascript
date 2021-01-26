const escola = "cod3r"

console.log (escola.charAt(4)) // numeros acima da quantidade de letra
                               // é retornado um valor vazio tambem compartilha a letra equivalente ao numero do parentese
console.log (escola.charCodeAt(3)) //mostra o html do numero
console.log (escola.indexOf ('3')) // mostra o 4 digito começando do 0                               
console.log (escola.substring(1)) //mostra todas as letras depois do 2 caractere começando do 0
console.log ('escola'.concat(escola).concat ("!")) //concatenar palavras
console.log (escola.replace(3 , 'e'))// troca a  letra ou numero pelo caractere dentro do parenteses
                                   // /\w/ serve pra substituir todos os digitos pelo(a) letra ou numero dentro do parenteses
console.log ('ana,maria,junior'.split(',')) //cria um array                                  


const nomedoaluno = "angelo" 
const sobrenome = "freitas"
console.log  (nomedoaluno.charAt(1)) //função = letra inicial do nome do aluno

console.log ("bom dia ".concat(nomedoaluno).concat (" ").concat(sobrenome).concat(" seja bem vindo ao nosso curso!!!"))
