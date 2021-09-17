//object.preventExtensions
const produto = Object.preventExtensions({

 nome:' qualquer' , preco: 2.00 , tag: 'promoção'


})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome = ' Borracha'

produto.descricao = ' borracha escolar branca '
delete produto.tag

console.log( produto)

// pode se alterar valorez e deletar mas não se pode adicionar

//object.seal

const pessoa = {nome :' juliana' , idade :35}

Object.seal(pessoa)

console.log('Selado:' , Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 43


console.log(pessoa)
// pode alterar valores porem n pode adicionar nem deletar nada
