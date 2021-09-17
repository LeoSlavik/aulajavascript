//cadeia de prototypes (chain)


Object.prototype.attr0 = 'D' // não recomendado !!

const avo = {attr1: 'E'}
const pai = {__proto__:avo, attr2: 'U' , attr3: '4'}
const filho = {__proto__:pai, attr3: 'S'}

console.log(filho.attr0,filho.attr1 , filho.attr2, filho.attr3)


const carro = {
    velAtual: 0 ,
    VelMax : 200 ,
    acelerarMais(delta) {

        if (this.velAtual + delta <= this.VelMax) {
            this.velAtual += delta
        } else {(this.velAtual = this.VelMax)
    }


},


status () {

    return `${this.velAtual}km/h de ${this.VelMax}km/h`
},
}

const ferrari = {
    modelo: 'f40',
    VelMax:320 // Shadowing

}


const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo} : ${super.status()}`
   
 }
    
}


Object.setPrototypeOf(ferrari , carro)
Object.setPrototypeOf(volvo , carro)

console.log(volvo)
console.log(ferrari)

volvo.acelerarMais(100  )
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())