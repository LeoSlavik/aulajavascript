// pessoa -> 123 -> {...}
const pessoa = {nome: ' joao'}
pessoa.nome = ' marcos'
console.log (pessoa)


// pessoa -> 456 -> {...}
//pessoa = {nome:'ana'}

Object.freeze(pessoa)
    
    pessoa.nome = 'pedro'
    pessoa.end = ' rua ABC '
    delete pessoa.nome 
    console.log(pessoa.nome)
    console.log(pessoa)

    const PessoaCostante = Object.freeze({nome :' julio'})
    console.log(PessoaCostante)

    PessoaCostante.nome = 'Laura'