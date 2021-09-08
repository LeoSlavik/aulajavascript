function carro (VelocidadeMaxima = 200 , delta = 5) {

    let VelocidadeAtual = 0


// public method
this.acelerar = function () {

    if ( VelocidadeAtual + delta <= VelocidadeMaxima) {
VelocidadeAtual += delta
} else {
    VelocidadeAtual = VelocidadeMaxima
}
}
// metodo publico ( leis suas)
this.GetVelocidadeAtual= function () {
return VelocidadeAtual  

}
}
const Uno = new carro
Uno.acelerar ()
console.log (Uno.GetVelocidadeAtual())


const ferrari = new carro (350 , 20)
ferrari.acelerar()
console.log(ferrari.GetVelocidadeAtual())

console.log (typeof carro)
console.log (typeof ferrari)