class pessoa {

    constructor (nome){

    
   this.nome = nome
}



falar () {

    console.log (`meu nome é ${this.nome}`)


}
}

const p1 = new pessoa ('joão')
p1.falar()

const CriarPessoa = nome =>{
return {
falar: () => console.log (`meu nome é ${nome}`)
}
} 


const p2 = CriarPessoa('joão')
p2.falar()


class pessoa2 {


    constructor(nome){
    this.nome = nome
}

falar () {


    console.log (`meu nome é ${this.nome}`)
}
}

const p3 = new pessoa2 ('Mário')

p3.falar()


const p4 = new pessoa2  ('maria') 
p4.falar () 