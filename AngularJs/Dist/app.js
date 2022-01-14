var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Help me , Obi_Wan Kenobi. You're are my only hope!";
console.log(message);
/* concatenação natural do ts
let episode:number = 4
episode = "4" // o proprio ts avisa pra você q esse n é a tipagem correta pra ocasião
console.log('this episode is ' + 4)
episode = episode + 1
console.log("next episode is" + episode)
*/
//maneira correta 
var episodeN = 4;
episodeN = 4;
console.log('this episode is ' + 4);
episodeN = episodeN + 1;
console.log("next episode is " + episodeN);
var MyFavDroid;
MyFavDroid = 'BB-8';
MyFavDroid = 10;
MyFavDroid = true;
console.log("My Favorite Droid is " + MyFavDroid);
var IsEnoughtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("is ".concat(distance, " parsecs enough to beat Millenium Falcon? ").concat(IsEnoughtToBeatMF(distance) ? 'yes' : 'no'));
var call = function (name) { return console.log("Do you copy ,".concat(name, "?")); };
call('R2');
//call(1)
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed - inc;
}
console.log("inc (5,1)   = ".concat(inc(5, 1)));
console.log("inc 4) = ".concat(inc(5)));
// aprendendo Classes e Interfaces 
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.JumpIntoHyperspace = function () {
        console.log("Enter in HyperSpace with ".concat(this.propulsor, "  "));
    };
    return Spacecraft;
}());
var ship = new Spacecraft('Hyperdrive');
ship.JumpIntoHyperspace();
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        return _super.call(this, 'hyperdrive') || this;
    }
    MilleniumFalcon.prototype.JumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.JumpIntoHyperspace.call(this);
        }
        else
            console.log('A Millenium Falcon não Entrou no hiper Espaço');
    };
    return MilleniumFalcon;
}(Spacecraft));
var falcon = new MilleniumFalcon();
falcon.JumpIntoHyperspace();
// Aula Extra 
var carro = /** @class */ (function () {
    function carro(CarName, motor) {
        this.CarName = CarName;
        this.motor = motor;
    }
    carro.prototype.CarroEstatistica = function () {
        console.log(" Este ".concat(this.CarName, " possui um motor ").concat(this.motor));
    };
    return carro;
}());
var Corsa = new carro('Corsa', '1.0 8v.');
Corsa.CarroEstatistica();
var FordMustang = new carro('Ford Mustang', ' 6.2 V8 de 483 cv');
FordMustang.CarroEstatistica();
var Camaro = new carro('Camaro', ' 6.2 V8 de 461 cv');
Camaro.CarroEstatistica();
var Caminhao = /** @class */ (function (_super) {
    __extends(Caminhao, _super);
    function Caminhao() {
        return _super.call(this, 'Torpedo L-312', '112cv-SAE seis cilindros com 100 cavalos de Potência') || this;
    }
    Caminhao.prototype.CarroEstatistica = function () {
        console.log("este Caminh\u00E3o(".concat(this.CarName, ") possui um motor ").concat(this.motor));
    };
    return Caminhao;
}(carro));
var Torpedo = new Caminhao;
Torpedo.CarroEstatistica();
// Revisão 
var Vegetal = /** @class */ (function () {
    function Vegetal(LatinName, VegName, VegType, VegCor) {
        this.LatinName = LatinName;
        this.VegName = VegName;
        this.VegType = VegType;
        this.VegCor = VegCor;
    }
    Vegetal.prototype.VegetalCaracteristicas = function () {
        console.log("".concat(this.LatinName, " Mais conhecido como ").concat(this.VegName, " \u00E9 um(a) ").concat(this.VegType, " e sua cor \u00E9 ").concat(this.VegCor));
    };
    return Vegetal;
}());
var Alface = new Vegetal('A Lactuca sativa', 'Herbácea', 'Alface', ' Verde');
Alface.VegetalCaracteristicas();
var Batata = new Vegetal('O Solanum tuberosum', 'Herbácea', 'Batata', ' Castanha');
Batata.VegetalCaracteristicas();
var RepolhoRoxo = new Vegetal('A Brassica oleracea var. capitata f. rubra', 'Herbacea', 'Repolho Roxo', 'Roxa ');
RepolhoRoxo.VegetalCaracteristicas();
