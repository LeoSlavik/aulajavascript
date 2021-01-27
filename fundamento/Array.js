const valores = [8.7 , 10.5 , 20.99 , 70.36, 12.3]  
console.log (" a soma dos array [0] e [4] é =" , valores [0] + valores [4]) 

console.log ("junção de modos de array") 
valores.push({id: 3 },false , null , undefined , " texto ")
console.log (valores)


const Aclientes = ['joao' , 'lino' , 'alberto' , 'jedson']
const Fornecedor = [ 'alicia' , 'rogério'] 
const leite = 5.50
const alface = 10.35

console.log (Fornecedor[0] , "atendeu" ,Aclientes [0] ,"ele pediu dois leites e um alface.")
console.log ("somando tudo,",Aclientes [0], "deverá pagar ", (leite * 2) + alface, "reais . a" , Fornecedor [0])