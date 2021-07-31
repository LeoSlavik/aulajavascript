const funcs = [] 

for (let i = 0 ; i < 50; i++) {
     funcs.push(function(){

console.log (i)

     })

 }

 funcs [19] ()
 funcs [43] ()

 /* o fator do let estar apenas sendo efetuado em um bloco, faz com que seja sim pego o valor do array
 e mostrado como o esperado */