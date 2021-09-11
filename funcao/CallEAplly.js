function getpreco (imposto = 0 , moeda = 'R$'){

    return  `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto) }`
}
const produto = {

    nome:'notebook',
    preco: 4589,
    desc:    0.15,
    getpreco

}
global.preco = 20
global.desc = 0.1
console.log(getpreco())
console.log(produto.getpreco())

const carro = {preco:49990, desc:0.20}

console.log(getpreco.apply(carro))
console.log(getpreco.call(carro))


console.log(getpreco.call(carro, 0.17 , "$"))
console.log(getpreco.apply(carro,[0.17, '$']))