Number.prototype.entre = function  (inicio , fim) {


    return this >= inicio &&  this <= fim 
    
    
    
}

const ImprimirResultado = function  (nota) {

 if (nota.entre (9, 10)) {

    console.log ('você está no quadro de honra com ' + nota , ' Pontos.')
 }

 else if (nota.entre(7 , 8 )) {

    console.log ('você está no quadro de Elite com ' + nota , ' Pontos.')

  

}   
else if (nota.entre (5,6)) {

    console.log ('você está no Quadro Mediano com ' + nota , ' Pontos.')

}
else if (nota.entre(.0,4))  {

    console.log ('você está no quadro Inferior com ' + nota , ' Pontos.')

}

else {

    console.log (+ nota ,' e uma nota invalida')
}
console.log (' Fim ')
}

ImprimirResultado (3)
ImprimirResultado (6)
ImprimirResultado (7)
ImprimirResultado (9)
ImprimirResultado (-6)
ImprimirResultado (7405923)



// tem mais pra frente

























/*const Salario = function (Quantidade) {

    if (Quantidade >0 && Quantidade <= 1500){

        console.log ('você recebe um Salário Mínimo')
    }
    else if (Quantidade > 1500 && Quantidade <=5000) {

        console.log ('Você recebe um Salário Rasoável')
    }

  else {

    console.log ('você recebe um salário alto')
  }    
}

    Salario (5500)
    Salario (3000)
    Salario (950)
    */