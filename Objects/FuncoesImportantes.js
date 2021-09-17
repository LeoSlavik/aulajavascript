const pessoa = {

    nome: 'ana',
    idade: 15 ,
    peso: 70
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave ,valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa,'DataNascimento'), {

    writable: false,
    enumerable : true
, valor: '01/10/2010'

}
pessoa.dataNascimento = '01/01/2021'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//object.assign
const dest= {a :1}
const o1 = {b:2}
const o2 = {c :3 , a : 4}
const obj = Object.assign(dest , o1 , o2)


Object.freeze(obj)
obj.c = 1234
console.log(obj)

