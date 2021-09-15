const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] = 'genérica'
produto.preco= 220

console.log (produto)

delete produto.preco
delete produto['marca do produto']

console.log (produto)


const carro = {

    modelo :'A4',
    valor: 89000,
    proprietario:{

        nome :'raul',
        idade:56,
        endereco: {

   logradouro : ' Rua ABC',
   numero: 123
  
        }
      },  condutores :[{
nome : 'junior',
idade :20,


        },{

nome :'marcos',
idade : 37


        }],
 CalcularValorSeguro:  function () {
     // ..
 }
    }
    

carro.proprietario.endereco.numero =100
carro['proprietario'] ['endereco'] ['logradouro'] = 'Rua da Canastra'

//console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.CalcularValorSeguro


console.log (carro)
console.log (carro.condutores)
console.log (carro.condutores.length)
