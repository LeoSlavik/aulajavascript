let valor 

console.log (valor) // undefined pois n atribuiu nenhum valor a essa variavel

valor = null 
console.log (valor) // valor ausente  
// se tentar usar comandos ex tostring num valor nulo vai dar error

const produto ={} 
console.log (produto.name) //como produto foi declarado mais seu nome nao, dá undefined  Ex: 
produto.preco = null 

const lanche = {} 
lanche.name = "X burguer"
lanche.preco = 
console.log (produto.preco) 
// delete (produto.preco) tira o valor do objeto
console.log (!!lanche.name)
console.log (lanche)


//De preferencia não usar o Undefined e sim o Null.
