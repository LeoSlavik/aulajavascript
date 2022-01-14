"use strict";
exports.__esModule = true;
exports.Calculos = void 0;
var Calculos = /** @class */ (function () {
    function Calculos() {
    }
    Calculos.prototype.AreaDoQuadrado = function (Base, Altura) {
        return Base * Altura;
    };
    Calculos.prototype.VolumeDoCubo = function (Altura, LadoA, LadoB) {
        return this.AreaDoQuadrado(LadoA, LadoB) * Altura;
    };
    Calculos.prototype.VolumeCilindrico = function (Pi, Altura, Raio) {
        return Pi * Math.pow(Raio, 2) * Altura;
    };
    return Calculos;
}());
exports.Calculos = Calculos;
module.exports = Calculos;
