const Ferrari = {

    Modelo: 'F40' ,
    VelMax : 340


}

const volvo = {

    Modelo:'V40' ,
    VelMax:200
}

console.log(Ferrari.__proto__)
console.log(Ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__===null)

function MeuObjeto () {}
console.log(typeof Object, typeof MeuObjeto)
console.log (Object.prototype, MeuObjeto.prototype)