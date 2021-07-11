const ImprimirResultado = function (nota) {

   switch (Math.floor(nota)) {

  case 10:
  case 9 :

  console.log (' quadro de honra')
 break
  case 8:
  case 7 :
    console.log ('quadro da elite')
    break
    case 6:
   case 5:
   console.log ('quadro da Média')
   break
   case 4:
   case 3:
   case 2:
   case 1:        
  console.log ('quadro inferior')

  break
  
  default: 
  console.log ('Nota Inválida')
} 

}

ImprimirResultado(2)
ImprimirResultado(5)
ImprimirResultado(9)
ImprimirResultado(1)
ImprimirResultado(-6)
ImprimirResultado(15)

// tem que lembrar do ''break''
// o while pode substituir o Switch.
