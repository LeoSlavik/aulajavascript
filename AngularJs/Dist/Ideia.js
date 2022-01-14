//Favor, Fazer o calculo em metros
// Calculo de Volume da Area onde será colocado o produto 
var AreaDoQuadrado = function (Base, Altura) {
    return Base * Altura;
};
var VolumeDoCubo = function (Altura, LadoA, LadoB) {
    return AreaDoQuadrado(LadoA, LadoB) * Altura;
};
var VolumeDoLocalCilindrico = function (Pi, Altura, Raio) {
    return Pi * Math.pow(Raio, 2) * Altura;
};
var VolumeDoProdutoCilindrico = function (Pi, Altura, Raio) {
    return Pi * Math.pow(Raio, 2) * Altura;
};
console.log('O Volume Deste produto cilindrico  é ', VolumeDoProdutoCilindrico(Math.PI, 2, 2), 'm³');
console.log('O Volume Desta area cilindrica  é ', VolumeDaAreaCilindrica(3.14, 10, 2), 'm³');
console.log('O Volume Desta area cubica  é ', VolumeAreaDoCubo(5), 'm³');
console.log('O Volume Deste produto  cubico  é ', VolumeDoprodutoDoCubo(1), 'm³');
if (VolumeAreaDoCubo(6) < VolumeDoprodutoDoCubo) {
    console.log('Tamanho insuficiente');
}
else {
    console.log('A quantia de produtos que cabem nessa area são ', VolumeAreaDoCubo(5) / VolumeDoprodutoDoCubo(6), 'produtos');
}
if (VolumeAreaDoCubo < VolumeDoprodutoDoCubo) {
    console.log('Tamanho insuficiente');
}
else {
    (console.log('A quantia de produtos que cabem nessa area são ', VolumeDaAreaCilindrica(3.14, 10, 2) / VolumeDoProdutoCilindrico(3.14, 2, 2), 'produtos'));
}
var Quarto = /** @class */ (function () {
    function Quarto() {
    }
    Quarto.prototype.getparede = function () {
        return AreaDoQuadrado(this.Altura, this.Largura);
    };
    Quarto.prototype.getpiso = function () {
        return AreaDoQuadrado(this.Largura, this.Comprimento);
    };
    return Quarto;
}());
/*   var VaC = function ( Altura:Number)  {
              
       return  AreadaCircunferencia(Math.PI , ) * Altura
       
   }
   let VpC = function ( Altura:Number)  {
          
       return  AreadaCircunferencia * Altura
       
   }*/
