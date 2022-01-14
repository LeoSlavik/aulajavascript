var Divisao = function (Num1, Num2) {
    if (Num2 === 0) {
        return 'Segundo parâmetro n pode ser zero';
    }
    return Num1 / Num2 & Num1 % Num2;
};
var Multiplicacao = function (Num1, Num2) {
    return Num1 * Num2;
};
var Soma = function (Num1, Num2) {
    return Num1 + Num2;
};
var Subtracao = function (Num1, Num2) {
    return Num1 - Num2;
};
var Exponenciacao = function (Num1, Num2) {
    return Math.pow(Num1, Num2);
};
console.log(Exponenciacao(10, 2));
console.log(Divisao(39, 2));
console.log(Multiplicacao(9, 2));
console.log(Soma(10, 7));
console.log(Subtracao(20, 4));
// Aula extra
