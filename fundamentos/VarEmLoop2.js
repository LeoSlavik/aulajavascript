const funcs = [] 

for (var i = 0 ; i < 10; i++) {
     funcs.push(function(){

console.log (i)

     })

 }

 funcs [1] ()
 funcs [9] ()
 //o fator do escopo de var ser global faz com que os arrays peguem apenas o valor da var depois do laço de repetição
