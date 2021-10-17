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

function GetPrecoR (impostoR = 0 , MoedaR ='R$')
 {

    return ` ${MoedaR} ${this.precoR * (1 - this.descR) * ( 1 + impostoR)} `
 }

 const produtoR =  { 

    NomeR:'Mustang',
    precoR: 10000 , 
    descR: 0.15,
    GetPrecoR
 }
 global.precoR = 20
 global.descR = 0.1
 console.log(produtoR.GetPrecoR())