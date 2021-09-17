function Aula (nome,VideoID) {

  this.nome = nome
  this.VideoID = VideoID

}

const aula1 = new Aula (' seja bem vindo' , 123)
const aula2 = new Aula ('Segunda Aula do Dia' ,456)

console.log(aula1,aula2)

// simulando o new

function novo (f, ...params){

    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo (Aula,'Seja bem vindo', 123)
const aula4 = novo (Aula,' Segunda aula do dia', 456)

console.log(aula3, aula4)
