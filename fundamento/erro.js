
function TratarErroELancar(erro) {
    //throw new Error ('...')
   //throw 10 
  //throw true
  throw {

     nome: error.name,
     msg : error.message,
     date : new Date
  }
}
function ImprimirNomeGritado (obj) {
    try {
    console.log (obj.name.toUpperCase() + '!!!' )
}  catch (e) {
    TratarErroELancar(e)
} finally {

    console.log ('final')
}
  }
const obj = {nome: 'roberto'}
ImprimirNomeGritado(obj)