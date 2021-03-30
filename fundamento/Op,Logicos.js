/*v e v =  v
v e f = f
f e ? = f

v ou ? = v 
v ou v = v 
f ou ? = ? 
v ou f = v
f ou f = f

f xor f = f
v xor f = v
f xor v = v 
v xor v = f


*/

function compras (trabalho1 , trabalho2) {

  const  comprarsorvete =trabalho1 || trabalho2
  const  comprartv50 = trabalho1 && trabalho2
 // const comprartv32 = !!(trabalho1 ^ trabalho2) 
  const comprartv32 = trabalho1 != trabalho2
  const mantersaudavel = !comprarsorvete
  
  return {comprarsorvete, comprartv32 , comprartv50 , mantersaudavel}
}


console.log (compras( true , true ))
console.log (compras( true , false ))
console.log (compras( false , false ))
console.log (compras( false , true ))