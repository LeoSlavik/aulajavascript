const pessoa ={
 
 saudacao:'bom dia !! ',

falar(){

    console.log (this.saudacao)
}

}

pessoa.falar()

const falar = pessoa.falar
falar ()
//conflito entre paradigmas : programaçao funcional e 00

const FalarDaPessoa =pessoa.falar.bind(pessoa)


FalarDaPessoa()