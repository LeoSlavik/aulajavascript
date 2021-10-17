window.num1 = '';
window.num2 = '';
window.operador = '';

function PegaValor(value) {

    
    window.document.getElementById("resultado").value += value;


        window.num2 += value
    }

function Vezes() {
    window.document.getElementById("resultado").value += '*';
    window.operador = '*';
    window.num1 = window.num2;
    window.num2 = ''
}

function mais() {
    window.document.getElementById("resultado").value += '+';
    window.operador = '+';
    window.num1 = window.num2;
    window.num2 = ''
}

function menos() {
    window.document.getElementById("resultado").value += '-';
    window.operador = '-';
    window.num1 = window.num2;
    window.num2 = ''
}

function divisao() {
    window.document.getElementById("resultado").value += '/';
    window.operador = '/';
    window.num1 = window.num2;
    window.num2 = ''
}









function igual() {

    switch (operador) {

  
       case '+' : 
			var resultado = (parseInt(num1)) + (parseInt(num2))
            window.document.getElementById("resultado").value = resultado;
            debugger;	
			window.num2 = resultado.toString();
			window.num1 = '';
            window.operador= '';
        
        break 
        case  '-' :
            var resultado = (parseInt(num1)) - (parseInt(num2))
            window.document.getElementById("resultado").value = resultado;
			
			window.num2 = resultado.toString();
			window.num1 = '';
            window.operador= '';
        break   
      case  '/':
            var resultado = (parseInt(num1)) / (parseInt(num2))
            window.document.getElementById("resultado").value = resultado;
			
			window.num2 = resultado.toString();
			window.num1 = '';
            window.operador= '';
        break
        case '*' :
            var resultado = (parseInt(num1)) * (parseInt(num2))
            window.document.getElementById("resultado").value = resultado;
			
			window.num2 = resultado.toString();
			window.num1 = '';
            window.operador= '';
        break
    }






}