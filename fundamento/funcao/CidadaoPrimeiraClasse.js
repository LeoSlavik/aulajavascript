//função em JS é first class object (citizents)
// ou high order function

//criar de forma literal

function fun1 () {}

// armazenar em 1 variavel

const fun2 = function ( ) {} 

//armazenar em 1 array

const array = [function (a , b ) {return a * b} , fun1 , fun2]


console.log (array [0](1.7724538509055159,1.7724538509055159))

    const obj = {} 
    
 obj.falar = function () {return 'opa'}
 console.log(obj.falar())
     
// passar função como param 


function run (fun) {
    fun ()

}
run (function () {console.log('Executando . . .')})


function soma (a , b ) {

    return function (c)  {

        console.log (' a soma de a + b + c é = ' , a + b + c )
    }
}
soma (3 , 3 ) (6)