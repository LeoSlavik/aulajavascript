window.num1 = '';
window.num2 = '';
window.operador = '';

function PegaValor(value) {

    debugger;
    window.document.getElementById("resultado").value += value;

    if (value == '+') {
        window.operador = value;
        window.num1 = window.num2;
        window.num2 = '';
        //window.document.getElementById("resultado").value = num2;
    } else if (value == '-') {
            resultado = window.num1 - window.num2
    } else if (value == '/') {
                resultado = window.num1 / window.num2
    } else if (value == '*') {

                    resultado = window.num1 * window.num2

    } else if (value == '=') {
        if (operador == '+') {
			var resultado = (window.num1 - 0) + (window.num2 - 0)
            window.document.getElementById("resultado").value = resultado;
			
			window.num2 = resultado;
			window.num1 = '';
        } else if (operador == '-') {
            var resultado = (window.num1 - 0) - (window.num2 - 0);
            window.document.getElementById("resultado").value = resultado;
			
			window.num1 = resultado;
			window.num1 = '';
        }
    }
    else {
        window.num2 += value;
    }
}