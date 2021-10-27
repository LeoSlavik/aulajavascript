let aprovados =  new Array ( ' marcos ' , 'julia' , 'mario')
console.log(aprovados)

aprovados = ['maria' , 'julio', 'Nelson']
console.log(aprovados [0])
console.log(aprovados [1])
console.log(aprovados [2])
console.log(aprovados [3])

aprovados[3] = 'paulo'

console.log(aprovados[3])
aprovados.push('abia')
console.log(aprovados.length) // mostra o tamanho do array

aprovados[15] = 'rafael' 
console.log(aprovados.length)
console.log(aprovados[8]== undefined)

console.log(aprovados)
aprovados.sort() // altera a ordem dos arrays
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])   
console.log(aprovados[2])   
aprovados = ['maria' , 'julio', 'Nelson']

aprovados.splice(1, 1 , 'Elemento1 , Elemento2  ') // exclui de 1 elemento até o outro
console.log(aprovados)