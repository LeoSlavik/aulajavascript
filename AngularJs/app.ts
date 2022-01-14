let message: string = "Help me , Obi_Wan Kenobi. You're are my only hope!" 
console.log (message)

/* concatenação natural do ts
let episode:number = 4 
episode = "4" // o proprio ts avisa pra você q esse n é a tipagem correta pra ocasião
console.log('this episode is ' + 4)
episode = episode + 1
console.log("next episode is" + episode)
*/  
//maneira correta 
let episodeN:number = 4 
episodeN = 4
console.log('this episode is ' + 4)
episodeN = episodeN + 1
console.log("next episode is " + episodeN)

let MyFavDroid  
MyFavDroid = 'BB-8'
MyFavDroid = 10
MyFavDroid = true
console.log("My Favorite Droid is " + MyFavDroid)


let IsEnoughtToBeatMF = function ( parsecs:number ) : boolean {

    return parsecs < 12
}
let distance = 14 

console.log(`is ${distance} parsecs enough to beat Millenium Falcon? ${IsEnoughtToBeatMF(distance) ? 'yes' : 'no'}`) 

let call = (name:String) => console.log(`Do you copy ,${name}?`)
call('R2')
//call(1)

function inc (speed : number,  inc:number = 1 ) : number {

    return speed - inc
}
console.log(`inc (5,1)   = ${inc(5, 1)}`)   
console.log(`inc 4) = ${inc(5)}`) 

// aprendendo Classes e Interfaces 

class Spacecraft {

    constructor(public propulsor: String) {}

    JumpIntoHyperspace() {
        console.log(`Enter in HyperSpace with ${this.propulsor}  `)
    }
}
let ship = new Spacecraft ('Hyperdrive')
ship.JumpIntoHyperspace()


class MilleniumFalcon extends Spacecraft {
    constructor() {
        super('hyperdrive')
    }

   JumpIntoHyperspace() {
 if (Math.random() >= 0.5 ) {

    super.JumpIntoHyperspace ()
 }       else console.log('A Millenium Falcon não Entrou no hiper Espaço')
   }
}

let falcon = new MilleniumFalcon()
falcon.JumpIntoHyperspace()

// Aula Extra 

class carro {

    constructor(public CarName:string , public motor: string  ) {}

     CarroEstatistica() {
      console.log(` Este ${this.CarName} possui um motor ${this.motor}`)    
     }
}

let Corsa = new carro ('Corsa' , '1.0 8v.') 
Corsa.CarroEstatistica ()
let FordMustang = new carro ('Ford Mustang' , ' 6.2 V8 de 483 cv') 
FordMustang.CarroEstatistica ()
let Camaro = new carro ('Camaro' , ' 6.2 V8 de 461 cv') 
Camaro.CarroEstatistica ()

class Caminhao extends carro {


    constructor(){
        super('Torpedo L-312' ,'112cv-SAE seis cilindros com 100 cavalos de Potência') }
        
    CarroEstatistica() {
    console.log(`este Caminhão(${this.CarName}) possui um motor ${this.motor}`)
    }
    }
let Torpedo =  new Caminhao
Torpedo.CarroEstatistica()
// Revisão 

class Vegetal { 

    constructor( public LatinName,public VegName: string, public VegType: string , public VegCor:string, ) {}

      VegetalCaracteristicas (){ console.log(`${this.LatinName} Mais conhecido como ${this.VegName} é um(a) ${this.VegType} e sua cor é ${this.VegCor}`)
}}

let Alface = new Vegetal ('A Lactuca sativa','Herbácea','Alface', ' Verde')
Alface.VegetalCaracteristicas()
let Batata = new Vegetal ('O Solanum tuberosum','Herbácea','Batata', ' Castanha')
Batata.VegetalCaracteristicas()
let RepolhoRoxo = new Vegetal ('A Brassica oleracea var. capitata f. rubra', 'Herbacea','Repolho Roxo','Roxa ')
RepolhoRoxo.VegetalCaracteristicas()
