const nota = [6.7 , 10.5 , 8.4 , 9.9]

for (i in nota) {

    console.log (i , nota [i])

}


const pessoa = {

nome: 'Júlio',
peso: 80,
idade : 30,
sobrenome: 'César'

}
for (atributo in pessoa) {


    console.log (`${atributo} = ${pessoa[atributo]}`) 
}