function PontuaçãoDaProva (nota) {

  if (nota >= 7) {

    console.log ('voce esta acima da media,tirando ' + nota, 'parabens !!!')

}
if (nota <= 6.9 ) {

    console.log ('você acabou reprovando com ' + nota , 'pontos :(, Estude Mais para a proxima vez!!')
}


}
PontuaçãoDaProva (8.1)
PontuaçãoDaProva (1.5)


function TestesDeBoolean (valor) {

if (valor) {

    console.log (' é verdadeiro ' + valor)


}
 




}


TestesDeBoolean ()
TestesDeBoolean (null)
TestesDeBoolean (undefined)
TestesDeBoolean (NaN)
TestesDeBoolean ('')
TestesDeBoolean (0) 
TestesDeBoolean (-1)
TestesDeBoolean (' Confia ')
TestesDeBoolean (' ? ')
TestesDeBoolean ([])
TestesDeBoolean ([1, 2])
TestesDeBoolean ({})