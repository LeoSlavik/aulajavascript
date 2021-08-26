const fabricantes = ['Mercedes' , 'BMW' , 'Audi']
function imprimir (nome , indice ) {

    console.log (`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach (fabricante => console.log (fabricante)


)
console.log ('\n| Revisão |')


// PIB Mundial (2021)
console.log ('\n Aqui em baixo está o Ranking Dos 10 pais com o  PIB (Produto Interno Bruto) mais elevando atualmente :')

const PaisEPIB = ['\nEstados Unidos' , 'China' , 'Japao' , 'Alemanha' , 'Reino Unido' ,'India' , 'Franca' , 'Italia' , 'Canadá' , 'Coreia Do Sul',]
function Impressao ( Pais , PIB) {

    console.log (`${Pais } está em ${PIB + 1}  Lugar.`)
}

PaisEPIB.forEach (Impressao)





