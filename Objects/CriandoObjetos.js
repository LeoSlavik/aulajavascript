// Notação Literal

const obj1 = {}

console.log (obj1)

//object em JS

console.log (typeof Object , typeof new Object)

const obj2 = new Object
console.log (obj2)


//funções construtoras

function produto (nome , preco  , desc) {

    this.nome = nome
    this.getPrecoComDesconto = () => {

        return preco * (1 - desc)
    } 
}

const p1 = new produto ('caneta',7.99 , 0.20)
const p2 = new produto ('notebook', 10000, 0.50)
console.log (p1.getPrecoComDesconto(),p2.getPrecoComDesconto(),)

// função factory

function criarfuncionario( SalarioBase  , nome , Faltas) {

    return {

        SalarioBase,
        nome,
        Faltas, 
  GetSalario() {

    return (SalarioBase / 30) * (30 - Faltas)
  }
    }
}

const F1 = criarfuncionario (7980 ,'joão' , 4)
const f2 = criarfuncionario (11400 , 'Mariana' , 1)

console.log (F1)

console.log(F1.GetSalario(),f2.GetSalario())


// object.create

const filha = Object.create(null)
filha.nome = 'Ana'

console.log(filha)

//um object famoso

    const FromJson = JSON.parse ('{"info":"sou um Json"}')

    console.log(FromJson.info)