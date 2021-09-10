//factory simples 

function criarpessoa () {

    return {

        nome : 'ana',
        Sobrenome: ' Silveira'
    }
}
console.log(criarpessoa())

// factory composta

function criarproduto (nome,preco) {

    return {

        nome,
        preco,
        desconto: preco / 10
        
    }

}

console.log (criarproduto('notebook' , 2100 , ))
console.log (criarproduto('ipad' , 1700 , ))
console.log (criarproduto('Redmi' , 5800 , ))
console.log (criarproduto('Trocado que achei no banco', -1))

// tem q pagar o imposto pra quem viu né kk