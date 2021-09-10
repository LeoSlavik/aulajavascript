const valor = 'global'

function minhafuncao() {

    console.log (valor)


}
function exec () {

    const valor = 'local'
    minhafuncao()


}

exec ()

// o sistema de closer faz com que a função armazene o valor mais próximo dela,
// não importando a distancia